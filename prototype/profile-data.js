const PROFILE_STORAGE_KEY = "learn-greek-profile";

const defaultProfile = {
  name: "",
  summary: "",
  photoDataUrl: ""
};

function loadProfile() {
  try {
    const rawProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!rawProfile) {
      return { ...defaultProfile };
    }

    return {
      ...defaultProfile,
      ...JSON.parse(rawProfile)
    };
  } catch (error) {
    return { ...defaultProfile };
  }
}

function saveProfile(profile) {
  const nextProfile = {
    ...defaultProfile,
    ...profile
  };

  window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextProfile));
  return nextProfile;
}

function clearProfile() {
  window.localStorage.removeItem(PROFILE_STORAGE_KEY);
}

window.profileStore = {
  defaultProfile,
  loadProfile,
  saveProfile,
  clearProfile
};
