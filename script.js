const COURSE_USERS = [
  {
    name: "Tom Alston",
    email: "tpalston@email.sc.edu",
    password: "xenophon",
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
    password: "xenophon",
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
    password: "xenophon",
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
    professorPreview: true
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
      progress: 68,
      currentLessonId: "lesson-12",
      currentLesson: "Lesson 12 — The Examined Life",
      level: "Erudite",
      levelNumber: 7,
      averageGrade: "91%",
      lastActivity: "Today",
      status: "Active"
    },
    {
      name: "Sarah Kim",
      email: "sarah.kim@email.sc.edu",
      progress: 42,
      currentLessonId: "lesson-7",
      currentLesson: "Lesson 7 — Examining Oneself",
      level: "Novice",
      levelNumber: 2,
      averageGrade: "78%",
      lastActivity: "3 days ago",
      status: "At Risk"
    },
    {
      name: "John Davis",
      email: "john.davis@email.sc.edu",
      progress: 35,
      currentLessonId: "lesson-5",
      currentLesson: "Lesson 5 — Learning Through Questioning",
      level: "Novice",
      levelNumber: 1,
      averageGrade: "65%",
      lastActivity: "6 days ago",
      status: "Needs Attention"
    },
    {
      name: "Alex Chen",
      email: "alex.chen@email.sc.edu",
      progress: 80,
      currentLessonId: "lesson-15",
      currentLesson: "Lesson 15 — Hope and Expectation",
      level: "Sophos",
      levelNumber: 9,
      averageGrade: "94%",
      lastActivity: "Yesterday",
      status: "Active"
    },
    {
      name: "Maria Lopez",
      email: "maria.lopez@email.sc.edu",
      progress: 55,
      currentLessonId: "lesson-9",
      currentLesson: "Lesson 9 — Socrates Questions All",
      level: "Apprentice",
      levelNumber: 4,
      averageGrade: "82%",
      lastActivity: "2 days ago",
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
const studentDashboardSections = document.querySelectorAll("[data-student-dashboard]");
const professorDashboardEl = document.querySelector("[data-professor-dashboard]");

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function findCourseUser(email, password) {
  return COURSE_USERS.find(
    (user) =>
      normalizeEmail(user.email) === normalizeEmail(email) &&
      user.password === password
  );
}

function findUserByEmail(email) {
  return COURSE_USERS.find((user) => normalizeEmail(user.email) === normalizeEmail(email || ""));
}

function findLesson(lessonId) {
  const normalizedId = normalizeLessonId(lessonId);
  return COURSE_LESSONS.find((lesson) => lesson.id === normalizedId) || COURSE_LESSONS[0];
}

function getUserProgress(session) {
  if (session?.previewProgress) {
    return session.previewProgress;
  }

  return findUserByEmail(session?.email)?.progress || COURSE_USERS[2].progress;
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
    activeRole
  };

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

function renderNav(roleConfig) {
  if (!sidebarNav || !roleConfig) {
    return;
  }

  sidebarNav.textContent = "";
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  roleConfig.nav.forEach(([icon, label, href], index) => {
    const link = document.createElement("a");
    link.href = href || "#";
    link.title = label;
    if (
      href === currentPage ||
      (currentPage === "index.html" && index === 0) ||
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

function renderProfessorRows(items, rowClass, renderRow) {
  return items.map((item) => `<div class="${rowClass}">${renderRow(item)}</div>`).join("");
}

function renderProfessorDashboard() {
  if (!professorDashboardEl) {
    return;
  }

  const data = PROFESSOR_DASHBOARD_DATA;
  professorDashboardEl.innerHTML = `
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
            <p class="muted">Classroom overview for GREK 110 J10.</p>
          </div>
          <div class="prof-scroll-hint" aria-hidden="true">
            <span>←</span>
            <span>Scroll</span>
            <span>→</span>
          </div>
        </div>
        <div class="prof-table-wrap" tabindex="0" aria-label="Student progress table. Scroll horizontally to see all columns.">
          <table class="prof-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Progress</th>
                <th>Current Lesson</th>
                <th>Level</th>
                <th>Average Grade</th>
                <th>Last Activity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${data.students.map((student) => `
                <tr>
                  <td><strong>${student.name}</strong></td>
                  <td>${renderProfessorProgressBar(student.progress)}</td>
                  <td>${student.currentLesson}</td>
                  <td>${student.level}</td>
                  <td>${student.averageGrade}</td>
                  <td>${student.lastActivity}</td>
                  <td><span class="status-badge ${statusClass(student.status)}">${student.status}</span></td>
                  <td>
                    <div class="prof-actions">
                      <a href="#" data-view-student-dashboard="${student.email}">View Student Dashboard</a>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>

      <aside class="prof-side-panel" aria-label="Professor action panels">
        <article class="card">
          <h3>Students Needing Attention</h3>
          <div class="prof-alert-list">
            ${renderProfessorRows(data.attention, "prof-alert-row", ([name, reason]) => `
              <div>
                <strong>${name}</strong>
                <p>${reason}</p>
              </div>
              <a href="#">View</a>
            `)}
          </div>
        </article>

        <article class="card">
          <h3>Recent Submissions</h3>
          <div class="prof-submission-list">
            ${renderProfessorRows(data.submissions, "prof-submission-row", ([title, student, status]) => `
              <div>
                <strong>${title}</strong>
                <p>${student}</p>
              </div>
              <span>${status}</span>
            `)}
          </div>
          <a class="cta" href="#">View All Submissions <span>→</span></a>
        </article>
      </aside>
    </section>

    <section class="prof-bottom-grid">
      <article class="card">
        <h3>Lesson Progress Overview</h3>
        <div class="prof-distribution-list">
          ${renderProfessorRows(data.lessonProgress, "prof-distribution-row", ([label, detail, percent]) => `
            <div class="prof-distribution-copy">
              <strong>${label}</strong>
              <span>${detail}</span>
            </div>
            ${renderProfessorProgressBar(percent)}
          `)}
        </div>
      </article>

      <article class="card">
        <h3>Grade Distribution</h3>
        <div class="prof-distribution-list">
          ${renderProfessorRows(data.grades, "prof-distribution-row", ([label, detail, percent]) => `
            <div class="prof-distribution-copy">
              <strong>${label}</strong>
              <span>${detail}</span>
            </div>
            ${renderProfessorProgressBar(percent)}
          `)}
        </div>
      </article>
    </section>
  `;
}

function renderDashboardView(session) {
  const isProfessor = session.activeRole === "professor";

  studentDashboardSections.forEach((section) => {
    section.hidden = isProfessor;
  });

  if (professorDashboardEl) {
    professorDashboardEl.hidden = !isProfessor;
  }

  if (isProfessor) {
    renderProfessorDashboard();
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

  const student = PROFESSOR_DASHBOARD_DATA.students.find(
    (candidate) => candidate.email === link.dataset.viewStudentDashboard
  );

  if (!student) {
    return;
  }

  showDashboard(buildStudentPreviewSession(student));
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
  renderNav(roleConfig);
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
  const hasProfile = Boolean(profile.name || profile.summary || profile.photoDataUrl);

  if (profile.photoDataUrl) {
    profileAvatarEl.style.backgroundImage = `url("${profile.photoDataUrl}")`;
    profileAvatarEl.classList.add("has-photo");
  } else {
    profileAvatarEl.style.backgroundImage = `url("${DEFAULT_PROFILE_PHOTO_URL}")`;
    profileAvatarEl.classList.add("has-photo");
  }

  if (session) {
    const assignedRoles = session.roles.map((role) => ROLE_LABELS[role]).join(", ");
    profileNameEl.textContent = profile.name || getEmailPrefix(session.email);
    profileSummaryEl.textContent =
      profile.summary || `${ROLE_LABELS[session.activeRole]} view · ${assignedRoles}`;
    profileLinkEl.textContent = hasProfile ? "View Profile →" : "Complete Profile →";
    return;
  }

  if (hasProfile) {
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

  const user = findCourseUser(loginEmailInput.value, loginPasswordInput.value);

  if (!user) {
    loginStatusEl.textContent = "Those credentials did not match a course user.";
    return;
  }

  if (user.roles.length === 1) {
    showDashboard(writeSession(user, user.roles[0]));
    return;
  }

  renderRoleChoices(user);
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
