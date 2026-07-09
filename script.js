const COURSE_USERS = [];

const achievementTools = window.xenophonAchievements || {
  getAchievementCatalog: () => [],
  computeEarnedAchievements: () => [],
  getLockedAchievements: () => [],
  resolveAchievementImagePath: (achievement) => achievement?.imagePath || "",
  getLevelForXp: (xp) => ({ number: xp >= 2300 ? 9 : xp >= 1850 ? 8 : xp >= 1450 ? 7 : xp >= 1100 ? 6 : xp >= 800 ? 5 : xp >= 550 ? 4 : xp >= 350 ? 3 : xp >= 200 ? 2 : xp >= 100 ? 1 : 0, label: xp >= 2300 ? "Master of Greek" : xp >= 1850 ? "Companion of Socrates" : xp >= 1450 ? "Xenophontic Reader" : xp >= 1100 ? "Philologian" : xp >= 800 ? "Scholar" : xp >= 550 ? "Grammarian" : xp >= 350 ? "Reader" : xp >= 200 ? "Student" : xp >= 100 ? "Apprentice" : "Novice", xpRequired: 0 }),
  getNextLevelForXp: (xp) => ({ number: xp >= 2300 ? 9 : xp >= 1850 ? 9 : xp >= 1450 ? 8 : xp >= 1100 ? 7 : xp >= 800 ? 6 : xp >= 550 ? 5 : xp >= 350 ? 4 : xp >= 200 ? 3 : xp >= 100 ? 2 : 1, label: xp >= 2300 ? "Master of Greek" : xp >= 1850 ? "Master of Greek" : xp >= 1450 ? "Companion of Socrates" : xp >= 1100 ? "Xenophontic Reader" : xp >= 800 ? "Philologian" : xp >= 550 ? "Scholar" : xp >= 350 ? "Grammarian" : xp >= 200 ? "Reader" : xp >= 100 ? "Student" : "Apprentice", xpRequired: xp >= 2300 ? xp : xp >= 1850 ? 2300 : xp >= 1450 ? 1850 : xp >= 1100 ? 1450 : xp >= 800 ? 1100 : xp >= 550 ? 800 : xp >= 350 ? 550 : xp >= 200 ? 350 : xp >= 100 ? 200 : 100 }),
  normalizeProgressMetrics: (progress) => progress?.metrics || {}
};

const ROLE_LABELS = {
  administrator: "Administrator",
  professor: "Professor",
  student: "Student"
};

const OPEN_LESSON_ACCESS_DURING_BUILD = true;
window.xenophonOpenLessonAccess = OPEN_LESSON_ACCESS_DURING_BUILD;

const LESSON_URLS = {
  "course-introduction": "course-introduction.html",
  "intro-1": "lesson-introduction.html",
  "lesson-1": "lesson.html?lesson=1&page=1",
  "lesson-4": "lesson.html?lesson=4&page=1"
};

const COURSE_MODULES = [
  {
    id: "unit-0",
    label: "Unit 0",
    title: "Greek Alphabet & Reading Readiness",
    subtitle: "The στοιχεῖα of Greek reading",
    type: "intro",
    lessons: [
      {
        id: "intro-1",
        title: "Greek Alphabet & Reading Readiness",
        grammar: "Letters, pronunciation, breathings, accents, keyboarding, and early decoding",
        exerciseIds: [
          "alphabet.letters",
          "diphthongs.recognition",
          "consonants.gamma_groups",
          "breathings.rough",
          "accents.iota_subscript",
          "keyboard.polytonic_basic",
          "reading.early_decoding",
          "reading.readiness_check"
        ]
      }
    ]
  },
  {
    id: "module-1",
    label: "Module I",
    title: "σοφία (Wisdom and Socrates)",
    description: "Learning, inquiry, and the examined life",
    introUrl: "module-1-sophia.html",
    lessons: [
      { id: "lesson-1", title: "Xenophon at Home", grammar: "Nominative singular, accusative singular, present active indicative, definite article, noun/adjective agreement" },
      { id: "lesson-2", title: "The Wise Man Knows Himself", grammar: "First and second declension nouns, definite article, εἰμί" },
      { id: "lesson-3", title: "What is Wisdom?", grammar: "Present tense system, predicate nouns, basic sentence structure" },
      { id: "lesson-4", title: "The Student and the Teacher", grammar: "First declension nouns, agreement, subject–object relationships", exerciseIds: ["noun-endings", "agreement", "translation", "quiz"] },
      { id: "lesson-5", title: "Learning Through Questioning", grammar: "Adjectives, agreement, attributive vs predicate position" },
      { id: "lesson-6", title: "The Search for Knowledge", grammar: "Second declension nouns, prepositions with cases" },
      { id: "lesson-7", title: "Examining Oneself", grammar: "Middle/passive voice (present), reflexive sense" },
      { id: "lesson-8", title: "In the Agora", grammar: "Prepositions expanded, dative case introduction" },
      { id: "lesson-9", title: "Socrates Questions All", grammar: "Imperfect tense, past continuous action" },
      { id: "lesson-10", title: "To Know and To Learn", grammar: "Infinitives (intro), complementary infinitives" },
      { id: "lesson-11", title: "The Thinking Mind", grammar: "Participles (intro), present active participle" },
      { id: "lesson-12", title: "The Examined Life", grammar: "Module review: present, imperfect, infinitives, participles" }
    ]
  },
  {
    id: "module-2",
    label: "Module II",
    title: "ἀνδρεία (Courage and Leadership)",
    description: "Endurance, fear, and leadership in action",
    introUrl: "module-2-andreia.html",
    lessons: [
      { id: "lesson-13", title: "The General Leads", grammar: "Contract verbs (–έω, –άω, –όω), present system" },
      { id: "lesson-14", title: "Trust in Leadership", grammar: "Imperfect of contract verbs, repeated past action" },
      { id: "lesson-15", title: "Hope and Expectation", grammar: "Future tense, predictive statements" },
      { id: "lesson-16", title: "If They Fight", grammar: "Subjunctive mood (intro), ἐάν clauses" },
      { id: "lesson-17", title: "Fear and Courage", grammar: "Infinitives expanded, verbs of fearing and fighting" },
      { id: "lesson-18", title: "The Battle Begins", grammar: "Aorist tense (intro), simple past action" },
      { id: "lesson-19", title: "Those Who Stand Firm", grammar: "Present participles, descriptive action" },
      { id: "lesson-20", title: "Victory Won", grammar: "Aorist participles, sequence of action" },
      { id: "lesson-21", title: "The Army Without Leaders", grammar: "Integrated narrative: tense contrast, participles" },
      { id: "lesson-22", title: "Do Not Fear!", grammar: "Imperatives, commands, prohibition (μή)" },
      { id: "lesson-23", title: "So Brave That…", grammar: "Result clauses (ὥστε + infinitive)" },
      { id: "lesson-24", title: "Courage Under Fire", grammar: "Module review: subjunctive, aorist, participles" }
    ]
  },
  {
    id: "module-3",
    label: "Module III",
    title: "σωφροσύνη (Self-Control and Discipline)",
    description: "Self-mastery and the well-ordered life",
    introUrl: "module-3-sophrosyne.html",
    lessons: [
      { id: "lesson-25", title: "Mastering Oneself", grammar: "Middle voice (present), reflexive meaning" },
      { id: "lesson-26", title: "Habits of Discipline", grammar: "Middle voice (imperfect & aorist)" },
      { id: "lesson-27", title: "What Must Be Done", grammar: "Indirect statement (accusative + infinitive)" },
      { id: "lesson-28", title: "The Desire to Live Well", grammar: "Complementary infinitives (expanded)" },
      { id: "lesson-29", title: "Working with Purpose", grammar: "Purpose clauses (ἵνα + subjunctive)" },
      { id: "lesson-30", title: "Knowing Oneself", grammar: "Reflexive pronouns" },
      { id: "lesson-31", title: "If a Man is Self-Controlled", grammar: "Conditional sentences (simple conditions)" },
      { id: "lesson-32", title: "The Well-Ordered Household", grammar: "Integrated reading: purpose + infinitives" },
      { id: "lesson-33", title: "Training the Self", grammar: "Middle participles" },
      { id: "lesson-34", title: "Nothing in Excess", grammar: "Negation, moderation vocabulary" },
      { id: "lesson-35", title: "What is Self-Control?", grammar: "Dialogue structure, indirect discourse" },
      { id: "lesson-36", title: "The Disciplined Life", grammar: "Module review: middle voice, infinitives, conditionals" }
    ]
  },
  {
    id: "module-4",
    label: "Module IV",
    title: "δικαιοσύνη (Justice and the City)",
    description: "Law, responsibility, and the just life",
    introUrl: "module-4-dikaiosyne.html",
    lessons: [
      { id: "lesson-37", title: "Justice is the Greatest Good", grammar: "Predicate nouns, ὅτι clauses" },
      { id: "lesson-38", title: "They Say He is Just", grammar: "Indirect statement (ὅτι / ὡς)" },
      { id: "lesson-39", title: "The Accusation", grammar: "Accusative + infinitive (reported speech)" },
      { id: "lesson-40", title: "Speaking the Truth", grammar: "Participles in argument" },
      { id: "lesson-41", title: "The Just Man", grammar: "Relative clauses (ὅς, ἥ, ὅ)" },
      { id: "lesson-42", title: "What is Justice?", grammar: "μέν…δέ contrast, comparison structures" },
      { id: "lesson-43", title: "Law and Fear", grammar: "Verb complements, reinforcing structures" },
      { id: "lesson-44", title: "If They Act Justly", grammar: "Future more vivid conditions" },
      { id: "lesson-45", title: "The Defense of Socrates", grammar: "Negation, indirect discourse reinforcement" },
      { id: "lesson-46", title: "Why They Are Angry", grammar: "Cause clauses (ὅτι / διότι)" },
      { id: "lesson-47", title: "The Trial of Socrates", grammar: "Infinitives of obligation, complex reasoning" },
      { id: "lesson-48", title: "Justice and the Soul", grammar: "Module review: advanced clauses, discourse" }
    ]
  }
];

const COURSE_LESSONS = COURSE_MODULES.flatMap((module) =>
  module.lessons.map((lesson, index) => {
    const numericLesson = lesson.id.match(/^lesson-(\d+)$/)?.[1];
    const introLesson = lesson.id.match(/^intro-(\d+)$/)?.[1];
    return {
      ...lesson,
      moduleId: module.id,
      moduleLabel: module.label,
      moduleTitle: module.title,
      moduleType: module.type || "module",
      number: lesson.number || (numericLesson ? `Lesson ${numericLesson}` : `Unit ${introLesson === "1" ? "0" : introLesson || index + 1}`),
      subtitle: lesson.grammar || module.description || module.subtitle,
      url: LESSON_URLS[lesson.id] || (numericLesson ? `lesson.html?lesson=${numericLesson}&page=1` : `lessons.html#${lesson.id}`),
      exerciseIds: lesson.exerciseIds || ["reading", "practice", "quiz"]
    };
  })
);

const STUDENT_PROGRESS_PLAN = [
  {
    name: "New Student",
    email: "new.student@example.edu",
    roles: ["student"],
    currentLessonId: "intro-1",
    xp: 0,
    weeklyGoal: 3,
    completedDisplayCount: 0,
    metrics: { startedUnit0: true, lessonsCompleted: 0, quizzesPassed: 0, vocabularySetsCompleted: 0, practiceSessions: 0, activityEvents: 1 },
    summary: "Unit 0 in progress"
  },
  {
    name: "Codex Student",
    email: "codex.student@example.edu",
    roles: ["student"],
    currentLessonId: "lesson-1",
    xp: 40,
    weeklyGoal: 3,
    metrics: { startedUnit0: true, lessonsCompleted: 1, quizzesPassed: 0, vocabularySetsCompleted: 0, practiceSessions: 0, activityEvents: 2 },
    summary: "Unit 0 complete; Lesson 1 starting"
  },
  {
    name: "John Doe",
    email: "jdoe@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-2",
    xp: 120,
    weeklyGoal: 4,
    metrics: { quizzesPassed: 1, vocabularySetsCompleted: 1, vocabularyMastered: 18, practiceSessions: 1, activityEvents: 4 }
  },
  {
    name: "Susan Doe",
    email: "sdoe@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-3",
    xp: 205,
    weeklyGoal: 4,
    metrics: { quizzesPassed: 2, vocabularySetsCompleted: 2, vocabularyMastered: 32, practiceSessions: 3, translationExercisesPassed: 1, activityEvents: 5 }
  },
  {
    name: "Mary Contrary",
    email: "mcontrary@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-4",
    xp: 300,
    weeklyGoal: 4,
    metrics: { quizzesPassed: 3, vocabularySetsCompleted: 3, vocabularyMastered: 44, practiceSessions: 5, translationExercisesPassed: 1, perfectScoreCount: 1, perfectQuizCount: 1, activityEvents: 7 }
  },
  {
    name: "Sarah Kim",
    email: "skim@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-6",
    xp: 490,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 5, vocabularySetsCompleted: 5, vocabularyMastered: 70, practiceSessions: 7, translationExercisesPassed: 2, perfectScoreCount: 1, perfectQuizCount: 1, activityEvents: 9 }
  },
  {
    name: "John Davis",
    email: "jdavis@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-8",
    xp: 650,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 7, vocabularySetsCompleted: 7, vocabularyMastered: 88, practiceSessions: 9, streakDays: 7, translationExercisesPassed: 2, perfectScoreCount: 1, perfectQuizCount: 2, audioItemsCompleted: 7, audioLessonsCompleted: 4, activityEvents: 11 }
  },
  {
    name: "Alex Chen",
    email: "achen@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-10",
    xp: 800,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 9, vocabularySetsCompleted: 9, vocabularyMastered: 110, practiceSessions: 12, streakDays: 8, translationExercisesPassed: 3, perfectScoreCount: 1, perfectQuizCount: 3, audioItemsCompleted: 11, audioLessonsCompleted: 5, activityEvents: 14 }
  },
  {
    name: "Maria Lopez",
    email: "mlopez@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-12",
    xp: 940,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 11, vocabularySetsCompleted: 11, vocabularyMastered: 128, practiceSessions: 16, streakDays: 9, translationExercisesPassed: 4, parsingExercisesPassed: 5, readingsCompleted: 10, perfectScoreCount: 1, perfectQuizCount: 4, audioItemsCompleted: 12, audioLessonsCompleted: 6, activityEvents: 18 }
  },
  {
    name: "Thomas Clay",
    email: "tclay@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-13",
    xp: 1030,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 12, vocabularySetsCompleted: 12, vocabularyMastered: 142, practiceSessions: 18, streakDays: 7, translationExercisesPassed: 5, parsingExercisesPassed: 6, readingsCompleted: 12, perfectScoreCount: 2, perfectQuizCount: 5, audioItemsCompleted: 14, audioLessonsCompleted: 7, activityEvents: 20 }
  },
  {
    name: "Nikolas Ioannidis",
    email: "nioannidis@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-15",
    xp: 1180,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 14, vocabularySetsCompleted: 14, vocabularyMastered: 160, practiceSessions: 22, streakDays: 8, translationExercisesPassed: 6, parsingExercisesPassed: 7, readingsCompleted: 13, perfectScoreCount: 2, perfectQuizCount: 6, audioItemsCompleted: 15, audioLessonsCompleted: 8, activityEvents: 24 }
  },
  {
    name: "Patroclus Homer",
    email: "phomer@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-18",
    xp: 1390,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 17, vocabularySetsCompleted: 17, vocabularyMastered: 178, practiceSessions: 24, streakDays: 9, translationExercisesPassed: 7, parsingExercisesPassed: 8, readingsCompleted: 15, perfectScoreCount: 2, perfectQuizCount: 7, audioItemsCompleted: 17, audioLessonsCompleted: 9, activityEvents: 27 }
  },
  {
    name: "Achilles Homer",
    email: "ahomer@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-20",
    xp: 1550,
    weeklyGoal: 6,
    metrics: { quizzesPassed: 19, vocabularySetsCompleted: 19, vocabularyMastered: 195, practiceSessions: 27, streakDays: 10, translationExercisesPassed: 8, parsingExercisesPassed: 9, readingsCompleted: 17, perfectScoreCount: 2, perfectQuizCount: 8, audioItemsCompleted: 19, audioLessonsCompleted: 10, activityEvents: 30 }
  },
  {
    name: "Diogenes Laertius",
    email: "dlaertius@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-23",
    xp: 1740,
    weeklyGoal: 6,
    metrics: { quizzesPassed: 22, vocabularySetsCompleted: 22, vocabularyMastered: 220, practiceSessions: 29, streakDays: 11, translationExercisesPassed: 9, parsingExercisesPassed: 10, readingsCompleted: 20, perfectScoreCount: 2, perfectQuizCount: 9, audioItemsCompleted: 21, audioLessonsCompleted: 11, activityEvents: 33 }
  },
  {
    name: "Plato Aristocles",
    email: "paristocles@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-25",
    xp: 1950,
    weeklyGoal: 6,
    metrics: { quizzesPassed: 24, vocabularySetsCompleted: 24, vocabularyMastered: 240, practiceSessions: 31, streakDays: 12, translationExercisesPassed: 10, parsingExercisesPassed: 11, readingsCompleted: 24, perfectScoreCount: 3, perfectQuizCount: 10, audioItemsCompleted: 24, audioLessonsCompleted: 12, activityEvents: 36 }
  },
  {
    name: "Alexandros Papadopoulos",
    email: "apapadopoulos@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-27",
    xp: 2075,
    weeklyGoal: 6,
    metrics: { quizzesPassed: 26, vocabularySetsCompleted: 26, vocabularyMastered: 260, practiceSessions: 34, streakDays: 13, translationExercisesPassed: 11, parsingExercisesPassed: 12, readingsCompleted: 26, perfectScoreCount: 3, perfectQuizCount: 11, audioItemsCompleted: 26, audioLessonsCompleted: 13, activityEvents: 39 }
  },
  {
    name: "Tom Alston",
    email: "tpalston@email.sc.edu",
    roles: ["administrator", "professor", "student"],
    currentLessonId: "lesson-29",
    xp: 2050,
    weeklyGoal: 5,
    completedDisplayCount: 31,
    completionPercent: 61,
    metrics: { lessonsCompleted: 31, quizzesPassed: 28, vocabularySetsCompleted: 28, vocabularyMastered: 176, practiceSessions: 23, streakDays: 9, translationExercisesPassed: 9, parsingExercisesPassed: 9, readingsCompleted: 18, perfectScoreCount: 2, perfectQuizCount: 7, audioItemsCompleted: 18, audioLessonsCompleted: 9, activityEvents: 28 },
    summary: "Module III · Lesson 29 · Purpose clauses"
  },
  {
    name: "Mark Beck",
    email: "BECKMA@mailbox.sc.edu",
    roles: ["professor", "student"],
    currentLessonId: "lesson-32",
    xp: 2220,
    weeklyGoal: 5,
    metrics: { quizzesPassed: 31, vocabularySetsCompleted: 31, vocabularyMastered: 215, practiceSessions: 26, streakDays: 8, translationExercisesPassed: 10, parsingExercisesPassed: 10, readingsCompleted: 21, perfectScoreCount: 2, perfectQuizCount: 8, audioItemsCompleted: 22, audioLessonsCompleted: 11, activityEvents: 32 },
    summary: "Module III · Lesson 32 · Purpose and infinitives"
  },
  {
    name: "Alexander Great",
    email: "agreat@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-39",
    xp: 2520,
    weeklyGoal: 6,
    metrics: { quizzesPassed: 38, vocabularySetsCompleted: 38, vocabularyMastered: 320, practiceSessions: 42, streakDays: 14, translationExercisesPassed: 16, parsingExercisesPassed: 16, readingsCompleted: 34, perfectScoreCount: 4, perfectQuizCount: 12, audioItemsCompleted: 34, audioLessonsCompleted: 17, activityEvents: 48 }
  },
  {
    name: "Dimitrios Georgiou",
    email: "dgeorgiou@email.sc.edu",
    roles: ["student"],
    currentLessonId: "lesson-48",
    xp: 3000,
    weeklyGoal: 6,
    courseComplete: true,
    metrics: { fullCourseCompleted: true, quizzesPassed: 48, vocabularySetsCompleted: 48, vocabularyMastered: 430, practiceSessions: 60, streakDays: 21, translationExercisesPassed: 24, parsingExercisesPassed: 24, readingsCompleted: 48, perfectScoreCount: 10, perfectQuizCount: 14, audioItemsCompleted: 60, audioLessonsCompleted: 30, activityEvents: 70 },
    summary: "Course complete"
  }
];

const LESSON_TEST_GRADE_TARGETS = {
  "new.student@example.edu": { testCount: 0, baseScore: 0, spreadSeed: 0 },
  "codex.student@example.edu": { testCount: 0, baseScore: 0, spreadSeed: 0 },
  "jdoe@email.sc.edu": { testCount: 1, baseScore: 78, spreadSeed: 1 },
  "sdoe@email.sc.edu": { testCount: 3, baseScore: 84, spreadSeed: 2 },
  "mcontrary@email.sc.edu": { testCount: 3, baseScore: 86, spreadSeed: 3 },
  "skim@email.sc.edu": { testCount: 5, baseScore: 88, spreadSeed: 4 },
  "jdavis@email.sc.edu": { testCount: 5, baseScore: 78, spreadSeed: 5 },
  "achen@email.sc.edu": { testCount: 8, baseScore: 88, spreadSeed: 6 },
  "mlopez@email.sc.edu": { testCount: 10, baseScore: 90, spreadSeed: 7 },
  "tclay@email.sc.edu": { testCount: 11, baseScore: 84, spreadSeed: 8 },
  "nioannidis@email.sc.edu": { testCount: 12, baseScore: 89, spreadSeed: 9 },
  "phomer@email.sc.edu": { testCount: 15, baseScore: 86, spreadSeed: 10 },
  "ahomer@email.sc.edu": { testCount: 17, baseScore: 91, spreadSeed: 11 },
  "dlaertius@email.sc.edu": { testCount: 20, baseScore: 90, spreadSeed: 12 },
  "paristocles@email.sc.edu": { testCount: 22, baseScore: 93, spreadSeed: 13 },
  "apapadopoulos@email.sc.edu": { testCount: 24, baseScore: 91, spreadSeed: 14 },
  "tpalston@email.sc.edu": { testCount: 28, baseScore: 88, spreadSeed: 15 },
  "beckma@mailbox.sc.edu": { testCount: 31, baseScore: 94, spreadSeed: 16 },
  "agreat@email.sc.edu": { testCount: 38, baseScore: 92, spreadSeed: 17 },
  "dgeorgiou@email.sc.edu": { testCount: 48, baseScore: 95, spreadSeed: 18 }
};

function getLessonNumberFromId(lessonId) {
  const match = String(lessonId || "").match(/^lesson-(\d+)$/);
  return match ? Number.parseInt(match[1], 10) : null;
}

function clampScore(score) {
  return Math.max(72, Math.min(97, score));
}

function buildLessonTestGradesForPlan(plan) {
  const target = LESSON_TEST_GRADE_TARGETS[normalizeEmail(plan.email)];

  if (!target?.testCount) {
    return [];
  }

  return COURSE_LESSONS
    .filter((lesson) => {
      const lessonNumber = getLessonNumberFromId(lesson.id);
      return lessonNumber != null && lessonNumber <= target.testCount;
    })
    .map((lesson) => {
      const lessonNumber = getLessonNumberFromId(lesson.id);
      const scorePercent = clampScore(target.baseScore + (((lessonNumber + target.spreadSeed) % 7) - 3));
      const completedDate = new Date(Date.UTC(2027, 0, 15 + lessonNumber * 3 + (target.spreadSeed % 3)));

      return {
        lessonId: lesson.id,
        lessonLabel: lesson.number,
        lessonTitle: lesson.title,
        testTitle: "Lesson Test",
        scorePercent,
        pointsEarned: scorePercent,
        pointsPossible: 100,
        attemptNumber: 1,
        completedAt: completedDate.toISOString()
      };
    });
}

