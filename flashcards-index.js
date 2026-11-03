(function () {
  const shell = document.querySelector('[data-flashcards-index]');
  const course = window.xenophonLessonData;
  if (!shell || !course) return;
  const escape = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  shell.innerHTML = Array.from({ length: 48 }, (_, index) => course.getLesson(index + 1))
    .filter(Boolean)
    .map(lesson => {
      const count = course.getVocabularyCards(lesson).length;
      const base = `activity.html?lesson=${lesson.number}&returnTo=flashcards.html&type=`;
      const grammar = lesson.activities?.['grammar-flashcards']?.cards?.length
        ? `<a class="secondary-button" href="${base}grammar-flashcards">Grammar Flashcards</a>` : '';
      return `<article class="lesson-section">
        <p class="eyebrow">Lesson ${lesson.number}</p>
        <h2>${escape(lesson.title)}</h2>
        <p class="muted">${count} new reading ${count === 1 ? 'word' : 'words'}</p>
        <div class="lesson-page-actions">
          <a class="primary-button" href="${base}vocab-flashcards">Vocabulary Flashcards</a>
          ${grammar}
        </div>
      </article>`;
    }).join('');
}());
