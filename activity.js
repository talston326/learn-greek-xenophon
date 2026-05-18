(function () {
  const shell = document.querySelector("[data-activity-shell]");
  const params = new URLSearchParams(window.location.search);
  const lesson = window.xenophonLessonData?.getLesson(params.get("lesson") || "4");
  const activityType = params.get("type") || "vocab-flashcards";
  const topic = params.get("topic") || "";
  let returnTo = params.get("returnTo") || `lesson.html?lesson=${lesson?.number || 4}&page=1`;
  let flashcards = [];
  let currentCardIndex = 0;
  let flashcardMode = "greek-english";
  let flashcardSessionTotal = 0;
  let reviewedInMode = 0;
  let topicPracticeOffset = 0;
  let topicPracticeQuestions = [];
  const TOPIC_PRACTICE_BATCH_SIZE = 5;

  if (returnTo.includes("lesson.html") && params.has("page") && !returnTo.includes("page=")) {
    returnTo += `${returnTo.includes("?") ? "&" : "?"}page=${params.get("page")}`;
  }

  if (!shell) {
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

  function renderStudyText(value, isGreek = false) {
    const escaped = escapeHtml(value);

    if (isGreek) {
      return escaped;
    }

    return escaped.replace(
      /([\u0370-\u03ff\u1f00-\u1fff][\u0370-\u03ff\u1f00-\u1fff\s·,.;:!?()\-]*)/g,
      '<span class="greek-text" lang="grc">$1</span>'
    );
  }

  function titleForActivity() {
    if (!lesson) {
      return "Activity unavailable";
    }

    if (activityType === "topic-practice" && topic) {
      const section = lesson.grammar?.sections?.find((item) => item.practiceTopic === topic || item.id === topic);
      const topicTitle = section?.title?.replace(/^\d+\.\s*/, "");

      if (topicTitle) {
        return `Practice: ${topicTitle}`;
      }
    }

    return lesson.activities?.[activityType]?.title ||
      window.xenophonLessonData.activityLabels[activityType] ||
      "Lesson Activity";
  }

  function renderShell(content) {
    document.title = `${titleForActivity()} - Learn Greek with Xenophon`;
    shell.innerHTML = `
      <header class="activity-header">
        <div>
          <p class="eyebrow">Lesson ${escapeHtml(lesson?.number || "")}</p>
          <h1>${escapeHtml(titleForActivity())}</h1>
          <p class="muted">${escapeHtml(lesson?.sampleNotice || lesson?.scope || "Reusable activity page")}</p>
        </div>
        <a class="activity-return-link" href="${escapeHtml(returnTo)}">Exit / Return to Lesson</a>
      </header>
      ${content}
    `;
    window.applyGreekTextStyling?.(shell);
  }

  function renderUnavailable() {
    renderShell(`
      <section class="lesson-section">
        <h2>This activity is not available yet.</h2>
        <p class="muted">The reusable shell is ready, but this lesson does not have data for this activity type.</p>
      </section>
    `);
  }

  function getFlashcardSource() {
    if (activityType === "vocab-flashcards") {
      return window.xenophonLessonData.getVocabularyCards(lesson);
    }

    if (activityType === "grammar-flashcards") {
      return lesson.activities["grammar-flashcards"]?.cards || [];
    }

    return [];
  }

  function normalizeFlashcards() {
    flashcards = getFlashcardSource().map((card, index) => ({
      ...card,
      id: `${activityType}-${index}`
    }));
    if (activityType === "vocab-flashcards") {
      flashcards.sort(() => Math.random() - 0.5);
    }
    currentCardIndex = 0;
    reviewedInMode = 0;
    flashcardSessionTotal = flashcards.length;
  }

  function getCardSides(card) {
    if (activityType !== "vocab-flashcards") {
      return { prompt: card.prompt, answer: card.answer, promptGreek: false, answerGreek: false };
    }

    if (flashcardMode === "mixed") {
      card.direction ||= Math.random() > 0.5 ? "greek-english" : "english-greek";
    } else {
      card.direction = flashcardMode;
    }

    const mode = card.direction;

    if (mode === "english-greek") {
      return { prompt: card.english, answer: card.greek, promptGreek: false, answerGreek: true };
    }

    return { prompt: card.greek, answer: card.english, promptGreek: true, answerGreek: false };
  }

  function renderFlashcardStudy(flipped = false) {
    if (!flashcards.length) {
      renderShell(`
        <section class="flashcard-study">
          <h2>All cards are marked Know It.</h2>
          <p class="muted">This session is complete.</p>
          <a class="primary-button" href="${escapeHtml(returnTo)}">Return to Lesson</a>
        </section>
      `);
      return;
    }

    const card = flashcards[currentCardIndex] || flashcards[0];
    const sides = getCardSides(card);
    const currentPosition = Math.min(reviewedInMode + 1, flashcardSessionTotal || flashcards.length);
    renderShell(`
      <section class="flashcard-study" aria-label="Flashcard study session">
        ${activityType === "vocab-flashcards" ? `
          <div class="flashcard-mode" role="group" aria-label="Vocabulary flashcard direction">
            <button type="button" data-flashcard-mode="greek-english" class="${flashcardMode === "greek-english" ? "is-active" : ""}" aria-pressed="${flashcardMode === "greek-english"}">Greek to English</button>
            <button type="button" data-flashcard-mode="english-greek" class="${flashcardMode === "english-greek" ? "is-active" : ""}" aria-pressed="${flashcardMode === "english-greek"}">English to Greek</button>
            <button type="button" data-flashcard-mode="mixed" class="${flashcardMode === "mixed" ? "is-active" : ""}" aria-pressed="${flashcardMode === "mixed"}">Mixed</button>
          </div>
          <p class="flashcard-mode-note">Changing mode restarts and reshuffles this study session.</p>
        ` : ""}
        <div class="flashcard-progress" aria-live="polite">
          <span>Card ${currentPosition} of ${flashcardSessionTotal || flashcards.length}</span>
          <span>Review pile: ${flashcards.length} card${flashcards.length === 1 ? "" : "s"}</span>
        </div>
        <button class="flashcard-card ${flipped ? "is-flipped" : ""}" type="button" data-flashcard-flip aria-label="Flip flashcard">
          <span class="flashcard-card__label">${flipped ? "Answer" : "Prompt"}</span>
          <span class="flashcard-card__text ${flipped && sides.answerGreek ? "greek-text" : !flipped && sides.promptGreek ? "greek-text" : ""}" ${flipped && sides.answerGreek || !flipped && sides.promptGreek ? 'lang="grc"' : ""}>
            ${renderStudyText(flipped ? sides.answer : sides.prompt, flipped ? sides.answerGreek : sides.promptGreek)}
          </span>
          <span class="flashcard-card__hint">${flipped ? "Mark this card below." : "Click or tap to reveal the answer."}</span>
        </button>
        ${flipped ? `
          <div class="flashcard-actions">
            <button class="secondary-button" type="button" data-flashcard-learning>Review Again</button>
            <button class="primary-button" type="button" data-flashcard-known>Know It</button>
          </div>
        ` : ""}
      </section>
    `);
    bindFlashcardControls(flipped);
  }

  function bindFlashcardControls(flipped) {
    shell.querySelectorAll("[data-flashcard-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        flashcardMode = button.dataset.flashcardMode;
        normalizeFlashcards();
        renderFlashcardStudy(false);
      });
    });

    shell.querySelector("[data-flashcard-flip]")?.addEventListener("click", () => {
      renderFlashcardStudy(!flipped);
    });

    shell.querySelector("[data-flashcard-learning]")?.addEventListener("click", () => {
      delete flashcards[currentCardIndex].direction;
      reviewedInMode += 1;
      currentCardIndex = (currentCardIndex + 1) % flashcards.length;
      renderFlashcardStudy(false);
    });

    shell.querySelector("[data-flashcard-known]")?.addEventListener("click", async () => {
      flashcards.splice(currentCardIndex, 1);
      reviewedInMode += 1;
      if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0;
      }

      if (!flashcards.length) {
        await window.xenophonLessonProgress?.recordActivityResult({
          lessonSlug: lesson.id,
          activityType,
          score: 100,
          passed: true
        });
      }

      renderFlashcardStudy(false);
    });
  }

  function getQuestions() {
    const activity = lesson.activities?.[activityType];
    const questions = activity?.questions || [];
    if (activityType === "topic-practice" && topic) {
      return questions.filter((question) => question.topic === topic);
    }
    return questions;
  }

  function getCorrectChoice(question) {
    return question.choices.find((choice) => choice.correct);
  }

  function getChoiceFeedback(question, choice) {
    if (choice.correct) {
      return choice.feedback || "Correct.";
    }

    return choice.feedback ||
      question.explanation ||
      `Not quite. The correct answer is ${getCorrectChoice(question)?.text || "shown in the lesson notes"}.`;
  }

  function shuffleItems(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
  }

  function shuffleChoices(choices) {
    return shuffleItems(choices);
  }

  function prepareTopicQuestion(question) {
    return {
      ...question,
      choices: shuffleChoices(question.choices)
    };
  }

  function getTopicPracticeQuestions() {
    if (!topicPracticeQuestions.length) {
      topicPracticeQuestions = shuffleItems(getQuestions());
    }

    return topicPracticeQuestions;
  }

  function renderTopicPractice() {
    const questions = getTopicPracticeQuestions();

    if (!questions.length) {
      renderUnavailable();
      return;
    }

    const currentQuestions = questions
      .slice(topicPracticeOffset, topicPracticeOffset + TOPIC_PRACTICE_BATCH_SIZE)
      .map(prepareTopicQuestion);
    const start = topicPracticeOffset + 1;
    const end = topicPracticeOffset + currentQuestions.length;

    renderShell(`
      <section class="topic-practice-session" aria-label="Topic practice session">
        <div class="topic-practice-progress" aria-live="polite">
          <span>Questions ${start}-${end} of ${questions.length}</span>
          <span>Answer each one correctly to continue.</span>
        </div>
        <div class="topic-practice-list">
          ${currentQuestions.map((question, questionIndex) => `
            <fieldset class="quiz-question topic-practice-question" data-topic-question="${questionIndex}">
              <legend>${escapeHtml(question.prompt)}</legend>
              <div class="quiz-choice-list">
                ${question.choices.map((choice, choiceIndex) => `
                  <label data-topic-choice="${choiceIndex}">
                    <input type="radio" name="topic-question-${questionIndex}" value="${choiceIndex}">
                    <span class="topic-choice-status" aria-hidden="true"></span>
                    <span>${escapeHtml(choice.text)}</span>
                  </label>
                `).join("")}
              </div>
              <p class="topic-choice-feedback" data-topic-feedback aria-live="polite"></p>
            </fieldset>
          `).join("")}
        </div>
        <div class="activity-submit-row topic-practice-actions">
          <button class="primary-button" type="button" data-topic-continue disabled>Continue</button>
          <a class="secondary-button" href="${escapeHtml(returnTo)}">Quit</a>
        </div>
      </section>
    `);
    bindTopicPractice(currentQuestions, questions.length);
  }

  function updateTopicContinueState() {
    const questions = [...shell.querySelectorAll("[data-topic-question]")];
    const allCorrect = questions.length > 0 && questions.every((questionEl) => questionEl.dataset.correct === "true");
    const continueButton = shell.querySelector("[data-topic-continue]");

    if (continueButton) {
      continueButton.disabled = !allCorrect;
    }
  }

  function bindTopicPractice(currentQuestions, totalQuestions) {
    shell.querySelectorAll("[data-topic-question]").forEach((questionEl) => {
      const questionIndex = Number(questionEl.dataset.topicQuestion);
      const question = currentQuestions[questionIndex];

      questionEl.querySelectorAll("input[type='radio']").forEach((input) => {
        input.addEventListener("change", () => {
          const choiceIndex = Number(input.value);
          const choice = question.choices[choiceIndex];
          const feedback = questionEl.querySelector("[data-topic-feedback]");

          questionEl.dataset.correct = String(Boolean(choice.correct));
          questionEl.querySelectorAll("[data-topic-choice]").forEach((label) => {
            label.classList.remove("is-correct", "is-wrong");
            label.querySelector(".topic-choice-status").textContent = "";
          });

          const selectedLabel = questionEl.querySelector(`[data-topic-choice="${choiceIndex}"]`);
          selectedLabel?.classList.add(choice.correct ? "is-correct" : "is-wrong");
          const status = selectedLabel?.querySelector(".topic-choice-status");
          if (status) {
            status.textContent = choice.correct ? "✓" : "×";
          }

          if (feedback) {
            feedback.textContent = getChoiceFeedback(question, choice);
            feedback.classList.toggle("is-correct", Boolean(choice.correct));
            feedback.classList.toggle("is-wrong", !choice.correct);
          }

          updateTopicContinueState();
        });
      });
    });

    shell.querySelector("[data-topic-continue]")?.addEventListener("click", async () => {
      const nextOffset = topicPracticeOffset + TOPIC_PRACTICE_BATCH_SIZE;

      if (nextOffset >= totalQuestions) {
        await window.xenophonLessonProgress?.recordActivityResult({
          lessonSlug: lesson.id,
          activityType,
          score: 100,
          passed: true
        });
        renderShell(`
          <section class="flashcard-study">
            <h2>Topic practice complete.</h2>
            <p class="muted">You answered all ${totalQuestions} questions correctly.</p>
            <a class="primary-button" href="${escapeHtml(returnTo)}">Return to Lesson</a>
          </section>
        `);
        return;
      }

      topicPracticeOffset = nextOffset;
      renderTopicPractice();
      shell.querySelector("[data-topic-question]")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    updateTopicContinueState();
  }

  function renderQuiz() {
    const questions = getQuestions();

    if (!questions.length) {
      renderUnavailable();
      return;
    }

    renderShell(`
      <form class="quiz-form" data-quiz-form>
        <div class="activity-question-types">
          <span>Multiple choice</span>
          <span>Future-ready: matching</span>
          <span>Future-ready: fill-in-the-blank</span>
          <span>Future-ready: translation builder</span>
        </div>
        ${questions.map((question, questionIndex) => `
          <fieldset class="quiz-question">
            <legend>${escapeHtml(question.prompt)}</legend>
            <div class="quiz-choice-list">
              ${question.choices.map((choice, choiceIndex) => `
                <label>
                  <input type="radio" name="question-${questionIndex}" value="${choiceIndex}" required>
                  <span class="topic-choice-status" aria-hidden="true"></span>
                  <span>${escapeHtml(choice.text)}</span>
                </label>
              `).join("")}
            </div>
          </fieldset>
        `).join("")}
        <div class="translation-builder" hidden data-translation-builder-placeholder>
          <button type="button">Translation builder placeholder</button>
        </div>
        <div class="activity-submit-row">
          <button class="primary-button" type="submit">Submit</button>
        </div>
        <p class="activity-result" data-activity-result aria-live="polite"></p>
      </form>
    `);
    bindQuizForm(questions);
  }

  function revealQuizFeedback(form, questions) {
    questions.forEach((question, questionIndex) => {
      const selectedAnswer = form.querySelector(`input[name="question-${questionIndex}"]:checked`);
      const selectedIndex = selectedAnswer ? Number(selectedAnswer.value) : -1;

      question.choices.forEach((choice, choiceIndex) => {
        const input = form.querySelector(`input[name="question-${questionIndex}"][value="${choiceIndex}"]`);
        const label = input?.closest("label");
        const status = label?.querySelector(".topic-choice-status");

        label?.classList.remove("is-correct", "is-wrong");
        if (status) {
          status.textContent = "";
        }

        if (choice.correct) {
          label?.classList.add("is-correct");
          if (status) {
            status.textContent = "✓";
          }
          return;
        }

        if (choiceIndex === selectedIndex) {
          label?.classList.add("is-wrong");
          if (status) {
            status.textContent = "×";
          }
        }
      });
    });
  }

  function bindQuizForm(questions) {
    shell.querySelector("[data-quiz-form]")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      let correct = 0;

      questions.forEach((question, questionIndex) => {
        const answer = form.querySelector(`input[name="question-${questionIndex}"]:checked`);
        if (answer && question.choices[Number(answer.value)]?.correct) {
          correct += 1;
        }
      });

      revealQuizFeedback(form, questions);

      const score = Math.round((correct / questions.length) * 100);
      const threshold = lesson.activities?.[activityType]?.threshold || 0;
      const passed = threshold ? score >= threshold : true;
      const result = shell.querySelector("[data-activity-result]");

      await window.xenophonLessonProgress?.recordActivityResult({
        lessonSlug: lesson.id,
        activityType,
        score,
        passed
      });

      if (passed && activityType === "lesson-quiz") {
        await window.xenophonLessonProgress?.completeLesson({
          lessonSlug: lesson.id,
          nextLessonSlug: lesson.nextLesson.id,
          advanceToNext: false
        });
      }

      if (result) {
        result.innerHTML = passed
          ? `Passed with ${score}%. Review any marked answers below. <a class="primary-button" href="${escapeHtml(returnTo)}">Return to Lesson</a>`
          : `Score: ${score}%. Review the marked answers below, then try again to reach ${threshold || 80}%.`;
      }
    });
  }

  if (!lesson) {
    renderUnavailable();
    return;
  }

  if (activityType === "vocab-flashcards" || activityType === "grammar-flashcards") {
    normalizeFlashcards();
    renderFlashcardStudy(false);
    return;
  }

  if (activityType === "topic-practice") {
    renderTopicPractice();
    return;
  }

  renderQuiz();
}());
