const MAP_CONFIG = {
  initialCenter: [38.35, 24.15],
  initialZoom: 6,
  regionalThreshold: 8,
  csvFallback: "maps/source-data/cities.csv"
};

const mapState = {
  labelLanguage: "en",
  places: [],
  markers: [],
  map: null
};

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && nextChar === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}

function parseCitiesCsv(csvText) {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return [];
  }

  const headers = parseCsvLine(lines[0]).map((header) => header.trim().replace(/^\uFEFF/, ""));

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = headers.reduce((entry, header, index) => {
      entry[header] = values[index]?.trim() || "";
      return entry;
    }, {});

    return {
      name_en: row.name_en,
      name_gr: row.name_gr,
      lat: Number.parseFloat(row.lat),
      lon: Number.parseFloat(row.lon),
      zoom_level: Number.parseInt(row.zoom_level, 10)
    };
  }).filter((place) => (
    place.name_en &&
    place.name_gr &&
    Number.isFinite(place.lat) &&
    Number.isFinite(place.lon) &&
    [1, 2].includes(place.zoom_level)
  ));
}

function getPlaceLabel(place) {
  return mapState.labelLanguage === "gr" ? place.name_gr : place.name_en;
}

function getCityType(place) {
  return place.zoom_level === 1 ? "Major City" : "Regional City";
}

function shouldShowPlace(place, zoom) {
  if (place.zoom_level === 1) {
    return true;
  }

  return zoom >= MAP_CONFIG.regionalThreshold;
}

function makeMarker(place) {
  const marker = L.circleMarker([place.lat, place.lon], {
    radius: place.zoom_level === 1 ? 7 : 5,
    color: place.zoom_level === 1 ? "#5c0008" : "#7a6657",
    weight: place.zoom_level === 1 ? 2 : 1.5,
    fillColor: place.zoom_level === 1 ? "#caa24a" : "#fff8e8",
    fillOpacity: place.zoom_level === 1 ? 0.96 : 0.88,
    opacity: 1,
    className: place.zoom_level === 1 ? "major-city-marker" : "regional-city-marker"
  });

  marker.bindTooltip(getPlaceLabel(place), {
    permanent: true,
    direction: "top",
    offset: [0, -7],
    className: place.zoom_level === 1 ? "city-label major-city-label" : "city-label regional-city-label"
  });

  marker.bindPopup(`
    <strong>${place.name_en}</strong>
    <span>${place.name_gr}</span>
    <em>${getCityType(place)}</em>
  `, {
    className: "city-popup"
  });

  marker.place = place;
  return marker;
}

function syncMarkerVisibility() {
  if (!mapState.map) {
    return;
  }

  const zoom = mapState.map.getZoom();

  mapState.markers.forEach((marker) => {
    const visible = shouldShowPlace(marker.place, zoom);
    const onMap = mapState.map.hasLayer(marker);

    if (visible && !onMap) {
      marker.addTo(mapState.map);
    } else if (!visible && onMap) {
      marker.removeFrom(mapState.map);
    }
  });
}

function syncMarkerLabels() {
  mapState.markers.forEach((marker) => {
    marker.setTooltipContent(getPlaceLabel(marker.place));
  });
}

function setMapStatus(message) {
  const statusEl = document.querySelector("[data-map-status]");

  if (statusEl) {
    statusEl.textContent = message;
  }
}

function bindLanguageControls() {
  document.querySelectorAll("[data-map-language]").forEach((button) => {
    button.addEventListener("click", () => {
      mapState.labelLanguage = button.dataset.mapLanguage;

      document.querySelectorAll("[data-map-language]").forEach((choice) => {
        const isActive = choice === button;
        choice.classList.toggle("active", isActive);
        choice.setAttribute("aria-pressed", String(isActive));
      });

      syncMarkerLabels();
    });
  });
}

async function loadCities(source) {
  const response = await fetch(source, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Unable to load ${source}`);
  }

  return parseCitiesCsv(await response.text());
}

async function initAncientGreeceMap() {
  const mapEl = document.querySelector("#ancient-greece-map");

  if (!mapEl) {
    return;
  }

  if (!window.L) {
    setMapStatus("Leaflet could not be loaded.");
    return;
  }

  bindLanguageControls();

  mapState.map = L.map(mapEl, {
    minZoom: 4,
    maxZoom: 11,
    worldCopyJump: true
  }).setView(MAP_CONFIG.initialCenter, MAP_CONFIG.initialZoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(mapState.map);

  try {
    const source = mapEl.dataset.citiesSrc || MAP_CONFIG.csvFallback;
    mapState.places = await loadCities(source);
    mapState.markers = mapState.places.map(makeMarker);

    syncMarkerVisibility();
    mapState.map.on("zoomend", syncMarkerVisibility);

    setMapStatus(`${mapState.places.length} places loaded from cities.csv.`);
  } catch (error) {
    setMapStatus("The map could not load cities.csv.");
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", initAncientGreeceMap);
