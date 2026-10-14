(function () {
  function escape(value) { return String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }
  function render(question, index, practice = false) {
    const greek = question.direction === 'english-greek';
    const id = `translation-${index}`;
    return `<div class="translation-exercise" data-translation-question="${escape(question.id)}">
      <div class="translation-entry-header">
        <label for="${id}">Your ${greek ? 'Ancient Greek' : 'English'} translation</label>
        ${greek ? `<button type="button" class="secondary-button translation-keyboard-button" data-greek-keyboard-target="${id}" data-greek-keyboard-trigger>Greek Keyboard</button>` : ''}
      </div>
      <textarea id="${id}" name="question-${index}" data-translation-answer rows="2" maxlength="600" required
        class="${greek ? 'greek-input' : ''}" lang="${greek ? 'grc' : 'en'}" spellcheck="false" autocomplete="off" ${practice ? `enterkeyhint="send" aria-describedby="${id}-shortcut"` : ''}></textarea>
      ${practice ? `<p class="muted translation-shortcut" id="${id}-shortcut">Press Return to check your translation. Shift–Return adds a new line.</p>` : ''}
      <p class="translation-feedback" data-translation-feedback aria-live="polite"></p>
    </div>`;
  }
  async function check(activityType, revision, answers) {
    const session = window.xenophonAuth?.readSession();
    if (!session?.email) throw new Error('Sign in to check translations.');
    const response = await fetch('/api/translation-check', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lessonSlug: 'lesson-1', activityType, revision, email: session.email,
        password: window.xenophonAuth.readVisiblePassword(session.email), answers }) });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'Translation checking is unavailable. Your answers have been kept.');
    if (!data.checkId || !Array.isArray(data.results) || data.results.length !== answers.length ||
        answers.some(a => !data.results.some(r => r.questionId === a.questionId && typeof r.passed === 'boolean'))) throw new Error('The checker returned incomplete feedback. Please try again.');
    return data;
  }
  function feedback(element, result) {
    element.textContent = [result.passed ? 'Pass.' : 'Revise.', result.feedback,
      ...(result.spellingCorrections || []).map(c => `Suggested spelling correction: ${c}`),
      ...(result.breathingErrors || []), ...(result.accentCorrections || []).map(c => `Accent correction: ${c}`),
      ...(result.modelAnswer ? [`Model answer: ${result.modelAnswer}`] : [])].join(' ');
    element.classList.toggle('is-correct', result.passed);
    element.classList.toggle('is-wrong', !result.passed);
  }
  function rounds(questions, shuffle) {
    const multiple = shuffle(questions.filter(q => q.type !== 'translation'));
    const ge = shuffle(questions.filter(q => q.direction === 'greek-english'));
    const eg = shuffle(questions.filter(q => q.direction === 'english-greek'));
    if (!ge.length || !eg.length) return shuffle(questions);
    const output = [];
    const count = Math.max(1, Math.ceil(multiple.length / 6));
    for (let round = 0; round < count; round++) {
      output.push(...shuffle([...multiple.slice(round * 6, round * 6 + 6),
        ...[0,1].map(i => ge[(round * 2 + i) % ge.length]), ...[0,1].map(i => eg[(round * 2 + i) % eg.length])]));
    }
    return output;
  }
  window.xenophonTranslationExercises = { render, check, feedback, rounds };
}());
