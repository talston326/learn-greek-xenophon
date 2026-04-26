const PROFILE_STORAGE_KEY = "learn-greek-profile";
const PROFILE_BY_USER_STORAGE_KEY = "learn-greek-profiles-by-user";

const defaultProfile = {
  name: "",
  summary: "",
  photoDataUrl: ""
};

function normalizeProfileEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function loadLegacyProfile() {
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

function loadAllProfiles() {
  try {
    const rawProfiles = window.localStorage.getItem(PROFILE_BY_USER_STORAGE_KEY);
    return rawProfiles ? JSON.parse(rawProfiles) : {};
  } catch (error) {
    return {};
  }
}

function saveAllProfiles(profilesByUser) {
  window.localStorage.setItem(
    PROFILE_BY_USER_STORAGE_KEY,
    JSON.stringify(profilesByUser)
  );
}

function loadProfile(email) {
  const profileKey = normalizeProfileEmail(email);

  if (!profileKey) {
    return loadLegacyProfile();
  }

  const profilesByUser = loadAllProfiles();
  const userProfile = profilesByUser[profileKey];

  if (userProfile) {
    return {
      ...defaultProfile,
      ...userProfile
    };
  }

  return { ...defaultProfile };
}

function saveProfile(profile, email) {
  const nextProfile = {
    ...defaultProfile,
    ...profile
  };

  const profileKey = normalizeProfileEmail(email);

  if (profileKey) {
    const profilesByUser = loadAllProfiles();
    profilesByUser[profileKey] = nextProfile;
    saveAllProfiles(profilesByUser);
  } else {
    window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextProfile));
  }

  return nextProfile;
}

function clearProfile(email) {
  const profileKey = normalizeProfileEmail(email);

  if (profileKey) {
    const profilesByUser = loadAllProfiles();
    delete profilesByUser[profileKey];
    saveAllProfiles(profilesByUser);
  } else {
    window.localStorage.removeItem(PROFILE_STORAGE_KEY);
  }
}

window.profileStore = {
  defaultProfile,
  loadProfile,
  saveProfile,
  clearProfile
};
