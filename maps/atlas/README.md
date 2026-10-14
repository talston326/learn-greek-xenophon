# Ancient Greece reading atlas

The standalone entry point is `maps/atlas/index.html`. The course's existing
`maps.html` embeds it and links to the full map. Serve the repository over HTTP;
opening the HTML directly as a `file:` URL cannot load the external datasets.
No build step, QGIS session, database, or API key is needed.

## Place data and future additions

**Edit `maps/atlas/data/places.csv`.** This is the authoritative display dataset:
65 curated places, comprising 28 Level 1 and 37 Level 2 entries. One row supplies
both languages and one coordinate pair. The CSV is UTF-8 with polytonic Greek.
The older `maps/source-data/cities.csv` and `places.gpkg` remain untouched as
QGIS experiment inputs; the atlas does not load them.

| Field | Meaning |
| --- | --- |
| `name_en`, `name_grc` | English and Ancient Greek display names; leave Greek blank when unverified |
| `lat`, `lon` | WGS84 Pleiades representative coordinates, rounded to seven decimal places |
| `level` | 1: overview; 2: regional; 3: future local detail |
| `type`, `region` | Place kind and historical geographic region |
| `pleiades_id` | Stable identity and source link; must be unique |
| `precision` | `precise` or `rough`; rough positions use hollow dots |
| `name_source`, `name_status` | Evidence for the displayed Greek form, distinguished from editorial normalization |
| `verified_on`, `notes` | Coordinate-check date and historical/location/name qualifications |
| `description`, `xenophon_ref` | Existing Pleiades summary and optional future passage reference; shown in details |
| `aliases` | Pipe-separated dated ancient romanizations used by search |

To add a city:

