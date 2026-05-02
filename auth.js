(function () {
  const SESSION_STORAGE_KEY = "learn-greek-session";
  const ACCOUNT_PASSWORD_STORAGE_KEY = "learn-greek-visible-passwords";
  const DEV_CLASS_PASSWORD = "xeno";
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

  function readVisiblePasswords() {
    try {
      const rawPasswords = window.localStorage.getItem(ACCOUNT_PASSWORD_STORAGE_KEY);
      return rawPasswords ? JSON.parse(rawPasswords) : {};
    } catch (error) {
      return {};
    }
  }

  function rememberVisiblePassword(email, password) {
    const profileKey = normalizeEmail(email);

    if (!profileKey || !password) {
      return "";
    }

    const visiblePasswords = readVisiblePasswords();
    visiblePasswords[profileKey] = String(password);
    window.localStorage.setItem(ACCOUNT_PASSWORD_STORAGE_KEY, JSON.stringify(visiblePasswords));
    return visiblePasswords[profileKey];
  }

  function readVisiblePassword(email) {
    const profileKey = normalizeEmail(email);

    if (!profileKey) {
      return DEV_CLASS_PASSWORD;
    }

    const visiblePasswords = readVisiblePasswords();
    return visiblePasswords[profileKey] || DEV_CLASS_PASSWORD;
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

  async function changeStudentPassword({ email, password }) {
    const normalizedEmail = normalizeEmail(email);
    const data = await postJson("/api/account-password", {
      email: normalizedEmail,
      password
    });

    rememberVisiblePassword(normalizedEmail, password);
    return data.user || null;
  }

  window.xenophonAuth = {
    DEV_CLASS_PASSWORD,
    DEV_CLASS_PASSWORD_MESSAGE,
    normalizeEmail,
    readSession,
    writeSession,
    saveSession,
    clearSession,
    rememberVisiblePassword,
    readVisiblePassword,
    loginStudent,
    registerStudent,
    changeStudentPassword
  };
}());
