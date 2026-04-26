const profileStore = window.profileStore;
const photoPreview = document.querySelector("[data-profile-photo-preview]");
const photoInput = document.querySelector("[data-profile-photo-input]");
const removePhotoButton = document.querySelector("[data-profile-photo-remove]");
const resetProfileButton = document.querySelector("[data-profile-reset]");
const profileForm = document.querySelector("[data-profile-form]");
const profileNameInput = document.querySelector("[data-profile-name-input]");
const profileSummaryInput = document.querySelector("[data-profile-summary-input]");
const profileStatus = document.querySelector("[data-profile-status]");
const profileViewSwitcher = document.querySelector("[data-profile-view-switcher]");
const activeViewEl = document.querySelector("[data-active-view]");
const profileRoleOptionsEl = document.querySelector("[data-profile-role-options]");

const SESSION_STORAGE_KEY = "learn-greek-session";
const ROLE_LABELS = {
  administrator: "Administrator",
  professor: "Professor",
  student: "Student"
};

let draftProfile = profileStore ? profileStore.loadProfile() : null;

function readSession() {
  try {
    const rawSession = window.localStorage.getItem(SESSION_STORAGE_KEY);
    return rawSession ? JSON.parse(rawSession) : null;
  } catch (error) {
    return null;
  }
}

function saveSession(session) {
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

function activeProfileEmail() {
  return readSession()?.email || "";
}

function renderRoleSwitcher() {
  const session = readSession();

  if (!session || !profileViewSwitcher || !profileRoleOptionsEl || !activeViewEl) {
    return;
  }

  profileViewSwitcher.hidden = false;
  activeViewEl.textContent = ROLE_LABELS[session.activeRole] || "Student";
  profileRoleOptionsEl.textContent = "";

  session.roles.forEach((role) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "role-toggle";
    button.textContent = ROLE_LABELS[role] || role;

    if (role === session.activeRole) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      const nextSession = { ...session, activeRole: role };
      saveSession(nextSession);
      profileStatus.textContent = `${ROLE_LABELS[role]} view selected. Return to the dashboard to use it.`;
      renderRoleSwitcher();
    });

    profileRoleOptionsEl.appendChild(button);
  });
}

function setPreviewPhoto(photoDataUrl) {
  if (!photoPreview) {
    return;
  }

  if (photoDataUrl) {
    photoPreview.style.backgroundImage = `url("${photoDataUrl}")`;
    photoPreview.classList.add("has-photo");
  } else {
    photoPreview.style.backgroundImage = "";
    photoPreview.classList.remove("has-photo");
  }
}

function renderProfileForm(profile) {
  if (!profile) {
    return;
  }

  profileNameInput.value = profile.name || "";
  profileSummaryInput.value = profile.summary || "";
  setPreviewPhoto(profile.photoDataUrl || "");
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const cropSize = Math.min(image.width, image.height);
        const startX = (image.width - cropSize) / 2;
        const startY = (image.height - cropSize) / 2;

        canvas.width = 320;
        canvas.height = 320;
        context.drawImage(
          image,
          startX,
          startY,
          cropSize,
          cropSize,
          0,
          0,
          canvas.width,
          canvas.height
        );

        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };

      image.onerror = reject;
      image.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

if (draftProfile) {
  draftProfile = profileStore.loadProfile(activeProfileEmail());
  renderProfileForm(draftProfile);
  profileStatus.textContent = "Update your profile and save when ready.";
  renderRoleSwitcher();
}

photoInput?.addEventListener("change", async (event) => {
  const nextFile = event.target.files && event.target.files[0];
  if (!nextFile || !draftProfile) {
    return;
  }

  try {
    draftProfile.photoDataUrl = await readImageFile(nextFile);
    setPreviewPhoto(draftProfile.photoDataUrl);
    profileStatus.textContent = "Photo selected. Save profile to update the dashboard.";
  } catch (error) {
    profileStatus.textContent = "The selected image could not be processed.";
  }
});

removePhotoButton?.addEventListener("click", () => {
  if (!draftProfile) {
    return;
  }

  draftProfile.photoDataUrl = "";
  photoInput.value = "";
  setPreviewPhoto("");
  profileStatus.textContent = "Photo removed. Save profile to apply the change.";
});

resetProfileButton?.addEventListener("click", () => {
  if (!profileStore) {
    return;
  }

  draftProfile = { ...profileStore.defaultProfile };
  profileStore.clearProfile(activeProfileEmail());
  photoInput.value = "";
  renderProfileForm(draftProfile);
  profileStatus.textContent = "Profile reset.";
});

profileForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!profileStore || !draftProfile) {
    return;
  }

  draftProfile.name = profileNameInput.value.trim();
  draftProfile.summary = profileSummaryInput.value.trim();
  draftProfile = profileStore.saveProfile(draftProfile, activeProfileEmail());
  profileStatus.textContent = "Profile saved. Return to the dashboard to see the updated card.";
});
