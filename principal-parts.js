(function () {
  const root = document.querySelector("[data-principal-parts-root]");
  const pageType = root?.dataset.principalPartsRoot;
  const data = window.xenophonPrincipalParts;
  const progress = window.xenophonPrincipalPartsProgress;
  const SESSION_LENGTH = 5;
  let currentQuestion = null;
  let answered = false;
  let sessionTotal = 0;
  let sessionCorrect = 0;
  let irregularCorrectIds = new Set();

  if (!root || !data) {
    return;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function shuffle(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
  }

  function sampleOptions(allOptions, correct, count = 4) {
    const pool = shuffle(allOptions.filter((option) => option !== correct));
    return shuffle([correct, ...pool.slice(0, count - 1)]);
  }

  function renderPartCell(part) {
    if (!part?.form) {
      return `<span class="principal-parts-empty">—</span>`;
    }

    return `
      <span class="principal-parts-form greek-text" lang="grc">${escapeHtml(part.form)}</span>
      <span class="principal-parts-translation">${escapeHtml(part.translation)}</span>
    `;
  }

  function renderPrincipalPartsTable(verbs = data.getVerbs()) {
    const categories = data.getCategories();

    return `
      <div class="principal-parts-table-wrap" tabindex="0" aria-label="Principal parts table">
        <table class="principal-parts-table">
          <thead>
            <tr>
              <th scope="col">Verb</th>
              ${categories.map((category) => `<th scope="col">${escapeHtml(category.shortLabel || category.label)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${verbs.map((verb) => `
              <tr>
                <th scope="row">
                  <a class="principal-parts-verb-link greek-text" lang="grc" href="principal-parts-verb.html?verb=${escapeHtml(verb.verbId)}">${escapeHtml(verb.displayLemma)}</a>
                </th>
                ${categories.map((category) => `<td data-label="${escapeHtml(category.shortLabel || category.label)}">${renderPartCell(verb.principalParts[category.key])}</td>`).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderIndex() {
    progress?.recordIntroView?.();
    root.innerHTML = `
      <section class="lesson-section principal-parts-intro">
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">Course Resource</p>
            <h2>Principal Parts for Reading Xenophon</h2>
          </div>
          <a class="primary-button" href="principal-parts-practice.html">Begin Practice</a>
        </div>
        <div class="principal-parts-copy">
          <p>
            Principal parts are the key forms of Greek verbs. Memorizing them helps you recognize tense,
            voice, mood, and meaning when a form in a Xenophon passage does not look exactly like its dictionary entry.
          </p>
          <p>
            Use this resource as a bridge between vocabulary and parsing. When you meet a form such as
            <span class="greek-text" lang="grc">ἦλθον</span>, you can connect it back to
            <span class="greek-text" lang="grc">ἔρχομαι</span> and identify it as the aorist principal part.
          </p>
        </div>
      </section>

      <section class="lesson-section">
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">Reference Table</p>
            <h2>Core Principal Parts</h2>
          </div>
          <a class="secondary-button" href="resources.html">Back to Resources</a>
        </div>
        ${renderPrincipalPartsTable()}
      </section>
    `;
    window.applyGreekTextStyling?.(root);
  }

  function renderVerbPage() {
    const verbId = new URLSearchParams(window.location.search).get("verb") || "luo";
    const verb = data.getVerb(verbId);
    const categories = data.getCategories();

    if (!verb) {
      root.innerHTML = `
        <section class="lesson-section">
          <h2>Principal part not found.</h2>
          <p class="muted">Choose a verb from the main Principal Parts resource.</p>
          <a class="primary-button" href="principal-parts.html">Back to Principal Parts</a>
        </section>
      `;
      return;
    }

    progress?.recordVerbStudy?.(verb.verbId, verb.displayLemma);
    document.title = `${verb.displayLemma} Principal Parts - Learn Greek with Xenophon`;
    root.innerHTML = `
      <section class="lesson-section principal-parts-verb-study">
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">Principal Parts Study</p>
            <h2 class="greek-text" lang="grc">${escapeHtml(verb.displayLemma)}</h2>
            <p>${escapeHtml(verb.dictionaryMeaning || verb.meaning)}</p>
          </div>
          <div class="principal-parts-actions">
            <a class="secondary-button" href="principal-parts.html">Back to Principal Parts</a>
            <a class="primary-button" href="principal-parts-practice.html?verb=${escapeHtml(verb.verbId)}">Practice this Verb</a>
          </div>
        </div>
        <p>${escapeHtml(verb.notes)}</p>
        ${verb.lessonReferences?.length ? `
          <div class="principal-parts-links" aria-label="Lesson connections">
            ${verb.lessonReferences.map((reference) => `<a class="small-link" href="${escapeHtml(reference.href)}">${escapeHtml(reference.label)} -></a>`).join("")}
          </div>
        ` : ""}
      </section>

      <section class="lesson-section">
        <h2>Six Principal Parts</h2>
        <div class="principal-parts-table-wrap">
          <table class="principal-parts-table principal-parts-table--single">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Greek Form</th>
                <th scope="col">Meaning</th>
              </tr>
            </thead>
            <tbody>
              ${categories.map((category) => {
                const part = verb.principalParts[category.key];
                return `
                  <tr>
                    <th scope="row">${escapeHtml(category.label)}</th>
                    <td data-label="Greek Form">${renderPartCell(part)}</td>
                    <td data-label="Meaning">${escapeHtml(part?.translation || "—")}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
    window.applyGreekTextStyling?.(root);
  }

  function getPracticePool() {
    const forms = data.getPracticeForms();
    const verbId = new URLSearchParams(window.location.search).get("verb");
    return verbId ? forms.filter((form) => form.verbId === verbId) : forms;
  }

  function chooseQuestion() {
    const pool = getPracticePool();
    currentQuestion = shuffle(pool)[0] || null;
    answered = false;
    return currentQuestion;
  }

  function renderChoiceGroup(name, label, options, greek = false) {
    return `
      <fieldset class="quiz-question principal-parts-question-group">
        <legend>${escapeHtml(label)}</legend>
        <div class="quiz-choice-list">
          ${options.map((option, index) => `
            <label>
              <input type="radio" name="${escapeHtml(name)}" value="${escapeHtml(option)}" ${index === 0 ? "required" : ""}>
              <span class="topic-choice-status" aria-hidden="true"></span>
              <span class="${greek ? "greek-text" : ""}" ${greek ? 'lang="grc"' : ""}>${escapeHtml(option)}</span>
            </label>
          `).join("")}
        </div>
      </fieldset>
    `;
  }

  function renderPracticeQuestion() {
    const question = chooseQuestion();

    if (!question) {
      root.innerHTML = `
        <section class="lesson-section">
          <h2>No practice forms available.</h2>
          <a class="primary-button" href="principal-parts.html">Back to Principal Parts</a>
        </section>
      `;
      return;
    }

    const forms = data.getPracticeForms();
    const verbs = data.getVerbs();
    const categories = data.getCategories();
    const verbOptions = sampleOptions(verbs.map((verb) => verb.displayLemma), question.displayLemma);
    const categoryOptions = sampleOptions(categories.map((category) => category.label), question.categoryLabel, 6);
    const meaningOptions = sampleOptions(forms.map((form) => form.translation), question.translation);

    root.innerHTML = `
      <section class="lesson-section principal-parts-practice-card">
        <div class="lesson-section__header">
          <div>
            <p class="eyebrow">Principal Parts Practice</p>
            <h2>Identify the Form</h2>
          </div>
          <a class="secondary-button" href="principal-parts.html">Back to Principal Parts</a>
        </div>
        <div class="principal-parts-score" aria-live="polite">
          <span>Session: ${sessionTotal}/${SESSION_LENGTH}</span>
          <span>Score: ${sessionCorrect}/${sessionTotal}</span>
        </div>
        <div class="principal-parts-prompt greek-text" lang="grc">${escapeHtml(question.form)}</div>
        <form data-principal-parts-form>
          ${renderChoiceGroup("verb", "Lexical Verb", verbOptions, true)}
          ${renderChoiceGroup("category", "Principal Part", categoryOptions)}
          ${renderChoiceGroup("meaning", "Meaning", meaningOptions)}
          <div class="activity-submit-row principal-parts-practice-actions">
            <button class="primary-button" type="submit">Check Answer</button>
            <button class="secondary-button" type="button" data-principal-parts-next hidden>Next Form</button>
          </div>
          <p class="topic-choice-feedback" data-principal-parts-feedback aria-live="polite"></p>
        </form>
      </section>
    `;
    bindPracticeForm();
    window.applyGreekTextStyling?.(root);
  }

  function markGroup(form, name, expected) {
    const selected = form.querySelector(`input[name="${name}"]:checked`);
    const selectedValue = selected?.value || "";
    const isCorrect = selectedValue === expected;

    form.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
      const label = input.closest("label");
      label?.classList.remove("is-correct", "is-wrong");
      const status = label?.querySelector(".topic-choice-status");
      if (status) {
        status.textContent = "";
      }
    });

    const selectedLabel = selected?.closest("label");
    selectedLabel?.classList.add(isCorrect ? "is-correct" : "is-wrong");
    const status = selectedLabel?.querySelector(".topic-choice-status");
    if (status) {
      status.textContent = isCorrect ? "✓" : "×";
    }

    return isCorrect;
  }

  function bindPracticeForm() {
    const form = root.querySelector("[data-principal-parts-form]");
    const nextButton = root.querySelector("[data-principal-parts-next]");
    const feedback = root.querySelector("[data-principal-parts-feedback]");

    form?.addEventListener("submit", (event) => {
      event.preventDefault();

      if (answered || !currentQuestion) {
        return;
      }

      const verbCorrect = markGroup(form, "verb", currentQuestion.displayLemma);
      const categoryCorrect = markGroup(form, "category", currentQuestion.categoryLabel);
      const meaningCorrect = markGroup(form, "meaning", currentQuestion.translation);
      const correct = verbCorrect && categoryCorrect && meaningCorrect;
      answered = true;
      sessionTotal += 1;

      if (correct) {
        sessionCorrect += 1;
        if (currentQuestion.irregular) {
          irregularCorrectIds.add(currentQuestion.verbId);
        }
      }

      if (feedback) {
        feedback.classList.toggle("is-correct", correct);
        feedback.classList.toggle("is-wrong", !correct);
        feedback.innerHTML = correct
          ? `Correct. <span class="greek-text" lang="grc">${escapeHtml(currentQuestion.form)}</span> is ${escapeHtml(currentQuestion.displayLemma)}, ${escapeHtml(currentQuestion.categoryLabel)}, ${escapeHtml(currentQuestion.translation)}.`
          : `Not quite. <span class="greek-text" lang="grc">${escapeHtml(currentQuestion.form)}</span> is ${escapeHtml(currentQuestion.displayLemma)}, ${escapeHtml(currentQuestion.categoryLabel)}, ${escapeHtml(currentQuestion.translation)}.`;
      }

      if (sessionTotal >= SESSION_LENGTH) {
        progress?.recordPracticeSession?.({
          total: sessionTotal,
          correct: sessionCorrect,
          irregularCorrectIds: Array.from(irregularCorrectIds)
        });
        nextButton.textContent = "Continue Practicing";
      }

      nextButton.hidden = false;
      form.querySelector("button[type='submit']").disabled = true;
      window.applyGreekTextStyling?.(root);
    });

    nextButton?.addEventListener("click", () => {
      if (sessionTotal >= SESSION_LENGTH) {
        sessionTotal = 0;
        sessionCorrect = 0;
        irregularCorrectIds = new Set();
      }
      renderPracticeQuestion();
    });
  }

  if (pageType === "index") {
    renderIndex();
  } else if (pageType === "verb") {
    renderVerbPage();
  } else if (pageType === "practice") {
    renderPracticeQuestion();
  }
}());
