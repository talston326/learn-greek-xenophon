(function () {
  const shell = document.querySelector('[data-feedback-review]');
  if (!shell) return;
  const session = window.xenophonAuth.readSession();
  const text = shell.querySelector('#feedback-dataset');
  const count = shell.querySelector('[data-feedback-count]');
  const status = shell.querySelector('[data-feedback-review-status]');
  const copy = shell.querySelector('[data-feedback-copy]');
  const clear = shell.querySelector('[data-feedback-clear]');
  let ids = [], busy = false;
  if (session?.activeRole !== 'administrator' || !session.roles?.includes('administrator') || session.professorPreview) {
    count.textContent = 'Administrator view is required to review feedback.';
    return;
  }
  function buttons() { copy.disabled = busy || !ids.length; clear.disabled = busy || !ids.length; }
  async function load(action = 'list') {
    busy = true; buttons();
    status.textContent = action === 'clear' ? 'Clearing feedback…' : 'Loading feedback…';
    try {
      const response = await fetch('/api/course-feedback', {method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({action, ids, accountEmail:session.email, activeRole:session.activeRole,
          password:window.xenophonAuth.readVisiblePassword(session.email)})});
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Feedback could not be loaded.');
      ids = data.ids; text.value = data.text;
      count.textContent = `${data.count} saved feedback submission${data.count === 1 ? '' : 's'}.`;
      status.textContent = action === 'clear' ? 'Feedback cleared.' : data.count ? '' : 'No feedback has been saved.';
    } catch (error) { status.textContent = error.message; }
    finally { busy = false; buttons(); }
  }
  copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(text.value); status.textContent = 'Feedback copied.'; }
    catch { text.focus(); text.select(); status.textContent = 'Text selected. Press Command–C (or Ctrl–C) to copy.'; }
  });
  clear.addEventListener('click', () => { if (!busy && ids.length) load('clear'); });
  load();
}());
