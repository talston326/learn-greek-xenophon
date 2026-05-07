(function () {
  const LESSON_1_VERBS = [
    { greek: "ἀκούει", english: "he hears, listens to", stem: "ἀκου-", ending: "-ει" },
    { greek: "βαδίζει", english: "he walks", stem: "βαδιζ-", ending: "-ει" },
    { greek: "γράφει", english: "he writes", stem: "γραφ-", ending: "-ει" },
    { greek: "γυμνάζει", english: "he trains, exercises", stem: "γυμναζ-", ending: "-ει" },
    { greek: "διδάσκει", english: "he teaches", stem: "διδασκ-", ending: "-ει" },
    { greek: "ἐγείρει", english: "he awakens, rouses", stem: "ἐγειρ-", ending: "-ει" },
    { greek: "ἐστιν", english: "he is", wholeForm: true },
    { greek: "ζητεῖ", english: "he seeks", wholeForm: true },
    { greek: "θαυμάζει", english: "he wonders, admires, is amazed", stem: "θαυμαζ-", ending: "-ει" },
    { greek: "λέγει", english: "he says, speaks", stem: "λεγ-", ending: "-ει" },
    { greek: "μειδιᾷ", english: "he smiles", wholeForm: true },
    { greek: "οἰκεῖ", english: "he lives, dwells", wholeForm: true },
    { greek: "ὁρᾷ", english: "he sees", wholeForm: true },
    { greek: "παιδεύει", english: "he educates, trains", stem: "παιδευ-", ending: "-ει" },
    { greek: "φιλεῖ", english: "he loves", wholeForm: true },
    { greek: "χαίρει", english: "he rejoices, is glad", stem: "χαιρ-", ending: "-ει" }
  ];

  function makeChoices(correctText, wrongTexts, explanation) {
    return [
      { text: correctText, correct: true, feedback: "Correct." },
      ...wrongTexts.map((text) => ({
        text,
        correct: false,
        feedback: explanation
      }))
    ];
  }

  function makeVerbMeaningQuestion(verb, index) {
    const otherVerbs = LESSON_1_VERBS.filter((item) => item.greek !== verb.greek);
    const distractors = [
      otherVerbs[index % otherVerbs.length].english,
      otherVerbs[(index + 5) % otherVerbs.length].english
    ];

    return {
      id: `verb-forms-meaning-${index + 1}`,
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: `What does ${verb.greek} mean?`,
      explanation: `${verb.greek} is the Lesson 1 verb form meaning “${verb.english}.”`,
      choices: makeChoices(verb.english, distractors, `${verb.greek} means “${verb.english}.”`)
    };
  }

  function makeVerbRecognitionQuestion(verb, index) {
    const subjects = ["ὁ Σωκράτης", "ὁ Ξενοφῶν", "ὁ ἄνθρωπος", "ὁ μαθητής"];
    const sentence = `${subjects[index % subjects.length]} ${verb.greek}.`;

    return {
      id: `verb-forms-recognition-${index + 1}`,
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: `Select the verb: ${sentence}`,
      explanation: `${verb.greek} is the action word in the sentence.`,
      choices: makeChoices(verb.greek, [subjects[index % subjects.length], "ὁ"], `${verb.greek} is the verb; the other choices are not the action word.`)
    };
  }

  function makeVerbEndingQuestion(verb, index) {
    const ending = verb.wholeForm ? "learn as a whole form for now" : verb.ending;

    return {
      id: `verb-forms-ending-${index + 1}`,
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: `How should you handle ${verb.greek} in Lesson 1?`,
      explanation: verb.wholeForm
        ? `${verb.greek} is one of the forms to learn as a complete vocabulary word for now.`
        : `${verb.greek} is a third person singular present active form ending in ${verb.ending}.`,
      choices: makeChoices(
        ending,
        verb.wholeForm ? ["identify a stem and -ει ending", "explain its vowel change now"] : ["learn as a whole form for now", "treat it as a noun"],
        verb.wholeForm
          ? `${verb.greek} should be learned as a whole form for now.`
          : `${verb.greek} belongs with the common -ει third person singular forms in this lesson.`
      )
    };
  }

  function makeVerbStemQuestion(verb, index) {
    return {
      id: `verb-forms-stem-${index + 1}`,
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: `What stem is shown in ${verb.greek}?`,
      explanation: `${verb.greek} can be read as ${verb.stem} plus ${verb.ending}.`,
      choices: makeChoices(verb.stem, [verb.ending, `${verb.greek}-`], `${verb.stem} is the stem; ${verb.ending} is the ending.`)
    };
  }

  function makeLesson1VerbMasteryQuestions() {
    const meaning = LESSON_1_VERBS.map(makeVerbMeaningQuestion);
    const recognition = LESSON_1_VERBS.map(makeVerbRecognitionQuestion);
    const endings = LESSON_1_VERBS.map(makeVerbEndingQuestion);
    const stems = LESSON_1_VERBS
      .filter((verb) => !verb.wholeForm)
      .map(makeVerbStemQuestion);

    return [...meaning, ...recognition, ...endings, ...stems].slice(0, 50);
  }

  const LESSONS = {
    "lesson-1": {
      id: "lesson-1",
      number: 1,
      title: "Socrates Teaches",
      greekTitle: "Ὁ Σωκράτης διδάσκει",
      scope: "Nominative singular, accusative singular, present active indicative, definite article, basic noun/adjective agreement",
      theme: "Socrates as teacher; Xenophon as student; the beginning of philosophical education",
      module: "σοφία — Wisdom and Socrates",
      banner: {
        image: "assets/module-1-sophia-banner.jpeg",
        alt: "A classical Athenian scene representing Socrates teaching in the agora",
        caption: "ὁ Σωκράτης διδάσκει, ὁ δὲ Ξενοφῶν ἀκούει."
      },
      pages: [
        {
          page: 1,
          slug: "lesson-1-page-1",
          title: "Reading",
          template: "reading",
          showTranslation: false
        },
        {
          page: 2,
          slug: "lesson-1-page-2",
          title: "Language Study",
          template: "grammar"
        },
        {
          page: 3,
          slug: "lesson-1-page-3",
          title: "Greek World / Review / Quiz",
          template: "culture"
        }
      ],
      vocabulary: [
        {
          category: "Verbs",
          items: [
            { greek: "ἀκούει", english: "he/she/it hears, listens to" },
            { greek: "βαδίζει", english: "he/she/it walks" },
            { greek: "γράφει", english: "he/she/it writes" },
            { greek: "γυμνάζει", english: "he/she/it trains, exercises" },
            { greek: "διδάσκει", english: "he/she/it teaches" },
            { greek: "ἐγείρει", english: "he/she/it awakens, rouses" },
            { greek: "ἐστιν", english: "he/she/it is" },
            { greek: "ζητεῖ", english: "he/she/it seeks" },
            { greek: "θαυμάζει", english: "he/she/it wonders, admires, is amazed" },
            { greek: "λέγει", english: "he/she/it says, speaks" },
            { greek: "μειδιᾷ", english: "he/she/it smiles" },
            { greek: "οἰκεῖ", english: "he/she/it lives, dwells" },
            { greek: "ὁρᾷ", english: "he/she/it sees" },
            { greek: "παιδεύει", english: "he/she/it educates, trains" },
            { greek: "φιλεῖ", english: "he/she/it loves" },
            { greek: "χαίρει", english: "he/she/it rejoices, is glad" }
          ]
        },
        {
          category: "Nouns",
          items: [
            { greek: "ἀλήθεια, ἡ", english: "truth" },
            { greek: "ἄνθρωπος, ὁ", english: "human being, man" },
            { greek: "ἀρετή, ἡ", english: "virtue, excellence" },
            { greek: "βιβλίον, τό", english: "book" },
            { greek: "μαθητής, ὁ", english: "student, learner" },
            { greek: "νεανίας, ὁ", english: "young man" },
            { greek: "σοφία, ἡ", english: "wisdom" },
            { greek: "Σωκράτης, ὁ", english: "Socrates" },
            { greek: "σῶμα, τό", english: "body" },
            { greek: "ψυχή, ἡ", english: "soul" },
            { greek: "Ξενοφῶν, ὁ", english: "Xenophon" }
          ]
        },
        {
          category: "Adjectives",
          items: [
            { greek: "κακός, κακή, κακόν", english: "bad" },
            { greek: "καλός, καλή, καλόν", english: "beautiful, noble, good" },
            { greek: "νέος, νέα, νέον", english: "young, new" }
          ]
        }
      ],
      reading: {
        title: "Ὁ Σωκράτης διδάσκει",
        paragraphs: [
          {
            greek: "ὁ Σωκράτης Ἀθηναῖός ἐστιν. οἰκεῖ δὲ ἐν ταῖς Ἀθήναις καὶ πολλάκις ἐν τῇ ἀγορᾷ βαδίζει. οὐ γράφει βιβλίον, ἀλλὰ διδάσκει τὸν ἄνθρωπον καὶ τὸν νεανίαν. ὁ Ξενοφῶν νέος ἐστιν καὶ φιλεῖ τὴν σοφίαν. ὁρᾷ οὖν τὸν Σωκράτη καὶ ἀκούει τὸν λόγον. ὁ Σωκράτης λέγει· “ὁ καλὸς ἄνθρωπος οὐ μόνον σῶμα γυμνάζει, ἀλλὰ καὶ ψυχὴν παιδεύει. ἡ ἀρετὴ καλὴ ἐστιν, ἡ δὲ ἀδικία κακή.” ὁ Ξενοφῶν θαυμάζει καὶ χαίρει. “ὁ λόγος καλός ἐστιν,” λέγει. ὁ δὲ Σωκράτης μειδιᾷ καὶ πάλιν διδάσκει. ἀεὶ γὰρ ζητεῖ τὴν ἀλήθειαν καὶ τὸν μαθητὴν ἐγείρει.",
            gloss: [
              { greek: "Ἀθηναῖος", english: "Athenian" },
              { greek: "ἐν", english: "in" },
              { greek: "ταῖς Ἀθήναις", english: "Athens" },
              { greek: "πολλάκις", english: "often" },
              { greek: "ἀγορά, ἡ", english: "marketplace, agora" },
              { greek: "τῇ ἀγορᾷ", english: "in the agora" },
              { greek: "οὐ", english: "not" },
              { greek: "ἀλλά", english: "but" },
              { greek: "καί", english: "and, also" },
              { greek: "τόν / τήν / τό", english: "the; accusative singular forms" },
              { greek: "ὁ / ἡ / τό", english: "the; nominative singular forms" },
              { greek: "δέ", english: "and, but" },
              { greek: "οὖν", english: "therefore, so" },
              { greek: "λόγος, ὁ", english: "word, speech, account, argument" },
              { greek: "μόνον", english: "only" },
              { greek: "πάλιν", english: "again" },
              { greek: "ἀεί", english: "always" },
              { greek: "γάρ", english: "for, because" },
              { greek: "ἀδικία, ἡ", english: "injustice" }
            ]
          }
        ],
        translation: "Socrates is an Athenian. He lives in Athens and often walks in the agora. He does not write a book, but teaches the man and the young man. Xenophon is young and loves wisdom. So he sees Socrates and listens to the speech. Socrates says, “The good man trains not only the body, but also educates the soul. Virtue is beautiful and good, but injustice is bad.” Xenophon is amazed and rejoices. “The speech is good,” he says. And Socrates smiles and teaches again. For he always seeks the truth and awakens the student."
      },
      wordStudy: {
        label: "Word Builder: φιλεῖ + σοφία",
        blocks: [
          {
            title: "Greek word families",
            body: [
              "Greek often builds new ideas by combining familiar roots. In this lesson, φιλεῖ means “he loves,” and σοφία means “wisdom.” Together they point toward φιλοσοφία, “love of wisdom.”"
            ],
            display: [
              { greek: "φιλεῖ", english: "he loves" },
              { greek: "σοφία", english: "wisdom" },
              { greek: "φιλοσοφία", english: "love of wisdom, philosophy" },
              { greek: "φιλόσοφος", english: "lover of wisdom, philosopher" },
              { greek: "φίλος", english: "friend, dear one" },
              { greek: "φιλέω", english: "I love" },
              { greek: "σοφός", english: "wise" },
              { greek: "σοφιστής", english: "sophist, teacher of wisdom or skill" }
            ],
            connections: [
              "philosophy",
              "philosopher",
              "philosophical",
              "sophisticated",
              "sophistry"
            ]
          }
        ]
      },
      culture: {
        title: "Socrates in the Agora",
        body: [
          "Socrates did not teach in a classroom in the modern sense. He moved through Athens, especially through public spaces such as the agora, speaking with citizens, craftsmen, politicians, poets, and young men. His method was conversational. Instead of simply giving answers, he asked questions. A person might claim to know what courage, justice, piety, or wisdom was. Socrates would then ask careful questions that exposed confusion, contradiction, or shallow thinking.",
          "This method could be exciting, but it could also be uncomfortable. Socrates treated the soul as something that needed training, just as the body needed exercise. In Xenophon’s portrait, Socrates is not merely a clever debater. He is a moral teacher who wants his companions to become better, more disciplined, and more thoughtful human beings.",
          "Xenophon admired Socrates deeply. In the Memorabilia, Xenophon presents Socrates as a man who benefited his friends by conversation, example, and moral seriousness. For this course, Socrates becomes the first guide into Greek because he represents the beginning of inquiry: What is the good life? What is virtue? How should a person train both body and soul?"
        ],
        questions: [
          {
            prompt: "Where did Socrates often speak with people in Athens?",
            answer: "In public spaces such as the agora."
          },
          {
            prompt: "How did Socrates usually teach?",
            answer: "By conversation and questioning."
          },
          {
            prompt: "Why is Socrates a fitting guide for the beginning of the course?",
            answer: "Because he represents inquiry into wisdom, virtue, and the good life."
          }
        ]
      },
      grammar: {
        intro: "Lesson 1 focuses on the smallest working pieces of Greek sentences: present active verbs, nouns in the nominative and accusative singular, articles, and basic agreement.",
        sections: [
          {
            id: "verb-forms",
            title: "1. Verb Forms: Stems and Endings",
            body: [
              "Greek verbs are built from a stem plus an ending. The stem carries the basic meaning of the verb. The ending gives grammatical information. In this lesson, every verb in the reading is third person singular: it means “he,” “she,” or “it” does something.",
              "Many third person singular present active verbs in this lesson end in -ει: γράφει — he writes; διδάσκει — he teaches; βαδίζει — he walks; λέγει — he says; χαίρει — he rejoices.",
              "Some verbs in this lesson have forms that look a little different: φιλεῖ — he loves; ζητεῖ — he seeks; ὁρᾷ — he sees; μειδιᾷ — he smiles. For now, learn these as complete verb forms. Later lessons will explain why some verbs change their vowel sounds and endings."
            ],
            table: {
              headers: ["Verb Form", "Stem", "Ending", "Meaning"],
              greekColumns: [0, 1, 2],
              rows: [
                ["γράφει", "γραφ-", "-ει", "he writes"],
                ["διδάσκει", "διδασκ-", "-ει", "he teaches"],
                ["βαδίζει", "βαδιζ-", "-ει", "he walks"],
                ["λέγει", "λεγ-", "-ει", "he says"],
                ["χαίρει", "χαιρ-", "-ει", "he rejoices"]
              ]
            },
            formList: {
              title: "Learn as whole forms for now",
              items: [
                { greek: "φιλεῖ", english: "he loves" },
                { greek: "ζητεῖ", english: "he seeks" },
                { greek: "ὁρᾷ", english: "he sees" },
                { greek: "μειδιᾷ", english: "he smiles" }
              ]
            },
            exercises: [
              "Practice A asks you to identify the verb in a short sentence.",
              "Practice B matches Greek verbs to English meanings.",
              "Practice C asks you to choose the correct translation."
            ],
            practiceTopic: "verb-forms"
          },
          {
            id: "nouns-cases-agreement",
            title: "2. Nouns: Genders, Stems, Endings, Cases, and Agreement",
            body: [
              "Greek nouns have gender, number, and case. In this lesson you meet masculine, feminine, and neuter nouns. You also meet two cases: nominative and accusative.",
              "The nominative case is often used for the subject of the sentence. The accusative case is often used for the direct object of the verb.",
              "Each Greek noun has a grammatical gender: masculine, feminine, or neuter. The article helps you recognize the gender.",
              "Adjectives agree with nouns in gender, number, and case."
            ],
            examples: [
              { greek: "ὁ Σωκράτης διδάσκει.", english: "Socrates teaches. ὁ Σωκράτης is nominative." },
              { greek: "ὁ Ξενοφῶν χαίρει.", english: "Xenophon rejoices. ὁ Ξενοφῶν is nominative." },
              { greek: "ὁ Σωκράτης διδάσκει τὸν ἄνθρωπον.", english: "Socrates teaches the man. τὸν ἄνθρωπον is accusative." },
              { greek: "ὁ Ξενοφῶν ἀκούει τὸν λόγον.", english: "Xenophon listens to the speech. τὸν λόγον is accusative." },
              { greek: "ὁ ἄνθρωπος / ὁ μαθητής / ὁ νεανίας", english: "masculine nouns" },
              { greek: "ἡ σοφία / ἡ ἀρετή / ἡ ψυχή / ἡ ἀλήθεια", english: "feminine nouns" },
              { greek: "τὸ βιβλίον / τὸ σῶμα", english: "neuter nouns" },
              { greek: "ὁ καλὸς ἄνθρωπος", english: "the good man" },
              { greek: "ἡ καλὴ ἀρετή", english: "the noble virtue" },
              { greek: "τὸ καλὸν σῶμα", english: "the beautiful body" }
            ],
            exercises: [
              "Practice A asks whether a phrase is nominative or accusative.",
              "Practice B matches nouns to gender.",
              "Practice C asks you to choose the correct adjective agreement."
            ],
            practiceTopic: "nouns-cases-agreement"
          },
          {
            id: "definite-article",
            title: "3. Use of the Definite Article",
            body: [
              "Greek uses the definite article more often than English. The article usually means “the,” but it also gives important grammatical information.",
              "The article helps show the gender, number, and case of the noun. In this lesson, focus on nominative singular and accusative singular forms."
            ],
            table: {
              headers: ["Case", "Masculine", "Feminine", "Neuter"],
              rows: [
                ["Nominative", "ὁ", "ἡ", "τό"],
                ["Accusative", "τόν", "τήν", "τό"]
              ]
            },
            examples: [
              { greek: "ὁ Σωκράτης", english: "Socrates as subject" },
              { greek: "ὁ Ξενοφῶν", english: "Xenophon as subject" },
              { greek: "ὁ λόγος", english: "the speech as subject" },
              { greek: "τὸν Σωκράτη", english: "Socrates as direct object" },
              { greek: "τὸν λόγον", english: "the speech as direct object" },
              { greek: "τὴν σοφίαν", english: "wisdom as direct object" },
              { greek: "τὴν ψυχήν", english: "the soul as direct object" },
              { greek: "τὴν ἀλήθειαν", english: "the truth as direct object" },
              { greek: "τὸ σῶμα", english: "the body" }
            ],
            exercises: [
              "Practice A asks you to choose the correct article.",
              "Practice B asks you to recognize the gender and case shown by the article."
            ],
            practiceTopic: "definite-article"
          }
        ]
      },
      enrichment: [],
      activities: {
        "vocab-practice": {
          title: "Lesson 1 Vocabulary Practice",
          questions: [
            {
              id: "vocab-practice-1",
              type: "multiple_choice",
              prompt: "What does ἀλήθεια mean?",
              choices: [
                { text: "truth", correct: true },
                { text: "body", correct: false },
                { text: "book", correct: false }
              ]
            },
            {
              id: "vocab-practice-2",
              type: "multiple_choice",
              prompt: "Which Greek word means “student, learner”?",
              choices: [
                { text: "μαθητής", correct: true },
                { text: "βιβλίον", correct: false },
                { text: "ἀγορά", correct: false }
              ]
            },
            {
              id: "vocab-practice-3",
              type: "multiple_choice",
              prompt: "What does ὁρᾷ mean?",
              choices: [
                { text: "he/she/it sees", correct: true },
                { text: "he/she/it walks", correct: false },
                { text: "he/she/it writes", correct: false }
              ]
            },
            {
              id: "vocab-practice-4",
              type: "multiple_choice",
              prompt: "Which pair means “body” and “soul”?",
              choices: [
                { text: "σῶμα and ψυχή", correct: true },
                { text: "λόγος and βιβλίον", correct: false },
                { text: "Σωκράτης and Ξενοφῶν", correct: false }
              ]
            }
          ]
        },
        "grammar-flashcards": {
          title: "Lesson 1 Grammar Flashcards",
          cards: [
            { prompt: "What does the nominative case often mark?", answer: "The subject of the sentence." },
            { prompt: "What does the accusative case often mark?", answer: "The direct object of the verb." },
            { prompt: "What does ὁ usually show?", answer: "Masculine nominative singular." },
            { prompt: "What does τόν usually show?", answer: "Masculine accusative singular." },
            { prompt: "What does adjective agreement compare?", answer: "Gender, number, and case." }
          ]
        },
        "topic-practice": {
          title: "Practice This Topic",
          questions: [
            ...makeLesson1VerbMasteryQuestions(),
            {
              id: "nouns-cases-a-1",
              topic: "nouns-cases-agreement",
              type: "multiple_choice",
              prompt: "In ὁ Σωκράτης διδάσκει, what case is ὁ Σωκράτης?",
              choices: [
                { text: "nominative", correct: true },
                { text: "accusative", correct: false },
                { text: "dative", correct: false }
              ]
            },
            {
              id: "nouns-cases-a-2",
              topic: "nouns-cases-agreement",
              type: "multiple_choice",
              prompt: "In τὸν ἄνθρωπον διδάσκει, what case is τὸν ἄνθρωπον?",
              choices: [
                { text: "accusative", correct: true },
                { text: "nominative", correct: false },
                { text: "genitive", correct: false }
              ]
            },
            {
              id: "nouns-cases-b-1",
              topic: "nouns-cases-agreement",
              type: "multiple_choice",
              prompt: "Match ἄνθρωπος to its gender.",
              choices: [
                { text: "masculine", correct: true },
                { text: "feminine", correct: false },
                { text: "neuter", correct: false }
              ]
            },
            {
              id: "nouns-cases-b-2",
              topic: "nouns-cases-agreement",
              type: "multiple_choice",
              prompt: "Match σοφία to its gender.",
              choices: [
                { text: "feminine", correct: true },
                { text: "masculine", correct: false },
                { text: "neuter", correct: false }
              ]
            },
            {
              id: "nouns-cases-c-1",
              topic: "nouns-cases-agreement",
              type: "multiple_choice",
              prompt: "Choose the correct agreement: ὁ ______ ἄνθρωπος.",
              choices: [
                { text: "καλός", correct: true },
                { text: "καλή", correct: false },
                { text: "καλόν", correct: false }
              ]
            },
            {
              id: "nouns-cases-c-2",
              topic: "nouns-cases-agreement",
              type: "multiple_choice",
              prompt: "Choose the correct agreement: τὸ ______ σῶμα.",
              choices: [
                { text: "καλός", correct: false },
                { text: "καλή", correct: false },
                { text: "καλόν", correct: true }
              ]
            },
            {
              id: "article-a-1",
              topic: "definite-article",
              type: "multiple_choice",
              prompt: "Choose the correct article: ____ Σωκράτης.",
              choices: [
                { text: "ὁ", correct: true },
                { text: "ἡ", correct: false },
                { text: "τό", correct: false }
              ]
            },
            {
              id: "article-a-2",
              topic: "definite-article",
              type: "multiple_choice",
              prompt: "Choose the correct article: ____ σοφία.",
              choices: [
                { text: "ὁ", correct: false },
                { text: "ἡ", correct: true },
                { text: "τό", correct: false }
              ]
            },
            {
              id: "article-a-3",
              topic: "definite-article",
              type: "multiple_choice",
              prompt: "Choose the correct article: ____ ἄνθρωπον.",
              choices: [
                { text: "τόν", correct: true },
                { text: "τήν", correct: false },
                { text: "τό", correct: false }
              ]
            },
            {
              id: "article-b-1",
              topic: "definite-article",
              type: "multiple_choice",
              prompt: "What does ἡ show?",
              choices: [
                { text: "feminine nominative singular", correct: true },
                { text: "masculine accusative singular", correct: false },
                { text: "neuter plural", correct: false }
              ]
            },
            {
              id: "article-b-2",
              topic: "definite-article",
              type: "multiple_choice",
              prompt: "What does τήν show?",
              choices: [
                { text: "feminine accusative singular", correct: true },
                { text: "masculine nominative singular", correct: false },
                { text: "neuter nominative or accusative singular", correct: false }
              ]
            }
          ]
        },
        "grammar-exercises": {
          title: "Lesson 1 Grammar Exercises",
          threshold: 80,
          questions: [
            {
              id: "grammar-ex-1",
              type: "multiple_choice",
              prompt: "Which word is the verb in ὁ Σωκράτης διδάσκει?",
              choices: [
                { text: "διδάσκει", correct: true },
                { text: "Σωκράτης", correct: false },
                { text: "ὁ", correct: false }
              ]
            },
            {
              id: "grammar-ex-2",
              type: "multiple_choice",
              prompt: "What case is τὸν λόγον?",
              choices: [
                { text: "accusative", correct: true },
                { text: "nominative", correct: false },
                { text: "dative", correct: false }
              ]
            },
            {
              id: "grammar-ex-3",
              type: "multiple_choice",
              prompt: "Which noun is neuter?",
              choices: [
                { text: "βιβλίον", correct: true },
                { text: "σοφία", correct: false },
                { text: "ἄνθρωπος", correct: false }
              ]
            },
            {
              id: "grammar-ex-4",
              type: "multiple_choice",
              prompt: "Which article is masculine accusative singular?",
              choices: [
                { text: "τόν", correct: true },
                { text: "ὁ", correct: false },
                { text: "ἡ", correct: false }
              ]
            },
            {
              id: "grammar-ex-5",
              type: "multiple_choice",
              prompt: "Choose the phrase with correct neuter agreement.",
              choices: [
                { text: "τὸ καλὸν σῶμα", correct: true },
                { text: "τὸ καλός σῶμα", correct: false },
                { text: "ἡ καλὴ σῶμα", correct: false }
              ]
            }
          ]
        },
        "lesson-quiz": {
          title: "Lesson 1 Quiz — Socrates Teaches",
          threshold: 80,
          questions: [
            {
              id: "lesson-quiz-1",
              type: "multiple_choice",
              prompt: "What does διδάσκει mean?",
              choices: [
                { text: "he teaches", correct: true },
                { text: "he writes", correct: false },
                { text: "he walks", correct: false },
                { text: "he sees", correct: false }
              ]
            },
            {
              id: "lesson-quiz-2",
              type: "multiple_choice",
              prompt: "What does σοφία mean?",
              choices: [
                { text: "soul", correct: false },
                { text: "wisdom", correct: true },
                { text: "body", correct: false },
                { text: "truth", correct: false }
              ]
            },
            {
              id: "lesson-quiz-3",
              type: "multiple_choice",
              prompt: "What does ὁ Σωκράτης mean?",
              choices: [
                { text: "Socrates as subject", correct: true },
                { text: "Socrates as direct object", correct: false },
                { text: "wisdom", correct: false },
                { text: "the soul", correct: false }
              ]
            },
            {
              id: "lesson-quiz-4",
              type: "multiple_choice",
              prompt: "In the sentence ὁ Σωκράτης διδάσκει, what case is ὁ Σωκράτης?",
              choices: [
                { text: "nominative", correct: true },
                { text: "accusative", correct: false },
                { text: "genitive", correct: false },
                { text: "dative", correct: false }
              ]
            },
            {
              id: "lesson-quiz-5",
              type: "multiple_choice",
              prompt: "In the phrase τὸν λόγον, what case is τὸν λόγον?",
              choices: [
                { text: "nominative", correct: false },
                { text: "accusative", correct: true },
                { text: "vocative", correct: false },
                { text: "dative", correct: false }
              ]
            },
            {
              id: "lesson-quiz-6",
              type: "multiple_choice",
              prompt: "Which article is feminine nominative singular?",
              choices: [
                { text: "ὁ", correct: false },
                { text: "ἡ", correct: true },
                { text: "τό", correct: false },
                { text: "τόν", correct: false }
              ]
            },
            {
              id: "lesson-quiz-7",
              type: "multiple_choice",
              prompt: "Which article is masculine accusative singular?",
              choices: [
                { text: "ὁ", correct: false },
                { text: "ἡ", correct: false },
                { text: "τόν", correct: true },
                { text: "τήν", correct: false }
              ]
            },
            {
              id: "lesson-quiz-8",
              type: "multiple_choice",
              prompt: "Which phrase means “the good man”?",
              choices: [
                { text: "ἡ καλὴ ψυχή", correct: false },
                { text: "τὸ καλὸν σῶμα", correct: false },
                { text: "ὁ καλὸς ἄνθρωπος", correct: true },
                { text: "τὴν καλὴν σοφίαν", correct: false }
              ]
            },
            {
              id: "lesson-quiz-9",
              type: "multiple_choice",
              prompt: "What does ψυχή mean?",
              choices: [
                { text: "body", correct: false },
                { text: "soul", correct: true },
                { text: "speech", correct: false },
                { text: "book", correct: false }
              ]
            },
            {
              id: "lesson-quiz-10",
              type: "multiple_choice",
              prompt: "What does σῶμα mean?",
              choices: [
                { text: "body", correct: true },
                { text: "truth", correct: false },
                { text: "student", correct: false },
                { text: "virtue", correct: false }
              ]
            },
            {
              id: "lesson-quiz-11",
              type: "multiple_choice",
              prompt: "In the passage, what does Socrates say the good man trains?",
              choices: [
                { text: "only the body", correct: false },
                { text: "only the soul", correct: false },
                { text: "both body and soul", correct: true },
                { text: "neither body nor soul", correct: false }
              ]
            },
            {
              id: "lesson-quiz-12",
              type: "multiple_choice",
              prompt: "What does Xenophon do when he hears Socrates?",
              choices: [
                { text: "He writes a book immediately.", correct: false },
                { text: "He ignores Socrates.", correct: false },
                { text: "He is amazed and rejoices.", correct: true },
                { text: "He leaves Athens.", correct: false }
              ]
            },
            {
              id: "lesson-quiz-13",
              type: "multiple_choice",
              prompt: "Which verb means “he seeks”?",
              choices: [
                { text: "ζητεῖ", correct: true },
                { text: "λέγει", correct: false },
                { text: "χαίρει", correct: false },
                { text: "βαδίζει", correct: false }
              ]
            },
            {
              id: "lesson-quiz-14",
              type: "multiple_choice",
              prompt: "Which noun is neuter?",
              choices: [
                { text: "ἄνθρωπος", correct: false },
                { text: "σοφία", correct: false },
                { text: "βιβλίον", correct: true },
                { text: "ψυχή", correct: false }
              ]
            },
            {
              id: "lesson-quiz-15",
              type: "multiple_choice",
              prompt: "What is the best translation of ἡ ἀρετὴ καλὴ ἐστιν?",
              choices: [
                { text: "Virtue is good/noble.", correct: true },
                { text: "The body is bad.", correct: false },
                { text: "Socrates teaches.", correct: false },
                { text: "Xenophon walks.", correct: false }
              ]
            }
          ]
        }
      },
      nextLesson: {
        id: "lesson-2",
        title: "The Wise Man Knows Himself",
        fallbackUrl: "lessons.html#lesson-2"
      }
    },
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
        title: "Reading",
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
    "vocab-practice": "Vocabulary Practice",
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
