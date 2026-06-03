(function () {
  const root = document.querySelector("[data-dictionary-root]");

  if (!root) {
    return;
  }

  const mode = root.dataset.dictionaryMode === "english-greek" ? "english-greek" : "greek-english";
  const searchInput = document.querySelector("[data-dictionary-search]");
  const statusEl = document.querySelector("[data-dictionary-status]");
  const tableBody = document.querySelector("[data-dictionary-rows]");
  const paginationEl = document.querySelector("[data-dictionary-pagination]");
  const pageSize = 50;
  let entries = [];
  let currentPage = 1;

  function normalizeForSearch(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("el-GR")
      .trim();
  }

  function clearElement(element) {
    if (element) {
      element.textContent = "";
    }
  }

  function appendTextCell(row, text, className, lang) {
    const cell = document.createElement("td");

    if (className) {
      cell.className = className;
    }

    if (lang) {
      cell.lang = lang;
    }

    cell.textContent = text || "";
    row.appendChild(cell);
    return cell;
  }

  function formatLessons(lessons) {
    if (!Array.isArray(lessons) || !lessons.length) {
      return "";
    }

    const labels = lessons
      .map((lesson) => lesson.numberLabel || lesson.title || "")
      .filter(Boolean);

    return labels.length ? `Lessons ${labels.join(", ").replace(/Lesson\s+/g, "")}` : "";
  }

  function expandedEnglishEntries() {
    const groups = new Map();

    entries.forEach((entry) => {
      const meanings = Array.isArray(entry.meanings) && entry.meanings.length
        ? entry.meanings
        : [entry.definition];

      meanings.forEach((meaning) => {
        const key = normalizeForSearch(meaning);

        if (!key) {
          return;
        }

        const group = groups.get(key) || {
          meaning,
          entries: [],
          lessons: [],
          searchText: "",
        };

        group.entries.push(entry);
        group.lessons.push(...(Array.isArray(entry.lessons) ? entry.lessons : []));
        groups.set(key, group);
      });
    });

    return Array.from(groups.values())
      .map((group) => {
        const seenLessons = new Set();
        group.lessons = group.lessons.filter((lesson) => {
          const key = lesson.slug || `${lesson.numberLabel}:${lesson.title}`;

          if (seenLessons.has(key)) {
            return false;
          }

          seenLessons.add(key);
          return true;
        });
        group.entries.sort((a, b) => a.citation.localeCompare(b.citation, "el-GR"));
        group.searchText = normalizeForSearch([
          group.meaning,
          ...group.entries.flatMap((entry) => [entry.citation, entry.definition, entry.lemma, ...(entry.forms || [])]),
        ].join(" "));
        return group;
      })
      .sort((a, b) => a.meaning.localeCompare(b.meaning, "en-US"));
  }

  function greekEntries() {
    return entries
      .map((entry) => ({
        entry,
        searchText: normalizeForSearch([
          entry.citation,
          entry.lemma,
          entry.definition,
          ...(entry.forms || []),
          ...(entry.meanings || []),
        ].join(" ")),
      }))
      .sort((a, b) => a.entry.lemma.localeCompare(b.entry.lemma, "el-GR"));
  }

  function filteredRows() {
    const query = normalizeForSearch(searchInput?.value || "");
    const rows = mode === "english-greek" ? expandedEnglishEntries() : greekEntries();

    if (!query) {
      return rows;
    }

    return rows.filter((row) => row.searchText.includes(query));
  }

  function renderGreekEntry(rowData) {
    const row = document.createElement("tr");
    const { entry } = rowData;

    appendTextCell(row, entry.citation, "dictionary-greek", "grc");
    appendTextCell(row, entry.definition, "", null);
    appendTextCell(row, formatLessons(entry.lessons), "dictionary-lessons", null);
    tableBody.appendChild(row);
  }

  function renderEnglishEntry(group) {
    const row = document.createElement("tr");
    const greekCell = document.createElement("td");

    appendTextCell(row, group.meaning, "", null);
    greekCell.className = "dictionary-greek dictionary-greek-list";
    greekCell.lang = "grc";

    group.entries.forEach((entry) => {
      const item = document.createElement("div");
      item.textContent = entry.citation;
      greekCell.appendChild(item);
    });

    row.appendChild(greekCell);
    appendTextCell(row, formatLessons(group.lessons), "dictionary-lessons", null);
    tableBody.appendChild(row);
  }

  function renderPagination(totalRows) {
    clearElement(paginationEl);

    if (!paginationEl || totalRows <= pageSize) {
      return;
    }

    const pageCount = Math.ceil(totalRows / pageSize);
    const previous = document.createElement("button");
    const next = document.createElement("button");
    const status = document.createElement("span");

    previous.type = "button";
    previous.className = "secondary-button";
    previous.textContent = "Previous";
    previous.disabled = currentPage === 1;
    previous.addEventListener("click", () => {
      currentPage = Math.max(1, currentPage - 1);
      render();
    });

    status.textContent = `Page ${currentPage} of ${pageCount}`;

    next.type = "button";
    next.className = "secondary-button";
    next.textContent = "Next";
    next.disabled = currentPage === pageCount;
    next.addEventListener("click", () => {
      currentPage = Math.min(pageCount, currentPage + 1);
      render();
    });

    paginationEl.append(previous, status, next);
  }

  function render() {
    if (!tableBody) {
      return;
    }

    const rows = filteredRows();
    const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
    currentPage = Math.min(currentPage, pageCount);
    const start = (currentPage - 1) * pageSize;
    const visibleRows = rows.slice(start, start + pageSize);

    clearElement(tableBody);

    visibleRows.forEach((row) => {
      if (mode === "english-greek") {
        renderEnglishEntry(row);
      } else {
        renderGreekEntry(row);
      }
    });

    if (statusEl) {
      const entryLabel = rows.length === 1 ? "entry" : "entries";
      statusEl.textContent = `${rows.length} ${entryLabel}`;
    }

    renderPagination(rows.length);
  }

  async function loadDictionary() {
    if (statusEl) {
      statusEl.textContent = "Loading vocabulary...";
    }

    try {
      const response = await fetch("/api/dictionary");

      if (!response.ok) {
        throw new Error(`Dictionary request failed with ${response.status}`);
      }

      const data = await response.json();
      entries = Array.isArray(data.entries) ? data.entries : [];
      render();
    } catch (error) {
      console.error("Failed to load dictionary", error);
      if (statusEl) {
        statusEl.textContent = "Vocabulary is unavailable right now.";
      }
    }
  }

  searchInput?.addEventListener("input", () => {
    currentPage = 1;
    render();
  });

  loadDictionary();
})();