function getCompletedLessonIdsForPlan(plan) {
  const currentIndex = COURSE_LESSONS.findIndex((lesson) => lesson.id === plan.currentLessonId);

  if (plan.courseComplete) {
    return COURSE_LESSONS.map((lesson) => lesson.id);
  }

  return COURSE_LESSONS
    .slice(0, Math.max(0, currentIndex))
    .map((lesson) => lesson.id);
}

function buildCompletedExercisesForPlan(completedLessons, currentLessonId, metrics) {
  const completedSet = new Set(completedLessons);
  const exercises = {};

  COURSE_LESSONS.forEach((lesson) => {
    if (completedSet.has(lesson.id)) {
      exercises[lesson.id] = lesson.exerciseIds;
    }
  });

  if (metrics.practiceSessions > 0 && !completedSet.has(currentLessonId)) {
    const currentLesson = COURSE_LESSONS.find((lesson) => lesson.id === currentLessonId) || COURSE_LESSONS[0];
    exercises[currentLessonId] = currentLesson.exerciseIds.slice(0, 1);
  }

  return exercises;
}

function buildRecentActivityForPlan(plan, progress, metrics) {
  const currentLesson = COURSE_LESSONS.find((lesson) => lesson.id === plan.currentLessonId) || COURSE_LESSONS[0];
  const activities = [
    {
      icon: "📘",
      type: "book",
      title: plan.courseComplete
        ? "Completed: Lesson 48 — Justice and the Soul"
        : `Current: ${currentLesson.number} — ${currentLesson.title}`,
      when: "Today",
      xp: plan.courseComplete ? 60 : 20
    }
  ];

  if (metrics.quizzesPassed > 0) {
    activities.push({
      icon: "✓",
      type: "exercise",
      title: `Passed Quiz: ${currentLesson.number}`,
      when: "Yesterday",
      xp: 30
    });
  }

  if (metrics.vocabularySetsCompleted > 0) {
    activities.push({
      icon: "☰",
      type: "review",
      title: `Reviewed vocabulary set ${Math.max(1, Math.min(metrics.vocabularySetsCompleted, 48))}`,
      when: "2 days ago",
      xp: 15
    });
  }

  if (metrics.translationExercisesPassed > 0) {
    activities.push({
      icon: "✎",
      type: "exercise",
      title: "Completed Exercise: translation drill",
      when: "3 days ago",
      xp: 25
    });
  }

  if (metrics.streakDays >= 7) {
    activities.push({
      icon: "•",
      type: "book",
      title: `${metrics.streakDays}-day study streak active`,
      when: "This week",
      xp: 10
    });
  }

  return activities.slice(0, 5);
}

function decorateAchievements(progress) {
  const earned = achievementTools.computeEarnedAchievements(progress);
  const earnedAtBySlug = {};

  earned.forEach((achievement, index) => {
    const earnedDate = new Date(Date.UTC(2027, 0, 15 + index));
    earnedAtBySlug[achievement.slug] = earnedDate.toISOString();
  });

  progress.metrics = {
    ...progress.metrics,
    earnedAtBySlug
  };
  progress.achievements = achievementTools.computeEarnedAchievements(progress);
  progress.lockedAchievements = achievementTools.getLockedAchievements(progress);
  progress.achievementCatalog = achievementTools.getAchievementCatalog();
  return progress;
}

function buildProgressFromPlan(plan) {
  const completedLessons = getCompletedLessonIdsForPlan(plan);
  const level = achievementTools.getLevelForXp(plan.xp);
  const nextLevel = achievementTools.getNextLevelForXp(plan.xp);
  const maxLevelReached = nextLevel.number === level.number && plan.xp >= level.xpRequired;
  const lessonTestGrades = buildLessonTestGradesForPlan(plan);
  const completedLessonTestsCount = lessonTestGrades.length;
  const currentCourseGradePercent = completedLessonTestsCount
    ? Math.round(lessonTestGrades.reduce((sum, grade) => sum + grade.scorePercent, 0) / completedLessonTestsCount)
    : null;
  const metrics = {
    startedUnit0: true,
    lessonsCompleted: plan.completedDisplayCount ?? completedLessons.length,
    quizzesPassed: 0,
    vocabularySetsCompleted: 0,
    vocabularyMastered: 0,
    practiceSessions: 0,
    streakDays: 0,
    perfectScoreCount: 0,
    perfectQuizCount: 0,
    translationExercisesPassed: 0,
    parsingExercisesPassed: 0,
    readingsCompleted: 0,
    audioItemsCompleted: 0,
    audioLessonsCompleted: 0,
    activityEvents: 1,
    fullCourseCompleted: Boolean(plan.courseComplete),
    ...plan.metrics
  };
  metrics.lessonTestsCompleted = completedLessonTestsCount;
  const completedDisplayCount = plan.completedDisplayCount ?? completedLessons.length;
  const totalLessonsCount = COURSE_LESSONS.length;
  const completionPercent = typeof plan.completionPercent === "number"
    ? plan.completionPercent
    : Math.round((completedDisplayCount / totalLessonsCount) * 100);
  const progress = {
    currentLessonId: plan.currentLessonId,
    currentSegmentId: plan.currentLessonId === "intro-1" ? "intro-part-1" : "lesson-start",
    completedLessons,
    passedQuizzes: completedLessons.filter((lessonId) => lessonId.startsWith("lesson-")).slice(0, metrics.quizzesPassed),
    completedExercises: buildCompletedExercisesForPlan(completedLessons, plan.currentLessonId, metrics),
    completedLessonsCount: completedDisplayCount,
    totalLessonsCount,
    completionPercent,
    level: level.number,
    levelLabel: level.label,
    xp: plan.xp,
    nextLevelXp: maxLevelReached ? Math.max(plan.xp, level.xpRequired) : nextLevel.xpRequired,
    nextLevelLabel: maxLevelReached ? "" : nextLevel.label,
    maxLevelReached,
    currentCourseGradePercent,
    completedLessonTestsCount,
    lessonTestGrades,
    weeklyCompleted: Math.min(plan.weeklyGoal || 5, Math.max(0, Math.round(metrics.practiceSessions / 6))),
    weeklyGoal: plan.weeklyGoal || 5,
    vocabularyMastered: metrics.vocabularyMastered,
    practiceCompleted: metrics.practiceSessions,
    fullCourseCompleted: Boolean(plan.courseComplete),
    metrics
  };

  progress.recentActivity = buildRecentActivityForPlan(plan, progress, metrics);

  return decorateAchievements(progress);
}

function buildMockCourseUsers() {
  return STUDENT_PROGRESS_PLAN.map((plan) => ({
    name: plan.name,
    email: plan.email,
    roles: plan.roles,
    progress: buildProgressFromPlan(plan),
    course: {
      code: "GREK 110 J10",
      title: "Learn Ancient Greek with Xenophon",
      term: "Spring 2027"
    }
  }));
}

COURSE_USERS.push(...buildMockCourseUsers());

function buildProfessorDashboardFallback() {
  const students = COURSE_USERS
    .map((user) => {
      const progress = user.progress;
      const currentLesson = findLesson(progress.currentLessonId);
      const averageGrade = progress.completedLessonTestsCount ? progress.currentCourseGradePercent : null;
      const inactiveDays = user.name === "New Student" ? 0 : Math.max(0, 8 - progress.weeklyCompleted);
      const status = inactiveDays >= 7 || (averageGrade != null && averageGrade < 70)
        ? "Needs Attention"
        : inactiveDays >= 4 || (averageGrade != null && averageGrade < 80)
        ? "At Risk"
        : "Active";

      return {
        name: user.name,
        email: user.email,
        photoUrl: "",
        progress: progress.completionPercent,
        currentLessonId: progress.currentLessonId,
        currentLesson: progress.fullCourseCompleted
          ? "Course complete"
          : `${currentLesson.number} — ${currentLesson.title}`,
        level: progress.levelLabel,
        levelNumber: progress.level,
        averageGrade: averageGrade == null ? "N/A" : `${averageGrade}%`,
        completedLessonTestsCount: progress.completedLessonTestsCount || 0,
        lastActivity: progress.recentActivity[0]?.when || "No activity",
        status
      };
    })
    .sort((first, second) => first.name.localeCompare(second.name));
  const averageCompletion = students.length
    ? Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length)
    : 0;
  const studentsWithGrades = students.filter((student) => student.averageGrade !== "N/A");
  const averageGrade = studentsWithGrades.length
    ? `${Math.round(studentsWithGrades.reduce((sum, student) => sum + Number.parseInt(student.averageGrade, 10), 0) / studentsWithGrades.length)}%`
    : "N/A";
  const activeThisWeek = students.filter((student) => student.lastActivity !== "No activity").length;
  const attention = students
    .filter((student) => student.status !== "Active")
    .slice(0, 5)
    .map((student) => [student.name, `${student.lastActivity}; ${student.status.toLowerCase()}`]);
  const lessonProgress = COURSE_LESSONS.slice(0, 6).map((lesson) => {
    const completed = COURSE_USERS.filter((user) => user.progress.completedLessons.includes(lesson.id)).length;
    return [
      lesson.number,
      `${completed} completed`,
      students.length ? Math.round((completed / students.length) * 100) : 0
    ];
  });
  const gradeBuckets = [
    ["A range", 0, 90, 100],
    ["B range", 0, 80, 89],
    ["C range", 0, 70, 79],
    ["Below C", 0, 0, 69]
  ];

  students.forEach((student) => {
    const grade = Number.parseInt(student.averageGrade, 10);
    if (Number.isNaN(grade)) {
      return;
    }
    const bucket = gradeBuckets.find(([, , min, max]) => grade >= min && grade <= max);

    if (bucket) {
      bucket[1] += 1;
    }
  });

  return {
    overview: [
      ["Total Students", String(students.length)],
      ["Active This Week", String(activeThisWeek)],
      ["Average Completion", `${averageCompletion}%`],
      ["Average Grade", averageGrade]
    ],
    grading: [
      ["Pending Submissions", "4"],
      ["Needs Review", "3"],
      ["Overdue", String(students.filter((student) => student.status === "Needs Attention").length)]
    ],
    weeklyActivity: [
      ["Lessons Completed This Week", String(COURSE_USERS.reduce((sum, user) => sum + user.progress.weeklyCompleted, 0))],
      ["Average Completion", `${averageCompletion}%`],
      ["Most Active Lesson", students.find((student) => student.status === "Active")?.currentLesson || "No activity yet"]
    ],
    students,
    attention,
    submissions: [
      ["Translation Drill", "Tom Alston", "Needs Review"],
      ["Lesson Quiz", "Dimitrios Georgiou", "100%"],
      ["Parsing Exercise", "Alexander Great", "96%"],
      ["Vocabulary Set", "New Student", "Started"]
    ],
    lessonProgress,
    grades: [
      ...gradeBuckets.map(([label, count]) => [
      label,
      `${count} ${count === 1 ? "student" : "students"}`,
      students.length ? Math.round((count / students.length) * 100) : 0
      ]),
      [
        "No tests yet",
        `${students.length - studentsWithGrades.length} ${students.length - studentsWithGrades.length === 1 ? "student" : "students"}`,
        students.length ? Math.round(((students.length - studentsWithGrades.length) / students.length) * 100) : 0
      ]
    ]
  };
}

let lessonMetadataLoadPromise = null;
let hasLiveLessonMetadata = false;

function shouldUseLessonPageUrl(lessonId, pageUrl) {
  return Boolean(pageUrl && (pageUrl.startsWith("lesson.html") || pageUrl.includes(`lesson=${lessonId.replace("lesson-", "")}`)));
}

function applyLessonMetadataCatalog(data) {
  if (!data || !Array.isArray(data.modules)) {
    return false;
  }

  let updated = false;

  data.modules.forEach((liveModule) => {
    const module = COURSE_MODULES.find((candidate) => candidate.id === liveModule.id);

    if (!module) {
      return;
    }

    if (liveModule.label) {
      module.label = liveModule.label;
    }

    if (liveModule.title) {
      module.title = liveModule.title;
    }

    if (liveModule.subtitle) {
      module.subtitle = liveModule.subtitle;
    }

    if (liveModule.description) {
      module.description = liveModule.description;
    }

    if (liveModule.type) {
      module.type = liveModule.type;
    }

    (liveModule.lessons || []).forEach((liveLesson) => {
      const lesson = COURSE_LESSONS.find((candidate) => candidate.id === liveLesson.id);
      const moduleLesson = module.lessons.find((candidate) => candidate.id === liveLesson.id);

      if (!lesson) {
        return;
      }

      const title = typeof liveLesson.title === "string" && liveLesson.title.trim()
        ? liveLesson.title.trim()
        : lesson.title;
      const grammar = typeof liveLesson.grammar === "string" && liveLesson.grammar.trim()
        ? liveLesson.grammar.trim()
        : lesson.grammar;
      const number = typeof liveLesson.number === "string" && liveLesson.number.trim()
        ? liveLesson.number.trim()
        : lesson.number;
      const url = shouldUseLessonPageUrl(liveLesson.id, liveLesson.pageUrl)
        ? liveLesson.pageUrl
        : lesson.url;

      Object.assign(lesson, {
        title,
        grammar,
        number,
        subtitle: grammar || module.description || module.subtitle || lesson.subtitle,
        moduleLabel: module.label,
        moduleTitle: module.title,
        moduleType: module.type || "module",
        url
      });

      if (moduleLesson) {
        Object.assign(moduleLesson, {
          title,
          grammar,
          number,
          subtitle: grammar || module.description || module.subtitle || moduleLesson.subtitle,
          url
        });
      }

      updated = true;
    });
  });

  hasLiveLessonMetadata = updated;
  return updated;
}

async function refreshLessonMetadataCatalog() {
  if (lessonMetadataLoadPromise) {
    return lessonMetadataLoadPromise;
  }

  lessonMetadataLoadPromise = fetch("/api/lesson-metadata")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lesson metadata request failed");
      }

      return response.json();
    })
    .then((data) => applyLessonMetadataCatalog(data))
    .catch((error) => {
      console.error("Unable to load lesson metadata", error);
      return false;
    })
    .finally(() => {
      lessonMetadataLoadPromise = null;
    });

  return lessonMetadataLoadPromise;
}

