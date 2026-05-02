(function () {
  const SESSION_STORAGE_KEY = "learn-greek-session";
  const DEV_CLASS_PASSWORD_MESSAGE =
    "For this development version, please use the class password provided by the instructor.";

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

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
    return session;
  }

  function writeSession(user, activeRole) {
    return saveSession({
      name: user.name,
      email: normalizeEmail(user.email),
      roles: user.roles,
      activeRole,
      progress: user.progress || null,
      course: user.course || null
    });
  }

  function clearSession() {
    window.localStorage.removeItem(SESSION_STORAGE_KEY);
  }

  async function postJson(url, payload) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || "The request could not be completed.");
    }

    return data;
  }

  async function loginStudent({ email, password }) {
    const data = await postJson("/api/login", {
      email: normalizeEmail(email),
      password
    });

    return data.user;
  }

  async function registerStudent({ firstName, lastName, email, password }) {
    const data = await postJson("/api/register", {
      firstName,
      lastName,
      email: normalizeEmail(email),
      password
    });

    return data.user;
  }

  window.xenophonAuth = {
    DEV_CLASS_PASSWORD_MESSAGE,
    normalizeEmail,
    readSession,
    writeSession,
    saveSession,
    clearSession,
    loginStudent,
    registerStudent
  };
}());
