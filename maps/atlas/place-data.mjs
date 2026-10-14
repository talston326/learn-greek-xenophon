// Geographic data stays independent of Leaflet and terrain for reuse in other maps.
export const LEVEL_ZOOMS = Object.freeze({ 1: 5, 2: 8, 3: 11.5 });
export const MAP_BOUNDS = Object.freeze([[33.8, 17.5], [42.4, 31.5]]);

export function parseCsv(text) {
  const rows = [];
  let row = [], value = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (quoted && text[i + 1] === '"') { value += '"'; i++; }
      else quoted = !quoted;
    } else if (!quoted && (c === ',' || c === '\n')) {
      row.push(value.replace(/\r$/, '')); value = '';
      if (c === '\n') { if (row.some(v => v.trim())) rows.push(row); row = []; }
    } else value += c;
  }
  if (quoted) throw new Error('Unclosed CSV quote');
  if (value || row.length) { row.push(value.replace(/\r$/, '')); rows.push(row); }
  const headers = rows.shift()?.map(v => v.trim().replace(/^\uFEFF/, '')) || [];
  return rows.map((values, index) => {
    if (values.length !== headers.length) throw new Error(`CSV row ${index + 2} has the wrong field count`);
    return Object.fromEntries(headers.map((key, i) => [key, values[i].trim()]));
  });
}

export function normalizePlaces(rows) {
  const ids = new Set();
  return rows.map(row => {
    const lat = Number(row.lat), lon = Number(row.lon), level = Number(row.level);
    if (!row.name_en || !row.pleiades_id || !/^\d+$/.test(row.pleiades_id)
      || !row.lat || !row.lon || !Number.isFinite(lat) || !Number.isFinite(lon)
      || lat < -90 || lat > 90 || lon < -180 || lon > 180 || ![1, 2, 3].includes(level)
      || !row.type || !row.region || ids.has(row.pleiades_id)) {
      throw new Error(`Invalid or duplicate place: ${row.name_en || row.pleiades_id}`);
    }
    ids.add(row.pleiades_id);
    // Compatibility names keep the atlas's existing search and detail UI intact.
    return { ...row, lat, lon, level, id: row.pleiades_id, en: row.name_en,
      gr: row.name_grc, rank: level, category: ['polis', 'settlement'].includes(row.type) ? 'settlement' : 'site',
      aliases: row.aliases ? row.aliases.split('|').filter(Boolean) : [], url: `https://pleiades.stoa.org/places/${row.pleiades_id}`,
      greekSource: row.name_source, precision: row.precision || 'precise' };
  });
}

export function normalizeGeography(rows) {
  return rows.map(row => {
    const result = { ...row, lat: Number(row.lat), lon: Number(row.lon),
      level: Number(row.level), min_zoom: Number(row.min_zoom), max_zoom: Number(row.max_zoom) };
    if (!row.name_en || !['region', 'island', 'sea', 'strait'].includes(row.type)
      || !row.lat || !row.lon || ![1, 2, 3].includes(result.level) || !Number.isFinite(result.lat) || !Number.isFinite(result.lon)
      || result.lat < -90 || result.lat > 90 || result.lon < -180 || result.lon > 180
      || !Number.isFinite(result.min_zoom) || !Number.isFinite(result.max_zoom)
      || !row.min_zoom || !row.max_zoom || result.min_zoom > result.max_zoom) {
      throw new Error(`Invalid geographic label: ${row.name_en}`);
    }
    return result;
  });
}

export function visibleAtZoom(place, zoom) { return zoom >= LEVEL_ZOOMS[place.level]; }
export function placeLabel(place, language) {
  return language === 'gr' ? (place.name_grc || `${place.name_en} †`) : place.name_en;
}

export async function loadCsv(url, normalize) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Cannot load ${url}: ${response.status}`);
  return normalize(parseCsv(await response.text()));
}
