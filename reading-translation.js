(function () {
  const MAX_LENGTH = 20000;
  let submission = null;
  let draft = "";
  let editing = false;
  let comparing = false;
  let saving = false;
  let message = "";
  let loaded = false;
  let currentLesson = null;
  let accountEmail = "";
  const escape = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  // Shared by current and future lessons; placeholders become available as soon
  // as their reading and English translation are published.
  const enabled = (lesson) => /^lesson-[1-9][0-9]*$/.test(lesson?.id || "")
    && lesson.reading?.paragraphs?.some((paragraph) => paragraph.greek?.trim())
    && Boolean(lesson.reading?.translation?.trim());
  const preview = () => Boolean(window.xenophonAuth?.readSession?.()?.professorPreview);
  const staff = () => {
    const session = window.xenophonAuth?.readSession?.();
    return ["professor", "administrator"].includes(session?.activeRole) && session.roles?.includes(session.activeRole);
  };

  async function request(method, body) {
    const query = new URLSearchParams({ email: accountEmail, lessonSlug: currentLesson.id });
    const response = await fetch(`/api/reading-translations${method === "GET" ? `?${query}` : ""}`, {
      method,
      headers: method === "POST" ? { "Content-Type": "application/json" } : undefined,
      body: method === "POST" ? JSON.stringify({ email: accountEmail, lessonSlug: currentLesson.id, body }) : undefined,
      signal: AbortSignal.timeout(10000),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Your translation could not be saved or loaded. Please try again.");
    return data.submission;
  }

  async function load(lesson) {
    if (!enabled(lesson)) return;
    currentLesson = lesson;
    accountEmail = window.xenophonAuth?.readSession?.()?.email || "";
    if (!accountEmail) {
      message = "Sign in to save your translation.";
      return;
    }
    try {
      submission = await request("GET");
      draft = submission?.body || "";
      loaded = true;
      message = submission ? "Your submitted translation is saved. Select Compare to review it." : "";
    } catch {
      message = "Your saved translation could not be loaded. Use Retry to load it before submitting.";
    }
  }

  function render(lesson) {
    if (!enabled(lesson)) return "";
    currentLesson = lesson;
    return `<section class="reading-translation" data-reading-translation aria-labelledby="your-translation-heading">
      <h3 id="your-translation-heading">${preview() ? "Student translation" : "Your translation"}</h3>
      <p>${preview() ? "Student preview: view the submitted translation and compare it with the lesson translation." : "Write your English translation, submit it, then compare it with the lesson translation."}</p>
      <div class="reading-translation-actions">
        <button class="secondary-button" type="button" data-translation-write aria-expanded="${editing}" aria-controls="translation-editor" ${preview() || !accountEmail || !loaded ? "disabled" : ""}>${submission ? "Revise Translation" : "Write Translation"}</button>
        ${!loaded && accountEmail ? '<button class="secondary-button" type="button" data-translation-retry>Retry</button>' : ""}
        ${submission ? `<button class="primary-button" type="button" data-translation-compare aria-expanded="${comparing}" aria-controls="translation-comparison">Compare</button>` : ""}
        ${staff() ? `<a class="secondary-button" href="reading-translations.html?lesson=${encodeURIComponent(lesson.id)}">View Student Translations</a>` : ""}
      </div>
      <form id="translation-editor" ${editing ? "" : "hidden"}>
        <label for="student-reading-translation">Your English translation</label>
        <textarea id="student-reading-translation" name="translation" rows="10" maxlength="${MAX_LENGTH}" required aria-describedby="translation-save-help">${escape(draft)}</textarea>
        <p id="translation-save-help" class="muted">Submit to save to your account. You can revise and submit again.</p>
        <button class="primary-button" type="submit">Submit Translation</button>
      </form>
      <p class="reading-translation-status" role="status" data-translation-status>${escape(message)}</p>
      <div id="translation-comparison" class="translation-comparison" ${comparing ? "" : "hidden"} tabindex="-1">
        <section aria-labelledby="submitted-translation-heading"><h4 id="submitted-translation-heading">Your submitted translation</h4><div class="translation-copy" lang="en" data-submitted-translation>${escape(submission?.body)}</div></section>
        <section aria-labelledby="lesson-translation-heading"><h4 id="lesson-translation-heading">Lesson translation</h4><div class="translation-copy" lang="en">${escape(lesson.reading?.translation || "An English translation has not been added yet.")}</div></section>
      </div>
    </section>`;
  }

  function bind(shell, lesson) {
    const panel = shell.querySelector("[data-reading-translation]");
    if (!panel) return;
    const form = panel.querySelector("form");
    const field = form.querySelector("textarea");
    const write = panel.querySelector("[data-translation-write]");
    const status = panel.querySelector("[data-translation-status]");
    const refresh = () => {
      panel.outerHTML = render(lesson);
      bind(shell, lesson);
    };
    write.addEventListener("click", () => {
      editing = !editing;
      form.hidden = !editing;
      write.setAttribute("aria-expanded", String(editing));
      if (editing) field.focus();
    });
    field.addEventListener("input", () => {
      draft = field.value;
      field.setCustomValidity("");
      status.textContent = "Changes have not been submitted.";
      message = status.textContent;
    });
    panel.querySelector("[data-translation-compare]")?.addEventListener("click", (event) => {
      comparing = !comparing;
      panel.querySelector("#translation-comparison").hidden = !comparing;
      event.currentTarget.setAttribute("aria-expanded", String(comparing));
      if (comparing) panel.querySelector("#translation-comparison").focus();
    });
    panel.querySelector("[data-translation-retry]")?.addEventListener("click", async (event) => {
      event.currentTarget.disabled = true;
      status.textContent = "Loading your saved translation…";
      await load(lesson);
      refresh();
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (saving || preview()) return;
      if (!field.value.trim()) {
        field.setCustomValidity("Enter your translation before submitting.");
        field.reportValidity();
        return;
      }
      if (window.xenophonAuth?.readSession?.()?.email !== accountEmail) {
        status.textContent = "Your account has changed. Reload the page before submitting.";
        return;
      }
      saving = true;
      field.disabled = true;
      write.disabled = true;
      const submit = form.querySelector('[type="submit"]');
      submit.disabled = true;
      status.textContent = "Submitting…";
      try {
        submission = await request("POST", field.value);
        draft = submission.body;
        editing = false;
        comparing = false;
        message = "Translation submitted and saved. Select Compare to review both translations.";
        refresh();
        shell.querySelector("[data-translation-compare]").focus();
      } catch (error) {
        message = `${error.message} Your text is still here; submit again when connected.`;
        status.textContent = message;
        field.disabled = false;
        write.disabled = false;
        submit.disabled = false;
      } finally {
        saving = false;
      }
    });
  }

  window.addEventListener("beforeunload", (event) => {
    if (draft.trim() !== (submission?.body || "") || saving) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
  window.xenophonReadingTranslation = { load, render, bind };
}());
