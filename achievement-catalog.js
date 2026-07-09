(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  root.xenophonAchievements = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function () {
  const AWARD_ASSET_BASE = "assets/awards/";

  const LEVEL_TABLE = [
    { number: 0, label: "Novice", xpRequired: 0 },
    { number: 1, label: "Apprentice", xpRequired: 100 },
    { number: 2, label: "Student", xpRequired: 200 },
    { number: 3, label: "Reader", xpRequired: 350 },
    { number: 4, label: "Grammarian", xpRequired: 550 },
    { number: 5, label: "Scholar", xpRequired: 800 },
    { number: 6, label: "Philologian", xpRequired: 1100 },
    { number: 7, label: "Xenophontic Reader", xpRequired: 1450 },
    { number: 8, label: "Companion of Socrates", xpRequired: 1850 },
    { number: 9, label: "Master of Greek", xpRequired: 2300 }
  ];

  const ACHIEVEMENT_CATALOG = [
    {
      slug: "first-steps",
      label: "First Steps",
      tier: "bronze",
      sortOrder: 1,
      description: "Started the course path and took the first step into Greek.",
      imageFilename: "Bronze-1-First-Steps.png",
      criteria: { startedUnit0: true },
      lockedDescription: "Start Unit 0 or complete any course activity."
    },
    {
      slug: "first-lesson",
      label: "First Lesson",
      tier: "bronze",
      sortOrder: 2,
      description: "Completed the first lesson-unit.",
      imageFilename: "Bronze-2-First-Lesson.png",
      criteria: { lessonsCompleted: 1 },
      lockedDescription: "Complete at least one lesson-unit."
    },
    {
      slug: "first-quiz",
      label: "First Quiz",
      tier: "bronze",
      sortOrder: 3,
      description: "Passed the first quiz.",
      imageFilename: "Bronze-3-First-Quiz.png",
      criteria: { quizzesPassed: 1 },
      lockedDescription: "Pass one quiz."
    },
    {
      slug: "first-vocabulary-set",
      label: "First Vocabulary Set",
      tier: "bronze",
      sortOrder: 4,
      description: "Completed a first vocabulary set.",
      imageFilename: "Bronze-4-First-Vocabulary-Set.png",
      criteria: { vocabularySetsCompleted: 1 },
      lockedDescription: "Complete or master one lesson vocabulary set."
    },
    {
      slug: "first-practice-session",
      label: "First Practice Session",
      tier: "bronze",
      sortOrder: 5,
      description: "Completed a first practice session.",
      imageFilename: "Bronze-5-First-Practice-Session.png",
      criteria: { practiceSessions: 1 },
      lockedDescription: "Complete one practice session."
    },
    {
      slug: "five-lessons-completed",
      label: "Five Lessons Completed",
      tier: "bronze",
      sortOrder: 6,
      description: "Completed five lesson-units.",
      imageFilename: "Bronze-6-Five-Lessons-Completed.png",
      criteria: { lessonsCompleted: 5 },
      lockedDescription: "Complete five lesson-units."
    },
    {
      slug: "seven-day-streak",
      label: "Seven-Day Streak",
      tier: "bronze",
      sortOrder: 7,
      description: "Built a seven-day Greek study streak.",
      imageFilename: "Bronze-7-Seven-Day-Streak.png",
      criteria: { streakDays: 7 },
      lockedDescription: "Study for seven days in a row."
    },
    {
      slug: "first-perfect-score",
      label: "First Perfect Score",
      tier: "bronze",
      sortOrder: 8,
      description: "Earned a first perfect quiz or activity score.",
      imageFilename: "Bronze-8-First-Perfect-Score.png",
      criteria: { perfectScoreCount: 1 },
      lockedDescription: "Earn one perfect score."
    },
    {
      slug: "principal-parts-beginner",
      label: "Principal Parts Beginner",
      tier: "bronze",
      sortOrder: 9,
      description: "Completed a first Principal Parts practice session.",
      imageFilename: "Bronze-5-First-Practice-Session.png",
      criteria: { principalPartsPracticeSessions: 1 },
      lockedDescription: "Complete one Principal Parts practice session."
    },
    {
      slug: "one-hundred-words-mastered",
      label: "100 Words Mastered",
      tier: "silver",
      sortOrder: 1,
      description: "Mastered one hundred Greek vocabulary words.",
      imageFilename: "Silver-1-100-Words-Mastered.png",
      criteria: { vocabularyMastered: 100 },
      lockedDescription: "Master 100 vocabulary words."
    },
    {
      slug: "first-translation",
      label: "First Translation",
      tier: "silver",
      sortOrder: 2,
      description: "Passed a first translation exercise.",
      imageFilename: "Silver-2-First-Translation.png",
      criteria: { translationExercisesPassed: 1 },
      lockedDescription: "Pass one translation exercise."
    },
    {
      slug: "parsing-apprentice",
      label: "Parsing Apprentice",
      tier: "silver",
      sortOrder: 3,
      description: "Passed five parsing exercises.",
      imageFilename: "Silver-3-Parsing-Apprentice.png",
      criteria: { parsingExercisesPassed: 5 },
      lockedDescription: "Pass five parsing exercises."
    },
    {
      slug: "verb-scholar",
      label: "Verb Scholar",
      tier: "silver",
      sortOrder: 3.5,
      description: "Studied all listed Principal Parts verbs.",
      imageFilename: "Silver-3-Parsing-Apprentice.png",
      criteria: { principalPartsVerbsStudied: 11 },
      lockedDescription: "Open every Principal Parts verb study page."
    },
    {
      slug: "reader-of-greek",
      label: "Reader of Greek",
      tier: "silver",
      sortOrder: 4,
      description: "Completed sustained Greek reading work.",
      imageFilename: "Silver-4-Reader-of-Greek.png",
      criteria: { readingsCompleted: 10, moduleCompleted: "module-1" },
      lockedDescription: "Complete ten readings or finish Module I."
    },
    {
      slug: "audio-explorer",
      label: "Audio Explorer",
      tier: "silver",
      sortOrder: 5,
      description: "Completed repeated audio and pronunciation work.",
      imageFilename: "Silver-5-Audio-Explorer.png",
      criteria: { audioItemsCompleted: 10, audioLessonsCompleted: 5 },
      lockedDescription: "Complete ten audio items or audio work for five lessons."
    },
    {
      slug: "twenty-practice-sessions",
      label: "20 Practice Sessions",
      tier: "silver",
      sortOrder: 6,
      description: "Completed twenty practice sessions.",
      imageFilename: "Silver-6-20-practice-sessions.png",
      criteria: { practiceSessions: 20 },
      lockedDescription: "Complete twenty practice sessions."
    },
    {
      slug: "irregular-verb-hunter",
      label: "Irregular Verb Hunter",
      tier: "silver",
      sortOrder: 6.5,
      description: "Correctly identified forms from the main irregular Principal Parts verbs.",
      imageFilename: "Silver-6-20-practice-sessions.png",
      criteria: { principalPartsIrregularCorrectCount: 7 },
      lockedDescription: "Correctly identify forms from seven irregular Principal Parts verbs."
    },
    {
      slug: "ten-perfect-quizzes",
      label: "10 Perfect Quizzes",
      tier: "silver",
      sortOrder: 7,
      description: "Earned ten perfect quiz scores.",
      imageFilename: "Silver-7-10-Perfect-Quizzes.png",
      sourceFilename: "Silver-7-10-Perfect-Quzzes.png",
      criteria: { perfectQuizCount: 10 },
      lockedDescription: "Earn ten perfect quiz scores."
    },
    {
      slug: "friend-of-athena",
      label: "Friend of Athena",
      tier: "silver",
      sortOrder: 8,
      description: "Joined wisdom with steady practice.",
      imageFilename: "Silver-8-Friend-of-Athena.png",
      criteria: { moduleCompleted: "module-1", streakDays: 7, practiceSessionsAlternative: 20 },
      lockedDescription: "Finish Module I with a seven-day streak, or complete twenty practice sessions."
    },
    {
      slug: "wisdom",
      label: "Wisdom",
      tier: "gold",
      sortOrder: 1,
      description: "Completed Module I, Wisdom and Socrates.",
      imageFilename: "Gold-1-Wisdom.png",
      criteria: { moduleCompleted: "module-1" },
      lockedDescription: "Complete Lessons 1-12."
    },
    {
      slug: "courage",
      label: "Courage",
      tier: "gold",
      sortOrder: 2,
      description: "Completed Module II, Courage and Leadership.",
      imageFilename: "Gold-2-Courage.png",
      criteria: { moduleCompleted: "module-2" },
      lockedDescription: "Complete Lessons 13-24."
    },
    {
      slug: "self-control",
      label: "Self-Control",
      tier: "gold",
      sortOrder: 3,
      description: "Completed Module III, Self-Control and Discipline.",
      imageFilename: "Gold-3-Self-Control.png",
      criteria: { moduleCompleted: "module-3" },
      lockedDescription: "Complete Lessons 25-36."
    },
    {
      slug: "justice",
      label: "Justice",
      tier: "gold",
      sortOrder: 4,
      description: "Completed Module IV, Justice and the City/Soul.",
      imageFilename: "Gold-4-Justice.png",
      criteria: { moduleCompleted: "module-4" },
      lockedDescription: "Complete Lessons 37-48."
    },
    {
      slug: "student-of-socrates",
      label: "Student of Socrates",
      tier: "gold",
      sortOrder: 5,
      description: "Completed the full course through Lesson 48.",
      imageFilename: "Gold-5-Student-of-Socrates.png",
      criteria: { fullCourseCompleted: true },
      lockedDescription: "Complete the full course through Lesson 48."
    },
    {
      slug: "principal-parts-master",
      label: "Principal Parts Master",
      tier: "gold",
      sortOrder: 6,
      description: "Scored 100% on a Principal Parts practice session.",
      imageFilename: "Gold-5-Student-of-Socrates.png",
      criteria: { principalPartsPerfectSessions: 1 },
      lockedDescription: "Earn a perfect Principal Parts practice score."
    }
  ];

  const TIER_ORDER = {
    bronze: 1,
    silver: 2,
    gold: 3
  };

  const MODULE_LESSON_RANGES = {
    "module-1": [1, 12],
    "module-2": [13, 24],
    "module-3": [25, 36],
    "module-4": [37, 48]
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function toNumber(value, fallback) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  function getAchievementCatalog() {
    return clone(ACHIEVEMENT_CATALOG).sort(compareAchievements);
  }

  function compareAchievements(first, second) {
    const tierDifference = (TIER_ORDER[first.tier] || 99) - (TIER_ORDER[second.tier] || 99);
    return tierDifference || first.sortOrder - second.sortOrder || first.label.localeCompare(second.label);
  }

  function resolveAchievementImagePath(achievement, basePath) {
    const filename = achievement && achievement.imageFilename ? achievement.imageFilename : "";
    return `${basePath || AWARD_ASSET_BASE}${filename}`;
  }

  function getLevelCatalog() {
    return clone(LEVEL_TABLE);
  }

  function getLevelForXp(xp) {
    const totalXp = Math.max(0, toNumber(xp, 0));
    return clone(LEVEL_TABLE.reduce((current, level) =>
      totalXp >= level.xpRequired ? level : current
    , LEVEL_TABLE[0]));
  }

  function getNextLevelForXp(xp) {
    const totalXp = Math.max(0, toNumber(xp, 0));
    const nextLevel = LEVEL_TABLE.find((level) => level.xpRequired > totalXp);

    if (nextLevel) {
      return clone(nextLevel);
    }

    const current = getLevelForXp(totalXp);
    return {
      number: current.number,
      label: current.label,
      xpRequired: Math.max(totalXp, current.xpRequired)
    };
  }

  function getLessonNumber(lessonId) {
    const match = String(lessonId || "").match(/^lesson-(\d+)$/);
    return match ? Number.parseInt(match[1], 10) : null;
  }

  function hasCompletedModule(completedLessons, moduleId) {
    const range = MODULE_LESSON_RANGES[moduleId];

    if (!range) {
      return false;
    }

    const completed = new Set((completedLessons || []).map(String));

    for (let lessonNumber = range[0]; lessonNumber <= range[1]; lessonNumber += 1) {
      if (!completed.has(`lesson-${lessonNumber}`)) {
        return false;
      }
    }

    return true;
  }

  function inferCompletedModules(metrics) {
    const explicitModules = Array.isArray(metrics.completedModules) ? metrics.completedModules : [];
    const completedLessons = Array.isArray(metrics.completedLessons) ? metrics.completedLessons : [];
    const modules = new Set(explicitModules);

    Object.keys(MODULE_LESSON_RANGES).forEach((moduleId) => {
      if (hasCompletedModule(completedLessons, moduleId)) {
        modules.add(moduleId);
      }
    });

    return modules;
  }

  function normalizeProgressMetrics(progress) {
    const completedLessons = Array.isArray(progress.completedLessons) ? progress.completedLessons : [];
    const completedLessonNumbers = completedLessons
      .map(getLessonNumber)
      .filter((lessonNumber) => Number.isFinite(lessonNumber));
    const metrics = {
      ...progress.metrics,
      ...progress,
      completedLessons,
      startedUnit0: Boolean(progress.startedUnit0 || progress.metrics?.startedUnit0 || completedLessons.includes("intro-1")),
      lessonsCompleted: toNumber(
        progress.metrics?.lessonsCompleted ?? progress.lessonsCompleted ?? progress.completedLessonsCount,
        completedLessons.length
      ),
      quizzesPassed: toNumber(
        progress.metrics?.quizzesPassed ??
        (Array.isArray(progress.quizzesPassed) ? progress.quizzesPassed.length : progress.quizzesPassed),
        0
      ),
      vocabularySetsCompleted: toNumber(progress.metrics?.vocabularySetsCompleted ?? progress.vocabularySetsCompleted, 0),
      vocabularyMastered: toNumber(progress.metrics?.vocabularyMastered ?? progress.vocabularyMastered, 0),
      practiceSessions: toNumber(progress.metrics?.practiceSessions ?? progress.practiceSessions ?? progress.practiceCompleted, 0),
      streakDays: toNumber(progress.metrics?.streakDays ?? progress.streakDays, 0),
      perfectScoreCount: toNumber(progress.metrics?.perfectScoreCount ?? progress.metrics?.perfectQuizCount ?? progress.perfectScoreCount, 0),
      perfectQuizCount: toNumber(progress.metrics?.perfectQuizCount ?? progress.metrics?.perfectScoreCount ?? progress.perfectQuizCount, 0),
      translationExercisesPassed: toNumber(progress.metrics?.translationExercisesPassed ?? progress.translationExercisesPassed, 0),
      parsingExercisesPassed: toNumber(progress.metrics?.parsingExercisesPassed ?? progress.parsingExercisesPassed, 0),
      readingsCompleted: toNumber(progress.metrics?.readingsCompleted ?? progress.readingsCompleted, 0),
      audioItemsCompleted: toNumber(progress.metrics?.audioItemsCompleted ?? progress.audioItemsCompleted, 0),
      audioLessonsCompleted: toNumber(progress.metrics?.audioLessonsCompleted ?? progress.audioLessonsCompleted, 0),
      principalPartsIntroViewed: Boolean(progress.metrics?.principalPartsIntroViewed ?? progress.principalPartsIntroViewed),
      principalPartsVerbsStudied: toNumber(progress.metrics?.principalPartsVerbsStudied ?? progress.principalPartsVerbsStudied, 0),
      principalPartsPracticeSessions: toNumber(progress.metrics?.principalPartsPracticeSessions ?? progress.principalPartsPracticeSessions, 0),
      principalPartsPerfectSessions: toNumber(progress.metrics?.principalPartsPerfectSessions ?? progress.principalPartsPerfectSessions, 0),
      principalPartsIrregularCorrectCount: toNumber(progress.metrics?.principalPartsIrregularCorrectCount ?? progress.principalPartsIrregularCorrectCount, 0),
      activityEvents: toNumber(progress.metrics?.activityEvents ?? progress.activityEvents ?? progress.recentActivity?.length, 0),
      fullCourseCompleted: Boolean(
        progress.metrics?.fullCourseCompleted ||
        progress.fullCourseCompleted ||
        completedLessons.includes("lesson-48")
      ),
      highestCompletedLesson: completedLessonNumbers.length ? Math.max(...completedLessonNumbers) : 0
    };

    metrics.completedModules = Array.from(inferCompletedModules(metrics));
    metrics.startedUnit0 = metrics.startedUnit0 || metrics.activityEvents > 0;

    return metrics;
  }

  function meetsCriteria(achievement, progressMetrics) {
    const metrics = normalizeProgressMetrics(progressMetrics || {});

    switch (achievement.slug) {
      case "first-steps":
        return metrics.startedUnit0 || metrics.activityEvents > 0;
      case "first-lesson":
        return metrics.lessonsCompleted >= 1;
      case "first-quiz":
        return metrics.quizzesPassed >= 1;
      case "first-vocabulary-set":
        return metrics.vocabularySetsCompleted >= 1;
      case "first-practice-session":
        return metrics.practiceSessions >= 1;
      case "five-lessons-completed":
        return metrics.lessonsCompleted >= 5;
      case "seven-day-streak":
        return metrics.streakDays >= 7;
      case "first-perfect-score":
        return metrics.perfectScoreCount >= 1 || metrics.perfectQuizCount >= 1;
      case "principal-parts-beginner":
        return metrics.principalPartsPracticeSessions >= 1;
      case "one-hundred-words-mastered":
        return metrics.vocabularyMastered >= 100;
      case "first-translation":
        return metrics.translationExercisesPassed >= 1;
      case "parsing-apprentice":
        return metrics.parsingExercisesPassed >= 5;
      case "verb-scholar":
        return metrics.principalPartsVerbsStudied >= 11;
      case "reader-of-greek":
        return metrics.readingsCompleted >= 10 || metrics.completedModules.includes("module-1");
      case "audio-explorer":
        return metrics.audioItemsCompleted >= 10 || metrics.audioLessonsCompleted >= 5;
      case "twenty-practice-sessions":
        return metrics.practiceSessions >= 20;
      case "irregular-verb-hunter":
        return metrics.principalPartsIrregularCorrectCount >= 7;
      case "ten-perfect-quizzes":
        return metrics.perfectQuizCount >= 10;
      case "friend-of-athena":
        return (
          metrics.completedModules.includes("module-1") && metrics.streakDays >= 7
        ) || metrics.practiceSessions >= 20;
      case "wisdom":
        return metrics.completedModules.includes("module-1");
      case "courage":
        return metrics.completedModules.includes("module-2");
      case "self-control":
        return metrics.completedModules.includes("module-3");
      case "justice":
        return metrics.completedModules.includes("module-4");
      case "student-of-socrates":
        return metrics.fullCourseCompleted;
      case "principal-parts-master":
        return metrics.principalPartsPerfectSessions >= 1;
      default:
        return false;
    }
  }

  function computeEarnedAchievements(progressMetrics) {
    const earnedAtBySlug = progressMetrics?.earnedAtBySlug || {};

    return getAchievementCatalog()
      .filter((achievement) => meetsCriteria(achievement, progressMetrics))
      .map((achievement) => ({
        ...achievement,
        imagePath: resolveAchievementImagePath(achievement),
        earned: true,
        earnedAt: earnedAtBySlug[achievement.slug] || achievement.earnedAt || null
      }));
  }

  function getLockedAchievements(progressMetrics) {
    const earnedSlugs = new Set(computeEarnedAchievements(progressMetrics).map((achievement) => achievement.slug));

    return getAchievementCatalog()
      .filter((achievement) => !earnedSlugs.has(achievement.slug))
      .map((achievement) => ({
        ...achievement,
        imagePath: resolveAchievementImagePath(achievement),
        earned: false,
        earnedAt: null
      }));
  }

  return {
    AWARD_ASSET_BASE,
    getAchievementCatalog,
    resolveAchievementImagePath,
    computeEarnedAchievements,
    getLockedAchievements,
    getLevelCatalog,
    getLevelForXp,
    getNextLevelForXp,
    normalizeProgressMetrics,
    meetsCriteria
  };
});
