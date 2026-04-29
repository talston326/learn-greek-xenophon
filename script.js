const COURSE_USERS = [
  {
    name: "Tom Alston",
    email: "tpalston@email.sc.edu",
    roles: ["administrator", "professor", "student"],
    progress: {
      currentLessonId: "lesson-4",
      currentSegmentId: "lesson-start",
      completedLessons: ["intro-1", "intro-2", "intro-3", "lesson-1", "lesson-2", "lesson-3"],
      passedQuizzes: ["intro-1", "intro-2", "intro-3", "lesson-1", "lesson-2", "lesson-3"],
      completedExercises: {
        "intro-1": ["orientation", "quiz"],
        "intro-2": ["letter-match", "breathing", "diphthong", "combo", "quiz"],
        "intro-3": ["phonetics", "quiz"],
        "lesson-1": ["vocabulary", "reading", "quiz"],
        "lesson-2": ["forms", "translation", "quiz"],
        "lesson-3": ["parsing", "composition", "quiz"],
        "lesson-4": ["noun-endings"]
      },
      completedLessonsCount: 6,
      totalLessonsCount: 51,
      level: 7,
      levelLabel: "Erudite",
      xp: 385,
      nextLevelXp: 500,
      nextLevelLabel: "Sophos",
      weeklyCompleted: 4,
      weeklyGoal: 5,
      recentActivity: [
        { icon: "📘", type: "book", title: "Completed: Xenophon, Memorabilia 1.2.20", when: "Today", xp: 60 },
        { icon: "☰", type: "review", title: "Reviewed: Vocabulary Set 7", when: "Yesterday", xp: 20 },
        { icon: "✎", type: "exercise", title: "Completed Exercise: Translation Drill 12", when: "2 days ago", xp: 25 }
      ],
      achievements: [
        { icon: "👣", className: "b1", label: "First Steps" },
        { icon: "", className: "b2 wreath-badge", label: "Word Collector" },
        { icon: "🏛", className: "b3", label: "Grammar Novice" },
        { icon: "🦉", className: "b4 owl-badge", label: "Diligent Learner" },
        { icon: "🏆", className: "b5", label: "Sophos" }
      ]
    }
  },
  {
    name: "Mark Beck",
    email: "BECKMA@mailbox.sc.edu",
    roles: ["professor", "student"],
    progress: {
      currentLessonId: "intro-1",
      currentSegmentId: "intro-part-1",
      completedLessons: [],
      passedQuizzes: [],
      completedExercises: {},
      completedLessonsCount: 0,
      totalLessonsCount: 51,
      level: 0,
      levelLabel: "Novice",
      xp: 0,
      nextLevelXp: 100,
      nextLevelLabel: "Apprentice",
      weeklyCompleted: 0,
      weeklyGoal: 5,
      recentActivity: [],
      achievements: []
    }
  },
  {
    name: "John Doe",
    email: "JohnD@email.sc.edu",
    roles: ["student"],
    progress: {
      currentLessonId: "intro-1",
      currentSegmentId: "intro-part-1",
      completedLessons: [],
      passedQuizzes: [],
      completedExercises: {},
      completedLessonsCount: 0,
      totalLessonsCount: 51,
      level: 0,
      levelLabel: "Novice",
      xp: 0,
      nextLevelXp: 100,
      nextLevelLabel: "Apprentice",
      weeklyCompleted: 0,
      weeklyGoal: 5,
      recentActivity: [],
      achievements: []
    }
  }
];

const ROLE_LABELS = {
  administrator: "Administrator",
  professor: "Professor",
  student: "Student"
};

const LESSON_URLS = {
  "intro-1": "lesson-introduction.html#intro-part-1",
  "intro-2": "lesson-introduction.html#intro-part-2",
  "intro-3": "lesson-introduction.html#intro-part-2",
  "lesson-4": "lesson-4-first-declension.html"
};

