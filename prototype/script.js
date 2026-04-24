const heroMessageEl = document.querySelector("[data-hero-message]");
const progressTracker = document.querySelector("[data-progress-tracker]");

if (heroMessageEl && progressTracker) {
  const completedLessons = Number(progressTracker.dataset.completedLessons || 0);
  const totalLessons = Number(progressTracker.dataset.totalLessons || 0);
  const courseName = heroMessageEl.dataset.courseName || "your course";
  const progressPercent =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // Replace these message lines later without changing the progress-based selection.
  const heroMessagesByProgress = [
    {
      maxProgress: 24,
      lines: [
        `Welcome to ${courseName}.`,
        "This opening-stage message can be customized later."
      ]
    },
    {
      maxProgress: 59,
      lines: [
        `You're building momentum in ${courseName}.`,
        "This developing-progress message can be customized later."
      ]
    },
    {
      maxProgress: 84,
      lines: [
        `Welcome back to ${courseName}.`,
        "This strong-progress message can be customized later."
      ]
    },
    {
      maxProgress: 100,
      lines: [
        `You're in the final stretch of ${courseName}.`,
        "This near-completion message can be customized later."
      ]
    }
  ];

  const fallbackMessage =
    heroMessagesByProgress[heroMessagesByProgress.length - 1];
  const activeMessage =
    heroMessagesByProgress.find(
      ({ maxProgress }) => progressPercent <= maxProgress
    ) || fallbackMessage;

  heroMessageEl.textContent = "";
  activeMessage.lines.forEach((line, index) => {
    if (index > 0) {
      heroMessageEl.appendChild(document.createElement("br"));
    }

    heroMessageEl.appendChild(document.createTextNode(line));
  });
}
