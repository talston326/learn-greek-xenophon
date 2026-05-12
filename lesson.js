(function () {
  const shell = document.querySelector("[data-lesson-template]");
  const params = new URLSearchParams(window.location.search);
  const requestedLesson = params.get("lesson") || "1";
  const lessonSlug = window.xenophonLessonData?.normalizeLessonParam?.(requestedLesson) || normalizeLessonParam(requestedLesson);
  let lesson = window.xenophonLessonData?.getLesson(requestedLesson);
  let page = null;
  let originalLessonForCancel = null;
  let editStatus = "";
  let isEditMode = false;

  if (!shell) {
    return;
  }

  setActiveLesson(lesson);

  function normalizeLessonParam(value) {
    const raw = String(value || "1").trim().toLowerCase();
    if (/^\d+$/.test(raw)) {
      return `lesson-${raw}`;
    }
    return raw;
  }

  function setActiveLesson(nextLesson) {
    lesson = nextLesson || null;
    const maxPage = lesson?.pages?.length || 1;
    const requestedPage = Math.max(1, Math.min(maxPage, Number(params.get("page") || "1")));
    page = lesson?.pages?.find((item) => item.page === requestedPage) || lesson?.pages?.[0] || null;

    if (lesson?.title) {
      document.title = `${lesson.title} - Learn Greek with Xenophon`;
    }
  }

  function deepCopy(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function readSession() {
    return window.xenophonAuth?.readSession?.() || null;
  }

  function isAdministrator() {
    const session = readSession();
    return session?.activeRole === "administrator" && Boolean(session.roles?.includes("administrator"));
  }

  async function loadLessonContentOverride() {
    try {
      const response = await fetch(`/api/lesson-content?slug=${encodeURIComponent(lessonSlug)}`);
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Lesson content override could not be loaded.");
      }

      if (data.hasOverride && data.content) {
        setActiveLesson(data.content);
      }
    } catch (error) {
      console.warn("Using static lesson-data.js fallback for lesson content.", error);
    }
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function resolveLessonImagePath(value) {
    const raw = String(value || "").trim();

    if (!raw) {
      return "";
    }

    if (raw.startsWith("/asset/")) {
      return `assets/${raw.slice("/asset/".length)}`;
    }

    if (raw.startsWith("/assets/")) {
      return `assets/${raw.slice("/assets/".length)}`;
    }

    if (/^(https?:|data:|blob:|\/)/i.test(raw) || raw.startsWith("assets/") || raw.startsWith("maps/assets/")) {
      return raw;
    }

    if (raw.startsWith("asset/")) {
      return `assets/${raw.slice("asset/".length)}`;
    }

    if (!raw.includes("/")) {
      return `assets/${raw}`;
    }

    return raw;
  }

  function activityUrl(type, pageNumber, topic = "") {
    const query = new URLSearchParams({
      lesson: String(lesson.number),
      type,
      returnTo: `lesson.html?lesson=${lesson.number}&page=${pageNumber}`
    });

    if (topic) {
      query.set("topic", topic);
    }

    return `activity.html?${query.toString()}`;
  }

  function renderSampleNotice() {
    return lesson.sampleNotice
      ? `<p class="lesson-sample-note is-visible" data-demo-notice>${escapeHtml(lesson.sampleNotice)}</p>`
      : "";
  }

  function renderHero() {
    const bannerText = lesson.banner.text || lesson.greekTitle || lesson.banner.caption;

    return `
      <header class="lesson-hero">
        <img src="${escapeHtml(lesson.banner.image)}" alt="${escapeHtml(lesson.banner.alt)}">
        <div class="lesson-hero__overlay">
          <p class="lesson-hero__kicker">Lesson ${lesson.number}</p>
          <h1 class="lesson-hero__title">${escapeHtml(lesson.title)}</h1>
          <p class="lesson-hero__caption greek-text" lang="grc">${escapeHtml(bannerText)}</p>
        </div>
      </header>
    `;
  }

  function renderLessonOverview() {
    if (!lesson.scope && !lesson.theme && !lesson.module) {
      return "";
    }

    return `
      <section class="lesson-section lesson-overview" aria-labelledby="lesson-overview-heading">
        <div>
          <p class="eyebrow">${escapeHtml(lesson.module || `Lesson ${lesson.number}`)}</p>
          <h2 id="lesson-overview-heading">${escapeHtml(lesson.greekTitle || lesson.title)}</h2>
        </div>
        <dl class="lesson-meta-list">
          ${lesson.scope ? `
            <div>
              <dt>Scope</dt>
              <dd>${escapeHtml(lesson.scope)}</dd>
            </div>
          ` : ""}
          ${lesson.theme ? `
            <div>
              <dt>Theme</dt>
              <dd>${escapeHtml(lesson.theme)}</dd>
            </div>
          ` : ""}
        </dl>
      </section>
    `;
  }

  function renderVocabulary() {
    return `
      <section class="lesson-section" aria-labelledby="lesson-vocabulary-heading">
        <div class="lesson-section__header">
          <h2 id="lesson-vocabulary-heading">Vocabulary</h2>
          <a class="lesson-flashcard-link secondary-button" href="${activityUrl("vocab-flashcards", 1)}">Vocabulary Flashcards</a>
        </div>
        <div class="vocab-document">
          ${lesson.vocabulary.map((group) => `
            <section class="vocab-group">
              <h3>${escapeHtml(group.category)}</h3>
              <ul>
                ${group.items.map((item) => `
                  <li>
                    <span class="vocab-entry__term">
                      <strong class="greek-text" lang="grc">${escapeHtml(item.greek)}</strong>
                      ${item.audioUrl ? `<button class="vocab-audio-button" type="button" data-vocab-audio="${escapeHtml(item.audioUrl)}" aria-label="Hear ${escapeHtml(item.greek)}">Play audio</button>` : ""}
                    </span>
                    <span class="vocab-entry__dash" aria-hidden="true">—</span>
                    <span class="vocab-entry__gloss">${escapeHtml(item.english)}</span>
                  </li>
                `).join("")}
              </ul>
            </section>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderReading() {
    return `
      <section class="lesson-section" aria-labelledby="lesson-reading-heading">
        <h2 id="lesson-reading-heading">${escapeHtml(lesson.reading.title)}</h2>
        ${lesson.reading.introduction?.length ? `
          <div class="lesson-introduction-copy">
            ${lesson.reading.introduction.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </div>
        ` : ""}
        <div class="greek-reading">
          ${lesson.reading.paragraphs.map((paragraph) => `
            <div class="reading-paragraph">
              <p class="greek-text" lang="grc">${escapeHtml(paragraph.greek)}</p>
              ${paragraph.gloss?.length ? renderGlossList(paragraph.gloss, "Reading Glosses") : ""}
            </div>
          `).join("")}
        </div>
        ${lesson.reading.translation && page.showTranslation !== false ? `
          <details class="translation-toggle">
            <summary>Show guided translation</summary>
            <p>${escapeHtml(lesson.reading.translation)}</p>
          </details>
        ` : ""}
      </section>
    `;
  }

  function renderGlossList(entries, label = "Glosses") {
    return `
      <dl class="reading-gloss" aria-label="${escapeHtml(label)}">
        ${entries.map((entry) => `
          <div>
            <dt class="greek-text" lang="grc">${escapeHtml(entry.greek)}</dt>
            <dd>${escapeHtml(entry.english)}</dd>
          </div>
        `).join("")}
      </dl>
    `;
  }

  function renderReadingPage() {
    const includeVocabulary = page.includeVocabulary !== false;
    return `
      ${renderHero()}
      ${renderSampleNotice()}
      <div class="lesson-reading-panel">
        ${includeVocabulary ? renderVocabulary() : ""}
        ${renderReading()}
      </div>
      ${renderPageNav()}
    `;
  }

  function renderWordStudy() {
    return `
      <section class="lesson-section word-building-panel ${lesson.wordStudy.blocks.length === 1 ? "word-building-panel--compact" : ""}" aria-labelledby="word-study-heading">
        <div class="lesson-section__header">
          <h2 id="word-study-heading">${escapeHtml(lesson.wordStudy.label)}</h2>
        </div>
        ${lesson.wordStudy.blocks.map((block) => `
          <div class="lesson-markdown-block">
            <h3>${escapeHtml(block.title)}</h3>
            ${block.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
            ${block.display?.length ? `
              <dl class="word-builder-list">
                ${block.display.map((entry) => `
                  <div>
                    <dt class="greek-text" lang="grc">${escapeHtml(entry.greek)}</dt>
                    <dd>${escapeHtml(entry.english)}</dd>
                  </div>
                `).join("")}
              </dl>
            ` : ""}
            ${block.connections?.length ? `
              <div class="word-builder-connections">
                <h4>English connections</h4>
                <p>${block.connections.map((connection) => escapeHtml(connection)).join(", ")}</p>
              </div>
            ` : ""}
          </div>
        `).join("")}
      </section>
    `;
  }

  function renderVocabularyPractice() {
    const hasPractice = Boolean(lesson.activities?.["vocab-practice"]?.questions?.length);

    return `
      <section class="lesson-section gate-panel" aria-labelledby="vocabulary-practice-heading">
        <div class="lesson-section__header">
          <h2 id="vocabulary-practice-heading">Vocabulary Practice</h2>
          <div class="lesson-button-row">
            <a class="secondary-button" href="${activityUrl("vocab-flashcards", page.page)}">Vocabulary Flashcards</a>
            ${hasPractice ? `<a class="primary-button" href="${activityUrl("vocab-practice", page.page)}">Practice Vocabulary</a>` : ""}
          </div>
        </div>
        <p class="gate-description">Review the lesson vocabulary before you move into the cultural reading and grammar practice.</p>
      </section>
    `;
  }

  function renderGrammarTable(section) {
    if (!section.table) {
      return "";
    }

    const greekColumns = Array.isArray(section.table.greekColumns)
      ? new Set(section.table.greekColumns)
      : null;

    return `
      <div class="grammar-table-wrap">
        <table class="grammar-table">
          <thead>
            <tr>
              ${section.table.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${section.table.rows.map((row) => `
              <tr>
                ${row.map((cell, index) => {
                  const tag = index === 0 ? "th" : "td";
                  const isGreekCell = greekColumns ? greekColumns.has(index) : index > 0;
                  const greekAttrs = isGreekCell ? 'class="greek-text" lang="grc"' : "";
                  const scopeAttr = index === 0 ? 'scope="row"' : "";
                  return `<${tag} ${[scopeAttr, greekAttrs].filter(Boolean).join(" ")}>${escapeHtml(cell)}</${tag}>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderGrammarFormList(section) {
    if (!section.formList?.items?.length) {
      return "";
    }

    return `
      <div class="grammar-form-list">
        <h4>${escapeHtml(section.formList.title || "Forms to learn")}</h4>
        <ul>
          ${section.formList.items.map((item) => `
            <li>
              <strong class="greek-text" lang="grc">${escapeHtml(item.greek)}</strong>
              <span aria-hidden="true">—</span>
              <span>${escapeHtml(item.english)}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  }

  function renderVocabularyPage() {
    return `
      ${renderSampleNotice()}
      <header class="lesson-page-heading">
        <p class="eyebrow">Lesson ${lesson.number}</p>
        <h1>${escapeHtml(page.title)}</h1>
      </header>
      ${renderVocabulary()}
      ${lesson.reading.paragraphs[0]?.gloss?.length ? `
        <section class="lesson-section" aria-labelledby="reading-gloss-heading">
          <h2 id="reading-gloss-heading">Passage Glosses</h2>
          <p class="gate-description">These words appear in the reading, but they are glossed here instead of treated as required vocabulary yet.</p>
          ${renderGlossList(lesson.reading.paragraphs[0].gloss, "Passage words not in required vocabulary")}
        </section>
      ` : ""}
      ${renderWordStudy()}
      ${renderVocabularyPractice()}
      ${renderPageNav()}
    `;
  }

  function renderCulturePage() {
    const culture = lesson.culture || {};
    const cultureImage = resolveLessonImagePath(culture.image || culture.imageUrl);

    return `
      ${renderSampleNotice()}
      <header class="lesson-page-heading">
        <p class="eyebrow">Culture and History</p>
        <h1>${escapeHtml(culture.title || page.title)}</h1>
      </header>
      <section class="lesson-section enrichment-panel culture-panel">
        ${cultureImage ? `
          <figure class="culture-panel__figure">
            <img src="${escapeHtml(cultureImage)}" alt="${escapeHtml(culture.imageAlt || "")}">
          </figure>
        ` : ""}
        ${(culture.body || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>
      ${culture.questions?.length ? `
        <section class="lesson-section culture-questions" aria-labelledby="culture-questions-heading">
          <h2 id="culture-questions-heading">Comprehension and Reflection</h2>
          <div class="culture-question-list">
            ${culture.questions.map((question, index) => `
              <article class="culture-question">
                <h3>${index + 1}. ${escapeHtml(question.prompt)}</h3>
                <p>${escapeHtml(question.answer)}</p>
              </article>
            `).join("")}
          </div>
        </section>
      ` : ""}
      ${renderFinalQuizSection()}
      ${renderPageNav()}
    `;
  }

  function renderGrammar() {
    return `
      <section class="lesson-section grammar-panel" aria-labelledby="lesson-grammar-heading">
        <div class="lesson-section__header">
          <h2 id="lesson-grammar-heading">Grammar</h2>
          <a class="lesson-flashcard-link secondary-button" href="${activityUrl("grammar-flashcards", 2)}">Grammar Flashcards</a>
        </div>
        <p>${escapeHtml(lesson.grammar.intro)}</p>
        ${lesson.grammar.sections.map((section) => `
          <section class="grammar-subsection" id="${escapeHtml(section.id)}">
            <div class="grammar-subsection__heading">
              <h3>${escapeHtml(section.title)}</h3>
              ${section.practiceTopic ? `<a class="secondary-button" href="${activityUrl("topic-practice", 2, section.practiceTopic)}">Practice This Topic</a>` : ""}
            </div>
            ${section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
            ${renderGrammarTable(section)}
            ${renderGrammarFormList(section)}
            ${section.examples?.length ? `
              <div class="grammar-examples">
                ${section.examples.map((example) => `
                  <article class="grammar-example">
                    <p class="grammar-example__greek greek-text" lang="grc">${escapeHtml(example.greek)}</p>
                    <p class="grammar-example__english">${escapeHtml(example.english)}</p>
                  </article>
                `).join("")}
              </div>
            ` : ""}
          </section>
        `).join("")}
      </section>
    `;
  }

  function renderGrammarGate() {
    return `
      <section class="lesson-section gate-panel" aria-labelledby="grammar-exercises-heading">
        <div class="lesson-section__header">
          <h2 id="grammar-exercises-heading">Grammar Exercises</h2>
          <a class="primary-button" href="${activityUrl("grammar-exercises", 2)}">Grammar Exercises</a>
        </div>
        <p class="gate-message" data-gate-message="grammar-exercises">${hasOpenLessonAccess() ? "Open access is enabled during build testing; you may continue without passing this activity." : ""}</p>
      </section>
    `;
  }

  function renderGrammarPage() {
    return `
      ${renderSampleNotice()}
      ${renderWordStudy()}
      ${renderGrammar()}
      ${renderGrammarGate()}
      ${renderPageNav()}
    `;
  }

  function renderQuizPage() {
    return `
      ${renderSampleNotice()}
      <header class="lesson-page-heading">
        <p class="eyebrow">Lesson ${lesson.number}</p>
        <h1>${escapeHtml(page.title)}</h1>
      </header>
      <section class="lesson-section gate-panel lesson-quiz-panel" aria-labelledby="lesson-quiz-heading">
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">Mastery Check</p>
            <h2 id="lesson-quiz-heading">${escapeHtml(lesson.activities["lesson-quiz"]?.title || "Final Lesson Quiz")}</h2>
          </div>
          <a class="primary-button" href="${activityUrl("lesson-quiz", page.page)}">Take Final Lesson Quiz</a>
        </div>
        <p class="gate-description">${hasOpenLessonAccess() ? "This quiz checks vocabulary, grammar, and reading comprehension. Open access is enabled during build testing, so you can continue without passing it." : "This quiz checks vocabulary, grammar, and reading comprehension. Passing it unlocks the next lesson."}</p>
        <p class="gate-message" data-gate-message="lesson-quiz"></p>
      </section>
      ${renderPageNav()}
    `;
  }

  function renderFinalQuizSection() {
    const quiz = lesson.activities?.["lesson-quiz"];
    if (!quiz) {
      return "";
    }

    return `
      <section class="lesson-section gate-panel lesson-quiz-panel" aria-labelledby="lesson-quiz-heading">
        <div class="lesson-section__header">
          <div>
            <h2 id="lesson-quiz-heading">Final Quiz</h2>
            <p class="quiz-subheading">Mastery Check</p>
            <h3>${escapeHtml(quiz.title || "Lesson Quiz")}</h3>
          </div>
          <a class="primary-button" href="${activityUrl("lesson-quiz", page.page)}">Take Final Lesson Quiz</a>
        </div>
        <p class="gate-description">This quiz checks vocabulary, grammar, and reading comprehension.</p>
        ${hasOpenLessonAccess() ? `<p class="gate-message" data-gate-message="lesson-quiz">Temporary build testing note: open access is enabled, but lesson completion still requires passing the quiz.</p>` : `<p class="gate-message" data-gate-message="lesson-quiz"></p>`}
      </section>
    `;
  }

  function hasOpenLessonAccess() {
    return Boolean(window.xenophonOpenLessonAccess);
  }

  function renderAdminToolbar() {
    if (!isAdministrator() || !lesson?.id) {
      return "";
    }

    return `
      <section class="lesson-admin-toolbar" aria-label="Lesson administrator tools">
        <div>
          <p class="eyebrow">Administrator</p>
          <h2>${escapeHtml(lesson.number ? `Lesson ${lesson.number}` : lesson.title)} Content Editor</h2>
          ${editStatus ? `<p class="lesson-admin-status">${escapeHtml(editStatus)}</p>` : ""}
        </div>
        <div class="lesson-button-row">
          ${isEditMode ? `
            <button class="secondary-button" type="button" data-lesson-editor-action="cancel">Cancel</button>
            <button class="primary-button" type="button" data-lesson-editor-action="save">Save</button>
          ` : `
            <button class="primary-button" type="button" data-lesson-editor-action="edit">Edit</button>
          `}
        </div>
      </section>
    `;
  }

  function renderInput(label, name, value = "") {
    return `
      <label class="lesson-editor-field">
        <span>${escapeHtml(label)}</span>
        <input type="text" value="${escapeHtml(value)}" data-editor-field="${escapeHtml(name)}">
      </label>
    `;
  }

  function renderTextarea(label, name, value = "", rows = 5) {
    return `
      <label class="lesson-editor-field">
        <span>${escapeHtml(label)}</span>
        <textarea rows="${rows}" data-editor-field="${escapeHtml(name)}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }

  function renderRemoveButton(label = "Remove") {
    return `<button class="secondary-button lesson-editor-remove" type="button" data-lesson-editor-action="remove-row">${escapeHtml(label)}</button>`;
  }

  function joinParagraphs(value) {
    return Array.isArray(value) ? value.join("\n\n") : "";
  }

  function joinLines(value) {
    return Array.isArray(value) ? value.join("\n") : "";
  }

  function splitParagraphs(value) {
    return String(value || "")
      .split(/\n\s*\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function splitLines(value) {
    return String(value || "")
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function fieldValue(name, root = shell) {
    return root.querySelector(`[data-editor-field="${name}"]`)?.value || "";
  }

  function hasEditorField(name, root = shell) {
    return Boolean(root.querySelector(`[data-editor-field="${name}"]`));
  }

  function renderLessonTitleEditor() {
    const greekTitle = lesson.greekTitle || lesson.banner?.text || lesson.banner?.caption || "";

    return `
      <section class="lesson-editor-card" aria-labelledby="lesson-editor-title">
        <h3 id="lesson-editor-title">Lesson Title</h3>
        ${renderInput("English title", "lesson-title", lesson.title || "")}
        ${renderTextarea("Greek title / banner text", "lesson-greek-title", greekTitle, 3)}
      </section>
    `;
  }

  function renderVocabularyEditor() {
    return `
      <section class="lesson-editor-card" aria-labelledby="lesson-editor-vocabulary">
        <div class="lesson-section__header">
          <h3 id="lesson-editor-vocabulary">Vocabulary</h3>
          <button class="secondary-button" type="button" data-lesson-editor-action="add-vocab-group">Add Group</button>
        </div>
        <div class="lesson-editor-list">
          ${(lesson.vocabulary || []).map((group) => `
            <section class="lesson-editor-group" data-editor-row="vocab-group">
              <div class="lesson-section__header">
                ${renderInput("Category", "vocab-category", group.category || "")}
                ${renderRemoveButton("Remove Group")}
              </div>
              <div class="lesson-editor-table">
                ${(group.items || []).map((item) => `
                  <div class="lesson-editor-row lesson-editor-row--three" data-editor-row="vocab-item">
                    ${renderInput("Greek", "vocab-greek", item.greek || "")}
                    ${renderInput("Gloss", "vocab-english", item.english || "")}
                    ${renderRemoveButton("Remove")}
                  </div>
                `).join("")}
              </div>
              <button class="secondary-button" type="button" data-lesson-editor-action="add-vocab-item">Add Vocabulary Row</button>
            </section>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderReadingEditor() {
    return `
      <section class="lesson-editor-card" aria-labelledby="lesson-editor-reading">
        <div class="lesson-section__header">
          <h3 id="lesson-editor-reading">Greek Text and Glosses</h3>
          <button class="secondary-button" type="button" data-lesson-editor-action="add-reading-paragraph">Add Paragraph</button>
        </div>
        ${renderInput("Reading title", "reading-title", lesson.reading?.title || "")}
        ${renderTextarea("Guided translation", "reading-translation", lesson.reading?.translation || "", 4)}
        <div class="lesson-editor-list">
          ${(lesson.reading?.paragraphs || []).map((paragraph, index) => `
            <section class="lesson-editor-group" data-editor-row="reading-paragraph">
              <div class="lesson-section__header">
                <h4>Paragraph ${index + 1}</h4>
                ${renderRemoveButton("Remove Paragraph")}
              </div>
              ${renderTextarea("Greek paragraph", "reading-greek", paragraph.greek || "", 7)}
              <div class="lesson-section__header">
                <h4>Glosses</h4>
                <button class="secondary-button" type="button" data-lesson-editor-action="add-reading-gloss">Add Gloss</button>
              </div>
              <div class="lesson-editor-table">
                ${(paragraph.gloss || []).map((entry) => `
                  <div class="lesson-editor-row lesson-editor-row--three" data-editor-row="reading-gloss">
                    ${renderInput("Greek", "gloss-greek", entry.greek || "")}
                    ${renderInput("Gloss", "gloss-english", entry.english || "")}
                    ${renderRemoveButton("Remove")}
                  </div>
                `).join("")}
              </div>
            </section>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderPageOneEditor() {
    return `
      <section class="lesson-section lesson-editor" aria-labelledby="lesson-editor-heading">
        <h2 id="lesson-editor-heading">Edit Page 1</h2>
        ${renderLessonTitleEditor()}
        <section class="lesson-editor-card">
          <h3>Banner Image</h3>
          ${renderInput("Banner image", "banner-image", lesson.banner?.image || "")}
        </section>
        ${renderVocabularyEditor()}
        ${renderReadingEditor()}
      </section>
    `;
  }

  function renderWordStudyEditor() {
    return `
      <section class="lesson-editor-card" aria-labelledby="lesson-editor-word-study">
        <div class="lesson-section__header">
          <h3 id="lesson-editor-word-study">Word Study</h3>
          <button class="secondary-button" type="button" data-lesson-editor-action="add-word-block">Add Block</button>
        </div>
        ${renderInput("Label", "word-label", lesson.wordStudy?.label || "")}
        <div class="lesson-editor-list">
          ${(lesson.wordStudy?.blocks || []).map((block) => `
            <section class="lesson-editor-group" data-editor-row="word-block">
              <div class="lesson-section__header">
                ${renderInput("Block title", "word-title", block.title || "")}
                ${renderRemoveButton("Remove Block")}
              </div>
              ${renderTextarea("Body paragraphs", "word-body", joinParagraphs(block.body), 5)}
              <div class="lesson-section__header">
                <h4>Display rows</h4>
                <button class="secondary-button" type="button" data-lesson-editor-action="add-word-display">Add Display Row</button>
              </div>
              <div class="lesson-editor-table">
                ${(block.display || []).map((entry) => `
                  <div class="lesson-editor-row lesson-editor-row--three" data-editor-row="word-display">
                    ${renderInput("Greek", "word-display-greek", entry.greek || "")}
                    ${renderInput("Gloss", "word-display-english", entry.english || "")}
                    ${renderRemoveButton("Remove")}
                  </div>
                `).join("")}
              </div>
              ${renderTextarea("English connections, one per line", "word-connections", joinLines(block.connections), 4)}
            </section>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderGrammarEditor() {
    return `
      <section class="lesson-editor-card" aria-labelledby="lesson-editor-grammar">
        <div class="lesson-section__header">
          <h3 id="lesson-editor-grammar">Grammar</h3>
          <button class="secondary-button" type="button" data-lesson-editor-action="add-grammar-section">Add Section</button>
        </div>
        ${renderTextarea("Grammar intro", "grammar-intro", lesson.grammar?.intro || "", 4)}
        <div class="lesson-editor-list">
          ${(lesson.grammar?.sections || []).map((section) => `
            <section class="lesson-editor-group" data-editor-row="grammar-section">
              <div class="lesson-section__header">
                ${renderInput("Section title", "grammar-title", section.title || "")}
                ${renderRemoveButton("Remove Section")}
              </div>
              <div class="lesson-editor-row lesson-editor-row--two">
                ${renderInput("Stable id", "grammar-id", section.id || "")}
                ${renderInput("Practice topic", "grammar-practice-topic", section.practiceTopic || "")}
              </div>
              ${renderTextarea("Body paragraphs", "grammar-body", joinParagraphs(section.body), 6)}
              ${renderTextarea("Table JSON", "grammar-table", section.table ? JSON.stringify(section.table, null, 2) : "", 6)}
              ${renderTextarea("Form list JSON", "grammar-form-list", section.formList ? JSON.stringify(section.formList, null, 2) : "", 5)}
              <div class="lesson-section__header">
                <h4>Examples</h4>
                <button class="secondary-button" type="button" data-lesson-editor-action="add-grammar-example">Add Example</button>
              </div>
              <div class="lesson-editor-table">
                ${(section.examples || []).map((example) => `
                  <div class="lesson-editor-row lesson-editor-row--three" data-editor-row="grammar-example">
                    ${renderTextarea("Greek", "grammar-example-greek", example.greek || "", 3)}
                    ${renderTextarea("English", "grammar-example-english", example.english || "", 3)}
                    ${renderRemoveButton("Remove")}
                  </div>
                `).join("")}
              </div>
            </section>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderPageTwoEditor() {
    return `
      <section class="lesson-section lesson-editor" aria-labelledby="lesson-editor-heading">
        <h2 id="lesson-editor-heading">Edit Page 2</h2>
        ${renderLessonTitleEditor()}
        ${renderWordStudyEditor()}
        ${renderGrammarEditor()}
      </section>
    `;
  }

  function renderPageThreeEditor() {
    if (page?.template === "enrichment" && !lesson.culture) {
      return renderEnrichmentEditor();
    }

    return `
      <section class="lesson-section lesson-editor" aria-labelledby="lesson-editor-heading">
        <h2 id="lesson-editor-heading">Edit Page 3</h2>
        ${renderLessonTitleEditor()}
        <section class="lesson-editor-card" aria-labelledby="lesson-editor-culture">
          <div class="lesson-section__header">
            <h3 id="lesson-editor-culture">Greek World / Context</h3>
            <button class="secondary-button" type="button" data-lesson-editor-action="add-culture-question">Add Question</button>
          </div>
          ${renderInput("Culture title", "culture-title", lesson.culture?.title || "")}
          <div class="lesson-editor-row lesson-editor-row--two">
            ${renderInput("Image path or URL", "culture-image", lesson.culture?.image || lesson.culture?.imageUrl || "")}
            ${renderInput("Image alt text", "culture-image-alt", lesson.culture?.imageAlt || "")}
          </div>
          ${renderTextarea("Body paragraphs", "culture-body", joinParagraphs(lesson.culture?.body), 8)}
          <h4>Comprehension and Reflection</h4>
          <div class="lesson-editor-table">
            ${(lesson.culture?.questions || []).map((question) => `
              <div class="lesson-editor-row lesson-editor-row--three" data-editor-row="culture-question">
                ${renderTextarea("Prompt", "culture-prompt", question.prompt || "", 3)}
                ${renderTextarea("Answer", "culture-answer", question.answer || "", 3)}
                ${renderRemoveButton("Remove")}
              </div>
            `).join("")}
          </div>
        </section>
      </section>
    `;
  }

  function renderEnrichmentEditor() {
    return `
      <section class="lesson-section lesson-editor" aria-labelledby="lesson-editor-heading">
        <h2 id="lesson-editor-heading">Edit Page 3</h2>
        ${renderLessonTitleEditor()}
        <section class="lesson-editor-card" aria-labelledby="lesson-editor-enrichment">
          <div class="lesson-section__header">
            <h3 id="lesson-editor-enrichment">Enrichment and Reflection</h3>
            <button class="secondary-button" type="button" data-lesson-editor-action="add-enrichment-section">Add Section</button>
          </div>
          <div class="lesson-editor-table">
            ${(lesson.enrichment || []).map((section) => `
              <div class="lesson-editor-group" data-editor-row="enrichment-section">
                <div class="lesson-section__header">
                  ${renderInput("Type", "enrichment-type", section.type || "")}
                  ${renderRemoveButton("Remove Section")}
                </div>
                ${renderInput("Title", "enrichment-title", section.title || "")}
                <div class="lesson-editor-row lesson-editor-row--two">
                  ${renderInput("Image path or URL", "enrichment-image", section.image || section.imageUrl || "")}
                  ${renderInput("Image alt text", "enrichment-image-alt", section.imageAlt || "")}
                </div>
                ${renderTextarea("Body paragraphs", "enrichment-body", joinParagraphs(section.body), 6)}
              </div>
            `).join("")}
          </div>
        </section>
      </section>
    `;
  }

  function renderEditor() {
    if (page?.template === "reading") {
      return renderPageOneEditor();
    }

    if (page?.template === "grammar") {
      return renderPageTwoEditor();
    }

    if (page?.template === "culture" || page?.template === "enrichment" || page?.page === 3) {
      return renderPageThreeEditor();
    }

    return `
      <section class="lesson-section lesson-editor">
        <h2>Editing is not enabled for this page yet.</h2>
      </section>
    `;
  }

  function parseJsonField(name, root, fallback) {
    const raw = fieldValue(name, root).trim();

    if (!raw) {
      return fallback;
    }

    try {
      return JSON.parse(raw);
    } catch (error) {
      throw new Error(`${name} must contain valid JSON.`);
    }
  }

  function readEditedLessonFromForm() {
    const draft = deepCopy(lesson);

    if (hasEditorField("lesson-title")) {
      draft.title = fieldValue("lesson-title");
    }

    if (hasEditorField("lesson-greek-title")) {
      const greekTitle = fieldValue("lesson-greek-title");
      draft.greekTitle = greekTitle;
      draft.banner ||= {};
      draft.banner.text = greekTitle;
      draft.banner.caption = greekTitle;
    }

    if (page?.template === "reading") {
      draft.banner ||= {};
      draft.banner.image = fieldValue("banner-image");
      draft.vocabulary = Array.from(shell.querySelectorAll('[data-editor-row="vocab-group"]')).map((group) => ({
        category: fieldValue("vocab-category", group),
        items: Array.from(group.querySelectorAll('[data-editor-row="vocab-item"]')).map((item) => ({
          greek: fieldValue("vocab-greek", item),
          english: fieldValue("vocab-english", item),
        })),
      }));
      draft.reading ||= {};
      draft.reading.title = fieldValue("reading-title");
      draft.reading.translation = fieldValue("reading-translation");
      draft.reading.paragraphs = Array.from(shell.querySelectorAll('[data-editor-row="reading-paragraph"]')).map((paragraph) => ({
        greek: fieldValue("reading-greek", paragraph),
        gloss: Array.from(paragraph.querySelectorAll('[data-editor-row="reading-gloss"]')).map((entry) => ({
          greek: fieldValue("gloss-greek", entry),
          english: fieldValue("gloss-english", entry),
        })),
      }));
    }

    if (page?.template === "grammar") {
      draft.wordStudy ||= {};
      draft.wordStudy.label = fieldValue("word-label");
      draft.wordStudy.blocks = Array.from(shell.querySelectorAll('[data-editor-row="word-block"]')).map((block) => ({
        title: fieldValue("word-title", block),
        body: splitParagraphs(fieldValue("word-body", block)),
        display: Array.from(block.querySelectorAll('[data-editor-row="word-display"]')).map((entry) => ({
          greek: fieldValue("word-display-greek", entry),
          english: fieldValue("word-display-english", entry),
        })),
        connections: splitLines(fieldValue("word-connections", block)),
      }));

      draft.grammar ||= {};
      draft.grammar.intro = fieldValue("grammar-intro");
      draft.grammar.sections = Array.from(shell.querySelectorAll('[data-editor-row="grammar-section"]')).map((section) => {
        const table = parseJsonField("grammar-table", section, undefined);
        const formList = parseJsonField("grammar-form-list", section, undefined);
        const nextSection = {
          id: fieldValue("grammar-id", section),
          title: fieldValue("grammar-title", section),
          body: splitParagraphs(fieldValue("grammar-body", section)),
          examples: Array.from(section.querySelectorAll('[data-editor-row="grammar-example"]')).map((example) => ({
            greek: fieldValue("grammar-example-greek", example),
            english: fieldValue("grammar-example-english", example),
          })),
          practiceTopic: fieldValue("grammar-practice-topic", section),
        };

        if (table) {
          nextSection.table = table;
        }

        if (formList) {
          nextSection.formList = formList;
        }

        return nextSection;
      });
    }

    if (page?.template === "culture" || (page?.page === 3 && lesson.culture)) {
      draft.culture ||= {};
      draft.culture.title = fieldValue("culture-title");
      draft.culture.image = fieldValue("culture-image");
      draft.culture.imageAlt = fieldValue("culture-image-alt");
      draft.culture.body = splitParagraphs(fieldValue("culture-body"));
      draft.culture.questions = Array.from(shell.querySelectorAll('[data-editor-row="culture-question"]')).map((question) => ({
        prompt: fieldValue("culture-prompt", question),
        answer: fieldValue("culture-answer", question),
      }));
    }

    if (page?.template === "enrichment" && !lesson.culture) {
      draft.enrichment = Array.from(shell.querySelectorAll('[data-editor-row="enrichment-section"]')).map((section) => ({
        type: fieldValue("enrichment-type", section),
        title: fieldValue("enrichment-title", section),
        image: fieldValue("enrichment-image", section),
        imageAlt: fieldValue("enrichment-image-alt", section),
        body: splitParagraphs(fieldValue("enrichment-body", section)),
      }));
    }

    return draft;
  }

  function getRowIndex(row, selector) {
    return Array.from(shell.querySelectorAll(selector)).indexOf(row);
  }

  function mutateEditorDraft(action, button) {
    const draft = readEditedLessonFromForm();

    if (action === "add-vocab-group") {
      draft.vocabulary ||= [];
      draft.vocabulary.push({ category: "New Group", items: [{ greek: "", english: "" }] });
    }

    if (action === "add-vocab-item") {
      const group = button.closest('[data-editor-row="vocab-group"]');
      const index = getRowIndex(group, '[data-editor-row="vocab-group"]');
      draft.vocabulary[index]?.items?.push({ greek: "", english: "" });
    }

    if (action === "add-reading-paragraph") {
      draft.reading ||= {};
      draft.reading.paragraphs ||= [];
      draft.reading.paragraphs.push({ greek: "", gloss: [] });
    }

    if (action === "add-reading-gloss") {
      const paragraph = button.closest('[data-editor-row="reading-paragraph"]');
      const index = getRowIndex(paragraph, '[data-editor-row="reading-paragraph"]');
      draft.reading.paragraphs[index].gloss ||= [];
      draft.reading.paragraphs[index].gloss.push({ greek: "", english: "" });
    }

    if (action === "add-word-block") {
      draft.wordStudy ||= {};
      draft.wordStudy.blocks ||= [];
      draft.wordStudy.blocks.push({ title: "New Word Study Block", body: [""], display: [], connections: [] });
    }

    if (action === "add-word-display") {
      const block = button.closest('[data-editor-row="word-block"]');
      const index = getRowIndex(block, '[data-editor-row="word-block"]');
      draft.wordStudy.blocks[index].display ||= [];
      draft.wordStudy.blocks[index].display.push({ greek: "", english: "" });
    }

    if (action === "add-grammar-section") {
      draft.grammar ||= {};
      draft.grammar.sections ||= [];
      draft.grammar.sections.push({
        id: "new-section",
        title: "New Grammar Section",
        body: [""],
        examples: [],
        practiceTopic: "",
      });
    }

    if (action === "add-grammar-example") {
      const section = button.closest('[data-editor-row="grammar-section"]');
      const index = getRowIndex(section, '[data-editor-row="grammar-section"]');
      draft.grammar.sections[index].examples ||= [];
      draft.grammar.sections[index].examples.push({ greek: "", english: "" });
    }

    if (action === "add-culture-question") {
      draft.culture ||= {};
      draft.culture.questions ||= [];
      draft.culture.questions.push({ prompt: "", answer: "" });
    }

    if (action === "add-enrichment-section") {
      draft.enrichment ||= [];
      draft.enrichment.push({ type: "Enrichment", title: "New Section", body: [""] });
    }

    setActiveLesson(draft);
    render();
  }

  async function saveEditedLesson() {
    let draft;

    try {
      draft = readEditedLessonFromForm();
    } catch (error) {
      editStatus = error.message || "The lesson content could not be read.";
      render();
      return;
    }

    const session = readSession();

    try {
      const response = await fetch(`/api/admin/lesson-content?slug=${encodeURIComponent(lesson.id)}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-xenophon-user-email": session?.email || "",
        },
        body: JSON.stringify({
          email: session?.email || "",
          activeRole: session?.activeRole || "",
          content: draft,
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.details?.join(" ") || data.error || "Lesson content could not be saved.");
      }

      setActiveLesson(data.content);
      originalLessonForCancel = null;
      isEditMode = false;
      editStatus = `Saved ${lesson.title || lesson.id} content override as version ${data.version}.`;
      render();
    } catch (error) {
      editStatus = error.message || "Lesson content could not be saved.";
      setActiveLesson(draft);
      render();
    }
  }

  function bindEditorControls() {
    shell.querySelectorAll("[data-lesson-editor-action]").forEach((button) => {
      button.addEventListener("click", async () => {
        const action = button.dataset.lessonEditorAction;

        if (action === "edit") {
          originalLessonForCancel = deepCopy(lesson);
          isEditMode = true;
          editStatus = "";
          render();
          return;
        }

        if (action === "cancel") {
          setActiveLesson(originalLessonForCancel);
          originalLessonForCancel = null;
          isEditMode = false;
          editStatus = "Unsaved edits were discarded.";
          render();
          return;
        }

        if (action === "save") {
          button.setAttribute("aria-busy", "true");
          await saveEditedLesson();
          return;
        }

        if (action === "remove-row") {
          button.closest("[data-editor-row]")?.remove();
          try {
            setActiveLesson(readEditedLessonFromForm());
            render();
          } catch (error) {
            editStatus = error.message || "That row could not be removed.";
            render();
          }
          return;
        }

        mutateEditorDraft(action, button);
      });
    });
  }

  function renderEnrichmentPage() {
    return `
      ${renderSampleNotice()}
      <header class="lesson-page-heading">
        <p class="eyebrow">Lesson ${lesson.number}</p>
        <h1>Lesson Reflection and Review</h1>
      </header>
      ${lesson.enrichment.slice(0, 2).map((section) => `
        ${(() => {
          const sectionImage = resolveLessonImagePath(section.image || section.imageUrl);
          return `
        <section class="lesson-section enrichment-panel">
          <p class="eyebrow">${escapeHtml(section.type)}</p>
          <h2>${escapeHtml(section.title)}</h2>
          ${sectionImage ? `
            <figure class="culture-panel__figure">
              <img src="${escapeHtml(sectionImage)}" alt="${escapeHtml(section.imageAlt || "")}">
            </figure>
          ` : ""}
          ${section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </section>
          `;
        })()}
      `).join("")}
      <section class="lesson-section gate-panel lesson-quiz-panel" aria-labelledby="lesson-quiz-heading">
        <div class="lesson-section__header">
          <h2 id="lesson-quiz-heading">Final Lesson Quiz</h2>
          <a class="primary-button" href="${activityUrl("lesson-quiz", 3)}">Take Final Lesson Quiz</a>
        </div>
        <p class="gate-description">${hasOpenLessonAccess() ? "Use this quiz to check the reading, vocabulary, grammar, and reflection. Open access is enabled during build testing, so you can continue without passing it." : "Show that you can connect the reading, vocabulary, grammar, and reflection before moving on."}</p>
        <p class="gate-message" data-gate-message="lesson-quiz">${hasOpenLessonAccess() ? "Open access is enabled during build testing." : ""}</p>
      </section>
      ${renderPageNav()}
    `;
  }

  function getGateState() {
    if (hasOpenLessonAccess()) {
      return null;
    }

    if (page.template === "grammar" && lesson.activities?.["grammar-exercises"]) {
      return {
        type: "grammar-exercises",
        threshold: lesson.activities["grammar-exercises"].threshold,
        message: "Complete Grammar Exercises with 80% or higher to continue."
      };
    }

    if ((page.template === "quiz" || page.template === "enrichment" || page.template === "culture") && lesson.activities?.["lesson-quiz"]) {
      return {
        type: "lesson-quiz",
        threshold: lesson.activities["lesson-quiz"].threshold,
        message: "Pass the final lesson quiz with 80% or higher to unlock the next lesson."
      };
    }

    return null;
  }

  function renderPageNav() {
    const previousPage = page.page - 1;
    const nextPage = page.page + 1;
    const gate = getGateState();
    const nextLessonUrl = getNextLessonUrl();
    const nextLabel = page.page === lesson.pages.length ? (lesson.nextLesson?.id ? "Next Lesson" : "All Lessons") : "Next";
    const previousHref = previousPage >= 1
      ? `lesson.html?lesson=${lesson.number}&page=${previousPage}`
      : "lessons.html";
    const nextHref = nextPage <= lesson.pages.length
      ? `lesson.html?lesson=${lesson.number}&page=${nextPage}`
      : nextLessonUrl;

    return `
      <nav class="lesson-page-nav" aria-label="Lesson page navigation">
        <a class="secondary-button" href="${previousHref}" data-lesson-nav="previous">${page.page === 1 ? "All Lessons" : "Previous"}</a>
        <div class="lesson-page-nav__status">Page ${page.page} of ${lesson.pages.length}</div>
        <a class="primary-button gated-next" href="${nextHref}" data-lesson-nav="next" ${gate ? `data-required-gate="${gate.type}" aria-disabled="true"` : ""}>${nextLabel}</a>
      </nav>
    `;
  }

  function getNextLessonUrl() {
    const nextId = lesson.nextLesson?.id || "";
    const nextLesson = nextId ? window.xenophonLessonData?.getLesson(nextId) : null;

    if (nextLesson?.number) {
      return `lesson.html?lesson=${nextLesson.number}&page=1`;
    }

    return lesson.nextLesson?.fallbackUrl || "lessons.html";
  }

  function render() {
    if (!lesson || !page) {
      shell.innerHTML = `
        <section class="lesson-section">
          <p class="eyebrow">Lesson unavailable</p>
          <h2>That lesson template is not ready yet.</h2>
          <p class="muted">Return to the lessons list and choose an available lesson.</p>
          <a class="secondary-button" href="lessons.html">All Lessons</a>
        </section>
      `;
      return;
    }

    let content = "";

    if (isEditMode) {
      content = renderEditor();
    } else if (page.template === "reading") {
      content = renderReadingPage();
    } else if (page.template === "vocabulary") {
      content = renderVocabularyPage();
    } else if (page.template === "culture") {
      content = renderCulturePage();
    } else if (page.template === "grammar") {
      content = renderGrammarPage();
    } else if (page.template === "quiz") {
      content = renderQuizPage();
    } else {
      content = renderEnrichmentPage();
    }

    shell.innerHTML = `${renderAdminToolbar()}${content}`;

    if (!isEditMode) {
      updateGateControls();
      bindVocabularyAudio();
      bindLessonNavigation();
    }

    bindEditorControls();
    window.applyGreekTextStyling?.(shell);
  }

  function bindVocabularyAudio() {
    shell.querySelectorAll("[data-vocab-audio]").forEach((button) => {
      button.addEventListener("click", () => {
        const audio = new Audio(button.dataset.vocabAudio);
        audio.play().catch((error) => {
          console.warn("Vocabulary audio could not be played.", error);
        });
      });
    });
  }

  function updateGateControls() {
    const gate = getGateState();
    if (!gate) {
      return;
    }

    const result = window.xenophonLessonProgress?.getActivityResult(lesson.id, gate.type);
    const passed = window.xenophonLessonProgress?.isActivityPassed(lesson.id, gate.type, gate.threshold);
    const nextLink = shell.querySelector(`[data-required-gate="${gate.type}"]`);
    const message = shell.querySelector(`[data-gate-message="${gate.type}"]`);

    if (nextLink) {
      nextLink.classList.toggle("is-disabled", !passed);
      nextLink.setAttribute("aria-disabled", passed ? "false" : "true");
    }

    if (message) {
      message.textContent = passed
        ? `Passed with ${Math.round(Number(result?.score || gate.threshold))}%. You may continue.`
        : gate.message;
    }
  }

  function bindLessonNavigation() {
    shell.querySelectorAll("[data-lesson-nav]").forEach((link) => {
      link.addEventListener("click", async (event) => {
        const requiredGate = link.dataset.requiredGate;
        if (requiredGate) {
          const gate = getGateState();
          const passed = window.xenophonLessonProgress?.isActivityPassed(lesson.id, requiredGate, gate?.threshold || 80);
          if (!passed) {
            event.preventDefault();
            updateGateControls();
            return;
          }
        }

        if (link.dataset.lessonNav === "next") {
          event.preventDefault();
          link.setAttribute("aria-busy", "true");
          const nextPage = page.page + 1;

          if (nextPage <= lesson.pages.length) {
            const destination = lesson.pages.find((item) => item.page === nextPage);
            await window.xenophonLessonProgress?.markSegment({
              lessonSlug: lesson.id,
              segmentSlug: destination.slug,
              page: destination.page,
              title: destination.title
            });
            window.location.href = `lesson.html?lesson=${lesson.number}&page=${nextPage}`;
            return;
          }

          const quiz = lesson.activities?.["lesson-quiz"];
          const quizPassed = !quiz || window.xenophonLessonProgress?.isActivityPassed(lesson.id, "lesson-quiz", quiz.threshold);
          if (!quizPassed && hasOpenLessonAccess()) {
            window.location.href = lesson.nextLesson.fallbackUrl;
            return;
          }
          await window.xenophonLessonProgress?.completeLesson({
            lessonSlug: lesson.id,
            nextLessonSlug: lesson.nextLesson.id,
            advanceToNext: true
          });
          window.location.href = lesson.nextLesson.fallbackUrl;
        }
      });
    });
  }

  async function init() {
    await loadLessonContentOverride();
    render();

    if (lesson && page) {
      window.xenophonLessonProgress?.markSegment({
        lessonSlug: lesson.id,
        segmentSlug: page.slug,
        page: page.page,
        title: page.title
      });
    }
  }

  init();
}());
