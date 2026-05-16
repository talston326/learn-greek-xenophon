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

  const LESSON_STUB_MANIFEST = [
    { number: 2, title: "The Wise Man Knows Himself", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "First and second declension nouns; definite article; εἰμί", greekPhrase: "ὁ ἀνὴρ σοφός ἐστιν. / ὁ σοφὸς ἀνὴρ ἑαυτὸν γιγνώσκει.", sourceAnchor: "Memorabilia 4.2.24–30", cultureLead: "This lesson will connect self-knowledge with Socrates' questions about what a person truly knows." },
    { number: 3, title: "What is Wisdom?", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a wisdom lesson banner", grammarFocus: "Present tense system; predicate nouns; basic sentence structure", greekPhrase: "τί ἐστι σοφία; / ὁ Σωκράτης λέγει ὅτι ἡ σοφία ἀγαθόν ἐστιν.", sourceAnchor: "Memorabilia 3.9.4–5", cultureLead: "This lesson will frame wisdom as a question Socrates asks in ordinary speech rather than an abstract slogan." },
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
            ...LESSON_1_GRAMMAR_1_VERB_FORMS,
            ...LESSON_1_GRAMMAR_2_NOUNS_CASES_AGREEMENT,
            ...LESSON_1_GRAMMAR_3_DEFINITE_ARTICLE
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
