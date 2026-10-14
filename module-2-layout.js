(function () {
  const number = Number(new URLSearchParams(location.search).get('lesson'));
  if (number >= 13 && number <= 36) {
    document.querySelector('[data-lesson-template]')?.classList.add('module-two-lesson');
  }
})();
