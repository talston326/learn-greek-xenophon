(function () {
  const LESSONS = {
    "lesson-4": {
      id: "lesson-4",
      number: 4,
      title: "The Student and the Teacher",
      sampleNotice: "Sample pilot content for the reusable lesson-template sprint.",
      banner: {
        image: "assets/module-1-sophia-banner.jpeg",
        alt: "A quiet classical study scene representing Socratic teaching and learning",
        caption: "ὁ μαθητὴς παρὰ τῷ διδασκάλῳ μανθάνει."
      },
      pages: [
        {
          page: 1,
          slug: "lesson-4-page-1",
          title: "Reading",
          template: "reading"
        },
        {
          page: 2,
          slug: "lesson-4-page-2",
          title: "Language, Grammar, and Practice",
          template: "grammar"
        },
        {
          page: 3,
          slug: "lesson-4-page-3",
          title: "Enrichment and Capstone",
          template: "enrichment"
        }
      ],
      vocabulary: [
        {
          category: "Verbs",
          items: [
            { greek: "διδάσκει", english: "teaches" },
            { greek: "μανθάνει", english: "learns" },
            { greek: "γράφει", english: "writes" }
          ]
        },
        {
          category: "Nouns",
          items: [
            { greek: "ἡ παιδεία", english: "education, training" },
            { greek: "ἡ τέχνη", english: "skill, craft" },
            { greek: "ἡ γραφή", english: "writing" }
          ]
        },
        {
          category: "Adjectives",
          items: [
            { greek: "καλή", english: "good, noble, beautiful" },
            { greek: "σοφή", english: "wise" }
          ]
        },
        {
          category: "Prepositional Phrases",
          items: [
            { greek: "παρὰ τῷ διδασκάλῳ", english: "beside / with the teacher" }
          ]
        },
        {
          category: "Adverbs",
          items: [
            { greek: "καλῶς", english: "well" }
          ]
        },
        {
          category: "Conjunctions",
          items: [
            { greek: "καί", english: "and, also" }
          ]
        },
        {
          category: "Particles",
          items: [
            { greek: "δέ", english: "and, but; marks a new step" }
          ]
        },
        {
          category: "Proper Names and Adjectives",
          items: [
            { greek: "Ξενοφῶν", english: "Xenophon" },
            { greek: "Σωκρατικός", english: "Socratic" }
          ]
        }
      ],
      reading: {
        title: "Sample Reading",
        paragraphs: [
          {
            greek: "ὁ μαθητὴς παρὰ τῷ διδασκάλῳ μένει. ὁ διδάσκαλος τὴν παιδείαν καλὴν διδάσκει, καὶ ὁ μαθητὴς τὴν γραφὴν καλῶς μανθάνει.",
            gloss: [
              { greek: "ὁ μαθητής", english: "the student" },
              { greek: "παρὰ τῷ διδασκάλῳ", english: "with the teacher" },
              { greek: "τὴν παιδείαν καλήν", english: "good education/training" },
              { greek: "τὴν γραφήν", english: "writing" },
              { greek: "καλῶς μανθάνει", english: "learns well" }
            ]
          },
          {
            greek: "ἡ τέχνη οὐκ ἀεὶ ῥᾳδία ἐστίν· ἀλλὰ ἡ σπουδὴ καὶ ἡ παιδεία τὴν ψυχὴν ὠφελεῖ.",
            gloss: [
              { greek: "ἡ τέχνη", english: "the skill/craft" },
              { greek: "οὐκ ἀεὶ ῥᾳδία", english: "not always easy" },
              { greek: "ἡ σπουδή", english: "eagerness, serious effort" },
              { greek: "τὴν ψυχήν", english: "the soul, mind" },
              { greek: "ὠφελεῖ", english: "helps, benefits" }
            ]
          }
        ]
      },
      wordStudy: {
        label: "Word Building",
        blocks: [
          {
            title: "First-declension patterns",
            body: [
              "Many first-declension nouns are feminine and often end in -α or -η in the nominative singular.",
              "When you see -αν or -ην, ask whether the noun is acting as a direct object."
            ]
          },
          {
            title: "Family resemblance",
            body: [
              "παιδεία, γραφή, and τέχνη all name practices or forms of training. Watch how the article and ending travel with the noun."
            ]
          }
        ]
      },
      grammar: {
        intro: "Sample grammar text for the pilot renderer. Replace this with final Lesson 4 grammar when authoring the production lesson.",
        sections: [
          {
            id: "first-declension",
            title: "First Declension Nouns",
            body: [
              "First-declension nouns often use -η or -α in the nominative singular and -ην or -αν in the accusative singular.",
              "The article is a strong signal: ἡ marks a nominative feminine subject, while τήν marks an accusative feminine object."
            ],
            examples: [
              { greek: "ἡ παιδεία καλή ἐστιν.", english: "The education is good." },
              { greek: "ὁ διδάσκαλος τὴν παιδείαν διδάσκει.", english: "The teacher teaches the education/training." }
            ],
            practiceTopic: "first-declension"
          },
          {
            id: "agreement",
            title: "Agreement",
            body: [
              "Articles and adjectives normally agree with the nouns they describe in gender, number, and case.",
              "In this pilot lesson, focus on seeing the matching feminine forms before trying to name every detail."
            ],
            examples: [
              { greek: "ἡ καλὴ παιδεία", english: "the good education" },
              { greek: "τὴν καλὴν τέχνην", english: "the good skill" }
            ],
            practiceTopic: "agreement"
          }
        ]
      },
      enrichment: [
        {
          type: "Xenophon in Context",
          title: "Learning as Practice",
          body: [
            "Xenophon often presents virtue as something trained through habit, example, and conversation. This pilot page connects noun forms with the course theme of education."
          ]
        },
        {
          type: "Virtue Reflection",
          title: "Wisdom and Steady Attention",
          body: [
            "A student does not master Greek by memorizing one table once. The lesson structure deliberately returns to vocabulary, reading, grammar, and reflection as connected habits."
          ]
        }
      ],
      activities: {
        "grammar-flashcards": {
          title: "Lesson 4 Grammar Flashcards",
          cards: [
            { prompt: "What case does ἡ usually mark for a feminine singular noun?", answer: "Nominative singular." },
            { prompt: "What case does τήν usually mark for a feminine singular noun?", answer: "Accusative singular." },
            { prompt: "What does agreement ask you to compare?", answer: "Gender, number, and case between related words." }
          ]
        },
        "topic-practice": {
          title: "Practice This Topic",
          questions: [
            {
              id: "topic-first-declension-1",
              topic: "first-declension",
              type: "multiple_choice",
              prompt: "In ὁ διδάσκαλος τὴν παιδείαν διδάσκει, what is τὴν παιδείαν doing?",
              choices: [
                { text: "It is the direct object.", correct: true },
                { text: "It is the subject.", correct: false },
                { text: "It names the teacher.", correct: false }
              ]
            },
            {
              id: "topic-agreement-1",
              topic: "agreement",
              type: "multiple_choice",
              prompt: "Which phrase shows feminine singular accusative agreement?",
              choices: [
                { text: "τὴν καλὴν τέχνην", correct: true },
                { text: "ὁ καλὸς μαθητής", correct: false },
                { text: "ἡ καλὴ παιδεία", correct: false }
              ]
            }
          ]
        },
        "grammar-exercises": {
          title: "Lesson 4 Grammar Exercises",
          threshold: 80,
          questions: [
            {
              id: "grammar-ex-1",
              type: "multiple_choice",
              prompt: "Which form most likely marks a feminine singular direct object?",
              choices: [
                { text: "τήν", correct: true },
                { text: "ἡ", correct: false },
                { text: "ὁ", correct: false },
                { text: "τό", correct: false }
              ]
            },
            {
              id: "grammar-ex-2",
              type: "multiple_choice",
              prompt: "In ἡ παιδεία καλή ἐστιν, which word is the subject noun?",
              choices: [
                { text: "παιδεία", correct: true },
                { text: "καλή", correct: false },
                { text: "ἐστιν", correct: false }
              ]
            },
            {
              id: "grammar-ex-3",
              type: "multiple_choice",
              prompt: "Which pair agrees in gender, number, and case?",
              choices: [
                { text: "τὴν καλήν", correct: true },
                { text: "τὴν καλός", correct: false },
                { text: "ὁ καλή", correct: false }
              ]
            },
            {
              id: "grammar-ex-4",
              type: "multiple_choice",
              prompt: "What is the best first question when you see -ην or -αν on a familiar noun?",
              choices: [
                { text: "Is this noun functioning as a direct object?", correct: true },
                { text: "Is this an imperative verb?", correct: false },
                { text: "Is this a conjunction?", correct: false }
              ]
            }
          ]
        },
        "lesson-quiz": {
          title: "Lesson 4 Final Lesson Quiz",
          threshold: 80,
          questions: [
            {
              id: "lesson-quiz-1",
              type: "multiple_choice",
              prompt: "Translate: ὁ μαθητὴς μανθάνει.",
              choices: [
                { text: "The student learns.", correct: true },
                { text: "The teacher teaches.", correct: false },
                { text: "The writing is good.", correct: false }
              ]
            },
            {
              id: "lesson-quiz-2",
              type: "multiple_choice",
              prompt: "Which phrase means 'the good education'?",
              choices: [
                { text: "ἡ καλὴ παιδεία", correct: true },
                { text: "τὸ καλὸν παιδεία", correct: false },
                { text: "ὁ καλὸς παιδεία", correct: false }
              ]
            },
            {
              id: "lesson-quiz-3",
              type: "multiple_choice",
              prompt: "In the pilot reading, what does καλῶς μανθάνει mean?",
              choices: [
                { text: "learns well", correct: true },
                { text: "teaches nobly", correct: false },
                { text: "writes a teacher", correct: false }
              ]
            },
            {
              id: "lesson-quiz-4",
              type: "multiple_choice",
              prompt: "What is the lesson's main grammar focus?",
              choices: [
                { text: "First declension nouns and agreement", correct: true },
                { text: "Aorist participles", correct: false },
                { text: "Future conditions", correct: false }
              ]
            },
            {
              id: "lesson-quiz-5",
              type: "multiple_choice",
              prompt: "Which compact gloss best fits ἡ τέχνη?",
              choices: [
                { text: "the skill or craft", correct: true },
                { text: "the student", correct: false },
                { text: "and, also", correct: false }
              ]
            }
          ]
        }
      },
      nextLesson: {
        id: "lesson-5",
        title: "Learning Through Questioning",
        // TODO: route to lesson.html?lesson=5&page=1 when Lesson 5 receives template data.
        fallbackUrl: "lessons.html#lesson-5"
      }
    }
  };

  const ACTIVITY_LABELS = {
    "vocab-flashcards": "Vocabulary Flashcards",
    "grammar-flashcards": "Grammar Flashcards",
    "topic-practice": "Practice This Topic",
    "grammar-exercises": "Grammar Exercises",
    "lesson-quiz": "Final Lesson Quiz",
    "module-test": "Module Test",
    "final-review": "Final Review Exam"
  };

  function normalizeLessonParam(value) {
    const raw = String(value || "4").trim().toLowerCase();
    if (/^\d+$/.test(raw)) {
      return `lesson-${raw}`;
    }
    return raw;
  }

  function getLesson(value) {
    return LESSONS[normalizeLessonParam(value)] || null;
  }

  function getVocabularyCards(lesson) {
    return lesson.vocabulary.flatMap((group) =>
      group.items.map((item) => ({
        prompt: item.greek,
        answer: item.english,
        greek: item.greek,
        english: item.english,
        category: group.category
      }))
    );
  }

  window.xenophonLessonData = {
    lessons: LESSONS,
    activityLabels: ACTIVITY_LABELS,
    normalizeLessonParam,
    getLesson,
    getVocabularyCards
  };
}());
