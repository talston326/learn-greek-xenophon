const heroMessageEl = document.querySelector("[data-hero-message]");
const progressTracker = document.querySelector("[data-progress-tracker]");
const profileAvatarEl = document.querySelector("[data-profile-avatar]");
const profileNameEl = document.querySelector("[data-profile-name]");
const profileSummaryEl = document.querySelector("[data-profile-summary]");
const profileLinkEl = document.querySelector("[data-profile-link]");

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

if (
  window.profileStore &&
  profileAvatarEl &&
  profileNameEl &&
  profileSummaryEl &&
  profileLinkEl
) {
  const profile = window.profileStore.loadProfile();
  const hasProfile = Boolean(profile.name || profile.summary || profile.photoDataUrl);

  if (profile.photoDataUrl) {
    profileAvatarEl.style.backgroundImage = `url("${profile.photoDataUrl}")`;
    profileAvatarEl.classList.add("has-photo");
  } else {
    profileAvatarEl.style.backgroundImage = "";
    profileAvatarEl.classList.remove("has-photo");
  }

  if (hasProfile) {
    profileNameEl.textContent = profile.name || "Student Profile";
    profileSummaryEl.textContent =
      profile.summary || "Your dashboard profile is ready to review.";
    profileLinkEl.textContent = "View Profile →";
  } else {
    profileNameEl.textContent = "Student Profile";
    profileSummaryEl.textContent =
      "Your name, photo, and learner details will appear here after profile completion.";
    profileLinkEl.textContent = "Complete Profile →";
  }
}
