(function () {
  const escape = value => String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
  // Keep smooth/rough breathings and iota subscripts; forgive ordinary accents.
  function normalizeAnswer(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300\u0301\u0342]/g,'').toLowerCase().replace(/ς/g,'σ').trim().replace(/\s+/g,' ');
  }
  function checkAnswer(value, item) {
    const accepted = [item.answer, ...(item.accepted || [])];
    const correct = accepted.some(answer => normalizeAnswer(value) === normalizeAnswer(answer));
    const exact = accepted.some(answer => String(value).trim().normalize('NFC') === answer.normalize('NFC'));
    return {correct, feedback:correct ? (exact ? 'Correct.' : `Correct. Accent correction: ${item.answer}`) : `Not yet. Correct answer: ${item.answer}`};
  }
  function render({shell, mode, renderShell, renderModes, bindModes, shuffle, recordResult, threshold, returnTo}) {
    const items = mode.items || [];
    const matchingChoices = shuffle([...new Set(items.map(item => item.answer))]);
    renderShell(`
      <form class="quiz-form grammar-completion-form" data-grammar-completion-form>
        ${renderModes(mode)}
        <p>${escape(mode.instructions)}</p>
        ${items.map((item,i) => {
          const choices = mode.type === 'matching' ? matchingChoices : shuffle(item.choices || []);
          const slots = item.slots || [{label:'Answer',answer:item.answer}];
          return `<fieldset class="quiz-question" data-grammar-item="${i}">
            <legend>${i+1}. ${escape(item.prompt)}</legend>
            <div class="grammar-answer-fields">
              ${slots.map((slot,j) => `<label class="grammar-answer-field">
                <span>${escape(slot.label)}</span>
                ${mode.type === 'fill-in-the-blank' ? `<button type="button" class="secondary-button grammar-keyboard-button" data-greek-keyboard-trigger data-greek-keyboard-target="grammar-blank-${i}">Greek Keyboard</button><input id="grammar-blank-${i}" type="text" class="greek-text greek-input" data-greek-keyboard-autoshow="false" lang="grc" autocomplete="off" autocapitalize="off" spellcheck="false" required maxlength="120" data-grammar-answer="${j}" aria-label="Question ${i+1}: missing Greek word">` : `<select required data-grammar-answer="${j}" aria-label="Question ${i+1}: ${escape(slot.label)}" ${item.direction === 'english-greek' ? 'class="greek-text" lang="grc"' : ''}>
                  <option value="">Choose one</option>
                  ${choices.map(choice => `<option value="${escape(choice)}">${escape(choice)}</option>`).join('')}
                </select>`}
              </label>`).join('')}
            </div>
            ${mode.type === 'translation-builder' ? '<p class="grammar-built-sentence" data-built-sentence aria-live="polite"></p>' : ''}
            <p class="topic-choice-feedback" data-grammar-feedback aria-live="polite"></p>
          </fieldset>`;
        }).join('')}
        <div class="activity-submit-row"><button type="submit" class="primary-button">Check answers</button></div>
        <p class="activity-result" data-activity-result aria-live="polite"></p>
      </form>`);
    bindModes(mode);
    const form = shell.querySelector('[data-grammar-completion-form]');
    let checking = false;
    form.querySelectorAll('[data-grammar-item]').forEach((fieldset) => {
      const controls = [...fieldset.querySelectorAll('[data-grammar-answer]')];
      const change = () => {
        const preview = fieldset.querySelector('[data-built-sentence]');
        if (preview) preview.textContent = controls.map(control => control.value || '___').join(' ') + '.';
        controls.forEach(control => control.classList.remove('is-correct','is-wrong'));
        const feedback = fieldset.querySelector('[data-grammar-feedback]');
        feedback.textContent = '';
        feedback.classList.remove('is-correct','is-wrong');
        form.querySelector('[data-activity-result]').textContent = '';
      };
      controls.forEach(control => control.addEventListener('input',change));
      change();
    });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (checking || !form.reportValidity()) return;
      let correct = 0;
      form.querySelectorAll('[data-grammar-item]').forEach((fieldset,i) => {
        const item = items[i];
        const inputs = [...fieldset.querySelectorAll('[data-grammar-answer]')];
        const results = inputs.map((input,j) => checkAnswer(input.value, item.slots?.[j] || item));
        const passed = results.every(result => result.correct);
        if (passed) correct++;
        inputs.forEach((input,j) => { input.classList.toggle('is-correct',results[j].correct); input.classList.toggle('is-wrong',!results[j].correct); });
        const feedback = fieldset.querySelector('[data-grammar-feedback]');
        feedback.classList.toggle('is-correct',passed);
        feedback.classList.toggle('is-wrong',!passed);
        feedback.textContent = item.slots ? (passed ? 'Correct.' : `Review the marked choices. Correct translation: ${item.slots.map(slot => slot.answer).join(' ')}.`) : results[0].feedback;
      });
      const score = Math.round(correct / items.length * 100);
      const passed = score >= threshold;
      const result = form.querySelector('[data-activity-result]');
      const controls = [...form.querySelectorAll('input, select, button')];
      checking = true;
      controls.forEach(control => control.disabled = true);
      result.textContent = 'Saving your result…';
      try {
        await recordResult({score,passed});
        result.innerHTML = passed ? `Passed with ${score}%. Review any corrections above. <a class="primary-button" href="${escape(returnTo)}">Return to Lesson</a>` : `Score: ${score}%. Review the marked answers and try again to reach ${threshold}%.`;
      } catch (error) {
        result.textContent = `Score: ${score}%. Your result could not be saved. Please try again.`;
      } finally {
        checking = false;
        controls.forEach(control => control.disabled = false);
      }
    });
  }
  window.xenophonGrammarExercises = {normalizeAnswer,checkAnswer,render};
})();
