(function () {
  const STORAGE_KEY = "xenophon-principal-parts-progress-v1";

  function readSession() {
    return window.xenophonAuth?.readSession?.() || null;
  }

  function getProfileKey() {
    return window.xenophonAuth?.normalizeEmail?.(readSession()?.email) || "development";
  }

  function readStore() {
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (error) {
      return {};
    }
  }

  function writeStore(store) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function getRecord() {
    const store = readStore();
    return store[getProfileKey()] || {
      viewedIntro: false,
      studiedVerbIds: [],
      practiceSessions: [],
      events: []
    };
  }

  function updateRecord(updater) {
    const store = readStore();
    const key = getProfileKey();
    store[key] ||= {
      viewedIntro: false,
      studiedVerbIds: [],
      practiceSessions: [],
      events: []
    };
    updater(store[key]);
    writeStore(store);
    return store[key];
  }

  function addEvent(record, event) {
    record.events ||= [];
    record.events.unshift({
      ...event,
      when: new Date().toISOString()
    });
    record.events = record.events.slice(0, 12);
  }

  function recordIntroView() {
    return updateRecord((record) => {
      if (record.viewedIntro) {
        return;
      }
      record.viewedIntro = true;
      addEvent(record, {
        icon: "ῥ",
        type: "review",
        title: "Opened Principal Parts resource",
        xp: 5
      });
    });
  }

  function recordVerbStudy(verbId, displayLemma) {
    return updateRecord((record) => {
      record.studiedVerbIds ||= [];
      if (record.studiedVerbIds.includes(verbId)) {
        return;
      }
      record.studiedVerbIds.push(verbId);
      addEvent(record, {
        icon: "ῥ",
        type: "review",
        title: `Studied principal parts: ${displayLemma}`,
        xp: 2
      });
    });
  }

  function recordPracticeSession(session) {
    const total = Math.max(0, Number(session?.total || 0));
    const correct = Math.max(0, Number(session?.correct || 0));
    const scorePercent = total ? Math.round((correct / total) * 100) : 0;
    const perfect = total > 0 && correct === total;
    const xp = 8 + correct * 3 + (perfect ? 10 : 0);
    const irregularCorrectIds = Array.isArray(session?.irregularCorrectIds)
      ? Array.from(new Set(session.irregularCorrectIds))
      : [];

    return updateRecord((record) => {
      record.practiceSessions ||= [];
      const saved = {
        total,
        correct,
        scorePercent,
        perfect,
        xp,
        irregularCorrectIds,
        completedAt: new Date().toISOString()
      };
      record.practiceSessions.push(saved);
      addEvent(record, {
        icon: "ῥ",
        type: "exercise",
        title: `Principal Parts practice: ${correct}/${total}`,
        xp
      });
    });
  }

  function getRelativeWhen(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Recently";
    }

    const days = Math.floor((Date.now() - date.getTime()) / 86400000);

    if (days <= 0) {
      return "Today";
    }

    if (days === 1) {
      return "Yesterday";
    }

    return `${days} days ago`;
  }

  function getSummary() {
    const record = getRecord();
    const studiedVerbIds = Array.isArray(record.studiedVerbIds) ? record.studiedVerbIds : [];
    const practiceSessions = Array.isArray(record.practiceSessions) ? record.practiceSessions : [];
    const events = Array.isArray(record.events) ? record.events : [];
    const introXp = record.viewedIntro ? 5 : 0;
    const studyXp = studiedVerbIds.length * 2;
    const practiceXp = practiceSessions.reduce((sum, session) => sum + Number(session.xp || 0), 0);
    const irregularCorrect = new Set();

    practiceSessions.forEach((session) => {
      (session.irregularCorrectIds || []).forEach((verbId) => irregularCorrect.add(verbId));
    });

    return {
      hasActivity: Boolean(record.viewedIntro || studiedVerbIds.length || practiceSessions.length),
      xp: introXp + studyXp + practiceXp,
      viewedIntro: Boolean(record.viewedIntro),
      studiedVerbCount: studiedVerbIds.length,
      studiedVerbIds,
      practiceSessions: practiceSessions.length,
      perfectSessions: practiceSessions.filter((session) => session.perfect).length,
      irregularCorrectCount: irregularCorrect.size,
      recentActivity: events.slice(0, 5).map((event) => ({
        icon: event.icon || "ῥ",
        type: event.type || "review",
        title: event.title,
        when: getRelativeWhen(event.when),
        xp: Number(event.xp || 0)
      }))
    };
  }

  window.xenophonPrincipalPartsProgress = {
    STORAGE_KEY,
    getRecord,
    getSummary,
    recordIntroView,
    recordVerbStudy,
    recordPracticeSession
  };
}());