// Prototype mirror of the internal vocabulary_items + lesson_vocabulary data model.
// Flashcards and mobile drills are generated from these rows, not from an external service.
const COURSE_VOCABULARY = [
  {
    id: "vocab-logos-001",
    lessonId: "intro-1",
    sortOrder: 1,
    lemma: "λόγος",
    displayForm: "λόγος",
    transliteration: "logos",
    partOfSpeech: "noun",
    gloss: "word, reason, account",
    morphology: { gender: "masculine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 2, correctCount: 3, incorrectCount: 2 }
  },
  {
    id: "vocab-oikos-001",
    lessonId: "intro-1",
    sortOrder: 2,
    lemma: "οἶκος",
    displayForm: "οἶκος",
    transliteration: "oikos",
    partOfSpeech: "noun",
    gloss: "house, household",
    morphology: { gender: "masculine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 3, correctCount: 5, incorrectCount: 1 }
  },
  {
    id: "vocab-arete-001",
    lessonId: "intro-1",
    sortOrder: 3,
    lemma: "ἀρετή",
    displayForm: "ἀρετή",
    transliteration: "arete",
    partOfSpeech: "noun",
    gloss: "excellence, virtue",
    morphology: { gender: "feminine" },
    audioUrl: null,
    review: { dueToday: false, confidence: 4, correctCount: 6, incorrectCount: 1 }
  },
  {
    id: "vocab-aner-001",
    lessonId: "intro-2",
    sortOrder: 1,
    lemma: "ἀνήρ",
    displayForm: "ἀνήρ",
    transliteration: "aner",
    partOfSpeech: "noun",
    gloss: "man",
    morphology: { gender: "masculine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 2, correctCount: 2, incorrectCount: 3 }
  },
  {
    id: "vocab-theos-001",
    lessonId: "intro-2",
    sortOrder: 2,
    lemma: "θεός",
    displayForm: "θεός",
    transliteration: "theos",
    partOfSpeech: "noun",
    gloss: "god",
    morphology: { gender: "masculine" },
    audioUrl: null,
    review: { dueToday: false, confidence: 3, correctCount: 4, incorrectCount: 1 }
  },
  {
    id: "vocab-odos-001",
    lessonId: "intro-2",
    sortOrder: 3,
    lemma: "ὁδός",
    displayForm: "ὁδός",
    transliteration: "hodos",
    partOfSpeech: "noun",
    gloss: "road, way",
    morphology: { gender: "feminine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 1, correctCount: 1, incorrectCount: 3 }
  },
  ...[
    ["ἄγει", "verb", "leads", { tense: "present", voice: "active" }],
    ["βαδίζει", "verb", "walks", { tense: "present", voice: "active" }],
    ["βλέπει", "verb", "sees, looks", { tense: "present", voice: "active" }],
    ["θεραπεύει", "verb", "takes care of, tends", { tense: "present", voice: "active" }],
    ["ἕπεται", "verb", "follows", { tense: "present", voice: "middle/passive" }],
    ["ἔχει", "verb", "has", { tense: "present", voice: "active" }],
    ["καλεῖ", "verb", "calls", { tense: "present", voice: "active" }],
    ["λέγει", "verb", "says", { tense: "present", voice: "active" }],
    ["μένει", "verb", "remains, stays", { tense: "present", voice: "active" }],
    ["οἰκεῖ", "verb", "lives", { tense: "present", voice: "active" }],
    ["ποιεῖ", "verb", "does, makes", { tense: "present", voice: "active" }],
    ["φέρει", "verb", "carries", { tense: "present", voice: "active" }],
    ["ὑλακτεῖ", "verb", "barks", { tense: "present", voice: "active" }],
    ["χαίρει", "verb", "rejoices, is glad", { tense: "present", voice: "active" }],
    ["ὁ ἀγρός", "noun", "field", { gender: "masculine" }],
    ["ὁ ἀνήρ", "noun", "man, husband", { gender: "masculine" }],
    ["αἱ Ἀθῆναι", "noun", "Athens", { gender: "feminine", number: "plural" }],
    ["ὁ δεσπότης", "noun", "master", { gender: "masculine" }],
    ["τὸ δεῖπνον", "noun", "meal", { gender: "neuter" }],
    ["ἡ θύρα", "noun", "door", { gender: "feminine" }],
    ["ὁ ἵππος", "noun", "horse", { gender: "masculine" }],
    ["ὁ ἱππεύς", "noun", "cavalryman, horseman", { gender: "masculine" }],
    ["τὸ ἱππικόν", "noun", "cavalry", { gender: "neuter" }],
    ["ὁ κύων", "noun", "dog", { gender: "masculine" }],
    ["ὁ λόφος", "noun", "hill", { gender: "masculine" }],
    ["ἡ μήτηρ", "noun", "mother", { gender: "feminine" }],
    ["ὁ νεανίας", "noun", "young man", { gender: "masculine" }],
    ["ὁ οἶκος", "noun", "house", { gender: "masculine" }],
    ["ὁ πατήρ", "noun", "father", { gender: "masculine" }],
    ["ὁ παῖς", "noun", "child, boy", { gender: "masculine" }],
    ["ὁ σῖτος", "noun", "grain", { gender: "masculine" }],
    ["ὁ υἱός", "noun", "son", { gender: "masculine" }],
    ["τὸ ὕδωρ", "noun", "water", { gender: "neuter" }],
    ["ὁ Ξενοφῶν", "proper noun", "Xenophon", { gender: "masculine" }],
    ["ὁ Γρύλλος", "proper noun", "Gryllus", { gender: "masculine" }],
    ["ἡ Ἐρχία", "proper noun", "Erchia", { gender: "feminine" }],
    ["ἀγαθός", "adjective", "good", {}],
    ["Ἀθηναῖος", "adjective", "Athenian", {}],
    ["ἰσχυρός", "adjective", "strong", {}],
    ["καλός", "adjective", "beautiful, noble", {}],
    ["νέος", "adjective", "young", {}],
    ["ἐν", "other", "in", {}],
    ["ἐπί", "other", "on", {}],
    ["εἶτα", "other", "then", {}],
    ["οὐ", "other", "not", {}],
    ["περί", "other", "around", {}],
    ["πρός", "other", "toward, to", {}]
  ].map(([displayForm, partOfSpeech, gloss, morphology], index) => ({
    id: `vocab-lesson-1-${String(index + 1).padStart(3, "0")}`,
    lessonId: "lesson-1",
    sortOrder: index + 1,
    lemma: displayForm,
    displayForm,
    transliteration: "",
    partOfSpeech,
    gloss,
    morphology,
    audioUrl: null,
    review: {
      dueToday: index < 8,
      confidence: 1 + (index % 3),
      correctCount: index % 4,
      incorrectCount: (index + 2) % 5
    }
  })),
  {
    id: "vocab-didaskalos-001",
    lessonId: "lesson-4",
    sortOrder: 1,
    lemma: "διδάσκαλος",
    displayForm: "διδάσκαλος",
    transliteration: "didaskalos",
    partOfSpeech: "noun",
    gloss: "teacher",
    morphology: { gender: "masculine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 2, correctCount: 2, incorrectCount: 2 }
  },
  {
    id: "vocab-mathetes-001",
    lessonId: "lesson-4",
    sortOrder: 2,
    lemma: "μαθητής",
    displayForm: "μαθητής",
    transliteration: "mathetes",
    partOfSpeech: "noun",
    gloss: "student, learner",
    morphology: { gender: "masculine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 1, correctCount: 1, incorrectCount: 4 }
  },
  {
    id: "vocab-time-001",
    lessonId: "lesson-4",
    sortOrder: 3,
    lemma: "τιμή",
    displayForm: "τιμή",
    transliteration: "time",
    partOfSpeech: "noun",
    gloss: "honor",
    morphology: { gender: "feminine" },
    audioUrl: null,
    review: { dueToday: false, confidence: 4, correctCount: 6, incorrectCount: 1 }
  },
  {
    id: "vocab-psyche-001",
    lessonId: "lesson-4",
    sortOrder: 4,
    lemma: "ψυχή",
    displayForm: "ψυχή",
    transliteration: "psyche",
    partOfSpeech: "noun",
    gloss: "soul, life",
    morphology: { gender: "feminine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 2, correctCount: 2, incorrectCount: 3 }
  }
];

const LEGACY_LESSON_IDS = {
  introduction: "intro-1",
  "lesson-1-home": "lesson-1",
  "lesson-2-greetings": "lesson-2",
  "lesson-3-present-active": "lesson-3",
  "lesson-4-first-declension": "lesson-4",
  "lesson-5-adjectives": "lesson-5"
};

function normalizeLessonId(lessonId) {
  return LEGACY_LESSON_IDS[lessonId] || lessonId;
}

function getCompletedLessonIds(progress) {
  return (progress.completedLessons || []).map(normalizeLessonId);
}

function getPassedQuizIds(progress) {
  return (progress.passedQuizzes || []).map(normalizeLessonId);
}

function getModuleLessons(module) {
  return module.lessons
    .map((lesson) => findLesson(lesson.id))
    .filter(Boolean);
}

function getModuleProgress(module, progress) {
  if (module.id === "unit-0") {
    const overview = getUnit0Overview();
    return {
      completedCount: overview.percent === 100 ? 1 : 0,
      totalCount: 1,
      percent: overview.percent
    };
  }

  const lessons = getModuleLessons(module);
  const completedIds = getCompletedLessonIds(progress);
  const completedCount = lessons.filter((lesson) => completedIds.includes(lesson.id)).length;

  return {
    completedCount,
    totalCount: lessons.length,
    percent: lessons.length ? Math.round((completedCount / lessons.length) * 100) : 0
  };
}

function hasLessonQuizPassed(progress, lessonId) {
  const normalizedId = normalizeLessonId(lessonId);
  const completedExercises = progress.completedExercises?.[normalizedId] || [];
  return (
    getPassedQuizIds(progress).includes(normalizedId) ||
    completedExercises.includes("quiz") ||
    completedExercises.includes(`${normalizedId}-quiz`)
  );
}

function isLessonComplete(progress, lessonId) {
  return getCompletedLessonIds(progress).includes(normalizeLessonId(lessonId));
}

function isLessonUnlocked(lesson, progress) {
  if (OPEN_LESSON_ACCESS_DURING_BUILD) {
    return true;
  }

  const lessonIndex = COURSE_LESSONS.findIndex((courseLesson) => courseLesson.id === lesson.id);

  if (lesson.id === "lesson-1") {
    return true;
  }

  if (lessonIndex <= 0 || lesson.id === normalizeLessonId(progress.currentLessonId)) {
    return true;
  }

  const previousLesson = COURSE_LESSONS[lessonIndex - 1];
  return isLessonComplete(progress, previousLesson.id) || hasLessonQuizPassed(progress, previousLesson.id);
}

function getLessonActionLabel(lesson, status, progress) {
  if (lesson.id === normalizeLessonId(progress.currentLessonId)) {
    return status === "begin" ? "Start Lesson" : "Continue Lesson";
  }

  if (lesson.id === "intro-1" && status === "in-progress") {
    return "Review";
  }

  if (status === "completed") {
    return "Review";
  }

  return status === "available" ? "Start" : "";
}

function getLessonHref(lesson, progress) {
  if (lesson.id === "intro-1") {
    const unit0Overview = getUnit0Overview();
    const nextSection = unit0Overview.nextSection || getSectionById("letters");
    return `lesson-introduction.html${getUnit0SectionUrl(nextSection)}`;
  }

  if (lesson.id === normalizeLessonId(progress.currentLessonId)) {
    return getContinueUrl(progress);
  }

  return lesson.url;
}

function getPageLessonContext() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  if (currentPage !== "lesson.html" && currentPage !== "activity.html") {
    return "";
  }

  const lessonParam = new URLSearchParams(window.location.search).get("lesson");
  const lessonId = /^\d+$/.test(String(lessonParam || "")) ? `lesson-${lessonParam}` : normalizeLessonId(lessonParam);
  const lesson = findLesson(lessonId);

  if (!lesson) {
    return "";
  }

  return `${lesson.moduleLabel} · ${lesson.number} · ${lesson.title}`;
}

function getEmailPrefix(email) {
  return String(email || "")
    .split("@")[0]
    .trim() || "Student";
}

function buildPreviewProgress(student) {
  const seededUser = findUserByEmail(student.email);

  if (seededUser?.progress) {
    return seededUser.progress;
  }

  const currentLessonId = normalizeLessonId(student.currentLessonId);
  const currentIndex = COURSE_LESSONS.findIndex((lesson) => lesson.id === currentLessonId);
  const completedLessons = COURSE_LESSONS
    .slice(0, Math.max(0, currentIndex))
    .map((lesson) => lesson.id);
  const completedLessonsCount = Math.round((student.progress / 100) * COURSE_LESSONS.length);
  const xp = Math.round(student.progress * 25);
  const level = achievementTools.getLevelForXp(xp);
  const nextLevel = achievementTools.getNextLevelForXp(xp);
  const maxLevelReached = nextLevel.number === level.number && xp >= level.xpRequired;
  const gradePercent = Number.parseInt(student.averageGrade, 10);

  return {
    currentLessonId,
    currentSegmentId: "lesson-start",
    completedLessons,
    passedQuizzes: completedLessons,
    completedExercises: {},
    completedLessonsCount,
    totalLessonsCount: COURSE_LESSONS.length,
    completionPercent: student.progress,
    level: level.number,
    levelLabel: level.label,
    xp,
    nextLevelXp: maxLevelReached ? Math.max(xp, level.xpRequired) : nextLevel.xpRequired,
    nextLevelLabel: maxLevelReached ? "" : nextLevel.label,
    maxLevelReached,
    currentCourseGradePercent: Number.isNaN(gradePercent) ? null : gradePercent,
    completedLessonTestsCount: Number.isNaN(gradePercent) ? 0 : 1,
    lessonTestGrades: [],
    weeklyCompleted: Math.max(0, Math.round(student.progress / 20)),
    weeklyGoal: 5,
    recentActivity: [
      {
        icon: "📘",
        type: "book",
        title: `Current: ${student.currentLesson}`,
        when: student.lastActivity,
        xp: 30
      }
    ],
    achievements: []
  };
}

function buildStudentPreviewSession(student) {
  return {
    name: student.name,
    email: student.email,
    roles: ["student"],
    activeRole: "student",
    previewProgress: buildPreviewProgress(student),
    professorPreview: true,
    viewedStudent: {
      name: student.name,
      email: student.email
    }
  };
}

const ROLE_DASHBOARDS = {
  administrator: {
    context: "Administrator Dashboard",
    heading: "Χαῖρε, διοικητά!",
    lines: [
      "Manage GREK 110 J10.",
      "Review course structure, lessons, users, and site settings."
    ],
    nav: [
      ["🏠", "Dashboard", "index.html"],
      ["🧑‍💼", "Users & Roles", "#"],
      ["Ξ", "Introduction", "course-introduction.html"],
      ["📖", "Lessons", "lessons.html"],
      ["🗺️", "Maps", "maps.html"],
      ["📁", "Resources", "resources.html"],
      ["✉", "Feedback", "feedback.html"],
      ["✏️", "Exercises", "#"],
      ["📊", "Gradebook", "#"],
      ["🗂️", "Course Content", "#"],
      ["⚙️", "Site Settings", "#"],
      ["G", "Greek \u2192 English Vocabulary", "greek-english-vocabulary.html"],
      ["E", "English \u2192 Greek Vocabulary", "english-greek-vocabulary.html"]
    ]
  },
  professor: {
    context: "Professor Dashboard",
    heading: "Χαῖρε, διδάσκαλε!",
    lines: [
      "Track student progress, review submissions, and guide the class."
    ],
    nav: [
      ["🏠", "Dashboard", "index.html"],
      ["👥", "Students", "#"],
      ["📊", "Progress", "#"],
      ["📝", "Submissions", "#"],
      ["Ξ", "Introduction", "course-introduction.html"],
      ["📖", "Lessons", "lessons.html"],
      ["🗺️", "Maps", "maps.html"],
      ["📁", "Resources", "resources.html"],
      ["✉", "Feedback", "feedback.html"],
      ["💬", "Discussions", "#"],
      ["⚙️", "Settings", "#"],
      ["G", "Greek \u2192 English Vocabulary", "greek-english-vocabulary.html"],
      ["E", "English \u2192 Greek Vocabulary", "english-greek-vocabulary.html"]
    ]
  },
  student: {
    context: "Student Dashboard",
    heading: "Χαῖρε, μαθητά!",
    lines: [
      "Welcome back to GREK 110 J10.",
      "Keep up your excellent progress in learning",
      "Ancient Greek with Xenophon."
    ],
    nav: [
      ["🏠", "Dashboard", "index.html"],
      ["Ξ", "Introduction", "course-introduction.html"],
      ["📖", "Lessons", "lessons.html"],
      ["Αα", "Flashcards", "flashcards.html"],
      ["🗺️", "Maps", "maps.html"],
      ["📁", "Resources", "resources.html"],
      ["👤", "Profile", "profile.html"],
      ["✉", "Feedback", "feedback.html"],
      ["G", "Greek \u2192 English Vocabulary", "greek-english-vocabulary.html"],
      ["E", "English \u2192 Greek Vocabulary", "english-greek-vocabulary.html"]
    ]
  }
};

const PROFESSOR_DASHBOARD_DATA = {
  overview: [
    ["Total Students", "18"],
    ["Active This Week", "14"],
    ["Average Completion", "62%"],
    ["Average Grade", "84%"]
  ],
  grading: [
    ["Pending Submissions", "7"],
    ["Needs Review", "5"],
    ["Overdue", "2"]
  ],
  weeklyActivity: [
    ["Lessons Completed This Week", "32"],
    ["Average Time per Lesson", "18 min"],
    ["Most Active Lesson", "Lesson 4 — First Declension Nouns"]
  ],
  students: [
    {
      name: "Tom Alston",
      email: "tpalston@email.sc.edu",
      progress: 61,
      currentLessonId: "lesson-29",
      currentLesson: "Lesson 29 — Working with Purpose",
      level: "Erudite",
      levelNumber: 8,
      averageGrade: "91%",
      lastActivity: "Today",
      status: "Active"
    },
    {
      name: "Mark Beck",
      email: "BECKMA@mailbox.sc.edu",
      progress: 69,
      currentLessonId: "lesson-33",
      currentLesson: "Lesson 33 — Training the Self",
      level: "Erudite",
      levelNumber: 9,
      averageGrade: "93%",
      lastActivity: "Today",
      status: "Active"
    },
    {
      name: "John Davis",
      email: "jdavis@email.sc.edu",
      progress: 20,
      currentLessonId: "lesson-8",
      currentLesson: "Lesson 8 — In the Agora",
      level: "Apprentice",
      levelNumber: 3,
      averageGrade: "68%",
      lastActivity: "6 days ago",
      status: "Needs Attention"
    },
    {
      name: "Sarah Kim",
      email: "skim@email.sc.edu",
      progress: 35,
      currentLessonId: "lesson-16",
      currentLesson: "Lesson 16 — If They Fight",
      level: "Apprentice",
      levelNumber: 5,
      averageGrade: "78%",
      lastActivity: "3 days ago",
      status: "At Risk"
    },
    {
      name: "Alex Chen",
      email: "achen@email.sc.edu",
      progress: 45,
      currentLessonId: "lesson-21",
      currentLesson: "Lesson 21 — The Army Without Leaders",
      level: "Erudite",
      levelNumber: 6,
      averageGrade: "94%",
      lastActivity: "Yesterday",
      status: "Active"
    },
    {
      name: "Maria Lopez",
      email: "mlopez@email.sc.edu",
      progress: 41,
      currentLessonId: "lesson-19",
      currentLesson: "Lesson 19 — Those Who Stand Firm",
      level: "Erudite",
      levelNumber: 6,
      averageGrade: "82%",
      lastActivity: "2 days ago",
      status: "Active"
    },
    {
      name: "Plato Aristocles",
      email: "paristocles@email.sc.edu",
      progress: 51,
      currentLessonId: "lesson-24",
      currentLesson: "Lesson 24 — Courage Under Fire",
      level: "Erudite",
      levelNumber: 7,
      averageGrade: "95%",
      lastActivity: "Today",
      status: "Active"
    },
    {
      name: "Achilles Homer",
      email: "ahomer@email.sc.edu",
      progress: 47,
      currentLessonId: "lesson-22",
      currentLesson: "Lesson 22 — Do Not Fear!",
      level: "Erudite",
      levelNumber: 7,
      averageGrade: "89%",
      lastActivity: "Yesterday",
      status: "Active"
    },
    {
      name: "Patroclus Homer",
      email: "phomer@email.sc.edu",
      progress: 39,
      currentLessonId: "lesson-18",
      currentLesson: "Lesson 18 — The Battle Begins",
      level: "Apprentice",
      levelNumber: 5,
      averageGrade: "86%",
      lastActivity: "2 days ago",
      status: "Active"
    },
    {
      name: "Thomas Clay",
      email: "tclay@email.sc.edu",
      progress: 37,
      currentLessonId: "lesson-17",
      currentLesson: "Lesson 17 — Fear and Courage",
      level: "Apprentice",
      levelNumber: 5,
      averageGrade: "81%",
      lastActivity: "4 days ago",
      status: "At Risk"
    },
    {
      name: "John Doe",
      email: "jdoe@email.sc.edu",
      progress: 27,
      currentLessonId: "lesson-11",
      currentLesson: "Lesson 11 — The Thinking Mind",
      level: "Apprentice",
      levelNumber: 4,
      averageGrade: "79%",
      lastActivity: "3 days ago",
      status: "At Risk"
    },
    {
      name: "Susan Doe",
      email: "sdoe@email.sc.edu",
      progress: 43,
      currentLessonId: "lesson-20",
      currentLesson: "Lesson 20 — Victory Won",
      level: "Erudite",
      levelNumber: 6,
      averageGrade: "88%",
      lastActivity: "Today",
      status: "Active"
    },
    {
      name: "Mary Contrary",
      email: "mcontrary@email.sc.edu",
      progress: 16,
      currentLessonId: "lesson-6",
      currentLesson: "Lesson 6 — The Search for Knowledge",
      level: "Novice",
      levelNumber: 2,
      averageGrade: "72%",
      lastActivity: "8 days ago",
      status: "Needs Attention"
    },
    {
      name: "Alexander Great",
      email: "agreat@email.sc.edu",
      progress: 49,
      currentLessonId: "lesson-23",
      currentLesson: "Lesson 23 — So Brave That...",
      level: "Erudite",
      levelNumber: 7,
      averageGrade: "92%",
      lastActivity: "Today",
      status: "Active"
    },
    {
      name: "Diogenes Laertius",
      email: "dlaertius@email.sc.edu",
      progress: 31,
      currentLessonId: "lesson-14",
      currentLesson: "Lesson 14 — Trust in Leadership",
      level: "Apprentice",
      levelNumber: 4,
      averageGrade: "80%",
      lastActivity: "4 days ago",
      status: "At Risk"
    },
    {
      name: "Alexandros Papadopoulos",
      email: "apapadopoulos@email.sc.edu",
      progress: 33,
      currentLessonId: "lesson-15",
      currentLesson: "Lesson 15 — Hope and Expectation",
      level: "Apprentice",
      levelNumber: 4,
      averageGrade: "85%",
      lastActivity: "2 days ago",
      status: "Active"
    },
    {
      name: "Dimitrios Georgiou",
      email: "dgeorgiou@email.sc.edu",
      progress: 29,
      currentLessonId: "lesson-13",
      currentLesson: "Lesson 13 — The General Leads",
      level: "Apprentice",
      levelNumber: 4,
      averageGrade: "77%",
      lastActivity: "5 days ago",
      status: "At Risk"
    },
    {
      name: "Nikolas Ioannidis",
      email: "nioannidis@email.sc.edu",
      progress: 43,
      currentLessonId: "lesson-20",
      currentLesson: "Lesson 20 — Victory Won",
      level: "Erudite",
      levelNumber: 6,
      averageGrade: "90%",
      lastActivity: "Yesterday",
      status: "Active"
    }
  ],
  attention: [
    ["Sarah Kim", "No activity in 3 days"],
    ["John Davis", "Average grade below 70%"],
    ["Maria Lopez", "Behind current pacing by 2 lessons"]
  ],
  submissions: [
    ["Translation Drill 4", "Tom Alston", "Needs Review"],
    ["Lesson 3 Quiz", "Sarah Kim", "85%"],
    ["Parsing Exercise 5", "John Davis", "Needs Review"],
    ["Vocabulary Set 7", "Alex Chen", "Complete"]
  ],
  lessonProgress: [
    ["Introduction", "18 completed", 100],
    ["Lesson 1", "18 completed", 100],
    ["Lesson 2", "17 completed", 94],
    ["Lesson 3", "15 completed", 83],
    ["Lesson 4", "10 completed, 5 in progress, 3 not started", 56],
    ["Lesson 5", "6 completed, 7 in progress, 5 not started", 33]
  ],
  grades: [
    ["A range", "6 students", 33],
    ["B range", "8 students", 44],
    ["C range", "3 students", 17],
    ["Below C", "1 student", 6]
  ]
};

let activeProfessorDashboardData = getProfessorDashboardPlaceholder();
let professorDashboardLoadId = 0;

const SIDEBAR_STORAGE_KEY = "learn-greek-sidebar-collapsed";
const DEFAULT_PROFILE_PHOTO_URL = "assets/generic-profile.svg";

const GREEK_ALPHABET = [
  ["Α", "α", "ἄλφα", "Alpha", "a as in father or short a in top", "ἀγαθός", "good", "alpha", "agathos"],
  ["Β", "β", "βῆτα", "Beta", "b", "βίος", "life", "beta", "bios"],
  ["Γ", "γ", "γάμμα", "Gamma", "g; before γ, κ, ξ, χ it sounds like ng", "ἀγαθός", "good", "gamma", "agathos"],
  ["Δ", "δ", "δέλτα", "Delta", "d", "δῶρον", "gift", "delta", "doron"],
  ["Ε", "ε", "ἒ ψιλόν", "Epsilon", "e as in get", "ἄνεμος", "wind", "epsilon", "anemos"],
  ["Ζ", "ζ", "ζῆτα", "Zeta", "z or sd/dz by classroom convention", "τράπεζα", "table", "zeta", "trapeza"],
  ["Η", "η", "ἦτα", "Eta", "long e", "ἥλιος", "sun", "eta", "helios"],
  ["Θ", "θ", "θῆτα", "Theta", "aspirated t", "ἀγαθός", "good", "theta", "agathos"],
  ["Ι", "ι", "ἰῶτα", "Iota", "i as in machine, short or long", "βίος", "life", "iota", "bios"],
  ["Κ", "κ", "κάππα", "Kappa", "k without aspiration", "νίκη", "victory", "kappa", "nike"],
  ["Λ", "λ", "λάμβδα", "Lambda", "l", "ἥλιος", "sun", "lambda", "helios"],
  ["Μ", "μ", "μῦ", "Mu", "m", "ἄνεμος", "wind", "mu", "anemos"],
  ["Ν", "ν", "νῦ", "Nu", "n", "νίκη", "victory", "nu", "nike"],
  ["Ξ", "ξ", "ξῖ", "Xi", "ks, like x in axe", "δόξα", "opinion", "xi", "doxa"],
  ["Ο", "ο", "ὂ μικρόν", "Omicron", "short o", "βίος", "life", "omicron", "bios"],
  ["Π", "π", "πῖ", "Pi", "p without aspiration", "τράπεζα", "table", "pi", "trapeza"],
  ["Ρ", "ρ", "ῥῶ", "Rho", "trilled r; initial rho takes rough breathing", "χώρα", "land", "rho", "chora"],
  ["Σ", "σ, ς", "σίγμα", "Sigma", "s; final sigma ς ends a word", "νόσος", "illness", "sigma", "nosos"],
  ["Τ", "τ", "ταῦ", "Tau", "t without aspiration", "τιμή", "honor", "tau", "time"],
  ["Υ", "υ", "ὖ ψιλόν", "Upsilon", "u/y sound, as French tu", "φυγή", "escape", "upsilon", "phyge"],
  ["Φ", "φ", "φῖ", "Phi", "aspirated p", "φυγή", "escape", "phi", "phyge"],
  ["Χ", "χ", "χῖ", "Chi", "aspirated k", "χώρα", "land", "chi", "chora"],
  ["Ψ", "ψ", "ψῖ", "Psi", "ps, as in lips", "ψυχή", "soul", "psi", "psyche"],
  ["Ω", "ω", "ὦ μέγα", "Omega", "long o", "χώρα", "land", "omega", "chora"]
];

const ALPHABET_LETTER_AUDIO_SLUGS = new Set([
  "alpha",
  "beta",
  "gamma",
  "delta",
  "zeta",
  "eta",
  "theta",
  "iota",
  "lambda",
  "nu",
  "omicron",
  "pi",
  "rho",
  "tau",
  "chi"
]);

const ALPHABET_NAME_AUDIO_SLUGS = new Set([
  "alpha",
  "beta",
  "gamma",
  "delta",
  "epsilon",
  "zeta",
  "eta",
  "theta",
  "iota",
  "kappa",
  "lambda",
  "mu",
  "nu",
  "xi",
  "omicron",
  "pi",
  "rho",
  "sigma",
  "tau",
  "upsilon",
  "phi",
  "chi",
  "psi",
  "omega"
]);

const ALPHABET_EXAMPLE_AUDIO_SLUGS = new Set([
  "agathos",
  "bios",
  "doron",
  "anemos",
  "trapeza",
  "helios",
  "nike",
  "doxa",
  "chora",
  "nosos"
]);

// TODO: Move Unit 0 attempts and skill progress into the database progress model
// once the backend assessment tables are ready for this granularity.
// TODO: Expand these MVP question pools with larger authored banks before production use.
const UNIT0_STORAGE_KEY = "xenophon-unit0-progress-v1";

const UNIT0_DIPHTHONGS = [
  ["αι", "like ai in aisle in many classroom readings", "παιδεία", "education", "Listen for alpha + iota as one learned pair."],
  ["ει", "long close e / ei by course convention", "εἰρήνη", "peace", "Often read as a long e sound in classroom Attic."],
  ["οι", "oi as in oil", "οἶκος", "household", "The breathing or accent stands over the second vowel."],
  ["υι", "ui, a close rounded glide", "υἱός", "son", "Less common, but important to recognize."],
  ["αυ", "au, often with a clear u-glide", "αὐτός", "self", "Before some consonants, classroom traditions may shade the sound."],
  ["ευ", "eu, e + u-glide", "εὖ", "well", "Read it as a pair rather than two unrelated vowels."],
  ["ου", "long ou / oo", "οὐ", "not", "A very common diphthong; learn it early."],
  ["ηυ", "long e + u-glide", "ηὕρον", "I found", "Less common, but it follows the same pairing habit."]
];

const UNIT0_CONSONANT_GROUPS = [
  ["γγ", "ng-g", "ἄγγελος", "messenger", "Gamma before gamma has a nasal value."],
  ["γκ", "ng-k", "ἀνάγκη", "necessity", "Gamma before kappa is read nasally."],
  ["γχ", "ng-kh", "ἔλεγχος", "examination", "Gamma before chi is read nasally."],
  ["γξ", "ng-ks", "σάλπιγξ", "trumpet", "Gamma before xi is read nasally."],
  ["ξ", "ks = κ + σ", "δόξα", "opinion", "Learn xi as a compressed consonant pair."],
  ["ψ", "ps = π + σ", "ψυχή", "soul, life", "Learn psi as a compressed consonant pair."],
  ["ζ", "z / dz / sd by classroom convention", "τράπεζα", "table", "Explanations vary; recognize the letter and sound your course uses."],
  ["λλ, μμ, νν, ππ, ττ", "doubled consonants", "ἵππος", "horse", "Double consonants help with syllables and word shape."]
];

const UNIT0_ALPHABET_MATCHING_PAIRS = [
  ["alpha", "alpha", "α", "Alpha"],
  ["beta", "beta", "β", "Beta"],
  ["gamma", "gamma", "γ", "Gamma"],
  ["delta", "delta", "δ", "Delta"],
  ["epsilon", "epsilon", "ε", "Epsilon"],
  ["zeta", "zeta", "ζ", "Zeta"],
  ["eta", "eta", "η", "Eta"],
  ["theta", "theta", "θ", "Theta"],
  ["iota", "iota", "ι", "Iota"],
  ["kappa", "kappa", "κ", "Kappa"],
  ["lambda", "lambda", "λ", "Lambda"],
  ["mu", "mu", "μ", "Mu"],
  ["nu", "nu", "ν", "Nu"],
  ["xi", "xi", "ξ", "Xi"],
  ["omicron", "omicron", "ο", "Omicron"]
];

const UNIT0_SECTIONS = [
  {
    id: "letters",
    number: "0.1",
    title: "The Greek Alphabet",
    shortTitle: "Alphabet",
    description: "Begin with the letters themselves: form, name, sound, and one example word.",
    intro: "The Greek letters are στοιχεῖα, the elements out of which Greek words are built. In this lesson, begin slowly: learn each uppercase and lowercase pair, listen for its classroom Attic sound, and connect it with one example word. Pay special attention to sigma, which appears as σ inside a word and ς at the end.",
    pageType: "learn",
    reference: "alphabet",
    skills: ["alphabet.letters", "alphabet.uppercase", "alphabet.lowercase", "alphabet.audio", "alphabet.final_sigma"],
    learn: [
      ["στοιχεῖα", "The Greek letters are the elements, the building blocks of reading."],
      ["Uppercase and lowercase", "Learn the pair together: Α/α, Β/β, Γ/γ, and so on."],
      ["Audio convention", "Clickable Greek text has a dotted underline and a small speaker cue. Use it to hear letter names, sounds, and example words."],
      ["Final sigma", "Sigma has two lowercase forms: σ inside a word and ς at the end of a word."]
    ],
    practice: ["Read the table aloud.", "Click each letter and example word.", "Notice which letters are vowels and which are consonants."]
  },
  {
    id: "letters-practice",
    number: "0.2",
    title: "Alphabet Practice",
    shortTitle: "Alphabet Practice",
    description: "Practice identifying letters, matching forms, and distinguishing common look-alikes.",
    pageType: "practice",
    exerciseLabel: "Exercise 1",
    skills: ["alphabet.letters", "alphabet.uppercase", "alphabet.lowercase", "alphabet.order", "alphabet.final_sigma"],
    learn: [["Goal", "Build quick recognition before adding diphthongs and combinations."]],
    practice: ["Choose the named letter.", "Match uppercase to lowercase.", "Identify final sigma.", "Work slowly enough to notice confusable letters."],
    checkpoint: {
      passing: 8,
      total: 10,
      questions: [
        choiceQuestion("letters-alpha", "Which lowercase letter is alpha?", ["α", "λ", "δ", "ο"], "α", "Alpha is written α in lowercase.", "alphabet.lowercase", "ἄλφα"),
        choiceQuestion("letters-theta", "Which letter is theta?", ["τ", "θ", "φ", "χ"], "θ", "Theta is θ. Tau is τ; phi is φ.", "alphabet.letters", "θῆτα"),
        choiceQuestion("letters-omega", "Which letter is omega?", ["ο", "ω", "η", "υ"], "ω", "Omega is written ω and is traditionally the long o.", "alphabet.letters", "ὦ μέγα"),
        choiceQuestion("letters-eta", "Match uppercase Η to its lowercase form.", ["η", "ν", "υ", "ι"], "η", "Η is eta; Ν is nu.", "alphabet.uppercase"),
        choiceQuestion("letters-psi", "Match uppercase Ψ to its lowercase form.", ["ψ", "υ", "φ", "χ"], "ψ", "Ψ pairs with ψ. Upsilon is υ.", "alphabet.uppercase"),
        choiceQuestion("letters-final-sigma", "Which form is final sigma?", ["σ", "ς", "ζ", "ξ"], "ς", "Final sigma is ς, used at the end of a word.", "alphabet.final_sigma"),
        choiceQuestion("letters-order", "Which sequence is in alphabetic order?", ["α β γ δ", "α γ β δ", "β α γ δ"], "α β γ δ", "The alphabet begins α, β, γ, δ.", "alphabet.order"),
        choiceQuestion("letters-nu-upsilon", "Which pair contrasts nu and upsilon?", ["ν / υ", "ο / ω", "ε / η", "ξ / ζ"], "ν / υ", "Nu is ν; upsilon is υ.", "alphabet.letters"),
        inputQuestion("letters-type-beta", "Type lowercase beta.", "β", "Beta is written β.", "alphabet.lowercase"),
        inputQuestion("letters-type-delta", "Type uppercase delta.", "Δ", "Uppercase delta is Δ.", "alphabet.uppercase")
      ]
    }
  },
  {
    id: "letters-matching",
    number: "0.3",
    title: "Alphabet Matching",
    shortTitle: "Matching",
    description: "Match 15 scrambled letter names to their Greek letter forms.",
    pageType: "matching",
    exerciseLabel: "Exercise 2",
    skills: ["alphabet.letters", "alphabet.lowercase"],
    learn: [["Goal", "Strengthen quick recognition by matching each letter name to its Greek form."]],
    practice: [
      "Click one tile, then click its matching tile.",
      "Matched pairs disappear from the workspace.",
      "Clear the board to continue to diphthongs."
    ],
    matchingPairs: UNIT0_ALPHABET_MATCHING_PAIRS
  },
  {
    id: "diphthongs",
    number: "0.4",
    title: "Diphthongs",
    shortTitle: "Diphthongs",
    description: "Learn the common vowel combinations and their Attic classroom sounds.",
    intro: "A diphthong is a pair of vowels read together as one sound unit. This lesson introduces the common Attic classroom values for αι, ει, οι, υι, αυ, ευ, ου, and ηυ, with examples you can hear and read aloud.",
    pageType: "learn",
    reference: "diphthongs",
    skills: ["diphthongs.recognition", "diphthongs.audio"],
    learn: [
      ["What is a diphthong?", "A diphthong is a pair of vowels read together as one sound unit."],
      ["Common pairs", "The common pairs are αι, ει, οι, υι, αυ, ευ, ου, ηυ."],
      ["Marks on diphthongs", "If a breathing or accent belongs to an initial diphthong, it is written over the second vowel: οἶκος, αἰτία."]
    ],
    practice: ["Read each pair aloud.", "Click the examples to hear them.", "Look for the pair inside the example word."]
  },
  {
    id: "diphthongs-practice",
    number: "0.5",
    title: "Diphthong Practice",
    shortTitle: "Diphthong Practice",
    description: "Practice finding, hearing, and typing diphthongs in short Greek forms.",
    pageType: "practice",
    exerciseLabel: "Exercise 1",
    skills: ["diphthongs.recognition", "diphthongs.typing"],
    learn: [["Goal", "See the vowel pair before you try to read the whole word."]],
    practice: ["Find the diphthong in a word.", "Choose the correct pair.", "Type the pair you see or hear."],
    checkpoint: {
      passing: 7,
      total: 8,
      questions: [
        choiceQuestion("diph-oikos", "Click the diphthong in οἶκος.", ["οι", "ο", "κος", "ι"], "οι", "In οἶκος, οι is the diphthong.", "diphthongs.recognition", "οἶκος"),
        choiceQuestion("diph-paideia", "Which diphthong appears in παιδεία?", ["αι", "ει", "οι", "ου"], "αι", "παιδεία contains αι.", "diphthongs.recognition", "παιδεία"),
        choiceQuestion("diph-ou", "Which pair is commonly read as long ou / oo?", ["ου", "αυ", "ει", "υι"], "ου", "ου is a common diphthong, often read as long ou / oo.", "diphthongs.recognition", "οὐ"),
        inputQuestion("diph-type-ai", "Type alpha + iota as a diphthong.", "αι", "αι is alpha plus iota.", "diphthongs.typing"),
        inputQuestion("diph-type-oi", "Type the diphthong in οἶκος without accents or breathing.", "οι", "The vowel pair is οι.", "diphthongs.typing"),
        choiceQuestion("diph-mark", "In an initial diphthong, where does the breathing stand?", ["over the second vowel", "over the first vowel", "after the word"], "over the second vowel", "In οἶκος and αἰτία, the mark is over the second vowel.", "diphthongs.recognition"),
        choiceQuestion("diph-eu", "Which form contains ευ?", ["εὖ", "οὐ", "αἰτία", "οἶκος"], "εὖ", "εὖ contains ευ.", "diphthongs.recognition", "εὖ"),
        choiceQuestion("diph-single", "Which is a single vowel, not a diphthong?", ["η", "αι", "ου", "ει"], "η", "η is a single vowel.", "diphthongs.recognition")
      ]
    }
  },
  {
    id: "consonants",
    number: "0.6",
    title: "Double Consonants and Combinations",
    shortTitle: "Consonants",
    description: "Learn consonant groups whose sound is not obvious from the first letter alone.",
    intro: "Some consonant groups need to be recognized as units before the whole word will sound natural. This lesson focuses on gamma groups, ξ and ψ, ζ, and doubled consonants, with short examples to anchor each sound.",
    pageType: "learn",
    reference: "consonants",
    skills: ["consonants.gamma_groups", "consonants.double_consonants", "consonants.xi_psi"],
    learn: [
      ["Gamma groups", "γ before γ, κ, χ, or ξ has a nasal ng sound: γγ, γκ, γχ, γξ."],
      ["Xi and psi", "ξ is best learned as κ + σ; ψ is best learned as π + σ."],
      ["Double consonants", "λλ, μμ, νν, ππ, ττ and similar groups help you see syllables and word shape."],
      ["Zeta", "ζ is taught differently in different classrooms; this course marks the variation without making it a barrier."]
    ],
    practice: ["Read the group.", "Read the example word.", "Explain the combination in plain language."]
  },
  {
    id: "consonants-practice",
    number: "0.7",
    title: "Consonant Practice",
    shortTitle: "Consonant Practice",
    description: "Practice reading and explaining consonant combinations.",
    pageType: "practice",
    exerciseLabel: "Exercise 1",
    skills: ["consonants.gamma_groups", "consonants.double_consonants", "consonants.xi_psi"],
    learn: [["Goal", "Recognize the group before trying to pronounce the whole word."]],
    practice: ["Find the consonant group.", "Choose the correct explanation.", "Build ξ or ψ from components."],
    checkpoint: {
      passing: 7,
      total: 8,
      questions: [
        choiceQuestion("cons-xi", "ξ is best understood as which consonant pair?", ["κ + σ", "π + σ", "τ + θ"], "κ + σ", "ξ is best learned as κ + σ.", "consonants.xi_psi", "ξ"),
        choiceQuestion("cons-psi", "ψ is best understood as which consonant pair?", ["π + σ", "κ + σ", "β + δ"], "π + σ", "ψ is best learned as π + σ.", "consonants.xi_psi", "ψ"),
        choiceQuestion("cons-gamma", "In ἄγγελος, what group do you see?", ["γγ", "γκ", "γχ", "ξ"], "γγ", "ἄγγελος contains γγ, a gamma group.", "consonants.gamma_groups", "ἄγγελος"),
        choiceQuestion("cons-ng", "γ before γ, κ, χ, or ξ is read with what value?", ["ng", "ps", "plain s", "silent"], "ng", "Gamma has a nasal ng value before these consonants.", "consonants.gamma_groups"),
        choiceQuestion("cons-double", "Which pair is a double consonant?", ["λλ", "αι", "ου", "ει"], "λλ", "λλ is a doubled lambda.", "consonants.double_consonants"),
        choiceQuestion("cons-hippos", "Which word has a double consonant?", ["ἵππος", "λόγος", "τιμή", "βίος"], "ἵππος", "ἵππος contains ππ.", "consonants.double_consonants", "ἵππος"),
        inputQuestion("cons-build-xi", "Type the component pair represented by ξ, without spaces.", "κσ", "ξ represents κ + σ.", "consonants.xi_psi"),
        inputQuestion("cons-build-psi", "Type the component pair represented by ψ, without spaces.", "πσ", "ψ represents π + σ.", "consonants.xi_psi")
      ]
    }
  }
];

const UNIT0_SECTION_ALIASES = {
  "intro-part-1": "letters",
  "intro-part-2": "letters"
};

const loginForm = document.querySelector("[data-login-form]");
const loginEmailInput = document.querySelector("[data-login-email]");
const loginPasswordInput = document.querySelector("[data-login-password]");
const loginStatusEl = document.querySelector("[data-login-status]");
const loginFormPanel = document.querySelector("[data-login-form-panel]");
const quickDevLoginButton = document.querySelector("[data-quick-dev-login]");
const registerForm = document.querySelector("[data-register-form]");
const registerFirstNameInput = document.querySelector("[data-register-first-name]");
const registerLastNameInput = document.querySelector("[data-register-last-name]");
const registerEmailInput = document.querySelector("[data-register-email]");
const registerPasswordInput = document.querySelector("[data-register-password]");
const registerStatusEl = document.querySelector("[data-register-status]");
const authTabs = document.querySelectorAll("[data-auth-tab]");
const authOpenButtons = document.querySelectorAll("[data-auth-open]");
const rolePanel = document.querySelector("[data-role-panel]");
const roleOptionsEl = document.querySelector("[data-role-options]");
const roleTitleEl = document.querySelector("[data-role-title]");
const loginBackButton = document.querySelector("[data-login-back]");
const logoutButton = document.querySelector("[data-logout]");
const appShellEl = document.querySelector(".app");
const mainEl = document.querySelector(".main");
const sidebarToggleButton = document.querySelector("[data-sidebar-toggle]");
const dashboardContextEl = document.querySelector("[data-dashboard-context]");
const dashboardHeadingEl = document.querySelector("[data-dashboard-heading]");
const sidebarNav = document.querySelector(".nav");
const heroMessageEl = document.querySelector("[data-hero-message]");
const progressTracker = document.querySelector("[data-progress-tracker]");
const profileAvatarEl = document.querySelector("[data-profile-avatar]");
const profileNameEl = document.querySelector("[data-profile-name]");
const profileSummaryEl = document.querySelector("[data-profile-summary]");
const profileLinkEl = document.querySelector("[data-profile-link]");
const alphabetTableEl = document.querySelector("[data-alphabet-table]");
const unit0AppEl = document.querySelector("[data-unit0-app]");
const unit0OverviewEl = document.querySelector("[data-unit0-overview]");
const unit0SectionViewEl = document.querySelector("[data-unit0-section-view]");
const unit0SectionCardsEl = document.querySelector("[data-unit0-section-cards]");
const unit0ProgressStripEl = document.querySelector("[data-unit0-progress-strip]");
const unit0OverallProgressEl = document.querySelector("[data-unit0-overall-progress]");
const progressRingEl = document.querySelector("[data-progress-ring]");
const progressHeadingEl = document.querySelector("[data-progress-heading]");
const progressSummaryEl = document.querySelector("[data-progress-summary]");
const currentLevelEl = document.querySelector("[data-current-level]");
const currentLevelLabelEl = document.querySelector("[data-current-level-label]");
const xpSummaryEl = document.querySelector("[data-xp-summary]");
const xpBarEl = document.querySelector("[data-xp-bar]");
const nextLevelEl = document.querySelector("[data-next-level]");
const courseGradeEl = document.querySelector("[data-course-grade]");
const courseGradeNoteEl = document.querySelector("[data-course-grade-note]");
const viewGradesLinkEl = document.querySelector("[data-view-grades-link]");
const startSummaryTitleEl = document.querySelector("[data-start-summary-title]");
const startSummaryLocationEl = document.querySelector("[data-start-summary-location]");
const startLessonsEl = document.querySelector("[data-start-lessons]");
const startVocabularyEl = document.querySelector("[data-start-vocabulary]");
const startPracticeEl = document.querySelector("[data-start-practice]");
const startNextStepEl = document.querySelector("[data-start-next-step]");
const startCourseLinkEl = document.querySelector("[data-start-course-link]");
const learningPathEl = document.querySelector("[data-learning-path]");
const activityListEl = document.querySelector("[data-activity-list]");
const achievementListEl = document.querySelector("[data-achievement-list]");
const lessonsListEl = document.querySelector("[data-lessons-list]");
const lessonPageTitleEl = document.querySelector("[data-lesson-page-title]");
const lessonPageSummaryEl = document.querySelector("[data-lesson-page-summary]");
const liveCourseTitleEl = document.querySelector("[data-course-title-live]");
const feedbackFormEl = document.querySelector("[data-feedback-form]");
const feedbackStatusEl = document.querySelector("[data-feedback-status]");
const courseIntroGreekInputEl = document.querySelector("[data-course-intro-greek-input]");
const courseIntroCheckButton = document.querySelector("[data-course-intro-check]");
const courseIntroFeedbackEl = document.querySelector("[data-course-intro-feedback]");
const studentDashboardSections = document.querySelectorAll("[data-student-dashboard]");
const professorDashboardEl = document.querySelector("[data-professor-dashboard]");
let mobilePracticeEl = document.querySelector("[data-mobile-practice]");

function choiceQuestion(id, prompt, choices, answer, explanation, skillId, audioText = "") {
  return { id, type: "choice", prompt, choices, answer, explanation, skillId, audioText };
}

function inputQuestion(id, prompt, answer, explanation, skillId, audioText = "") {
  return { id, type: "input", prompt, answer, explanation, skillId, audioText };
}

function repeatQuestions(questions, total) {
  return Array.from({ length: total }, (_, index) => {
    const source = questions[index % questions.length];
    return {
      ...source,
      id: `${source.id}-${index + 1}`
    };
  });
}

function shuffleItems(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeGreekInput(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .normalize("NFC");
}

function normalizeForLettersOnly(value) {
  return normalizeGreekInput(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f\u1AB0-\u1AFF]/g, "")
    .normalize("NFC");
}

function readUnit0Progress() {
  const base = {
    sections: {},
    skills: {},
    updatedAt: null
  };

  try {
    const stored = JSON.parse(window.localStorage.getItem(UNIT0_STORAGE_KEY) || "{}");
    return {
      ...base,
      ...stored,
      sections: { ...base.sections, ...(stored.sections || {}) },
      skills: { ...base.skills, ...(stored.skills || {}) }
    };
  } catch (error) {
    return base;
  }
}

function writeUnit0Progress(progress) {
  const nextProgress = {
    ...progress,
    updatedAt: new Date().toISOString()
  };

  try {
    window.localStorage.setItem(UNIT0_STORAGE_KEY, JSON.stringify(nextProgress));
  } catch (error) {
    // Progress remains usable during the current page view even if storage is blocked.
  }

  return nextProgress;
}

function getUnit0SectionRecord(progress, sectionId) {
  return progress.sections?.[sectionId] || {
    attempts: 0,
    score: 0,
    total: 0,
    passed: false,
    viewed: false,
    missedSkills: []
  };
}

function getUnit0SectionStatus(progress, section) {
  const record = getUnit0SectionRecord(progress, section.id);

  if (record.passed) {
    return "Mastered";
  }

  if (!section.checkpoint && section.pageType === "learn" && record.viewed) {
    return "Mastered";
  }

  if (record.attempts > 0) {
    return "Practice Needed";
  }

  if (record.viewed) {
    return "In Progress";
  }

  return "Not Started";
}

function getUnit0CardAction(status, section) {
  if (section.finalCheck && status === "Not Started") {
    return "Begin Check";
  }

  if (status === "Mastered") {
    return "Review";
  }

  if (status === "In Progress" || status === "Practice Needed") {
    return "Continue";
  }

  return "Start";
}

function getUnit0Overview(progress = readUnit0Progress()) {
  const mastered = UNIT0_SECTIONS.filter((section) => getUnit0SectionStatus(progress, section) === "Mastered");
  const attempted = UNIT0_SECTIONS.filter((section) => {
    const record = getUnit0SectionRecord(progress, section.id);
    return record.viewed || record.attempts > 0 || record.passed;
  });
  const needsPractice = UNIT0_SECTIONS.filter((section) => getUnit0SectionStatus(progress, section) === "Practice Needed");
  const nextSection = UNIT0_SECTIONS.find((section) => getUnit0SectionStatus(progress, section) !== "Mastered") || UNIT0_SECTIONS.at(-1);
  const percent = Math.round((mastered.length / UNIT0_SECTIONS.length) * 100);

  return { mastered, attempted, needsPractice, nextSection, percent };
}

function markUnit0SectionViewed(sectionId) {
  const progress = readUnit0Progress();
  const current = getUnit0SectionRecord(progress, sectionId);

  progress.sections[sectionId] = {
    ...current,
    viewed: true
  };

  writeUnit0Progress(progress);
}

function recordUnit0Attempt(section, result) {
  const progress = readUnit0Progress();
  const current = getUnit0SectionRecord(progress, section.id);
  const missedSkills = Object.entries(result.skillResults)
    .filter(([, value]) => value.incorrect > 0)
    .map(([skillId]) => skillId);

  progress.sections[section.id] = {
    ...current,
    attempts: current.attempts + 1,
    score: result.score,
    total: result.total,
    passed: result.passed,
    viewed: true,
    missedSkills
  };

  Object.entries(result.skillResults).forEach(([skillId, value]) => {
    const previous = progress.skills[skillId] || { attempts: 0, correct: 0, incorrect: 0, status: "Not Started" };
    const attempts = previous.attempts + value.correct + value.incorrect;
    const correct = previous.correct + value.correct;
    const incorrect = previous.incorrect + value.incorrect;
    const recentScore = value.correct + value.incorrect
      ? Math.round((value.correct / (value.correct + value.incorrect)) * 100)
      : 0;

    progress.skills[skillId] = {
      attempts,
      correct,
      incorrect,
      recentScore,
      status: recentScore >= 85 ? "Mastered" : "Practice Needed"
    };
  });

  return writeUnit0Progress(progress);
}

function getUnit0HashSectionId() {
  const rawHash = window.location.hash.replace(/^#/, "");

  if (!rawHash) {
    return "letters";
  }

  if (UNIT0_SECTION_ALIASES[rawHash]) {
    return UNIT0_SECTION_ALIASES[rawHash];
  }

  if (rawHash.startsWith("unit0-")) {
    return rawHash.replace("unit0-", "");
  }

  return UNIT0_SECTIONS.some((section) => section.id === rawHash) ? rawHash : "letters";
}

function getUnit0SectionUrl(section) {
  return `#unit0-${section.id}`;
}

function getSectionById(sectionId) {
  return UNIT0_SECTIONS.find((section) => section.id === sectionId);
}

function renderUnit0ProgressStrip(progress = readUnit0Progress(), activeSectionId = "") {
  if (!unit0ProgressStripEl) {
    return;
  }

  unit0ProgressStripEl.innerHTML = "";
  unit0ProgressStripEl.hidden = true;
}

function renderUnit0OverallProgress(progress = readUnit0Progress()) {
  if (!unit0OverallProgressEl) {
    return;
  }

  const overview = getUnit0Overview(progress);
  unit0OverallProgressEl.innerHTML = `
    <strong>${overview.percent}%</strong>
    <span><i style="width:${overview.percent}%"></i></span>
  `;
  unit0OverallProgressEl.setAttribute("aria-label", `Unit 0 progress: ${overview.percent}% mastered`);
}

function renderUnit0Cards(progress = readUnit0Progress()) {
  if (!unit0SectionCardsEl) {
    return;
  }

  unit0SectionCardsEl.innerHTML = UNIT0_SECTIONS.map((section) => {
    const status = getUnit0SectionStatus(progress, section);
    const record = getUnit0SectionRecord(progress, section.id);
    const action = getUnit0CardAction(status, section);
    const scoreText = record.attempts > 0 ? `${record.score}/${record.total} most recent` : "No checkpoint attempt yet";

    return `
      <article class="unit0-card ${statusClass(status)}">
        <div class="unit0-card-topline">
          <span>${section.number}</span>
          <strong class="unit0-status ${statusClass(status)}">${status}</strong>
        </div>
        <h4>${section.title}</h4>
        <p>${section.description}</p>
        <div class="unit0-card-meta">${scoreText}</div>
        <a class="continue-btn" href="${getUnit0SectionUrl(section)}">${action}</a>
      </article>
    `;
  }).join("");
}

function renderUnit0Landing() {
  if (!unit0AppEl) {
    return;
  }

  renderUnit0Section("letters");
}

function renderLearnList(section) {
  return `
    <div class="unit0-learn-grid">
      ${section.learn.map(([title, copy]) => `
        <article>
          <h4>${title}</h4>
          <p>${copy}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderPracticeList(section) {
  return `
    <ul class="unit0-practice-list">
      ${section.practice.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderUnit0Intro(section) {
  if (!section.intro) {
    return "";
  }

  return `
    <section class="unit0-intro-panel">
      <p>${section.intro}</p>
    </section>
  `;
}

function renderUnit0AlphabetReference() {
  return `
    <section class="unit0-reference-panel" aria-label="Greek letters, sounds, and examples">
      <p class="alphabet-audio-note">
        <span class="audio-cue" aria-hidden="true">▶</span>
        Click a letter, name, sound, or example word to hear it. Audio-enabled text keeps the dotted underline.
      </p>
      <div class="alphabet-table-wrap">
        <table class="alphabet-table">
          <thead>
            <tr>
              <th>Letter</th>
              <th>Name</th>
              <th>Sound</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            ${GREEK_ALPHABET.map(([upper, lower, greekName, englishName, sound, example, gloss, slug, exampleSlug]) => {
              const letterAudioSrc = ALPHABET_LETTER_AUDIO_SLUGS.has(slug) ? `assets/audio/alphabet/${slug}-letter.mp3` : "";
              const nameAudioSrc = ALPHABET_NAME_AUDIO_SLUGS.has(slug) ? `assets/audio/alphabet/${slug}-name.mp3` : "";
              const exampleAudioSrc = ALPHABET_EXAMPLE_AUDIO_SLUGS.has(exampleSlug) ? `assets/audio/alphabet/${exampleSlug}.mp3` : "";

              return `
                <tr>
                  <td>
                    <button class="audio-text audio-text-letter letter-pair greek-text" type="button" ${renderAudioAttributes(nameAudioSrc, greekName)} aria-label="Hear ${englishName}, ${upper} ${lower}" lang="grc">
                      <strong>${upper}</strong><span>${lower}</span>
                    </button>
                  </td>
                  <td>
                    <span class="alphabet-name-stack">
                      <button class="audio-text audio-text-name greek-text" type="button" ${renderAudioAttributes(nameAudioSrc, greekName)} aria-label="Hear the Greek letter name ${greekName}" lang="grc">${greekName}</button>
                      <button class="audio-text audio-text-english-name" type="button" ${renderAudioAttributes(nameAudioSrc, englishName)} aria-label="Hear the English letter name ${englishName}">${englishName}</button>
                    </span>
                  </td>
                  <td>
                    <button class="audio-text audio-text-sound" type="button" ${renderAudioAttributes(letterAudioSrc, lower)} aria-label="Hear the sound for ${englishName}">${sound}</button>
                  </td>
                  <td>
                    <button class="audio-text greek-example greek-text" type="button" ${renderAudioAttributes(exampleAudioSrc, example)} aria-label="Hear ${example}, ${gloss}" lang="grc">${example}</button>
                    <span class="muted">(${gloss})</span>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderUnit0DiphthongReference() {
  return `
    <section class="unit0-reference-panel" aria-labelledby="unit0-diphthong-reference-title">
      <div class="unit0-reference-heading">
        <div>
          <p class="eyebrow">Reference</p>
          <h4 id="unit0-diphthong-reference-title">Attic Diphthong Sounds</h4>
        </div>
      </div>
      <div class="unit0-reference-table-wrap">
        <table class="unit0-reference-table">
          <thead>
            <tr>
              <th>Diphthong</th>
              <th>Course Sound</th>
              <th>Example</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            ${UNIT0_DIPHTHONGS.map(([pair, sound, example, gloss, note]) => `
              <tr>
                <td><button class="audio-text greek-text unit0-reference-token" type="button" ${renderAudioAttributes("", pair)} lang="grc">${pair}</button></td>
                <td>${sound}</td>
                <td><button class="audio-text greek-text" type="button" ${renderAudioAttributes("", example)} lang="grc">${example}</button> <span class="muted">(${gloss})</span></td>
                <td>${note}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderUnit0ConsonantReference() {
  return `
    <section class="unit0-reference-panel" aria-labelledby="unit0-consonant-reference-title">
      <div class="unit0-reference-heading">
        <div>
          <p class="eyebrow">Reference</p>
          <h4 id="unit0-consonant-reference-title">Double Consonants and Combinations</h4>
        </div>
      </div>
      <div class="unit0-reference-table-wrap">
        <table class="unit0-reference-table">
          <thead>
            <tr>
              <th>Group</th>
              <th>Sound / Explanation</th>
              <th>Example</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            ${UNIT0_CONSONANT_GROUPS.map(([group, sound, example, gloss, note]) => `
              <tr>
                <td><button class="audio-text greek-text unit0-reference-token" type="button" ${renderAudioAttributes("", group)} lang="grc">${group}</button></td>
                <td>${sound}</td>
                <td><button class="audio-text greek-text" type="button" ${renderAudioAttributes("", example)} lang="grc">${example}</button> <span class="muted">(${gloss})</span></td>
                <td>${note}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderUnit0Reference(section) {
  if (section.reference === "alphabet") {
    return renderUnit0AlphabetReference();
  }

  if (section.reference === "diphthongs") {
    return renderUnit0DiphthongReference();
  }

  if (section.reference === "consonants") {
    return renderUnit0ConsonantReference();
  }

  return "";
}

function renderUnit0AudioButton(question) {
  if (!question.audioText) {
    return "";
  }

  return `
    <button class="audio-button unit0-audio-button" type="button" ${renderAudioAttributes("", escapeHtml(question.audioText))} aria-label="Hear ${escapeHtml(question.audioText)}">
      ▶
    </button>
  `;
}

function renderUnit0Question(question, index) {
  const prompt = escapeHtml(question.prompt);
  const audioButton = renderUnit0AudioButton(question);

  if (question.type === "input") {
    return `
      <article class="unit0-question" data-unit0-question data-question-id="${question.id}" data-question-type="input" data-answer="${escapeHtml(question.answer)}" data-skill-id="${question.skillId}">
        <div class="unit0-question-heading">
          <span>${index + 1}</span>
          ${audioButton}
        </div>
        <label for="unit0-answer-${question.id}">${prompt}</label>
        <div class="unit0-input-row">
          <input id="unit0-answer-${question.id}" class="text-field greek-text unit0-answer-field greek-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-unit0-input lang="grc">
          <button class="secondary-button" type="button" data-greek-keyboard-trigger data-greek-keyboard-target="unit0-answer-${question.id}" aria-label="Show Ancient Greek keyboard for this answer">Show Keyboard</button>
          <button class="secondary-button" type="button" data-unit0-check-input>Check Answer</button>
        </div>
        <p class="exercise-feedback" aria-live="polite"></p>
      </article>
    `;
  }

  return `
    <article class="unit0-question" data-unit0-question data-question-id="${question.id}" data-question-type="choice" data-answer="${escapeHtml(question.answer)}" data-skill-id="${question.skillId}">
      <div class="unit0-question-heading">
        <span>${index + 1}</span>
        ${audioButton}
      </div>
      <p>${prompt}</p>
      <div class="choice-row" role="group" aria-label="${prompt}">
        ${question.choices.map((choice) => `
          <button type="button" data-unit0-choice="${escapeHtml(choice)}" aria-pressed="false">${escapeHtml(choice)}</button>
        `).join("")}
      </div>
      <p class="exercise-feedback" aria-live="polite"></p>
    </article>
  `;
}

function renderUnit0MatchingBoard(section) {
  if (!section.matchingPairs?.length) {
    return "";
  }

  const tiles = shuffleItems(section.matchingPairs.flatMap(([pairId, name, letter, label]) => [
    { pairId, value: name, label: `${label} letter name`, side: "name", className: "" },
    { pairId, value: letter, label: `${label} Greek letter`, side: "letter", className: "greek-text" }
  ]));

  return `
    <section class="unit0-matching-panel" aria-labelledby="unit0-matching-title" data-unit0-matching>
      <div class="unit0-checkpoint-heading">
        <div>
          <p class="eyebrow">${section.exerciseLabel || "Exercise"}</p>
          <h4 id="unit0-matching-title">Match all ${section.matchingPairs.length} pairs</h4>
        </div>
        <button class="secondary-button" type="button" data-unit0-practice-again>Shuffle Again</button>
      </div>
      <p class="unit0-matching-instructions">
        Click a letter name and its Greek letter. When two tiles match, they disappear.
      </p>
      <div class="unit0-matching-workspace" data-unit0-matching-workspace>
        ${tiles.map((tile, index) => `
          <button
            class="unit0-match-tile ${tile.className}"
            type="button"
            data-unit0-match-tile
            data-pair-id="${escapeHtml(tile.pairId)}"
            data-tile-side="${escapeHtml(tile.side)}"
            aria-label="${escapeHtml(tile.label)}"
          >
            <span>${escapeHtml(tile.value)}</span>
          </button>
        `).join("")}
      </div>
      <p class="unit0-result" data-unit0-matching-feedback aria-live="polite">
        ${section.matchingPairs.length} pairs remaining.
      </p>
      <div class="unit0-complete-prompt" data-unit0-complete-prompt hidden>
        <strong>All pairs matched.</strong>
        <span>Continue to the next section or quit to the dashboard.</span>
        <div>
          <a class="primary-button" href="${getUnit0SectionUrl(UNIT0_SECTIONS[UNIT0_SECTIONS.findIndex((candidate) => candidate.id === section.id) + 1] || section)}">Continue</a>
          <a class="secondary-button" href="index.html">Quit</a>
        </div>
      </div>
    </section>
  `;
}

function renderUnit0Nav(section, passed = false) {
  const index = UNIT0_SECTIONS.findIndex((candidate) => candidate.id === section.id);
  const previous = UNIT0_SECTIONS[index - 1];
  const next = UNIT0_SECTIONS[index + 1];

  return `
    <nav class="unit0-section-nav" aria-label="Unit 0 section navigation">
      ${previous
        ? `<a class="secondary-button" href="${getUnit0SectionUrl(previous)}">Previous: ${previous.shortTitle}</a>`
        : `<span class="secondary-button unit0-nav-disabled" aria-disabled="true">Previous</span>`}
      <a class="secondary-button" href="index.html">Dashboard</a>
      ${section.pageType === "practice" ? `<button class="secondary-button" type="button" data-unit0-practice-again>Practice Again</button>` : ""}
      ${next
        ? `<a class="${passed ? "primary-button" : "secondary-button"}" href="${getUnit0SectionUrl(next)}">Next: ${next.shortTitle}</a>`
        : `<a class="${passed ? "primary-button" : "secondary-button"}" href="lesson.html?lesson=1&page=1">Continue to Lesson 1</a>`}
    </nav>
  `;
}

function renderUnit0ReviewRecommendations(section, record) {
  if (!section.finalCheck || !record.missedSkills?.length) {
    return "";
  }

  const targets = UNIT0_SECTIONS.filter((candidate) =>
    candidate.skills.some((skillId) => record.missedSkills.includes(skillId))
  );
  const uniqueTargets = [...new Map(targets.map((target) => [target.id, target])).values()].slice(0, 4);

  if (!uniqueTargets.length) {
    return "";
  }

  return `
    <div class="unit0-review-actions">
      ${uniqueTargets.map((target) => `<a class="secondary-button" href="${getUnit0SectionUrl(target)}">Review ${target.shortTitle}</a>`).join("")}
      <button class="secondary-button" type="button" data-unit0-practice-again>Practice Missed Items</button>
      <button class="secondary-button" type="button" data-unit0-retake>Retake Check</button>
      <a class="primary-button" href="lesson.html?lesson=1&page=1">Continue to Lesson 1</a>
    </div>
  `;
}

function renderUnit0Section(sectionId) {
  if (!unit0AppEl || !unit0SectionViewEl || !unit0OverviewEl) {
    return;
  }

  const section = getSectionById(sectionId);
  if (!section) {
    renderUnit0Landing();
    return;
  }

  markUnit0SectionViewed(section.id);
  const progress = readUnit0Progress();
  const record = getUnit0SectionRecord(progress, section.id);
  const status = getUnit0SectionStatus(progress, section);
  const questions = section.checkpoint?.questions.slice(0, section.checkpoint.total) || [];
  const resultMessage = record.attempts
    ? record.passed
      ? `Passed: ${record.score}/${record.total}. Continue when ready.`
      : `Practice needed: ${record.score}/${record.total}. Review the feedback, then try again.`
    : "";
  const showSectionHeading = !["letters", "letters-matching"].includes(section.id);

  unit0OverviewEl.hidden = true;
  unit0SectionViewEl.hidden = false;
  renderUnit0ProgressStrip(progress, section.id);

  unit0SectionViewEl.innerHTML = `
    ${showSectionHeading ? `
      <div class="unit0-section-heading">
        <div>
          <p class="eyebrow">${section.number}</p>
          <h3>${section.title}</h3>
          <p>${section.description}</p>
        </div>
        <strong class="unit0-status ${statusClass(status)}">${status}</strong>
      </div>
    ` : ""}

    ${section.pageType === "learn" ? renderUnit0Intro(section) : ""}

    ${renderUnit0Reference(section)}

    ${section.pageType === "matching" ? renderUnit0MatchingBoard(section) : ""}

    ${section.checkpoint ? `
      <section class="unit0-checkpoint" aria-labelledby="unit0-checkpoint-title">
        <div class="unit0-checkpoint-heading">
          <div>
            <p class="eyebrow">${section.exerciseLabel || "Exercise"}</p>
            <h4 id="unit0-checkpoint-title">${section.checkpoint.total} questions · passing ${section.checkpoint.passing}/${section.checkpoint.total}</h4>
          </div>
          <button class="secondary-button" type="button" data-unit0-practice-again>Practice Again</button>
        </div>
        <div class="unit0-question-list">
          ${questions.map(renderUnit0Question).join("")}
        </div>
        <div class="unit0-submit-row">
          <button class="primary-button" type="button" data-unit0-submit>Score Practice</button>
          <p class="unit0-result" data-unit0-result aria-live="polite">${resultMessage}</p>
        </div>
        <div data-unit0-review-recommendations>${renderUnit0ReviewRecommendations(section, record)}</div>
      </section>
    ` : ""}

    ${renderUnit0Nav(section, record.passed)}
  `;

  bindUnit0SectionControls(unit0SectionViewEl, section);
  bindLessonAudio(unit0SectionViewEl);
  applyGreekTextStyling(unit0SectionViewEl);
}

function getUnit0AnswerValue(questionEl) {
  if (questionEl.dataset.questionType === "input") {
    return questionEl.querySelector("[data-unit0-input]")?.value || "";
  }

  return questionEl.querySelector("[data-unit0-choice].is-selected")?.dataset.unit0Choice || "";
}

function getTypingFeedback(expected, actual, fallback) {
  const expectedNfc = normalizeGreekInput(expected);
  const actualRaw = String(actual || "");
  const actualNfc = normalizeGreekInput(actualRaw);

  if (actualRaw !== actualRaw.trim()) {
    return "Not quite. There is an extra space before or after the answer.";
  }

  if (normalizeForLettersOnly(expectedNfc) !== normalizeForLettersOnly(actualNfc)) {
    if (expectedNfc.includes("ς") && actualNfc.includes("σ")) {
      return "Not quite. Use final sigma ς at the end of the word.";
    }

    return "Not quite. Check the Greek letters first, then the marks.";
  }

  const expectedNfd = expectedNfc.normalize("NFD");
  const actualNfd = actualNfc.normalize("NFD");
  const hasAccent = /[\u0300\u0301\u0342]/;
  const hasBreathing = /[\u0313\u0314]/;
  const hasIotaSubscript = /\u0345/;

  if (hasAccent.test(expectedNfd) && !hasAccent.test(actualNfd)) {
    return "Not quite. The letters are right, but an accent is missing.";
  }

  if (hasBreathing.test(expectedNfd) && !hasBreathing.test(actualNfd)) {
    return "Not quite. The letters are right, but a breathing mark is missing.";
  }

  if (hasIotaSubscript.test(expectedNfd) && !hasIotaSubscript.test(actualNfd)) {
    return "Not quite. The iota subscript is missing.";
  }

  return fallback;
}

function evaluateUnit0Question(questionEl, section) {
  const question = section.checkpoint.questions.find((candidate) => candidate.id === questionEl.dataset.questionId);
  const expected = questionEl.dataset.answer || question?.answer || "";
  const actual = getUnit0AnswerValue(questionEl);
  const isCorrect = normalizeGreekInput(actual) === normalizeGreekInput(expected);
  const feedback = questionEl.querySelector(".exercise-feedback");

  questionEl.classList.toggle("is-correct", isCorrect);
  questionEl.classList.toggle("is-wrong", !isCorrect);

  if (feedback) {
    feedback.textContent = isCorrect
      ? `Correct. ${question?.explanation || ""}`.trim()
      : questionEl.dataset.questionType === "input"
      ? getTypingFeedback(expected, actual, question?.explanation || "Try this one again.")
      : `Not quite. ${question?.explanation || "Review this point and try again."}`;
  }

  return {
    isCorrect,
    skillId: questionEl.dataset.skillId || question?.skillId || "reading.early_decoding"
  };
}

function bindUnit0MatchingControls(root, section) {
  const board = root.querySelector("[data-unit0-matching]");
  if (!board) {
    return;
  }

  const feedback = board.querySelector("[data-unit0-matching-feedback]");
  const prompt = board.querySelector("[data-unit0-complete-prompt]");
  let selectedTile = null;
  let matchedPairs = 0;
  let attempts = 0;

  const updateRemaining = () => {
    const remaining = Math.max(0, (section.matchingPairs?.length || 0) - matchedPairs);
    if (feedback) {
      feedback.textContent = remaining === 1 ? "1 pair remaining." : `${remaining} pairs remaining.`;
    }
  };

  board.querySelectorAll("[data-unit0-match-tile]").forEach((tile) => {
    tile.addEventListener("click", () => {
      if (tile.classList.contains("is-matched") || tile === selectedTile) {
        return;
      }

      if (!selectedTile) {
        selectedTile = tile;
        tile.classList.add("is-selected");
        tile.setAttribute("aria-pressed", "true");
        if (feedback) {
          feedback.textContent = "Now choose the matching letter.";
        }
        return;
      }

      attempts += 1;
      const isMatch =
        selectedTile.dataset.pairId === tile.dataset.pairId &&
        selectedTile.dataset.tileSide !== tile.dataset.tileSide;

      if (isMatch) {
        const firstTile = selectedTile;
        const secondTile = tile;
        firstTile.classList.add("is-matched");
        secondTile.classList.add("is-matched");
        firstTile.setAttribute("aria-pressed", "false");
        secondTile.setAttribute("aria-pressed", "false");
        selectedTile = null;
        matchedPairs += 1;

        setTimeout(() => {
          firstTile.disabled = true;
          secondTile.disabled = true;
          firstTile.setAttribute("aria-hidden", "true");
          secondTile.setAttribute("aria-hidden", "true");
          updateRemaining();

          if (matchedPairs === section.matchingPairs.length) {
            const skillResults = {
              "alphabet.letters": { correct: matchedPairs, incorrect: Math.max(0, attempts - matchedPairs) },
              "alphabet.lowercase": { correct: matchedPairs, incorrect: 0 }
            };
            recordUnit0Attempt(section, {
              score: matchedPairs,
              total: section.matchingPairs.length,
              passed: true,
              skillResults
            });
            renderUnit0ProgressStrip(readUnit0Progress(), section.id);
            if (feedback) {
              feedback.textContent = "Complete. All pairs matched.";
            }
            if (prompt) {
              prompt.hidden = false;
              prompt.querySelector("a")?.focus();
            }
          }
        }, 180);
        return;
      }

      tile.classList.add("is-wrong");
      selectedTile.classList.add("is-wrong");
      if (feedback) {
        feedback.textContent = "Not a match. Try another pair.";
      }

      const firstTile = selectedTile;
      setTimeout(() => {
        tile.classList.remove("is-wrong");
        firstTile.classList.remove("is-selected", "is-wrong");
        firstTile.setAttribute("aria-pressed", "false");
        if (selectedTile === firstTile) {
          selectedTile = null;
        }
        updateRemaining();
      }, 520);
    });
  });

  updateRemaining();
}

function bindUnit0SectionControls(root, section) {
  bindUnit0MatchingControls(root, section);

  root.querySelectorAll("[data-unit0-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.closest("[data-unit0-question]");
      question.querySelectorAll("[data-unit0-choice]").forEach((choice) => {
        choice.classList.remove("is-selected", "is-correct", "is-wrong");
        choice.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-selected");
      button.setAttribute("aria-pressed", "true");
      const result = evaluateUnit0Question(question, section);
      button.classList.add(result.isCorrect ? "is-correct" : "is-wrong");
    });
  });

  root.querySelectorAll("[data-unit0-check-input]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.closest("[data-unit0-question]");
      evaluateUnit0Question(question, section);
    });
  });

  root.querySelectorAll("[data-unit0-input]").forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      const question = input.closest("[data-unit0-question]");
      evaluateUnit0Question(question, section);
    });
  });

  root.querySelectorAll("[data-unit0-practice-again], [data-unit0-retake]").forEach((button) => {
    button.addEventListener("click", () => renderUnit0Section(section.id));
  });

  root.querySelector("[data-unit0-submit]")?.addEventListener("click", () => {
    const questionEls = [...root.querySelectorAll("[data-unit0-question]")];
    let score = 0;
    const skillResults = {};

    questionEls.forEach((questionEl) => {
      const result = evaluateUnit0Question(questionEl, section);
      if (result.isCorrect) {
        score += 1;
      }

      skillResults[result.skillId] ||= { correct: 0, incorrect: 0 };
      skillResults[result.skillId][result.isCorrect ? "correct" : "incorrect"] += 1;
    });

    const total = questionEls.length;
    const passed = score >= section.checkpoint.passing;
    const nextProgress = recordUnit0Attempt(section, { score, total, passed, skillResults });
    const resultEl = root.querySelector("[data-unit0-result]");
    const record = getUnit0SectionRecord(nextProgress, section.id);

    if (resultEl) {
      resultEl.textContent = passed
        ? section.finalCheck
          ? "Excellent. You are ready for Lesson 1."
          : `Passed: ${score}/${total}. The Next button is ready.`
        : section.finalCheck
        ? `Almost there. Review these skills: ${record.missedSkills.join(", ") || "mixed review"}.`
        : `Practice needed: ${score}/${total}. Read the feedback and try again.`;
    }

    const recommendations = root.querySelector("[data-unit0-review-recommendations]");
    if (recommendations) {
      recommendations.innerHTML = renderUnit0ReviewRecommendations(section, record);
      recommendations.querySelectorAll("[data-unit0-practice-again], [data-unit0-retake]").forEach((button) => {
        button.addEventListener("click", () => renderUnit0Section(section.id));
      });
    }

    renderUnit0ProgressStrip(nextProgress, section.id);
    renderUnit0OverallProgress(nextProgress);

    const nav = root.querySelector(".unit0-section-nav");
    if (nav) {
      nav.outerHTML = renderUnit0Nav(section, passed);
      root.querySelectorAll(".unit0-section-nav [data-unit0-practice-again]").forEach((button) => {
        button.addEventListener("click", () => renderUnit0Section(section.id));
      });
    }
  });
}

function renderUnit0FromLocation() {
  if (!unit0AppEl) {
    return;
  }

  const sectionId = getUnit0HashSectionId();
  if (sectionId === "overview") {
    renderUnit0Landing();
    return;
  }

  renderUnit0Section(sectionId);
}

function normalizeEmail(email) {
  return window.xenophonAuth?.normalizeEmail
    ? window.xenophonAuth.normalizeEmail(email)
    : String(email || "").trim().toLowerCase();
}

function findUserByEmail(email) {
  return COURSE_USERS.find((user) => normalizeEmail(user.email) === normalizeEmail(email || ""));
}

function findLesson(lessonId) {
  const normalizedId = normalizeLessonId(lessonId);
  return COURSE_LESSONS.find((lesson) => lesson.id === normalizedId) || COURSE_LESSONS[0];
}

function hydrateProgress(progress = {}) {
  const completedLessons = Array.isArray(progress.completedLessons) ? progress.completedLessons : [];
  const level = achievementTools.getLevelForXp(progress.xp || 0);
  const nextLevel = achievementTools.getNextLevelForXp(progress.xp || 0);
  const hydrated = {
    currentLessonId: progress.currentLessonId || "intro-1",
    currentSegmentId: progress.currentSegmentId || "lesson-start",
    completedLessons,
    passedQuizzes: Array.isArray(progress.passedQuizzes) ? progress.passedQuizzes : [],
    completedExercises: progress.completedExercises || {},
    completedLessonsCount: typeof progress.completedLessonsCount === "number" ? progress.completedLessonsCount : completedLessons.length,
    totalLessonsCount: typeof progress.totalLessonsCount === "number" ? progress.totalLessonsCount : COURSE_LESSONS.length,
    completionPercent: typeof progress.completionPercent === "number"
      ? progress.completionPercent
      : COURSE_LESSONS.length
      ? Math.round((completedLessons.length / COURSE_LESSONS.length) * 100)
      : 0,
    level: progress.level || level.number,
    levelLabel: progress.levelLabel || level.label,
    xp: progress.xp || 0,
    nextLevelXp: progress.nextLevelXp || nextLevel.xpRequired,
    nextLevelLabel: progress.nextLevelLabel || nextLevel.label,
    maxLevelReached: Boolean(progress.maxLevelReached),
    currentCourseGradePercent:
      typeof progress.currentCourseGradePercent === "number" ? progress.currentCourseGradePercent : null,
    completedLessonTestsCount:
      typeof progress.completedLessonTestsCount === "number" ? progress.completedLessonTestsCount : 0,
    lessonTestGrades: Array.isArray(progress.lessonTestGrades) ? progress.lessonTestGrades : [],
    weeklyCompleted: progress.weeklyCompleted || 0,
    weeklyGoal: progress.weeklyGoal || 5,
    vocabularyMastered: progress.vocabularyMastered || progress.metrics?.vocabularyMastered || 0,
    practiceCompleted: progress.practiceCompleted || progress.metrics?.practiceSessions || 0,
    recentActivity: Array.isArray(progress.recentActivity) ? progress.recentActivity : [],
    metrics: progress.metrics || {},
    fullCourseCompleted: Boolean(progress.fullCourseCompleted || progress.metrics?.fullCourseCompleted)
  };

  const principalPartsSummary = window.xenophonPrincipalPartsProgress?.getSummary?.();

  if (principalPartsSummary?.hasActivity) {
    const metrics = {
      ...hydrated.metrics
    };
    const practiceSessions = Number(metrics.practiceSessions || hydrated.practiceCompleted || 0);
    const activityEvents = Number(metrics.activityEvents || hydrated.recentActivity.length || 0);
    const perfectScoreCount = Number(metrics.perfectScoreCount || 0);

    metrics.practiceSessions = practiceSessions + principalPartsSummary.practiceSessions;
    metrics.activityEvents = activityEvents + principalPartsSummary.recentActivity.length;
    metrics.perfectScoreCount = perfectScoreCount + principalPartsSummary.perfectSessions;
    metrics.principalPartsIntroViewed = principalPartsSummary.viewedIntro;
    metrics.principalPartsVerbsStudied = principalPartsSummary.studiedVerbCount;
    metrics.principalPartsPracticeSessions = principalPartsSummary.practiceSessions;
    metrics.principalPartsPerfectSessions = principalPartsSummary.perfectSessions;
    metrics.principalPartsIrregularCorrectCount = principalPartsSummary.irregularCorrectCount;

    hydrated.metrics = metrics;
    hydrated.practiceCompleted = metrics.practiceSessions;
    hydrated.xp += principalPartsSummary.xp;
    hydrated.recentActivity = [
      ...principalPartsSummary.recentActivity,
      ...hydrated.recentActivity
    ].slice(0, 5);

    const resourceLevel = achievementTools.getLevelForXp(hydrated.xp);
    const resourceNextLevel = achievementTools.getNextLevelForXp(hydrated.xp);
    hydrated.level = resourceLevel.number;
    hydrated.levelLabel = resourceLevel.label;
    hydrated.nextLevelXp = resourceNextLevel.xpRequired;
    hydrated.nextLevelLabel = resourceNextLevel.number === resourceLevel.number ? "" : resourceNextLevel.label;
    hydrated.maxLevelReached = resourceNextLevel.number === resourceLevel.number && hydrated.xp >= resourceLevel.xpRequired;
  }

  const catalog = achievementTools.getAchievementCatalog();
  const legacyAchievementAliases = new Map([
    ["Grammar Novice", "parsing-apprentice"],
    ["Diligent Learner", "seven-day-streak"],
    ["Word Collector", "one-hundred-words-mastered"],
    ["Sophos", ""]
  ]);
  const computedEarned = achievementTools.computeEarnedAchievements(hydrated);
  const earnedFromPayload = Array.isArray(progress.achievements) && progress.achievements.length
    ? progress.achievements
      .map((achievement) => {
        const aliasSlug = legacyAchievementAliases.get(achievement.label);
        const canonical = catalog.find((item) =>
          item.slug === achievement.slug ||
          item.slug === aliasSlug ||
          item.label === achievement.label
        );

        if (!canonical) {
          return null;
        }

        return {
          ...canonical,
          earnedAt: achievement.earnedAt || null,
          imagePath: achievement.imagePath || achievementTools.resolveAchievementImagePath(canonical),
          earned: true
        };
      })
      .filter(Boolean)
    : [];
  const earnedBySlug = new Map(computedEarned.map((achievement) => [achievement.slug, achievement]));

  earnedFromPayload.forEach((achievement) => {
    earnedBySlug.set(achievement.slug, {
      ...earnedBySlug.get(achievement.slug),
      ...achievement
    });
  });

  hydrated.achievements = Array.from(earnedBySlug.values());
  hydrated.lockedAchievements = Array.isArray(progress.lockedAchievements)
    ? progress.lockedAchievements
    : achievementTools.getLockedAchievements(hydrated);
  hydrated.achievementCatalog = Array.isArray(progress.achievementCatalog)
    ? progress.achievementCatalog
    : catalog;

  return hydrated;
}

function getUserProgress(session) {
  if (session?.progress) {
    return hydrateProgress(session.progress);
  }

  if (session?.previewProgress) {
    return hydrateProgress(session.previewProgress);
  }

  return hydrateProgress(findUserByEmail(session?.email)?.progress || COURSE_USERS[2].progress);
}

function getVocabularyItems() {
  return [...COURSE_VOCABULARY].sort((first, second) => {
    if (first.lessonId === second.lessonId) {
      return first.sortOrder - second.sortOrder;
    }

    return first.lessonId.localeCompare(second.lessonId);
  });
}

function getAccessibleVocabulary(progress) {
  const currentLessonId = normalizeLessonId(progress.currentLessonId);
  const currentIndex = COURSE_LESSONS.findIndex((lesson) => lesson.id === currentLessonId);
  const lessonLimit = currentIndex >= 0 ? currentIndex + 1 : 1;
  const accessibleLessonIds = new Set(
    COURSE_LESSONS.slice(0, lessonLimit).map((lesson) => lesson.id)
  );

  getCompletedLessonIds(progress).forEach((lessonId) => accessibleLessonIds.add(lessonId));
  accessibleLessonIds.add(currentLessonId);

  const accessible = getVocabularyItems().filter((item) => accessibleLessonIds.has(item.lessonId));
  return accessible.length ? accessible : getVocabularyItems().slice(0, 6);
}

function getVocabularyForLesson(lessonId, progress) {
  const normalizedLessonId = normalizeLessonId(lessonId);
  const lessonVocabulary = getVocabularyItems().filter((item) => item.lessonId === normalizedLessonId);

  if (lessonVocabulary.length) {
    return lessonVocabulary;
  }

  return getAccessibleVocabulary(progress).slice(0, 6);
}

function getTodayReviewVocabulary(progress) {
  const reviewItems = getAccessibleVocabulary(progress).filter((item) => item.review?.dueToday);
  return (reviewItems.length ? reviewItems : getAccessibleVocabulary(progress))
    .sort((first, second) => (first.review?.confidence || 0) - (second.review?.confidence || 0))
    .slice(0, 6);
}

function getWeakVocabulary(progress) {
  const weakItems = getAccessibleVocabulary(progress).filter((item) => {
    const review = item.review || {};
    return (review.confidence || 0) <= 2 || (review.incorrectCount || 0) > (review.correctCount || 0);
  });

  return (weakItems.length ? weakItems : getTodayReviewVocabulary(progress)).slice(0, 5);
}

function getMobilePracticeShell() {
  if (mobilePracticeEl || !mainEl) {
    return mobilePracticeEl;
  }

  mobilePracticeEl = document.createElement("section");
  mobilePracticeEl.className = "mobile-practice";
  mobilePracticeEl.dataset.mobilePractice = "";
  mobilePracticeEl.setAttribute("aria-label", "Mobile practice mode");
  mainEl.appendChild(mobilePracticeEl);
  return mobilePracticeEl;
}

function isMobilePracticeContext() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  return currentPage === "index.html";
}

function renderVocabularyCard(item, mode = "flashcard") {
  const lesson = findLesson(item.lessonId);
  const confidence = item.review?.confidence || 0;

  return `
    <article class="mobile-vocab-card" data-mobile-card>
      <button class="mobile-card-face" type="button" data-mobile-card-toggle aria-pressed="false">
        <span class="mobile-card-term">${item.displayForm}</span>
        <span class="mobile-card-meta">${item.partOfSpeech || "vocabulary"} · ${lesson.number}</span>
        <span class="mobile-card-answer">${item.gloss}</span>
      </button>
      <div class="mobile-card-actions">
        <button class="audio-button" type="button" data-mobile-audio data-speak-text="${item.displayForm}" aria-label="Hear ${item.displayForm}">▶</button>
        <span>${mode === "weak" ? `Confidence ${confidence}/5` : item.transliteration}</span>
      </div>
    </article>
  `;
}

function renderAudioPracticeItem(item) {
  return `
    <button class="mobile-audio-row" type="button" data-mobile-audio data-speak-text="${item.displayForm}">
      <span>${item.displayForm}</span>
      <strong>${item.gloss}</strong>
    </button>
  `;
}

function renderQuickDrill(item, choices) {
  return `
    <article class="mobile-drill" data-mobile-drill>
      <p>Choose the meaning of <strong>${item.displayForm}</strong>.</p>
      <div class="mobile-drill-choices">
        ${choices.map((choice) => `
          <button type="button" data-mobile-drill-answer="${choice === item.gloss ? "correct" : "wrong"}">${choice}</button>
        `).join("")}
      </div>
      <p class="mobile-drill-feedback" aria-live="polite"></p>
    </article>
  `;
}

function getDrillChoices(item, vocabulary) {
  const distractors = vocabulary
    .filter((candidate) => candidate.id !== item.id)
    .map((candidate) => candidate.gloss)
    .slice(0, 2);
  const choices = [item.gloss, ...distractors];

  return choices.sort((first, second) => first.localeCompare(second));
}

function bindMobilePracticeControls(shell) {
  shell.querySelectorAll("[data-mobile-card-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-mobile-card]");
      const isFlipped = card.classList.toggle("is-flipped");
      button.setAttribute("aria-pressed", String(isFlipped));
    });
  });

  shell.querySelectorAll("[data-mobile-audio]").forEach((button) => {
    button.addEventListener("click", () => {
      speakGreek(button.dataset.speakText);
    });
  });

  shell.querySelectorAll("[data-mobile-drill]").forEach((drill) => {
    const feedback = drill.querySelector(".mobile-drill-feedback");

    drill.querySelectorAll("[data-mobile-drill-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        drill.querySelectorAll("[data-mobile-drill-answer]").forEach((choice) => {
          choice.classList.remove("is-correct", "is-wrong");
        });

        const isCorrect = button.dataset.mobileDrillAnswer === "correct";
        button.classList.add(isCorrect ? "is-correct" : "is-wrong");

        if (feedback) {
          feedback.textContent = isCorrect ? "Correct." : "Review this one again.";
        }
      });
    });
  });
}

function renderMobilePractice(session) {
  if (!isMobilePracticeContext()) {
    mobilePracticeEl?.remove();
    mobilePracticeEl = null;
    return;
  }

  const shell = getMobilePracticeShell();

  if (!shell) {
    return;
  }

  const progress = getUserProgress(session);
  const currentLesson = findLesson(progress.currentLessonId);
  const reviewItems = getTodayReviewVocabulary(progress);
  const lessonItems = getVocabularyForLesson(currentLesson.id, progress);
  const weakItems = getWeakVocabulary(progress);
  const audioItems = reviewItems.slice(0, 5);
  const drillItems = weakItems.slice(0, 3);
  const accessibleVocabulary = getAccessibleVocabulary(progress);

  shell.innerHTML = `
    <header class="mobile-practice-header">
      <p class="dashboard-context">Practice Mode</p>
      <h2>Quick Greek Review</h2>
      <p>${currentLesson.number}: ${currentLesson.title}</p>
    </header>

    <nav class="mobile-tool-grid" aria-label="Mobile learning tools">
      <a href="#mobile-today">Today’s Review</a>
      <a href="#mobile-flashcards">Lesson Flashcards</a>
      <a href="#mobile-weak">Weak Vocabulary</a>
      <a href="#mobile-audio">Audio Practice</a>
      <a href="#mobile-drills">Quick Drills</a>
    </nav>

    <section class="mobile-practice-panel" id="mobile-today">
      <div class="mobile-panel-heading">
        <p class="eyebrow">Today’s Review</p>
        <h3>${reviewItems.length} cards due</h3>
      </div>
      <div class="mobile-card-stack">
        ${reviewItems.map((item) => renderVocabularyCard(item)).join("")}
      </div>
    </section>

    <section class="mobile-practice-panel" id="mobile-flashcards">
      <div class="mobile-panel-heading">
        <p class="eyebrow">Lesson Flashcards</p>
        <h3>${currentLesson.title}</h3>
      </div>
      <div class="mobile-card-stack">
        ${lessonItems.map((item) => renderVocabularyCard(item)).join("")}
      </div>
    </section>

    <section class="mobile-practice-panel" id="mobile-weak">
      <div class="mobile-panel-heading">
        <p class="eyebrow">Weak Vocabulary</p>
        <h3>Review fragile words first</h3>
      </div>
      <div class="mobile-card-stack">
        ${weakItems.map((item) => renderVocabularyCard(item, "weak")).join("")}
      </div>
    </section>

    <section class="mobile-practice-panel" id="mobile-audio">
      <div class="mobile-panel-heading">
        <p class="eyebrow">Audio Practice</p>
        <h3>Listen and repeat</h3>
      </div>
      <div class="mobile-audio-list">
        ${audioItems.map(renderAudioPracticeItem).join("")}
      </div>
    </section>

    <section class="mobile-practice-panel" id="mobile-drills">
      <div class="mobile-panel-heading">
        <p class="eyebrow">Quick Drills</p>
        <h3>Three short checks</h3>
      </div>
      <div class="mobile-drill-list">
        ${drillItems.map((item) => renderQuickDrill(item, getDrillChoices(item, accessibleVocabulary))).join("")}
      </div>
    </section>
  `;

  bindMobilePracticeControls(shell);
}

function getContinueUrl(progress) {
  const lesson = findLesson(progress.currentLessonId);

  if (lesson.id === "intro-1") {
    return `lesson-introduction.html${getUnit0SectionUrl(getSectionById("letters"))}`;
  }

  const templatedLessonMatch = lesson.id.match(/^lesson-(\d+)$/);
  if (templatedLessonMatch) {
    const lessonNumber = templatedLessonMatch[1];
    const segmentPageMatch = String(progress.currentSegmentId || "").match(new RegExp(`${lesson.id}-page-(\\d+)`));
    const maxPage = 3;
    const page = segmentPageMatch ? Math.max(1, Math.min(maxPage, Number(segmentPageMatch[1]))) : 1;
    return `lesson.html?lesson=${lessonNumber}&page=${page}`;
  }

  if (lesson.url.includes("#")) {
    return lesson.url;
  }

  return `${lesson.url}#${progress.currentSegmentId || "lesson-start"}`;
}

function getLessonStatus(lesson, progress) {
  if (lesson.id === "intro-1") {
    const overview = getUnit0Overview();
    if (overview.percent === 100) {
      return "completed";
    }

    if (overview.attempted.length > 0) {
      return "in-progress";
    }
  }

  if (isLessonComplete(progress, lesson.id)) {
    return "completed";
  }

  if (lesson.id === normalizeLessonId(progress.currentLessonId)) {
    return progress.completedExercises[lesson.id]?.length ? "in-progress" : "begin";
  }

  return isLessonUnlocked(lesson, progress) ? "available" : "locked";
}

function statusLabel(status) {
  if (status === "completed") {
    return "Completed";
  }

  if (status === "in-progress") {
    return "In Progress";
  }

  if (status === "begin") {
    return "Begin Here";
  }

  if (status === "available") {
    return "Unlocked";
  }

  return "Locked";
}

function statusDot(status, lesson) {
  if (status === "completed") {
    return "✓";
  }

  if (status === "locked") {
    return "🔒";
  }

  return lesson.moduleType === "intro" ? "Α" : "•";
}

function readSession() {
  return window.xenophonAuth?.readSession ? window.xenophonAuth.readSession() : null;
}

function writeSession(user, activeRole) {
  if (window.xenophonAuth?.writeSession) {
    return window.xenophonAuth.writeSession(user, activeRole);
  }

  return user;
}

function saveSession(session) {
  return window.xenophonAuth?.saveSession ? window.xenophonAuth.saveSession(session) : session;
}

function clearSession() {
  window.xenophonAuth?.clearSession?.();
}

function readSidebarCollapsed() {
  try {
    return window.sessionStorage.getItem(SIDEBAR_STORAGE_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function writeSidebarCollapsed(isCollapsed) {
  try {
    window.sessionStorage.setItem(SIDEBAR_STORAGE_KEY, String(isCollapsed));
  } catch (error) {
    // The UI still works if session storage is unavailable.
  }
}

function applySidebarState(isCollapsed) {
  if (!appShellEl || !sidebarToggleButton) {
    return;
  }

  appShellEl.classList.toggle("sidebar-collapsed", isCollapsed);
  sidebarToggleButton.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarToggleButton.setAttribute(
    "aria-label",
    isCollapsed ? "Expand navigation" : "Collapse navigation"
  );

  const label = sidebarToggleButton.querySelector(".sidebar-toggle-label");
  if (label) {
    label.textContent = isCollapsed ? "Expand" : "Collapse";
  }
}

function bindSidebarToggle() {
  if (!sidebarToggleButton || !appShellEl) {
    return;
  }

  applySidebarState(readSidebarCollapsed());

  sidebarToggleButton.addEventListener("click", () => {
    const nextCollapsed = !appShellEl.classList.contains("sidebar-collapsed");
    applySidebarState(nextCollapsed);
    writeSidebarCollapsed(nextCollapsed);
  });
}

function speakGreek(text) {
  if (!("speechSynthesis" in window)) {
    return false;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "el-GR";
  utterance.rate = 0.72;
  window.speechSynthesis.speak(utterance);
  return true;
}

function renderAudioAttributes(audioSrc, speakText) {
  return `${audioSrc ? `data-audio-src="${audioSrc}" ` : ""}data-speak-text="${speakText}"`;
}

function applyGreekTextStyling(root = document.body) {
  if (!root) {
    return;
  }

  const greekPattern = /[\u0370-\u03FF\u1F00-\u1FFF]+/;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (
        !parent ||
        parent.closest("script, style, textarea, input, .greek-text") ||
        !greekPattern.test(node.nodeValue)
      ) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  let node = walker.nextNode();

  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }

  nodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();
    const parts = textNode.nodeValue.split(/([\u0370-\u03FF\u1F00-\u1FFF]+)/g);

    parts.forEach((part) => {
      if (!part) {
        return;
      }

      if (greekPattern.test(part)) {
        const span = document.createElement("span");
        span.className = "greek-text";
        span.lang = "grc";
        span.textContent = part;
        fragment.appendChild(span);
        return;
      }

      fragment.appendChild(document.createTextNode(part));
    });

    textNode.replaceWith(fragment);
  });
}

function renderAlphabetTable() {
  if (!alphabetTableEl) {
    return;
  }

  alphabetTableEl.textContent = "";

  GREEK_ALPHABET.forEach(([upper, lower, greekName, englishName, sound, example, gloss, slug, exampleSlug]) => {
    const row = document.createElement("tr");
    const hasLetterAudio = ALPHABET_LETTER_AUDIO_SLUGS.has(slug);
    const letterAudioSrc = hasLetterAudio ? `assets/audio/alphabet/${slug}-letter.mp3` : "";
    const nameAudioSrc = ALPHABET_NAME_AUDIO_SLUGS.has(slug) ? `assets/audio/alphabet/${slug}-name.mp3` : "";
    const exampleAudioSrc = ALPHABET_EXAMPLE_AUDIO_SLUGS.has(exampleSlug) ? `assets/audio/alphabet/${exampleSlug}.mp3` : "";

    row.innerHTML = `
      <td>
        <button class="audio-text audio-text-letter letter-pair greek-text" type="button" ${renderAudioAttributes(nameAudioSrc, greekName)} aria-label="Hear the letter name ${englishName}, ${upper} ${lower}" lang="grc">
          <strong>${upper}</strong><span>${lower}</span>
        </button>
      </td>
      <td>
        <span class="alphabet-name-stack">
          <button class="audio-text audio-text-name greek-text" type="button" ${renderAudioAttributes(nameAudioSrc, greekName)} aria-label="Hear the Greek letter name ${greekName}" lang="grc">
            ${greekName}
          </button>
          <button class="audio-text audio-text-english-name" type="button" ${renderAudioAttributes(nameAudioSrc, englishName)} aria-label="Hear the English letter name ${englishName}">
            ${englishName}
          </button>
        </span>
      </td>
      <td>
        <button class="audio-text audio-text-sound" type="button" ${renderAudioAttributes(letterAudioSrc, lower)} aria-label="Hear the letter sound for ${englishName}">
          ${sound}
        </button>
      </td>
      <td>
        <button class="audio-text greek-example greek-text" type="button" ${renderAudioAttributes(exampleAudioSrc, example)} aria-label="Hear ${example}, ${gloss}" lang="grc">
          ${example}
        </button>
        <span class="muted">(${gloss})</span>
      </td>
    `;
    alphabetTableEl.appendChild(row);
  });
}

function bindLessonAudio(root = document) {
  root.querySelectorAll("[data-speak-text]").forEach((audioTrigger) => {
    if (audioTrigger.dataset.audioBound === "true") {
      return;
    }

    audioTrigger.dataset.audioBound = "true";
    audioTrigger.addEventListener("click", () => {
      const audioSrc = audioTrigger.dataset.audioSrc;
      const speakText = audioTrigger.dataset.speakText;

      if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play().catch(() => speakGreek(speakText));
        return;
      }

      speakGreek(speakText);
    });
  });
}

function bindExerciseChecks() {
  document.querySelectorAll("[data-exercise]").forEach((exercise) => {
    const feedback = exercise.querySelector(".exercise-feedback");

    exercise.querySelectorAll("[data-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        exercise.querySelectorAll("[data-answer]").forEach((choice) => {
          choice.classList.remove("is-correct", "is-wrong");
        });

        const isCorrect = button.dataset.answer === "correct";
        button.classList.add(isCorrect ? "is-correct" : "is-wrong");

        if (feedback) {
          feedback.textContent = isCorrect ? "Correct." : "Try again.";
        }
      });
    });
  });
}

function renderProgressCards(progress) {
  const completedLessonsCount = getCompletedLessonIds(progress).filter((lessonId) =>
    COURSE_LESSONS.some((lesson) => lesson.id === lessonId)
  ).length;
  const totalLessonsCount = COURSE_LESSONS.length;
  const displayCompletedLessonsCount =
    typeof progress.completedLessonsCount === "number"
      ? progress.completedLessonsCount
      : completedLessonsCount;
  const percent =
    typeof progress.completionPercent === "number"
      ? progress.completionPercent
      : totalLessonsCount > 0
      ? Math.round((completedLessonsCount / totalLessonsCount) * 100)
      : 0;

  if (progressRingEl) {
    progressRingEl.style.setProperty("--progress-percent", `${percent}%`);
    progressRingEl.dataset.progressLabel = `${percent}%`;
  }

  if (progressHeadingEl) {
    progressHeadingEl.textContent = percent === 0 ? "Ready to begin" : "Well done!";
  }

  if (progressSummaryEl) {
    progressSummaryEl.innerHTML = `You’ve completed<br>${displayCompletedLessonsCount} of ${totalLessonsCount} lessons.`;
  }

  if (currentLevelEl) {
    currentLevelEl.textContent = progress.level;
  }

  if (currentLevelLabelEl) {
    currentLevelLabelEl.textContent = progress.levelLabel;
  }

  if (xpSummaryEl) {
    xpSummaryEl.innerHTML = progress.maxLevelReached
      ? `<span>Total experience points</span><strong>${progress.xp} XP</strong>`
      : `<span>Experience points toward next level</span><strong>${progress.xp} / ${progress.nextLevelXp} XP</strong>`;
  }

  if (xpBarEl) {
    const xpPercent = progress.maxLevelReached
      ? 100
      : Math.min(100, Math.round((progress.xp / Math.max(1, progress.nextLevelXp)) * 100));
    xpBarEl.style.width = `${xpPercent}%`;
  }

  if (nextLevelEl) {
    nextLevelEl.textContent = progress.maxLevelReached
      ? "Max Level Reached"
      : `Next Level: ${progress.nextLevelLabel}`;
  }

  if (courseGradeEl) {
    courseGradeEl.textContent = progress.completedLessonTestsCount
      ? `${progress.currentCourseGradePercent}%`
      : "N/A";
  }

  if (courseGradeNoteEl) {
    const completedCount = progress.completedLessonTestsCount || 0;
    courseGradeNoteEl.textContent = completedCount
      ? `Based on ${completedCount} lesson ${completedCount === 1 ? "test" : "tests"} completed`
      : "Complete your first Lesson Test to receive a course grade.";
  }

  if (viewGradesLinkEl) {
    viewGradesLinkEl.href = "grades.html";
  }
}

function formatLessonTestDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function renderGradesPage(session) {
  const gradePageEl = document.querySelector("[data-grade-page]");

  if (!gradePageEl) {
    return;
  }

  const progress = hydrateProgress(session?.progress || {});
  const gradeList = progress.lessonTestGrades || [];
  const studentNameEl = gradePageEl.querySelector("[data-grade-student]");
  const gradeValueEl = gradePageEl.querySelector("[data-grade-detail-value]");
  const gradeNoteEl = gradePageEl.querySelector("[data-grade-detail-note]");
  const gradeTableEl = gradePageEl.querySelector("[data-grade-table]");
  const gradeTableBodyEl = gradePageEl.querySelector("[data-grade-table-body]");
  const gradeEmptyEl = gradePageEl.querySelector("[data-grade-empty]");

  if (studentNameEl) {
    studentNameEl.textContent = session?.name || "Student";
  }

  if (gradeValueEl) {
    gradeValueEl.textContent = gradeList.length ? `${progress.currentCourseGradePercent}%` : "Not available yet";
  }

  if (gradeNoteEl) {
    gradeNoteEl.textContent = gradeList.length
      ? `Based on ${gradeList.length} completed lesson ${gradeList.length === 1 ? "test" : "tests"}`
      : "Complete your first Lesson Test to receive a course grade.";
  }

  if (gradeEmptyEl) {
    gradeEmptyEl.hidden = gradeList.length > 0;
  }

  if (gradeTableEl) {
    gradeTableEl.hidden = gradeList.length === 0;
  }

  if (!gradeTableBodyEl) {
    return;
  }

  gradeTableBodyEl.textContent = "";
  gradeList.forEach((grade) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${grade.lessonLabel || grade.lessonId} — ${grade.lessonTitle}</td>
      <td>${grade.testTitle || "Lesson Test"}</td>
      <td><strong>${Math.round(Number(grade.scorePercent))}%</strong></td>
      <td>${formatLessonTestDate(grade.completedAt)}</td>
      <td>${grade.attemptNumber || 1}</td>
    `;
    gradeTableBodyEl.appendChild(row);
  });
}

function getPracticeCompletedCount(progress) {
  if (typeof progress.practiceCompleted === "number") {
    return progress.practiceCompleted;
  }

  return Object.values(progress.completedExercises || {}).reduce(
    (total, exerciseIds) => total + (Array.isArray(exerciseIds) ? exerciseIds.length : 0),
    0
  );
}

function renderStartSummary(session, progress) {
  const firstName = String(session?.name || "Student").trim().split(/\s+/)[0] || "Student";
  const currentLesson = findLesson(progress.currentLessonId);
  const unit0Overview = getUnit0Overview();
  const unit0Attempts = Object.values(readUnit0Progress().sections || {}).reduce(
    (total, record) => total + (record.attempts || 0),
    0
  );
  const isAtBeginning = (progress.completedLessonsCount || 0) === 0 || currentLesson.id === "intro-1";
  const masteredText = unit0Overview.mastered.length
    ? `Mastered: ${unit0Overview.mastered.map((section) => section.shortTitle).join(", ")}.`
    : "Mastered: none yet.";
  const needsPracticeText = unit0Overview.needsPractice.length
    ? `Needs Practice: ${unit0Overview.needsPractice.map((section) => section.shortTitle).join(", ")}.`
    : "Needs Practice: none flagged yet.";
  const nextStep = isAtBeginning
    ? "Suggested next step: Read the course introduction, then begin Unit 0."
    : `Suggested next step: Continue ${currentLesson.number}. ${currentLesson.title}.`;

  if (startSummaryTitleEl) {
    startSummaryTitleEl.textContent = `Welcome, ${firstName}`;
  }

  if (startSummaryLocationEl) {
    startSummaryLocationEl.innerHTML = isAtBeginning
      ? `Current location: Introduction, then Unit 0 — Greek Alphabet & Reading Readiness<br>Unit 0 progress: ${unit0Overview.percent}%. ${masteredText} ${needsPracticeText}`
      : `Current location: ${currentLesson.moduleLabel} · ${currentLesson.number} — ${currentLesson.title}<br>${currentLesson.grammar || currentLesson.subtitle}`;
  }

  if (startLessonsEl) {
    startLessonsEl.textContent = progress.completedLessonsCount || 0;
  }

  if (startVocabularyEl) {
    startVocabularyEl.textContent = progress.vocabularyMastered || 0;
  }

  if (startPracticeEl) {
    startPracticeEl.textContent = getPracticeCompletedCount(progress) + unit0Attempts;
  }

  if (startNextStepEl) {
    startNextStepEl.textContent = nextStep;
  }

  if (startCourseLinkEl) {
    startCourseLinkEl.href = isAtBeginning ? "course-introduction.html" : getContinueUrl(progress);
    startCourseLinkEl.textContent = isAtBeginning ? "Start with Introduction" : "Continue the Course";
  }
}

function createModuleHeader(module, progress, isDashboard = false) {
  const moduleProgress = getModuleProgress(module, progress);
  const unit0Overview = module.id === "unit-0" ? getUnit0Overview() : null;
  const moduleLine = module.subtitle || module.description || "";
  const moduleMeta = [
    module.primaryText,
    unit0Overview
      ? `${unit0Overview.mastered.length} of ${UNIT0_SECTIONS.length} sections mastered`
      : `${moduleProgress.completedCount} of ${moduleProgress.totalCount} lessons complete`
  ].filter(Boolean);
  const header = document.createElement("div");
  header.className = isDashboard ? "path-module-header" : "lesson-module-header";
  header.innerHTML = `
    <div class="${isDashboard ? "path-module-copy" : "lesson-module-copy"}">
      <p class="eyebrow">${module.label}</p>
      <h3>${module.title}</h3>
      <p>${moduleLine}</p>
      <div class="module-meta">
        ${moduleMeta.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </div>
    <div class="module-progress" aria-label="${module.label} progress: ${moduleProgress.percent}% complete">
      <strong>${moduleProgress.percent}%</strong>
      <span><i style="width:${moduleProgress.percent}%"></i></span>
    </div>
  `;

  return header;
}

function createLessonListItem(lesson, progress, isCompact = false) {
  const status = getLessonStatus(lesson, progress);
  const isCurrent = lesson.id === normalizeLessonId(progress.currentLessonId);
  const completedExercises = progress.completedExercises?.[lesson.id] || [];
  const exerciseSummary = `${Math.min(completedExercises.length, lesson.exerciseIds.length)} of ${lesson.exerciseIds.length} exercises complete`;
  const item = document.createElement(isCompact ? "li" : "article");
  if (!isCompact) {
    item.id = lesson.id;
  }
  item.className = `${isCompact ? "path-lesson" : "lesson-list-item"} ${status}${isCurrent ? " current-lesson" : ""}`;

  item.innerHTML = `
    <div class="${isCompact ? "path-lesson-marker" : "lesson-list-marker"}">${statusDot(status, lesson)}</div>
    <div class="${isCompact ? "path-lesson-copy" : "lesson-list-copy"}">
      <p class="eyebrow">${lesson.number}</p>
      <h3>${lesson.title}</h3>
      <p class="lesson-grammar">${lesson.grammar || lesson.subtitle}</p>
      <div class="lesson-meta">
        <span>${statusLabel(status)}</span>
        ${isCompact ? "" : `<span>${exerciseSummary}</span>`}
      </div>
    </div>
  `;

  const actionLabel = getLessonActionLabel(lesson, status, progress);
  if (actionLabel && status !== "locked") {
    const link = document.createElement("a");
    link.className = isCompact ? "path-lesson-action" : "continue-btn";
    link.href = getLessonHref(lesson, progress);
    link.textContent = actionLabel;
    item.appendChild(link);
  }

  return item;
}

function renderLearningPath(progress) {
  if (!learningPathEl) {
    return;
  }

  const currentLessonId = normalizeLessonId(progress.currentLessonId);
  const currentIndex = COURSE_LESSONS.findIndex((lesson) => lesson.id === currentLessonId);
  const resolvedCurrentIndex = currentIndex >= 0 ? currentIndex : 0;
  const completedBeforeCurrent = COURSE_LESSONS.slice(0, resolvedCurrentIndex)
    .filter((lesson) => isLessonComplete(progress, lesson.id))
    .slice(-3);
  const currentLesson = COURSE_LESSONS[resolvedCurrentIndex];
  const nextLesson = COURSE_LESSONS[resolvedCurrentIndex + 1];
  const lessonChain = [
    ...completedBeforeCurrent,
    currentLesson,
    nextLesson
  ].filter(Boolean);

  learningPathEl.textContent = "";

  lessonChain.forEach((lesson) => {
    const status = getLessonStatus(lesson, progress);
    const step = document.createElement("div");
    step.className = `step ${status === "completed" ? "done" : status === "locked" ? "locked" : "current"}`;

    const copy = document.createElement("div");
    copy.innerHTML = `<h4>${lesson.number}. ${lesson.title}</h4><p>${statusLabel(status)}</p>`;

    const dot = document.createElement("div");
    dot.className = "step-dot";
    dot.textContent = statusDot(status, lesson);

    step.appendChild(dot);
    step.appendChild(copy);

    if (lesson.id === currentLessonId) {
      const link = document.createElement("a");
      link.className = "continue-btn";
      link.href = getContinueUrl(progress);
      link.textContent = status === "begin" ? "Start Lesson" : "Continue Lesson";
      step.appendChild(link);
    }

    learningPathEl.appendChild(step);
  });
}

function renderActivity(progress) {
  if (!activityListEl) {
    return;
  }

  activityListEl.textContent = "";

  if (!progress.recentActivity.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No activity yet.";
    activityListEl.appendChild(empty);
    return;
  }

  progress.recentActivity.forEach((activity) => {
    const item = document.createElement("div");
    item.className = "activity-item";
    item.innerHTML = `
      <div class="activity-icon ${activity.type}">${activity.icon}</div>
      <div>
        <h4>${activity.title}</h4>
        <p class="muted">${activity.when}</p>
      </div>
      <div class="xp"><strong>+${activity.xp}</strong><span>points earned</span></div>
    `;
    activityListEl.appendChild(item);
  });
}

function formatAchievementDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function canonicalAchievement(achievement) {
  const catalog = achievementTools.getAchievementCatalog();
  const bySlug = catalog.find((item) => item.slug === achievement.slug);
  const byLabel = catalog.find((item) => item.label === achievement.label);
  return {
    ...(bySlug || byLabel || achievement),
    ...achievement
  };
}

function renderAchievementImage(achievement, className = "achievement-icon") {
  const resolved = canonicalAchievement(achievement);
  const imagePath = resolved.imagePath || achievementTools.resolveAchievementImagePath(resolved);
  const altText = `${resolved.label} achievement badge`;

  return `
    <span class="${className}">
      <img src="${imagePath}" alt="${altText}" loading="lazy" data-achievement-image="${resolved.slug || resolved.label}">
    </span>
  `;
}

function bindAchievementImageFallbacks(root) {
  root.querySelectorAll("[data-achievement-image]").forEach((image) => {
    image.addEventListener("error", () => {
      const label = image.getAttribute("alt") || "Achievement badge";
      console.warn(`Missing achievement asset: ${image.getAttribute("src")}`);
      image.closest(".achievement-icon")?.classList.add("achievement-icon--missing");
      image.replaceWith(document.createTextNode(label.slice(0, 1)));
    }, { once: true });
  });
}

function getAchievementStates(progress) {
  const hydrated = hydrateProgress(progress);
  const earnedBySlug = new Map(
    hydrated.achievements.map((achievement) => {
      const canonical = canonicalAchievement(achievement);
      return [canonical.slug, { ...canonical, ...achievement, earned: true }];
    })
  );

  return achievementTools.getAchievementCatalog().map((achievement) => {
    const earned = earnedBySlug.get(achievement.slug);
    return {
      ...achievement,
      ...(earned || {}),
      imagePath: achievementTools.resolveAchievementImagePath(achievement),
      earned: Boolean(earned),
      earnedAt: earned?.earnedAt || null
    };
  });
}

function createAchievementPreviewCard(achievement) {
  const card = document.createElement("article");
  const resolved = canonicalAchievement(achievement);
  card.className = "achievement-card achievement-card--earned";
  card.innerHTML = `
    ${renderAchievementImage(resolved)}
    <div class="achievement-card-copy">
      <strong>${resolved.label}</strong>
      <span>${resolved.tier || "Award"}</span>
    </div>
  `;
  bindAchievementImageFallbacks(card);
  return card;
}

function ensureAchievementDialog() {
  let dialog = document.querySelector("[data-achievements-dialog]");

  if (dialog) {
    return dialog;
  }

  dialog = document.createElement("section");
  dialog.className = "achievement-dialog";
  dialog.hidden = true;
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "achievements-title");
  dialog.tabIndex = -1;
  dialog.dataset.achievementsDialog = "true";
  dialog.innerHTML = `
    <div class="achievement-dialog-backdrop" data-achievements-close></div>
    <div class="achievement-dialog-panel" role="document">
      <div class="achievement-dialog-heading">
        <div>
          <p class="eyebrow">Course Awards</p>
          <h2 id="achievements-title">Achievements</h2>
        </div>
        <button class="achievement-dialog-close" type="button" data-achievements-close aria-label="Close achievements">×</button>
      </div>
      <div class="achievement-tier-list" data-achievement-catalog></div>
    </div>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

function renderAchievementCatalog(progress) {
  const dialog = ensureAchievementDialog();
  const catalogEl = dialog.querySelector("[data-achievement-catalog]");
  const achievements = getAchievementStates(progress);
  const tiers = [
    ["bronze", "Bronze"],
    ["silver", "Silver"],
    ["gold", "Gold"]
  ];

  catalogEl.textContent = "";

  tiers.forEach(([tier, label]) => {
    const section = document.createElement("section");
    section.className = "achievement-tier";
    section.setAttribute("aria-labelledby", `achievement-tier-${tier}`);
    section.innerHTML = `
      <h3 id="achievement-tier-${tier}">${label}</h3>
      <div class="achievement-grid">
        ${achievements
          .filter((achievement) => achievement.tier === tier)
          .map((achievement) => {
            const earnedDate = formatAchievementDate(achievement.earnedAt);
            return `
              <article class="achievement-card ${achievement.earned ? "achievement-card--earned" : "achievement-card--locked"}">
                ${renderAchievementImage(achievement, `achievement-icon${achievement.earned ? "" : " achievement-icon--locked"}`)}
                <div class="achievement-card-copy">
                  <div class="achievement-title-row">
                    <strong>${achievement.label}</strong>
                    ${achievement.earned ? "" : `<span class="achievement-lock-label">Locked</span>`}
                  </div>
                  <p>${achievement.description}</p>
                  <span>${achievement.earned
                    ? earnedDate ? `Earned ${earnedDate}` : "Earned"
                    : `How to earn: ${achievement.lockedDescription}`}</span>
                </div>
              </article>
            `;
          }).join("")}
      </div>
    `;
    catalogEl.appendChild(section);
  });

  bindAchievementImageFallbacks(dialog);
}

function openAchievementDialog(progress) {
  const dialog = ensureAchievementDialog();
  renderAchievementCatalog(progress);
  dialog.hidden = false;
  document.body.classList.add("achievement-dialog-open");
  dialog.querySelector("[data-achievements-close]")?.focus();
}

function closeAchievementDialog() {
  const dialog = document.querySelector("[data-achievements-dialog]");

  if (!dialog || dialog.hidden) {
    return;
  }

  dialog.hidden = true;
  document.body.classList.remove("achievement-dialog-open");
  document.querySelector("[data-achievements-open]")?.focus();
}

function renderAchievements(progress) {
  if (!achievementListEl) {
    return;
  }

  achievementListEl.textContent = "";

  if (!progress.achievements.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No achievements yet.";
    achievementListEl.appendChild(empty);
    return;
  }

  progress.achievements
    .map(canonicalAchievement)
    .sort((first, second) => {
      const catalog = achievementTools.getAchievementCatalog();
      const firstIndex = catalog.findIndex((achievement) => achievement.slug === first.slug);
      const secondIndex = catalog.findIndex((achievement) => achievement.slug === second.slug);
      return firstIndex - secondIndex;
    })
    .slice(0, 6)
    .forEach((achievement) => {
      achievementListEl.appendChild(createAchievementPreviewCard(achievement));
    });
}

function renderDashboardProgress(session) {
  const progress = getUserProgress(session);
  renderStartSummary(session, progress);
  renderProgressCards(progress);
  renderLearningPath(progress);
  renderActivity(progress);
  renderAchievements(progress);
}

function renderLessonsPage(session) {
  if (!lessonsListEl) {
    return;
  }

  const progress = getUserProgress(session);
  const currentLesson = findLesson(progress.currentLessonId);

  if (lessonPageTitleEl) {
    lessonPageTitleEl.textContent = "Lessons";
  }

  if (lessonPageSummaryEl) {
    const unit0Overview = getUnit0Overview();
    lessonPageSummaryEl.textContent = currentLesson.id === "intro-1"
      ? `Unit 0 progress: ${unit0Overview.percent}%. Next step: ${unit0Overview.nextSection.number} ${unit0Overview.nextSection.title}.`
      : `Current lesson: ${currentLesson.number}. ${currentLesson.title}`;
  }

  lessonsListEl.textContent = "";

  COURSE_MODULES.forEach((module) => {
    const moduleLessons = getModuleLessons(module);
    const hasCurrentLesson = moduleLessons.some(
      (lesson) => lesson.id === normalizeLessonId(progress.currentLessonId)
    );
    const section = document.createElement("details");
    section.className = `lesson-module ${module.type === "intro" ? "intro-module" : ""}`;
    section.open = module.type === "intro" || hasCurrentLesson;

    const summary = document.createElement("summary");
    summary.appendChild(createModuleHeader(module, progress));
    const toggle = document.createElement("span");
    toggle.className = "module-toggle";
    toggle.textContent = "⌄";
    summary.appendChild(toggle);
    section.appendChild(summary);

    if (module.introUrl) {
      const introLink = document.createElement("a");
      introLink.className = "module-intro-link";
      introLink.href = module.introUrl;
      introLink.textContent = `Open ${module.label} introduction`;
      section.appendChild(introLink);
    }

    const list = document.createElement("div");
    list.className = "module-lessons";
    moduleLessons.forEach((lesson) => list.appendChild(createLessonListItem(lesson, progress)));
    section.appendChild(list);
    lessonsListEl.appendChild(section);
  });
}

async function renderLiveCourseTitle() {
  if (!liveCourseTitleEl) {
    return;
  }

  try {
    const response = await fetch("/api/courses");
    if (!response.ok) {
      throw new Error("Courses request failed");
    }

    const data = await response.json();
    const [course] = Array.isArray(data.courses) ? data.courses : [];
    liveCourseTitleEl.textContent = course?.title || "Course details are unavailable right now.";
  } catch (error) {
    console.error("Unable to load courses", error);
    liveCourseTitleEl.textContent = "Course details are unavailable right now.";
  }
}

function setFeedbackStatus(message, type = "") {
  if (!feedbackStatusEl) {
    return;
  }

  feedbackStatusEl.textContent = message;
  feedbackStatusEl.classList.toggle("is-error", type === "error");
  feedbackStatusEl.classList.toggle("is-success", type === "success");
}

function setFeedbackBusy(form, isBusy) {
  const submitButton = form?.querySelector('button[type="submit"]');

  if (!submitButton) {
    return;
  }

  if (!submitButton.dataset.readyLabel) {
    submitButton.dataset.readyLabel = submitButton.textContent;
  }

  submitButton.disabled = isBusy;
  submitButton.textContent = isBusy ? "Sending..." : submitButton.dataset.readyLabel;
}

async function submitFeedbackForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) {
    return;
  }

  const formData = new FormData(form);
  if (!formData.get("form-name")) {
    formData.set("form-name", form.getAttribute("name") || "course-feedback");
  }

  setFeedbackStatus("Sending feedback...");
  setFeedbackBusy(form, true);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });

    if (!response.ok) {
      throw new Error("Feedback request failed");
    }

    setFeedbackStatus("Feedback sent. Thank you.", "success");
    window.location.href = form.getAttribute("action") || "feedback-thanks.html";
  } catch (error) {
    console.error("Unable to send feedback", error);
    setFeedbackStatus(
      "The feedback form could not be sent. Please email tpalston@email.sc.edu with the subject Feedback from Greek with Xenophon.",
      "error"
    );
    setFeedbackBusy(form, false);
  }
}

function checkCourseIntroGreekPractice() {
  if (!courseIntroGreekInputEl || !courseIntroFeedbackEl) {
    return;
  }

  const expected = "ὁ Σωκράτης ἐν τῇ ἀγορᾷ τοὺς νέους περὶ ἀρετῆς διδάσκει.";
  const actual = normalizeGreekInput(courseIntroGreekInputEl.value);
  const isCorrect = actual === normalizeGreekInput(expected);

  courseIntroFeedbackEl.textContent = isCorrect
    ? "Excellent. You have used Greek letters, accents, breathings, and iota subscript."
    : "Not quite yet. Check the accents, breathings, and iota subscripts, then try again.";
  courseIntroFeedbackEl.classList.toggle("is-success", isCorrect);
  courseIntroFeedbackEl.classList.toggle("is-error", !isCorrect);
}

function setHeroMessage(lines) {
  if (!heroMessageEl) {
    return;
  }

  heroMessageEl.textContent = "";
  lines.forEach((line, index) => {
    if (index > 0) {
      heroMessageEl.appendChild(document.createElement("br"));
    }

    heroMessageEl.appendChild(document.createTextNode(line));
  });
}

function renderNav(roleConfig, session = readSession()) {
  if (!sidebarNav || !roleConfig) {
    return;
  }

  sidebarNav.textContent = "";
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navItems = roleConfig.nav.map((item, index) => {
    if (session?.professorPreview && index === 0 && item[1] === "Dashboard") {
      return [item[0], "Student Dashboard", item[2]];
    }

    return item;
  });

  if (session?.professorPreview) {
    navItems.push(["↩", "Professor Dashboard", "#professor-dashboard-return", "returnProfessorDashboard"]);
  }

  navItems.forEach(([icon, label, href, action], index) => {
    const link = document.createElement("a");
    link.href = href || "#";
    link.title = label;
    if (action) {
      link.dataset.navAction = action;
    }
    if (
      (!action && href === currentPage) ||
      (!action && currentPage === "index.html" && index === 0) ||
      ((currentPage.startsWith("lesson-") || currentPage === "lesson.html" || currentPage.startsWith("module-")) && href === "lessons.html") ||
      (currentPage === "activity.html" && href === "flashcards.html") ||
      ((currentPage === "resources.html" || currentPage.startsWith("principal-parts")) && href === "resources.html")
    ) {
      link.classList.add("active");
    }

    const iconEl = document.createElement("span");
    iconEl.className = "icon";
    iconEl.textContent = icon;
    link.appendChild(iconEl);
    link.appendChild(document.createTextNode(label));
    sidebarNav.appendChild(link);
  });
}

sidebarNav?.addEventListener("click", (event) => {
  const link = event.target.closest("[data-nav-action]");

  if (!link) {
    return;
  }

  if (link.dataset.navAction === "returnProfessorDashboard") {
    event.preventDefault();
    returnToProfessorDashboard();
  }
});

mainEl?.addEventListener("click", (event) => {
  const link = event.target.closest("[data-preview-return]");

  if (!link) {
    return;
  }

  event.preventDefault();
  returnToProfessorDashboard();
});

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function renderStatList(items) {
  return items.map(([label, value]) => `
    <div class="prof-stat">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderProfessorProgressBar(percent) {
  return `
    <div class="prof-progress-cell">
      <div class="prof-mini-bar" aria-hidden="true"><span style="width:${percent}%"></span></div>
      <strong>${percent}%</strong>
    </div>
  `;
}

function studentInitials(name) {
  return String(name || "Student")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "S";
}

function safeStyleUrl(value) {
  return String(value || "").replace(/["\\\n\r]/g, "");
}

function renderProfessorStudentCell(student) {
  const photoStyle = student.photoUrl
    ? ` style="background-image: url('${safeStyleUrl(student.photoUrl)}')"`
    : "";
  const photoClass = student.photoUrl ? " has-photo" : "";

  return `
    <div class="prof-student-cell">
      <span class="prof-student-photo${photoClass}"${photoStyle} aria-hidden="true">${studentInitials(student.name)}</span>
      <strong>${student.name}</strong>
    </div>
  `;
}

function renderProfessorRows(items, rowClass, renderRow) {
  return items.map((item) => `<div class="${rowClass}">${renderRow(item)}</div>`).join("");
}

function returnToProfessorDashboard() {
  const session = readSession();
  const professorSession = session?.professorReturnSession;

  if (professorSession) {
    saveSession(professorSession);
    window.location.href = "index.html";
  }
}

function renderPreviewContextBar(session) {
  if (!mainEl) {
    return;
  }

  const existingBar = mainEl.querySelector("[data-preview-context]");

  if (!session?.professorPreview) {
    existingBar?.remove();
    return;
  }

  const studentName = session.viewedStudent?.name || session.name || "student";
  const bar = existingBar || document.createElement("section");
  bar.className = "preview-context-bar";
  bar.dataset.previewContext = "";
  bar.innerHTML = `
    <div>
      <strong>Viewing ${studentName}</strong>
      <span>Student dashboard preview</span>
    </div>
    <nav aria-label="Preview navigation">
      <a href="index.html">Student Dashboard</a>
      <a href="lessons.html">Student Lessons</a>
      <a href="#professor-dashboard-return" data-preview-return>Professor Dashboard</a>
    </nav>
  `;

  if (!existingBar) {
    const hero = mainEl.querySelector(".hero");
    if (hero?.nextSibling) {
      mainEl.insertBefore(bar, hero.nextSibling);
    } else {
      mainEl.prepend(bar);
    }
  }
}

function getProfessorDashboardPlaceholder() {
  return buildProfessorDashboardFallback();
}

function renderProfessorEmpty(message) {
  return `<p class="empty-state">${message}</p>`;
}

async function loadProfessorDashboardData() {
  const response = await fetch("/api/professor-dashboard");

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Professor dashboard data could not be loaded.");
  }

  return response.json();
}

function renderProfessorDashboard(data = activeProfessorDashboardData, state = {}) {
  if (!professorDashboardEl) {
    return;
  }

  activeProfessorDashboardData = data;
  const loadingMessage = state.loading ? `<p class="prof-data-status">Loading live course data...</p>` : "";
  const errorMessage = state.error ? `<p class="prof-data-status error">${state.error}</p>` : "";
  const submissions = data.submissions?.length
    ? renderProfessorRows(data.submissions, "prof-submission-row", ([title, student, status]) => `
      <div>
        <strong>${title}</strong>
        <p>${student}</p>
      </div>
      <span>${status}</span>
    `)
    : renderProfessorEmpty("No submissions yet.");
  const attention = data.attention?.length
    ? renderProfessorRows(data.attention, "prof-alert-row", ([name, reason]) => `
      <div>
        <strong>${name}</strong>
        <p>${reason}</p>
      </div>
      <a href="#">View</a>
    `)
    : renderProfessorEmpty("No students currently need attention.");
  const lessonProgress = data.lessonProgress?.length
    ? renderProfessorRows(data.lessonProgress, "prof-distribution-row", ([label, detail, percent]) => `
      <div class="prof-distribution-copy">
        <strong>${label}</strong>
        <span>${detail}</span>
      </div>
      ${renderProfessorProgressBar(percent)}
    `)
    : renderProfessorEmpty("Lesson progress will appear after the roster loads.");
  const grades = data.grades?.length
    ? renderProfessorRows(data.grades, "prof-distribution-row", ([label, detail, percent]) => `
      <div class="prof-distribution-copy">
        <strong>${label}</strong>
        <span>${detail}</span>
      </div>
      ${renderProfessorProgressBar(percent)}
    `)
    : renderProfessorEmpty("Grade distribution will appear after the roster loads.");

  professorDashboardEl.innerHTML = `
    ${loadingMessage}
    ${errorMessage}
    <section class="prof-summary-grid" aria-label="Professor dashboard summary">
      <article class="card prof-summary-card">
        <h3>Class Overview</h3>
        <div class="prof-stat-list">${renderStatList(data.overview)}</div>
      </article>

      <article class="card prof-summary-card">
        <h3>Submissions & Grading</h3>
        <div class="prof-stat-list">${renderStatList(data.grading)}</div>
        <a class="cta" href="#">Review Submissions <span>→</span></a>
      </article>

      <article class="card prof-summary-card">
        <h3>Weekly Activity</h3>
        <div class="prof-stat-list">${renderStatList(data.weeklyActivity)}</div>
      </article>
    </section>

    <section class="prof-main-grid">
      <article class="card prof-table-card">
        <div class="prof-card-heading">
          <div>
            <h3>Student Progress</h3>
            <p class="muted">Live roster from course memberships and student progress.</p>
          </div>
          <div class="prof-scroll-hint" aria-hidden="true">
            <span>↕</span>
            <span>Scroll</span>
            <span>→</span>
          </div>
        </div>
        <div class="prof-table-wrap" tabindex="0" aria-label="Student progress table. Scroll down and horizontally to see all students and columns.">
          <table class="prof-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Progress</th>
                <th>Current Lesson</th>
                <th>Level</th>
                <th>Avg Grade</th>
                <th>Last Activity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${data.students.length ? data.students.map((student) => `
                <tr>
                  <td>${renderProfessorStudentCell(student)}</td>
                  <td>${renderProfessorProgressBar(student.progress)}</td>
                  <td>${student.currentLesson}</td>
                  <td>${student.level}</td>
                  <td>${student.averageGrade}</td>
                  <td>${student.lastActivity}</td>
                  <td><span class="status-badge ${statusClass(student.status)}">${student.status}</span></td>
                  <td>
                    <div class="prof-actions">
                      <a href="#" data-view-student-dashboard="${student.email}">Dashboard</a>
                    </div>
                  </td>
                </tr>
              `).join("") : `
                <tr>
                  <td colspan="8">Loading student roster...</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </article>

      <aside class="prof-side-panel" aria-label="Professor action panels">
        <article class="card">
          <h3>Students Needing Attention</h3>
          <div class="prof-alert-list">${attention}</div>
        </article>

        <article class="card">
          <h3>Recent Submissions</h3>
          <div class="prof-submission-list">${submissions}</div>
          <a class="cta" href="#">View All Submissions <span>→</span></a>
        </article>
      </aside>
    </section>

    <section class="prof-bottom-grid">
      <article class="card">
        <h3>Lesson Progress Overview</h3>
        <div class="prof-distribution-list">${lessonProgress}</div>
      </article>

      <article class="card">
        <h3>Grade Distribution</h3>
        <div class="prof-distribution-list">${grades}</div>
      </article>
    </section>
  `;
}

function renderDashboardView(session) {
  const isProfessor = session.activeRole === "professor";

  renderMobilePractice(session);

  studentDashboardSections.forEach((section) => {
    section.hidden = isProfessor;
  });

  if (professorDashboardEl) {
    professorDashboardEl.hidden = !isProfessor;
  }

  if (isProfessor) {
    const loadId = professorDashboardLoadId + 1;
    professorDashboardLoadId = loadId;
    renderProfessorDashboard(getProfessorDashboardPlaceholder(), { loading: true });
    loadProfessorDashboardData()
      .then((data) => {
        if (loadId === professorDashboardLoadId) {
          renderProfessorDashboard(data);
        }
      })
      .catch((error) => {
        if (loadId === professorDashboardLoadId) {
          renderProfessorDashboard(getProfessorDashboardPlaceholder(), {
            error: error.message || "Professor dashboard data could not be loaded."
          });
        }
      });
    return;
  }

  renderDashboardProgress(session);
}

professorDashboardEl?.addEventListener("click", (event) => {
  const link = event.target.closest("[data-view-student-dashboard]");

  if (!link) {
    return;
  }

  event.preventDefault();

  const student = activeProfessorDashboardData.students.find(
    (candidate) => candidate.email === link.dataset.viewStudentDashboard
  );

  if (!student) {
    return;
  }

  const currentSession = readSession();
  const previewSession = {
    ...buildStudentPreviewSession(student),
    professorReturnSession:
      currentSession?.activeRole === "professor"
        ? currentSession
        : currentSession?.professorReturnSession || null
  };

  showDashboard(saveSession(previewSession));
});

function showDashboard(session) {
  const roleConfig = ROLE_DASHBOARDS[session.activeRole] || ROLE_DASHBOARDS.student;

  document.body.classList.remove("landing-active");
  document.body.classList.add("dashboard-active");

  if (dashboardContextEl) {
    dashboardContextEl.textContent = roleConfig.context;
  }

  if (dashboardHeadingEl) {
    dashboardHeadingEl.textContent = roleConfig.heading;
  }

  setHeroMessage(roleConfig.lines);
  renderNav(roleConfig, session);
  renderPreviewContextBar(session);
  renderDashboardView(session);
  renderLessonsPage(session);

  if (profileNameEl) {
    profileNameEl.textContent = session.name;
  }

  if (profileSummaryEl) {
    const assignedRoles = session.roles.map((role) => ROLE_LABELS[role]).join(", ");
    profileSummaryEl.textContent = `${ROLE_LABELS[session.activeRole]} view · ${assignedRoles}`;
  }

  if (profileLinkEl) {
    profileLinkEl.textContent = "View Profile →";
  }

  renderProfileCard(session);
  applyGreekTextStyling();

  refreshLessonMetadataCatalog().then((didUpdate) => {
    if (!didUpdate && hasLiveLessonMetadata) {
      return;
    }

    const latestSession = readSession() || session;
    renderDashboardView(latestSession);
    renderLessonsPage(latestSession);
    renderProfileCard(latestSession);
    applyGreekTextStyling();
  });
}

function renderProfileCard(session = readSession()) {
  if (
    !window.profileStore ||
    !profileAvatarEl ||
    !profileNameEl ||
    !profileSummaryEl ||
    !profileLinkEl
  ) {
    return;
  }

  const profile = window.profileStore.loadProfile(session?.email);
  const hasProfile = Boolean(profile.name || profile.summary || profile.photoUrl || profile.photoDataUrl);
  const photoUrl = profile.photoUrl || profile.photoDataUrl;

  setProfileAvatar(photoUrl);

  if (session) {
    const assignedRoles = session.roles.map((role) => ROLE_LABELS[role]).join(", ");
    const pageLessonContext = getPageLessonContext();
    profileNameEl.textContent = profile.name || session.name || getEmailPrefix(session.email);
    profileSummaryEl.textContent =
      pageLessonContext ||
      profile.summary ||
      (session.professorPreview
        ? "Professor preview · Student progress"
        : `${ROLE_LABELS[session.activeRole]} view · ${assignedRoles}`);
    profileLinkEl.textContent = session.professorPreview
      ? "View Student Profile →"
      : hasProfile ? "View Profile →" : "Complete Profile →";
  } else if (hasProfile) {
    profileNameEl.textContent = profile.name || "Student Profile";
    profileSummaryEl.textContent =
      profile.summary || "Your dashboard profile is ready to review.";
    profileLinkEl.textContent = "View Profile →";
  } else {
    profileNameEl.textContent = "Student Profile";
    profileSummaryEl.textContent =
      "Your name, photo, and learner details will appear here after profile completion.";
    profileLinkEl.textContent = "Complete Profile →";
  }

  if (session?.email && window.profileStore.loadRemoteProfile) {
    window.profileStore.loadRemoteProfile(session.email)
      .then((remoteProfile) => {
        const remotePhotoUrl = remoteProfile.photoUrl || remoteProfile.photoDataUrl;
        const remoteHasProfile = Boolean(remoteProfile.name || remoteProfile.summary || remotePhotoUrl);

        setProfileAvatar(remotePhotoUrl);

        if (remoteHasProfile) {
          profileNameEl.textContent = remoteProfile.name || session.name || getEmailPrefix(session.email);
          const pageLessonContext = getPageLessonContext();
          profileSummaryEl.textContent =
            pageLessonContext ||
            remoteProfile.summary ||
            (session.professorPreview ? "Professor preview · Student progress" : profileSummaryEl.textContent);
          profileLinkEl.textContent = session.professorPreview ? "View Student Profile →" : "View Profile →";
        }
      })
      .catch(() => {
        // Local profile data remains available when the API is not running.
      });
  }
}

function setProfileAvatar(photoUrl) {
  const nextPhotoUrl = photoUrl || DEFAULT_PROFILE_PHOTO_URL;

  if (!profileAvatarEl) {
    return;
  }

  const image = new Image();

  image.addEventListener("load", () => {
    profileAvatarEl.style.backgroundImage = `url("${nextPhotoUrl}")`;
    profileAvatarEl.classList.add("has-photo");
  }, { once: true });

  image.addEventListener("error", () => {
    if (nextPhotoUrl === DEFAULT_PROFILE_PHOTO_URL) {
      profileAvatarEl.style.backgroundImage = "";
      profileAvatarEl.classList.remove("has-photo");
      return;
    }

    setProfileAvatar("");
  }, { once: true });

  image.src = nextPhotoUrl;
}

function renderRoleChoices(user) {
  if (!rolePanel || !roleOptionsEl || !loginFormPanel) {
    return;
  }

  roleOptionsEl.textContent = "";
  roleTitleEl.textContent = `Welcome, ${user.name}`;

  user.roles.forEach((role) => {
    const button = document.createElement("button");
    button.className = "role-choice";
    button.type = "button";
    button.dataset.role = role;
    button.innerHTML = `${ROLE_LABELS[role]} <span>Open view →</span>`;
    button.addEventListener("click", () => showDashboard(writeSession(user, role)));
    roleOptionsEl.appendChild(button);
  });

  loginFormPanel.hidden = true;
  rolePanel.hidden = false;
}

function resetLoginPanel() {
  if (loginFormPanel) {
    loginFormPanel.hidden = false;
  }

  if (rolePanel) {
    rolePanel.hidden = true;
  }

  if (loginStatusEl) {
    loginStatusEl.textContent = "";
  }

  if (registerStatusEl) {
    registerStatusEl.textContent = "";
  }
}

function setAuthMode(mode, focusFirstField = false) {
  const isRegister = mode === "register";

  authTabs.forEach((tab) => {
    const isActive = tab.dataset.authTab === mode;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  if (registerForm) {
    registerForm.hidden = !isRegister;
  }

  if (loginForm) {
    loginForm.hidden = isRegister;
  }

  if (loginStatusEl) {
    loginStatusEl.textContent = "";
  }

  if (registerStatusEl) {
    registerStatusEl.textContent = "";
  }

  if (!focusFirstField) {
    return;
  }

  const target = isRegister ? registerFirstNameInput : loginEmailInput;
  target?.focus();
}

function setAuthBusy(form, isBusy) {
  form?.querySelectorAll("input, button").forEach((control) => {
    control.disabled = isBusy;
  });
}

function setFieldError(input, hasError) {
  input?.setAttribute("aria-invalid", String(Boolean(hasError)));
}

function selectDefaultRole(user) {
  return user.roles.includes("student") ? "student" : user.roles[0];
}

function handleAuthenticatedUser(user) {
  if (!user?.roles?.length) {
    throw new Error("This account has no assigned course role.");
  }

  if (user.roles.length === 1 || user.roles.includes("student")) {
    showDashboard(writeSession(user, selectDefaultRole(user)));
    return;
  }

  renderRoleChoices(user);
}

function getDevelopmentFallbackUser(email, password) {
  const devPassword = window.xenophonAuth?.DEV_CLASS_PASSWORD;

  if (!devPassword || password !== devPassword) {
    return null;
  }

  const user = findUserByEmail(email);

  if (!user) {
    return null;
  }

  return {
    ...user,
    progress: hydrateProgress(user.progress),
    course: user.course || {
      code: "GREK 110 J10",
      title: "Learn Ancient Greek with Xenophon",
      term: "Spring 2027"
    }
  };
}

function performLogin({ email, password, statusMessage = "Signing in..." }) {
  setFieldError(loginEmailInput, !email);
  setFieldError(loginPasswordInput, !password);

  if (!email || !password) {
    loginStatusEl.textContent = "Email and password are required.";
    return;
  }

  loginEmailInput.value = email;
  loginStatusEl.textContent = statusMessage;
  setAuthBusy(loginForm, true);
  if (quickDevLoginButton) {
    quickDevLoginButton.disabled = true;
  }

  window.xenophonAuth.loginStudent({ email, password })
    .then((user) => {
      window.xenophonAuth.rememberVisiblePassword?.(email, password);
      loginPasswordInput.value = "";
      handleAuthenticatedUser(user);
    })
    .catch((error) => {
      const fallbackUser = getDevelopmentFallbackUser(email, password);

      if (fallbackUser) {
        window.xenophonAuth.rememberVisiblePassword?.(email, password);
        loginPasswordInput.value = "";
        handleAuthenticatedUser(fallbackUser);
        return;
      }

      loginStatusEl.textContent = error.message || "Sign in failed.";
      setFieldError(loginPasswordInput, error.message === window.xenophonAuth.DEV_CLASS_PASSWORD_MESSAGE);
    })
    .finally(() => {
      setAuthBusy(loginForm, false);
      if (quickDevLoginButton) {
        quickDevLoginButton.disabled = false;
      }
    });
}

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => setAuthMode(tab.dataset.authTab, true));
});

feedbackFormEl?.addEventListener("submit", submitFeedbackForm);
courseIntroCheckButton?.addEventListener("click", checkCourseIntroGreekPractice);
courseIntroGreekInputEl?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkCourseIntroGreekPractice();
  }
});

authOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.authOpen || "register";
    document.querySelector("#login")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setAuthMode(mode, true);
  });
});

document.addEventListener("click", (event) => {
  const openLink = event.target.closest("[data-achievements-open]");
  const closeButton = event.target.closest("[data-achievements-close]");

  if (openLink) {
    event.preventDefault();
    openAchievementDialog(getUserProgress(readSession()));
    return;
  }

  if (closeButton) {
    event.preventDefault();
    closeAchievementDialog();
  }
});

document.addEventListener("keydown", (event) => {
  const dialog = document.querySelector("[data-achievements-dialog]");

  if (event.key === "Escape") {
    closeAchievementDialog();
    return;
  }

  if (event.key !== "Tab" || !dialog || dialog.hidden) {
    return;
  }

  const focusable = Array.from(dialog.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"));

  if (!focusable.length) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

registerForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = registerFirstNameInput.value.trim();
  const lastName = registerLastNameInput.value.trim();
  const email = normalizeEmail(registerEmailInput.value);
  const password = registerPasswordInput.value;

  setFieldError(registerFirstNameInput, !firstName);
  setFieldError(registerLastNameInput, !lastName);
  setFieldError(registerEmailInput, !email);
  setFieldError(registerPasswordInput, !password);

  if (!firstName || !lastName || !email || !password) {
    registerStatusEl.textContent = "Please complete every registration field.";
    return;
  }

  registerEmailInput.value = email;
  registerStatusEl.textContent = "Creating your student account...";
  setAuthBusy(registerForm, true);

  window.xenophonAuth.registerStudent({ firstName, lastName, email, password })
    .then((user) => {
      window.xenophonAuth.rememberVisiblePassword?.(email, password);
      registerPasswordInput.value = "";
      handleAuthenticatedUser(user);
    })
    .catch((error) => {
      registerStatusEl.textContent = error.message || "Registration failed.";
      setFieldError(registerPasswordInput, error.message === window.xenophonAuth.DEV_CLASS_PASSWORD_MESSAGE);
    })
    .finally(() => {
      setAuthBusy(registerForm, false);
    });
});

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = normalizeEmail(loginEmailInput.value);
  const password = loginPasswordInput.value;

  performLogin({ email, password });
});

quickDevLoginButton?.addEventListener("click", () => {
  setAuthMode("login");
  performLogin({
    email: "tpalston@email.sc.edu",
    password: window.xenophonAuth?.DEV_CLASS_PASSWORD || "xenophon",
    statusMessage: "Signing in with the developer account..."
  });
});

loginBackButton?.addEventListener("click", () => {
  resetLoginPanel();
  loginPasswordInput.value = "";
  loginPasswordInput.focus();
});

logoutButton?.addEventListener("click", () => {
  clearSession();
  if (!loginFormPanel) {
    window.location.href = "index.html";
    return;
  }

  resetLoginPanel();
  setAuthMode("login");
  document.body.classList.remove("dashboard-active");
  document.body.classList.add("landing-active");
  loginEmailInput?.focus();
});

if (new URLSearchParams(window.location.search).has("login")) {
  clearSession();
}

const savedSession = readSession();
const isPublicModulePage = document.body.classList.contains("module-page");
if (savedSession?.activeRole) {
  showDashboard(savedSession);
  renderGradesPage(savedSession);
} else if (heroMessageEl && progressTracker) {
  setHeroMessage(ROLE_DASHBOARDS.student.lines);
} else if (isPublicModulePage) {
  renderNav(ROLE_DASHBOARDS.student, null);
} else if (!loginForm) {
  window.location.href = "index.html";
}

window.addEventListener("hashchange", renderUnit0FromLocation);
renderUnit0FromLocation();
renderProfileCard();
renderAlphabetTable();
bindLessonAudio();
bindExerciseChecks();
bindSidebarToggle();
renderLiveCourseTitle();
applyGreekTextStyling();
