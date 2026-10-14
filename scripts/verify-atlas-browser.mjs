import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.ATLAS_PLAYWRIGHT_MODULE || 'playwright');
const url = process.env.ATLAS_URL || 'http://127.0.0.1:8765/maps/atlas/index.html';
const output = process.env.ATLAS_QA_OUTPUT || '/tmp/xenophon-atlas-qa';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.ATLAS_CHROME_PATH ? { executablePath: process.env.ATLAS_CHROME_PATH } : {}) });
const attica = ['Piraeus', 'Marathon', 'Eleusis', 'Salamis', 'Megara'];
// Wait for all visible color tiles and their Leaflet fade before screenshots.
const colorTilesReady = () => {
  const tiles = Object.values(ATLAS.naturalTerrain._tiles || {}).filter(t => t.current);
  return tiles.length && tiles.every(t => t.loaded && Number(t.el.style.opacity) === 1);
};
const colorPixel = ([lat, lon]) => {
  for (const t of Object.values(ATLAS.naturalTerrain._tiles || {}).filter(t => t.current)) {
    const p = L.CRS.EPSG3857.latLngToPoint(L.latLng(lat, lon), t.coords.z);
    const x = Math.floor(p.x - t.coords.x * 256), y = Math.floor(p.y - t.coords.y * 256);
    if (x >= 0 && x < 256 && y >= 0 && y < 256) return [...t.el.getContext('2d').getImageData(x,y,1,1).data];
  }
  return null;
};
try {
  for (const [name, width, height] of [['desktop', 1440, 1000], ['tablet', 1024, 768], ['mobile', 390, 844]]) {
    const context = await browser.newContext({ viewport: {width, height}, hasTouch: name !== 'desktop', isMobile: name === 'mobile' });
    const page = await context.newPage(), errors = [], requests = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('request', r => requests.push(r.url()));
    await page.goto(url);
    await page.waitForFunction(() => window.ATLAS);
    const overview = await page.evaluate(() => ({
      places: ATLAS.getDrawn().map(d => ({name: d.p.en, level: d.p.level})),
      geo: ATLAS.getGeographicLabels().map(d => d.text),
      overflow: document.documentElement.scrollWidth > innerWidth
    }));
    assert.equal(overview.places.length, 28, `${name}: every Level 1 point is in the home view`);
    assert.ok(overview.places.every(p => p.level === 1), `${name}: regional places are hidden`);
    assert.ok(overview.geo.includes('Lemnos'), `${name}: Lemnos is labelled`);
    assert.equal(overview.overflow, false);
    await page.getByRole('button', {name: 'Ἑλληνικά', exact: true}).click();
    assert.ok(await page.evaluate(() => ATLAS.getGeographicLabels().some(d => d.text === 'Λῆμνος')));
    assert.ok(await page.evaluate(() => ATLAS.getDrawn().every(d => d.text === d.p.name_grc)));
    await page.screenshot({path: `${output}/${name}-overview-greek.png`});
    await page.getByRole('button', {name: 'English', exact: true}).click();
    assert.ok(await page.evaluate(() => ATLAS.getDrawn().every(d => d.text === d.p.name_en)));
    await page.screenshot({path: `${output}/${name}-overview-english.png`});
    if (name === 'mobile') await page.getByRole('button', {name: '☰ Explore'}).click();
    await page.getByRole('button', {name: 'Attica', exact: true}).click();
    // Await actual elevation rendering before visual checks; no raster is enlarged at this zoom.
    await page.waitForFunction(() => Object.values(ATLAS.terrain._tiles || {}).some(t => t.current && t.el.dataset.terrain === 'detail'), {timeout: 20000});
    const regional = await page.evaluate(() => ATLAS.getDrawn().map(d => ({name: d.p.en, label: !!d.label})));
    for (const city of attica) assert.ok(regional.some(d => d.name === city && d.label), `${name}: ${city} is labelled in Attica`);
    for (const language of ['gr', 'en']) {
      await page.getByRole('button', {name: language === 'gr' ? 'Ἑλληνικά' : 'English', exact: true}).click();
      assert.ok(await page.evaluate(language => ATLAS.getDrawn().every(d => d.text === (language === 'gr' ? d.p.name_grc : d.p.name_en)), language));
      await page.screenshot({path: `${output}/${name}-attica-${language}.png`});
    }
    // Island labels in both languages, and detailed terrain at the fractional
    // maximum zoom (Leaflet rounds tile zoom 10.5 to 11).
    for (const [island, lat, lon, greek] of [['Kos',36.8228954,27.1373828,'Κῶς'], ['Naxos',37.0581903,25.4819305,'Νάξος'], ['Paros',37.0637201,25.1981286,'Πάρος']]) {
      await page.evaluate(([lat, lon]) => { ATLAS.map.setView([lat,lon],8.25,{animate:false}); }, [lat,lon]);
      assert.ok(await page.evaluate(island => ATLAS.getGeographicLabels().some(d => d.text === island), island), `${name}: ${island} island label`);
      await page.evaluate(() => ATLAS.setLanguage('gr'));
      assert.ok(await page.evaluate(greek => ATLAS.getGeographicLabels().some(d => d.text === greek), greek));
      await page.evaluate(() => ATLAS.setLanguage('en'));
    }
    if (name === 'mobile') await page.getByRole('button', {name: '☰ Explore'}).click();
    await page.locator('#terrain-colors').selectOption('natural');
    if (name === 'mobile') await page.getByRole('button', {name: 'Close explorer'}).click();
    await page.evaluate(() => { ATLAS.map.setView([37.394,25.27],10.5,{animate:false}); });
    await page.waitForFunction(colorTilesReady);
    await page.waitForFunction(() => {
      const tiles = Object.values(ATLAS.terrain._tiles || {}).filter(t => t.current);
      return tiles.length && tiles.every(t => t.loaded && ['detail','fallback'].includes(t.el.dataset.terrain) && Number(t.el.style.opacity) === 1);
    });
    assert.equal(await page.evaluate(() => ATLAS.getTerrainStyle()), 'natural');
    assert.equal((await page.evaluate(colorPixel,[37.38,25.31]))[3], 0, 'Open water remains transparent, including tiles with no land');
    assert.ok((await page.evaluate(colorPixel,[37.3920222,25.2702389]))[3] > 240, 'Delos is colored land');
    await page.screenshot({path: `${output}/${name}-delos-natural.png`});
    console.log(`${name}: island labels and close natural terrain passed; checking saved preference.`);
    await page.reload();
    await page.waitForFunction(() => window.ATLAS);
    assert.equal(await page.evaluate(() => ATLAS.getTerrainStyle()), 'natural', 'Terrain color preference survives reload');
    await page.evaluate(() => { ATLAS.setTerrainStyle('beige'); ATLAS.home('attica'); });
    console.log(`${name}: saved preference passed; checking navigation limits.`);
    // Check zoom thresholds on either side, including language changes at intermediate scale.
    for (const zoom of [7.75, 8, 8.25, 10.5]) {
      await page.evaluate(zoom => { ATLAS.map.setZoom(zoom, {animate: false}); }, zoom);
      await page.waitForTimeout(100);
      const data = await page.evaluate(() => ATLAS.getDrawn().map(d => ({level: d.p.level, radius: d.r})));
      assert.ok(data.every(d => zoom < 8 ? d.level === 1 : d.level <= 2));
      assert.ok(data.every(d => d.radius <= 5), `${name}: circles remain small`);
      await page.evaluate(() => ATLAS.setLanguage('gr'));
      await page.evaluate(() => ATLAS.setLanguage('en'));
    }
    await page.evaluate(() => { ATLAS.home('attica'); ATLAS.choose(ATLAS.places.find(p => p.en === 'Piraeus')); });
    assert.match(await page.locator('#detail').innerText(), /Piraeus/);
    assert.match(await page.locator('#detail').innerText(), /Πειραιεύς/);
    assert.equal(await page.locator('#detail a').first().getAttribute('href'), 'https://pleiades.stoa.org/places/580062');
    await page.locator('#close-detail').click();
    if (name === 'mobile') await page.getByRole('button', {name: 'Close explorer'}).click();
    await page.evaluate(() => { ATLAS.map.panTo([70, 140], {animate: false}); });
    await page.waitForTimeout(300);
    assert.ok(await page.evaluate(() => ATLAS.map.options.maxBounds.contains(ATLAS.map.getCenter())), `${name}: distant panning is clamped`);
    await page.evaluate(() => { ATLAS.map.setZoom(100, {animate: false}); });
    assert.equal(await page.evaluate(() => ATLAS.map.getZoom()), 10.5);
    await page.evaluate(() => { ATLAS.map.setZoom(-100, {animate: false}); });
    assert.equal(await page.evaluate(() => ATLAS.map.getZoom()), await page.evaluate(() => ATLAS.map.getMinZoom()));
    assert.ok(requests.filter(r => r.startsWith('http') && !r.startsWith(new URL(url).origin)).every(r => r.startsWith('https://s3.amazonaws.com/elevation-tiles-prod/terrarium/')), 'Only unlabelled elevation tiles are requested externally');
    assert.deepEqual(errors, []);
    console.log(`${name}: overview, Lemnos, Attica labels, bilingual switching, small markers, details, bounds, zoom and terrain passed.`);
    await context.close();
  }
  // A fresh browser context prevents cached terrain from concealing a real failure.
  const offline = await browser.newContext({viewport: {width: 1440, height: 1000}});
  const page = await offline.newPage();
  await page.route('https://s3.amazonaws.com/**', r => r.abort());
  await page.goto(url);
  await page.waitForFunction(() => window.ATLAS);
  await page.getByRole('button', {name: 'Attica', exact: true}).click();
  await page.waitForFunction(() => document.getElementById('terrain-status').textContent.includes('physical coastline'));
  assert.equal(await page.locator('.leaflet-image-layer').count(), 0, 'Unavailable detail does not magnify the overview raster');
  assert.ok(await page.evaluate(() => ATLAS.getDrawn().some(d => d.p.en === 'Piraeus')));
  await page.screenshot({path: `${output}/terrain-fallback.png`});
  await page.locator('#terrain-colors').selectOption('natural');
  await page.waitForFunction(colorTilesReady);
  assert.equal(await page.evaluate(() => ATLAS.getTerrainStyle()), 'natural');
  const athensColor = await page.evaluate(colorPixel,[37.98,23.72]);
  assert.ok(athensColor[3] > 240 && athensColor[1] - athensColor[2] > 30, 'Local land-cover colors remain visible without elevation requests');
  await page.screenshot({path: `${output}/natural-colors-offline.png`});
  console.log(`Terrain failure preserves a crisp physical map and working places. Screenshots: ${output}`);
  await offline.close();
} finally { await browser.close(); }
