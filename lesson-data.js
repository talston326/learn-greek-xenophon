(function () {
  const LESSON_1_GRAMMAR_1_VERB_FORMS = [
    // Group 1A — Verb meanings
    {
      id: "lesson-1-verb-forms-001",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does ἀκούει mean?",
      target_form: "ἀκούει",
      lemma: "ἀκούω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it hears, listens to",
      explanation: "ἀκούει means “he/she/it hears, listens to.”",
      choices: [
        {
          text: "he/she/it hears, listens to",
          correct: true,
          feedback: "Correct. ἀκούει means “he/she/it hears, listens to.”"
        },
        {
          text: "he/she/it writes",
          correct: false,
          feedback: "No. ἀκούει means “he/she/it hears, listens to.”"
        },
        {
          text: "he/she/it walks",
          correct: false,
          feedback: "No. ἀκούει means “he/she/it hears, listens to.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-002",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does βαδίζει mean?",
      target_form: "βαδίζει",
      lemma: "βαδίζω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it walks",
      explanation: "βαδίζει means “he/she/it walks.”",
      choices: [
        {
          text: "he/she/it walks",
          correct: true,
          feedback: "Correct. βαδίζει means “he/she/it walks.”"
        },
        {
          text: "he/she/it teaches",
          correct: false,
          feedback: "No. βαδίζει means “he/she/it walks.”"
        },
        {
          text: "he/she/it seeks",
          correct: false,
          feedback: "No. βαδίζει means “he/she/it walks.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-003",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does γράφει mean?",
      target_form: "γράφει",
      lemma: "γράφω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it writes",
      explanation: "γράφει means “he/she/it writes.”",
      choices: [
        {
          text: "he/she/it writes",
          correct: true,
          feedback: "Correct. γράφει means “he/she/it writes.”"
        },
        {
          text: "he/she/it hears",
          correct: false,
          feedback: "No. γράφει means “he/she/it writes.”"
        },
        {
          text: "he/she/it sees",
          correct: false,
          feedback: "No. γράφει means “he/she/it writes.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-004",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does γυμνάζει mean?",
      target_form: "γυμνάζει",
      lemma: "γυμνάζω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it trains, exercises",
      explanation: "γυμνάζει means “he/she/it trains, exercises.”",
      choices: [
        {
          text: "he/she/it trains, exercises",
          correct: true,
          feedback: "Correct. γυμνάζει means “he/she/it trains, exercises.”"
        },
        {
          text: "he/she/it says",
          correct: false,
          feedback: "No. γυμνάζει means “he/she/it trains, exercises.”"
        },
        {
          text: "he/she/it is glad",
          correct: false,
          feedback: "No. γυμνάζει means “he/she/it trains, exercises.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-005",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does διδάσκει mean?",
      target_form: "διδάσκει",
      lemma: "διδάσκω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it teaches",
      explanation: "διδάσκει means “he/she/it teaches.”",
      choices: [
        {
          text: "he/she/it teaches",
          correct: true,
          feedback: "Correct. διδάσκει means “he/she/it teaches.”"
        },
        {
          text: "he/she/it walks",
          correct: false,
          feedback: "No. διδάσκει means “he/she/it teaches.”"
        },
        {
          text: "he/she/it loves",
          correct: false,
          feedback: "No. διδάσκει means “he/she/it teaches.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-006",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does ἐγείρει mean?",
      target_form: "ἐγείρει",
      lemma: "ἐγείρω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it awakens, rouses",
      explanation: "ἐγείρει means “he/she/it awakens, rouses.”",
      choices: [
        {
          text: "he/she/it awakens, rouses",
          correct: true,
          feedback: "Correct. ἐγείρει means “he/she/it awakens, rouses.”"
        },
        {
          text: "he/she/it lives, dwells",
          correct: false,
          feedback: "No. ἐγείρει means “he/she/it awakens, rouses.”"
        },
        {
          text: "he/she/it writes",
          correct: false,
          feedback: "No. ἐγείρει means “he/she/it awakens, rouses.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-007",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does ἐστιν mean?",
      target_form: "ἐστιν",
      lemma: "εἰμί",
      parse: "3rd person singular present indicative",
      skill: "verb meaning",
      answer: "he/she/it is",
      explanation: "ἐστιν means “he/she/it is.”",
      choices: [
        {
          text: "he/she/it is",
          correct: true,
          feedback: "Correct. ἐστιν means “he/she/it is.”"
        },
        {
          text: "he/she/it seeks",
          correct: false,
          feedback: "No. ἐστιν means “he/she/it is.”"
        },
        {
          text: "he/she/it walks",
          correct: false,
          feedback: "No. ἐστιν means “he/she/it is.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-008",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does ζητεῖ mean?",
      target_form: "ζητεῖ",
      lemma: "ζητέω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "verb meaning",
      answer: "he/she/it seeks",
      explanation: "ζητεῖ means “he/she/it seeks.”",
      choices: [
        {
          text: "he/she/it seeks",
          correct: true,
          feedback: "Correct. ζητεῖ means “he/she/it seeks.”"
        },
        {
          text: "he/she/it teaches",
          correct: false,
          feedback: "No. ζητεῖ means “he/she/it seeks.”"
        },
        {
          text: "he/she/it hears",
          correct: false,
          feedback: "No. ζητεῖ means “he/she/it seeks.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-009",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does θαυμάζει mean?",
      target_form: "θαυμάζει",
      lemma: "θαυμάζω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it wonders, admires, is amazed",
      explanation: "θαυμάζει means “he/she/it wonders, admires, is amazed.”",
      choices: [
        {
          text: "he/she/it wonders, admires, is amazed",
          correct: true,
          feedback: "Correct. θαυμάζει means “he/she/it wonders, admires, is amazed.”"
        },
        {
          text: "he/she/it writes",
          correct: false,
          feedback: "No. θαυμάζει means “he/she/it wonders, admires, is amazed.”"
        },
        {
          text: "he/she/it dwells",
          correct: false,
          feedback: "No. θαυμάζει means “he/she/it wonders, admires, is amazed.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-010",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does λέγει mean?",
      target_form: "λέγει",
      lemma: "λέγω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it says, speaks",
      explanation: "λέγει means “he/she/it says, speaks.”",
      choices: [
        {
          text: "he/she/it says, speaks",
          correct: true,
          feedback: "Correct. λέγει means “he/she/it says, speaks.”"
        },
        {
          text: "he/she/it smiles",
          correct: false,
          feedback: "No. λέγει means “he/she/it says, speaks.”"
        },
        {
          text: "he/she/it trains",
          correct: false,
          feedback: "No. λέγει means “he/she/it says, speaks.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-011",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does μειδιᾷ mean?",
      target_form: "μειδιᾷ",
      lemma: "μειδιάω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "verb meaning",
      answer: "he/she/it smiles",
      explanation: "μειδιᾷ means “he/she/it smiles.”",
      choices: [
        {
          text: "he/she/it smiles",
          correct: true,
          feedback: "Correct. μειδιᾷ means “he/she/it smiles.”"
        },
        {
          text: "he/she/it loves",
          correct: false,
          feedback: "No. μειδιᾷ means “he/she/it smiles.”"
        },
        {
          text: "he/she/it teaches",
          correct: false,
          feedback: "No. μειδιᾷ means “he/she/it smiles.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-012",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does οἰκεῖ mean?",
      target_form: "οἰκεῖ",
      lemma: "οἰκέω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "verb meaning",
      answer: "he/she/it lives, dwells",
      explanation: "οἰκεῖ means “he/she/it lives, dwells.”",
      choices: [
        {
          text: "he/she/it lives, dwells",
          correct: true,
          feedback: "Correct. οἰκεῖ means “he/she/it lives, dwells.”"
        },
        {
          text: "he/she/it awakens",
          correct: false,
          feedback: "No. οἰκεῖ means “he/she/it lives, dwells.”"
        },
        {
          text: "he/she/it writes",
          correct: false,
          feedback: "No. οἰκεῖ means “he/she/it lives, dwells.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-013",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does ὁρᾷ mean?",
      target_form: "ὁρᾷ",
      lemma: "ὁράω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "verb meaning",
      answer: "he/she/it sees",
      explanation: "ὁρᾷ means “he/she/it sees.”",
      choices: [
        {
          text: "he/she/it sees",
          correct: true,
          feedback: "Correct. ὁρᾷ means “he/she/it sees.”"
        },
        {
          text: "he/she/it seeks",
          correct: false,
          feedback: "No. ὁρᾷ means “he/she/it sees.”"
        },
        {
          text: "he/she/it walks",
          correct: false,
          feedback: "No. ὁρᾷ means “he/she/it sees.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-014",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does παιδεύει mean?",
      target_form: "παιδεύει",
      lemma: "παιδεύω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it educates, trains",
      explanation: "παιδεύει means “he/she/it educates, trains.”",
      choices: [
        {
          text: "he/she/it educates, trains",
          correct: true,
          feedback: "Correct. παιδεύει means “he/she/it educates, trains.”"
        },
        {
          text: "he/she/it hears",
          correct: false,
          feedback: "No. παιδεύει means “he/she/it educates, trains.”"
        },
        {
          text: "he/she/it smiles",
          correct: false,
          feedback: "No. παιδεύει means “he/she/it educates, trains.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-015",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does φιλεῖ mean?",
      target_form: "φιλεῖ",
      lemma: "φιλέω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "verb meaning",
      answer: "he/she/it loves",
      explanation: "φιλεῖ means “he/she/it loves.”",
      choices: [
        {
          text: "he/she/it loves",
          correct: true,
          feedback: "Correct. φιλεῖ means “he/she/it loves.”"
        },
        {
          text: "he/she/it is",
          correct: false,
          feedback: "No. φιλεῖ means “he/she/it loves.”"
        },
        {
          text: "he/she/it walks",
          correct: false,
          feedback: "No. φιλεῖ means “he/she/it loves.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-016",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "What does χαίρει mean?",
      target_form: "χαίρει",
      lemma: "χαίρω",
      parse: "3rd person singular present active indicative",
      skill: "verb meaning",
      answer: "he/she/it rejoices, is glad",
      explanation: "χαίρει means “he/she/it rejoices, is glad.”",
      choices: [
        {
          text: "he/she/it rejoices, is glad",
          correct: true,
          feedback: "Correct. χαίρει means “he/she/it rejoices, is glad.”"
        },
        {
          text: "he/she/it teaches",
          correct: false,
          feedback: "No. χαίρει means “he/she/it rejoices, is glad.”"
        },
        {
          text: "he/she/it sees",
          correct: false,
          feedback: "No. χαίρει means “he/she/it rejoices, is glad.”"
        }
      ]
    },

    // Group 1B — Recognizing the verb in a sentence
    {
      id: "lesson-1-verb-forms-017",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ Σωκράτης διδάσκει?",
      target_form: "διδάσκει",
      lemma: "διδάσκω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "διδάσκει",
      explanation: "διδάσκει is the verb form in the sentence.",
      choices: [
        {
          text: "διδάσκει",
          correct: true,
          feedback: "Correct. διδάσκει is the verb form."
        },
        {
          text: "Σωκράτης",
          correct: false,
          feedback: "No. Σωκράτης is the noun or name; διδάσκει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; διδάσκει is the verb form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-018",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ Ξενοφῶν βαδίζει?",
      target_form: "βαδίζει",
      lemma: "βαδίζω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "βαδίζει",
      explanation: "βαδίζει is the verb form in the sentence.",
      choices: [
        {
          text: "βαδίζει",
          correct: true,
          feedback: "Correct. βαδίζει is the verb form."
        },
        {
          text: "Ξενοφῶν",
          correct: false,
          feedback: "No. Ξενοφῶν is the noun or name; βαδίζει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; βαδίζει is the verb form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-019",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ μαθητὴς γράφει?",
      target_form: "γράφει",
      lemma: "γράφω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "γράφει",
      explanation: "γράφει is the verb form in the sentence.",
      choices: [
        {
          text: "γράφει",
          correct: true,
          feedback: "Correct. γράφει is the verb form."
        },
        {
          text: "μαθητής",
          correct: false,
          feedback: "No. μαθητής is the noun or name; γράφει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; γράφει is the verb form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-020",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ ἄνθρωπος χαίρει?",
      target_form: "χαίρει",
      lemma: "χαίρω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "χαίρει",
      explanation: "χαίρει is the verb form in the sentence.",
      choices: [
        {
          text: "χαίρει",
          correct: true,
          feedback: "Correct. χαίρει is the verb form."
        },
        {
          text: "ἄνθρωπος",
          correct: false,
          feedback: "No. ἄνθρωπος is the noun or name; χαίρει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; χαίρει is the verb form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-021",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ νεανίας γυμνάζει?",
      target_form: "γυμνάζει",
      lemma: "γυμνάζω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "γυμνάζει",
      explanation: "γυμνάζει is the verb form in the sentence.",
      choices: [
        {
          text: "γυμνάζει",
          correct: true,
          feedback: "Correct. γυμνάζει is the verb form."
        },
        {
          text: "νεανίας",
          correct: false,
          feedback: "No. νεανίας is the noun or name; γυμνάζει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; γυμνάζει is the verb form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-022",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ Σωκράτης λέγει?",
      target_form: "λέγει",
      lemma: "λέγω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "λέγει",
      explanation: "λέγει is the verb form in the sentence.",
      choices: [
        {
          text: "λέγει",
          correct: true,
          feedback: "Correct. λέγει is the verb form."
        },
        {
          text: "Σωκράτης",
          correct: false,
          feedback: "No. Σωκράτης is the noun or name; λέγει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; λέγει is the verb form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-023",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ μαθητὴς ἀκούει?",
      target_form: "ἀκούει",
      lemma: "ἀκούω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "ἀκούει",
      explanation: "ἀκούει is the verb form in the sentence.",
      choices: [
        {
          text: "ἀκούει",
          correct: true,
          feedback: "Correct. ἀκούει is the verb form."
        },
        {
          text: "μαθητής",
          correct: false,
          feedback: "No. μαθητής is the noun or name; ἀκούει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; ἀκούει is the verb form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-024",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which word is the verb in ὁ Ξενοφῶν παιδεύει?",
      target_form: "παιδεύει",
      lemma: "παιδεύω",
      parse: "3rd person singular present active indicative",
      skill: "verb recognition in sentence",
      answer: "παιδεύει",
      explanation: "παιδεύει is the verb form in the sentence.",
      choices: [
        {
          text: "παιδεύει",
          correct: true,
          feedback: "Correct. παιδεύει is the verb form."
        },
        {
          text: "Ξενοφῶν",
          correct: false,
          feedback: "No. Ξενοφῶν is the noun or name; παιδεύει is the verb form."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "No. ὁ is the article; παιδεύει is the verb form."
        }
      ]
    },

    // Group 1C — What the -ει ending shows
    {
      id: "lesson-1-verb-forms-025",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which ending below marks 3rd person singular present active indicative?",
      target_form: "-ει",
      lemma: "",
      parse: "3rd person singular present active indicative ending",
      skill: "verb ending function",
      answer: "-ει",
      explanation: "The ending -ει commonly marks 3rd person singular present active indicative in the regular verb forms shown here.",
      choices: [
        {
          text: "-ει",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "-ειν",
          correct: false,
          feedback: "The ending -ει commonly marks 3rd person singular present active indicative in the regular verb forms shown here."
        },
        {
          text: "-ουσι",
          correct: false,
          feedback: "The ending -ει commonly marks 3rd person singular present active indicative in the regular verb forms shown here."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-026",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In γράφει, what does the ending -ει show?",
      target_form: "γράφει",
      lemma: "γράφω",
      parse: "3rd person singular present active indicative",
      skill: "ending function",
      answer: "3rd person singular present active indicative",
      explanation: "In γράφει, -ει shows 3rd person singular present active indicative.",
      choices: [
        {
          text: "3rd person singular present active indicative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "present active infinitive",
          correct: false,
          feedback: "In γράφει, -ει shows 3rd person singular present active indicative."
        },
        {
          text: "3rd person plural present active indicative",
          correct: false,
          feedback: "In γράφει, -ει shows 3rd person singular present active indicative."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-027",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In λέγει, what does the ending -ει show?",
      target_form: "λέγει",
      lemma: "λέγω",
      parse: "3rd person singular present active indicative",
      skill: "ending function",
      answer: "3rd person singular present active indicative",
      explanation: "In λέγει, -ει shows 3rd person singular present active indicative.",
      choices: [
        {
          text: "3rd person singular present active indicative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "1st person singular present active indicative",
          correct: false,
          feedback: "In λέγει, -ει shows 3rd person singular present active indicative."
        },
        {
          text: "3rd person plural present active indicative",
          correct: false,
          feedback: "In λέγει, -ει shows 3rd person singular present active indicative."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-028",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In διδάσκει, what does -ει show?",
      target_form: "διδάσκει",
      lemma: "διδάσκω",
      parse: "3rd person singular present active indicative",
      skill: "ending function",
      answer: "3rd person singular present active indicative",
      explanation: "In διδάσκει, -ει shows 3rd person singular present active indicative.",
      choices: [
        {
          text: "3rd person singular present active indicative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative singular masculine",
          correct: false,
          feedback: "In διδάσκει, -ει shows 3rd person singular present active indicative."
        },
        {
          text: "neuter nominative singular",
          correct: false,
          feedback: "In διδάσκει, -ει shows 3rd person singular present active indicative."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-029",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which form clearly shows the regular -ει ending?",
      target_form: "ἀκούει",
      lemma: "ἀκούω",
      parse: "3rd person singular present active indicative",
      skill: "regular -ει recognition",
      answer: "ἀκούει",
      explanation: "ἀκούει clearly shows the regular -ει ending.",
      choices: [
        {
          text: "ἀκούει",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁρᾷ",
          correct: false,
          feedback: "ἀκούει clearly shows the regular -ει ending."
        },
        {
          text: "ἐστιν",
          correct: false,
          feedback: "ἀκούει clearly shows the regular -ει ending."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-030",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which form clearly shows the regular -ει ending?",
      target_form: "παιδεύει",
      lemma: "παιδεύω",
      parse: "3rd person singular present active indicative",
      skill: "regular -ει recognition",
      answer: "παιδεύει",
      explanation: "παιδεύει clearly shows the regular -ει ending.",
      choices: [
        {
          text: "παιδεύει",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "μειδιᾷ",
          correct: false,
          feedback: "παιδεύει clearly shows the regular -ει ending."
        },
        {
          text: "ἐστιν",
          correct: false,
          feedback: "παιδεύει clearly shows the regular -ει ending."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-031",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which form clearly shows the regular -ει ending?",
      target_form: "χαίρει",
      lemma: "χαίρω",
      parse: "3rd person singular present active indicative",
      skill: "regular -ει recognition",
      answer: "χαίρει",
      explanation: "χαίρει clearly shows the regular -ει ending.",
      choices: [
        {
          text: "χαίρει",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "φιλεῖ",
          correct: false,
          feedback: "χαίρει clearly shows the regular -ει ending."
        },
        {
          text: "ὁρᾷ",
          correct: false,
          feedback: "χαίρει clearly shows the regular -ει ending."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-032",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which statement is true of γράφει?",
      target_form: "γράφει",
      lemma: "γράφω",
      parse: "3rd person singular present active indicative",
      skill: "verb form understanding",
      answer: "It is a 3rd person singular present active verb form.",
      explanation: "γράφει is a 3rd person singular present active verb form.",
      choices: [
        {
          text: "It is a 3rd person singular present active verb form.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is an accusative noun.",
          correct: false,
          feedback: "γράφει is a 3rd person singular present active verb form."
        },
        {
          text: "It is a definite article.",
          correct: false,
          feedback: "γράφει is a 3rd person singular present active verb form."
        }
      ]
    },

    // Group 1D — Stem + ending
    {
      id: "lesson-1-verb-forms-033",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In ἀκούει, which part is the stem?",
      target_form: "ἀκούει",
      lemma: "ἀκούω",
      parse: "3rd person singular present active indicative",
      skill: "stem recognition",
      answer: "ἀκου-",
      explanation: "ἀκούει can be divided into a stem and an ending; here the answer is ἀκου-.",
      choices: [
        {
          text: "ἀκου-",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "-ει",
          correct: false,
          feedback: "ἀκούει can be divided into a stem and an ending; here the answer is ἀκου-."
        },
        {
          text: "ἀκούει",
          correct: false,
          feedback: "ἀκούει can be divided into a stem and an ending; here the answer is ἀκου-."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-034",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In βαδίζει, which part is the stem?",
      target_form: "βαδίζει",
      lemma: "βαδίζω",
      parse: "3rd person singular present active indicative",
      skill: "stem recognition",
      answer: "βαδιζ-",
      explanation: "βαδίζει can be divided into a stem and an ending; here the answer is βαδιζ-.",
      choices: [
        {
          text: "βαδιζ-",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "-ει",
          correct: false,
          feedback: "βαδίζει can be divided into a stem and an ending; here the answer is βαδιζ-."
        },
        {
          text: "βαδίζει",
          correct: false,
          feedback: "βαδίζει can be divided into a stem and an ending; here the answer is βαδιζ-."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-035",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In γράφει, which part is the stem?",
      target_form: "γράφει",
      lemma: "γράφω",
      parse: "3rd person singular present active indicative",
      skill: "stem recognition",
      answer: "γραφ-",
      explanation: "γράφει can be divided into a stem and an ending; here the answer is γραφ-.",
      choices: [
        {
          text: "γραφ-",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "-ει",
          correct: false,
          feedback: "γράφει can be divided into a stem and an ending; here the answer is γραφ-."
        },
        {
          text: "γράφει",
          correct: false,
          feedback: "γράφει can be divided into a stem and an ending; here the answer is γραφ-."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-036",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In γυμνάζει, which part is the stem?",
      target_form: "γυμνάζει",
      lemma: "γυμνάζω",
      parse: "3rd person singular present active indicative",
      skill: "stem recognition",
      answer: "γυμναζ-",
      explanation: "γυμνάζει can be divided into a stem and an ending; here the answer is γυμναζ-.",
      choices: [
        {
          text: "γυμναζ-",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "-ει",
          correct: false,
          feedback: "γυμνάζει can be divided into a stem and an ending; here the answer is γυμναζ-."
        },
        {
          text: "γυμνάζει",
          correct: false,
          feedback: "γυμνάζει can be divided into a stem and an ending; here the answer is γυμναζ-."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-037",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In διδάσκει, which part is the stem?",
      target_form: "διδάσκει",
      lemma: "διδάσκω",
      parse: "3rd person singular present active indicative",
      skill: "stem recognition",
      answer: "διδασκ-",
      explanation: "διδάσκει can be divided into a stem and an ending; here the answer is διδασκ-.",
      choices: [
        {
          text: "διδασκ-",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "-ει",
          correct: false,
          feedback: "διδάσκει can be divided into a stem and an ending; here the answer is διδασκ-."
        },
        {
          text: "διδάσκει",
          correct: false,
          feedback: "διδάσκει can be divided into a stem and an ending; here the answer is διδασκ-."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-038",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In ἐγείρει, which part is the stem?",
      target_form: "ἐγείρει",
      lemma: "ἐγείρω",
      parse: "3rd person singular present active indicative",
      skill: "stem recognition",
      answer: "ἐγειρ-",
      explanation: "ἐγείρει can be divided into a stem and an ending; here the answer is ἐγειρ-.",
      choices: [
        {
          text: "ἐγειρ-",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "-ει",
          correct: false,
          feedback: "ἐγείρει can be divided into a stem and an ending; here the answer is ἐγειρ-."
        },
        {
          text: "ἐγείρει",
          correct: false,
          feedback: "ἐγείρει can be divided into a stem and an ending; here the answer is ἐγειρ-."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-039",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In λέγει, which part is the ending?",
      target_form: "λέγει",
      lemma: "λέγω",
      parse: "3rd person singular present active indicative",
      skill: "ending recognition",
      answer: "-ει",
      explanation: "λέγει can be divided into a stem and an ending; here the answer is -ει.",
      choices: [
        {
          text: "-ει",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "λεγ-",
          correct: false,
          feedback: "λέγει can be divided into a stem and an ending; here the answer is -ει."
        },
        {
          text: "λέγει",
          correct: false,
          feedback: "λέγει can be divided into a stem and an ending; here the answer is -ει."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-040",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "In παιδεύει, which part is the ending?",
      target_form: "παιδεύει",
      lemma: "παιδεύω",
      parse: "3rd person singular present active indicative",
      skill: "ending recognition",
      answer: "-ει",
      explanation: "παιδεύει can be divided into a stem and an ending; here the answer is -ει.",
      choices: [
        {
          text: "-ει",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "παιδευ-",
          correct: false,
          feedback: "παιδεύει can be divided into a stem and an ending; here the answer is -ει."
        },
        {
          text: "παιδεύει",
          correct: false,
          feedback: "παιδεύει can be divided into a stem and an ending; here the answer is -ει."
        }
      ]
    },

    // Group 1E — Contracted forms, without making students master contracts yet
    {
      id: "lesson-1-verb-forms-041",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Why does ζητεῖ not visibly end in regular -ει like γράφει?",
      target_form: "ζητεῖ",
      lemma: "ζητέω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "contracted form awareness",
      answer: "It is a contracted verb form.",
      explanation: "ζητεῖ is a contracted 3rd person singular present active indicative form.",
      choices: [
        {
          text: "It is a contracted verb form.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is a noun.",
          correct: false,
          feedback: "ζητεῖ is a contracted 3rd person singular present active indicative form."
        },
        {
          text: "It is plural.",
          correct: false,
          feedback: "ζητεῖ is a contracted 3rd person singular present active indicative form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-042",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Why does φιλεῖ not visibly end in regular -ει like γράφει?",
      target_form: "φιλεῖ",
      lemma: "φιλέω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "contracted form awareness",
      answer: "It is a contracted verb form.",
      explanation: "φιλεῖ is a contracted 3rd person singular present active indicative form.",
      choices: [
        {
          text: "It is a contracted verb form.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is an article.",
          correct: false,
          feedback: "φιλεῖ is a contracted 3rd person singular present active indicative form."
        },
        {
          text: "It is accusative.",
          correct: false,
          feedback: "φιλεῖ is a contracted 3rd person singular present active indicative form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-043",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Why does οἰκεῖ not visibly end in regular -ει like γράφει?",
      target_form: "οἰκεῖ",
      lemma: "οἰκέω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "contracted form awareness",
      answer: "It is a contracted verb form.",
      explanation: "οἰκεῖ is a contracted 3rd person singular present active indicative form.",
      choices: [
        {
          text: "It is a contracted verb form.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is a proper name.",
          correct: false,
          feedback: "οἰκεῖ is a contracted 3rd person singular present active indicative form."
        },
        {
          text: "It is a noun ending.",
          correct: false,
          feedback: "οἰκεῖ is a contracted 3rd person singular present active indicative form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-044",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Why does ὁρᾷ look different from γράφει?",
      target_form: "ὁρᾷ",
      lemma: "ὁράω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "contracted form awareness",
      answer: "It is a contracted verb form.",
      explanation: "ὁρᾷ is a contracted 3rd person singular present active indicative form.",
      choices: [
        {
          text: "It is a contracted verb form.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is a plural verb form.",
          correct: false,
          feedback: "ὁρᾷ is a contracted 3rd person singular present active indicative form."
        },
        {
          text: "It is the article ὁ plus a noun.",
          correct: false,
          feedback: "ὁρᾷ is a contracted 3rd person singular present active indicative form."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-045",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which form is a contracted verb meaning “he/she/it sees”?",
      target_form: "ὁρᾷ",
      lemma: "ὁράω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "contracted form awareness",
      answer: "ὁρᾷ",
      explanation: "ὁρᾷ is the contracted form meaning “he/she/it sees.”",
      choices: [
        {
          text: "ὁρᾷ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "γράφει",
          correct: false,
          feedback: "ὁρᾷ is the contracted form meaning “he/she/it sees.”"
        },
        {
          text: "διδάσκει",
          correct: false,
          feedback: "ὁρᾷ is the contracted form meaning “he/she/it sees.”"
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-046",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which form is a contracted verb meaning “he/she/it loves”?",
      target_form: "φιλεῖ",
      lemma: "φιλέω",
      parse: "3rd person singular present active indicative; contracted form",
      skill: "contracted form awareness",
      answer: "φιλεῖ",
      explanation: "φιλεῖ is the contracted form meaning “he/she/it loves.”",
      choices: [
        {
          text: "φιλεῖ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "χαίρει",
          correct: false,
          feedback: "φιλεῖ is the contracted form meaning “he/she/it loves.”"
        },
        {
          text: "γράφει",
          correct: false,
          feedback: "φιλεῖ is the contracted form meaning “he/she/it loves.”"
        }
      ]
    },

    // Group 1F — Reading small verb-centered meanings
    {
      id: "lesson-1-verb-forms-047",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which sentence means “Socrates teaches”?",
      target_form: "ὁ Σωκράτης διδάσκει.",
      lemma: "διδάσκω",
      parse: "simple sentence with 3rd person singular verb",
      skill: "sentence meaning",
      answer: "ὁ Σωκράτης διδάσκει.",
      explanation: "ὁ Σωκράτης διδάσκει. is the sentence that matches the English prompt.",
      choices: [
        {
          text: "ὁ Σωκράτης διδάσκει.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ Σωκράτης βαδίζει.",
          correct: false,
          feedback: "ὁ Σωκράτης διδάσκει. is the sentence that matches the English prompt."
        },
        {
          text: "ὁ Σωκράτης χαίρει.",
          correct: false,
          feedback: "ὁ Σωκράτης διδάσκει. is the sentence that matches the English prompt."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-048",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which sentence means “Xenophon walks”?",
      target_form: "ὁ Ξενοφῶν βαδίζει.",
      lemma: "βαδίζω",
      parse: "simple sentence with 3rd person singular verb",
      skill: "sentence meaning",
      answer: "ὁ Ξενοφῶν βαδίζει.",
      explanation: "ὁ Ξενοφῶν βαδίζει. is the sentence that matches the English prompt.",
      choices: [
        {
          text: "ὁ Ξενοφῶν βαδίζει.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ Ξενοφῶν διδάσκει.",
          correct: false,
          feedback: "ὁ Ξενοφῶν βαδίζει. is the sentence that matches the English prompt."
        },
        {
          text: "ὁ Ξενοφῶν φιλεῖ.",
          correct: false,
          feedback: "ὁ Ξενοφῶν βαδίζει. is the sentence that matches the English prompt."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-049",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which sentence means “the student writes”?",
      target_form: "ὁ μαθητὴς γράφει.",
      lemma: "γράφω",
      parse: "simple sentence with 3rd person singular verb",
      skill: "sentence meaning",
      answer: "ὁ μαθητὴς γράφει.",
      explanation: "ὁ μαθητὴς γράφει. is the sentence that matches the English prompt.",
      choices: [
        {
          text: "ὁ μαθητὴς γράφει.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ μαθητὴς ἀκούει.",
          correct: false,
          feedback: "ὁ μαθητὴς γράφει. is the sentence that matches the English prompt."
        },
        {
          text: "ὁ μαθητὴς γυμνάζει.",
          correct: false,
          feedback: "ὁ μαθητὴς γράφει. is the sentence that matches the English prompt."
        }
      ]
    },
    {
      id: "lesson-1-verb-forms-050",
      lesson: "lesson-1",
      topic: "verb-forms",
      type: "multiple_choice",
      prompt: "Which sentence means “the person rejoices/is glad”?",
      target_form: "ὁ ἄνθρωπος χαίρει.",
      lemma: "χαίρω",
      parse: "simple sentence with 3rd person singular verb",
      skill: "sentence meaning",
      answer: "ὁ ἄνθρωπος χαίρει.",
      explanation: "ὁ ἄνθρωπος χαίρει. is the sentence that matches the English prompt.",
      choices: [
        {
          text: "ὁ ἄνθρωπος χαίρει.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ ἄνθρωπος ζητεῖ.",
          correct: false,
          feedback: "ὁ ἄνθρωπος χαίρει. is the sentence that matches the English prompt."
        },
        {
          text: "ὁ ἄνθρωπος λέγει.",
          correct: false,
          feedback: "ὁ ἄνθρωπος χαίρει. is the sentence that matches the English prompt."
        }
      ]
    },

  ];

  const LESSON_1_GRAMMAR_2_NOUNS_CASES_AGREEMENT = [
    // Group 2A — Noun gender from article + noun
    {
      id: "lesson-1-nouns-cases-agreement-001",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ἡ ἀλήθεια?",
      target_form: "ἡ ἀλήθεια",
      lemma: "ἀλήθεια",
      parse: "nominative singular feminine",
      skill: "gender recognition",
      answer: "feminine",
      explanation: "ἡ ἀλήθεια is feminine; the article helps show the noun's gender.",
      choices: [
        {
          text: "feminine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine",
          correct: false,
          feedback: "ἡ ἀλήθεια is feminine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ἡ ἀλήθεια is feminine; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-002",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ὁ ἄνθρωπος?",
      target_form: "ὁ ἄνθρωπος",
      lemma: "ἄνθρωπος",
      parse: "nominative singular masculine",
      skill: "gender recognition",
      answer: "masculine",
      explanation: "ὁ ἄνθρωπος is masculine; the article helps show the noun's gender.",
      choices: [
        {
          text: "masculine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "feminine",
          correct: false,
          feedback: "ὁ ἄνθρωπος is masculine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ὁ ἄνθρωπος is masculine; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-003",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ἡ ἀρετή?",
      target_form: "ἡ ἀρετή",
      lemma: "ἀρετή",
      parse: "nominative singular feminine",
      skill: "gender recognition",
      answer: "feminine",
      explanation: "ἡ ἀρετή is feminine; the article helps show the noun's gender.",
      choices: [
        {
          text: "feminine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine",
          correct: false,
          feedback: "ἡ ἀρετή is feminine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ἡ ἀρετή is feminine; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-004",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is τὸ βιβλίον?",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "nominative or accusative singular neuter",
      skill: "gender recognition",
      answer: "neuter",
      explanation: "τὸ βιβλίον is neuter; the article helps show the noun's gender.",
      choices: [
        {
          text: "neuter",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine",
          correct: false,
          feedback: "τὸ βιβλίον is neuter; the article helps show the noun's gender."
        },
        {
          text: "feminine",
          correct: false,
          feedback: "τὸ βιβλίον is neuter; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-005",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ὁ μαθητής?",
      target_form: "ὁ μαθητής",
      lemma: "μαθητής",
      parse: "nominative singular masculine",
      skill: "gender recognition",
      answer: "masculine",
      explanation: "ὁ μαθητής is masculine; the article helps show the noun's gender.",
      choices: [
        {
          text: "masculine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "feminine",
          correct: false,
          feedback: "ὁ μαθητής is masculine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ὁ μαθητής is masculine; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-006",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ὁ νεανίας?",
      target_form: "ὁ νεανίας",
      lemma: "νεανίας",
      parse: "nominative singular masculine",
      skill: "gender recognition",
      answer: "masculine",
      explanation: "ὁ νεανίας is masculine; the article helps show the noun's gender.",
      choices: [
        {
          text: "masculine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "feminine",
          correct: false,
          feedback: "ὁ νεανίας is masculine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ὁ νεανίας is masculine; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-007",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ἡ σοφία?",
      target_form: "ἡ σοφία",
      lemma: "σοφία",
      parse: "nominative singular feminine",
      skill: "gender recognition",
      answer: "feminine",
      explanation: "ἡ σοφία is feminine; the article helps show the noun's gender.",
      choices: [
        {
          text: "feminine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine",
          correct: false,
          feedback: "ἡ σοφία is feminine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ἡ σοφία is feminine; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-008",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ὁ Σωκράτης?",
      target_form: "ὁ Σωκράτης",
      lemma: "Σωκράτης",
      parse: "nominative singular masculine",
      skill: "gender recognition",
      answer: "masculine",
      explanation: "ὁ Σωκράτης is masculine; the article helps show the noun's gender.",
      choices: [
        {
          text: "masculine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "feminine",
          correct: false,
          feedback: "ὁ Σωκράτης is masculine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ὁ Σωκράτης is masculine; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-009",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is τὸ σῶμα?",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "nominative or accusative singular neuter",
      skill: "gender recognition",
      answer: "neuter",
      explanation: "τὸ σῶμα is neuter; the article helps show the noun's gender.",
      choices: [
        {
          text: "neuter",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine",
          correct: false,
          feedback: "τὸ σῶμα is neuter; the article helps show the noun's gender."
        },
        {
          text: "feminine",
          correct: false,
          feedback: "τὸ σῶμα is neuter; the article helps show the noun's gender."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-010",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What gender is ἡ ψυχή?",
      target_form: "ἡ ψυχή",
      lemma: "ψυχή",
      parse: "nominative singular feminine",
      skill: "gender recognition",
      answer: "feminine",
      explanation: "ἡ ψυχή is feminine; the article helps show the noun's gender.",
      choices: [
        {
          text: "feminine",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine",
          correct: false,
          feedback: "ἡ ψυχή is feminine; the article helps show the noun's gender."
        },
        {
          text: "neuter",
          correct: false,
          feedback: "ἡ ψυχή is feminine; the article helps show the noun's gender."
        }
      ]
    },

    // Group 2B — Nominative and accusative in sentence context
    {
      id: "lesson-1-nouns-cases-agreement-011",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ἡ ἀλήθεια καλή ἐστιν, what case is ἡ ἀλήθεια?",
      target_form: "ἡ ἀλήθεια",
      lemma: "ἀλήθεια",
      parse: "nominative singular feminine",
      skill: "case recognition in context",
      answer: "nominative",
      explanation: "ἡ ἀλήθεια is nominative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "ἡ ἀλήθεια is nominative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-012",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ Σωκράτης ζητεῖ τὴν ἀλήθειαν, what case is τὴν ἀλήθειαν?",
      target_form: "τὴν ἀλήθειαν",
      lemma: "ἀλήθεια",
      parse: "accusative singular feminine",
      skill: "case recognition in context",
      answer: "accusative",
      explanation: "τὴν ἀλήθειαν is accusative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "τὴν ἀλήθειαν is accusative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-013",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ ἄνθρωπος χαίρει, what case is ὁ ἄνθρωπος?",
      target_form: "ὁ ἄνθρωπος",
      lemma: "ἄνθρωπος",
      parse: "nominative singular masculine",
      skill: "case recognition in context",
      answer: "nominative",
      explanation: "ὁ ἄνθρωπος is nominative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "ὁ ἄνθρωπος is nominative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-014",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ Σωκράτης διδάσκει τὸν ἄνθρωπον, what case is τὸν ἄνθρωπον?",
      target_form: "τὸν ἄνθρωπον",
      lemma: "ἄνθρωπος",
      parse: "accusative singular masculine",
      skill: "case recognition in context",
      answer: "accusative",
      explanation: "τὸν ἄνθρωπον is accusative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "τὸν ἄνθρωπον is accusative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-015",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ἡ ἀρετὴ καλή ἐστιν, what case is ἡ ἀρετή?",
      target_form: "ἡ ἀρετή",
      lemma: "ἀρετή",
      parse: "nominative singular feminine",
      skill: "case recognition in context",
      answer: "nominative",
      explanation: "ἡ ἀρετή is nominative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "ἡ ἀρετή is nominative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-016",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ νεανίας φιλεῖ τὴν ἀρετήν, what case is τὴν ἀρετήν?",
      target_form: "τὴν ἀρετήν",
      lemma: "ἀρετή",
      parse: "accusative singular feminine",
      skill: "case recognition in context",
      answer: "accusative",
      explanation: "τὴν ἀρετήν is accusative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "τὴν ἀρετήν is accusative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-017",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In τὸ βιβλίον καλόν ἐστιν, what case is τὸ βιβλίον?",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "nominative singular neuter",
      skill: "case recognition in context",
      answer: "nominative",
      explanation: "τὸ βιβλίον is nominative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "τὸ βιβλίον is nominative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-018",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ μαθητὴς γράφει τὸ βιβλίον, what case is τὸ βιβλίον?",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "accusative singular neuter",
      skill: "case recognition in context",
      answer: "accusative",
      explanation: "τὸ βιβλίον is accusative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "τὸ βιβλίον is accusative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-019",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ μαθητὴς ἀκούει, what case is ὁ μαθητής?",
      target_form: "ὁ μαθητής",
      lemma: "μαθητής",
      parse: "nominative singular masculine",
      skill: "case recognition in context",
      answer: "nominative",
      explanation: "ὁ μαθητής is nominative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "ὁ μαθητής is nominative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-020",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ Σωκράτης παιδεύει τὸν μαθητήν, what case is τὸν μαθητήν?",
      target_form: "τὸν μαθητήν",
      lemma: "μαθητής",
      parse: "accusative singular masculine",
      skill: "case recognition in context",
      answer: "accusative",
      explanation: "τὸν μαθητήν is accusative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "τὸν μαθητήν is accusative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-021",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In τὸ σῶμα καλόν ἐστιν, what case is τὸ σῶμα?",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "nominative singular neuter",
      skill: "case recognition in context",
      answer: "nominative",
      explanation: "τὸ σῶμα is nominative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "τὸ σῶμα is nominative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-022",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ ἄνθρωπος γυμνάζει τὸ σῶμα, what case is τὸ σῶμα?",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "accusative singular neuter",
      skill: "case recognition in context",
      answer: "accusative",
      explanation: "τὸ σῶμα is accusative in this sentence. The sentence context tells the case.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "τὸ σῶμα is accusative in this sentence. The sentence context tells the case."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The context does show the case here."
        }
      ]
    },

    // Group 2C — Subject and direct object
    {
      id: "lesson-1-nouns-cases-agreement-023",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ Σωκράτης διδάσκει τὸν μαθητήν, what job does ὁ Σωκράτης have?",
      target_form: "ὁ Σωκράτης",
      lemma: "Σωκράτης",
      parse: "nominative singular masculine",
      skill: "sentence role",
      answer: "subject",
      explanation: "ὁ Σωκράτης is the subject in this sentence.",
      choices: [
        {
          text: "subject",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "direct object",
          correct: false,
          feedback: "ὁ Σωκράτης is the subject in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. ὁ Σωκράτης is a noun phrase, not the verb."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-024",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ Σωκράτης διδάσκει τὸν μαθητήν, what job does τὸν μαθητήν have?",
      target_form: "τὸν μαθητήν",
      lemma: "μαθητής",
      parse: "accusative singular masculine",
      skill: "sentence role",
      answer: "direct object",
      explanation: "τὸν μαθητήν is the direct object in this sentence.",
      choices: [
        {
          text: "direct object",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "subject",
          correct: false,
          feedback: "τὸν μαθητήν is the direct object in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. τὸν μαθητήν is a noun phrase, not the verb."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-025",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ μαθητὴς γράφει τὸ βιβλίον, what job does ὁ μαθητής have?",
      target_form: "ὁ μαθητής",
      lemma: "μαθητής",
      parse: "nominative singular masculine",
      skill: "sentence role",
      answer: "subject",
      explanation: "ὁ μαθητής is the subject in this sentence.",
      choices: [
        {
          text: "subject",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "direct object",
          correct: false,
          feedback: "ὁ μαθητής is the subject in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. ὁ μαθητής is a noun phrase, not the verb."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-026",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ μαθητὴς γράφει τὸ βιβλίον, what job does τὸ βιβλίον have?",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "accusative singular neuter",
      skill: "sentence role",
      answer: "direct object",
      explanation: "τὸ βιβλίον is the direct object in this sentence.",
      choices: [
        {
          text: "direct object",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "subject",
          correct: false,
          feedback: "τὸ βιβλίον is the direct object in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. τὸ βιβλίον is a noun phrase, not the verb."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-027",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ νεανίας ζητεῖ τὴν σοφίαν, what job does ὁ νεανίας have?",
      target_form: "ὁ νεανίας",
      lemma: "νεανίας",
      parse: "nominative singular masculine",
      skill: "sentence role",
      answer: "subject",
      explanation: "ὁ νεανίας is the subject in this sentence.",
      choices: [
        {
          text: "subject",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "direct object",
          correct: false,
          feedback: "ὁ νεανίας is the subject in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. ὁ νεανίας is a noun phrase, not the verb."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-028",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ νεανίας ζητεῖ τὴν σοφίαν, what job does τὴν σοφίαν have?",
      target_form: "τὴν σοφίαν",
      lemma: "σοφία",
      parse: "accusative singular feminine",
      skill: "sentence role",
      answer: "direct object",
      explanation: "τὴν σοφίαν is the direct object in this sentence.",
      choices: [
        {
          text: "direct object",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "subject",
          correct: false,
          feedback: "τὴν σοφίαν is the direct object in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. τὴν σοφίαν is a noun phrase, not the verb."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-029",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ ἄνθρωπος γυμνάζει τὸ σῶμα, what job does ὁ ἄνθρωπος have?",
      target_form: "ὁ ἄνθρωπος",
      lemma: "ἄνθρωπος",
      parse: "nominative singular masculine",
      skill: "sentence role",
      answer: "subject",
      explanation: "ὁ ἄνθρωπος is the subject in this sentence.",
      choices: [
        {
          text: "subject",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "direct object",
          correct: false,
          feedback: "ὁ ἄνθρωπος is the subject in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. ὁ ἄνθρωπος is a noun phrase, not the verb."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-030",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ ἄνθρωπος γυμνάζει τὸ σῶμα, what job does τὸ σῶμα have?",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "accusative singular neuter",
      skill: "sentence role",
      answer: "direct object",
      explanation: "τὸ σῶμα is the direct object in this sentence.",
      choices: [
        {
          text: "direct object",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "subject",
          correct: false,
          feedback: "τὸ σῶμα is the direct object in this sentence."
        },
        {
          text: "verb",
          correct: false,
          feedback: "No. τὸ σῶμα is a noun phrase, not the verb."
        }
      ]
    },

    // Group 2D — Adjective agreement
    {
      id: "lesson-1-nouns-cases-agreement-031",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: ἡ ______ ἀλήθεια.",
      target_form: "ἡ καλή ἀλήθεια",
      lemma: "ἀλήθεια",
      parse: "nominative singular feminine",
      skill: "adjective agreement",
      answer: "καλή",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλή.",
      choices: [
        {
          text: "καλή",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλός",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλή."
        },
        {
          text: "καλόν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλή."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-032",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: ὁ ______ ἄνθρωπος.",
      target_form: "ὁ καλός ἄνθρωπος",
      lemma: "ἄνθρωπος",
      parse: "nominative singular masculine",
      skill: "adjective agreement",
      answer: "καλός",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλός.",
      choices: [
        {
          text: "καλός",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλή",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλός."
        },
        {
          text: "καλόν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλός."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-033",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: τὸ ______ βιβλίον.",
      target_form: "τὸ καλόν βιβλίον",
      lemma: "βιβλίον",
      parse: "nominative or accusative singular neuter",
      skill: "adjective agreement",
      answer: "καλόν",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν.",
      choices: [
        {
          text: "καλόν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλός",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        },
        {
          text: "καλή",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-034",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: ὁ ______ μαθητής.",
      target_form: "ὁ καλός μαθητής",
      lemma: "μαθητής",
      parse: "nominative singular masculine",
      skill: "adjective agreement",
      answer: "καλός",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλός.",
      choices: [
        {
          text: "καλός",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλή",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλός."
        },
        {
          text: "καλόν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλός."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-035",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: ἡ ______ ψυχή.",
      target_form: "ἡ καλή ψυχή",
      lemma: "ψυχή",
      parse: "nominative singular feminine",
      skill: "adjective agreement",
      answer: "καλή",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλή.",
      choices: [
        {
          text: "καλή",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλός",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλή."
        },
        {
          text: "καλόν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλή."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-036",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: τὸν ______ ἄνθρωπον.",
      target_form: "τὸν καλόν ἄνθρωπον",
      lemma: "ἄνθρωπος",
      parse: "accusative singular masculine",
      skill: "adjective agreement",
      answer: "καλόν",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν.",
      choices: [
        {
          text: "καλόν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλός",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        },
        {
          text: "καλήν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-037",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: τὴν ______ ψυχήν.",
      target_form: "τὴν καλήν ψυχήν",
      lemma: "ψυχή",
      parse: "accusative singular feminine",
      skill: "adjective agreement",
      answer: "καλήν",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλήν.",
      choices: [
        {
          text: "καλήν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλή",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλήν."
        },
        {
          text: "καλόν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλήν."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-038",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: τὸ ______ σῶμα.",
      target_form: "τὸ καλόν σῶμα",
      lemma: "σῶμα",
      parse: "nominative or accusative singular neuter",
      skill: "adjective agreement",
      answer: "καλόν",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν.",
      choices: [
        {
          text: "καλόν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλός",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        },
        {
          text: "καλή",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-039",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: τὸν ______ μαθητήν.",
      target_form: "τὸν καλόν μαθητήν",
      lemma: "μαθητής",
      parse: "accusative singular masculine",
      skill: "adjective agreement",
      answer: "καλόν",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν.",
      choices: [
        {
          text: "καλόν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλός",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        },
        {
          text: "καλήν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλόν."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-040",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Choose the adjective that agrees: τὴν ______ σοφίαν.",
      target_form: "τὴν καλήν σοφίαν",
      lemma: "σοφία",
      parse: "accusative singular feminine",
      skill: "adjective agreement",
      answer: "καλήν",
      explanation: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλήν.",
      choices: [
        {
          text: "καλήν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "καλή",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλήν."
        },
        {
          text: "καλόν",
          correct: false,
          feedback: "The adjective must agree with the noun in gender, number, and case; here the correct form is καλήν."
        }
      ]
    },

    // Group 2E — Concept checks and phrase recognition
    {
      id: "lesson-1-nouns-cases-agreement-041",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "By form alone, what case can τὸ βιβλίον be?",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "nominative or accusative singular neuter",
      skill: "concept check",
      answer: "nominative or accusative",
      explanation: "Neuter nominative and accusative singular forms look the same, so τὸ βιβλίον can be either by form alone.",
      choices: [
        {
          text: "nominative or accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "only nominative",
          correct: false,
          feedback: "Neuter nominative and accusative singular forms look the same, so τὸ βιβλίον can be either by form alone."
        },
        {
          text: "only accusative",
          correct: false,
          feedback: "Neuter nominative and accusative singular forms look the same, so τὸ βιβλίον can be either by form alone."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-042",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "By form alone, what case can τὸ σῶμα be?",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "nominative or accusative singular neuter",
      skill: "concept check",
      answer: "nominative or accusative",
      explanation: "Neuter nominative and accusative singular forms look the same, so τὸ σῶμα can be either by form alone.",
      choices: [
        {
          text: "nominative or accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "only nominative",
          correct: false,
          feedback: "Neuter nominative and accusative singular forms look the same, so τὸ σῶμα can be either by form alone."
        },
        {
          text: "only accusative",
          correct: false,
          feedback: "Neuter nominative and accusative singular forms look the same, so τὸ σῶμα can be either by form alone."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-043",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Which phrase is masculine accusative singular?",
      target_form: "τὸν ἄνθρωπον",
      lemma: "ἄνθρωπος",
      parse: "accusative singular masculine",
      skill: "concept check",
      answer: "τὸν ἄνθρωπον",
      explanation: "τὸν ἄνθρωπον is masculine accusative singular.",
      choices: [
        {
          text: "τὸν ἄνθρωπον",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ ἄνθρωπος",
          correct: false,
          feedback: "τὸν ἄνθρωπον is masculine accusative singular."
        },
        {
          text: "ἡ ἀλήθεια",
          correct: false,
          feedback: "τὸν ἄνθρωπον is masculine accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-044",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Which phrase is feminine nominative singular?",
      target_form: "ἡ σοφία",
      lemma: "σοφία",
      parse: "nominative singular feminine",
      skill: "concept check",
      answer: "ἡ σοφία",
      explanation: "ἡ σοφία is feminine nominative singular.",
      choices: [
        {
          text: "ἡ σοφία",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "τὴν σοφίαν",
          correct: false,
          feedback: "ἡ σοφία is feminine nominative singular."
        },
        {
          text: "ὁ μαθητής",
          correct: false,
          feedback: "ἡ σοφία is feminine nominative singular."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-045",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Which phrase is feminine accusative singular?",
      target_form: "τὴν ψυχήν",
      lemma: "ψυχή",
      parse: "accusative singular feminine",
      skill: "concept check",
      answer: "τὴν ψυχήν",
      explanation: "τὴν ψυχήν is feminine accusative singular.",
      choices: [
        {
          text: "τὴν ψυχήν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ ψυχή",
          correct: false,
          feedback: "τὴν ψυχήν is feminine accusative singular."
        },
        {
          text: "τὸ σῶμα",
          correct: false,
          feedback: "τὴν ψυχήν is feminine accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-046",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "Which phrase is masculine nominative singular?",
      target_form: "ὁ μαθητής",
      lemma: "μαθητής",
      parse: "nominative singular masculine",
      skill: "concept check",
      answer: "ὁ μαθητής",
      explanation: "ὁ μαθητής is masculine nominative singular.",
      choices: [
        {
          text: "ὁ μαθητής",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "τὸν μαθητήν",
          correct: false,
          feedback: "ὁ μαθητής is masculine nominative singular."
        },
        {
          text: "τὴν ἀρετήν",
          correct: false,
          feedback: "ὁ μαθητής is masculine nominative singular."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-047",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ὁ μαθητὴς γράφει τὸ βιβλίον, why is τὸ βιβλίον accusative?",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "accusative singular neuter",
      skill: "concept check",
      answer: "It is the direct object of γράφει.",
      explanation: "τὸ βιβλίον receives the action of γράφει, so it is the direct object and accusative.",
      choices: [
        {
          text: "It is the direct object of γράφει.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is the subject of γράφει.",
          correct: false,
          feedback: "τὸ βιβλίον receives the action of γράφει, so it is the direct object and accusative."
        },
        {
          text: "It is masculine.",
          correct: false,
          feedback: "τὸ βιβλίον receives the action of γράφει, so it is the direct object and accusative."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-048",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In τὸ βιβλίον καλόν ἐστιν, why is τὸ βιβλίον nominative?",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "nominative singular neuter",
      skill: "concept check",
      answer: "It is the subject of ἐστιν.",
      explanation: "τὸ βιβλίον is the subject of the sentence, so it is nominative.",
      choices: [
        {
          text: "It is the subject of ἐστιν.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is the direct object of ἐστιν.",
          correct: false,
          feedback: "τὸ βιβλίον is the subject of the sentence, so it is nominative."
        },
        {
          text: "It is masculine.",
          correct: false,
          feedback: "τὸ βιβλίον is the subject of the sentence, so it is nominative."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-049",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "What must an adjective agree with?",
      target_form: "adjective agreement",
      lemma: "",
      parse: "agreement concept",
      skill: "concept check",
      answer: "the noun it describes",
      explanation: "An adjective agrees with the noun it describes in gender, number, and case.",
      choices: [
        {
          text: "the noun it describes",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "only the verb",
          correct: false,
          feedback: "An adjective agrees with the noun it describes in gender, number, and case."
        },
        {
          text: "only the first word in the sentence",
          correct: false,
          feedback: "An adjective agrees with the noun it describes in gender, number, and case."
        }
      ]
    },
    {
      id: "lesson-1-nouns-cases-agreement-050",
      lesson: "lesson-1",
      topic: "nouns-cases-agreement",
      type: "multiple_choice",
      prompt: "In ἡ καλὴ ψυχή, why is καλή correct?",
      target_form: "ἡ καλὴ ψυχή",
      lemma: "ψυχή",
      parse: "nominative singular feminine",
      skill: "concept check",
      answer: "It agrees with the feminine noun ψυχή.",
      explanation: "καλή agrees with the feminine noun ψυχή.",
      choices: [
        {
          text: "It agrees with the feminine noun ψυχή.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is masculine.",
          correct: false,
          feedback: "καλή agrees with the feminine noun ψυχή."
        },
        {
          text: "It is a verb ending.",
          correct: false,
          feedback: "καλή agrees with the feminine noun ψυχή."
        }
      ]
    },

  ];

  const LESSON_1_GRAMMAR_3_NOUN_ADJECTIVE_AGREEMENT = [
    {
      id: "lesson-1-noun-adjective-agreement-001",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "ὁ ἵππος ___ ἐστιν.",
      target_form: "ὁ ἵππος",
      parse: "masculine nominative singular",
      skill: "adjective agreement",
      answer: "καλός",
      explanation: "ἵππος is masculine nominative singular, so the adjective is καλός.",
      choices: [
        { text: "καλός", correct: true, feedback: "ἵππος is masculine nominative singular, so the adjective is καλός." },
        { text: "καλή", correct: false, feedback: "ἵππος is masculine nominative singular, so the adjective is καλός." },
        { text: "καλόν", correct: false, feedback: "ἵππος is masculine nominative singular, so the adjective is καλός." }
      ]
    },
    {
      id: "lesson-1-noun-adjective-agreement-002",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "ἡ οἰκία ___ ἐστιν.",
      target_form: "ἡ οἰκία",
      parse: "feminine nominative singular",
      skill: "adjective agreement",
      answer: "καλή",
      explanation: "οἰκία is feminine nominative singular, so the adjective is καλή.",
      choices: [
        { text: "καλός", correct: false, feedback: "οἰκία is feminine nominative singular, so the adjective is καλή." },
        { text: "καλή", correct: true, feedback: "οἰκία is feminine nominative singular, so the adjective is καλή." },
        { text: "καλόν", correct: false, feedback: "οἰκία is feminine nominative singular, so the adjective is καλή." }
      ]
    },
    {
      id: "lesson-1-noun-adjective-agreement-003",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "τὸ βιβλίον ___ ἐστιν.",
      target_form: "τὸ βιβλίον",
      parse: "neuter nominative singular",
      skill: "adjective agreement",
      answer: "καλόν",
      explanation: "βιβλίον is neuter nominative singular, so the adjective is καλόν.",
      choices: [
        { text: "καλός", correct: false, feedback: "βιβλίον is neuter nominative singular, so the adjective is καλόν." },
        { text: "καλή", correct: false, feedback: "βιβλίον is neuter nominative singular, so the adjective is καλόν." },
        { text: "καλόν", correct: true, feedback: "βιβλίον is neuter nominative singular, so the adjective is καλόν." }
      ]
    },
    {
      id: "lesson-1-noun-adjective-agreement-004",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "ὁ Ξενοφῶν ___ ἐστιν.",
      target_form: "ὁ Ξενοφῶν",
      parse: "masculine nominative singular",
      skill: "adjective agreement",
      answer: "νέος",
      explanation: "Ξενοφῶν is masculine nominative singular, so the adjective is νέος.",
      choices: [
        { text: "νέος", correct: true, feedback: "Ξενοφῶν is masculine nominative singular, so the adjective is νέος." },
        { text: "νέα", correct: false, feedback: "Ξενοφῶν is masculine nominative singular, so the adjective is νέος." },
        { text: "νέον", correct: false, feedback: "Ξενοφῶν is masculine nominative singular, so the adjective is νέος." }
      ]
    },
    {
      id: "lesson-1-noun-adjective-agreement-005",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "ἡ μήτηρ ___ ἐστιν.",
      target_form: "ἡ μήτηρ",
      parse: "feminine nominative singular",
      skill: "adjective agreement",
      answer: "καλή",
      explanation: "μήτηρ is feminine nominative singular, so the adjective is καλή.",
      choices: [
        { text: "καλός", correct: false, feedback: "μήτηρ is feminine nominative singular, so the adjective is καλή." },
        { text: "καλή", correct: true, feedback: "μήτηρ is feminine nominative singular, so the adjective is καλή." },
        { text: "καλόν", correct: false, feedback: "μήτηρ is feminine nominative singular, so the adjective is καλή." }
      ]
    },
    {
      id: "lesson-1-noun-adjective-agreement-006",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "ὁ πατήρ ___ ἐστιν.",
      target_form: "ὁ πατήρ",
      parse: "masculine nominative singular",
      skill: "adjective agreement",
      answer: "Ἀθηναῖος",
      explanation: "πατήρ is masculine nominative singular, so the adjective is Ἀθηναῖος.",
      choices: [
        { text: "Ἀθηναῖος", correct: true, feedback: "πατήρ is masculine nominative singular, so the adjective is Ἀθηναῖος." },
        { text: "Ἀθηναία", correct: false, feedback: "πατήρ is masculine nominative singular, so the adjective is Ἀθηναῖος." },
        { text: "Ἀθηναῖον", correct: false, feedback: "πατήρ is masculine nominative singular, so the adjective is Ἀθηναῖος." }
      ]
    },
    {
      id: "lesson-1-noun-adjective-agreement-007",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "τὸν ἵππον ___ θεραπεύει.",
      target_form: "τὸν ἵππον",
      parse: "masculine accusative singular",
      skill: "adjective agreement",
      answer: "καλόν",
      explanation: "τὸν ἵππον is masculine accusative singular, so the adjective is καλόν.",
      choices: [
        { text: "καλός", correct: false, feedback: "τὸν ἵππον is masculine accusative singular, so the adjective is καλόν." },
        { text: "καλή", correct: false, feedback: "τὸν ἵππον is masculine accusative singular, so the adjective is καλόν." },
        { text: "καλόν", correct: true, feedback: "τὸν ἵππον is masculine accusative singular, so the adjective is καλόν." }
      ]
    },
    {
      id: "lesson-1-noun-adjective-agreement-008",
      lesson: "lesson-1",
      topic: "noun-adjective-agreement",
      type: "multiple_choice",
      prompt: "τὴν οἰκίαν ___ βλέπει.",
      target_form: "τὴν οἰκίαν",
      parse: "feminine accusative singular",
      skill: "adjective agreement",
      answer: "καλήν",
      explanation: "τὴν οἰκίαν is feminine accusative singular, so the adjective is καλήν.",
      choices: [
        { text: "καλός", correct: false, feedback: "τὴν οἰκίαν is feminine accusative singular, so the adjective is καλήν." },
        { text: "καλή", correct: false, feedback: "τὴν οἰκίαν is feminine accusative singular, so the adjective is καλήν." },
        { text: "καλήν", correct: true, feedback: "τὴν οἰκίαν is feminine accusative singular, so the adjective is καλήν." }
      ]
    }
  ];

  const LESSON_1_GRAMMAR_3_DEFINITE_ARTICLE = [
    // Group 3A — Choosing nominative singular articles
    {
      id: "lesson-1-definite-article-001",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ἀλήθεια.",
      target_form: "ἡ ἀλήθεια",
      lemma: "ἀλήθεια",
      parse: "feminine nominative singular",
      skill: "nominative article selection",
      answer: "ἡ",
      explanation: "ἀλήθεια is feminine nominative singular here, so the article is ἡ.",
      choices: [
        {
          text: "ἡ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "ἀλήθεια is feminine nominative singular here, so the article is ἡ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "ἀλήθεια is feminine nominative singular here, so the article is ἡ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-002",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ἄνθρωπος.",
      target_form: "ὁ ἄνθρωπος",
      lemma: "ἄνθρωπος",
      parse: "masculine nominative singular",
      skill: "nominative article selection",
      answer: "ὁ",
      explanation: "ἄνθρωπος is masculine nominative singular here, so the article is ὁ.",
      choices: [
        {
          text: "ὁ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "ἄνθρωπος is masculine nominative singular here, so the article is ὁ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "ἄνθρωπος is masculine nominative singular here, so the article is ὁ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-003",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ἀρετή.",
      target_form: "ἡ ἀρετή",
      lemma: "ἀρετή",
      parse: "feminine nominative singular",
      skill: "nominative article selection",
      answer: "ἡ",
      explanation: "ἀρετή is feminine nominative singular here, so the article is ἡ.",
      choices: [
        {
          text: "ἡ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "ἀρετή is feminine nominative singular here, so the article is ἡ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "ἀρετή is feminine nominative singular here, so the article is ἡ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-004",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ βιβλίον.",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "neuter nominative singular",
      skill: "nominative article selection",
      answer: "τὸ",
      explanation: "βιβλίον is neuter nominative singular here, so the article is τὸ.",
      choices: [
        {
          text: "τὸ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "βιβλίον is neuter nominative singular here, so the article is τὸ."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "βιβλίον is neuter nominative singular here, so the article is τὸ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-005",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ μαθητής.",
      target_form: "ὁ μαθητής",
      lemma: "μαθητής",
      parse: "masculine nominative singular",
      skill: "nominative article selection",
      answer: "ὁ",
      explanation: "μαθητής is masculine nominative singular here, so the article is ὁ.",
      choices: [
        {
          text: "ὁ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "μαθητής is masculine nominative singular here, so the article is ὁ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "μαθητής is masculine nominative singular here, so the article is ὁ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-006",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ νεανίας.",
      target_form: "ὁ νεανίας",
      lemma: "νεανίας",
      parse: "masculine nominative singular",
      skill: "nominative article selection",
      answer: "ὁ",
      explanation: "νεανίας is masculine nominative singular here, so the article is ὁ.",
      choices: [
        {
          text: "ὁ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "νεανίας is masculine nominative singular here, so the article is ὁ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "νεανίας is masculine nominative singular here, so the article is ὁ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-007",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ σοφία.",
      target_form: "ἡ σοφία",
      lemma: "σοφία",
      parse: "feminine nominative singular",
      skill: "nominative article selection",
      answer: "ἡ",
      explanation: "σοφία is feminine nominative singular here, so the article is ἡ.",
      choices: [
        {
          text: "ἡ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "σοφία is feminine nominative singular here, so the article is ἡ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "σοφία is feminine nominative singular here, so the article is ἡ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-008",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ Σωκράτης.",
      target_form: "ὁ Σωκράτης",
      lemma: "Σωκράτης",
      parse: "masculine nominative singular",
      skill: "nominative article selection",
      answer: "ὁ",
      explanation: "Σωκράτης is masculine nominative singular here, so the article is ὁ.",
      choices: [
        {
          text: "ὁ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "Σωκράτης is masculine nominative singular here, so the article is ὁ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "Σωκράτης is masculine nominative singular here, so the article is ὁ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-009",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ σῶμα.",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "neuter nominative singular",
      skill: "nominative article selection",
      answer: "τὸ",
      explanation: "σῶμα is neuter nominative singular here, so the article is τὸ.",
      choices: [
        {
          text: "τὸ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "σῶμα is neuter nominative singular here, so the article is τὸ."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "σῶμα is neuter nominative singular here, so the article is τὸ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-010",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ψυχή.",
      target_form: "ἡ ψυχή",
      lemma: "ψυχή",
      parse: "feminine nominative singular",
      skill: "nominative article selection",
      answer: "ἡ",
      explanation: "ψυχή is feminine nominative singular here, so the article is ἡ.",
      choices: [
        {
          text: "ἡ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "ψυχή is feminine nominative singular here, so the article is ἡ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "ψυχή is feminine nominative singular here, so the article is ἡ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-011",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ Ξενοφῶν.",
      target_form: "ὁ Ξενοφῶν",
      lemma: "Ξενοφῶν",
      parse: "masculine nominative singular",
      skill: "nominative article selection",
      answer: "ὁ",
      explanation: "Ξενοφῶν is masculine nominative singular here, so the article is ὁ.",
      choices: [
        {
          text: "ὁ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "Ξενοφῶν is masculine nominative singular here, so the article is ὁ."
        },
        {
          text: "τὸ",
          correct: false,
          feedback: "Ξενοφῶν is masculine nominative singular here, so the article is ὁ."
        }
      ]
    },

    // Group 3B — Choosing accusative singular articles
    {
      id: "lesson-1-definite-article-012",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ἀλήθειαν.",
      target_form: "τὴν ἀλήθειαν",
      lemma: "ἀλήθεια",
      parse: "feminine accusative singular",
      skill: "accusative article selection",
      answer: "τὴν",
      explanation: "ἀλήθειαν is feminine accusative singular here, so the article is τὴν.",
      choices: [
        {
          text: "τὴν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "ἀλήθειαν is feminine accusative singular here, so the article is τὴν."
        },
        {
          text: "τὸν",
          correct: false,
          feedback: "ἀλήθειαν is feminine accusative singular here, so the article is τὴν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-013",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ἄνθρωπον.",
      target_form: "τὸν ἄνθρωπον",
      lemma: "ἄνθρωπος",
      parse: "masculine accusative singular",
      skill: "accusative article selection",
      answer: "τὸν",
      explanation: "ἄνθρωπον is masculine accusative singular here, so the article is τὸν.",
      choices: [
        {
          text: "τὸν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "ἄνθρωπον is masculine accusative singular here, so the article is τὸν."
        },
        {
          text: "τὴν",
          correct: false,
          feedback: "ἄνθρωπον is masculine accusative singular here, so the article is τὸν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-014",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ἀρετήν.",
      target_form: "τὴν ἀρετήν",
      lemma: "ἀρετή",
      parse: "feminine accusative singular",
      skill: "accusative article selection",
      answer: "τὴν",
      explanation: "ἀρετήν is feminine accusative singular here, so the article is τὴν.",
      choices: [
        {
          text: "τὴν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "ἀρετήν is feminine accusative singular here, so the article is τὴν."
        },
        {
          text: "τὸν",
          correct: false,
          feedback: "ἀρετήν is feminine accusative singular here, so the article is τὴν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-015",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ βιβλίον.",
      target_form: "τὸ βιβλίον",
      lemma: "βιβλίον",
      parse: "neuter accusative singular",
      skill: "accusative article selection",
      answer: "τὸ",
      explanation: "βιβλίον is neuter accusative singular here, so the article is τὸ.",
      choices: [
        {
          text: "τὸ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "βιβλίον is neuter accusative singular here, so the article is τὸ."
        },
        {
          text: "τὴν",
          correct: false,
          feedback: "βιβλίον is neuter accusative singular here, so the article is τὸ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-016",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ μαθητήν.",
      target_form: "τὸν μαθητήν",
      lemma: "μαθητής",
      parse: "masculine accusative singular",
      skill: "accusative article selection",
      answer: "τὸν",
      explanation: "μαθητήν is masculine accusative singular here, so the article is τὸν.",
      choices: [
        {
          text: "τὸν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "μαθητήν is masculine accusative singular here, so the article is τὸν."
        },
        {
          text: "τὴν",
          correct: false,
          feedback: "μαθητήν is masculine accusative singular here, so the article is τὸν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-017",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ νεανίαν.",
      target_form: "τὸν νεανίαν",
      lemma: "νεανίας",
      parse: "masculine accusative singular",
      skill: "accusative article selection",
      answer: "τὸν",
      explanation: "νεανίαν is masculine accusative singular here, so the article is τὸν.",
      choices: [
        {
          text: "τὸν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "νεανίαν is masculine accusative singular here, so the article is τὸν."
        },
        {
          text: "τὴν",
          correct: false,
          feedback: "νεανίαν is masculine accusative singular here, so the article is τὸν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-018",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ σοφίαν.",
      target_form: "τὴν σοφίαν",
      lemma: "σοφία",
      parse: "feminine accusative singular",
      skill: "accusative article selection",
      answer: "τὴν",
      explanation: "σοφίαν is feminine accusative singular here, so the article is τὴν.",
      choices: [
        {
          text: "τὴν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "σοφίαν is feminine accusative singular here, so the article is τὴν."
        },
        {
          text: "τὸν",
          correct: false,
          feedback: "σοφίαν is feminine accusative singular here, so the article is τὴν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-019",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ Σωκράτη.",
      target_form: "τὸν Σωκράτη",
      lemma: "Σωκράτης",
      parse: "masculine accusative singular",
      skill: "accusative article selection",
      answer: "τὸν",
      explanation: "Σωκράτη is masculine accusative singular here, so the article is τὸν.",
      choices: [
        {
          text: "τὸν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "Σωκράτη is masculine accusative singular here, so the article is τὸν."
        },
        {
          text: "τὴν",
          correct: false,
          feedback: "Σωκράτη is masculine accusative singular here, so the article is τὸν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-020",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ σῶμα.",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "neuter accusative singular",
      skill: "accusative article selection",
      answer: "τὸ",
      explanation: "σῶμα is neuter accusative singular here, so the article is τὸ.",
      choices: [
        {
          text: "τὸ",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "σῶμα is neuter accusative singular here, so the article is τὸ."
        },
        {
          text: "τὴν",
          correct: false,
          feedback: "σῶμα is neuter accusative singular here, so the article is τὸ."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-021",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ ψυχήν.",
      target_form: "τὴν ψυχήν",
      lemma: "ψυχή",
      parse: "feminine accusative singular",
      skill: "accusative article selection",
      answer: "τὴν",
      explanation: "ψυχήν is feminine accusative singular here, so the article is τὴν.",
      choices: [
        {
          text: "τὴν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "ψυχήν is feminine accusative singular here, so the article is τὴν."
        },
        {
          text: "τὸν",
          correct: false,
          feedback: "ψυχήν is feminine accusative singular here, so the article is τὴν."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-022",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Choose the correct article: ____ Ξενοφῶντα.",
      target_form: "τὸν Ξενοφῶντα",
      lemma: "Ξενοφῶν",
      parse: "masculine accusative singular",
      skill: "accusative article selection",
      answer: "τὸν",
      explanation: "Ξενοφῶντα is masculine accusative singular here, so the article is τὸν.",
      choices: [
        {
          text: "τὸν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "Ξενοφῶντα is masculine accusative singular here, so the article is τὸν."
        },
        {
          text: "τὴν",
          correct: false,
          feedback: "Ξενοφῶντα is masculine accusative singular here, so the article is τὸν."
        }
      ]
    },

    // Group 3C — Parsing article forms
    {
      id: "lesson-1-definite-article-023",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "What does ὁ show?",
      target_form: "ὁ",
      lemma: "ὁ",
      parse: "masculine nominative singular",
      skill: "article parsing",
      answer: "masculine nominative singular",
      explanation: "ὁ shows masculine nominative singular.",
      choices: [
        {
          text: "masculine nominative singular",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "feminine nominative singular",
          correct: false,
          feedback: "ὁ shows masculine nominative singular."
        },
        {
          text: "neuter nominative or accusative singular",
          correct: false,
          feedback: "ὁ shows masculine nominative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-024",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "What does ἡ show?",
      target_form: "ἡ",
      lemma: "ἡ",
      parse: "feminine nominative singular",
      skill: "article parsing",
      answer: "feminine nominative singular",
      explanation: "ἡ shows feminine nominative singular.",
      choices: [
        {
          text: "feminine nominative singular",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine nominative singular",
          correct: false,
          feedback: "ἡ shows feminine nominative singular."
        },
        {
          text: "neuter nominative or accusative singular",
          correct: false,
          feedback: "ἡ shows feminine nominative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-025",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "What does τό show by itself?",
      target_form: "τό",
      lemma: "τό",
      parse: "neuter nominative or accusative singular",
      skill: "article parsing",
      answer: "neuter nominative or accusative singular",
      explanation: "τό shows neuter nominative or accusative singular.",
      choices: [
        {
          text: "neuter nominative or accusative singular",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine accusative singular",
          correct: false,
          feedback: "τό shows neuter nominative or accusative singular."
        },
        {
          text: "feminine accusative singular",
          correct: false,
          feedback: "τό shows neuter nominative or accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-026",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "What does τόν show by itself?",
      target_form: "τόν",
      lemma: "τόν",
      parse: "masculine accusative singular",
      skill: "article parsing",
      answer: "masculine accusative singular",
      explanation: "τόν shows masculine accusative singular.",
      choices: [
        {
          text: "masculine accusative singular",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "masculine nominative singular",
          correct: false,
          feedback: "τόν shows masculine accusative singular."
        },
        {
          text: "feminine nominative singular",
          correct: false,
          feedback: "τόν shows masculine accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-027",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "What does τήν show by itself?",
      target_form: "τήν",
      lemma: "τήν",
      parse: "feminine accusative singular",
      skill: "article parsing",
      answer: "feminine accusative singular",
      explanation: "τήν shows feminine accusative singular.",
      choices: [
        {
          text: "feminine accusative singular",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "feminine nominative singular",
          correct: false,
          feedback: "τήν shows feminine accusative singular."
        },
        {
          text: "masculine accusative singular",
          correct: false,
          feedback: "τήν shows feminine accusative singular."
        }
      ]
    },

    // Group 3D — Article case in sentence context
    {
      id: "lesson-1-definite-article-028",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ἡ ἀλήθεια καλή ἐστιν, what case does ἡ show?",
      target_form: "ἡ",
      lemma: "ἡ",
      parse: "feminine nominative singular",
      skill: "article case in context",
      answer: "nominative",
      explanation: "In this sentence, ἡ shows nominative.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "In this sentence, ἡ shows nominative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-029",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ὁ Σωκράτης ζητεῖ τὴν ἀλήθειαν, what case does τὴν show?",
      target_form: "τὴν",
      lemma: "τήν",
      parse: "feminine accusative singular",
      skill: "article case in context",
      answer: "accusative",
      explanation: "In this sentence, τὴν shows accusative.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "In this sentence, τὴν shows accusative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-030",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ὁ ἄνθρωπος χαίρει, what case does ὁ show?",
      target_form: "ὁ",
      lemma: "ὁ",
      parse: "masculine nominative singular",
      skill: "article case in context",
      answer: "nominative",
      explanation: "In this sentence, ὁ shows nominative.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "In this sentence, ὁ shows nominative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-031",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ὁ Σωκράτης διδάσκει τὸν ἄνθρωπον, what case does τὸν show?",
      target_form: "τὸν",
      lemma: "τόν",
      parse: "masculine accusative singular",
      skill: "article case in context",
      answer: "accusative",
      explanation: "In this sentence, τὸν shows accusative.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "In this sentence, τὸν shows accusative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-032",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In τὸ βιβλίον καλόν ἐστιν, what case does τὸ show?",
      target_form: "τὸ",
      lemma: "τό",
      parse: "neuter nominative singular in context",
      skill: "article case in context",
      answer: "nominative",
      explanation: "In this sentence, τὸ shows nominative.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "In this sentence, τὸ shows nominative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-033",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ὁ μαθητὴς γράφει τὸ βιβλίον, what case does τὸ show?",
      target_form: "τὸ",
      lemma: "τό",
      parse: "neuter accusative singular in context",
      skill: "article case in context",
      answer: "accusative",
      explanation: "In this sentence, τὸ shows accusative.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "In this sentence, τὸ shows accusative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-034",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ἡ ψυχὴ καλή ἐστιν, what case does ἡ show?",
      target_form: "ἡ",
      lemma: "ἡ",
      parse: "feminine nominative singular",
      skill: "article case in context",
      answer: "nominative",
      explanation: "In this sentence, ἡ shows nominative.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "In this sentence, ἡ shows nominative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-035",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ὁ νεανίας φιλεῖ τὴν σοφίαν, what case does τὴν show?",
      target_form: "τὴν",
      lemma: "τήν",
      parse: "feminine accusative singular",
      skill: "article case in context",
      answer: "accusative",
      explanation: "In this sentence, τὴν shows accusative.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "In this sentence, τὴν shows accusative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-036",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In τὸ σῶμα καλόν ἐστιν, what case does τὸ show?",
      target_form: "τὸ",
      lemma: "τό",
      parse: "neuter nominative singular in context",
      skill: "article case in context",
      answer: "nominative",
      explanation: "In this sentence, τὸ shows nominative.",
      choices: [
        {
          text: "nominative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "accusative",
          correct: false,
          feedback: "In this sentence, τὸ shows nominative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-037",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ὁ ἄνθρωπος γυμνάζει τὸ σῶμα, what case does τὸ show?",
      target_form: "τὸ",
      lemma: "τό",
      parse: "neuter accusative singular in context",
      skill: "article case in context",
      answer: "accusative",
      explanation: "In this sentence, τὸ shows accusative.",
      choices: [
        {
          text: "accusative",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "nominative",
          correct: false,
          feedback: "In this sentence, τὸ shows accusative."
        },
        {
          text: "cannot tell from context",
          correct: false,
          feedback: "The sentence context does show the case here."
        }
      ]
    },

    // Group 3E — Article contrasts and phrase recognition
    {
      id: "lesson-1-definite-article-038",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which pair shows masculine nominative singular and masculine accusative singular?",
      target_form: "ὁ / τόν",
      lemma: "ὁ / τόν",
      parse: "article contrast",
      skill: "article contrast and phrase recognition",
      answer: "ὁ / τόν",
      explanation: "ὁ is masculine nominative singular; τόν is masculine accusative singular.",
      choices: [
        {
          text: "ὁ / τόν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ / τήν",
          correct: false,
          feedback: "ὁ is masculine nominative singular; τόν is masculine accusative singular."
        },
        {
          text: "τό / τόν",
          correct: false,
          feedback: "ὁ is masculine nominative singular; τόν is masculine accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-039",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which pair shows feminine nominative singular and feminine accusative singular?",
      target_form: "ἡ / τήν",
      lemma: "ἡ / τήν",
      parse: "article contrast",
      skill: "article contrast and phrase recognition",
      answer: "ἡ / τήν",
      explanation: "ἡ is feminine nominative singular; τήν is feminine accusative singular.",
      choices: [
        {
          text: "ἡ / τήν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ / τόν",
          correct: false,
          feedback: "ἡ is feminine nominative singular; τήν is feminine accusative singular."
        },
        {
          text: "τό / τήν",
          correct: false,
          feedback: "ἡ is feminine nominative singular; τήν is feminine accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-040",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which phrase is masculine nominative singular?",
      target_form: "ὁ ἄνθρωπος",
      lemma: "ἄνθρωπος",
      parse: "masculine nominative singular",
      skill: "article contrast and phrase recognition",
      answer: "ὁ ἄνθρωπος",
      explanation: "ὁ ἄνθρωπος is masculine nominative singular.",
      choices: [
        {
          text: "ὁ ἄνθρωπος",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "τὸν ἄνθρωπον",
          correct: false,
          feedback: "ὁ ἄνθρωπος is masculine nominative singular."
        },
        {
          text: "ἡ ἀλήθεια",
          correct: false,
          feedback: "ὁ ἄνθρωπος is masculine nominative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-041",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which phrase is masculine accusative singular?",
      target_form: "τὸν ἄνθρωπον",
      lemma: "ἄνθρωπος",
      parse: "masculine accusative singular",
      skill: "article contrast and phrase recognition",
      answer: "τὸν ἄνθρωπον",
      explanation: "τὸν ἄνθρωπον is masculine accusative singular.",
      choices: [
        {
          text: "τὸν ἄνθρωπον",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ ἄνθρωπος",
          correct: false,
          feedback: "τὸν ἄνθρωπον is masculine accusative singular."
        },
        {
          text: "ἡ ἀλήθεια",
          correct: false,
          feedback: "τὸν ἄνθρωπον is masculine accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-042",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which phrase is feminine nominative singular?",
      target_form: "ἡ ψυχή",
      lemma: "ψυχή",
      parse: "feminine nominative singular",
      skill: "article contrast and phrase recognition",
      answer: "ἡ ψυχή",
      explanation: "ἡ ψυχή is feminine nominative singular.",
      choices: [
        {
          text: "ἡ ψυχή",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "τὴν ψυχήν",
          correct: false,
          feedback: "ἡ ψυχή is feminine nominative singular."
        },
        {
          text: "τὸ σῶμα",
          correct: false,
          feedback: "ἡ ψυχή is feminine nominative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-043",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which phrase is feminine accusative singular?",
      target_form: "τὴν ψυχήν",
      lemma: "ψυχή",
      parse: "feminine accusative singular",
      skill: "article contrast and phrase recognition",
      answer: "τὴν ψυχήν",
      explanation: "τὴν ψυχήν is feminine accusative singular.",
      choices: [
        {
          text: "τὴν ψυχήν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ ψυχή",
          correct: false,
          feedback: "τὴν ψυχήν is feminine accusative singular."
        },
        {
          text: "ὁ μαθητής",
          correct: false,
          feedback: "τὴν ψυχήν is feminine accusative singular."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-044",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which phrase uses a neuter article?",
      target_form: "τὸ σῶμα",
      lemma: "σῶμα",
      parse: "neuter nominative or accusative singular",
      skill: "article contrast and phrase recognition",
      answer: "τὸ σῶμα",
      explanation: "τὸ σῶμα uses the neuter article τὸ.",
      choices: [
        {
          text: "τὸ σῶμα",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ Σωκράτης",
          correct: false,
          feedback: "τὸ σῶμα uses the neuter article τὸ."
        },
        {
          text: "τὴν σοφίαν",
          correct: false,
          feedback: "τὸ σῶμα uses the neuter article τὸ."
        }
      ]
    },

    // Group 3F — Concept checks
    {
      id: "lesson-1-definite-article-045",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Why can τὸ be nominative or accusative?",
      target_form: "τὸ",
      lemma: "τό",
      parse: "neuter nominative or accusative singular",
      skill: "article concept check",
      answer: "Neuter nominative and accusative singular forms are the same.",
      explanation: "The neuter singular article τὸ can be nominative or accusative; context tells which case is being used.",
      choices: [
        {
          text: "Neuter nominative and accusative singular forms are the same.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "It is always masculine.",
          correct: false,
          feedback: "The neuter singular article τὸ can be nominative or accusative; context tells which case is being used."
        },
        {
          text: "It is always plural.",
          correct: false,
          feedback: "The neuter singular article τὸ can be nominative or accusative; context tells which case is being used."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-046",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In τὸ βιβλίον καλόν ἐστιν, why is τὸ nominative?",
      target_form: "τὸ",
      lemma: "τό",
      parse: "neuter nominative singular in context",
      skill: "article concept check",
      answer: "τὸ βιβλίον is the subject.",
      explanation: "In this sentence, τὸ βιβλίον is the subject, so τὸ is nominative.",
      choices: [
        {
          text: "τὸ βιβλίον is the subject.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "τὸ βιβλίον is the direct object.",
          correct: false,
          feedback: "In this sentence, τὸ βιβλίον is the subject, so τὸ is nominative."
        },
        {
          text: "τὸ is masculine.",
          correct: false,
          feedback: "In this sentence, τὸ βιβλίον is the subject, so τὸ is nominative."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-047",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "In ὁ μαθητὴς γράφει τὸ βιβλίον, why is τὸ accusative?",
      target_form: "τὸ",
      lemma: "τό",
      parse: "neuter accusative singular in context",
      skill: "article concept check",
      answer: "τὸ βιβλίον is the direct object.",
      explanation: "In this sentence, τὸ βιβλίον is the direct object, so τὸ is accusative.",
      choices: [
        {
          text: "τὸ βιβλίον is the direct object.",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "τὸ βιβλίον is the subject.",
          correct: false,
          feedback: "In this sentence, τὸ βιβλίον is the direct object, so τὸ is accusative."
        },
        {
          text: "τὸ is feminine.",
          correct: false,
          feedback: "In this sentence, τὸ βιβλίον is the direct object, so τὸ is accusative."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-048",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "What does the definite article help show?",
      target_form: "definite article",
      lemma: "ὁ",
      parse: "article concept",
      skill: "article concept check",
      answer: "gender, number, and case",
      explanation: "The Greek definite article helps show gender, number, and case.",
      choices: [
        {
          text: "gender, number, and case",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "only the verb meaning",
          correct: false,
          feedback: "The Greek definite article helps show gender, number, and case."
        },
        {
          text: "only whether a word is a proper name",
          correct: false,
          feedback: "The Greek definite article helps show gender, number, and case."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-049",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which article would you expect with a masculine accusative singular noun?",
      target_form: "τόν",
      lemma: "τόν",
      parse: "masculine accusative singular",
      skill: "article concept check",
      answer: "τόν",
      explanation: "τόν is the masculine accusative singular article.",
      choices: [
        {
          text: "τόν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "τόν is the masculine accusative singular article."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "τόν is the masculine accusative singular article."
        }
      ]
    },
    {
      id: "lesson-1-definite-article-050",
      lesson: "lesson-1",
      topic: "definite-article",
      type: "multiple_choice",
      prompt: "Which article would you expect with a feminine accusative singular noun?",
      target_form: "τήν",
      lemma: "τήν",
      parse: "feminine accusative singular",
      skill: "article concept check",
      answer: "τήν",
      explanation: "τήν is the feminine accusative singular article.",
      choices: [
        {
          text: "τήν",
          correct: true,
          feedback: "Correct."
        },
        {
          text: "ἡ",
          correct: false,
          feedback: "τήν is the feminine accusative singular article."
        },
        {
          text: "ὁ",
          correct: false,
          feedback: "τήν is the feminine accusative singular article."
        }
      ]
    },

  ];

  const LESSON_1_GRAMMAR_5_SENTENCE_PARTS = [
    {
      id: "lesson-1-sentence-parts-001",
      lesson: "lesson-1",
      topic: "sentence-parts",
      type: "multiple_choice",
      prompt: "In ὁ Ξενοφῶν χαίρει, what is the subject?",
      target_form: "ὁ Ξενοφῶν",
      skill: "sentence function",
      answer: "ὁ Ξενοφῶν",
      explanation: "The subject is the person or thing performing the action. Here, Xenophon rejoices.",
      choices: [
        {
          text: "ὁ Ξενοφῶν",
          correct: true,
          feedback: "Correct. Xenophon is performing the action."
        },
        {
          text: "χαίρει",
          correct: false,
          feedback: "χαίρει is the verb. ὁ Ξενοφῶν is the subject."
        },
        {
          text: "There is no subject",
          correct: false,
          feedback: "Greek often gives the subject as a nominative noun or name. Here it is ὁ Ξενοφῶν."
        }
      ]
    },
    {
      id: "lesson-1-sentence-parts-002",
      lesson: "lesson-1",
      topic: "sentence-parts",
      type: "multiple_choice",
      prompt: "In ὁ Ξενοφῶν νέος ἐστιν, what is the linking verb?",
      target_form: "ἐστιν",
      skill: "sentence function",
      answer: "ἐστιν",
      explanation: "ἐστιν means “is.” It links the subject with a description.",
      choices: [
        {
          text: "ἐστιν",
          correct: true,
          feedback: "Correct. ἐστιν is the linking verb."
        },
        {
          text: "νέος",
          correct: false,
          feedback: "νέος is the complement describing Xenophon."
        },
        {
          text: "ὁ Ξενοφῶν",
          correct: false,
          feedback: "ὁ Ξενοφῶν is the subject."
        }
      ]
    },
    {
      id: "lesson-1-sentence-parts-003",
      lesson: "lesson-1",
      topic: "sentence-parts",
      type: "multiple_choice",
      prompt: "In ὁ Γρύλλος ἵππον ἔχει, what is the direct object?",
      target_form: "ἵππον",
      skill: "sentence function",
      answer: "ἵππον",
      explanation: "A direct object receives the action of a transitive verb. Gryllus has a horse.",
      choices: [
        {
          text: "ἵππον",
          correct: true,
          feedback: "Correct. The horse receives the action of ἔχει."
        },
        {
          text: "ὁ Γρύλλος",
          correct: false,
          feedback: "ὁ Γρύλλος is the subject."
        },
        {
          text: "ἔχει",
          correct: false,
          feedback: "ἔχει is the transitive verb."
        }
      ]
    },
    {
      id: "lesson-1-sentence-parts-004",
      lesson: "lesson-1",
      topic: "sentence-parts",
      type: "multiple_choice",
      prompt: "Which label should you give θεραπεύει in ὁ Ξενοφῶν τὸν ἵππον θεραπεύει?",
      target_form: "θεραπεύει",
      skill: "sentence function",
      answer: "TV",
      explanation: "θεραπεύει is transitive here because it takes the direct object τὸν ἵππον.",
      choices: [
        {
          text: "TV",
          correct: true,
          feedback: "Correct. θεραπεύει is a transitive verb."
        },
        {
          text: "LV",
          correct: false,
          feedback: "A linking verb connects a subject with a complement. θεραπεύει expresses an action."
        },
        {
          text: "IV",
          correct: false,
          feedback: "An intransitive verb does not take a direct object. Here τὸν ἵππον is the direct object."
        }
      ]
    },
    {
      id: "lesson-1-sentence-parts-005",
      lesson: "lesson-1",
      topic: "sentence-parts",
      type: "multiple_choice",
      prompt: "Which sentence has an intransitive verb?",
      target_form: "ὑλακτεῖ",
      skill: "sentence function",
      answer: "ὁ κύων ὑλακτεῖ.",
      explanation: "ὑλακτεῖ means “barks.” The action simply happens; it does not take a direct object.",
      choices: [
        {
          text: "ὁ κύων ὑλακτεῖ.",
          correct: true,
          feedback: "Correct. ὑλακτεῖ is intransitive."
        },
        {
          text: "ὁ Γρύλλος ἵππον ἔχει.",
          correct: false,
          feedback: "ἔχει is transitive because it takes ἵππον as a direct object."
        },
        {
          text: "ὁ Ξενοφῶν νέος ἐστιν.",
          correct: false,
          feedback: "ἐστιν is a linking verb."
        }
      ]
    }
  ];

  const LESSON_STUB_MANIFEST = [
    { number: 2, title: "The Household of Xenophon", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian household and farm scene reserved for a Xenophon lesson banner", grammarFocus: "Second-declension nouns, adjective agreement, possessive genitives, εἰμί, and simple prepositions", greekPhrase: "Ἡ οἰκία τοῦ Ξενοφῶντος", sourceAnchor: "Plausible reconstruction inspired by Xenophon, Oeconomicus", cultureLead: "This lesson connects Xenophon’s household setting with simple grammar for possession, place, movement, and work." },
    { number: 3, title: "The Education of Xenophon", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian education scene with a young student and teacher", grammarFocus: "Third-person present verbs, accusative direct objects, infinitives, introductory middle/passive forms, and demonstratives", greekPhrase: "Ἡ παιδεία τοῦ Ξενοφῶντος", sourceAnchor: "Plausible reconstruction inspired by Xenophon, Oeconomicus", cultureLead: "This lesson connects Xenophon’s household responsibilities with early Athenian education." },
    { number: 5, title: "Learning Through Questioning", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Adjectives; agreement; attributive vs predicate position", greekPhrase: "ὁ Σωκράτης καλὸς καὶ σοφὸς ἐστιν. / ὁ δὲ μαθητὴς ἀγαθὸς γίγνεται.", sourceAnchor: "Memorabilia 4.6.1–15", cultureLead: "This lesson will use Socratic questioning to show how Greek adjectives describe, classify, and evaluate a person." },
    { number: 6, title: "The Search for Knowledge", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Second declension nouns; prepositions with cases", greekPhrase: "οἱ ἄνδρες εἰς τὴν ἀγορὰν βαδίζουσιν. / ἐν τῇ ἀγορᾷ ὁ Σωκράτης λέγει.", sourceAnchor: "Memorabilia 1.1.16–19", cultureLead: "This lesson will place Socrates' search for knowledge in the public spaces of Athens." },
    { number: 7, title: "Examining Oneself", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Middle/passive voice; present; reflexive sense", greekPhrase: "ὁ ἀνὴρ ἑαυτὸν παιδεύεται. / οἱ ἄνδρες ἐν τῇ πόλει παιδεύονται.", sourceAnchor: "Memorabilia 4.2.24–30", cultureLead: "This lesson will connect the middle voice with the Socratic habit of turning inquiry back upon oneself." },
    { number: 8, title: "In the Agora", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Prepositions expanded; dative case introduction", greekPhrase: "ἐν τῇ ἀγορᾷ οἱ ἄνδρες τῷ Σωκράτει λέγουσιν. / ὁ δὲ Σωκράτης τοῖς ἀνθρώποις ἀποκρίνεται.", sourceAnchor: "Memorabilia 1.1.10", cultureLead: "This lesson will use the agora as the setting for dative forms, speech, and response." },
    { number: 9, title: "Socrates Questions All", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Imperfect tense; past continuous action", greekPhrase: "ὁ Σωκράτης τοὺς ἄνδρας ἠρώτα. / οἱ δὲ ἄνδρες ἀπεκρίνοντο.", sourceAnchor: "Memorabilia 1.1.16", cultureLead: "This lesson will prepare a narrative view of Socrates' repeated questioning in Athens." },
    { number: 10, title: "To Know and To Learn", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Infinitives; introductory; complementary infinitives", greekPhrase: "ὁ ἀνὴρ βούλεται σοφὸς εἶναι. / οἱ ἄνδρες μανθάνειν βούλονται.", sourceAnchor: "Memorabilia 4.5.1–12", cultureLead: "This lesson will treat learning and wanting to learn as actions that often require infinitive complements." },
    { number: 11, title: "The Thinking Mind", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Participles; introductory; present active participle", greekPhrase: "ὁ ἀνὴρ ζητῶν τὴν ἀλήθειαν σοφὸς ἐστίν. / οἱ μανθάνοντες ἄνδρες βελτίους γίγνονται.", sourceAnchor: "Memorabilia 1.4.13–18", cultureLead: "This lesson will introduce participles through the image of people seeking, learning, and becoming better." },
    { number: 12, title: "The Examined Life", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Module review; present; imperfect; infinitives; participles", greekPhrase: "ὁ Σωκράτης λέγει ὅτι ὁ ἀνεξέταστος βίος οὐ βιωτός ἐστιν.", sourceAnchor: "Memorabilia 4.2.24–30, with comparison to Plato, Apology 38a", cultureLead: "This review lesson will connect Xenophon's Socrates with the later famous formulation about the examined life.", note: "Present this famous formulation as Platonic comparison, not as Xenophon's wording." },
    { number: 13, title: "The General Leads", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Contract verbs; –έω, –άω, –όω; present system", greekPhrase: "ὁ στρατηγὸς τοὺς στρατιώτας φιλεῖ καὶ τιμᾷ. / οἱ δὲ στρατιῶται αὐτὸν ἀκολουθοῦσιν.", sourceAnchor: "Anabasis 1.3.1–21", cultureLead: "This lesson will begin the Anabasis module with leadership, loyalty, and contract verb forms." },
    { number: 14, title: "Trust in Leadership", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Imperfect of contract verbs; repeated past action", greekPhrase: "οἱ στρατιῶται τὸν στρατηγὸν ἐτίμων καὶ ἐφίλουν.", sourceAnchor: "Anabasis 1.3.15–21", cultureLead: "This lesson will use repeated past action to describe how soldiers responded to leaders over time." },
    { number: 15, title: "Hope and Expectation", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Future tense; predictive statements", greekPhrase: "οἱ ἄνδρες νικήσουσιν, ἐὰν θαρρῶσιν.", sourceAnchor: "Anabasis 3.1.15–25", cultureLead: "This lesson will connect future forms with courage under uncertain conditions." },
    { number: 16, title: "If They Fight", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Subjunctive mood; introductory; ἐάν clauses", greekPhrase: "ἐὰν οἱ στρατιῶται μάχωνται, νικῶσιν.", sourceAnchor: "Anabasis 3.1.35–44", cultureLead: "This lesson will introduce ἐάν clauses as a way to think through action before it happens." },
    { number: 17, title: "Fear and Courage", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Infinitives expanded; verbs of fearing and fighting", greekPhrase: "οἱ μὲν φοβοῦνται, οἱ δὲ θαρροῦσι μάχεσθαι.", sourceAnchor: "Anabasis 3.1.11–14", cultureLead: "This lesson will contrast fear and confidence through infinitive constructions." },
    { number: 18, title: "The Battle Begins", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Aorist tense; introductory; simple past action", greekPhrase: "οἱ ἄνδρες ἐμάχοντο καὶ ἐνίκησαν.", sourceAnchor: "Anabasis 1.8.18–29", cultureLead: "This lesson will reserve the first focused treatment of aorist narrative action in battle." },
    { number: 19, title: "Those Who Stand Firm", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Present participles; descriptive action", greekPhrase: "οἱ θαρροῦντες ἄνδρες νικῶσιν. / οἱ δὲ φοβούμενοι φεύγουσιν.", sourceAnchor: "Anabasis 1.8.17–20", cultureLead: "This lesson will use participles to describe men acting with courage or fear." },
    { number: 20, title: "Victory Won", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Aorist participles; sequence of action", greekPhrase: "οἱ ἄνδρες νικήσαντες τοὺς πολεμίους ἐδίωξαν.", sourceAnchor: "Anabasis 1.8.18–21", cultureLead: "This lesson will reserve space for sequencing action after victory." },
    { number: 21, title: "The Army Without Leaders", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Integrated narrative; tense contrast; participles", greekPhrase: "οἱ στρατηγοὶ ἀπέθανον· / οἱ δὲ στρατιῶται ἐν κινδύνῳ ἦσαν.", sourceAnchor: "Anabasis 3.1.2–13", cultureLead: "This lesson will place tense contrast inside the crisis after the generals are lost." },
    { number: 22, title: "Do Not Fear!", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Imperatives; commands; prohibition with μή", greekPhrase: "μὴ φοβεῖσθε, ὦ ἄνδρες· / θαρρεῖτε καὶ μάχεσθε.", sourceAnchor: "Anabasis 3.1.35–44", cultureLead: "This lesson will use commands and prohibitions to capture leadership speech in danger." },
    { number: 23, title: "So Brave That…", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Result clauses; ὥστε + infinitive", greekPhrase: "οὕτως ἐθάρρησαν ὥστε νικῆσαι.", sourceAnchor: "Anabasis 4.3.20–29", cultureLead: "This lesson will prepare result clauses by asking what courage makes possible." },
    { number: 24, title: "Courage Under Fire", module: "ἀνδρεία — Courage and Leadership", moduleTheme: "Courage and Leadership", bannerImage: "assets/module-2-andreia-banner.jpeg", bannerAlt: "A Greek military scene reserved for a courage lesson banner", grammarFocus: "Module review; subjunctive; aorist; participles", greekPhrase: "οἱ ἄνδρες θαρρήσαντες ἐμάχοντο καὶ ἐνίκησαν.", sourceAnchor: "Anabasis 3.2.1–39", cultureLead: "This review lesson will gather the module's grammar around courage in sustained danger." },
    { number: 25, title: "Mastering Oneself", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Middle voice; present; reflexive meaning", greekPhrase: "ὁ ἀνὴρ ἑαυτὸν σωφρονίζει.", sourceAnchor: "Memorabilia 1.5.1–6", cultureLead: "This lesson will begin the self-control module by linking grammar to self-mastery." },
    { number: 26, title: "Habits of Discipline", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Middle voice; imperfect and aorist", greekPhrase: "ὁ ἀνὴρ ἑαυτὸν ἐσωφρόνιζε.", sourceAnchor: "Memorabilia 1.6.7–10", cultureLead: "This lesson will reserve space for describing discipline as a repeated and completed habit." },
    { number: 27, title: "What Must Be Done", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Indirect statement; accusative + infinitive", greekPhrase: "δεῖ τοὺς ἄνδρας σωφρονεῖν.", sourceAnchor: "Memorabilia 4.5.1–12", cultureLead: "This lesson will use obligation and indirect statement to ask what self-controlled people must do." },
    { number: 28, title: "The Desire to Live Well", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Complementary infinitives; expanded", greekPhrase: "οἱ ἄνδρες καλῶς ζῆν βούλονται.", sourceAnchor: "Oeconomicus 1.1–4", cultureLead: "This lesson will connect desire, household management, and the wish to live well." },
    { number: 29, title: "Working with Purpose", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Purpose clauses; ἵνα + subjunctive", greekPhrase: "ὁ ἀνὴρ ἐργάζεται ἵνα εὖ ζῇ.", sourceAnchor: "Oeconomicus 7.1–10", cultureLead: "This lesson will reserve the place for purpose clauses in work, discipline, and household order." },
    { number: 30, title: "Knowing Oneself", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Reflexive pronouns", greekPhrase: "ὁ σώφρων ἀνὴρ ἑαυτὸν γιγνώσκει.", sourceAnchor: "Memorabilia 4.2.24–30", cultureLead: "This lesson will return to self-knowledge through the grammar of reflexive pronouns." },
    { number: 31, title: "If a Man is Self-Controlled", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Conditional sentences; simple conditions", greekPhrase: "εἰ ὁ ἀνὴρ σωφρονεῖ, εὐδαίμων ἐστίν.", sourceAnchor: "Memorabilia 1.5.1–6", cultureLead: "This lesson will use simple conditions to describe the consequences of self-control." },
    { number: 32, title: "The Well-Ordered Household", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Integrated reading; purpose + infinitives", greekPhrase: "ὁ ἀνὴρ τὴν οἰκίαν καλῶς διοικεῖ.", sourceAnchor: "Oeconomicus 7.4–43", cultureLead: "This lesson will reserve a household-management reading that integrates purpose and infinitive structures." },
    { number: 33, title: "Training the Self", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Middle participles", greekPhrase: "οἱ ἄνδρες ἑαυτοὺς παιδευόμενοι βελτίους γίγνονται.", sourceAnchor: "Cyropaedia 1.2.6–16", cultureLead: "This lesson will connect middle participles with training oneself into better habits." },
    { number: 34, title: "Nothing in Excess", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Negation; moderation vocabulary", greekPhrase: "ὁ σώφρων οὐκ ἐσθίει πολὺ οὐδὲ πίνει.", sourceAnchor: "Memorabilia 1.6.5–10", cultureLead: "This lesson will reserve a compact treatment of negation and moderation vocabulary." },
    { number: 35, title: "What is Self-Control?", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Dialogue structure; indirect discourse", greekPhrase: "τί ἐστι σωφροσύνη; / ἡ σωφροσύνη ἐστὶ τὸ ἑαυτὸν κρατεῖν.", sourceAnchor: "Memorabilia 4.5.1–12", cultureLead: "This lesson will reserve a dialogue-shaped exploration of self-control." },
    { number: 36, title: "The Disciplined Life", module: "σωφροσύνη — Self-Control and Discipline", moduleTheme: "Self-Control and Discipline", bannerImage: "assets/module-3-sophrosyne-banner.jpeg", bannerAlt: "A disciplined household scene reserved for a self-control lesson banner", grammarFocus: "Module review; middle voice; infinitives; conditionals", greekPhrase: "ὁ σώφρων ἀνὴρ καλῶς ζῇ καὶ εὐδαίμων ἐστίν.", sourceAnchor: "Oeconomicus 11.1–25", cultureLead: "This review lesson will gather self-control, household order, and disciplined living." },
    { number: 37, title: "Justice is the Greatest Good", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Predicate nouns; ὅτι clauses", greekPhrase: "ὁ Σωκράτης λέγει ὅτι ἡ δικαιοσύνη μέγιστον ἀγαθόν ἐστιν.", sourceAnchor: "Memorabilia 4.4.1–25", cultureLead: "This lesson will begin the justice module by joining predicate structure with Socratic claims about justice." },
    { number: 38, title: "They Say He is Just", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Indirect statement; ὅτι / ὡς", greekPhrase: "οἱ ἄνδρες λέγουσιν ὅτι ὁ Σωκράτης δίκαιός ἐστιν.", sourceAnchor: "Memorabilia 1.1.1–5", cultureLead: "This lesson will reserve space for reported claims about Socrates' justice." },
    { number: 39, title: "The Accusation", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Accusative + infinitive; reported speech", greekPhrase: "οἱ κατήγοροι λέγουσι τὸν Σωκράτη τοὺς νέους διαφθείρειν.", sourceAnchor: "Apology 10–11", cultureLead: "This lesson will prepare the grammar of accusation and reported speech in Xenophon's Apology." },
    { number: 40, title: "Speaking the Truth", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Participles in argument", greekPhrase: "ὁ Σωκράτης ἀποκρινόμενος λέγει τὴν ἀλήθειαν.", sourceAnchor: "Apology 14–21", cultureLead: "This lesson will reserve a place for participles in the movement of argument and reply." },
    { number: 41, title: "The Just Man", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Relative clauses; ὅς, ἥ, ὅ", greekPhrase: "ὁ ἀνὴρ ὃς τὰ δίκαια πράττει εὐδαίμων ἐστίν.", sourceAnchor: "Memorabilia 4.4.12–25", cultureLead: "This lesson will connect relative clauses with descriptions of the person who acts justly." },
    { number: 42, title: "What is Justice?", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "μέν…δέ contrast; comparison structures", greekPhrase: "ὁ μὲν Σωκράτης λέγει ὅτι τὸ δίκαιον ἀγαθόν ἐστιν, / ὁ δὲ ζητεῖ τί ἐστι τὸ δίκαιον.", sourceAnchor: "Memorabilia 4.4.1–25; compare Plato, Republic 1.331c–336a", cultureLead: "This lesson will compare ways of asking about justice while keeping Xenophon as the main course anchor." },
    { number: 43, title: "Law and Fear", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Verb complements; reinforcing structures", greekPhrase: "οἱ ἄνδρες τοὺς νόμους φοβοῦνται καὶ τιμῶσιν.", sourceAnchor: "Memorabilia 4.4.13–18", cultureLead: "This lesson will reserve space for law, reverence, fear, and the complements that complete those verbs." },
    { number: 44, title: "If They Act Justly", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Future more vivid conditions", greekPhrase: "ἐὰν οἱ ἄνδρες τὰ δίκαια πράττωσιν, ἡ πόλις εὖ ἕξει.", sourceAnchor: "Cyropaedia 1.6.20–27", cultureLead: "This lesson will use future more vivid conditions to imagine justice as civic consequence." },
    { number: 45, title: "The Defense of Socrates", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Negation; indirect discourse reinforcement", greekPhrase: "ὁ Σωκράτης λέγει ὅτι οὐκ ἀδικεῖ.", sourceAnchor: "Apology 1–9", cultureLead: "This lesson will reserve the grammatical frame for denial and defense." },
    { number: 46, title: "Why They Are Angry", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Cause clauses; ὅτι / διότι", greekPhrase: "οἱ δικασταὶ ὀργίζονται, ὅτι οὐ φοβεῖται.", sourceAnchor: "Apology 24–26", cultureLead: "This lesson will reserve cause clauses for explaining anger in the trial narrative." },
    { number: 47, title: "The Trial of Socrates", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Infinitives of obligation; complex reasoning", greekPhrase: "ὁ Σωκράτης μένει καὶ τὴν δίκην δέχεται.", sourceAnchor: "Apology 27–34", cultureLead: "This lesson will reserve space for the reasoning and obligation language around Socrates' trial." },
    { number: 48, title: "Justice and the Soul", module: "δικαιοσύνη — Justice and the City", moduleTheme: "Justice and the City", bannerImage: "assets/module-4-dikaiosyne-banner.jpeg", bannerAlt: "A civic justice scene reserved for a justice lesson banner", grammarFocus: "Module review; advanced clauses; discourse", greekPhrase: "ὁ Σωκράτης λέγει ὅτι ὁ δίκαιος ἀνὴρ εὐδαίμων ἐστίν.", sourceAnchor: "Memorabilia 4.8.1–11 and Apology 32–34", cultureLead: "This final lesson stub will gather justice, happiness, the soul, and advanced discourse patterns." }
  ];

  function createStubQuestion(id, prompt, correctText) {
    return {
      id,
      type: "multiple_choice",
      prompt,
      choices: [
        { text: correctText, correct: true },
        { text: "Full activity content will be added later.", correct: false },
        { text: "Return to the lesson notes for the final authored version.", correct: false }
      ]
    };
  }

  function createLessonStub(config) {
    const lessonId = `lesson-${config.number}`;
    const nextNumber = config.number + 1;
    const hasNextLesson = config.number < 48;
    const sourceLine = `Source anchor: ${config.sourceAnchor}.`;
    const cultureBody = [
      sourceLine,
      `${config.cultureLead} The final vocabulary, Greek reading, and polished historical commentary will be added in a later authoring pass.`,
      config.note ? `Note: ${config.note}` : ""
    ].filter(Boolean);

    return {
      id: lessonId,
      number: config.number,
      title: config.title,
      greekTitle: config.greekPhrase,
      scope: config.grammarFocus,
      theme: `${config.moduleTheme}; source: ${config.sourceAnchor}`,
      module: config.module,
      banner: {
        image: config.bannerImage,
        alt: config.bannerAlt,
        caption: config.greekPhrase
      },
      pages: [
        {
          page: 1,
          slug: `${lessonId}-page-1`,
          title: "Reading",
          template: "reading",
          showTranslation: false
        },
        {
          page: 2,
          slug: `${lessonId}-page-2`,
          title: "Language Study",
          template: "grammar"
        },
        {
          page: 3,
          slug: `${lessonId}-page-3`,
          title: "Greek World / Review / Quiz",
          template: "culture"
        }
      ],
      vocabulary: [],
      reading: {
        title: "Greek Reading",
        paragraphs: [
          {
            greek: "Greek reading passage will be added later.",
            gloss: []
          }
        ],
        translation: ""
      },
      wordStudy: {
        label: "Word Builder",
        blocks: [
          {
            title: "Word Builder",
            body: [
              "Word Builder content will be added later."
            ]
          }
        ]
      },
      culture: {
        title: `${config.title}: Source Preview`,
        body: cultureBody,
        questions: []
      },
      grammar: {
        intro: "This lesson stub reserves the grammar structure and practice hooks for the full authored lesson.",
        sections: [
          {
            id: "grammar-focus",
            title: config.grammarFocus,
            body: [
              `Grammar focus: ${config.grammarFocus}.`,
              "Explanatory grammar content, examples, and final exercises will be added later."
            ],
            examples: [
              {
                greek: config.greekPhrase,
                english: "Banner sentence reserved from the curriculum manifest."
              }
            ],
            practiceTopic: "grammar-focus"
          }
        ]
      },
      enrichment: [],
      activities: {
        "grammar-flashcards": {
          title: `Lesson ${config.number} Grammar Flashcards`,
          cards: [
            {
              prompt: "What is the grammar focus for this lesson?",
              answer: config.grammarFocus
            },
            {
              prompt: "What source anchor frames this lesson?",
              answer: config.sourceAnchor
            }
          ]
        },
        "topic-practice": {
          title: "Practice This Topic",
          questions: [
            {
              ...createStubQuestion(
                `${lessonId}-topic-practice-1`,
                `Which grammar focus belongs to Lesson ${config.number}?`,
                config.grammarFocus
              ),
              topic: "grammar-focus"
            }
          ]
        },
        "grammar-exercises": {
          title: `Lesson ${config.number} Grammar Exercises`,
          threshold: 0,
          questions: [
            createStubQuestion(
              `${lessonId}-grammar-exercises-1`,
              "This grammar exercise set is a placeholder. Which answer keeps the lesson moving for now?",
              "Continue; final grammar exercises will be added later."
            )
          ]
        },
        "lesson-quiz": {
          title: `Lesson ${config.number} Quiz — ${config.title}`,
          threshold: 0,
          questions: [
            createStubQuestion(
              `${lessonId}-lesson-quiz-1`,
              `What is the source anchor for Lesson ${config.number}?`,
              config.sourceAnchor
            )
          ]
        }
      },
      nextLesson: hasNextLesson
        ? {
          id: `lesson-${nextNumber}`,
          title: LESSON_STUB_MANIFEST.find((item) => item.number === nextNumber)?.title || `Lesson ${nextNumber}`,
          fallbackUrl: `lesson.html?lesson=${nextNumber}&page=1`
        }
        : {
          id: "",
          title: "Course complete",
          fallbackUrl: "lessons.html#lesson-48"
        }
    };
  }

  const LESSON_2_READING_TRANSLATION = `Xenophon is a boy. He lives in his father’s house.

Xenophon’s father is Gryllus. Gryllus is a good farmer. His father works in the field. The male household servant works with his father in the field.

His mother remains in the house. Xenophon’s mother is a good woman. His mother watches over the household. His mother gives instructions to the servants. The female household servants weave garments. The female household servants prepare bread. His mother loves the household.

Xenophon walks to the field with his father. The boy leads the horse. He also leads the donkey. The boy carries water. The boy carries firewood. The boy watches over the garden.

After the work, Xenophon returns to the house. His mother prepares dinner. His father and the boy dine in the house. The house of Gryllus is not small, but it is beautiful.`;

  const LESSON_2 = {
    id: "lesson-2",
    number: 2,
    title: "The Household of Xenophon",
    greekTitle: "Ἡ οἰκία τοῦ Ξενοφῶντος",
    scope: "Second-declension nouns, adjective agreement, possessive genitives, εἰμί, and simple prepositions",
    theme: "Xenophon’s household, family responsibilities, and chores around the house and farm",
    module: "σοφία — Wisdom and Socrates",
    banner: {
      image: "assets/module-1-sophia-banner.jpeg",
      alt: "A classical Athenian household and farm scene",
      text: "Ἡ οἰκία τοῦ Ξενοφῶντος",
      caption: "ὁ Ξενοφῶν μετὰ τοῦ πατρὸς εἰς τὸν ἀγρὸν βαδίζει."
    },
    pages: [
      { page: 1, slug: "lesson-2-page-1", title: "Reading", template: "reading", showTranslation: false },
      { page: 2, slug: "lesson-2-page-2", title: "Language Study", template: "grammar" },
      { page: 3, slug: "lesson-2-page-3", title: "Greek World / Review / Quiz", template: "culture" }
    ],
    vocabulary: [
      {
        category: "Proper Names",
        items: [
          { greek: "Γρύλλος", english: "Gryllus", status: "proper name", dictionaryForm: "Γρύλλος, Γρύλλου, ὁ" }
        ]
      },
      {
        category: "Nouns",
        items: [
          { greek: "ἀγρός, ὁ", english: "field; farm", status: "previously introduced vocabulary", dictionaryForm: "ἀγρός, ἀγροῦ, ὁ" },
          { greek: "ἄρτος, ὁ", english: "bread", status: "new required vocabulary", dictionaryForm: "ἄρτος, ἄρτου, ὁ" },
          { greek: "γεωργός, ὁ", english: "farmer", status: "new required vocabulary", dictionaryForm: "γεωργός, γεωργοῦ, ὁ" },
          { greek: "δεῖπνον, τό", english: "dinner; evening meal", status: "previously introduced vocabulary", dictionaryForm: "δεῖπνον, δείπνου, τό" },
          { greek: "δοῦλος, ὁ", english: "male slave; male household servant", status: "new required vocabulary", dictionaryForm: "δοῦλος, δούλου, ὁ" },
          { greek: "δούλη, ἡ", english: "female slave; female household servant", status: "new required vocabulary", dictionaryForm: "δούλη, δούλης, ἡ" },
          { greek: "ἔργον, τό", english: "work; task", status: "new required vocabulary", dictionaryForm: "ἔργον, ἔργου, τό" },
          { greek: "ἵππος, ὁ", english: "horse", status: "previously introduced vocabulary", dictionaryForm: "ἵππος, ἵππου, ὁ" },
          { greek: "κῆπος, ὁ", english: "garden", status: "new required vocabulary", dictionaryForm: "κῆπος, κήπου, ὁ" },
          { greek: "γυνή, ἡ", english: "woman", status: "teacher-supported exception", dictionaryForm: "γυνή, γυναικός, ἡ" },
          { greek: "μήτηρ, ἡ", english: "mother", status: "teacher-supported exception", dictionaryForm: "μήτηρ, μητρός, ἡ" },
          { greek: "ὄνος, ὁ/ἡ", english: "donkey", status: "new required vocabulary", dictionaryForm: "ὄνος, ὄνου, ὁ/ἡ" },
          { greek: "οἰκία, ἡ", english: "house", status: "new required vocabulary", dictionaryForm: "οἰκία, οἰκίας, ἡ" },
          { greek: "οἶκος, ὁ", english: "household; home", status: "previously introduced vocabulary", dictionaryForm: "οἶκος, οἴκου, ὁ" },
          { greek: "παῖς, ὁ/ἡ", english: "child; boy; girl", status: "teacher-supported exception", dictionaryForm: "παῖς, παιδός, ὁ/ἡ" },
          { greek: "πατήρ, ὁ", english: "father", status: "teacher-supported exception", dictionaryForm: "πατήρ, πατρός, ὁ" },
          { greek: "πέπλος, ὁ", english: "robe; garment", status: "new required vocabulary", dictionaryForm: "πέπλος, πέπλου, ὁ" },
          { greek: "ὕδωρ, τό", english: "water", status: "teacher-supported exception", dictionaryForm: "ὕδωρ, ὕδατος, τό" },
          { greek: "ξύλον, τό", english: "wood; piece of firewood", status: "new required vocabulary", dictionaryForm: "ξύλον, ξύλου, τό" }
        ]
      },
      {
        category: "Adjectives",
        items: [
          { greek: "ἀγαθός, -ή, -όν", english: "good", status: "previously introduced vocabulary", dictionaryForm: "ἀγαθός, -ή, -όν" },
          { greek: "μικρός, -ά, -όν", english: "small", status: "new required vocabulary", dictionaryForm: "μικρός, -ά, -όν" }
        ]
      },
      {
        category: "Verbs",
        items: [
          { greek: "βαδίζω", english: "walk; go", status: "previously introduced vocabulary", principalParts: ["βαδίζω", "βαδιῶ"] },
          { greek: "δειπνέω", english: "dine; eat dinner", status: "new required vocabulary", principalParts: ["δειπνέω", "δειπνήσω"] },
          { greek: "ἐργάζομαι", english: "work", status: "new required vocabulary", principalParts: ["ἐργάζομαι", "ἐργάσομαι", "εἰργασάμην", "εἴργασμαι"] },
          { greek: "ἔρχομαι", english: "come; go", status: "previously introduced vocabulary", principalParts: ["ἔρχομαι", "εἶμι", "ἦλθον", "ἐλήλυθα"] },
          { greek: "κελεύω", english: "order; command; instruct", status: "new required vocabulary", principalParts: ["κελεύω", "κελεύσω", "ἐκέλευσα", "κεκέλευκα"] },
          { greek: "μένω", english: "remain; stay", status: "previously introduced vocabulary", principalParts: ["μένω", "μενῶ", "ἔμεινα", "μεμένηκα"] },
          { greek: "οἰκέω", english: "live; dwell", status: "new required vocabulary", principalParts: ["οἰκέω", "οἰκήσω", "ᾤκησα", "ᾤκηκα"] },
          { greek: "παρασκευάζω", english: "prepare", status: "new required vocabulary", principalParts: ["παρασκευάζω", "παρασκευάσω", "παρεσκεύασα", "παρεσκεύακα"] },
          { greek: "ὑφαίνω", english: "weave", status: "new required vocabulary", principalParts: ["ὑφαίνω", "ὑφανῶ", "ὕφηνα"] },
          { greek: "φέρω", english: "carry; bring", status: "previously introduced vocabulary", principalParts: ["φέρω", "οἴσω", "ἤνεγκα", "ἐνήνοχα", "ἐνήνεγμαι", "ἠνέχθην"] },
          { greek: "φιλέω", english: "love; be fond of", status: "new required vocabulary", principalParts: ["φιλέω", "φιλήσω", "ἐφίλησα", "πεφίληκα", "πεφίλημαι", "ἐφιλήθην"] },
          { greek: "φυλάσσω", english: "guard; watch over", status: "new required vocabulary", principalParts: ["φυλάσσω", "φυλάξω", "ἐφύλαξα", "πεφύλαχα", "πεφύλαγμαι", "ἐφυλάχθην"] }
        ]
      }
    ],
    reading: {
      title: "Ἡ οἰκία τοῦ Ξενοφῶντος",
      paragraphs: [
        {
          greek: "Ὁ Ξενοφῶν παῖς ἐστίν. ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ.",
          gloss: [
            { greek: "τοῦ πατρός", english: "possessive genitive: of the father / the father’s" }
          ]
        },
        {
          greek: "ὁ πατὴρ τοῦ Ξενοφῶντος Γρύλλος ἐστίν. ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν. ὁ πατὴρ ἐν τῷ ἀγρῷ ἐργάζεται. ὁ δοῦλος μετὰ τοῦ πατρὸς ἐν τῷ ἀγρῷ ἐργάζεται.",
          gloss: [
            { greek: "ἀγαθὸς γεωργός", english: "adjective and noun agree: good farmer" },
            { greek: "ἐν τῷ ἀγρῷ", english: "ἐν with the dative: in the field" },
            { greek: "μετὰ τοῦ πατρός", english: "μετά with the genitive means “with”" }
          ]
        },
        {
          greek: "ἡ μήτηρ ἐν τῇ οἰκίᾳ μένει. ἡ μήτηρ τοῦ Ξενοφῶντος ἀγαθὴ γυνή ἐστιν. ἡ μήτηρ τὸν οἶκον φυλάσσει. ἡ μήτηρ τοῖς δούλοις κελεύει. αἱ δοῦλαι πέπλους ὑφαίνουσιν. αἱ δοῦλαι ἄρτον παρασκευάζουσιν. ἡ μήτηρ τὴν οἰκίαν φιλεῖ.",
          gloss: [
            { greek: "τοῖς δούλοις", english: "dative plural; translate here as “to the servants”" }
          ]
        },
        {
          greek: "ὁ Ξενοφῶν μετὰ τοῦ πατρὸς εἰς τὸν ἀγρὸν βαδίζει. ὁ παῖς τὸν ἵππον ἄγει. καὶ τὸν ὄνον ἄγει. ὁ παῖς ὕδωρ φέρει. ὁ παῖς ξύλα φέρει. ὁ παῖς τὸν κῆπον φυλάσσει.",
          gloss: [
            { greek: "μετὰ τοῦ πατρός", english: "μετά with the genitive means “with”" },
            { greek: "εἰς τὸν ἀγρόν", english: "εἰς with the accusative indicates motion toward" }
          ]
        },
        {
          greek: "μετὰ τὸ ἔργον ὁ Ξενοφῶν εἰς τὴν οἰκίαν ἔρχεται. ἡ μήτηρ τὸ δεῖπνον παρασκευάζει. ὁ πατὴρ καὶ ὁ παῖς ἐν τῇ οἰκίᾳ δειπνοῦσιν. ἡ οἰκία τοῦ Γρύλλου μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.",
          gloss: [
            { greek: "μετὰ τὸ ἔργον", english: "μετά with the accusative means “after”" },
            { greek: "τοῦ Γρύλλου", english: "possessive genitive: of Gryllus / Gryllus’s" }
          ]
        }
      ],
      translation: LESSON_2_READING_TRANSLATION,
      notesMarkdown: "These scenes are plausible reconstructions for language learning, not documented incidents from Xenophon’s childhood."
    },
    wordStudy: {
      label: "Language-Level Note",
      blocks: [
        {
          title: "Teacher-supported forms",
          body: [
            "Some essential family and household words in this reading are not second-declension nouns: πατήρ, μήτηρ, παῖς, γυνή, and ὕδωρ.",
            "Learn these as required lexical items for now. Their full third-declension patterns will be treated later; this lesson stays focused on second-declension nouns, adjective agreement, possessive genitives, εἰμί, and simple prepositions."
          ],
          display: [
            { greek: "πατήρ", english: "father" },
            { greek: "μήτηρ", english: "mother" },
            { greek: "παῖς", english: "child, boy, girl" },
            { greek: "γυνή", english: "woman" },
            { greek: "ὕδωρ", english: "water" }
          ]
        }
      ]
    },
    culture: {
      title: "Household Work and Xenophon’s Oeconomicus",
      body: [
        "In a prosperous Athenian household, the father normally represented the family in public life and supervised property, agriculture, finances, and relationships outside the home. The mother managed the internal household. She supervised food preparation, storage, spinning, weaving, clothing production, and the work of household servants.",
        "Boys from landowning families learned how farms, animals, and household resources were managed. These subjects later became important in Xenophon’s Oeconomicus, a dialogue about the proper management of the household and estate.",
        "The specific scenes in this lesson are plausible reconstructions for beginning Greek. They are not documented biographical incidents from Xenophon’s childhood."
      ],
      questions: [
        { prompt: "What responsibilities did an Athenian father normally supervise?", answer: "Public representation, property, agriculture, finances, and outside relationships." },
        { prompt: "What work did the mother normally manage inside the household?", answer: "Food preparation, storage, spinning, weaving, clothing production, and household servants." },
        { prompt: "Why is this household setting useful for a Xenophon course?", answer: "Household and estate management later become important themes in Xenophon’s Oeconomicus." }
      ]
    },
    grammar: {
      intro: "Lesson 2 uses Xenophon’s household to practice second-declension nouns, adjective agreement, possessive genitives, forms of εἰμί, and simple prepositions.",
      sections: [
        {
          id: "second-declension-nouns",
          title: "1. Second-Declension Nouns",
          body: [
            "Many masculine second-declension nouns have nominative singular in -ος and accusative singular in -ον.",
            "Neuter second-declension nouns normally have nominative and accusative singular in -ον. The article often helps you see the gender and case."
          ],
          table: {
            title: "Second-declension examples from the reading",
            headers: ["Noun", "Gender", "Nominative singular", "Accusative singular"],
            greekColumns: [0, 2, 3],
            rows: [
              ["ὁ ἀγρός", "masculine", "ἀγρός", "ἀγρόν"],
              ["ὁ δοῦλος", "masculine", "δοῦλος", "δοῦλον"],
              ["ὁ οἶκος", "masculine", "οἶκος", "οἶκον"],
              ["ὁ ἵππος", "masculine", "ἵππος", "ἵππον"],
              ["ὁ ὄνος", "masculine or feminine", "ὄνος", "ὄνον"],
              ["ὁ κῆπος", "masculine", "κῆπος", "κῆπον"],
              ["τὸ δεῖπνον", "neuter", "δεῖπνον", "δεῖπνον"],
              ["τὸ ἔργον", "neuter", "ἔργον", "ἔργον"],
              ["τὸ ξύλον", "neuter", "ξύλον", "ξύλον"]
            ],
            note: "For neuter nouns, the nominative and accusative singular forms are the same."
          },
          examples: [
            { greek: "ὁ πατὴρ ἐν τῷ ἀγρῷ ἐργάζεται.", english: "The father works in the field." },
            { greek: "ὁ παῖς τὸν ἵππον ἄγει.", english: "The boy leads the horse." },
            { greek: "ἡ μήτηρ τὸ δεῖπνον παρασκευάζει.", english: "The mother prepares dinner." }
          ],
          practiceTopic: "second-declension-nouns"
        },
        {
          id: "adjective-agreement",
          title: "2. Adjective Agreement",
          body: [
            "An adjective agrees with the noun it modifies in gender, number, and case.",
            "The adjective changes form according to the noun: masculine ἀγαθός, feminine ἀγαθή, neuter ἀγαθόν."
          ],
          table: {
            title: "Adjective agreement in Lesson 2",
            headers: ["Phrase", "Noun", "Adjective form", "Why it agrees"],
            greekColumns: [0, 1, 2],
            rows: [
              ["ἀγαθὸς γεωργός", "γεωργός", "ἀγαθός", "masculine nominative singular"],
              ["ἀγαθὴ γυνή", "γυνή", "ἀγαθή", "feminine nominative singular"],
              ["καλὴ οἰκία", "οἰκία", "καλή", "feminine nominative singular"],
              ["μικρὰ οἰκία", "οἰκία", "μικρά", "feminine nominative singular"]
            ]
          },
          examples: [
            { greek: "ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν.", english: "Gryllus is a good farmer." },
            { greek: "ἡ μήτηρ ἀγαθὴ γυνή ἐστιν.", english: "The mother is a good woman." },
            { greek: "ἡ οἰκία μικρὰ οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.", english: "The house is not small, but it is beautiful." }
          ],
          practiceTopic: "adjective-agreement"
        },
        {
          id: "possessive-genitive",
          title: "3. Possession with the Genitive",
          body: [
            "The genitive can express possession.",
            "English often uses either “of” or an apostrophe-s construction where Greek uses the genitive."
          ],
          table: {
            title: "Possessive genitives",
            headers: ["Greek phrase", "Literal meaning", "Natural English"],
            greekColumns: [0],
            rows: [
              ["ἡ οἰκία τοῦ πατρός", "the house of the father", "the father’s house"],
              ["ὁ πατὴρ τοῦ Ξενοφῶντος", "the father of Xenophon", "Xenophon’s father"],
              ["ἡ οἰκία τοῦ Γρύλλου", "the house of Gryllus", "Gryllus’s house"]
            ]
          },
          practiceTopic: "possessive-genitive"
        },
        {
          id: "eimi",
          title: "4. εἰμί",
          body: [
            "The reading uses forms of εἰμί to say what someone or something is.",
            "For now, learn ἐστίν and ἐστιν as forms meaning “is.” The negative phrase οὐκ ἐστίν means “is not.”"
          ],
          formList: {
            title: "Forms in the passage",
            items: [
              { greek: "ἐστίν", english: "is" },
              { greek: "ἐστιν", english: "is" },
              { greek: "οὐκ ἐστίν", english: "is not" }
            ]
          },
          examples: [
            { greek: "Ὁ Ξενοφῶν παῖς ἐστίν.", english: "Xenophon is a boy." },
            { greek: "Ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν.", english: "Gryllus is a good farmer." },
            { greek: "Ἡ οἰκία μικρὰ οὐκ ἐστίν.", english: "The house is not small." }
          ],
          practiceTopic: "eimi"
        },
        {
          id: "simple-prepositions",
          title: "5. Simple Prepositions",
          body: [
            "Prepositions often take a particular case after them.",
            "The meaning of a preposition may depend on the case that follows it."
          ],
          table: {
            title: "Prepositions in the reading",
            headers: ["Pattern", "Example", "Meaning"],
            greekColumns: [0, 1],
            rows: [
              ["ἐν + dative", "ἐν τῇ οἰκίᾳ", "in the house"],
              ["ἐν + dative", "ἐν τῷ ἀγρῷ", "in the field"],
              ["εἰς + accusative", "εἰς τὸν ἀγρόν", "into / to the field"],
              ["μετά + genitive", "μετὰ τοῦ πατρός", "with the father"],
              ["μετά + accusative", "μετὰ τὸ ἔργον", "after the work"]
            ]
          },
          practiceTopic: "simple-prepositions"
        }
      ],
      summary: {
        title: "Lesson 2 Grammar Summary",
        items: [
          "Many masculine second-declension nouns have nominative singular -ος and accusative singular -ον.",
          "Neuter second-declension nominative and accusative singular forms are usually identical.",
          "Adjectives agree with nouns in gender, number, and case.",
          "The genitive can express possession.",
          "ἐν takes the dative here, εἰς takes the accusative, and μετά changes meaning with the genitive or accusative."
        ]
      }
    },
    activities: {
      "vocab-practice": {
        title: "Lesson 2 Vocabulary Practice",
        questions: [
          {
            id: "lesson-2-vocab-1",
            type: "multiple_choice",
            prompt: "What does γεωργός mean?",
            choices: [
              { text: "farmer", correct: true, feedback: "Correct. γεωργός means farmer." },
              { text: "garden", correct: false, feedback: "κῆπος means garden; γεωργός is a farmer." },
              { text: "bread", correct: false, feedback: "ἄρτος means bread; γεωργός is a farmer." }
            ]
          },
          {
            id: "lesson-2-vocab-2",
            type: "multiple_choice",
            prompt: "Which Greek word means “household; home”?",
            choices: [
              { text: "οἶκος", correct: true, feedback: "Correct. οἶκος means household or home." },
              { text: "ἔργον", correct: false, feedback: "ἔργον means work or task." },
              { text: "ἄρτος", correct: false, feedback: "ἄρτος means bread." }
            ]
          },
          {
            id: "lesson-2-vocab-3",
            type: "multiple_choice",
            prompt: "What does φυλάσσω mean?",
            choices: [
              { text: "guard; watch over", correct: true, feedback: "Correct. φυλάσσω means guard or watch over." },
              { text: "dine", correct: false, feedback: "δειπνέω means dine; φυλάσσω means guard or watch over." },
              { text: "weave", correct: false, feedback: "ὑφαίνω means weave; φυλάσσω means guard or watch over." }
            ]
          }
        ]
      },
      "grammar-flashcards": {
        title: "Lesson 2 Grammar Flashcards",
        cards: [
          { prompt: "What ending often marks masculine second-declension nominative singular?", answer: "-ος" },
          { prompt: "What ending often marks masculine second-declension accusative singular?", answer: "-ον" },
          { prompt: "What does the genitive often express?", answer: "Possession: of someone or someone’s." },
          { prompt: "What case follows ἐν in this lesson?", answer: "Dative." },
          { prompt: "What does μετά + genitive mean in this lesson?", answer: "With." }
        ]
      },
      "topic-practice": {
        title: "Practice This Topic",
        topicInstructions: {
          "second-declension-nouns": "Identify the case of the highlighted second-declension noun.",
          "adjective-agreement": "Choose the adjective form that agrees with the noun.",
          "possessive-genitive": "Read the genitive as possession.",
          "eimi": "Choose the correct form of εἰμί.",
          "simple-prepositions": "Match each prepositional phrase with its case pattern or meaning."
        },
        questions: [
          {
            id: "lesson-2-topic-noun-1",
            topic: "second-declension-nouns",
            type: "multiple_choice",
            prompt: "What case is τὸν ἀγρόν in εἰς τὸν ἀγρόν?",
            choices: [
              { text: "accusative singular", correct: true, feedback: "Correct. τὸν and -όν mark accusative singular here." },
              { text: "nominative singular", correct: false, feedback: "Nominative would be ὁ ἀγρός." },
              { text: "dative singular", correct: false, feedback: "Dative would be τῷ ἀγρῷ." }
            ]
          },
          {
            id: "lesson-2-topic-noun-2",
            topic: "second-declension-nouns",
            type: "multiple_choice",
            prompt: "What case is τῷ ἀγρῷ in ἐν τῷ ἀγρῷ?",
            choices: [
              { text: "dative singular", correct: true, feedback: "Correct. ἐν takes the dative here." },
              { text: "accusative singular", correct: false, feedback: "Accusative singular would be τὸν ἀγρόν." },
              { text: "nominative singular", correct: false, feedback: "Nominative singular would be ὁ ἀγρός." }
            ]
          },
          {
            id: "lesson-2-topic-agreement-1",
            topic: "adjective-agreement",
            type: "multiple_choice",
            prompt: "Choose the adjective form: ___ γεωργός",
            choices: [
              { text: "ἀγαθός", correct: true, feedback: "Correct. γεωργός is masculine nominative singular." },
              { text: "ἀγαθή", correct: false, feedback: "ἀγαθή is feminine nominative singular." },
              { text: "ἀγαθόν", correct: false, feedback: "ἀγαθόν is neuter or masculine accusative singular." }
            ]
          },
          {
            id: "lesson-2-topic-agreement-2",
            topic: "adjective-agreement",
            type: "multiple_choice",
            prompt: "Choose the adjective form: ___ οἰκία",
            choices: [
              { text: "καλή", correct: true, feedback: "Correct. οἰκία is feminine nominative singular here." },
              { text: "καλός", correct: false, feedback: "καλός is masculine nominative singular." },
              { text: "καλόν", correct: false, feedback: "καλόν is neuter or masculine accusative singular." }
            ]
          },
          {
            id: "lesson-2-topic-agreement-3",
            topic: "adjective-agreement",
            type: "multiple_choice",
            prompt: "Choose the adjective form: ___ ἔργον",
            choices: [
              { text: "μικρόν", correct: true, feedback: "Correct. ἔργον is neuter nominative or accusative singular." },
              { text: "μικρός", correct: false, feedback: "μικρός is masculine nominative singular." },
              { text: "μικρά", correct: false, feedback: "μικρά is feminine nominative singular or neuter plural, not singular ἔργον." }
            ]
          },
          {
            id: "lesson-2-topic-genitive-1",
            topic: "possessive-genitive",
            type: "multiple_choice",
            prompt: "What does ἡ οἰκία τοῦ πατρός mean?",
            choices: [
              { text: "the father’s house", correct: true, feedback: "Correct. τοῦ πατρός is a possessive genitive." },
              { text: "the father in the house", correct: false, feedback: "That would need a preposition such as ἐν." },
              { text: "the father leads the house", correct: false, feedback: "There is no verb meaning leads in this phrase." }
            ]
          },
          {
            id: "lesson-2-topic-prepositions-1",
            topic: "simple-prepositions",
            type: "multiple_choice",
            prompt: "What does μετὰ τοῦ πατρός mean?",
            choices: [
              { text: "with the father", correct: true, feedback: "Correct. μετά with the genitive means with." },
              { text: "after the father", correct: false, feedback: "In this lesson, μετά means after with the accusative, not with this genitive phrase." },
              { text: "in the father", correct: false, feedback: "ἐν + dative expresses in." }
            ]
          },
          {
            id: "lesson-2-topic-prepositions-2",
            topic: "simple-prepositions",
            type: "multiple_choice",
            prompt: "What does μετὰ τὸ ἔργον mean?",
            choices: [
              { text: "after the work", correct: true, feedback: "Correct. μετά with the accusative means after." },
              { text: "with the work", correct: false, feedback: "μετά means with when it takes the genitive." },
              { text: "in the work", correct: false, feedback: "ἐν + dative expresses in." }
            ]
          },
          {
            id: "lesson-2-topic-eimi-1",
            topic: "eimi",
            type: "multiple_choice",
            prompt: "Complete: Ὁ Ξενοφῶν παῖς ___.",
            choices: [
              { text: "ἐστίν", correct: true, feedback: "Correct. ἐστίν means is." },
              { text: "οὐκ ἐστίν", correct: false, feedback: "οὐκ ἐστίν would mean is not, but the reading says Xenophon is a boy." },
              { text: "εἰς", correct: false, feedback: "εἰς is a preposition, not a verb." }
            ]
          }
        ]
      },
      "grammar-exercises": {
        title: "Lesson 2 Grammar Exercises",
        threshold: 80,
        questions: [
          {
            id: "lesson-2-grammar-noun-1",
            type: "multiple_choice",
            prompt: "Identify the form: ὁ δοῦλος",
            choices: [
              { text: "nominative singular", correct: true, feedback: "Correct. ὁ and -ος mark masculine nominative singular." },
              { text: "accusative singular", correct: false, feedback: "Accusative singular would be τὸν δοῦλον." },
              { text: "genitive singular", correct: false, feedback: "Genitive singular would be τοῦ δούλου." },
              { text: "dative singular", correct: false, feedback: "Dative singular would be τῷ δούλῳ." }
            ]
          },
          {
            id: "lesson-2-grammar-noun-2",
            type: "multiple_choice",
            prompt: "Identify the form: τὸν ἵππον",
            choices: [
              { text: "accusative singular", correct: true, feedback: "Correct. τὸν and -ον mark masculine accusative singular." },
              { text: "nominative singular", correct: false, feedback: "Nominative singular would be ὁ ἵππος." },
              { text: "genitive singular", correct: false, feedback: "Genitive singular would be τοῦ ἵππου." },
              { text: "dative singular", correct: false, feedback: "Dative singular would be τῷ ἵππῳ." }
            ]
          },
          {
            id: "lesson-2-grammar-noun-3",
            type: "multiple_choice",
            prompt: "Identify the form: τοῦ Γρύλλου",
            choices: [
              { text: "genitive singular", correct: true, feedback: "Correct. τοῦ and -ου mark genitive singular." },
              { text: "nominative singular", correct: false, feedback: "Nominative singular would be ὁ Γρύλλος." },
              { text: "accusative singular", correct: false, feedback: "Accusative singular would be τὸν Γρύλλον." },
              { text: "dative singular", correct: false, feedback: "Dative singular would be τῷ Γρύλλῳ." }
            ]
          },
          {
            id: "lesson-2-grammar-noun-4",
            type: "multiple_choice",
            prompt: "Identify the form: τῷ ἀγρῷ",
            choices: [
              { text: "dative singular", correct: true, feedback: "Correct. τῷ and -ῷ mark dative singular." },
              { text: "nominative singular", correct: false, feedback: "Nominative singular would be ὁ ἀγρός." },
              { text: "accusative singular", correct: false, feedback: "Accusative singular would be τὸν ἀγρόν." },
              { text: "genitive singular", correct: false, feedback: "Genitive singular would be τοῦ ἀγροῦ." }
            ]
          },
          {
            id: "lesson-2-grammar-agreement-1",
            type: "multiple_choice",
            prompt: "Choose the agreeing form: ___ γεωργός",
            choices: [
              { text: "ἀγαθός", correct: true, feedback: "Correct. γεωργός is masculine nominative singular." },
              { text: "ἀγαθή", correct: false, feedback: "ἀγαθή agrees with a feminine nominative singular noun." },
              { text: "ἀγαθόν", correct: false, feedback: "ἀγαθόν is neuter nominative/accusative or masculine accusative singular." }
            ]
          },
          {
            id: "lesson-2-grammar-agreement-2",
            type: "multiple_choice",
            prompt: "Choose the agreeing form: ___ οἰκία",
            choices: [
              { text: "καλή", correct: true, feedback: "Correct. οἰκία is feminine nominative singular." },
              { text: "καλός", correct: false, feedback: "καλός agrees with a masculine nominative singular noun." },
              { text: "καλόν", correct: false, feedback: "καλόν agrees with a neuter singular noun or masculine accusative singular noun." }
            ]
          },
          {
            id: "lesson-2-grammar-agreement-3",
            type: "multiple_choice",
            prompt: "Choose the agreeing form: ___ ἔργον",
            choices: [
              { text: "μικρόν", correct: true, feedback: "Correct. ἔργον is neuter singular." },
              { text: "μικρός", correct: false, feedback: "μικρός is masculine nominative singular." },
              { text: "μικρά", correct: false, feedback: "μικρά does not agree with singular ἔργον here." }
            ]
          },
          {
            id: "lesson-2-grammar-genitive-1",
            type: "multiple_choice",
            prompt: "Translate: ὁ πατὴρ τοῦ Ξενοφῶντος",
            choices: [
              { text: "Xenophon’s father", correct: true, feedback: "Correct. τοῦ Ξενοφῶντος is possessive genitive." },
              { text: "Xenophon with the father", correct: false, feedback: "That would use a preposition such as μετά." },
              { text: "Xenophon leads the father", correct: false, feedback: "There is no verb meaning leads in this phrase." }
            ]
          },
          {
            id: "lesson-2-grammar-genitive-2",
            type: "multiple_choice",
            prompt: "Translate: ὁ δοῦλος τοῦ Γρύλλου",
            choices: [
              { text: "the servant of Gryllus / Gryllus’s servant", correct: true, feedback: "Correct. τοῦ Γρύλλου is possessive genitive." },
              { text: "Gryllus with the servant", correct: false, feedback: "μετά with the genitive would express with." },
              { text: "the servant in Gryllus", correct: false, feedback: "ἐν + dative expresses in." }
            ]
          },
          {
            id: "lesson-2-grammar-preposition-1",
            type: "multiple_choice",
            prompt: "What pattern is ἐν τῇ οἰκίᾳ?",
            choices: [
              { text: "ἐν + dative: in the house", correct: true, feedback: "Correct. τῇ οἰκίᾳ is dative after ἐν." },
              { text: "εἰς + accusative: to the house", correct: false, feedback: "εἰς uses the accusative for motion toward." },
              { text: "μετά + genitive: with the house", correct: false, feedback: "μετά with genitive means with." }
            ]
          },
          {
            id: "lesson-2-grammar-preposition-2",
            type: "multiple_choice",
            prompt: "What does εἰς τὸν ἀγρόν mean?",
            choices: [
              { text: "to / into the field", correct: true, feedback: "Correct. εἰς with the accusative indicates motion toward." },
              { text: "in the field", correct: false, feedback: "In the field is ἐν τῷ ἀγρῷ." },
              { text: "with the field", correct: false, feedback: "μετά with the genitive means with." }
            ]
          },
          {
            id: "lesson-2-grammar-eimi-1",
            type: "multiple_choice",
            prompt: "Complete: Ἡ οἰκία μικρὰ ___.",
            choices: [
              { text: "οὐκ ἐστίν", correct: true, feedback: "Correct. οὐκ ἐστίν means is not." },
              { text: "εἰς", correct: false, feedback: "εἰς is a preposition, not a form of εἰμί." },
              { text: "μετά", correct: false, feedback: "μετά is a preposition, not a form of εἰμί." }
            ]
          },
          {
            id: "lesson-2-grammar-translation-1",
            type: "multiple_choice",
            prompt: "Translate: ὁ παῖς ὕδωρ φέρει.",
            choices: [
              { text: "The boy carries water.", correct: true, feedback: "Correct. φέρει means carries, and ὕδωρ is the thing carried." },
              { text: "The boy prepares bread.", correct: false, feedback: "Prepares bread is ἄρτον παρασκευάζει." },
              { text: "The boy remains in the house.", correct: false, feedback: "μένει means remains; φέρει means carries." }
            ]
          },
          {
            id: "lesson-2-grammar-translation-2",
            type: "multiple_choice",
            prompt: "Translate: ἡ μήτηρ τὸ δεῖπνον παρασκευάζει.",
            choices: [
              { text: "The mother prepares dinner.", correct: true, feedback: "Correct. τὸ δεῖπνον is the direct object." },
              { text: "The mother loves the garden.", correct: false, feedback: "φιλεῖ means loves; παρασκευάζει means prepares." },
              { text: "The father works in the field.", correct: false, feedback: "That sentence would use ὁ πατήρ and ἐργάζεται." }
            ]
          }
        ]
      },
      "lesson-quiz": {
        title: "Lesson 2 Quiz — The Household of Xenophon",
        threshold: 80,
        questions: [
          {
            id: "lesson-2-quiz-1",
            type: "multiple_choice",
            prompt: "τίς ἐστιν ὁ πατὴρ τοῦ Ξενοφῶντος; (Who is Xenophon’s father?)",
            choices: [
              { text: "Γρύλλος", correct: true, feedback: "Correct. Xenophon’s father is Gryllus." },
              { text: "ὁ δοῦλος", correct: false, feedback: "The servant works with the father; he is not named as Xenophon’s father." },
              { text: "ὁ ὄνος", correct: false, feedback: "ὁ ὄνος is the donkey." }
            ]
          },
          {
            id: "lesson-2-quiz-2",
            type: "multiple_choice",
            prompt: "ποῦ ὁ πατὴρ ἐργάζεται; (Where does the father work?)",
            choices: [
              { text: "ἐν τῷ ἀγρῷ", correct: true, feedback: "Correct. The father works in the field." },
              { text: "ἐν τῇ οἰκίᾳ", correct: false, feedback: "The mother remains in the house." },
              { text: "μετὰ τὸ ἔργον", correct: false, feedback: "μετὰ τὸ ἔργον means after the work." }
            ]
          },
          {
            id: "lesson-2-quiz-3",
            type: "multiple_choice",
            prompt: "τίς ἐν τῇ οἰκίᾳ μένει; (Who remains in the house?)",
            choices: [
              { text: "ἡ μήτηρ", correct: true, feedback: "Correct. The mother remains in the house." },
              { text: "ὁ πατήρ", correct: false, feedback: "The father works in the field." },
              { text: "ὁ ἵππος", correct: false, feedback: "The horse is led by Xenophon." }
            ]
          },
          {
            id: "lesson-2-quiz-4",
            type: "multiple_choice",
            prompt: "τί αἱ δοῦλαι ὑφαίνουσιν; (What do the female servants weave?)",
            choices: [
              { text: "πέπλους", correct: true, feedback: "Correct. They weave garments." },
              { text: "ἄρτον", correct: false, feedback: "They prepare bread; they weave garments." },
              { text: "ξύλα", correct: false, feedback: "The boy carries firewood." }
            ]
          },
          {
            id: "lesson-2-quiz-5",
            type: "multiple_choice",
            prompt: "μετὰ τίνος ὁ Ξενοφῶν εἰς τὸν ἀγρὸν βαδίζει; (With whom does Xenophon walk to the field?)",
            choices: [
              { text: "μετὰ τοῦ πατρός", correct: true, feedback: "Correct. He walks with his father." },
              { text: "μετὰ τὸ ἔργον", correct: false, feedback: "μετὰ τὸ ἔργον means after the work." },
              { text: "μετὰ τῆς μητρός", correct: false, feedback: "The reading says he walks with his father." }
            ]
          },
          {
            id: "lesson-2-quiz-6",
            type: "multiple_choice",
            prompt: "τίνα ζῷα ὁ Ξενοφῶν ἄγει; (Which animals does Xenophon lead?)",
            choices: [
              { text: "τὸν ἵππον καὶ τὸν ὄνον", correct: true, feedback: "Correct. He leads the horse and the donkey." },
              { text: "τὸν κύνα καὶ τὸν ἵππον", correct: false, feedback: "A dog is not part of this Lesson 2 reading." },
              { text: "τὸν ὄνον καὶ τὸν κῆπον", correct: false, feedback: "κῆπος means garden, not an animal." }
            ]
          },
          {
            id: "lesson-2-quiz-7",
            type: "multiple_choice",
            prompt: "τί ὁ Ξενοφῶν φέρει; (What does Xenophon carry?)",
            choices: [
              { text: "ὕδωρ καὶ ξύλα", correct: true, feedback: "Correct. He carries water and firewood." },
              { text: "ἄρτον καὶ πέπλους", correct: false, feedback: "The servants prepare bread and weave garments." },
              { text: "τὸν ἵππον καὶ τὸν ὄνον", correct: false, feedback: "He leads the horse and donkey; he carries water and firewood." }
            ]
          },
          {
            id: "lesson-2-quiz-8",
            type: "multiple_choice",
            prompt: "ποῦ ὁ πατὴρ καὶ ὁ παῖς δειπνοῦσιν; (Where do the father and boy dine?)",
            choices: [
              { text: "ἐν τῇ οἰκίᾳ", correct: true, feedback: "Correct. They dine in the house." },
              { text: "ἐν τῷ ἀγρῷ", correct: false, feedback: "They work in the field, but dine in the house." },
              { text: "εἰς τὸν ἀγρόν", correct: false, feedback: "εἰς τὸν ἀγρόν means to the field." }
            ]
          },
          {
            id: "lesson-2-quiz-9",
            type: "multiple_choice",
            prompt: "μικρά ἐστιν ἡ οἰκία τοῦ Γρύλλου; (Is Gryllus’s house small?)",
            choices: [
              { text: "No. μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.", correct: true, feedback: "Correct. The house is not small, but beautiful." },
              { text: "Yes. μικρά ἐστιν.", correct: false, feedback: "The sentence says μικρά οὐκ ἐστίν: it is not small." },
              { text: "No. ἐν τῷ ἀγρῷ ἐστιν.", correct: false, feedback: "That answers where something is, not whether it is small." }
            ]
          },
          {
            id: "lesson-2-quiz-10",
            type: "multiple_choice",
            prompt: "Which phrase shows possession with the genitive?",
            choices: [
              { text: "ἡ οἰκία τοῦ Γρύλλου", correct: true, feedback: "Correct. τοῦ Γρύλλου is a possessive genitive." },
              { text: "ἐν τῇ οἰκίᾳ", correct: false, feedback: "This is ἐν with the dative, meaning in the house." },
              { text: "εἰς τὸν ἀγρόν", correct: false, feedback: "This is εἰς with the accusative, showing motion toward." }
            ]
          }
        ]
      }
    },
    nextLesson: {
      id: "lesson-3",
      title: "The Education of Xenophon",
      fallbackUrl: "lesson.html?lesson=3&page=1"
    }
  };

  const LESSON_3_READING_TRANSLATION = `Xenophon lives in his father’s house. His father and mother love the boy and want to educate him.

His father leads Xenophon to the farm. There the boy tends the horse and leads the donkey. His father orders the boy to carry water and guard the garden.

“This horse is beautiful,” says his father, “but that donkey is small. I want you to tend the animals.”

Xenophon listens to his father and does the work. He tends the horse, carries water, and brings firewood into the house.

In the house, his mother oversees the work of the household servants. The female servants prepare the bread and weave the garments. His mother orders these women to do their work well.

“This servant prepares the bread,” says his mother, “but that one weaves the garment.”

After his chores, Xenophon washes himself and eats. Then the attendant leads him to school.

At school Xenophon is educated by the teacher. The teacher writes letters and orders the boy to write. Xenophon looks at the letters and learns.

The teacher reads Homer aloud. Xenophon wants to learn the verses and read well. The teacher is pleased because the boy loves to learn.

This teacher teaches letters, but that teacher teaches music. The boys learn their letters, listen to music, and recite the words of Homer.

Xenophon is young, but he wants to become wise.`;

  function lesson3Choice(text, correct, feedback) {
    return { text, correct, feedback };
  }

  function lesson3Question(id, topic, category, prompt, choices) {
    return { id, topic, category, type: "multiple_choice", prompt, choices };
  }

  function lesson3Mc(id, topic, category, prompt, correct, wrong, feedback) {
    return lesson3Question(id, topic, category, prompt, [
      lesson3Choice(correct, true, feedback || "Correct."),
      ...wrong.map((text) => lesson3Choice(text, false, feedback || "Review the lesson explanation and try the form again."))
    ]);
  }

  const LESSON_3_TOPIC_PRACTICE = [
    ...[
      ["lesson-3-verbs-1", "γράφει", "he, she, or it writes"],
      ["lesson-3-verbs-2", "γράφουσιν", "they write"],
      ["lesson-3-verbs-3", "μανθάνει", "he, she, or it learns"],
      ["lesson-3-verbs-4", "μανθάνουσιν", "they learn"],
      ["lesson-3-verbs-5", "θεραπεύει", "he, she, or it tends"],
      ["lesson-3-verbs-6", "θεραπεύουσιν", "they tend"],
      ["lesson-3-verbs-7", "βούλεται", "he, she, or it wants"],
      ["lesson-3-verbs-8", "βούλονται", "they want"],
      ["lesson-3-verbs-9", "παιδεύεται", "he, she, or it is educated"],
      ["lesson-3-verbs-10", "παιδεύονται", "they are educated"]
    ].map(([id, form, meaning]) => lesson3Mc(
      id,
      "third-person-present-verbs",
      "Third-person verbs",
      `What does ${form} mean?`,
      meaning,
      ["to write", "I learn", "you carry"],
      form.endsWith("ουσιν") || form.endsWith("ονται")
        ? "Correct. This is a third-person plural form."
        : "Correct. This is a third-person singular form."
    )),
    lesson3Mc("lesson-3-verbs-11", "third-person-present-verbs", "Third-person verbs", "Complete: ὁ διδάσκαλος γράμματα ___.", "γράφει", ["γράφουσιν", "γράφειν", "γράφονται"], "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."),
    lesson3Mc("lesson-3-verbs-12", "third-person-present-verbs", "Third-person verbs", "Complete: οἱ παῖδες τὰ γράμματα ___.", "μανθάνουσιν", ["μανθάνει", "μανθάνειν", "μανθάνεται"], "οἱ παῖδες is plural, so use μανθάνουσιν."),
    lesson3Mc("lesson-3-verbs-13", "third-person-present-verbs", "Third-person verbs", "Complete: ἡ μήτηρ τὰ ἔργα ___.", "σκοπεῖ", ["σκοποῦσιν", "σκοπεῖν", "σκοποῦνται"], "ἡ μήτηρ is singular, so use σκοπεῖ."),
    lesson3Mc("lesson-3-verbs-14", "third-person-present-verbs", "Third-person verbs", "Complete: αἱ δοῦλαι τοὺς πέπλους ___.", "ὑφαίνουσιν", ["ὑφαίνει", "ὑφαίνειν", "ὑφαίνεται"], "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."),
    lesson3Mc("lesson-3-verbs-15", "third-person-present-verbs", "Third-person verbs", "Complete: ὁ Ξενοφῶν ___ μανθάνειν.", "βούλεται", ["βούλονται", "βούλεσθαι", "βούλει"], "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."),

    lesson3Mc("lesson-3-objects-1", "accusative-direct-objects", "Accusative direct objects", "Identify the direct object: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.", "τὸν ἵππον", ["ὁ Ξενοφῶν", "θεραπεύει", "no direct object"], "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."),
    lesson3Mc("lesson-3-objects-2", "accusative-direct-objects", "Accusative direct objects", "Identify the direct object: ὁ πατὴρ τὸν παῖδα κελεύει.", "τὸν παῖδα", ["ὁ πατήρ", "κελεύει", "no direct object"], "τὸν παῖδα receives the command and is accusative."),
    lesson3Mc("lesson-3-objects-3", "accusative-direct-objects", "Accusative direct objects", "Identify the direct object: ἡ μήτηρ τὰ ἔργα σκοπεῖ.", "τὰ ἔργα", ["ἡ μήτηρ", "σκοπεῖ", "τῇ μητρί"], "τὰ ἔργα receives the action of σκοπεῖ."),
    lesson3Mc("lesson-3-objects-4", "accusative-direct-objects", "Accusative direct objects", "Identify the direct object: ὁ διδάσκαλος γράμματα γράφει.", "γράμματα", ["ὁ διδάσκαλος", "γράφει", "no direct object"], "γράμματα are what the teacher writes."),
    lesson3Mc("lesson-3-objects-5", "accusative-direct-objects", "Accusative direct objects", "Identify the direct object: αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.", "τοὺς πέπλους", ["αἱ δοῦλαι", "ὑφαίνουσιν", "τοῖς πέπλοις"], "τοὺς πέπλους are woven, so they are accusative direct object."),
    lesson3Mc("lesson-3-objects-6", "accusative-direct-objects", "Accusative direct objects", "Choose the case of τὸν Ξενοφῶντα in ὁ παιδαγωγὸς τὸν Ξενοφῶντα ἄγει.", "accusative", ["nominative", "genitive", "dative"], "τὸν Ξενοφῶντα is the person led."),
    lesson3Mc("lesson-3-objects-7", "accusative-direct-objects", "Accusative direct objects", "In ὁ Ξενοφῶν ξύλα κομίζει, what is the direct object?", "ξύλα", ["ὁ Ξενοφῶν", "κομίζει", "no direct object"], "ξύλα are what Xenophon brings."),
    lesson3Mc("lesson-3-objects-8", "accusative-direct-objects", "Accusative direct objects", "Identify the direct object: οἱ παῖδες τὴν μουσικὴν ἀκούουσιν.", "τὴν μουσικήν", ["οἱ παῖδες", "ἀκούουσιν", "τῇ μουσικῇ"], "τὴν μουσικήν is what the boys hear."),

    ...[
      ["lesson-3-infinitives-1", "γράφειν", "to write"],
      ["lesson-3-infinitives-2", "φέρειν", "to carry"],
      ["lesson-3-infinitives-3", "μανθάνειν", "to learn"],
      ["lesson-3-infinitives-4", "θεραπεύειν", "to tend"],
      ["lesson-3-infinitives-5", "φυλάσσειν", "to guard"],
      ["lesson-3-infinitives-6", "παιδεύειν", "to educate"],
      ["lesson-3-infinitives-7", "ποιεῖν", "to do; make"]
    ].map(([id, form, meaning]) => lesson3Mc(id, "simple-infinitive-expressions", "Infinitives", `What does ${form} mean?`, meaning, ["he writes", "they learn", "he is educated"], "Correct. This infinitive expresses “to do” the action.")),
    lesson3Mc("lesson-3-infinitives-8", "simple-infinitive-expressions", "Infinitives", "Complete: ὁ Ξενοφῶν βούλεται ___.", "μανθάνειν", ["μανθάνει", "μανθάνουσιν", "μανθάνεται"], "βούλεται is followed here by an infinitive expressing what Xenophon wants to do: μανθάνειν."),
    lesson3Mc("lesson-3-infinitives-9", "simple-infinitive-expressions", "Infinitives", "Complete: ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ ___.", "φέρειν", ["φέρει", "φέρουσιν", "φέρεται"], "The commanded action is expressed by the infinitive φέρειν."),
    lesson3Mc("lesson-3-infinitives-10", "simple-infinitive-expressions", "Infinitives", "Complete: ἡ μήτηρ κελεύει τὰς δούλας τὸν ἄρτον ___.", "παρασκευάζειν", ["παρασκευάζει", "παρασκευάζουσιν", "παρασκευάζεται"], "The infinitive παρασκευάζειν expresses the commanded action."),
    lesson3Mc("lesson-3-infinitives-11", "simple-infinitive-expressions", "Infinitives", "Complete: ὁ διδάσκαλος κελεύει τὸν Ξενοφῶντα ___.", "γράφειν", ["γράφει", "γράφουσιν", "γράφεται"], "After κελεύει, γράφειν expresses what Xenophon is ordered to do."),
    lesson3Mc("lesson-3-infinitives-12", "simple-infinitive-expressions", "Infinitives", "Complete: οἱ γονεῖς τὸν παῖδα ___ βούλονται.", "παιδεύειν", ["παιδεύει", "παιδεύουσιν", "παιδεύεται"], "βούλονται takes an infinitive: παιδεύειν."),

    lesson3Mc("lesson-3-middle-1", "present-middle-and-passive", "Middle and passive forms", "Classify γράφει.", "present active", ["present middle", "present passive", "infinitive"], "γράφει is active: he, she, or it writes."),
    lesson3Mc("lesson-3-middle-2", "present-middle-and-passive", "Middle and passive forms", "Classify βούλεται.", "present middle", ["present active", "present passive only", "infinitive"], "βούλεται uses the middle ending -εται and means wants."),
    lesson3Mc("lesson-3-middle-3", "present-middle-and-passive", "Middle and passive forms", "What does λούεται mean here?", "he washes himself", ["they wash themselves", "he writes", "to wash"], "λούεται is present middle: he washes himself."),
    lesson3Mc("lesson-3-middle-4", "present-middle-and-passive", "Middle and passive forms", "Translate: ὁ παῖς παιδεύεται ὑπὸ τοῦ διδασκάλου.", "The boy is educated by the teacher.", ["The boy educates the teacher.", "The teacher wants the boy.", "The boy writes to the teacher."], "παιδεύεται is passive; ὑπὸ τοῦ διδασκάλου identifies the agent."),
    lesson3Mc("lesson-3-middle-5", "present-middle-and-passive", "Middle and passive forms", "Which form is third-person plural middle/passive?", "βούλονται", ["βούλεται", "βούλει", "βούλεσθαι"], "The plural middle/passive ending is -ονται."),
    lesson3Mc("lesson-3-middle-6", "present-middle-and-passive", "Middle and passive forms", "Translate: ὁ πατὴρ ἐργάζεται.", "The father works.", ["The father is worked.", "The fathers work.", "The father writes."], "Some middle forms, such as ἐργάζεται, have active English meanings."),
    lesson3Mc("lesson-3-middle-7", "present-middle-and-passive", "Middle and passive forms", "Translate: οἱ παῖδες παιδεύονται.", "The boys are educated.", ["The boy is educated.", "The boys educate.", "The boys write."], "παιδεύονται is third-person plural passive."),
    lesson3Mc("lesson-3-middle-8", "present-middle-and-passive", "Middle and passive forms", "Classify φέρουσιν.", "present active", ["present middle", "present passive", "infinitive"], "φέρουσιν is active: they carry."),

    lesson3Mc("lesson-3-demonstratives-1", "demonstratives", "Demonstratives and comprehension", "Choose the agreeing form: ___ ὁ ἵππος.", "οὗτος", ["αὕτη", "τοῦτο", "οὗτοι"], "ἵππος is masculine nominative singular, so use οὗτος."),
    lesson3Mc("lesson-3-demonstratives-2", "demonstratives", "Demonstratives and comprehension", "Choose the agreeing form: ___ ἡ δούλη.", "αὕτη", ["οὗτος", "τοῦτο", "οὗτοι"], "δούλη is feminine, so the demonstrative must also be feminine: αὕτη ἡ δούλη."),
    lesson3Mc("lesson-3-demonstratives-3", "demonstratives", "Demonstratives and comprehension", "Choose the agreeing form: ___ τὸ ζῷον.", "τοῦτο", ["οὗτος", "αὕτη", "οὗτοι"], "ζῷον is neuter nominative or accusative singular, so use τοῦτο."),
    lesson3Mc("lesson-3-demonstratives-4", "demonstratives", "Demonstratives and comprehension", "Choose the phrase meaning “that donkey.”", "ἐκεῖνος ὁ ὄνος", ["ἐκείνη ὁ ὄνος", "ἐκεῖνο ὁ ὄνος", "ἐκεῖνοι ὁ ὄνος"], "ὄνος is masculine here, so use ἐκεῖνος."),
    lesson3Mc("lesson-3-demonstratives-5", "demonstratives", "Demonstratives and comprehension", "Choose the phrase meaning “that house.”", "ἐκείνη ἡ οἰκία", ["ἐκεῖνος ἡ οἰκία", "ἐκεῖνο ἡ οἰκία", "ἐκεῖνοι ἡ οἰκία"], "οἰκία is feminine, so use ἐκείνη."),
    lesson3Mc("lesson-3-demonstratives-6", "demonstratives", "Demonstratives and comprehension", "Change to accusative: οὗτος ὁ ἵππος.", "τοῦτον τὸν ἵππον", ["οὗτος ὁ ἵππος", "ταύτην τὴν ἵππον", "τοῦτο τὸν ἵππον"], "Masculine accusative singular is τοῦτον τὸν ἵππον."),
    lesson3Mc("lesson-3-demonstratives-7", "demonstratives", "Demonstratives and comprehension", "Change to accusative: αὕτη ἡ δούλη.", "ταύτην τὴν δούλην", ["αὕτη ἡ δούλη", "τοῦτον τὸν δούλην", "τοῦτο τὴν δούλην"], "Feminine accusative singular is ταύτην τὴν δούλην."),
    lesson3Mc("lesson-3-demonstratives-8", "demonstratives", "Demonstratives and comprehension", "Change to accusative: τοῦτο τὸ ζῷον.", "τοῦτο τὸ ζῷον", ["τοῦτον τὸν ζῷον", "ταύτην τὴν ζῷον", "οὗτος ὁ ζῷον"], "Neuter nominative and accusative forms are normally the same."),
    lesson3Mc("lesson-3-demonstratives-9", "demonstratives", "Demonstratives and comprehension", "Change to accusative: ἐκεῖνος ὁ διδάσκαλος.", "ἐκεῖνον τὸν διδάσκαλον", ["ἐκεῖνος ὁ διδάσκαλος", "ἐκείνην τὴν διδάσκαλον", "ἐκεῖνο τὸ διδάσκαλον"], "Masculine accusative singular is ἐκεῖνον τὸν διδάσκαλον."),
    lesson3Mc("lesson-3-demonstratives-10", "demonstratives", "Demonstratives and comprehension", "Change to accusative: ἐκείνη ἡ οἰκία.", "ἐκείνην τὴν οἰκίαν", ["ἐκεῖνον τὸν οἰκίαν", "ἐκείνη ἡ οἰκία", "ἐκεῖνο τὸ οἰκίαν"], "Feminine accusative singular is ἐκείνην τὴν οἰκίαν."),

    lesson3Mc("lesson-3-reading-1", "reading-comprehension", "Demonstratives and comprehension", "ποῦ ὁ Ξενοφῶν οἰκεῖ; (Where does Xenophon live?)", "ἐν τῇ οἰκίᾳ τοῦ πατρός", ["ἐν τῷ διδασκαλείῳ", "ἐν τῷ γυμνασίῳ", "ἐν τῇ ἀγορᾷ"], "Correct. Xenophon lives in his father’s house."),
    lesson3Mc("lesson-3-reading-2", "reading-comprehension", "Demonstratives and comprehension", "τί βούλονται ὁ πατὴρ καὶ ἡ μήτηρ; (What do his parents want?)", "τὸν παῖδα παιδεύειν", ["τὸν ἵππον φέρειν", "τὸν ἄρτον ὑφαίνειν", "τὴν μουσικὴν παρασκευάζειν"], "They want to educate the boy."),
    lesson3Mc("lesson-3-reading-3", "reading-comprehension", "Demonstratives and comprehension", "ποῦ ὁ πατὴρ τὸν Ξενοφῶντα ἄγει; (Where does his father lead Xenophon?)", "εἰς τὸν ἀγρόν", ["εἰς τὸ διδασκαλεῖον", "εἰς τὴν ἀγοράν", "πρὸς τὸν Ὅμηρον"], "His father leads him to the farm."),
    lesson3Mc("lesson-3-reading-4", "reading-comprehension", "Demonstratives and comprehension", "τίνα ζῷα ὁ Ξενοφῶν θεραπεύει; (Which animals does Xenophon tend?)", "τὸν ἵππον καὶ τὸν ὄνον", ["τὸν κύνα καὶ τὸν ἵππον", "τὰ γράμματα", "τοὺς πέπλους"], "The reading mentions the horse and donkey."),
    lesson3Mc("lesson-3-reading-5", "reading-comprehension", "Demonstratives and comprehension", "τί ὁ πατὴρ κελεύει τὸν παῖδα φέρειν; (What does the father order the boy to carry?)", "ὕδωρ", ["ἄρτον", "μουσικήν", "πέπλους"], "The father orders him to carry water."),
    lesson3Mc("lesson-3-reading-6", "reading-comprehension", "Demonstratives and comprehension", "τί αἱ δοῦλαι παρασκευάζουσιν; (What do the servants prepare?)", "τὸν ἄρτον", ["τοὺς πέπλους", "τὰ ζῷα", "τὰ γράμματα"], "The servants prepare bread."),
    lesson3Mc("lesson-3-reading-7", "reading-comprehension", "Demonstratives and comprehension", "τί αἱ δοῦλαι ὑφαίνουσιν; (What do the servants weave?)", "τοὺς πέπλους", ["τὸν ἄρτον", "τὸν ὄνον", "τὰ γράμματα"], "The servants weave garments."),
    lesson3Mc("lesson-3-reading-8", "reading-comprehension", "Demonstratives and comprehension", "τίς τὸν Ξενοφῶντα εἰς τὸ διδασκαλεῖον ἄγει; (Who leads Xenophon to school?)", "ὁ παιδαγωγός", ["ὁ πατήρ", "ἡ μήτηρ", "ὁ Ὅμηρος"], "The παιδαγωγός leads him to school."),
    lesson3Mc("lesson-3-reading-9", "reading-comprehension", "Demonstratives and comprehension", "ὑπὸ τίνος ὁ Ξενοφῶν παιδεύεται; (By whom is Xenophon educated?)", "ὑπὸ τοῦ διδασκάλου", ["ὑπὸ τοῦ ἵππου", "ὑπὸ τῆς οἰκίας", "ὑπὸ τῶν ζῴων"], "He is educated by the teacher."),
    lesson3Mc("lesson-3-reading-10", "reading-comprehension", "Demonstratives and comprehension", "τί βούλεται ὁ Ξενοφῶν μανθάνειν; (What does Xenophon want to learn?)", "τὰ ἔπη", ["τὸν ὄνον", "τὴν οἰκίαν", "τὸν ἄρτον"], "He wants to learn the verses."),
    lesson3Mc("lesson-3-reading-11", "reading-comprehension", "Demonstratives and comprehension", "τί διδάσκει οὗτος ὁ διδάσκαλος; (What does this teacher teach?)", "γράμματα", ["μουσικήν", "ἄρτον", "ζῷα"], "This teacher teaches letters."),
    lesson3Mc("lesson-3-reading-12", "reading-comprehension", "Demonstratives and comprehension", "τί διδάσκει ἐκεῖνος ὁ διδάσκαλος; (What does that teacher teach?)", "μουσικήν", ["γράμματα", "ὕδωρ", "πέπλους"], "That teacher teaches music."),
    lesson3Mc("lesson-3-reading-13", "reading-comprehension", "Demonstratives and comprehension", "τί βούλεται ὁ Ξενοφῶν γενέσθαι; (What does Xenophon want to become?)", "σοφός", ["γεωργός", "δοῦλος", "ὄνος"], "Xenophon wants to become wise."),

    lesson3Mc("lesson-3-translation-1", "translation", "Translation", "Translate: ὁ πατὴρ τὸν παῖδα κελεύει.", "The father orders the boy.", ["The boy orders the father.", "The father carries the boy.", "The boy wants the father."], "τὸν παῖδα is the direct object of κελεύει."),
    lesson3Mc("lesson-3-translation-2", "translation", "Translation", "Translate: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.", "Xenophon tends the horse.", ["The horse tends Xenophon.", "Xenophon carries the horse.", "The horse is educated."], "τὸν ἵππον receives the action."),
    lesson3Mc("lesson-3-translation-3", "translation", "Translation", "Translate: αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.", "The female servants weave the garments.", ["The garments weave the servants.", "The servants prepare bread.", "The boys learn garments."], "αἱ δοῦλαι is plural subject; τοὺς πέπλους is direct object."),
    lesson3Mc("lesson-3-translation-4", "translation", "Translation", "Translate: ἡ μήτηρ ταύτας τὰ ἔργα ποιεῖν κελεύει.", "The mother orders these women to do the work.", ["These mothers do the work.", "The work orders the mother.", "The mother wants to become wise."], "ταύτας receives the command; ποιεῖν is the commanded action."),
    lesson3Mc("lesson-3-translation-5", "translation", "Translation", "Translate: ὁ Ξενοφῶν βούλεται γράφειν.", "Xenophon wants to write.", ["Xenophon writes.", "Xenophon is written.", "Xenophon orders writing."], "βούλεται is followed by the infinitive γράφειν."),
    lesson3Mc("lesson-3-translation-6", "translation", "Translation", "Translate: ὁ παῖς ὑπὸ τοῦ διδασκάλου παιδεύεται.", "The boy is educated by the teacher.", ["The boy educates the teacher.", "The teacher wants the boy.", "The boy teaches letters."], "παιδεύεται is passive; ὑπό marks the agent."),
    lesson3Mc("lesson-3-translation-7", "translation", "Translation", "Translate: οὗτος ὁ διδάσκαλος γράμματα διδάσκει.", "This teacher teaches letters.", ["That teacher teaches music.", "This boy writes letters.", "These teachers teach."], "οὗτος ὁ διδάσκαλος means this teacher."),
    lesson3Mc("lesson-3-translation-8", "translation", "Translation", "Translate: ἐκείνη ἡ δούλη τὸν ἄρτον παρασκευάζει.", "That female servant prepares the bread.", ["This servant weaves the garment.", "That teacher prepares bread.", "The bread prepares the servant."], "ἐκείνη ἡ δούλη means that female servant."),
    lesson3Mc("lesson-3-translation-9", "translation", "Translation", "Greek for: The teacher educates the boy.", "ὁ διδάσκαλος τὸν παῖδα παιδεύει.", ["ὁ παῖς τὸν διδάσκαλον παιδεύει.", "ὁ διδάσκαλος τὸν παῖδα παιδεύεται.", "ὁ διδάσκαλος τὸν παῖδα μανθάνει."], "The boy is the direct object: τὸν παῖδα."),
    lesson3Mc("lesson-3-translation-10", "translation", "Translation", "Greek for: The boy wants to learn.", "ὁ παῖς βούλεται μανθάνειν.", ["ὁ παῖς μανθάνει βούλεται.", "ὁ παῖς βούλονται μανθάνειν.", "ὁ παῖς μανθάνουσιν."], "βούλεται takes the infinitive μανθάνειν."),
    lesson3Mc("lesson-3-translation-11", "translation", "Translation", "Greek for: The father orders Xenophon to carry water.", "ὁ πατὴρ κελεύει τὸν Ξενοφῶντα ὕδωρ φέρειν.", ["ὁ Ξενοφῶν κελεύει τὸν πατέρα ὕδωρ φέρειν.", "ὁ πατὴρ φέρει τὸν Ξενοφῶντα.", "ὁ πατὴρ βούλεται ὕδωρ."], "τὸν Ξενοφῶντα receives the command; φέρειν is the infinitive."),
    lesson3Mc("lesson-3-translation-12", "translation", "Translation", "Greek for: These female servants weave the garments.", "αὗται αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.", ["οὗτοι αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.", "αὕτη ἡ δούλη τοὺς πέπλους ὑφαίνει.", "αὗται αἱ δοῦλαι τὸν ἄρτον παρασκευάζουσιν."], "αὗται agrees with plural feminine αἱ δοῦλαι."),
    lesson3Mc("lesson-3-translation-13", "translation", "Translation", "Greek for: That teacher teaches music.", "ἐκεῖνος ὁ διδάσκαλος μουσικὴν διδάσκει.", ["ἐκείνη ὁ διδάσκαλος μουσικὴν διδάσκει.", "οὗτος ὁ διδάσκαλος γράμματα διδάσκει.", "ἐκεῖνος ὁ διδάσκαλος μουσικὴν μανθάνει."], "διδάσκαλος is masculine singular, so use ἐκεῖνος."),
    lesson3Mc("lesson-3-translation-14", "translation", "Translation", "Greek for: Xenophon is educated by the teacher.", "ὁ Ξενοφῶν ὑπὸ τοῦ διδασκάλου παιδεύεται.", ["ὁ Ξενοφῶν τὸν διδάσκαλον παιδεύει.", "ὁ διδάσκαλος ὑπὸ τοῦ Ξενοφῶντος παιδεύεται.", "ὁ Ξενοφῶν βούλεται παιδεύειν."], "Use passive παιδεύεται with ὑπὸ τοῦ διδασκάλου.")
  ];

  const LESSON_3_TEST_QUESTIONS = [
    lesson3Question("lesson-3-test-1", "lesson-test", "Third-person verbs", "What is the subject implied by γράφει?", [lesson3Choice("I", false, "γράφει is not first person."), lesson3Choice("you", false, "γράφει is not second person."), lesson3Choice("he, she, or it", true, "Correct. γράφει is third-person singular."), lesson3Choice("they", false, "They would use a plural form such as γράφουσιν.")]),
    lesson3Question("lesson-3-test-2", "lesson-test", "Third-person verbs", "Which verb means “they learn”?", [lesson3Choice("μανθάνει", false, "μανθάνει is singular."), lesson3Choice("μανθάνουσιν", true, "Correct. -ουσιν marks third-person plural active."), lesson3Choice("μανθάνειν", false, "μανθάνειν is an infinitive."), lesson3Choice("μανθάνεται", false, "This is middle/passive, not the active plural.")]),
    lesson3Question("lesson-3-test-3", "lesson-test", "Third-person verbs", "Complete: οἱ παῖδες γράμματα ___.", [lesson3Choice("μανθάνει", false, "οἱ παῖδες is plural."), lesson3Choice("μανθάνουσιν", true, "Correct. Use the plural verb with οἱ παῖδες."), lesson3Choice("μανθάνειν", false, "The sentence needs a finite verb."), lesson3Choice("μανθάνεται", false, "This is singular middle/passive.")]),
    lesson3Question("lesson-3-test-4", "lesson-test", "Third-person verbs", "Complete: ἡ μήτηρ τὰ ἔργα ___.", [lesson3Choice("σκοπεῖ", true, "Correct. ἡ μήτηρ is singular."), lesson3Choice("σκοποῦσιν", false, "That is plural."), lesson3Choice("σκοπεῖν", false, "That is an infinitive."), lesson3Choice("σκοποῦνται", false, "That is plural middle/passive.")]),
    lesson3Question("lesson-3-test-5", "lesson-test", "Accusative direct objects", "Identify the direct object: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.", [lesson3Choice("ὁ Ξενοφῶν", false, "This is the subject."), lesson3Choice("τὸν ἵππον", true, "Correct. The horse receives the action."), lesson3Choice("θεραπεύει", false, "This is the verb."), lesson3Choice("no direct object", false, "The sentence has a direct object.")]),
    lesson3Question("lesson-3-test-6", "lesson-test", "Accusative direct objects", "Complete: ὁ διδάσκαλος ___ παιδεύει.", [lesson3Choice("ὁ παῖς", false, "That is nominative."), lesson3Choice("τοῦ παιδός", false, "That is genitive."), lesson3Choice("τὸν παῖδα", true, "Correct. The boy is the direct object."), lesson3Choice("τῷ παιδί", false, "That is dative.")]),
    lesson3Question("lesson-3-test-7", "lesson-test", "Accusative direct objects", "Identify the direct object: αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.", [lesson3Choice("αἱ δοῦλαι", false, "This is the subject."), lesson3Choice("τοὺς πέπλους", true, "Correct. The garments are woven."), lesson3Choice("ὑφαίνουσιν", false, "This is the verb."), lesson3Choice("αἱ", false, "This is part of the subject phrase.")]),
    lesson3Question("lesson-3-test-8", "lesson-test", "Accusative direct objects", "Choose the accusative phrase.", [lesson3Choice("ὁ καλὸς ἵππος", false, "This is nominative."), lesson3Choice("τοῦ καλοῦ ἵππου", false, "This is genitive."), lesson3Choice("τὸν καλὸν ἵππον", true, "Correct. τὸν and -ον mark masculine accusative singular."), lesson3Choice("τῷ καλῷ ἵππῳ", false, "This is dative.")]),
    lesson3Question("lesson-3-test-9", "lesson-test", "Infinitives", "Which form means “to write”?", [lesson3Choice("γράφει", false, "This is he/she/it writes."), lesson3Choice("γράφουσιν", false, "This is they write."), lesson3Choice("γράφειν", true, "Correct. -ειν marks the infinitive here."), lesson3Choice("γράφεται", false, "This is middle/passive.")]),
    lesson3Question("lesson-3-test-10", "lesson-test", "Infinitives", "Complete: ὁ Ξενοφῶν βούλεται ___.", [lesson3Choice("μανθάνει", false, "Use an infinitive after βούλεται."), lesson3Choice("μανθάνουσιν", false, "This is plural finite."), lesson3Choice("μανθάνειν", true, "Correct. βούλεται takes the infinitive."), lesson3Choice("μανθάνεται", false, "This is middle/passive.")]),
    lesson3Question("lesson-3-test-11", "lesson-test", "Infinitives", "Translate: ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν.", [lesson3Choice("The boy orders his father to carry water.", false, "The subject is ὁ πατήρ."), lesson3Choice("The father orders the boy to carry water.", true, "Correct."), lesson3Choice("The father carries water for the boy.", false, "φέρειν is the commanded action."), lesson3Choice("The boy wants to carry water.", false, "The verb is κελεύει, not βούλεται.")]),
    lesson3Question("lesson-3-test-12", "lesson-test", "Infinitives", "In the preceding sentence, which word expresses the commanded action?", [lesson3Choice("πατήρ", false, "This names the father."), lesson3Choice("κελεύει", false, "This is the ordering verb."), lesson3Choice("παῖδα", false, "This is the person commanded."), lesson3Choice("φέρειν", true, "Correct. φέρειν is the infinitive action.")]),
    lesson3Question("lesson-3-test-13", "lesson-test", "Middle and passive forms", "What does λούεται mean here?", [lesson3Choice("he washes himself", true, "Correct. λούεται is middle here."), lesson3Choice("he washes another person", false, "That would be active in meaning."), lesson3Choice("they wash themselves", false, "That would be plural."), lesson3Choice("to wash", false, "This is not an infinitive.")]),
    lesson3Question("lesson-3-test-14", "lesson-test", "Middle and passive forms", "Translate: ὁ Ξενοφῶν παιδεύεται.", [lesson3Choice("Xenophon educates.", false, "That would be active."), lesson3Choice("Xenophon is educated.", true, "Correct. παιδεύεται is passive here."), lesson3Choice("Xenophon wants to educate.", false, "That would use βούλεται."), lesson3Choice("Xenophon educates them.", false, "The verb is not active transitive here.")]),
    lesson3Question("lesson-3-test-15", "lesson-test", "Middle and passive forms", "Which form is third-person plural middle/passive?", [lesson3Choice("βούλεται", false, "This is singular."), lesson3Choice("βούλονται", true, "Correct. -ονται marks third-person plural middle/passive."), lesson3Choice("βούλει", false, "This is not the requested form."), lesson3Choice("βούλεσθαι", false, "This is an infinitive.")]),
    lesson3Question("lesson-3-test-16", "lesson-test", "Middle and passive forms", "Which sentence is passive?", [lesson3Choice("ὁ διδάσκαλος τὸν παῖδα παιδεύει.", false, "This is active."), lesson3Choice("ὁ παῖς τὸν ἵππον θεραπεύει.", false, "This is active."), lesson3Choice("ὁ παῖς ὑπὸ τοῦ διδασκάλου παιδεύεται.", true, "Correct. παιδεύεται is passive and ὑπό marks the agent."), lesson3Choice("ὁ παῖς γράμματα γράφει.", false, "This is active.")]),
    lesson3Question("lesson-3-test-17", "lesson-test", "Demonstratives and comprehension", "Choose the correct demonstrative: ___ ἡ δούλη.", [lesson3Choice("οὗτος", false, "This is masculine."), lesson3Choice("αὕτη", true, "Correct. δούλη is feminine."), lesson3Choice("τοῦτο", false, "This is neuter."), lesson3Choice("οὗτοι", false, "This is plural masculine.")]),
    lesson3Question("lesson-3-test-18", "lesson-test", "Demonstratives and comprehension", "Choose the phrase meaning “that teacher.”", [lesson3Choice("ἐκεῖνος ὁ διδάσκαλος", true, "Correct. διδάσκαλος is masculine singular."), lesson3Choice("ἐκείνη ὁ διδάσκαλος", false, "The demonstrative is feminine."), lesson3Choice("ἐκεῖνο ὁ διδάσκαλος", false, "The demonstrative is neuter."), lesson3Choice("ἐκεῖνον ὁ διδάσκαλος", false, "This mixes accusative demonstrative with nominative article.")]),
    lesson3Question("lesson-3-test-19", "lesson-test", "Demonstratives and comprehension", "According to the reading, who takes Xenophon to school?", [lesson3Choice("his father", false, "His father takes him to the farm."), lesson3Choice("his mother", false, "His mother oversees the household."), lesson3Choice("the παιδαγωγός", true, "Correct. The παιδαγωγός leads him to school."), lesson3Choice("the music teacher", false, "The music teacher teaches music.")]),
    lesson3Question("lesson-3-test-20", "lesson-test", "Demonstratives and comprehension", "What does Xenophon want to become?", [lesson3Choice("a farmer", false, "The final sentence says σοφὸς."), lesson3Choice("a teacher", false, "The final sentence says σοφὸς."), lesson3Choice("rich", false, "The reading does not say this."), lesson3Choice("wise", true, "Correct. σοφὸς γενέσθαι βούλεται.")])
  ];

  const LESSON_3 = {
    id: "lesson-3",
    number: 3,
    title: "The Education of Xenophon",
    greekTitle: "Ἡ παιδεία τοῦ Ξενοφῶντος",
    scope: "Third-person present verbs, accusative direct objects, infinitives, introductory middle/passive forms, and demonstratives",
    theme: "Xenophon’s education, chores, household duties, and early school life",
    module: "σοφία — Wisdom and Socrates",
    banner: {
      image: "assets/module-1-sophia-banner.jpeg",
      alt: "A classical Athenian education scene with a young student and teacher",
      text: "Ἡ παιδεία τοῦ Ξενοφῶντος",
      caption: "ὁ Ξενοφῶν βούλεται τὰ ἔπη μανθάνειν."
    },
    pages: [
      { page: 1, slug: "lesson-3-page-1", title: "Reading", template: "reading", showTranslation: false },
      { page: 2, slug: "lesson-3-page-2", title: "Language Study", template: "grammar" },
      { page: 3, slug: "lesson-3-page-3", title: "Greek World / Review / Test", template: "culture" }
    ],
    vocabulary: [
      {
        category: "Proper Names",
        items: [
          { greek: "Ὅμηρος, ὁ", english: "Homer", status: "proper name", dictionaryForm: "Ὅμηρος, Ὁμήρου, ὁ" }
        ]
      },
      {
        category: "New Required Vocabulary",
        items: [
          { greek: "ἀκούω", english: "hear; listen to", status: "new required vocabulary", principalParts: ["ἀκούω", "ἀκούσομαι", "ἤκουσα", "ἀκήκοα"] },
          { greek: "ἀναγιγνώσκω", english: "read; read aloud", status: "new required vocabulary", principalParts: ["ἀναγιγνώσκω", "ἀναγνώσομαι", "ἀνέγνων", "ἀνέγνωκα"] },
          { greek: "βλέπω", english: "see; look at", status: "new required vocabulary", principalParts: ["βλέπω", "βλέψω", "ἔβλεψα"] },
          { greek: "βούλομαι", english: "wish; want", status: "new required vocabulary", principalParts: ["βούλομαι", "βουλήσομαι"] },
          { greek: "γενέσθαι", english: "to become", status: "new required vocabulary", dictionaryForm: "γίγνομαι" },
          { greek: "γράμμα, τό", english: "letter; written character", status: "new required vocabulary", dictionaryForm: "γράμμα, γράμματος, τό" },
          { greek: "γράφω", english: "write", status: "new required vocabulary", principalParts: ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφην"] },
          { greek: "διδάσκαλος, ὁ", english: "teacher", status: "new required vocabulary", dictionaryForm: "διδάσκαλος, διδασκάλου, ὁ" },
          { greek: "διδασκαλεῖον, τό", english: "school", status: "new required vocabulary", dictionaryForm: "διδασκαλεῖον, διδασκαλείου, τό" },
          { greek: "διδάσκω", english: "teach", status: "new required vocabulary", principalParts: ["διδάσκω", "διδάξω", "ἐδίδαξα", "δεδίδαχα"] },
          { greek: "ἐκεῖ", english: "there", status: "new required vocabulary" },
          { greek: "ἐκεῖνος, ἐκείνη, ἐκεῖνο", english: "that", status: "new required vocabulary", dictionaryForm: "ἐκεῖνος, ἐκείνη, ἐκεῖνο" },
          { greek: "ἔπος, τό", english: "word; verse; epic verse", status: "new required vocabulary", dictionaryForm: "ἔπος, ἔπους, τό" },
          { greek: "ἐσθίω", english: "eat", status: "new required vocabulary", principalParts: ["ἐσθίω", "ἔδομαι", "ἔφαγον", "ἐδήδοκα"] },
          { greek: "θεραπεύω", english: "tend; care for", status: "new required vocabulary", principalParts: ["θεραπεύω", "θεραπεύσω", "ἐθεράπευσα", "τεθεράπευκα"] },
          { greek: "κομίζω", english: "carry; bring", status: "new required vocabulary", principalParts: ["κομίζω", "κομιῶ", "ἐκόμισα", "κεκόμικα"] },
          { greek: "λούομαι", english: "wash oneself; bathe", status: "new required vocabulary", principalParts: ["λούομαι", "λούσομαι", "ἐλουσάμην", "λέλουμαι"] },
          { greek: "μανθάνω", english: "learn", status: "new required vocabulary", principalParts: ["μανθάνω", "μαθήσομαι", "ἔμαθον", "μεμάθηκα"] },
          { greek: "μουσική, ἡ", english: "music", status: "new required vocabulary", dictionaryForm: "μουσική, μουσικῆς, ἡ" },
          { greek: "νέος, νέα, νέον", english: "young", status: "new required vocabulary", dictionaryForm: "νέος, νέα, νέον" },
          { greek: "οὗτος, αὕτη, τοῦτο", english: "this", status: "new required vocabulary", dictionaryForm: "οὗτος, αὕτη, τοῦτο" },
          { greek: "παιδαγωγός, ὁ", english: "attendant who escorts and supervises a boy", status: "new required vocabulary", dictionaryForm: "παιδαγωγός, παιδαγωγοῦ, ὁ" },
          { greek: "παιδεύω", english: "educate; train", status: "new required vocabulary", principalParts: ["παιδεύω", "παιδεύσω", "ἐπαίδευσα", "πεπαίδευκα", "πεπαίδευμαι", "ἐπαιδεύθην"] },
          { greek: "ποιέω", english: "do; make", status: "new required vocabulary", principalParts: ["ποιέω", "ποιήσω", "ἐποίησα", "πεποίηκα", "πεποίημαι", "ἐποιήθην"] },
          { greek: "σκοπέω", english: "examine; oversee", status: "new required vocabulary", principalParts: ["σκοπέω", "σκέψομαι", "ἐσκεψάμην"] },
          { greek: "σοφός, σοφή, σοφόν", english: "wise", status: "new required vocabulary", dictionaryForm: "σοφός, σοφή, σοφόν" },
          { greek: "ζῷον, τό", english: "animal", status: "new required vocabulary", dictionaryForm: "ζῷον, ζῴου, τό" }
        ]
      },
      {
        category: "Review Vocabulary",
        items: [
          { greek: "ἀγρός, ὁ", english: "field; farm", status: "review vocabulary", dictionaryForm: "ἀγρός, ἀγροῦ, ὁ" },
          { greek: "ἄρτος, ὁ", english: "bread", status: "review vocabulary", dictionaryForm: "ἄρτος, ἄρτου, ὁ" },
          { greek: "δοῦλος, ὁ", english: "male slave; male household servant", status: "review vocabulary", dictionaryForm: "δοῦλος, δούλου, ὁ" },
          { greek: "δούλη, ἡ", english: "female slave; female household servant", status: "review vocabulary", dictionaryForm: "δούλη, δούλης, ἡ" },
          { greek: "ἔργον, τό", english: "work; task", status: "review vocabulary", dictionaryForm: "ἔργον, ἔργου, τό" },
          { greek: "ἵππος, ὁ", english: "horse", status: "review vocabulary", dictionaryForm: "ἵππος, ἵππου, ὁ" },
          { greek: "κελεύω", english: "order; command; instruct", status: "review vocabulary", principalParts: ["κελεύω", "κελεύσω", "ἐκέλευσα", "κεκέλευκα"] },
          { greek: "κῆπος, ὁ", english: "garden", status: "review vocabulary", dictionaryForm: "κῆπος, κήπου, ὁ" },
          { greek: "μήτηρ, ἡ", english: "mother", status: "review vocabulary", dictionaryForm: "μήτηρ, μητρός, ἡ" },
          { greek: "οἰκία, ἡ", english: "house", status: "review vocabulary", dictionaryForm: "οἰκία, οἰκίας, ἡ" },
          { greek: "ὄνος, ὁ/ἡ", english: "donkey", status: "review vocabulary", dictionaryForm: "ὄνος, ὄνου, ὁ/ἡ" },
          { greek: "παῖς, ὁ/ἡ", english: "child; boy; girl", status: "review vocabulary", dictionaryForm: "παῖς, παιδός, ὁ/ἡ" },
          { greek: "πατήρ, ὁ", english: "father", status: "review vocabulary", dictionaryForm: "πατήρ, πατρός, ὁ" },
          { greek: "πέπλος, ὁ", english: "robe; garment", status: "review vocabulary", dictionaryForm: "πέπλος, πέπλου, ὁ" },
          { greek: "παρασκευάζω", english: "prepare", status: "review vocabulary", principalParts: ["παρασκευάζω", "παρασκευάσω", "παρεσκεύασα", "παρεσκεύακα"] },
          { greek: "ὕδωρ, τό", english: "water", status: "review vocabulary", dictionaryForm: "ὕδωρ, ὕδατος, τό" },
          { greek: "ὑφαίνω", english: "weave", status: "review vocabulary", principalParts: ["ὑφαίνω", "ὑφανῶ", "ὕφηνα"] },
          { greek: "φέρω", english: "carry; bring", status: "review vocabulary", principalParts: ["φέρω", "οἴσω", "ἤνεγκα", "ἐνήνοχα", "ἐνήνεγμαι", "ἠνέχθην"] },
          { greek: "φιλέω", english: "love; be fond of", status: "review vocabulary", principalParts: ["φιλέω", "φιλήσω", "ἐφίλησα", "πεφίληκα", "πεφίλημαι", "ἐφιλήθην"] },
          { greek: "φυλάσσω", english: "guard; watch over", status: "review vocabulary", principalParts: ["φυλάσσω", "φυλάξω", "ἐφύλαξα", "πεφύλαχα", "πεφύλαγμαι", "ἐφυλάχθην"] },
          { greek: "ξύλον, τό", english: "wood; piece of firewood", status: "review vocabulary", dictionaryForm: "ξύλον, ξύλου, τό" }
        ]
      }
    ],
    reading: {
      title: "Ἡ παιδεία τοῦ Ξενοφῶντος",
      paragraphs: [
        { greek: "Ὁ Ξενοφῶν ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ. ὁ πατὴρ καὶ ἡ μήτηρ τὸν παῖδα φιλοῦσιν καὶ παιδεύειν βούλονται.", gloss: [
          { greek: "τὸν παῖδα", english: "Accusative singular; direct object of φιλοῦσιν." },
          { greek: "παιδεύειν βούλονται", english: "“They want to educate.” The infinitive παιδεύειν completes the meaning of βούλονται." }
        ] },
        { greek: "ὁ πατὴρ τὸν Ξενοφῶντα εἰς τὸν ἀγρὸν ἄγει. ἐκεῖ ὁ παῖς τὸν ἵππον θεραπεύει καὶ τὸν ὄνον ἄγει. ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν καὶ τὸν κῆπον φυλάσσειν.", gloss: [
          { greek: "τὸν Ξενοφῶντα", english: "Accusative singular; direct object of ἄγει." },
          { greek: "κελεύει τὸν παῖδα ὕδωρ φέρειν", english: "“He orders the boy to carry water.” τὸν παῖδα is the person receiving the command; φέρειν is the commanded action." }
        ] },
        { greek: "«οὗτος ὁ ἵππος καλός ἐστιν,» λέγει ὁ πατήρ· «ἐκεῖνος δὲ ὁ ὄνος μικρός ἐστιν. βούλομαι σε τὰ ζῷα θεραπεύειν.»", gloss: [
          { greek: "οὗτος ὁ ἵππος", english: "“This horse.” The demonstrative and noun agree in gender, number, and case." },
          { greek: "ἐκεῖνος ὁ ὄνος", english: "“That donkey.” The demonstrative agrees with ὄνος." },
          { greek: "σε", english: "Accusative singular “you,” functioning as the subject of θεραπεύειν after βούλομαι." }
        ] },
        { greek: "ὁ Ξενοφῶν τὸν πατέρα ἀκούει καὶ τὸ ἔργον ποιεῖ. τὸν ἵππον θεραπεύει, ὕδωρ φέρει, καὶ ξύλα εἰς τὴν οἰκίαν κομίζει." },
        { greek: "ἐν δὲ τῇ οἰκίᾳ ἡ μήτηρ τὰ ἔργα τῶν δούλων σκοπεῖ. αἱ δοῦλαι τὸν ἄρτον παρασκευάζουσιν καὶ τοὺς πέπλους ὑφαίνουσιν. ἡ μήτηρ κελεύει ταύτας τὰ ἔργα καλῶς ποιεῖν.", gloss: [
          { greek: "ταύτας", english: "Feminine accusative plural of οὗτος; refers to the female servants." }
        ] },
        { greek: "«αὕτη ἡ δούλη τὸν ἄρτον παρασκευάζει,» λέγει ἡ μήτηρ· «ἐκείνη δὲ τὸν πέπλον ὑφαίνει.»" },
        { greek: "μετὰ τὰ ἔργα ὁ Ξενοφῶν λούεται καὶ ἐσθίει. ἔπειτα ὁ παιδαγωγὸς αὐτὸν εἰς τὸ διδασκαλεῖον ἄγει.", gloss: [
          { greek: "λούεται", english: "Present middle: “he washes himself” or “he bathes.”" }
        ] },
        { greek: "ἐν τῷ διδασκαλείῳ ὁ Ξενοφῶν ὑπὸ τοῦ διδασκάλου παιδεύεται. ὁ διδάσκαλος γράμματα γράφει καὶ τὸν παῖδα κελεύει γράφειν. ὁ Ξενοφῶν τὰ γράμματα βλέπει καὶ μανθάνει.", gloss: [
          { greek: "παιδεύεται", english: "Present passive: “he is educated.”" },
          { greek: "ὑπὸ τοῦ διδασκάλου", english: "“By the teacher.” This identifies the agent of a passive verb." }
        ] },
        { greek: "ὁ διδάσκαλος τὸν Ὅμηρον ἀναγιγνώσκει. ὁ Ξενοφῶν βούλεται τὰ ἔπη μανθάνειν καὶ καλῶς ἀναγιγνώσκειν. ὁ διδάσκαλος χαίρει, ὅτι ὁ παῖς φιλεῖ μανθάνειν." },
        { greek: "οὗτος μὲν ὁ διδάσκαλος γράμματα διδάσκει· ἐκεῖνος δὲ ὁ διδάσκαλος μουσικὴν διδάσκει. οἱ παῖδες τὰ γράμματα μανθάνουσιν, τὴν μουσικὴν ἀκούουσιν, καὶ τοὺς τοῦ Ὁμήρου λόγους λέγουσιν." },
        { greek: "ὁ Ξενοφῶν νέος ἐστίν, ἀλλὰ σοφὸς γενέσθαι βούλεται.", gloss: [
          { greek: "σοφὸς γενέσθαι βούλεται", english: "“He wants to become wise.” Treat γενέσθαι as a vocabulary form here; the aorist system comes later." }
        ] }
      ],
      translation: LESSON_3_READING_TRANSLATION,
      notesMarkdown: "The household and school scenes are plausible reconstructions for beginning Greek, not documented incidents from Xenophon’s childhood."
    },
    wordStudy: {
      label: "Learning Objectives",
      blocks: [
        {
          title: "By the end of Lesson 3",
          body: [
            "You should be able to recognize third-person singular and plural present verbs, identify accusative direct objects, understand simple infinitive expressions, recognize introductory present middle and passive forms, identify and translate οὗτος and ἐκεῖνος, and read a short continuous narrative about Xenophon’s education and responsibilities."
          ],
          display: [
            { greek: "γράφει / γράφουσιν", english: "he writes / they write" },
            { greek: "τὸν ἵππον", english: "accusative direct object" },
            { greek: "μανθάνειν", english: "to learn" },
            { greek: "παιδεύεται", english: "he is educated" },
            { greek: "οὗτος / ἐκεῖνος", english: "this / that" }
          ]
        }
      ]
    },
    culture: {
      title: "The Education of an Athenian Boy",
      body: [
        "A boy from a prosperous Athenian family was normally educated outside the home by several adults. A παιδαγωγός, often an enslaved household attendant, accompanied him to school and supervised his behavior. One teacher taught reading, writing, and poetry, while another might teach music. Physical training took place under a separate instructor at the palaestra or gymnasium.",
        "Homer occupied a central place in Greek education. Boys learned passages from the Iliad and Odyssey, recited poetry aloud, and absorbed examples of courage, leadership, honor, anger, loyalty, and self-control.",
        "The household scenes in this lesson are plausible reconstructions rather than documented incidents from Xenophon’s childhood. They are consistent with the agricultural and educational world of a prosperous Athenian family. Xenophon later showed sustained interest in education, household management, horses, farming, leadership, and moral training."
      ],
      questions: [
        { prompt: "What did a παιδαγωγός do?", answer: "He accompanied a boy to school and supervised his behavior." },
        { prompt: "Why was Homer central to education?", answer: "Boys recited Homeric poetry and absorbed examples of courage, leadership, honor, loyalty, and self-control." },
        { prompt: "Are the scenes from Xenophon’s childhood documented?", answer: "No. They are plausible reconstructions, not established biographical incidents." }
      ]
    },
    grammar: {
      intro: "Lesson 3 builds on the household narrative with third-person present verbs, accusative direct objects, infinitives, introductory middle/passive forms, and demonstratives.",
      sections: [
        {
          id: "third-person-present-verbs",
          title: "1. Third-Person Present Verbs",
          body: [
            "Third-person verbs describe what he, she, it, or they do.",
            "A common third-person singular active ending is -ει. A common third-person plural active ending is -ουσι(ν)."
          ],
          tables: [
            { title: "Third-person singular", headers: ["Greek", "Meaning"], greekColumns: [0], rows: [["γράφει", "he, she, or it writes"], ["φέρει", "he, she, or it carries"], ["φυλάσσει", "he, she, or it guards"], ["μανθάνει", "he, she, or it learns"], ["κελεύει", "he, she, or it orders"], ["ἐστίν", "he, she, or it is"]] },
            { title: "Third-person plural", headers: ["Greek", "Meaning"], greekColumns: [0], rows: [["γράφουσιν", "they write"], ["φέρουσιν", "they carry"], ["φυλάσσουσιν", "they guard"], ["μανθάνουσιν", "they learn"], ["κελεύουσιν", "they order"], ["εἰσίν", "they are"]] },
            { title: "Singular and plural comparison", headers: ["Singular", "Plural"], greekColumns: [0, 1], rows: [["ὁ παῖς γράφει.", "οἱ παῖδες γράφουσιν."]] }
          ],
          examples: [
            { greek: "ὁ πατὴρ τὸν παῖδα κελεύει.", english: "The father orders the boy." },
            { greek: "αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.", english: "The female servants weave the garments." },
            { greek: "ὁ διδάσκαλος γράμματα γράφει.", english: "The teacher writes letters." },
            { greek: "οἱ παῖδες τὰ γράμματα μανθάνουσιν.", english: "The boys learn letters." }
          ],
          checks: [{ prompt: "Which ending usually marks a third-person plural active verb in this lesson?", answer: "-ουσι(ν), as in μανθάνουσιν." }],
          practiceTopic: "third-person-present-verbs"
        },
        {
          id: "accusative-direct-objects",
          title: "2. Accusative Direct Objects",
          body: [
            "The direct object receives the action of the verb.",
            "In ὁ Ξενοφῶν φέρει τὸ ὕδωρ, the subject is ὁ Ξενοφῶν, the verb is φέρει, and the direct object is τὸ ὕδωρ.",
            "The nominative and accusative forms of neuter nouns are normally identical."
          ],
          tables: [
            { title: "Masculine examples", headers: ["Nominative", "Accusative"], greekColumns: [0, 1], rows: [["ὁ ἵππος", "τὸν ἵππον"], ["ὁ ὄνος", "τὸν ὄνον"], ["ὁ κῆπος", "τὸν κῆπον"], ["ὁ διδάσκαλος", "τὸν διδάσκαλον"]] },
            { title: "Neuter examples", headers: ["Nominative", "Accusative"], greekColumns: [0, 1], rows: [["τὸ ἔργον", "τὸ ἔργον"], ["τὸ γράμμα", "τὸ γράμμα"], ["τὸ ζῷον", "τὸ ζῷον"]] },
            { title: "Plural direct objects", headers: ["Phrase", "Meaning"], greekColumns: [0], rows: [["τὰ γράμματα", "letters"], ["τὰ ἔργα", "works / tasks"], ["τοὺς πέπλους", "garments"], ["τοὺς λόγους", "words / speeches"]] }
          ],
          examples: [
            { greek: "ὁ πατὴρ τὸν Ξενοφῶντα ἄγει.", english: "The father leads Xenophon." },
            { greek: "ὁ παῖς τὸν ἵππον θεραπεύει.", english: "The boy tends the horse." },
            { greek: "ἡ μήτηρ τὰ ἔργα σκοπεῖ.", english: "The mother oversees the work." },
            { greek: "ὁ διδάσκαλος τὸν Ὅμηρον ἀναγιγνώσκει.", english: "The teacher reads Homer aloud." }
          ],
          checks: [{ prompt: "In ὁ παῖς τὸν ἵππον θεραπεύει, what receives the action?", answer: "τὸν ἵππον receives the action and is the accusative direct object." }],
          practiceTopic: "accusative-direct-objects"
        },
        {
          id: "simple-infinitive-expressions",
          title: "3. Simple Infinitive Expressions",
          body: [
            "The infinitive expresses “to do something.” A common present active infinitive ending is -ειν.",
            "Contract verbs may appear in contracted form, such as ποιεῖν.",
            "After κελεύω, the person receiving the command is accusative, and the infinitive expresses the commanded action."
          ],
          table: { title: "Present active infinitives", headers: ["Verb", "Infinitive", "Meaning"], greekColumns: [0, 1], rows: [["γράφω", "γράφειν", "to write"], ["φέρω", "φέρειν", "to carry"], ["φυλάσσω", "φυλάσσειν", "to guard"], ["μανθάνω", "μανθάνειν", "to learn"], ["θεραπεύω", "θεραπεύειν", "to tend"], ["παιδεύω", "παιδεύειν", "to educate"], ["ποιέω", "ποιεῖν", "to do; make"]] },
          examples: [
            { greek: "ὁ Ξενοφῶν βούλεται μανθάνειν.", english: "Xenophon wants to learn." },
            { greek: "οἱ γονεῖς τὸν παῖδα παιδεύειν βούλονται.", english: "The parents want to educate the boy." },
            { greek: "ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν.", english: "The father orders the boy to carry water." },
            { greek: "ἡ μήτηρ κελεύει τὰς δούλας τὸν ἄρτον παρασκευάζειν.", english: "The mother orders the female servants to prepare bread." }
          ],
          checks: [{ prompt: "In βούλεται μανθάνειν, what does μανθάνειν do?", answer: "It is the infinitive that completes the idea: he wants to learn." }],
          practiceTopic: "simple-infinitive-expressions"
        },
        {
          id: "present-middle-and-passive",
          title: "4. Present Middle and Passive",
          body: [
            "Introductory third-person middle/passive endings are -εται in the singular and -ονται in the plural.",
            "In the middle voice, the subject may act upon or for himself. Some verbs use middle forms but have active English meanings.",
            "In the passive voice, the subject receives the action."
          ],
          tables: [
            { title: "Middle/passive endings", headers: ["Person", "Singular", "Plural"], greekColumns: [1, 2], rows: [["third person", "-εται", "-ονται"]] },
            { title: "Forms to recognize", headers: ["Greek", "Meaning"], greekColumns: [0], rows: [["λούεται", "he or she washes himself or herself"], ["ἐργάζεται", "he or she works"], ["βούλεται", "he or she wishes"], ["παιδεύεται", "he or she is educated"], ["λούονται", "they wash themselves"], ["ἐργάζονται", "they work"], ["βούλονται", "they wish"], ["παιδεύονται", "they are educated"]] }
          ],
          examples: [
            { greek: "ὁ Ξενοφῶν λούεται.", english: "Xenophon washes himself." },
            { greek: "ὁ πατὴρ ἐργάζεται.", english: "The father works." },
            { greek: "ὁ Ξενοφῶν βούλεται μανθάνειν.", english: "Xenophon wants to learn." },
            { greek: "ὁ διδάσκαλος παιδεύει τὸν Ξενοφῶντα.", english: "The teacher educates Xenophon." },
            { greek: "ὁ Ξενοφῶν παιδεύεται ὑπὸ τοῦ διδασκάλου.", english: "Xenophon is educated by the teacher." }
          ],
          checks: [{ prompt: "Which sentence is passive: παιδεύει τὸν παῖδα or ὁ παῖς παιδεύεται?", answer: "ὁ παῖς παιδεύεται is passive: the boy receives the education." }],
          practiceTopic: "present-middle-and-passive"
        },
        {
          id: "demonstratives",
          title: "5. Demonstratives",
          body: [
            "οὗτος, αὕτη, τοῦτο means “this” or “these.” ἐκεῖνος, ἐκείνη, ἐκεῖνο means “that” or “those.”",
            "Demonstratives agree with their nouns in gender, number, and case.",
            "The standard attributive pattern places the demonstrative outside the article-noun group: οὗτος ὁ παῖς."
          ],
          tables: [
            { title: "οὗτος, αὕτη, τοῦτο: singular", headers: ["Gender", "Nominative Singular", "Accusative Singular"], greekColumns: [1, 2], rows: [["masculine", "οὗτος", "τοῦτον"], ["feminine", "αὕτη", "ταύτην"], ["neuter", "τοῦτο", "τοῦτο"]] },
            { title: "οὗτος, αὕτη, τοῦτο: plural", headers: ["Gender", "Nominative Plural", "Accusative Plural"], greekColumns: [1, 2], rows: [["masculine", "οὗτοι", "τούτους"], ["feminine", "αὗται", "ταύτας"], ["neuter", "ταῦτα", "ταῦτα"]] },
            { title: "ἐκεῖνος, ἐκείνη, ἐκεῖνο: singular", headers: ["Gender", "Nominative Singular", "Accusative Singular"], greekColumns: [1, 2], rows: [["masculine", "ἐκεῖνος", "ἐκεῖνον"], ["feminine", "ἐκείνη", "ἐκείνην"], ["neuter", "ἐκεῖνο", "ἐκεῖνο"]] },
            { title: "ἐκεῖνος, ἐκείνη, ἐκεῖνο: plural", headers: ["Gender", "Nominative Plural", "Accusative Plural"], greekColumns: [1, 2], rows: [["masculine", "ἐκεῖνοι", "ἐκείνους"], ["feminine", "ἐκεῖναι", "ἐκείνας"], ["neuter", "ἐκεῖνα", "ἐκεῖνα"]] }
          ],
          examples: [
            { greek: "οὗτος ὁ παῖς", english: "this boy" },
            { greek: "αὕτη ἡ οἰκία", english: "this house" },
            { greek: "ἐκεῖνος ὁ ἵππος", english: "that horse" },
            { greek: "ἐκείνη ἡ δούλη", english: "that female servant" },
            { greek: "οὗτος ὁ διδάσκαλος", english: "this teacher" },
            { greek: "ταύτην τὴν οἰκίαν", english: "this house as direct object" },
            { greek: "ἐκεῖνα τὰ ζῷα", english: "those animals" },
            { greek: "ἐκείνας τὰς δούλας", english: "those female servants as direct object" }
          ],
          checks: [{ prompt: "Why is αὕτη correct in αὕτη ἡ δούλη?", answer: "δούλη is feminine nominative singular, so the demonstrative must also be feminine nominative singular." }],
          practiceTopic: "demonstratives"
        }
      ],
      summary: {
        title: "Lesson 3 Grammar Summary",
        items: [
          "Third-person singular active forms often end in -ει.",
          "Third-person plural active forms often end in -ουσι(ν).",
          "The accusative marks the direct object.",
          "Infinitives in -ειν can complete βούλομαι or express the action commanded by κελεύω.",
          "Middle/passive forms use -εται and -ονται.",
          "Demonstratives agree with their nouns in gender, number, and case."
        ]
      }
    },
    enrichment: [],
    activities: {
      "vocab-practice": {
        title: "Lesson 3 Vocabulary Practice",
        questions: LESSON_3_TOPIC_PRACTICE.filter((question) => ["third-person-present-verbs", "simple-infinitive-expressions", "demonstratives"].includes(question.topic)).slice(0, 12)
      },
      "grammar-flashcards": {
        title: "Lesson 3 Grammar Flashcards",
        cards: [
          { prompt: "What does -ει often mark?", answer: "Third-person singular present active." },
          { prompt: "What does -ουσι(ν) often mark?", answer: "Third-person plural present active." },
          { prompt: "What does the accusative direct object do?", answer: "It receives the action of the verb." },
          { prompt: "What does an infinitive express?", answer: "To do something." },
          { prompt: "What does -εται mark in Lesson 3?", answer: "Third-person singular middle/passive." },
          { prompt: "How do demonstratives agree?", answer: "In gender, number, and case." }
        ]
      },
      "topic-practice": {
        title: "Lesson 3 Repeatable Practice",
        topicInstructions: {
          "third-person-present-verbs": "Recognize singular and plural third-person present verbs.",
          "accusative-direct-objects": "Identify direct objects and choose accusative forms.",
          "simple-infinitive-expressions": "Match and complete infinitive expressions.",
          "present-middle-and-passive": "Classify and translate introductory middle/passive forms.",
          "demonstratives": "Choose agreeing demonstratives and transform forms.",
          "reading-comprehension": "Answer supported comprehension questions from the reading.",
          "translation": "Translate short sentences using Lesson 3 vocabulary and grammar."
        },
        questions: LESSON_3_TOPIC_PRACTICE
      },
      "grammar-exercises": {
        title: "Lesson 3 Grammar Exercises",
        threshold: 80,
        questions: LESSON_3_TOPIC_PRACTICE.filter((question) => ["third-person-present-verbs", "accusative-direct-objects", "simple-infinitive-expressions", "present-middle-and-passive", "demonstratives"].includes(question.topic)).slice(0, 30)
      },
      "lesson-quiz": {
        title: "Lesson 3 Test — The Education of Xenophon",
        threshold: 70,
        masteryScore: 85,
        pointsPossible: 100,
        pointsPerQuestion: 5,
        randomizeChoices: true,
        categoryFeedback: {
          "Third-person verbs": "Review singular -ει versus plural -ουσι(ν).",
          "Accusative direct objects": "Review how the accusative marks the person or thing receiving the action.",
          "Infinitives": "Review infinitives in -ειν, especially after βούλομαι and κελεύω.",
          "Middle and passive forms": "Review -εται and -ονται, and contrast παιδεύει with παιδεύεται.",
          "Demonstratives and comprehension": "Review demonstrative agreement in gender, number, and case."
        },
        questions: LESSON_3_TEST_QUESTIONS
      }
    },
    nextLesson: {
      id: "lesson-4",
      title: "The Student and the Teacher",
      fallbackUrl: "lesson.html?lesson=4&page=1"
    }
  };

  const LESSONS = {
    "lesson-1": {
      id: "lesson-1",
      number: 1,
      title: "Xenophon at Home",
      greekTitle: "Ὁ Ξενοφῶν ἐν τῷ οἴκῳ",
      scope: "Nominative singular, accusative singular, present active indicative, definite article, basic noun/adjective agreement",
      theme: "Young Xenophon at home with Gryllus, his mother, and the horse",
      module: "σοφία — Wisdom and Socrates",
      banner: {
        image: "assets/lesson-1-banner.png?v=xenophon-home-20260701",
        alt: "A classical Greek household scene with Xenophon and a horse",
        caption: "ὁ Ξενοφῶν τὸν ἵππον θεραπεύει."
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
            { greek: "ἄγει", english: "leads" },
            { greek: "βαδίζει", english: "walks" },
            { greek: "βλέπει", english: "sees, looks" },
            { greek: "θεραπεύει", english: "takes care of, tends" },
            { greek: "ἕπεται", english: "follows" },
            { greek: "ἔχει", english: "has" },
            { greek: "καλεῖ", english: "calls" },
            { greek: "λέγει", english: "says" },
            { greek: "μένει", english: "remains, stays" },
            { greek: "οἰκεῖ", english: "lives" },
            { greek: "ποιεῖ", english: "does, makes" },
            { greek: "φέρει", english: "carries" },
            { greek: "ὑλακτεῖ", english: "barks" },
            { greek: "χαίρει", english: "rejoices, is glad" }
          ]
        },
        {
          category: "Nouns",
          items: [
            { greek: "ὁ ἀγρός", english: "field" },
            { greek: "ὁ ἀνήρ", english: "man, husband" },
            { greek: "αἱ Ἀθῆναι", english: "Athens" },
            { greek: "ὁ δεσπότης", english: "master" },
            { greek: "τὸ δεῖπνον", english: "meal" },
            { greek: "ἡ θύρα", english: "door" },
            { greek: "ὁ ἵππος", english: "horse" },
            { greek: "ὁ ἱππεύς", english: "cavalryman, horseman" },
            { greek: "τὸ ἱππικόν", english: "cavalry" },
            { greek: "ὁ κύων", english: "dog" },
            { greek: "ὁ λόφος", english: "hill" },
            { greek: "ἡ μήτηρ", english: "mother" },
            { greek: "ὁ νεανίας", english: "young man" },
            { greek: "ὁ οἶκος", english: "house" },
            { greek: "ὁ πατήρ", english: "father" },
            { greek: "ὁ παῖς", english: "child, boy" },
            { greek: "ὁ σῖτος", english: "grain" },
            { greek: "ὁ υἱός", english: "son" },
            { greek: "τὸ ὕδωρ", english: "water" },
            { greek: "ὁ Ξενοφῶν", english: "Xenophon" },
            { greek: "ὁ Γρύλλος", english: "Gryllus" },
            { greek: "ἡ Ἐρχία", english: "Erchia" }
          ]
        },
        {
          category: "Adjectives",
          items: [
            { greek: "ἀγαθός", english: "good" },
            { greek: "Ἀθηναῖος", english: "Athenian" },
            { greek: "ἰσχυρός", english: "strong" },
            { greek: "καλός", english: "beautiful, noble" },
            { greek: "νέος", english: "young" }
          ]
        },
        {
          category: "Other",
          items: [
            { greek: "ἐν", english: "in" },
            { greek: "ἐπί", english: "on" },
            { greek: "εἶτα", english: "then" },
            { greek: "οὐ", english: "not" },
            { greek: "περί", english: "around" },
            { greek: "πρός", english: "toward, to" }
          ]
        }
      ],
      reading: {
        title: "Ὁ Ξενοφῶν ἐν τῷ οἴκῳ",
        paragraphs: [
          {
            greek: "ὁ Ξενοφῶν νέος ἐστιν. οἰκεῖ δὲ οὐκ ἐν ταῖς Ἀθήναις, ἀλλὰ ἐν τῇ Ἐρχίᾳ. ὁ οἶκος ἐπὶ λόφου ἐστίν. καλός ἐστιν ὁ οἶκος, καὶ ἐλαῖαι περὶ τὸν οἶκόν εἰσιν. ὁ Γρύλλος πατὴρ αὐτοῦ ἐστιν. Ἀθηναῖος ἱππεύς ἐστιν· ἐν γὰρ τῷ ἱππικῷ τῶν Ἀθηναίων ἐστίν. ἔχει οὖν ἵππον καλὸν καὶ ἰσχυρόν. ὁ Ξενοφῶν τὸν ἵππον θεραπεύει. φέρει ὕδωρ καὶ σῖτον πρὸς τὸν ἵππον. ὁ Γρύλλος βλέπει πρὸς τὸν υἱὸν καὶ λέγει· “καλῶς ποιεῖς, ὦ παῖ. ὁ ἀγαθὸς ἱππεὺς τὸν ἵππον θεραπεύει.”",
            gloss: [
              { greek: "οὐκ ... ἀλλά", english: "not ... but" },
              { greek: "ἐν", english: "in" },
              { greek: "Ἐρχία", english: "Erchia" },
              { greek: "ἐπί", english: "on" },
              { greek: "λόφος, ὁ", english: "hill" },
              { greek: "περί", english: "around" },
              { greek: "Γρύλλος, ὁ", english: "Gryllus" },
              { greek: "πατήρ, ὁ", english: "father" },
              { greek: "Ἀθηναῖος ἱππεύς", english: "Athenian horseman" },
              { greek: "ἵππος, ὁ", english: "horse" },
              { greek: "ἰσχυρός", english: "strong" },
              { greek: "θεραπεύει", english: "tends, takes care of" },
              { greek: "ὕδωρ, τό", english: "water" },
              { greek: "σῖτος, ὁ", english: "grain" },
              { greek: "πρός", english: "toward, to" },
              { greek: "υἱός, ὁ", english: "son" },
              { greek: "καλῶς ποιεῖς", english: "you are doing well" },
              { greek: "ὦ παῖ", english: "O child, boy" },
              { greek: "ὁ / ἡ / τό", english: "the; nominative singular forms" },
              { greek: "τόν / τήν / τό", english: "the; accusative singular forms" }
            ]
          },
          {
            greek: "ἡ μήτηρ ἐν τῇ θύρᾳ μένει καὶ τὸν ἄνδρα καλεῖ· “ἐλθὲ δεῦρο, ὦ Γρύλλε. τὸ δεῖπνον πάρεστιν.” καλεῖ δὲ καὶ τὸν Ξενοφῶντα· “ἐλθὲ καὶ σύ, ὦ παῖ.” ὁ δὲ πατὴρ λέγει τῷ υἱῷ· “ἄγε τὸν ἵππον πρὸς τὸν ἀγρόν, εἶτα ἐλθέ.” ὁ μὲν οὖν Γρύλλος πρὸς τὴν θύραν βαδίζει. ὁ δὲ Ξενοφῶν λύει τὸν ἵππον καὶ ἄγει αὐτὸν πρὸς τὸν ἀγρόν. τὸν κύνα καλεῖ. ὁ κύων ὑλακτεῖ καὶ ἕπεται. τέλος δὲ ὁ νεανίας πρὸς τὸν οἶκον βαδίζει καὶ χαίρει.",
            gloss: [
              { greek: "μήτηρ, ἡ", english: "mother" },
              { greek: "θύρα, ἡ", english: "door" },
              { greek: "μένει", english: "stays, remains" },
              { greek: "ἀνήρ, ὁ", english: "man, husband" },
              { greek: "καλεῖ", english: "calls" },
              { greek: "δεῦρο", english: "here" },
              { greek: "τὸ δεῖπνον πάρεστιν", english: "dinner is ready" },
              { greek: "Ξενοφῶντα", english: "Xenophon, accusative" },
              { greek: "ἄγε", english: "lead!" },
              { greek: "ἀγρός, ὁ", english: "field" },
              { greek: "εἶτα", english: "then" },
              { greek: "βαδίζει", english: "walks" },
              { greek: "λύει", english: "unties" },
              { greek: "ἄγει", english: "leads" },
              { greek: "κύων, ὁ", english: "dog" },
              { greek: "ὑλακτεῖ", english: "barks" },
              { greek: "ἕπεται", english: "follows" },
              { greek: "χαίρει", english: "rejoices" },
              { greek: "ὁ / ἡ / τό", english: "the; nominative singular forms" },
              { greek: "τόν / τήν / τό", english: "the; accusative singular forms" }
            ]
          }
        ],
        translation: "Xenophon is young. He does not live in Athens, but in Erchia. The house is on a hill. The house is beautiful, and olive trees are around the house. Gryllus is his father. He is an Athenian horseman, for he is in the cavalry of the Athenians. Therefore he has a beautiful and strong horse. Xenophon tends the horse. He carries water and grain to the horse. Gryllus looks toward his son and says, “You are doing well, boy. The good horseman tends the horse.”\n\nThe mother stays in the doorway and calls her husband: “Come here, Gryllus. Dinner is ready.” She also calls Xenophon: “Come too, boy.” The father says to his son, “Lead the horse to the field, then come.” So Gryllus walks toward the door. Xenophon unties the horse and leads it toward the field. He calls the dog. The dog barks and follows. Finally the young man walks toward the house and rejoices."
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
              "Some verbs in this lesson have forms that look a little different: φιλεῖ — he loves; ζητεῖ — he seeks; ὁρᾷ — he sees; μειδιᾷ — he smiles. These are Contract verbs, and will be explained in a later lesson. For now, learn these as complete verb forms. Later lessons will explain why some verbs change their vowel sounds and endings."
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
            title: "2. Nouns, Articles, Cases, and Agreement",
            body: [
              "Greek nouns have gender, number, and case. In this lesson you meet masculine, feminine, and neuter nouns. You also meet two cases: nominative and accusative.",
              "The article helps you recognize the gender and case of a noun. Forms such as ὁ, ἡ, and τό often point to the nominative case. Forms such as τόν and τήν often point to the accusative case.",
              "In this lesson, subjects are usually in the nominative case, while direct objects are usually in the accusative case."
            ],
            examples: [
              { greek: "ὁ πατὴρ διδάσκει.", english: "The father teaches. ὁ πατήρ is nominative." },
              { greek: "ὁ Ξενοφῶν χαίρει.", english: "Xenophon rejoices. ὁ Ξενοφῶν is nominative." },
              { greek: "ὁ Ξενοφῶν θεραπεύει τὸν ἵππον.", english: "Xenophon tends the horse. τὸν ἵππον is accusative." },
              { greek: "ὁ Γρύλλος ἵππον ἔχει.", english: "Gryllus has a horse. ἵππον is accusative." }
            ],
            exercises: [
              "Practice A asks whether a phrase is nominative or accusative.",
              "Practice B asks you to recognize gender and case from the article."
            ],
            practiceTopic: "nouns-cases-agreement"
          },
          {
            id: "nouns-adjectives-agreement",
            title: "3. Nouns and Adjectives Agreement",
            body: [
              "Adjectives describe nouns. In Greek, adjectives agree with nouns in gender, number, and case.",
              "For now, focus on the article, noun, and adjective working together as a group."
            ],
            examples: [
              { greek: "ὁ πατήρ / ὁ ἵππος / ὁ κύων", english: "masculine nouns" },
              { greek: "ἡ μήτηρ / ἡ οἰκία", english: "feminine nouns" },
              { greek: "τὸ βιβλίον", english: "a neuter noun" },
              { greek: "ὁ καλὸς ἵππος", english: "the beautiful horse" },
              { greek: "ἡ καλὴ οἰκία", english: "the beautiful house" },
              { greek: "τὸ καλὸν βιβλίον", english: "the beautiful book" }
            ],
            exercises: [
              "Practice C asks you to choose the correct adjective agreement."
            ],
            practiceTopic: "noun-adjective-agreement"
          },
          {
            id: "definite-article",
            title: "4. Use of the Definite Article",
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
              { greek: "ὁ Ξενοφῶν", english: "Xenophon as subject" },
              { greek: "ὁ Γρύλλος", english: "Gryllus as subject" },
              { greek: "ὁ πατήρ", english: "the father as subject" },
              { greek: "ἡ μήτηρ", english: "the mother as subject" },
              { greek: "τὸ βιβλίον", english: "the book as subject or direct object" },
              { greek: "τὸν Ξενοφῶντα", english: "Xenophon as direct object" },
              { greek: "τὸν ἵππον", english: "the horse as direct object" },
              { greek: "τὴν οἰκίαν", english: "the house as direct object" }
            ],
            exercises: [
              "Practice A asks you to choose the correct article.",
              "Practice B asks you to recognize the gender and case shown by the article."
            ],
            practiceTopic: "definite-article"
          },
          {
            id: "sentence-parts",
            title: "5. Identifying Sentence Parts",
            body: [
              "As you begin reading Greek, it is helpful to identify the job that each important word performs in a sentence. In later lessons, Greek word order will become more flexible, and recognizing these sentence parts will help you understand who is doing the action, what action is taking place, and who or what receives the action.",
              "In this lesson, subjects are usually in the nominative case, while direct objects are usually in the accusative case.",
              "When you work through the exercises below, ask three questions: Who is performing the action? Is the verb linking, transitive, or intransitive? Is there a direct object receiving the action?"
            ],
            table: {
              headers: ["Label", "Name", "Job in the sentence"],
              greekColumns: [],
              rows: [
                ["S", "Subject", "The person or thing performing the action or being described."],
                ["C", "Complement", "A word that describes or identifies the subject after a linking verb."],
                ["DO", "Direct Object", "The person or thing receiving the action of a verb."],
                ["LV", "Linking Verb", "A verb, such as ἐστιν, that connects the subject with a complement."],
                ["TV", "Transitive Verb", "A verb that takes a direct object."],
                ["IV", "Intransitive Verb", "A verb that does not take a direct object."]
              ]
            },
            examples: [
              {
                title: "Subject (S)",
                greek: "ὁ Ξενοφῶν χαίρει.",
                english: "Xenophon rejoices. The subject is the person performing the action: S = ὁ Ξενοφῶν."
              },
              {
                title: "Linking Verb (LV)",
                greek: "ὁ Ξενοφῶν νέος ἐστιν.",
                english: "Xenophon is young. The verb ἐστιν means “is” and links Xenophon with a description: LV = ἐστιν."
              },
              {
                title: "Complement (C)",
                greek: "ὁ Γρύλλος υἱός ἐστιν.",
                english: "Gryllus is a son. The complement describes or identifies the subject after a linking verb: C = υἱός."
              },
              {
                title: "Direct Object (DO)",
                greek: "ὁ Ξενοφῶν θεραπεύει τὸν ἵππον.",
                english: "Xenophon tends the horse. The direct object receives the action: DO = τὸν ἵππον."
              },
              {
                title: "Transitive Verb (TV)",
                greek: "ὁ Γρύλλος ἵππον ἔχει.",
                english: "Gryllus has a horse. A transitive verb takes a direct object: TV = ἔχει; DO = ἵππον."
              },
              {
                title: "Intransitive Verb (IV)",
                greek: "ὁ κύων ὑλακτεῖ.",
                english: "The dog barks. An intransitive verb does not take a direct object: IV = ὑλακτεῖ."
              },
              {
                title: "Complete Example",
                greek: "ὁ Ξενοφῶν λύει τὸν ἵππον.",
                english: "Xenophon unties the horse. We can identify all the sentence parts: S = ὁ Ξενοφῶν; TV = λύει; DO = τὸν ἵππον."
              }
            ],
            tables: [
              {
                title: "Sentence Diagram",
                headers: ["Label", "Word or phrase", "Function"],
                greekColumns: [1],
                rows: [
                  ["[S]", "ὁ Ξενοφῶν", "Subject"],
                  ["[TV]", "λύει", "Transitive Verb"],
                  ["[DO]", "τὸν ἵππον", "Direct Object"]
                ]
              }
            ],
            practiceTopic: "sentence-parts"
          }
        ],
        summary: {
          title: "Lesson 1 Grammar Summary",
          items: [
            "Subjects are usually nominative.",
            "Direct objects are usually accusative.",
            "Linking verbs connect a subject and complement.",
            "Transitive verbs take direct objects.",
            "Intransitive verbs do not take direct objects.",
            "Adjectives agree with nouns in gender, number, and case."
          ]
        }
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
          topicInstructions: {
            "noun-adjective-agreement": "Choose the adjective form that correctly agrees with the noun."
          },
          questions: [
            ...LESSON_1_GRAMMAR_1_VERB_FORMS,
            ...LESSON_1_GRAMMAR_2_NOUNS_CASES_AGREEMENT,
            ...LESSON_1_GRAMMAR_3_NOUN_ADJECTIVE_AGREEMENT,
            ...LESSON_1_GRAMMAR_3_DEFINITE_ARTICLE,
            ...LESSON_1_GRAMMAR_5_SENTENCE_PARTS
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
          ],
          modes: [
            {
              type: "sentence-labeling",
              title: "Label Sentence Parts",
              instructions: "Label the function of each marked word or phrase.",
              labels: [
                { code: "S", meaning: "Subject" },
                { code: "C", meaning: "Complement" },
                { code: "DO", meaning: "Direct Object" },
                { code: "LV", meaning: "Linking Verb" },
                { code: "TV", meaning: "Transitive Verb" },
                { code: "IV", meaning: "Intransitive Verb" }
              ],
              items: [
                {
                  sentence: "ὁ Ξενοφῶν νέος ἐστιν.",
                  tokens: [
                    { text: "ὁ Ξενοφῶν", answer: "S" },
                    { text: "νέος", answer: "C" },
                    { text: "ἐστιν", answer: "LV" }
                  ]
                },
                {
                  sentence: "ὁ οἶκος καλός ἐστιν.",
                  tokens: [
                    { text: "ὁ οἶκος", answer: "S" },
                    { text: "καλός", answer: "C" },
                    { text: "ἐστιν", answer: "LV" }
                  ]
                },
                {
                  sentence: "ὁ Γρύλλος ἵππον ἔχει.",
                  tokens: [
                    { text: "ὁ Γρύλλος", answer: "S" },
                    { text: "ἵππον", answer: "DO" },
                    { text: "ἔχει", answer: "TV" }
                  ]
                },
                {
                  sentence: "ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.",
                  tokens: [
                    { text: "ὁ Ξενοφῶν", answer: "S" },
                    { text: "τὸν ἵππον", answer: "DO" },
                    { text: "θεραπεύει", answer: "TV" }
                  ]
                },
                {
                  sentence: "ἡ μήτηρ τὸν ἄνδρα καλεῖ.",
                  tokens: [
                    { text: "ἡ μήτηρ", answer: "S" },
                    { text: "τὸν ἄνδρα", answer: "DO" },
                    { text: "καλεῖ", answer: "TV" }
                  ]
                },
                {
                  sentence: "ὁ κύων ὑλακτεῖ.",
                  tokens: [
                    { text: "ὁ κύων", answer: "S" },
                    { text: "ὑλακτεῖ", answer: "IV" }
                  ]
                },
                {
                  sentence: "ὁ Ξενοφῶν λύει τὸν ἵππον καὶ ἄγει αὐτὸν.",
                  tokens: [
                    { text: "ὁ Ξενοφῶν", answer: "S" },
                    { text: "λύει", answer: "TV" },
                    { text: "τὸν ἵππον", answer: "DO" },
                    { text: "καὶ" },
                    { text: "ἄγει", answer: "TV" },
                    { text: "αὐτὸν", answer: "DO" }
                  ]
                }
              ]
            }
          ]
        },
        "lesson-quiz": {
          title: "Lesson 1 Quiz — Xenophon at Home",
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
        title: "The Household of Xenophon",
        fallbackUrl: "lessons.html#lesson-2"
      }
    },
    "lesson-2": LESSON_2,
    "lesson-3": LESSON_3,
    "lesson-4": {
      id: "lesson-4",
      number: 4,
      title: "The Student and the Teacher",
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

  LESSON_STUB_MANIFEST.forEach((config) => {
    const lessonId = `lesson-${config.number}`;
    if (!LESSONS[lessonId]) {
      LESSONS[lessonId] = createLessonStub(config);
    }
  });

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
    return (lesson?.vocabulary || []).flatMap((group) =>
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
