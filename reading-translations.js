(function () {
  const root = document.querySelector("[data-translation-review]");
  if (!root) return;
  const session = window.xenophonAuth?.readSession?.();
  const form = root.querySelector("form");
  const studentSelect = form.elements.student;
  const lessonSelect = form.elements.lesson;
  const status = root.querySelector("[data-review-status]");
  const result = root.querySelector("[data-review-result]");
  const retry = root.querySelector("[data-review-retry]");
  const submit = form.querySelector('[type="submit"]');
  const escape = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  let revision = 0;

  if (!["professor", "administrator"].includes(session?.activeRole) || !session.roles?.includes(session.activeRole)) {
    status.textContent = "Professor or Administrator access is required to view student translations.";
    return;
  }

  async function request(params = {}) {
    const query = new URLSearchParams({ email: session.email, activeRole: session.activeRole, ...params });
    const response = await fetch(`/api/staff-reading-translations?${query}`, { signal: AbortSignal.timeout(10000) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Student translations could not be loaded.");
    return data;
  }

  async function view() {
    const studentId = studentSelect.value;
    const lessonSlug = lessonSelect.value;
    if (!studentId || !lessonSlug) return;
    const current = ++revision;
    submit.disabled = true;
    result.innerHTML = "";
    status.textContent = "Loading the submitted translation…";
    try {
      const data = await request({ studentId, lessonSlug });
      if (current !== revision) return;
      const studentName = data.student.name || data.student.email;
      const lessonName = `${data.lesson.label} — ${data.lesson.title}`;
      const query = new URLSearchParams({ student: data.student.email, lesson: lessonSlug });
      window.history.replaceState(null, "", `reading-translations.html?${query}`);
      result.innerHTML = `<h3>${escape(studentName)}</h3><p>${escape(lessonName)}</p>`;
      if (!data.submission) {
        status.textContent = "This student has not submitted a translation for this lesson yet.";
        return;
      }
      const date = new Date(data.submission.submittedAt).toLocaleString();
      result.innerHTML += `<p class="muted">Submitted ${escape(date)}. This is the latest saved submission.</p>
        <div class="translation-comparison">
          <section aria-labelledby="review-submission-heading"><h4 id="review-submission-heading">Student translation</h4><div class="translation-copy" lang="en" data-review-submission>${escape(data.submission.body)}</div></section>
          <section aria-labelledby="review-reference-heading"><h4 id="review-reference-heading">Lesson translation</h4><div class="translation-copy" lang="en" data-review-reference>Loading the lesson translation…</div></section>
        </div>`;
      status.textContent = "Submitted translation loaded.";
      try {
        const response = await fetch(`/api/lesson-content?slug=${encodeURIComponent(lessonSlug)}`, { signal: AbortSignal.timeout(10000) });
        const content = await response.json();
        if (!response.ok) throw new Error("Could not load lesson translation");
        if (current !== revision) return;
        result.querySelector("[data-review-reference]").textContent = content.content?.reading?.translation?.trim() || "An English translation has not been added for this lesson yet.";
      } catch {
        if (current !== revision) return;
        result.querySelector("[data-review-reference]").textContent = "The lesson translation could not be loaded. Select View Translation to try again.";
      }
    } catch (error) {
      if (current === revision) status.textContent = `${error.message} Select View Translation to try again.`;
    } finally {
      if (current === revision) submit.disabled = false;
    }
  }

  async function load() {
    retry.hidden = true;
    status.textContent = "Loading students and lessons…";
    try {
      const data = await request();
      studentSelect.innerHTML = '<option value="">Choose a student</option>' + data.students.map((student) => `<option value="${escape(student.id)}">${escape(student.name || student.email)} — ${escape(student.email)} (${student.submissionCount} submitted)</option>`).join("");
      lessonSelect.innerHTML = '<option value="">Choose a lesson</option>' + data.lessons.map((lesson) => `<option value="${escape(lesson.slug)}">${escape(lesson.label)} — ${escape(lesson.title)}</option>`).join("");
      const params = new URLSearchParams(window.location.search);
      const student = data.students.find((item) => item.email.toLowerCase() === params.get("student")?.toLowerCase());
      if (student) studentSelect.value = student.id;
      lessonSelect.value = params.get("lesson") || "";
      form.hidden = false;
      status.textContent = data.students.length ? "Select a student and lesson, then View Translation." : "No student accounts are available yet.";
      if (studentSelect.value && lessonSelect.value) await view();
    } catch (error) {
      status.textContent = error.message;
      retry.hidden = false;
    }
  }
  form.addEventListener("submit", (event) => { event.preventDefault(); view(); });
  form.addEventListener("change", () => {
    ++revision;
    result.innerHTML = "";
    submit.disabled = false;
    status.textContent = "Select View Translation to load this selection.";
  });
  retry.addEventListener("click", load);
  load();
}());
