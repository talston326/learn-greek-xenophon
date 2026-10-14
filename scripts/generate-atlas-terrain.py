"""Generate physical atlas assets. Requires Pillow, NumPy, SciPy and Shapely.

Usage: python scripts/generate-atlas-terrain.py --shorelines gshhs_f.b
       --land-cover NE1_HR_LC.tif
Sources and licenses are recorded in maps/atlas/terrain/sources.json.
Only GSHHG level 1 (ocean shoreline) is read; no roads or political data.
"""
import argparse
import hashlib
import json
import math
import struct
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance
from scipy.ndimage import distance_transform_edt, map_coordinates
from shapely import make_valid
from shapely.geometry import Polygon, box, mapping

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'maps/atlas/terrain'
BOUNDS = (12, 32, 33, 44)  # lon min, lat min, lon max, lat max; padding around focused map


def coast(path):
    extent = box(*BOUNDS)
    polygons = []
    with open(path, 'rb') as source:
        while header := source.read(44):
            ident, n, flag, west, east, south, north, *_ = struct.unpack('>11i', header)
            if flag & 255 != 1 or east / 1e6 < BOUNDS[0] or west / 1e6 > BOUNDS[2] or north / 1e6 < BOUNDS[1] or south / 1e6 > BOUNDS[3]:
                source.seek(n * 8, 1)
                continue
            points = [(x / 1e6 if x <= 180000000 else x / 1e6 - 360, y / 1e6)
                      for x, y in struct.iter_unpack('>2i', source.read(n * 8))]
            shape = make_valid(Polygon(points)).intersection(extent).simplify(.0002, preserve_topology=True)
            parts = [shape] if shape.geom_type == 'Polygon' else getattr(shape, 'geoms', [])
            polygons.extend(mapping(p)['coordinates'] for p in parts if p.geom_type == 'Polygon' and not p.is_empty)
    coordinates = [[[[round(x, 6), round(y, 6)] for x, y in ring] for ring in poly] for poly in polygons]
    result = {'type': 'Feature', 'properties': {'source': 'GSHHG 2.3.7 full resolution, ocean shorelines', 'simplification_degrees': .0002},
              'geometry': {'type': 'MultiPolygon', 'coordinates': coordinates}}
    (OUT / 'land.geojson').write_text(json.dumps(result, separators=(',', ':')) + '\n')
    return sum(len(r) for p in coordinates for r in p), len(coordinates)


def mercator(lat):
    return math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))


def colors(path):
    Image.MAX_IMAGE_PIXELS = None
    source = Image.open(path).convert('RGB')
    west, south, east, north = BOUNDS
    w, h = source.size
    left, top = round((west + 180) / 360 * w), round((90 - north) / 180 * h)
    pixels = np.asarray(source.crop((left, top, round((east + 180) / 360 * w), round((90 - south) / 180 * h)))).copy()
    # Natural Earth's raster water mask is coarser than the vector coast. Extend
    # nearby land colors across its white water pixels, then use the exact vector
    # mask in the browser. This prevents white steps/fringes and restores tiny islands.
    water = np.all(pixels >= 250, axis=2)
    nearest = distance_transform_edt(water, return_distances=False, return_indices=True)
    pixels[water] = pixels[tuple(nearest[:, water])]
    width = 4096
    height = round(width * (mercator(north) - mercator(south)) / math.radians(east - west))
    latitudes = np.degrees(2 * np.arctan(np.exp(np.linspace(mercator(north), mercator(south), height))) - math.pi / 2)
    rows = (90 - latitudes) / 180 * h - top - .5
    cols = np.linspace(0, pixels.shape[1] - 1, width)
    yy, xx = np.meshgrid(rows, cols, indexing='ij')
    result = np.stack([map_coordinates(pixels[:, :, channel], [yy, xx], order=1, mode='nearest') for channel in range(3)], axis=2)
    image = ImageEnhance.Color(Image.fromarray(result)).enhance(1.35)
    image.save(OUT / 'natural-colors.webp', quality=90, method=6)
    return [width, height]


def beige():
    pixels = np.asarray(Image.open(OUT / 'overview.png').convert('RGB')).copy()
    water = (pixels[:, :, 1] > pixels[:, :, 0]) & (pixels[:, :, 2] >= pixels[:, :, 1])
    nearest = distance_transform_edt(water, return_distances=False, return_indices=True)
    pixels[water] = pixels[tuple(nearest[:, water])]
    Image.fromarray(pixels).save(OUT / 'beige-relief.webp', quality=90, method=6)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--shorelines', required=True, type=Path)
    parser.add_argument('--land-cover', required=True, type=Path)
    args = parser.parse_args()
    OUT.mkdir(exist_ok=True)
    points, islands = coast(args.shorelines)
    size = colors(args.land_cover)
    beige()
    metadata = {
        'generated_on': '2026-09-30', 'bounds': [[32, 12], [44, 33]],
        'coastline': {'source': 'GSHHG', 'version': '2.3.7', 'resolution': 'full', 'level': 1,
                     'url': 'https://www.soest.hawaii.edu/wessel/gshhg/', 'license': 'LGPL-3.0-or-later',
                     'download': 'https://www.soest.hawaii.edu/pwessel/gshhg/gshhg-bin-2.3.7.zip',
                     'sha256': hashlib.sha256(args.shorelines.read_bytes()).hexdigest(),
                     'simplification_degrees': .0002, 'points': points, 'polygons': islands},
        'colors': {'source': 'Natural Earth I land cover', 'version': '3.2.0', 'license': 'public domain',
                   'url': 'https://www.naturalearthdata.com/downloads/10m-raster-data/10m-natural-earth-1/',
                   'download': 'https://naciscdn.org/naturalearth/10m/raster/NE1_HR_LC.zip',
                   'sha256': hashlib.sha256(args.land_cover.read_bytes()).hexdigest(), 'size': size,
                   'note': 'Modern satellite-derived land-cover colors; broad context, not ancient vegetation or parcel boundaries. Raster water pixels extend nearby land colors before exact shoreline masking.'}}
    (OUT / 'sources.json').write_text(json.dumps(metadata, indent=2) + '\n')
    print(f'{islands} land polygons, {points} shoreline points; natural color image {size}')
