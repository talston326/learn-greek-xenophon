(function () {
  const STORAGE_KEY = "xenophon-lesson-progress-fallback-v1";

  function readSession() {
    return window.xenophonAuth?.readSession?.() || null;
  }

  function saveReturnedUser(user) {
    const session = readSession();
    if (!user || !session || !window.xenophonAuth?.writeSession) {
      return;
    }

    window.xenophonAuth.writeSession(user, session.activeRole || "student");
  }

  function getProfileKey() {
    return window.xenophonAuth?.normalizeEmail?.(readSession()?.email) || "development";
  }

  function readFallbackStore() {
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (error) {
      return {};
    }
  }

  function writeFallbackStore(store) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function updateLessonFallback(lessonSlug, updater) {
    const store = readFallbackStore();
    const profileKey = getProfileKey();
    store[profileKey] ||= {};
    store[profileKey][lessonSlug] ||= {
      currentSegmentId: "",
      currentPage: 1,
      gates: {},
      completed: false
    };
    updater(store[profileKey][lessonSlug]);
    writeFallbackStore(store);
    return store[profileKey][lessonSlug];
  }

  function readLessonFallback(lessonSlug) {
    const store = readFallbackStore();
    return store[getProfileKey()]?.[lessonSlug] || null;
  }

  function updateSessionProgress(updater) {
    const session = readSession();
    if (!session) {
      return;
    }

    const progress = {
      ...(session.progress || {})
    };
    updater(progress);
    window.xenophonAuth?.saveSession?.({
      ...session,
      progress
    });
  }

  async function postProgress(payload) {
    const session = readSession();
    const email = session?.email;

    if (!email) {
      return null;
    }

    const response = await fetch("/api/lesson-progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        email
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || "Progress could not be saved.");
    }

    if (data.user) {
      saveReturnedUser(data.user);
    }

    return data;
  }

  async function markSegment({ lessonSlug, segmentSlug, page, title }) {
    updateLessonFallback(lessonSlug, (lessonState) => {
      lessonState.currentSegmentId = segmentSlug;
      lessonState.currentPage = page;
      lessonState.updatedAt = new Date().toISOString();
    });

    updateSessionProgress((progress) => {
      progress.currentLessonId = lessonSlug;
      progress.currentSegmentId = segmentSlug;
    });

    try {
      return await postProgress({
        action: "view_segment",
        lessonSlug,
        segmentSlug,
        segmentTitle: title,
        page
      });
    } catch (error) {
      console.warn("Using local lesson progress fallback.", error);
      return null;
    }
  }

  async function recordActivityResult({ lessonSlug, activityType, score, passed }) {
    updateLessonFallback(lessonSlug, (lessonState) => {
      lessonState.gates ||= {};
      lessonState.gates[activityType] = {
        score,
        passed,
        completedAt: new Date().toISOString()
      };
    });

    updateSessionProgress((progress) => {
      if (passed && activityType === "grammar-exercises") {
        progress.completedExercises ||= {};
        const completed = new Set(progress.completedExercises[lessonSlug] || []);
        completed.add("grammar-exercises");
        progress.completedExercises[lessonSlug] = Array.from(completed);
      }

      if (passed && activityType === "lesson-quiz") {
        progress.passedQuizzes = Array.from(new Set([...(progress.passedQuizzes || []), lessonSlug]));
      }
    });

    try {
      return await postProgress({
        action: "activity_passed",
        lessonSlug,
        activityType,
        score,
        passed
      });
    } catch (error) {
      console.warn("Using local activity progress fallback.", error);
      return null;
    }
  }

  async function completeLesson({ lessonSlug, nextLessonSlug, advanceToNext = false }) {
    updateLessonFallback(lessonSlug, (lessonState) => {
      lessonState.completed = true;
      lessonState.completedAt = new Date().toISOString();
    });

    updateSessionProgress((progress) => {
      progress.completedLessons = Array.from(new Set([...(progress.completedLessons || []), lessonSlug]));
      progress.passedQuizzes = Array.from(new Set([...(progress.passedQuizzes || []), lessonSlug]));
      if (advanceToNext && nextLessonSlug) {
        progress.currentLessonId = nextLessonSlug;
        progress.currentSegmentId = "lesson-start";
      }
    });

    try {
      return await postProgress({
        action: "complete_lesson",
        lessonSlug,
        nextLessonSlug,
        advanceToNext
      });
    } catch (error) {
      console.warn("Using local lesson completion fallback.", error);
      return null;
    }
  }

  function getActivityResult(lessonSlug, activityType) {
    return readLessonFallback(lessonSlug)?.gates?.[activityType] || null;
  }

  function isActivityPassed(lessonSlug, activityType, threshold = 80) {
    const result = getActivityResult(lessonSlug, activityType);
    if (result?.passed && Number(result.score || 0) >= threshold) {
      return true;
    }

    const progress = readSession()?.progress || {};

    if (activityType === "lesson-quiz") {
      return (
        (progress.passedQuizzes || []).includes(lessonSlug) ||
        (progress.completedLessons || []).includes(lessonSlug)
      );
    }

    return Boolean((progress.completedExercises?.[lessonSlug] || []).includes(activityType));
  }

  function isLessonComplete(lessonSlug) {
    const session = readSession();
    const completed = session?.progress?.completedLessons || [];
    return completed.includes(lessonSlug) || Boolean(readLessonFallback(lessonSlug)?.completed);
  }

  window.xenophonLessonProgress = {
    STORAGE_KEY,
    readLessonFallback,
    markSegment,
    recordActivityResult,
    completeLesson,
    getActivityResult,
    isActivityPassed,
    isLessonComplete
  };
}());