1. Identify its **ancient settlement** in [Pleiades](https://pleiades.stoa.org/),
   distinguishing settlements from same-named islands, regions and later sites.
2. Fetch its published JSON (`https://pleiades.stoa.org/places/ID/json`). Check
   `reprPoint` (longitude first, latitude second), identity, locations and names.
   A broad Classical-period date alone does not prove a fifth-century location.
3. Add a CSV row with the appropriate level. Use a documented Classical Greek
   nominative form; retain an attested dialectal variant when appropriate.
   Record editorial choices or leave uncertain Greek blank.
4. Add the checked record to `data/pleiades-verification.json`: ID, title, source
   URL, check date, original `reprPoint`, relevant names, and location precision.
   This small source snapshot lets the verifier check every coordinate offline.
5. Run `npm run verify:atlas`, reload the atlas, and inspect the region in both
   languages. **No JavaScript city list, image, or QGIS edit is required.**

To change visibility, edit only the row's `level`. Mantineia, Nemea and Epidaurus
already have Level 2 rows. The reusable CSV parser, normalization functions,
label helper and visibility rules are in `place-data.mjs`; they do not depend
on Leaflet or terrain and can serve a future Ten Thousand route map.

## Zoom and language behavior

Leaflet 1.9.4 is served locally from `vendor/`, retaining its BSD license.
The existing search, accent-insensitive matching, scale bar, regional shortcuts,
place details, print control, saved view links, language preference, optional
Classical region overlay, and WebMCP search/selection actions are preserved.
The mobile explorer now has a visible close button and Escape support.

| Level | Visibility threshold | Intended use |
| --- | --- | --- |
| 1 | Zoom 5 and above | Important overview places |
| 2 | Zoom 8 and above | Regional detail, including all five requested Attica places |
| 3 | Zoom 11.5 and above | Future dedicated city maps; currently unpopulated and beyond this atlas's maximum |

Thresholds are centralized in `LEVEL_ZOOMS` in `place-data.mjs`. “More labels”
reduces label spacing without bringing Level 2 into the overview. Circles stay
approximately 3 pixels for overview places and 2.6 pixels for regional places;
selection uses a 5-pixel circle and an outer selection ring. Screen-space
collision checks suppress crowded labels while retaining their selectable dots.
Some overview names, notably adjacent Chalcis/Eretria, need closer zoom on
smaller screens. Additional label placements keep the requested Attica labels
readable on a 390-pixel viewport.

The maximum zoom is **10.5**, with quarter-step smooth zoom and panning. Minimum
zoom is at least 5 and increases with viewport size to fit the focused bounds.
`maxBounds` is 33.8–42.4° N, 17.5–31.5° E, `maxBoundsViscosity` is 1, and world
wrapping is disabled. On portrait screens the complete overview necessarily has
extra space above and below the Greek world; Leaflet clamps movement around the
focused area, including when the viewport is larger than its bounds.

English → Greek → English updates both rendered label layers immediately,
without reload or coordinate changes. Search accepts either language. Missing
Greek remains English with **†**, explained in details. The optional “Only
places with Greek names” filter still applies to places.

## Geographic labels

Edit **`data/geography.csv`** for regions, islands, seas and straits. These use a
separate Leaflet canvas layer with **no point markers**. Regions use unobtrusive
larger type; water uses italic type. The dataset supplies bilingual names,
type, level, minimum/maximum zoom, and a numeric label priority. Lemnos has a
high priority so it remains labelled at overview scale on desktop and mobile.
The 25-feature dataset also includes **Kos/Cos, Naxos, Paros and Delos**.
Kos, Naxos and Paros appear from zoom 7, with priority over adjacent city labels;
Delos's existing place label identifies it at broad scales. Its island label is
eligible from 9.75, with duplicate nearby place/island text suppressed.
Cities generally receive precedence over other geographic labels.

Label coordinates are **editorial cartographic anchors**, deliberately distinct
from surveyed settlement coordinates. Most geographic features have Pleiades
IDs; Achaea, Thessaly and Hellespont currently have conventional names and
editorial anchors without a resolved ID. Detailed regional labels appear when
there is room. The existing optional 32-area `classical-regions.geojson` overlay
remains off by default and explicitly represents approximate geographic areas
over 480–323 BCE, rather than political borders at one fifth-century date.

## Physical basemap

The basemap uses physical geography only, with no roads, modern place names or
political boundary layers. **Terrain colors** switches between **Beige relief**
and **Natural land colors**, and saves the choice locally.

- `terrain/land.geojson`: **GSHHG 2.3.7 full-resolution ocean shorelines**,
  cropped to 32–44° N, 12–33° E and simplified at 0.0002° (about 22 m of latitude).
  It retains 204,720 vertices across 2,895 land polygons, including Delos.
  The former coarse Natural Earth geometry omitted Delos and left larger islands
  visibly angular. Rendering simplifies only below a quarter of a screen pixel;
  finer shoreline detail reappears as you zoom, including Delos's outline.
- `terrain/beige-relief.webp`: derived from the preserved 2200 × 1602 Mercator
  `overview.png`. Its raster sea mask is removed so the detailed vector coastline
  controls the visible edge at every scale. Beige overview relief stops at 8.25.
- `terrain/natural-colors.webp`: locally served Mercator land-color field from
  **Natural Earth I land cover 3.2.0**, at 4096 × 2982. Colors represent broad
  modern satellite-derived vegetation and dry ground, not reconstructed ancient
  forests or exact land-use boundaries. Coarse raster water pixels extend nearby
  land colors before the detailed coastline masks the image; small islands remain
  visible without white raster steps. Color saturation is increased modestly.
- Regional relief: [Mapzen Terrarium elevation tiles on AWS](https://registry.opendata.aws/terrain-tiles/)
  at zoom 7 and above. Elevation is decoded as
  `R * 256 + G + B / 256 - 32768` and shaded with northwest light. The active color
  field is modulated by elevation shading and masked by the same detailed coast.
  Canvas tiles use Web Mercator XYZ coordinates, no wrapping, and focused bounds.
  Native tile zoom reaches 11, including at fractional UI zoom 10.5; layer limits
  allow Leaflet's rounded tile zoom while the map itself stops at 10.5.

The two color fields are locally served and vector-masked at each tile zoom.
Natural colors remain available when online elevation fails or relief is hidden;
close beige views fall back to sharp coastlines and plain land. **Close relief
requires connectivity.** Failed requests cancel after 12 seconds; reconnecting
redraws terrain. Polygon bounding boxes, tile clipping and simplification below
a quarter of a pixel avoid drawing irrelevant or invisible shoreline vertices.
There is no commercial basemap or QGIS requirement.

Source URLs, versions, hashes, bounds and processing choices are in
`terrain/sources.json`. To regenerate with Python, Pillow, NumPy, SciPy and Shapely:

```sh
python scripts/generate-atlas-terrain.py --shorelines /path/to/gshhs_f.b --land-cover /path/to/NE1_HR_LC.tif
```

Extract those two source files from the downloads recorded in `sources.json`.
Keep `overview.png`, which supplies the existing beige relief. The source archives
are not bundled; the cropped browser assets and reproducible generator are.
[GSHHG](https://www.soest.hawaii.edu/wessel/gshhg/) is credited to Wessel and Smith
and distributed under LGPL-3.0-or-later; its supplied license and readme are in
`terrain/GSHHG-*`. [Natural Earth I](https://www.naturalearthdata.com/downloads/10m-raster-data/10m-natural-earth-1/)
is public domain. The terrain provider's
[full credits](https://github.com/tilezen/joerd/blob/master/docs/attribution.md)
and Pleiades CC BY 3.0 credits remain in the atlas.

The original `ancient-greece-map.qgz`, Natural Earth 10m shapefiles, experimental
city CSV and QGIS PNG/world file are preserved. The legacy `maps.js` OSM prototype
is inactive. Detailed **modern** shores remain a physical approximation; silting
and ancient harbours, particularly Pella, Ephesus, Miletus and Thermopylae, require
historical interpretation.

## Historical decisions and review

- All 28 requested **settlement/site** Level 1 entries are included. **Lemnos**
  is the requested overview island label, not an invented city. Myrina and
  Hephaistia on Lemnos are Level 2 places.
- Chios and Samos have distinct settlement and geographic identities. Salamis
  now uses settlement **580100**, replacing the old island point **580101**.
- Amphipolis belongs to the later century (foundation 437 BCE). Rhodes city
  represents the unified city founded in 408/407 BCE, not the early century.
  Pella is a fifth-century settlement; avoid implying that its royal-capital
  role was constant throughout the century. These qualifications are in details.
- Thessalonica is excluded. The later city of Messene is excluded, while
  **Messenia remains a geographic region**. The old Priene point is withheld
  pending resolution of its fifth-century location. The old Kos city point is
  withheld pending a specific fifth-century Kos Meropis location review; the **island of Kos/Cos is included** as a separate geographical label.
- Lefkandi's Early Iron Age site is not used as a fifth-century city. Syracuse
  and the Sicily jump are outside this focused primary extent; the separate
  Sicily reference map in the course library is retained.
- The former 2,982-entry embedded gazetteer covered the broader Classical period
  and is replaced by this curated teaching set. Appropriate existing priority
  places were retained; this is not an exhaustive Thucydides/Xenophon concordance.
- Greek forms withheld pending review: **Cleonae (Athos) and Myrina**. Their place coordinates and identities are verified; their missing
  Greek forms are not invented. Editorial display forms are marked in
  `name_status`/`notes`; see the CSV for the complete review inventory.
- Display spelling corrections include **Κύζικος**, **Μήθυμνα**, **Φλειοῦς** and
  **Ἡφαιστία**, avoiding a double accent, an ethnic plural, a regional name, and
  a dialectal plural respectively. Independent lexical/textual sources are
  linked in each relevant row. Greek names are display choices, not claims of
  a particular textual spelling in every author.

Primary authority: [Pleiades JSON and downloads](https://pleiades.stoa.org/downloads).
The snapshot records identities, representative coordinates and published names
checked on **30 September 2026**. This confirms map placement, not archaeological
survey accuracy. Independently checked name sources include Perseus/Scaife
entries for [Abdera](https://vocab.perseus.org/lemma/46/),
[Cyzicus](https://atlas.perseus.tufts.edu/dictionaries/entry/urn%3Acite2%3Ascaife-viewer%3Adictionaries.v1%3Alsj-n60568/),
[Phlius](https://vocab.perseus.org/lemma/89664/), and
[Methymna in Hellenica 1.6.38](https://vocab.perseus.org/word-list/urn%3Acts%3AgreekLit%3Atlg0032.tlg001.perseus-grc2%3A1.6.38/?o=3&page=all).

## Verification

Run `npm run verify:atlas` for required places, provenance/coordinate equality,
Greek Unicode, levels, parser validation, geography separation and active
basemap checks. Serve the repository (`python3 -m http.server 8765`) and run
`node scripts/verify-atlas-browser.mjs` with Playwright and a Chromium browser.
`ATLAS_PLAYWRIGHT_MODULE`, `ATLAS_CHROME_PATH`, `ATLAS_URL` and `ATLAS_QA_OUTPUT`
can point to an existing runtime, browser, server and screenshot directory.

The browser checks exercise desktop 1440 × 1000, tablet 1024 × 768 and mobile
390 × 844: all overview points, Lemnos, Attica labels, English/Greek/English at
multiple zooms, Kos/Naxos/Paros labels, Delos at maximum zoom, both terrain
styles, saved color preference, live terrain, place details, limits, and a
blocked-terrain fallback with locally available natural colors. Screenshot inspection complements the assertions. Existing static
course verification scripts also run; unrelated database-writing notebook tests
are outside this static-map change.
