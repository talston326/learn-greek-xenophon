(function (root, factory) {
  let data = root.xenophonForms;

  if (typeof module === "object" && module.exports) {
    data = require("./forms-data.js");
    module.exports = factory(data);
    return;
  }

  const api = factory(data);
  root.xenophonFormsRenderer = api;
  api.mount();
})(typeof globalThis !== "undefined" ? globalThis : window, function (data) {
  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function containsGreek(value) {
    return /[\u0370-\u03FF\u1F00-\u1FFF]/.test(String(value ?? ""));
  }

  function renderText(value, className = "") {
    if (!containsGreek(value)) {
      return escapeHtml(value);
    }

    const classes = ["greek-text", className].filter(Boolean).join(" ");
    return String(value ?? "")
      .split(/([\u0370-\u03FF\u1F00-\u1FFF]+)/g)
      .map((part) => {
        if (!part) {
          return "";
        }

        if (containsGreek(part)) {
          return `<span class="${classes}" lang="grc">${escapeHtml(part)}</span>`;
        }

        return escapeHtml(part);
      })
      .join("");
  }

  function renderHeadwords(headwords = []) {
    if (!headwords.length) {
      return "";
    }

    return `
      <div class="forms-headword-list" aria-label="Model words">
        ${headwords.map((headword) => `
          <div class="forms-headword">
            <span class="forms-headword__form greek-text" lang="grc">${escapeHtml(headword.form)}</span>
            <span class="forms-headword__gloss">${escapeHtml(headword.gloss)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderTable(table) {
    const columnHeaders = table.columnHeaders || [];

    return `
      <div class="forms-table-region" tabindex="0" role="region" aria-label="${escapeHtml(table.caption)}">
        <table class="forms-table">
          <caption>${escapeHtml(table.caption)}</caption>
          <thead>
            <tr>
              <th scope="col">${escapeHtml(table.rowHeader || "Form")}</th>
              ${columnHeaders.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${(table.rows || []).map((row) => `
              <tr>
                <th scope="row">${escapeHtml(row.label)}</th>
                ${(row.cells || []).map((cell, index) => `<td data-label="${escapeHtml(columnHeaders[index] || "")}">${renderText(cell, "forms-greek-form")}</td>`).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderSection(section) {
    return `
      <section class="lesson-section forms-paradigm-section">
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">Paradigm</p>
            <h3>${renderText(section.heading)}</h3>
            ${section.lemma ? `<p class="forms-section-lemma"><span class="greek-text" lang="grc">${escapeHtml(section.lemma)}</span>${section.gloss ? ` <span>${escapeHtml(section.gloss)}</span>` : ""}</p>` : ""}
          </div>
        </div>
        ${section.notes?.length ? `<div class="forms-note-list">${section.notes.map((note) => `<p>${renderText(note)}</p>`).join("")}</div>` : ""}
        <div class="forms-table-stack">
          ${(section.tables || []).map(renderTable).join("")}
        </div>
      </section>
    `;
  }

  function renderLandingHtml() {
    const paradigms = data?.getParadigms?.() || [];
    const categories = data?.getCategories?.() || [];

    return `
      <section class="lesson-section forms-intro">
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">Course Resource</p>
            <h2>Forms</h2>
          </div>
          <a class="secondary-button" href="resources.html">Back to Resources</a>
        </div>
        <p>Reference tables for common Ancient Greek noun, adjective, pronoun, participle, and verb forms.</p>
      </section>

      ${categories.map((category) => {
        const items = paradigms.filter((paradigm) => paradigm.category === category);

        if (!items.length) {
          return "";
        }

        return `
          <section class="lesson-section forms-category" aria-labelledby="forms-${category.toLowerCase()}">
            <div class="lesson-section__header">
              <div>
                <p class="eyebrow">Forms</p>
                <h2 id="forms-${category.toLowerCase()}">${escapeHtml(category)}</h2>
              </div>
            </div>
            <div class="forms-card-grid">
              ${items.map((item) => `
                <a class="forms-card" href="${escapeHtml(item.page)}">
                  <span class="forms-card__title">${renderText(item.navigationLabel)}</span>
                  <span class="forms-card__description">${renderText(item.description)}</span>
                </a>
              `).join("")}
            </div>
          </section>
        `;
      }).join("")}
    `;
  }

  function renderParadigmHtml(paradigmId) {
    const paradigms = data?.getParadigms?.() || [];
    const paradigm = data?.getParadigm?.(paradigmId);

    if (!paradigm) {
      return `
        <section class="lesson-section">
          <h2>Forms page not found.</h2>
          <p class="muted">Choose a paradigm from the All Forms page.</p>
          <a class="primary-button" href="forms.html">Back to Forms</a>
        </section>
      `;
    }

    const index = paradigms.findIndex((item) => item.id === paradigm.id);
    const previous = paradigms[index - 1];
    const next = paradigms[index + 1];

    return `
      <section class="lesson-section forms-paradigm-intro">
        <a class="small-link forms-back-link" href="forms.html">Back to Forms</a>
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">${escapeHtml(paradigm.category)}</p>
            <h2>${renderText(paradigm.title)}</h2>
          </div>
        </div>
        <p>${renderText(paradigm.introduction || paradigm.description)}</p>
        ${renderHeadwords(paradigm.headwords)}
        ${paradigm.notes?.length ? `<div class="forms-note-list">${paradigm.notes.map((note) => `<p>${renderText(note)}</p>`).join("")}</div>` : ""}
      </section>

      ${(paradigm.sections || []).map(renderSection).join("")}

      <section class="lesson-section forms-source">
        <div>
          <p class="eyebrow">Source</p>
          <p>${escapeHtml(paradigm.source)}</p>
        </div>
        <nav class="forms-adjacent-nav" aria-label="Forms navigation">
          ${previous ? `<a class="secondary-button" href="${escapeHtml(previous.page)}">Previous: ${escapeHtml(previous.navigationLabel)}</a>` : ""}
          <a class="secondary-button" href="forms.html">All Forms</a>
          ${next ? `<a class="primary-button" href="${escapeHtml(next.page)}">Next: ${escapeHtml(next.navigationLabel)}</a>` : ""}
        </nav>
      </section>
    `;
  }

  function inferParadigmIdFromLocation() {
    const page = window.location.pathname.split("/").pop() || "";
    const match = page.match(/^forms-(.+)\.html$/);
    return match?.[1] || "";
  }

  function mount() {
    const root = document.querySelector("[data-forms-root]");

    if (!root || !data) {
      return;
    }

    const pageType = root.dataset.formsRoot;
    const paradigmId = root.dataset.formId || inferParadigmIdFromLocation();
    root.innerHTML = pageType === "index" ? renderLandingHtml() : renderParadigmHtml(paradigmId);

    const paradigm = data.getParadigm?.(paradigmId);
    if (paradigm && pageType !== "index") {
      document.title = `${paradigm.title} - Learn Greek with Xenophon`;
    }

    window.applyGreekTextStyling?.(root);
  }

  return {
    escapeHtml,
    renderLandingHtml,
    renderParadigmHtml,
    renderTable,
    mount
  };
});