const COURSE_MODULES = [
  {
    id: "introduction",
    label: "Introduction",
    title: "The Greek Alphabet",
    subtitle: "Entering the World of Greek",
    type: "intro",
    lessons: [
      { id: "intro-1", title: "What is Ancient Greek?", grammar: "Alphabet overview, historical context", exerciseIds: ["orientation", "quiz"] },
      { id: "intro-2", title: "The Greek Alphabet", grammar: "Letters, pronunciation, diphthongs", exerciseIds: ["letter-match", "breathing", "diphthong", "combo", "quiz"] },
      { id: "intro-3", title: "Hearing and Speaking Greek", grammar: "Accent, syllables, phonetics", exerciseIds: ["phonetics", "quiz"] }
    ]
  },
  {
    id: "module-1",
    label: "Module I",
    title: "σοφία (Wisdom and Socrates)",
    description: "Learning, inquiry, and the examined life",
    lessons: [
      { id: "lesson-1", title: "Socrates Teaches", grammar: "Nominative singular, accusative singular, present active indicative" },
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
    description: "Endurance, fear, and action in crisis",
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
    description: "Mastery of self, household, and desire",
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
    description: "Law, duty, and moral responsibility",
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
      number: numericLesson ? `Lesson ${numericLesson}` : `Intro ${introLesson || index + 1}`,
      subtitle: lesson.grammar || module.description || module.subtitle,
      url: LESSON_URLS[lesson.id] || `lessons.html#${lesson.id}`,
      exerciseIds: lesson.exerciseIds || ["reading", "practice", "quiz"]
    };
  })
);

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
  {
    id: "vocab-sophia-001",
    lessonId: "lesson-1",
    sortOrder: 1,
    lemma: "σοφία",
    displayForm: "σοφία",
    transliteration: "sophia",
    partOfSpeech: "noun",
    gloss: "wisdom",
    morphology: { gender: "feminine" },
    audioUrl: null,
    review: { dueToday: true, confidence: 3, correctCount: 4, incorrectCount: 2 }
  },
  {
    id: "vocab-manthano-001",
    lessonId: "lesson-1",
    sortOrder: 2,
    lemma: "μανθάνω",
    displayForm: "μανθάνω",
    transliteration: "manthano",
    partOfSpeech: "verb",
    gloss: "I learn",
    morphology: { tense: "present", voice: "active" },
    audioUrl: null,
    review: { dueToday: false, confidence: 2, correctCount: 3, incorrectCount: 4 }
  },
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
  const lessonIndex = COURSE_LESSONS.findIndex((courseLesson) => courseLesson.id === lesson.id);

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

  if (status === "completed") {
    return "Review";
  }

  return status === "available" ? "Start" : "";
}

function getLessonHref(lesson, progress) {
  if (lesson.id === normalizeLessonId(progress.currentLessonId)) {
    return getContinueUrl(progress);
  }

  return lesson.url;
}

function getEmailPrefix(email) {
  return String(email || "")
    .split("@")[0]
    .trim() || "Student";
}

