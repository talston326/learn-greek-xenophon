const PROFILE_STORAGE_KEY = "learn-greek-profile";
const PROFILE_BY_USER_STORAGE_KEY = "learn-greek-profiles-by-user";

const defaultProfile = {
  name: "",
  summary: "",
  photoDataUrl: "",
  photoUrl: ""
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

async function loadRemoteProfile(email) {
  const profileKey = normalizeProfileEmail(email);

  if (!profileKey) {
    return loadProfile(email);
  }

  const response = await fetch(`/api/profile?email=${encodeURIComponent(profileKey)}`);

  if (!response.ok) {
    throw new Error("Profile could not be loaded.");
  }

  const data = await response.json();
  const profile = {
    ...defaultProfile,
    ...data.profile
  };

  saveProfile(profile, profileKey);
  return profile;
}

async function saveRemoteProfile(profile, email, photoFile, removePhoto = false) {
  const profileKey = normalizeProfileEmail(email);

  if (!profileKey) {
    return saveProfile(profile, email);
  }

  const formData = new FormData();
  formData.append("email", profileKey);
  formData.append("name", profile.name || "");
  formData.append("summary", profile.summary || "");
  formData.append("removePhoto", removePhoto ? "true" : "false");

  if (photoFile) {
    formData.append("photo", photoFile);
  }

  const response = await fetch("/api/profile", {
    method: "PUT",
    body: formData
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Profile could not be saved.");
  }

  const savedProfile = {
    ...defaultProfile,
    ...data.profile
  };

  saveProfile(savedProfile, profileKey);
  return savedProfile;
}

async function clearRemoteProfile(email) {
  const profileKey = normalizeProfileEmail(email);

  if (!profileKey) {
    clearProfile(email);
    return { ...defaultProfile };
  }

  const response = await fetch(`/api/profile?email=${encodeURIComponent(profileKey)}`, {
    method: "DELETE"
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Profile could not be reset.");
  }

  const profile = {
    ...defaultProfile,
    ...data.profile
  };

  saveProfile(profile, profileKey);
  return profile;
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
  loadRemoteProfile,
  saveProfile,
  saveRemoteProfile,
  clearRemoteProfile,
  clearProfile
};
