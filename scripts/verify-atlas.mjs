import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseCsv, normalizePlaces, normalizeGeography, visibleAtZoom, placeLabel, MAP_BOUNDS } from '../maps/atlas/place-data.mjs';

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const rows = parseCsv(await read('maps/atlas/data/places.csv'));
const places = normalizePlaces(rows);
const geography = normalizeGeography(parseCsv(await read('maps/atlas/data/geography.csv')));
const evidence = JSON.parse(await read('maps/atlas/data/pleiades-verification.json')).records;
const majorNames = 'Athens Sparta Corinth Argos Olympia Thebes Delphi Chalcis Eretria Larissa Pella Amphipolis Abdera Corcyra Delos Mytilene Chios Samos Ephesus Miletus Phocaea Sardis Halicarnassus Rhodes Abydos Sestos Cyzicus Byzantium'.split(' ');
for (const name of majorNames) {
  const place = places.find(p => p.name_en === name);
  assert.ok(place, `${name} is present`);
  assert.equal(place.level, 1, `${name} belongs at overview level`);
  assert.ok(place.name_grc, `${name} has a Greek display form`);
}
for (const p of places) {
  assert.ok(p.lat >= MAP_BOUNDS[0][0] && p.lat <= MAP_BOUNDS[1][0] && p.lon >= MAP_BOUNDS[0][1] && p.lon <= MAP_BOUNDS[1][1], `${p.en} is within the atlas area`);
  const source = evidence[p.id];
  assert.ok(source, `${p.en} has a verified Pleiades record`);
  assert.ok(Math.abs(p.lat - source.reprPoint[1]) < 1e-7 && Math.abs(p.lon - source.reprPoint[0]) < 1e-7, `${p.en} uses the Pleiades representative coordinates`);
  assert.equal(p.name_grc, p.name_grc.normalize('NFC'), `${p.en} uses normalized Greek Unicode`);
  if (p.name_grc) assert.ok(p.name_source && p.name_status, `${p.en} has name provenance`);
  else assert.ok(p.notes && placeLabel(p, 'gr').endsWith(' †'), `${p.en} explains its Greek fallback`);
}
for (const name of ['Piraeus', 'Marathon', 'Eleusis', 'Salamis', 'Megara']) {
  const place = places.find(p => p.en === name);
  assert.equal(place.level, 2);
  assert.equal(visibleAtZoom(place, 7.75), false);
  assert.equal(visibleAtZoom(place, 8), true);
}
assert.equal(places.find(p => p.en === 'Salamis').id, '580100', 'Salamis uses the settlement rather than the island coordinate');
assert.equal(places.some(p => ['Thessalonica', 'Messene', 'Priene', 'Kos', 'Syracuse', 'Lemnos'].includes(p.en)), false);
const lemnos = geography.find(g => g.name_en === 'Lemnos');
assert.equal(lemnos.type, 'island');
assert.equal(lemnos.level, 1);
assert.equal(lemnos.pleiades_id, '550693');
assert.equal(lemnos.name_grc, 'Λῆμνος');
assert.ok(Number(lemnos.priority) > 0);
const shore = JSON.parse(await read('maps/atlas/terrain/land.geojson'));
function containsPoint(ring, x, y) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
for (const [name, id, greek] of [['Kos', '599581', 'Κῶς'], ['Naxos', '599822', 'Νάξος'], ['Paros', '599868', 'Πάρος'], ['Delos', '599588', 'Δῆλος']]) {
  const island = geography.find(g => g.name_en === name);
  assert.equal(island.pleiades_id, id);
  assert.equal(island.name_grc, greek);
  assert.equal(island.type, 'island');
  const [lon, lat] = evidence[id].reprPoint;
  assert.ok(Math.abs(island.lon - lon) < 1e-7 && Math.abs(island.lat - lat) < 1e-7);
  const outline = shore.geometry.coordinates.find(poly => containsPoint(poly[0], lon, lat));
  assert.ok(outline, `${name} has an actual land polygon`);
  assert.ok(outline[0].length > 50, `${name} retains a detailed coastline`);
}
const terrainSources = JSON.parse(await read('maps/atlas/terrain/sources.json'));
assert.equal(terrainSources.coastline.resolution, 'full');
assert.equal(terrainSources.coastline.level, 1, 'Only physical ocean shorelines are used');
assert.equal(visibleAtZoom({level: 3}, 10.5), false);
assert.equal(visibleAtZoom({level: 3}, 11.5), true);
assert.deepEqual(parseCsv('name,note\r\n"A, B","line one\nline ""two"""\r\n'), [{name: 'A, B', note: 'line one\nline "two"'}]);
assert.throws(() => parseCsv('name,note\nA'), /field count/);
assert.throws(() => parseCsv('name\n"unfinished'), /quote/);
assert.throws(() => normalizePlaces([rows[0], rows[0]]), /duplicate/);
assert.throws(() => normalizePlaces([{...rows[0], level: 4}]), /Invalid/);
const html = await read('maps/atlas/index.html');
const js = await read('maps/atlas/atlas.js');
assert.doesNotMatch(html + js, /tile\.openstreetmap|basemaps\.cartocdn|google\.com\/maps|L\.tileLayer/);
assert.match(html, /type="module" src="atlas.js"/);
assert.match(html, /id="terrain-colors"/);
assert.match(js, /smoothFactor:\.25/);
assert.match(await read('maps.html'), /src="maps\/atlas\/index.html"/);
console.log(`Atlas verified: ${majorNames.length} overview places, ${places.length - majorNames.length} regional places, ${geography.length} geographic labels; all place coordinates match saved Pleiades evidence.`);