function buildPreviewProgress(student) {
  const currentLessonId = normalizeLessonId(student.currentLessonId);
  const currentIndex = COURSE_LESSONS.findIndex((lesson) => lesson.id === currentLessonId);
  const completedLessons = COURSE_LESSONS
    .slice(0, Math.max(0, currentIndex))
    .map((lesson) => lesson.id);
  const completedLessonsCount = Math.round((student.progress / 100) * COURSE_LESSONS.length);

  return {
    currentLessonId,
    currentSegmentId: "lesson-start",
    completedLessons,
    passedQuizzes: completedLessons,
    completedExercises: {},
    completedLessonsCount,
    totalLessonsCount: COURSE_LESSONS.length,
    completionPercent: student.progress,
    level: student.levelNumber,
    levelLabel: student.level,
    xp: Math.round(student.progress * 5),
    nextLevelXp: 500,
    nextLevelLabel: student.level === "Sophos" ? "Philologos" : "Sophos",
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
      ["📖", "Lessons", "lessons.html"],
      ["🗺️", "Maps", "maps.html"],
      ["✏️", "Exercises", "#"],
      ["📊", "Gradebook", "#"],
      ["🗂️", "Course Content", "#"],
      ["⚙️", "Site Settings", "#"]
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
      ["📖", "Lessons", "lessons.html"],
      ["🗺️", "Maps", "maps.html"],
      ["💬", "Discussions", "#"],
      ["⚙️", "Settings", "#"]
    ]
  },
  student: {
    context: "Student Dashboard",
    heading: "Χαῖρε, μαθητά!",
    lines: [
      "Welcome back to GREK 110 J10.",
      "Keep up your excellent progress in learning Ancient Greek with Xenophon."
    ],
    nav: [
      ["🏠", "Dashboard", "index.html"],
      ["📖", "Lessons", "lessons.html"],
      ["🗺️", "Maps", "maps.html"],
      ["📄", "Readings", "#"],
      ["Αα", "Vocabulary", "#"],
      ["🏛️", "Grammar", "#"],
      ["✏️", "Exercises", "#"],
      ["🌀", "Review", "#"],
      ["💬", "Discussions", "#"],
      ["📁", "Resources", "#"],
      ["📊", "Grades", "#"],
      ["⚙️", "Settings", "#"]
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

const SESSION_STORAGE_KEY = "learn-greek-session";
const SIDEBAR_STORAGE_KEY = "learn-greek-sidebar-collapsed";
const DEFAULT_PROFILE_PHOTO_URL = "assets/generic-profile.svg";

const GREEK_ALPHABET = [
  ["Α", "α", "ἄλφα", "a as in father or short a in top", "ἀνήρ", "man", "alpha"],
  ["Β", "β", "βῆτα", "b", "βίος", "life", "beta"],
  ["Γ", "γ", "γάμμα", "g; before γ, κ, ξ, χ it sounds like ng", "γῆ", "earth", "gamma"],
  ["Δ", "δ", "δέλτα", "d", "δῶρον", "gift", "delta"],
  ["Ε", "ε", "ἒ ψιλόν", "e as in get", "ἐγώ", "I", "epsilon"],
  ["Ζ", "ζ", "z or sd/dz by classroom convention", "ζωή", "life", "zeta"],
  ["Η", "η", "ἦτα", "long e", "ἡμέρα", "day", "eta"],
  ["Θ", "θ", "θῆτα", "aspirated t", "θεός", "god", "theta"],
  ["Ι", "ι", "ἰῶτα", "i as in machine, short or long", "ἰχθύς", "fish", "iota"],
  ["Κ", "κ", "κάππα", "k without aspiration", "καλός", "beautiful", "kappa"],
  ["Λ", "λ", "λάμβδα", "l", "λόγος", "word, reason", "lambda"],
  ["Μ", "μ", "μῦ", "m", "μήτηρ", "mother", "mu"],
  ["Ν", "ν", "νῦ", "n", "ναῦς", "ship", "nu"],
  ["Ξ", "ξ", "ξῖ", "ks, like x in axe", "ξένος", "guest-friend, stranger", "xi"],
  ["Ο", "ο", "ὂ μικρόν", "short o", "ὁδός", "road", "omicron"],
  ["Π", "π", "πῖ", "p without aspiration", "παῖς", "child", "pi"],
  ["Ρ", "ρ", "ῥῶ", "trilled r; initial rho takes rough breathing", "ῥήτωρ", "speaker", "rho"],
  ["Σ", "σ, ς", "σίγμα", "s; final sigma ς ends a word", "σοφός", "wise", "sigma"],
  ["Τ", "τ", "ταῦ", "t without aspiration", "τιμή", "honor", "tau"],
  ["Υ", "υ", "ὖ ψιλόν", "u/y sound, as French tu", "ὕδωρ", "water", "upsilon"],
  ["Φ", "φ", "φῖ", "aspirated p", "φίλος", "friend", "phi"],
  ["Χ", "χ", "χῖ", "aspirated k", "χρόνος", "time", "chi"],
  ["Ψ", "ψ", "ψῖ", "ps, as in lips", "ψυχή", "soul", "psi"],
  ["Ω", "ω", "ὦ μέγα", "long o", "ὥρα", "season, hour", "omega"]
];

const loginForm = document.querySelector("[data-login-form]");
const loginEmailInput = document.querySelector("[data-login-email]");
const loginPasswordInput = document.querySelector("[data-login-password]");
const loginStatusEl = document.querySelector("[data-login-status]");
const loginFormPanel = document.querySelector("[data-login-form-panel]");
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
const progressRingEl = document.querySelector("[data-progress-ring]");
const progressHeadingEl = document.querySelector("[data-progress-heading]");
const progressSummaryEl = document.querySelector("[data-progress-summary]");
const currentLevelEl = document.querySelector("[data-current-level]");
const currentLevelLabelEl = document.querySelector("[data-current-level-label]");
const xpSummaryEl = document.querySelector("[data-xp-summary]");
const xpBarEl = document.querySelector("[data-xp-bar]");
const nextLevelEl = document.querySelector("[data-next-level]");
const weeklySummaryEl = document.querySelector("[data-weekly-summary]");
const weeklyBarEl = document.querySelector("[data-weekly-bar]");
const weeklyNoteEl = document.querySelector("[data-weekly-note]");
const learningPathEl = document.querySelector("[data-learning-path]");
const activityListEl = document.querySelector("[data-activity-list]");
const achievementListEl = document.querySelector("[data-achievement-list]");
const lessonsListEl = document.querySelector("[data-lessons-list]");
const lessonPageTitleEl = document.querySelector("[data-lesson-page-title]");
const lessonPageSummaryEl = document.querySelector("[data-lesson-page-summary]");
const liveCourseTitleEl = document.querySelector("[data-course-title-live]");
const studentDashboardSections = document.querySelectorAll("[data-student-dashboard]");
const professorDashboardEl = document.querySelector("[data-professor-dashboard]");
let mobilePracticeEl = document.querySelector("[data-mobile-practice]");

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function findUserByEmail(email) {
  return COURSE_USERS.find((user) => normalizeEmail(user.email) === normalizeEmail(email || ""));
}

function findLesson(lessonId) {
  const normalizedId = normalizeLessonId(lessonId);
  return COURSE_LESSONS.find((lesson) => lesson.id === normalizedId) || COURSE_LESSONS[0];
}

function getUserProgress(session) {
  if (session?.progress) {
    return session.progress;
  }

  if (session?.previewProgress) {
    return session.previewProgress;
  }

  return findUserByEmail(session?.email)?.progress || COURSE_USERS[2].progress;
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

  if (lesson.url.includes("#")) {
    return lesson.url;
  }

  return `${lesson.url}#${progress.currentSegmentId || "lesson-start"}`;
}

function getLessonStatus(lesson, progress) {
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
  try {
    const rawSession = window.localStorage.getItem(SESSION_STORAGE_KEY);
    return rawSession ? JSON.parse(rawSession) : null;
  } catch (error) {
    return null;
  }
}

function writeSession(user, activeRole) {
  const session = {
    name: user.name,
    email: user.email,
    roles: user.roles,
    activeRole,
    progress: user.progress || null,
    course: user.course || null
  };

  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  return session;
}

function saveSession(session) {
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  return session;
}

function clearSession() {
  window.localStorage.removeItem(SESSION_STORAGE_KEY);
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

function renderAlphabetTable() {
  if (!alphabetTableEl) {
    return;
  }

  alphabetTableEl.textContent = "";

  GREEK_ALPHABET.forEach(([upper, lower, name, sound, example, gloss, slug]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><span class="letter-pair"><strong>${upper}</strong><span>${lower}</span></span></td>
      <td>${name}</td>
      <td>${sound}</td>
      <td><span class="greek-example">${example}</span> <span class="muted">(${gloss})</span></td>
      <td><button class="audio-button" type="button" data-audio-src="assets/audio/alphabet/${slug}.mp3" data-speak-text="${example}" aria-label="Hear ${name} in ${example}">▶</button></td>
    `;
    alphabetTableEl.appendChild(row);
  });
}

function bindLessonAudio() {
  document.querySelectorAll("[data-speak-text]").forEach((button) => {
    button.addEventListener("click", () => {
      const audioSrc = button.dataset.audioSrc;
      const speakText = button.dataset.speakText;

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
    xpSummaryEl.innerHTML = `<span>Experience points toward next level</span><strong>${progress.xp} / ${progress.nextLevelXp}</strong>`;
  }

  if (xpBarEl) {
    const xpPercent = Math.min(100, Math.round((progress.xp / progress.nextLevelXp) * 100));
    xpBarEl.style.width = `${xpPercent}%`;
  }

  if (nextLevelEl) {
    nextLevelEl.textContent = `Next Level: ${progress.nextLevelLabel}`;
  }

  if (weeklySummaryEl) {
    weeklySummaryEl.textContent = `${progress.weeklyCompleted} / ${progress.weeklyGoal} lessons`;
  }

  if (weeklyBarEl) {
    const weeklyPercent = Math.min(100, Math.round((progress.weeklyCompleted / progress.weeklyGoal) * 100));
    weeklyBarEl.style.width = `${weeklyPercent}%`;
  }

  if (weeklyNoteEl) {
    const remaining = Math.max(0, progress.weeklyGoal - progress.weeklyCompleted);
    weeklyNoteEl.textContent = remaining === 1 ? "1 lesson to go." : `${remaining} lessons to go.`;
  }
}

function createModuleHeader(module, progress, isDashboard = false) {
  const moduleProgress = getModuleProgress(module, progress);
  const moduleLine = module.subtitle || module.description || "";
  const moduleMeta = [
    module.primaryText,
    `${moduleProgress.completedCount} of ${moduleProgress.totalCount} lessons complete`
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

  progress.achievements.forEach((achievement) => {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.innerHTML = `
      <div class="badge-icon ${achievement.className}">${achievement.icon}</div>
      <div>${achievement.label}</div>
    `;
    achievementListEl.appendChild(badge);
  });
}

function renderDashboardProgress(session) {
  const progress = getUserProgress(session);
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
    lessonPageSummaryEl.textContent = `Current lesson: ${currentLesson.number}. ${currentLesson.title}`;
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
      (currentPage.startsWith("lesson-") && href === "lessons.html")
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
  return {
    overview: [
      ["Total Students", "Loading"],
      ["Active This Week", "Loading"],
      ["Average Completion", "Loading"],
      ["Average Grade", "Loading"]
    ],
    grading: [
      ["Pending Submissions", "Loading"],
      ["Needs Review", "Loading"],
      ["Overdue", "Loading"]
    ],
    weeklyActivity: [
      ["Lessons Completed This Week", "Loading"],
      ["Average Completion", "Loading"],
      ["Most Active Lesson", "Loading"]
    ],
    students: [],
    attention: [],
    submissions: [],
    lessonProgress: [],
    grades: []
  };
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
    profileNameEl.textContent = profile.name || session.name || getEmailPrefix(session.email);
    profileSummaryEl.textContent =
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
          profileSummaryEl.textContent =
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
}

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  loginStatusEl.textContent = "Signing in...";

  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: loginEmailInput.value,
      password: loginPasswordInput.value
    })
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Those credentials did not match a course user.");
      }

      return data.user;
    })
    .then((user) => {
      if (!user?.roles?.length) {
        throw new Error("This account has no assigned course role.");
      }

      loginPasswordInput.value = "";

      if (user.roles.length === 1) {
        showDashboard(writeSession(user, user.roles[0]));
        return;
      }

      renderRoleChoices(user);
    })
    .catch((error) => {
      loginStatusEl.textContent = error.message || "Sign in failed.";
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
  document.body.classList.remove("dashboard-active");
  document.body.classList.add("landing-active");
  loginEmailInput?.focus();
});

if (new URLSearchParams(window.location.search).has("login")) {
  clearSession();
}

const savedSession = readSession();
if (savedSession?.activeRole) {
  showDashboard(savedSession);
} else if (heroMessageEl && progressTracker) {
  setHeroMessage(ROLE_DASHBOARDS.student.lines);
} else if (!loginForm) {
  window.location.href = "index.html";
}

renderProfileCard();
renderAlphabetTable();
bindLessonAudio();
bindExerciseChecks();
bindSidebarToggle();
renderLiveCourseTitle();
