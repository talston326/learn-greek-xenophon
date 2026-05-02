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

const ROLE_LABELS = {
  administrator: "Administrator",
  professor: "Professor",
  student: "Student"
};
const MAX_PROFILE_PHOTO_BYTES = 2 * 1024 * 1024;
const ALLOWED_PROFILE_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

let draftProfile = profileStore ? profileStore.loadProfile() : null;
let selectedPhotoFile = null;
let removeSelectedPhoto = false;
let previewObjectUrl = "";

function readSession() {
  return window.xenophonAuth?.readSession ? window.xenophonAuth.readSession() : null;
}

function saveSession(session) {
  window.xenophonAuth?.saveSession?.(session);
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

function setPreviewPhoto(photoUrl) {
  if (!photoPreview) {
    return;
  }

  if (photoUrl) {
    photoPreview.style.backgroundImage = `url("${photoUrl}")`;
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
  setPreviewPhoto(profile.photoUrl || profile.photoDataUrl || "");
}

function setProfileStatus(message) {
  if (profileStatus) {
    profileStatus.textContent = message;
  }
}

if (draftProfile) {
  const email = activeProfileEmail();
  draftProfile = profileStore.loadProfile(email);
  renderProfileForm(draftProfile);
  setProfileStatus("Update your profile and save when ready.");
  renderRoleSwitcher();

  if (email && profileStore.loadRemoteProfile) {
    profileStore.loadRemoteProfile(email)
      .then((profile) => {
        draftProfile = profile;
        renderProfileForm(draftProfile);
      })
      .catch(() => {
        setProfileStatus("Local profile loaded. Start Netlify dev to sync with the database.");
      });
  }
}

photoInput?.addEventListener("change", async (event) => {
  const nextFile = event.target.files && event.target.files[0];
  if (!nextFile || !draftProfile) {
    return;
  }

  try {
    if (!ALLOWED_PROFILE_PHOTO_TYPES.includes(nextFile.type)) {
      throw new Error("Please choose a JPEG, PNG, WebP, or GIF image.");
    }

    if (nextFile.size > MAX_PROFILE_PHOTO_BYTES) {
      throw new Error("Please choose an image smaller than 2 MB.");
    }

    if (previewObjectUrl) {
      URL.revokeObjectURL(previewObjectUrl);
    }

    selectedPhotoFile = nextFile;
    removeSelectedPhoto = false;
    previewObjectUrl = URL.createObjectURL(nextFile);
    setPreviewPhoto(previewObjectUrl);
    setProfileStatus("Photo selected. Save profile to update the dashboard.");
  } catch (error) {
    selectedPhotoFile = null;
    photoInput.value = "";
    setProfileStatus(error.message || "The selected image could not be processed.");
  }
});

removePhotoButton?.addEventListener("click", () => {
  if (!draftProfile) {
    return;
  }

  draftProfile.photoDataUrl = "";
  draftProfile.photoUrl = "";
  selectedPhotoFile = null;
  removeSelectedPhoto = true;
  photoInput.value = "";
  setPreviewPhoto("");
  setProfileStatus("Photo removed. Save profile to apply the change.");
});

resetProfileButton?.addEventListener("click", async () => {
  if (!profileStore) {
    return;
  }

  try {
    setProfileStatus("Resetting profile...");
    const email = activeProfileEmail();
    draftProfile = profileStore.clearRemoteProfile
      ? await profileStore.clearRemoteProfile(email)
      : { ...profileStore.defaultProfile };
    profileStore.clearProfile(email);
    selectedPhotoFile = null;
    removeSelectedPhoto = false;
    photoInput.value = "";
    renderProfileForm(draftProfile);
    setProfileStatus("Profile reset.");
  } catch (error) {
    setProfileStatus(error.message || "Profile could not be reset.");
  }
});

profileForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!profileStore || !draftProfile) {
    return;
  }

  draftProfile.name = profileNameInput.value.trim();
  draftProfile.summary = profileSummaryInput.value.trim();

  try {
    setProfileStatus("Saving profile...");
    draftProfile = profileStore.saveRemoteProfile
      ? await profileStore.saveRemoteProfile(draftProfile, activeProfileEmail(), selectedPhotoFile, removeSelectedPhoto)
      : profileStore.saveProfile(draftProfile, activeProfileEmail());
    selectedPhotoFile = null;
    removeSelectedPhoto = false;
    photoInput.value = "";
    renderProfileForm(draftProfile);
    setProfileStatus("Profile saved. Return to the dashboard to see the updated card.");
  } catch (error) {
    setProfileStatus(error.message || "Profile could not be saved.");
  }
});
