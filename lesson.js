(function () {
  const shell = document.querySelector("[data-lesson-template]");
  const params = new URLSearchParams(window.location.search);
  const lesson = window.xenophonLessonData?.getLesson(params.get("lesson") || "1");
  const maxPage = lesson?.pages?.length || 1;
  const requestedPage = Math.max(1, Math.min(maxPage, Number(params.get("page") || "1")));
  const page = lesson?.pages.find((item) => item.page === requestedPage) || lesson?.pages[0];

  if (!shell) {
    return;
  }

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

  document.title = `${lesson.title} - Learn Greek with Xenophon`;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
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
    return `
      <header class="lesson-hero">
        <img src="${escapeHtml(lesson.banner.image)}" alt="${escapeHtml(lesson.banner.alt)}">
        <div class="lesson-hero__overlay">
          <p class="lesson-hero__kicker">Lesson ${lesson.number}</p>
          <h1 class="lesson-hero__title">${escapeHtml(lesson.title)}</h1>
          <p class="lesson-hero__caption greek-text" lang="grc">${escapeHtml(lesson.greekTitle || lesson.banner.caption)}</p>
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
        <p class="gate-description">Review the Lesson 1 vocabulary before you move into the cultural reading and grammar practice.</p>
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

    return `
      ${renderSampleNotice()}
      <header class="lesson-page-heading">
        <p class="eyebrow">Culture and History</p>
        <h1>${escapeHtml(culture.title || page.title)}</h1>
      </header>
      <section class="lesson-section enrichment-panel culture-panel">
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

  function renderEnrichmentPage() {
    return `
      ${renderSampleNotice()}
      <header class="lesson-page-heading">
        <p class="eyebrow">Lesson ${lesson.number}</p>
        <h1>Lesson Reflection and Review</h1>
      </header>
      ${lesson.enrichment.slice(0, 2).map((section) => `
        <section class="lesson-section enrichment-panel">
          <p class="eyebrow">${escapeHtml(section.type)}</p>
          <h2>${escapeHtml(section.title)}</h2>
          ${section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </section>
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
    const nextLabel = page.page === lesson.pages.length ? "Next Lesson" : "Next";
    const previousHref = previousPage >= 1
      ? `lesson.html?lesson=${lesson.number}&page=${previousPage}`
      : "lessons.html";
    const nextHref = nextPage <= lesson.pages.length
      ? `lesson.html?lesson=${lesson.number}&page=${nextPage}`
      : lesson.nextLesson.fallbackUrl;

    return `
      <nav class="lesson-page-nav" aria-label="Lesson page navigation">
        <a class="secondary-button" href="${previousHref}" data-lesson-nav="previous">${page.page === 1 ? "All Lessons" : "Previous"}</a>
        <div class="lesson-page-nav__status">Page ${page.page} of ${lesson.pages.length}</div>
        <a class="primary-button gated-next" href="${nextHref}" data-lesson-nav="next" ${gate ? `data-required-gate="${gate.type}" aria-disabled="true"` : ""}>${nextLabel}</a>
      </nav>
    `;
  }

  function render() {
    if (page.template === "reading") {
      shell.innerHTML = renderReadingPage();
    } else if (page.template === "vocabulary") {
      shell.innerHTML = renderVocabularyPage();
    } else if (page.template === "culture") {
      shell.innerHTML = renderCulturePage();
    } else if (page.template === "grammar") {
      shell.innerHTML = renderGrammarPage();
    } else if (page.template === "quiz") {
      shell.innerHTML = renderQuizPage();
    } else {
      shell.innerHTML = renderEnrichmentPage();
    }

    updateGateControls();
    bindVocabularyAudio();
    bindLessonNavigation();
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

  render();

  window.xenophonLessonProgress?.markSegment({
    lessonSlug: lesson.id,
    segmentSlug: page.slug,
    page: page.page,
    title: page.title
  });
}());
