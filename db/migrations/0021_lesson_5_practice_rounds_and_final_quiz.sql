-- Publish optional 10-by-5 Lesson 5 practice and a required final quiz.
-- Keep reading, vocabulary, grammar, staff drafts, and student progress intact.
BEGIN;
DO $lesson5practice$
DECLARE
  patch jsonb := $json${
  "contentRevision": "lesson-5-practice-rounds-v2",
  "activities": {
    "topic-practice": {
      "title": "Lesson 5: Practice This Topic",
      "questions": [
        {
          "id": "lesson-5-practice-word-study-01-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form λέγουσιν?",
          "choices": [
            {
              "text": "λέγω",
              "correct": true,
              "feedback": "Correct: λέγουσιν belongs to λέγω."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: λέγουσιν belongs to λέγω."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: λέγουσιν belongs to λέγω."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: λέγουσιν belongs to λέγω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-01-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb λέγω?",
          "choices": [
            {
              "text": "λέγειν",
              "correct": true,
              "feedback": "Correct: λέγειν is the infinitive of λέγω."
            },
            {
              "text": "βαδίζειν",
              "correct": false,
              "feedback": "Review: λέγειν is the infinitive of λέγω."
            },
            {
              "text": "φέρειν",
              "correct": false,
              "feedback": "Review: λέγειν is the infinitive of λέγω."
            },
            {
              "text": "ἔχειν",
              "correct": false,
              "feedback": "Review: λέγειν is the infinitive of λέγω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-01-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of λέγω?",
          "choices": [
            {
              "text": "λέγεις",
              "correct": true,
              "feedback": "Correct: λέγεις and λέγω share the same present verb family."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: λέγεις and λέγω share the same present verb family."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: λέγεις and λέγω share the same present verb family."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: λέγεις and λέγω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-01-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to speak.”",
          "choices": [
            {
              "text": "λέγειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive λέγειν."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive λέγειν."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive λέγειν."
            },
            {
              "text": "λέγε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive λέγειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-01-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “speak”?",
          "choices": [
            {
              "text": "λέγω — λέγειν",
              "correct": true,
              "feedback": "Correct: λέγω and λέγειν name the same action."
            },
            {
              "text": "λέγω — βαδίζειν",
              "correct": false,
              "feedback": "Review: λέγω and λέγειν name the same action."
            },
            {
              "text": "λέγω — φέρειν",
              "correct": false,
              "feedback": "Review: λέγω and λέγειν name the same action."
            },
            {
              "text": "λέγω — ἔχειν",
              "correct": false,
              "feedback": "Review: λέγω and λέγειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-01-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I speak.”",
          "choices": [
            {
              "text": "λέγω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is λέγω."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is λέγω."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: The first-person singular form is λέγω."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is λέγω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-01-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you speak” (one person).",
          "choices": [
            {
              "text": "λέγεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: λέγεις."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: λέγεις."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: λέγεις."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: λέγεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-01-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she speaks.”",
          "choices": [
            {
              "text": "λέγει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: λέγει."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: λέγει."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: λέγει."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: λέγει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-01-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In λέγεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: λέγεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: λέγεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: λέγεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: λέγεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-01-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I speak.”",
          "choices": [
            {
              "text": "λέγω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular λέγω."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular λέγω."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular λέγω."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular λέγω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-01-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change λέγει (“he or she speaks”) to “they speak.”",
          "choices": [
            {
              "text": "λέγουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is λέγουσιν."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: The third-person plural form is λέγουσιν."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is λέγουσιν."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: The third-person plural form is λέγουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-01-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they speak”?",
          "choices": [
            {
              "text": "λέγουσιν",
              "correct": true,
              "feedback": "Correct: λέγουσιν means “they speak.”"
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: λέγουσιν means “they speak.”"
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: λέγουσιν means “they speak.”"
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: λέγουσιν means “they speak.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-01-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate λέγουσιν.",
          "choices": [
            {
              "text": "They speak.",
              "correct": true,
              "feedback": "Correct: λέγουσιν has a third-person plural ending."
            },
            {
              "text": "I speak.",
              "correct": false,
              "feedback": "Review: λέγουσιν has a third-person plural ending."
            },
            {
              "text": "You speak.",
              "correct": false,
              "feedback": "Review: λέγουσιν has a third-person plural ending."
            },
            {
              "text": "He or she speaks.",
              "correct": false,
              "feedback": "Review: λέγουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-01-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of λέγω?",
          "choices": [
            {
              "text": "οἱ φίλοι λέγουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb λέγουσιν."
            },
            {
              "text": "ὁ φίλος λέγουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb λέγουσιν."
            },
            {
              "text": "οἱ φίλοι λέγει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb λέγουσιν."
            },
            {
              "text": "ὁ φίλος λέγει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb λέγουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-01-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of λέγουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: λέγουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: λέγουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: λέγουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: λέγουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-01-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to speak.",
          "choices": [
            {
              "text": "λέγε",
              "correct": true,
              "feedback": "Correct: λέγε is the singular command."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: λέγε is the singular command."
            },
            {
              "text": "λέγετε",
              "correct": false,
              "feedback": "Review: λέγε is the singular command."
            },
            {
              "text": "λέγειν",
              "correct": false,
              "feedback": "Review: λέγε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-01-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to speak.",
          "choices": [
            {
              "text": "λέγετε",
              "correct": true,
              "feedback": "Correct: λέγετε addresses several people."
            },
            {
              "text": "λέγε",
              "correct": false,
              "feedback": "Review: λέγετε addresses several people."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: λέγετε addresses several people."
            },
            {
              "text": "λέγειν",
              "correct": false,
              "feedback": "Review: λέγετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-01-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not speak!”",
          "choices": [
            {
              "text": "μὴ λέγε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command λέγε."
            },
            {
              "text": "οὐ λέγε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command λέγε."
            },
            {
              "text": "μὴ λέγει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command λέγε."
            },
            {
              "text": "οὐ λέγει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command λέγε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-01-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not speak!”",
          "choices": [
            {
              "text": "μὴ λέγετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command λέγετε."
            },
            {
              "text": "οὐ λέγετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command λέγετε."
            },
            {
              "text": "μὴ λέγουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command λέγετε."
            },
            {
              "text": "οὐ λέγουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command λέγετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-01-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of λέγω is a statement rather than a command?",
          "choices": [
            {
              "text": "λέγει",
              "correct": true,
              "feedback": "Correct: λέγει means “he or she speaks.”"
            },
            {
              "text": "λέγε",
              "correct": false,
              "feedback": "Review: λέγει means “he or she speaks.”"
            },
            {
              "text": "λέγετε",
              "correct": false,
              "feedback": "Review: λέγει means “he or she speaks.”"
            },
            {
              "text": "μὴ λέγε",
              "correct": false,
              "feedback": "Review: λέγει means “he or she speaks.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-01-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to speak.”",
          "choices": [
            {
              "text": "λέγειν",
              "correct": true,
              "feedback": "Correct: λέγειν names the action without a person."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: λέγειν names the action without a person."
            },
            {
              "text": "λέγε",
              "correct": false,
              "feedback": "Review: λέγειν names the action without a person."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: λέγειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-01-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to speak.”",
          "choices": [
            {
              "text": "λέγειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive λέγειν."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive λέγειν."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive λέγειν."
            },
            {
              "text": "λέγετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive λέγειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-01-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does λέγειν mean?",
          "choices": [
            {
              "text": "To speak.",
              "correct": true,
              "feedback": "Correct: λέγειν is an infinitive: “to speak.”"
            },
            {
              "text": "I speak.",
              "correct": false,
              "feedback": "Review: λέγειν is an infinitive: “to speak.”"
            },
            {
              "text": "They speak.",
              "correct": false,
              "feedback": "Review: λέγειν is an infinitive: “to speak.”"
            },
            {
              "text": "He or she speaks.",
              "correct": false,
              "feedback": "Review: λέγειν is an infinitive: “to speak.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-01-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb λέγει with its infinitive.",
          "choices": [
            {
              "text": "λέγειν",
              "correct": true,
              "feedback": "Correct: λέγειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: λέγειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: λέγειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: λέγειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-01-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to speak”?",
          "choices": [
            {
              "text": "ἐθέλω λέγειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by λέγειν."
            },
            {
              "text": "ἐθέλω λέγει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by λέγειν."
            },
            {
              "text": "ἐθέλω λέγουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by λέγειν."
            },
            {
              "text": "ἐθέλω λέγε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by λέγειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-02-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form βαδίζουσιν?",
          "choices": [
            {
              "text": "βαδίζω",
              "correct": true,
              "feedback": "Correct: βαδίζουσιν belongs to βαδίζω."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: βαδίζουσιν belongs to βαδίζω."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: βαδίζουσιν belongs to βαδίζω."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βαδίζουσιν belongs to βαδίζω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-02-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb βαδίζω?",
          "choices": [
            {
              "text": "βαδίζειν",
              "correct": true,
              "feedback": "Correct: βαδίζειν is the infinitive of βαδίζω."
            },
            {
              "text": "φέρειν",
              "correct": false,
              "feedback": "Review: βαδίζειν is the infinitive of βαδίζω."
            },
            {
              "text": "ἔχειν",
              "correct": false,
              "feedback": "Review: βαδίζειν is the infinitive of βαδίζω."
            },
            {
              "text": "βλέπειν",
              "correct": false,
              "feedback": "Review: βαδίζειν is the infinitive of βαδίζω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-02-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of βαδίζω?",
          "choices": [
            {
              "text": "βαδίζεις",
              "correct": true,
              "feedback": "Correct: βαδίζεις and βαδίζω share the same present verb family."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: βαδίζεις and βαδίζω share the same present verb family."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: βαδίζεις and βαδίζω share the same present verb family."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: βαδίζεις and βαδίζω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-02-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to walk.”",
          "choices": [
            {
              "text": "βαδίζειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive βαδίζειν."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive βαδίζειν."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive βαδίζειν."
            },
            {
              "text": "βάδιζε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive βαδίζειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-02-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “walk”?",
          "choices": [
            {
              "text": "βαδίζω — βαδίζειν",
              "correct": true,
              "feedback": "Correct: βαδίζω and βαδίζειν name the same action."
            },
            {
              "text": "βαδίζω — φέρειν",
              "correct": false,
              "feedback": "Review: βαδίζω and βαδίζειν name the same action."
            },
            {
              "text": "βαδίζω — ἔχειν",
              "correct": false,
              "feedback": "Review: βαδίζω and βαδίζειν name the same action."
            },
            {
              "text": "βαδίζω — βλέπειν",
              "correct": false,
              "feedback": "Review: βαδίζω and βαδίζειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-02-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I walk.”",
          "choices": [
            {
              "text": "βαδίζω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is βαδίζω."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is βαδίζω."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: The first-person singular form is βαδίζω."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is βαδίζω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-02-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you walk” (one person).",
          "choices": [
            {
              "text": "βαδίζεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: βαδίζεις."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: βαδίζεις."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: βαδίζεις."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: βαδίζεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-02-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she walks.”",
          "choices": [
            {
              "text": "βαδίζει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: βαδίζει."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: βαδίζει."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: βαδίζει."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: βαδίζει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-02-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In βαδίζεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: βαδίζεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: βαδίζεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: βαδίζεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: βαδίζεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-02-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I walk.”",
          "choices": [
            {
              "text": "βαδίζω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular βαδίζω."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular βαδίζω."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular βαδίζω."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular βαδίζω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-02-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change βαδίζει (“he or she walks”) to “they walk.”",
          "choices": [
            {
              "text": "βαδίζουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is βαδίζουσιν."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: The third-person plural form is βαδίζουσιν."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is βαδίζουσιν."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: The third-person plural form is βαδίζουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-02-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they walk”?",
          "choices": [
            {
              "text": "βαδίζουσιν",
              "correct": true,
              "feedback": "Correct: βαδίζουσιν means “they walk.”"
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: βαδίζουσιν means “they walk.”"
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: βαδίζουσιν means “they walk.”"
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βαδίζουσιν means “they walk.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-02-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate βαδίζουσιν.",
          "choices": [
            {
              "text": "They walk.",
              "correct": true,
              "feedback": "Correct: βαδίζουσιν has a third-person plural ending."
            },
            {
              "text": "I walk.",
              "correct": false,
              "feedback": "Review: βαδίζουσιν has a third-person plural ending."
            },
            {
              "text": "You walk.",
              "correct": false,
              "feedback": "Review: βαδίζουσιν has a third-person plural ending."
            },
            {
              "text": "He or she walks.",
              "correct": false,
              "feedback": "Review: βαδίζουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-02-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of βαδίζω?",
          "choices": [
            {
              "text": "οἱ φίλοι βαδίζουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb βαδίζουσιν."
            },
            {
              "text": "ὁ φίλος βαδίζουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb βαδίζουσιν."
            },
            {
              "text": "οἱ φίλοι βαδίζει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb βαδίζουσιν."
            },
            {
              "text": "ὁ φίλος βαδίζει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb βαδίζουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-02-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of βαδίζουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: βαδίζουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: βαδίζουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: βαδίζουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: βαδίζουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-02-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to walk.",
          "choices": [
            {
              "text": "βάδιζε",
              "correct": true,
              "feedback": "Correct: βάδιζε is the singular command."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: βάδιζε is the singular command."
            },
            {
              "text": "βαδίζετε",
              "correct": false,
              "feedback": "Review: βάδιζε is the singular command."
            },
            {
              "text": "βαδίζειν",
              "correct": false,
              "feedback": "Review: βάδιζε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-02-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to walk.",
          "choices": [
            {
              "text": "βαδίζετε",
              "correct": true,
              "feedback": "Correct: βαδίζετε addresses several people."
            },
            {
              "text": "βάδιζε",
              "correct": false,
              "feedback": "Review: βαδίζετε addresses several people."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: βαδίζετε addresses several people."
            },
            {
              "text": "βαδίζειν",
              "correct": false,
              "feedback": "Review: βαδίζετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-02-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not walk!”",
          "choices": [
            {
              "text": "μὴ βάδιζε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command βάδιζε."
            },
            {
              "text": "οὐ βάδιζε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command βάδιζε."
            },
            {
              "text": "μὴ βαδίζει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command βάδιζε."
            },
            {
              "text": "οὐ βαδίζει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command βάδιζε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-02-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not walk!”",
          "choices": [
            {
              "text": "μὴ βαδίζετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command βαδίζετε."
            },
            {
              "text": "οὐ βαδίζετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command βαδίζετε."
            },
            {
              "text": "μὴ βαδίζουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command βαδίζετε."
            },
            {
              "text": "οὐ βαδίζουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command βαδίζετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-02-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of βαδίζω is a statement rather than a command?",
          "choices": [
            {
              "text": "βαδίζει",
              "correct": true,
              "feedback": "Correct: βαδίζει means “he or she walks.”"
            },
            {
              "text": "βάδιζε",
              "correct": false,
              "feedback": "Review: βαδίζει means “he or she walks.”"
            },
            {
              "text": "βαδίζετε",
              "correct": false,
              "feedback": "Review: βαδίζει means “he or she walks.”"
            },
            {
              "text": "μὴ βάδιζε",
              "correct": false,
              "feedback": "Review: βαδίζει means “he or she walks.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-02-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to walk.”",
          "choices": [
            {
              "text": "βαδίζειν",
              "correct": true,
              "feedback": "Correct: βαδίζειν names the action without a person."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: βαδίζειν names the action without a person."
            },
            {
              "text": "βάδιζε",
              "correct": false,
              "feedback": "Review: βαδίζειν names the action without a person."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: βαδίζειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-02-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to walk.”",
          "choices": [
            {
              "text": "βαδίζειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive βαδίζειν."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive βαδίζειν."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive βαδίζειν."
            },
            {
              "text": "βαδίζετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive βαδίζειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-02-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does βαδίζειν mean?",
          "choices": [
            {
              "text": "To walk.",
              "correct": true,
              "feedback": "Correct: βαδίζειν is an infinitive: “to walk.”"
            },
            {
              "text": "I walk.",
              "correct": false,
              "feedback": "Review: βαδίζειν is an infinitive: “to walk.”"
            },
            {
              "text": "They walk.",
              "correct": false,
              "feedback": "Review: βαδίζειν is an infinitive: “to walk.”"
            },
            {
              "text": "He or she walks.",
              "correct": false,
              "feedback": "Review: βαδίζειν is an infinitive: “to walk.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-02-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb βαδίζει with its infinitive.",
          "choices": [
            {
              "text": "βαδίζειν",
              "correct": true,
              "feedback": "Correct: βαδίζειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: βαδίζειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: βαδίζειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: βαδίζειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-02-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to walk”?",
          "choices": [
            {
              "text": "ἐθέλω βαδίζειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by βαδίζειν."
            },
            {
              "text": "ἐθέλω βαδίζει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by βαδίζειν."
            },
            {
              "text": "ἐθέλω βαδίζουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by βαδίζειν."
            },
            {
              "text": "ἐθέλω βάδιζε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by βαδίζειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-03-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form φέρουσιν?",
          "choices": [
            {
              "text": "φέρω",
              "correct": true,
              "feedback": "Correct: φέρουσιν belongs to φέρω."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: φέρουσιν belongs to φέρω."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: φέρουσιν belongs to φέρω."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: φέρουσιν belongs to φέρω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-03-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb φέρω?",
          "choices": [
            {
              "text": "φέρειν",
              "correct": true,
              "feedback": "Correct: φέρειν is the infinitive of φέρω."
            },
            {
              "text": "ἔχειν",
              "correct": false,
              "feedback": "Review: φέρειν is the infinitive of φέρω."
            },
            {
              "text": "βλέπειν",
              "correct": false,
              "feedback": "Review: φέρειν is the infinitive of φέρω."
            },
            {
              "text": "ἀκούειν",
              "correct": false,
              "feedback": "Review: φέρειν is the infinitive of φέρω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-03-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of φέρω?",
          "choices": [
            {
              "text": "φέρεις",
              "correct": true,
              "feedback": "Correct: φέρεις and φέρω share the same present verb family."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: φέρεις and φέρω share the same present verb family."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: φέρεις and φέρω share the same present verb family."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: φέρεις and φέρω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-03-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to carry.”",
          "choices": [
            {
              "text": "φέρειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive φέρειν."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive φέρειν."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive φέρειν."
            },
            {
              "text": "φέρε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive φέρειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-03-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “carry”?",
          "choices": [
            {
              "text": "φέρω — φέρειν",
              "correct": true,
              "feedback": "Correct: φέρω and φέρειν name the same action."
            },
            {
              "text": "φέρω — ἔχειν",
              "correct": false,
              "feedback": "Review: φέρω and φέρειν name the same action."
            },
            {
              "text": "φέρω — βλέπειν",
              "correct": false,
              "feedback": "Review: φέρω and φέρειν name the same action."
            },
            {
              "text": "φέρω — ἀκούειν",
              "correct": false,
              "feedback": "Review: φέρω and φέρειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-03-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I carry.”",
          "choices": [
            {
              "text": "φέρω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is φέρω."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is φέρω."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: The first-person singular form is φέρω."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is φέρω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-03-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you carry” (one person).",
          "choices": [
            {
              "text": "φέρεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: φέρεις."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: φέρεις."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: φέρεις."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: φέρεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-03-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she carries.”",
          "choices": [
            {
              "text": "φέρει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: φέρει."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: φέρει."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: φέρει."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: φέρει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-03-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In φέρεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: φέρεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: φέρεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: φέρεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: φέρεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-03-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I carry.”",
          "choices": [
            {
              "text": "φέρω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular φέρω."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular φέρω."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular φέρω."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular φέρω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-03-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change φέρει (“he or she carries”) to “they carry.”",
          "choices": [
            {
              "text": "φέρουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is φέρουσιν."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: The third-person plural form is φέρουσιν."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is φέρουσιν."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: The third-person plural form is φέρουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-03-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they carry”?",
          "choices": [
            {
              "text": "φέρουσιν",
              "correct": true,
              "feedback": "Correct: φέρουσιν means “they carry.”"
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: φέρουσιν means “they carry.”"
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: φέρουσιν means “they carry.”"
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: φέρουσιν means “they carry.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-03-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate φέρουσιν.",
          "choices": [
            {
              "text": "They carry.",
              "correct": true,
              "feedback": "Correct: φέρουσιν has a third-person plural ending."
            },
            {
              "text": "I carry.",
              "correct": false,
              "feedback": "Review: φέρουσιν has a third-person plural ending."
            },
            {
              "text": "You carry.",
              "correct": false,
              "feedback": "Review: φέρουσιν has a third-person plural ending."
            },
            {
              "text": "He or she carries.",
              "correct": false,
              "feedback": "Review: φέρουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-03-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of φέρω?",
          "choices": [
            {
              "text": "οἱ φίλοι φέρουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb φέρουσιν."
            },
            {
              "text": "ὁ φίλος φέρουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb φέρουσιν."
            },
            {
              "text": "οἱ φίλοι φέρει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb φέρουσιν."
            },
            {
              "text": "ὁ φίλος φέρει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb φέρουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-03-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of φέρουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: φέρουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: φέρουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: φέρουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: φέρουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-03-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to carry.",
          "choices": [
            {
              "text": "φέρε",
              "correct": true,
              "feedback": "Correct: φέρε is the singular command."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: φέρε is the singular command."
            },
            {
              "text": "φέρετε",
              "correct": false,
              "feedback": "Review: φέρε is the singular command."
            },
            {
              "text": "φέρειν",
              "correct": false,
              "feedback": "Review: φέρε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-03-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to carry.",
          "choices": [
            {
              "text": "φέρετε",
              "correct": true,
              "feedback": "Correct: φέρετε addresses several people."
            },
            {
              "text": "φέρε",
              "correct": false,
              "feedback": "Review: φέρετε addresses several people."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: φέρετε addresses several people."
            },
            {
              "text": "φέρειν",
              "correct": false,
              "feedback": "Review: φέρετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-03-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not carry!”",
          "choices": [
            {
              "text": "μὴ φέρε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command φέρε."
            },
            {
              "text": "οὐ φέρε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command φέρε."
            },
            {
              "text": "μὴ φέρει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command φέρε."
            },
            {
              "text": "οὐ φέρει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command φέρε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-03-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not carry!”",
          "choices": [
            {
              "text": "μὴ φέρετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command φέρετε."
            },
            {
              "text": "οὐ φέρετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command φέρετε."
            },
            {
              "text": "μὴ φέρουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command φέρετε."
            },
            {
              "text": "οὐ φέρουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command φέρετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-03-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of φέρω is a statement rather than a command?",
          "choices": [
            {
              "text": "φέρει",
              "correct": true,
              "feedback": "Correct: φέρει means “he or she carries.”"
            },
            {
              "text": "φέρε",
              "correct": false,
              "feedback": "Review: φέρει means “he or she carries.”"
            },
            {
              "text": "φέρετε",
              "correct": false,
              "feedback": "Review: φέρει means “he or she carries.”"
            },
            {
              "text": "μὴ φέρε",
              "correct": false,
              "feedback": "Review: φέρει means “he or she carries.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-03-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to carry.”",
          "choices": [
            {
              "text": "φέρειν",
              "correct": true,
              "feedback": "Correct: φέρειν names the action without a person."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: φέρειν names the action without a person."
            },
            {
              "text": "φέρε",
              "correct": false,
              "feedback": "Review: φέρειν names the action without a person."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: φέρειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-03-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to carry.”",
          "choices": [
            {
              "text": "φέρειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive φέρειν."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive φέρειν."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive φέρειν."
            },
            {
              "text": "φέρετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive φέρειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-03-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does φέρειν mean?",
          "choices": [
            {
              "text": "To carry.",
              "correct": true,
              "feedback": "Correct: φέρειν is an infinitive: “to carry.”"
            },
            {
              "text": "I carry.",
              "correct": false,
              "feedback": "Review: φέρειν is an infinitive: “to carry.”"
            },
            {
              "text": "They carry.",
              "correct": false,
              "feedback": "Review: φέρειν is an infinitive: “to carry.”"
            },
            {
              "text": "He or she carries.",
              "correct": false,
              "feedback": "Review: φέρειν is an infinitive: “to carry.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-03-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb φέρει with its infinitive.",
          "choices": [
            {
              "text": "φέρειν",
              "correct": true,
              "feedback": "Correct: φέρειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: φέρειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: φέρειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: φέρειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-03-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to carry”?",
          "choices": [
            {
              "text": "ἐθέλω φέρειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by φέρειν."
            },
            {
              "text": "ἐθέλω φέρει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by φέρειν."
            },
            {
              "text": "ἐθέλω φέρουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by φέρειν."
            },
            {
              "text": "ἐθέλω φέρε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by φέρειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-04-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form ἔχουσιν?",
          "choices": [
            {
              "text": "ἔχω",
              "correct": true,
              "feedback": "Correct: ἔχουσιν belongs to ἔχω."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: ἔχουσιν belongs to ἔχω."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: ἔχουσιν belongs to ἔχω."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: ἔχουσιν belongs to ἔχω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-04-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb ἔχω?",
          "choices": [
            {
              "text": "ἔχειν",
              "correct": true,
              "feedback": "Correct: ἔχειν is the infinitive of ἔχω."
            },
            {
              "text": "βλέπειν",
              "correct": false,
              "feedback": "Review: ἔχειν is the infinitive of ἔχω."
            },
            {
              "text": "ἀκούειν",
              "correct": false,
              "feedback": "Review: ἔχειν is the infinitive of ἔχω."
            },
            {
              "text": "κωλύειν",
              "correct": false,
              "feedback": "Review: ἔχειν is the infinitive of ἔχω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-04-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of ἔχω?",
          "choices": [
            {
              "text": "ἔχεις",
              "correct": true,
              "feedback": "Correct: ἔχεις and ἔχω share the same present verb family."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: ἔχεις and ἔχω share the same present verb family."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: ἔχεις and ἔχω share the same present verb family."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: ἔχεις and ἔχω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-04-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to have.”",
          "choices": [
            {
              "text": "ἔχειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive ἔχειν."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive ἔχειν."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive ἔχειν."
            },
            {
              "text": "ἔχε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive ἔχειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-04-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “have”?",
          "choices": [
            {
              "text": "ἔχω — ἔχειν",
              "correct": true,
              "feedback": "Correct: ἔχω and ἔχειν name the same action."
            },
            {
              "text": "ἔχω — βλέπειν",
              "correct": false,
              "feedback": "Review: ἔχω and ἔχειν name the same action."
            },
            {
              "text": "ἔχω — ἀκούειν",
              "correct": false,
              "feedback": "Review: ἔχω and ἔχειν name the same action."
            },
            {
              "text": "ἔχω — κωλύειν",
              "correct": false,
              "feedback": "Review: ἔχω and ἔχειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-04-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I have.”",
          "choices": [
            {
              "text": "ἔχω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is ἔχω."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is ἔχω."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: The first-person singular form is ἔχω."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is ἔχω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-04-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you have” (one person).",
          "choices": [
            {
              "text": "ἔχεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: ἔχεις."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: ἔχεις."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: ἔχεις."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: ἔχεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-04-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she has.”",
          "choices": [
            {
              "text": "ἔχει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: ἔχει."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: ἔχει."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: ἔχει."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: ἔχει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-04-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In ἔχεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: ἔχεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: ἔχεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: ἔχεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: ἔχεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-04-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I have.”",
          "choices": [
            {
              "text": "ἔχω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular ἔχω."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular ἔχω."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular ἔχω."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular ἔχω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-04-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change ἔχει (“he or she has”) to “they have.”",
          "choices": [
            {
              "text": "ἔχουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is ἔχουσιν."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: The third-person plural form is ἔχουσιν."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is ἔχουσιν."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: The third-person plural form is ἔχουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-04-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they have”?",
          "choices": [
            {
              "text": "ἔχουσιν",
              "correct": true,
              "feedback": "Correct: ἔχουσιν means “they have.”"
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: ἔχουσιν means “they have.”"
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: ἔχουσιν means “they have.”"
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: ἔχουσιν means “they have.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-04-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate ἔχουσιν.",
          "choices": [
            {
              "text": "They have.",
              "correct": true,
              "feedback": "Correct: ἔχουσιν has a third-person plural ending."
            },
            {
              "text": "I have.",
              "correct": false,
              "feedback": "Review: ἔχουσιν has a third-person plural ending."
            },
            {
              "text": "You have.",
              "correct": false,
              "feedback": "Review: ἔχουσιν has a third-person plural ending."
            },
            {
              "text": "He or she has.",
              "correct": false,
              "feedback": "Review: ἔχουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-04-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of ἔχω?",
          "choices": [
            {
              "text": "οἱ φίλοι ἔχουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb ἔχουσιν."
            },
            {
              "text": "ὁ φίλος ἔχουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb ἔχουσιν."
            },
            {
              "text": "οἱ φίλοι ἔχει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb ἔχουσιν."
            },
            {
              "text": "ὁ φίλος ἔχει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb ἔχουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-04-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of ἔχουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: ἔχουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: ἔχουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: ἔχουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: ἔχουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-04-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to have.",
          "choices": [
            {
              "text": "ἔχε",
              "correct": true,
              "feedback": "Correct: ἔχε is the singular command."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: ἔχε is the singular command."
            },
            {
              "text": "ἔχετε",
              "correct": false,
              "feedback": "Review: ἔχε is the singular command."
            },
            {
              "text": "ἔχειν",
              "correct": false,
              "feedback": "Review: ἔχε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-04-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to have.",
          "choices": [
            {
              "text": "ἔχετε",
              "correct": true,
              "feedback": "Correct: ἔχετε addresses several people."
            },
            {
              "text": "ἔχε",
              "correct": false,
              "feedback": "Review: ἔχετε addresses several people."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: ἔχετε addresses several people."
            },
            {
              "text": "ἔχειν",
              "correct": false,
              "feedback": "Review: ἔχετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-04-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not have!”",
          "choices": [
            {
              "text": "μὴ ἔχε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command ἔχε."
            },
            {
              "text": "οὐ ἔχε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command ἔχε."
            },
            {
              "text": "μὴ ἔχει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command ἔχε."
            },
            {
              "text": "οὐ ἔχει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command ἔχε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-04-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not have!”",
          "choices": [
            {
              "text": "μὴ ἔχετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command ἔχετε."
            },
            {
              "text": "οὐ ἔχετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command ἔχετε."
            },
            {
              "text": "μὴ ἔχουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command ἔχετε."
            },
            {
              "text": "οὐ ἔχουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command ἔχετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-04-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of ἔχω is a statement rather than a command?",
          "choices": [
            {
              "text": "ἔχει",
              "correct": true,
              "feedback": "Correct: ἔχει means “he or she has.”"
            },
            {
              "text": "ἔχε",
              "correct": false,
              "feedback": "Review: ἔχει means “he or she has.”"
            },
            {
              "text": "ἔχετε",
              "correct": false,
              "feedback": "Review: ἔχει means “he or she has.”"
            },
            {
              "text": "μὴ ἔχε",
              "correct": false,
              "feedback": "Review: ἔχει means “he or she has.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-04-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to have.”",
          "choices": [
            {
              "text": "ἔχειν",
              "correct": true,
              "feedback": "Correct: ἔχειν names the action without a person."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: ἔχειν names the action without a person."
            },
            {
              "text": "ἔχε",
              "correct": false,
              "feedback": "Review: ἔχειν names the action without a person."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: ἔχειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-04-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to have.”",
          "choices": [
            {
              "text": "ἔχειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive ἔχειν."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive ἔχειν."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive ἔχειν."
            },
            {
              "text": "ἔχετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive ἔχειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-04-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does ἔχειν mean?",
          "choices": [
            {
              "text": "To have.",
              "correct": true,
              "feedback": "Correct: ἔχειν is an infinitive: “to have.”"
            },
            {
              "text": "I have.",
              "correct": false,
              "feedback": "Review: ἔχειν is an infinitive: “to have.”"
            },
            {
              "text": "They have.",
              "correct": false,
              "feedback": "Review: ἔχειν is an infinitive: “to have.”"
            },
            {
              "text": "He or she has.",
              "correct": false,
              "feedback": "Review: ἔχειν is an infinitive: “to have.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-04-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb ἔχει with its infinitive.",
          "choices": [
            {
              "text": "ἔχειν",
              "correct": true,
              "feedback": "Correct: ἔχειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: ἔχειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "ἔχεις",
              "correct": false,
              "feedback": "Review: ἔχειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "ἔχουσιν",
              "correct": false,
              "feedback": "Review: ἔχειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-04-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to have”?",
          "choices": [
            {
              "text": "ἐθέλω ἔχειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by ἔχειν."
            },
            {
              "text": "ἐθέλω ἔχει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by ἔχειν."
            },
            {
              "text": "ἐθέλω ἔχουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by ἔχειν."
            },
            {
              "text": "ἐθέλω ἔχε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by ἔχειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-05-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form βλέπουσιν?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: βλέπουσιν belongs to βλέπω."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: βλέπουσιν belongs to βλέπω."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: βλέπουσιν belongs to βλέπω."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: βλέπουσιν belongs to βλέπω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-05-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb βλέπω?",
          "choices": [
            {
              "text": "βλέπειν",
              "correct": true,
              "feedback": "Correct: βλέπειν is the infinitive of βλέπω."
            },
            {
              "text": "ἀκούειν",
              "correct": false,
              "feedback": "Review: βλέπειν is the infinitive of βλέπω."
            },
            {
              "text": "κωλύειν",
              "correct": false,
              "feedback": "Review: βλέπειν is the infinitive of βλέπω."
            },
            {
              "text": "μένειν",
              "correct": false,
              "feedback": "Review: βλέπειν is the infinitive of βλέπω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-05-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of βλέπω?",
          "choices": [
            {
              "text": "βλέπεις",
              "correct": true,
              "feedback": "Correct: βλέπεις and βλέπω share the same present verb family."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: βλέπεις and βλέπω share the same present verb family."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: βλέπεις and βλέπω share the same present verb family."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: βλέπεις and βλέπω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-05-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to see.”",
          "choices": [
            {
              "text": "βλέπειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive βλέπειν."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive βλέπειν."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive βλέπειν."
            },
            {
              "text": "βλέπε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive βλέπειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-05-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “see”?",
          "choices": [
            {
              "text": "βλέπω — βλέπειν",
              "correct": true,
              "feedback": "Correct: βλέπω and βλέπειν name the same action."
            },
            {
              "text": "βλέπω — ἀκούειν",
              "correct": false,
              "feedback": "Review: βλέπω and βλέπειν name the same action."
            },
            {
              "text": "βλέπω — κωλύειν",
              "correct": false,
              "feedback": "Review: βλέπω and βλέπειν name the same action."
            },
            {
              "text": "βλέπω — μένειν",
              "correct": false,
              "feedback": "Review: βλέπω and βλέπειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-05-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I see.”",
          "choices": [
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is βλέπω."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is βλέπω."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: The first-person singular form is βλέπω."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is βλέπω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-05-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you see” (one person).",
          "choices": [
            {
              "text": "βλέπεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: βλέπεις."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: βλέπεις."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: βλέπεις."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: βλέπεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-05-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she sees.”",
          "choices": [
            {
              "text": "βλέπει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: βλέπει."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: βλέπει."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: βλέπει."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: βλέπει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-05-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In βλέπεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: βλέπεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: βλέπεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: βλέπεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: βλέπεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-05-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I see.”",
          "choices": [
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular βλέπω."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular βλέπω."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular βλέπω."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular βλέπω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-05-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change βλέπει (“he or she sees”) to “they see.”",
          "choices": [
            {
              "text": "βλέπουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is βλέπουσιν."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: The third-person plural form is βλέπουσιν."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is βλέπουσιν."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: The third-person plural form is βλέπουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-05-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they see”?",
          "choices": [
            {
              "text": "βλέπουσιν",
              "correct": true,
              "feedback": "Correct: βλέπουσιν means “they see.”"
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: βλέπουσιν means “they see.”"
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: βλέπουσιν means “they see.”"
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: βλέπουσιν means “they see.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-05-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate βλέπουσιν.",
          "choices": [
            {
              "text": "They see.",
              "correct": true,
              "feedback": "Correct: βλέπουσιν has a third-person plural ending."
            },
            {
              "text": "I see.",
              "correct": false,
              "feedback": "Review: βλέπουσιν has a third-person plural ending."
            },
            {
              "text": "You see.",
              "correct": false,
              "feedback": "Review: βλέπουσιν has a third-person plural ending."
            },
            {
              "text": "He or she sees.",
              "correct": false,
              "feedback": "Review: βλέπουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-05-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of βλέπω?",
          "choices": [
            {
              "text": "οἱ φίλοι βλέπουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb βλέπουσιν."
            },
            {
              "text": "ὁ φίλος βλέπουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb βλέπουσιν."
            },
            {
              "text": "οἱ φίλοι βλέπει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb βλέπουσιν."
            },
            {
              "text": "ὁ φίλος βλέπει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb βλέπουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-05-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of βλέπουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: βλέπουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: βλέπουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: βλέπουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: βλέπουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-05-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to see.",
          "choices": [
            {
              "text": "βλέπε",
              "correct": true,
              "feedback": "Correct: βλέπε is the singular command."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπε is the singular command."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπε is the singular command."
            },
            {
              "text": "βλέπειν",
              "correct": false,
              "feedback": "Review: βλέπε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-05-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to see.",
          "choices": [
            {
              "text": "βλέπετε",
              "correct": true,
              "feedback": "Correct: βλέπετε addresses several people."
            },
            {
              "text": "βλέπε",
              "correct": false,
              "feedback": "Review: βλέπετε addresses several people."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπετε addresses several people."
            },
            {
              "text": "βλέπειν",
              "correct": false,
              "feedback": "Review: βλέπετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-05-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not see!”",
          "choices": [
            {
              "text": "μὴ βλέπε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command βλέπε."
            },
            {
              "text": "οὐ βλέπε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command βλέπε."
            },
            {
              "text": "μὴ βλέπει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command βλέπε."
            },
            {
              "text": "οὐ βλέπει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command βλέπε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-05-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not see!”",
          "choices": [
            {
              "text": "μὴ βλέπετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command βλέπετε."
            },
            {
              "text": "οὐ βλέπετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command βλέπετε."
            },
            {
              "text": "μὴ βλέπουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command βλέπετε."
            },
            {
              "text": "οὐ βλέπουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command βλέπετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-05-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of βλέπω is a statement rather than a command?",
          "choices": [
            {
              "text": "βλέπει",
              "correct": true,
              "feedback": "Correct: βλέπει means “he or she sees.”"
            },
            {
              "text": "βλέπε",
              "correct": false,
              "feedback": "Review: βλέπει means “he or she sees.”"
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπει means “he or she sees.”"
            },
            {
              "text": "μὴ βλέπε",
              "correct": false,
              "feedback": "Review: βλέπει means “he or she sees.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-05-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to see.”",
          "choices": [
            {
              "text": "βλέπειν",
              "correct": true,
              "feedback": "Correct: βλέπειν names the action without a person."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπειν names the action without a person."
            },
            {
              "text": "βλέπε",
              "correct": false,
              "feedback": "Review: βλέπειν names the action without a person."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-05-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to see.”",
          "choices": [
            {
              "text": "βλέπειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive βλέπειν."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive βλέπειν."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive βλέπειν."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive βλέπειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-05-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does βλέπειν mean?",
          "choices": [
            {
              "text": "To see.",
              "correct": true,
              "feedback": "Correct: βλέπειν is an infinitive: “to see.”"
            },
            {
              "text": "I see.",
              "correct": false,
              "feedback": "Review: βλέπειν is an infinitive: “to see.”"
            },
            {
              "text": "They see.",
              "correct": false,
              "feedback": "Review: βλέπειν is an infinitive: “to see.”"
            },
            {
              "text": "He or she sees.",
              "correct": false,
              "feedback": "Review: βλέπειν is an infinitive: “to see.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-05-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb βλέπει with its infinitive.",
          "choices": [
            {
              "text": "βλέπειν",
              "correct": true,
              "feedback": "Correct: βλέπειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: βλέπειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-05-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to see”?",
          "choices": [
            {
              "text": "ἐθέλω βλέπειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by βλέπειν."
            },
            {
              "text": "ἐθέλω βλέπει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by βλέπειν."
            },
            {
              "text": "ἐθέλω βλέπουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by βλέπειν."
            },
            {
              "text": "ἐθέλω βλέπε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by βλέπειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-06-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form ἀκούουσιν?",
          "choices": [
            {
              "text": "ἀκούω",
              "correct": true,
              "feedback": "Correct: ἀκούουσιν belongs to ἀκούω."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: ἀκούουσιν belongs to ἀκούω."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: ἀκούουσιν belongs to ἀκούω."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: ἀκούουσιν belongs to ἀκούω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-06-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb ἀκούω?",
          "choices": [
            {
              "text": "ἀκούειν",
              "correct": true,
              "feedback": "Correct: ἀκούειν is the infinitive of ἀκούω."
            },
            {
              "text": "κωλύειν",
              "correct": false,
              "feedback": "Review: ἀκούειν is the infinitive of ἀκούω."
            },
            {
              "text": "μένειν",
              "correct": false,
              "feedback": "Review: ἀκούειν is the infinitive of ἀκούω."
            },
            {
              "text": "σπεύδειν",
              "correct": false,
              "feedback": "Review: ἀκούειν is the infinitive of ἀκούω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-06-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of ἀκούω?",
          "choices": [
            {
              "text": "ἀκούεις",
              "correct": true,
              "feedback": "Correct: ἀκούεις and ἀκούω share the same present verb family."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: ἀκούεις and ἀκούω share the same present verb family."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: ἀκούεις and ἀκούω share the same present verb family."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: ἀκούεις and ἀκούω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-06-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to listen.”",
          "choices": [
            {
              "text": "ἀκούειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive ἀκούειν."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive ἀκούειν."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive ἀκούειν."
            },
            {
              "text": "ἄκουε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive ἀκούειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-06-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “listen”?",
          "choices": [
            {
              "text": "ἀκούω — ἀκούειν",
              "correct": true,
              "feedback": "Correct: ἀκούω and ἀκούειν name the same action."
            },
            {
              "text": "ἀκούω — κωλύειν",
              "correct": false,
              "feedback": "Review: ἀκούω and ἀκούειν name the same action."
            },
            {
              "text": "ἀκούω — μένειν",
              "correct": false,
              "feedback": "Review: ἀκούω and ἀκούειν name the same action."
            },
            {
              "text": "ἀκούω — σπεύδειν",
              "correct": false,
              "feedback": "Review: ἀκούω and ἀκούειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-06-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I listen.”",
          "choices": [
            {
              "text": "ἀκούω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is ἀκούω."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is ἀκούω."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: The first-person singular form is ἀκούω."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is ἀκούω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-06-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you listen” (one person).",
          "choices": [
            {
              "text": "ἀκούεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: ἀκούεις."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: ἀκούεις."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: ἀκούεις."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: ἀκούεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-06-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she listens.”",
          "choices": [
            {
              "text": "ἀκούει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: ἀκούει."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: ἀκούει."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: ἀκούει."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: ἀκούει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-06-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In ἀκούεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: ἀκούεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: ἀκούεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: ἀκούεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: ἀκούεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-06-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I listen.”",
          "choices": [
            {
              "text": "ἀκούω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular ἀκούω."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular ἀκούω."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular ἀκούω."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular ἀκούω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-06-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change ἀκούει (“he or she listens”) to “they listen.”",
          "choices": [
            {
              "text": "ἀκούουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is ἀκούουσιν."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: The third-person plural form is ἀκούουσιν."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is ἀκούουσιν."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: The third-person plural form is ἀκούουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-06-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they listen”?",
          "choices": [
            {
              "text": "ἀκούουσιν",
              "correct": true,
              "feedback": "Correct: ἀκούουσιν means “they listen.”"
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: ἀκούουσιν means “they listen.”"
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: ἀκούουσιν means “they listen.”"
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: ἀκούουσιν means “they listen.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-06-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate ἀκούουσιν.",
          "choices": [
            {
              "text": "They listen.",
              "correct": true,
              "feedback": "Correct: ἀκούουσιν has a third-person plural ending."
            },
            {
              "text": "I listen.",
              "correct": false,
              "feedback": "Review: ἀκούουσιν has a third-person plural ending."
            },
            {
              "text": "You listen.",
              "correct": false,
              "feedback": "Review: ἀκούουσιν has a third-person plural ending."
            },
            {
              "text": "He or she listens.",
              "correct": false,
              "feedback": "Review: ἀκούουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-06-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of ἀκούω?",
          "choices": [
            {
              "text": "οἱ φίλοι ἀκούουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb ἀκούουσιν."
            },
            {
              "text": "ὁ φίλος ἀκούουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb ἀκούουσιν."
            },
            {
              "text": "οἱ φίλοι ἀκούει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb ἀκούουσιν."
            },
            {
              "text": "ὁ φίλος ἀκούει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb ἀκούουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-06-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of ἀκούουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: ἀκούουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: ἀκούουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: ἀκούουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: ἀκούουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-06-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to listen.",
          "choices": [
            {
              "text": "ἄκουε",
              "correct": true,
              "feedback": "Correct: ἄκουε is the singular command."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: ἄκουε is the singular command."
            },
            {
              "text": "ἀκούετε",
              "correct": false,
              "feedback": "Review: ἄκουε is the singular command."
            },
            {
              "text": "ἀκούειν",
              "correct": false,
              "feedback": "Review: ἄκουε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-06-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to listen.",
          "choices": [
            {
              "text": "ἀκούετε",
              "correct": true,
              "feedback": "Correct: ἀκούετε addresses several people."
            },
            {
              "text": "ἄκουε",
              "correct": false,
              "feedback": "Review: ἀκούετε addresses several people."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: ἀκούετε addresses several people."
            },
            {
              "text": "ἀκούειν",
              "correct": false,
              "feedback": "Review: ἀκούετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-06-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not listen!”",
          "choices": [
            {
              "text": "μὴ ἄκουε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command ἄκουε."
            },
            {
              "text": "οὐ ἄκουε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command ἄκουε."
            },
            {
              "text": "μὴ ἀκούει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command ἄκουε."
            },
            {
              "text": "οὐ ἀκούει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command ἄκουε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-06-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not listen!”",
          "choices": [
            {
              "text": "μὴ ἀκούετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command ἀκούετε."
            },
            {
              "text": "οὐ ἀκούετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command ἀκούετε."
            },
            {
              "text": "μὴ ἀκούουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command ἀκούετε."
            },
            {
              "text": "οὐ ἀκούουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command ἀκούετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-06-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of ἀκούω is a statement rather than a command?",
          "choices": [
            {
              "text": "ἀκούει",
              "correct": true,
              "feedback": "Correct: ἀκούει means “he or she listens.”"
            },
            {
              "text": "ἄκουε",
              "correct": false,
              "feedback": "Review: ἀκούει means “he or she listens.”"
            },
            {
              "text": "ἀκούετε",
              "correct": false,
              "feedback": "Review: ἀκούει means “he or she listens.”"
            },
            {
              "text": "μὴ ἄκουε",
              "correct": false,
              "feedback": "Review: ἀκούει means “he or she listens.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-06-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to listen.”",
          "choices": [
            {
              "text": "ἀκούειν",
              "correct": true,
              "feedback": "Correct: ἀκούειν names the action without a person."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: ἀκούειν names the action without a person."
            },
            {
              "text": "ἄκουε",
              "correct": false,
              "feedback": "Review: ἀκούειν names the action without a person."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: ἀκούειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-06-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to listen.”",
          "choices": [
            {
              "text": "ἀκούειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive ἀκούειν."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive ἀκούειν."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive ἀκούειν."
            },
            {
              "text": "ἀκούετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive ἀκούειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-06-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does ἀκούειν mean?",
          "choices": [
            {
              "text": "To listen.",
              "correct": true,
              "feedback": "Correct: ἀκούειν is an infinitive: “to listen.”"
            },
            {
              "text": "I listen.",
              "correct": false,
              "feedback": "Review: ἀκούειν is an infinitive: “to listen.”"
            },
            {
              "text": "They listen.",
              "correct": false,
              "feedback": "Review: ἀκούειν is an infinitive: “to listen.”"
            },
            {
              "text": "He or she listens.",
              "correct": false,
              "feedback": "Review: ἀκούειν is an infinitive: “to listen.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-06-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb ἀκούει with its infinitive.",
          "choices": [
            {
              "text": "ἀκούειν",
              "correct": true,
              "feedback": "Correct: ἀκούειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: ἀκούειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "ἀκούεις",
              "correct": false,
              "feedback": "Review: ἀκούειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "Review: ἀκούειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-06-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to listen”?",
          "choices": [
            {
              "text": "ἐθέλω ἀκούειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by ἀκούειν."
            },
            {
              "text": "ἐθέλω ἀκούει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by ἀκούειν."
            },
            {
              "text": "ἐθέλω ἀκούουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by ἀκούειν."
            },
            {
              "text": "ἐθέλω ἄκουε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by ἀκούειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-07-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form κωλύουσιν?",
          "choices": [
            {
              "text": "κωλύω",
              "correct": true,
              "feedback": "Correct: κωλύουσιν belongs to κωλύω."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: κωλύουσιν belongs to κωλύω."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: κωλύουσιν belongs to κωλύω."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: κωλύουσιν belongs to κωλύω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-07-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb κωλύω?",
          "choices": [
            {
              "text": "κωλύειν",
              "correct": true,
              "feedback": "Correct: κωλύειν is the infinitive of κωλύω."
            },
            {
              "text": "μένειν",
              "correct": false,
              "feedback": "Review: κωλύειν is the infinitive of κωλύω."
            },
            {
              "text": "σπεύδειν",
              "correct": false,
              "feedback": "Review: κωλύειν is the infinitive of κωλύω."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "Review: κωλύειν is the infinitive of κωλύω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-07-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of κωλύω?",
          "choices": [
            {
              "text": "κωλύεις",
              "correct": true,
              "feedback": "Correct: κωλύεις and κωλύω share the same present verb family."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: κωλύεις and κωλύω share the same present verb family."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: κωλύεις and κωλύω share the same present verb family."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: κωλύεις and κωλύω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-07-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to hinder.”",
          "choices": [
            {
              "text": "κωλύειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive κωλύειν."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive κωλύειν."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive κωλύειν."
            },
            {
              "text": "κώλυε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive κωλύειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-07-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “hinder”?",
          "choices": [
            {
              "text": "κωλύω — κωλύειν",
              "correct": true,
              "feedback": "Correct: κωλύω and κωλύειν name the same action."
            },
            {
              "text": "κωλύω — μένειν",
              "correct": false,
              "feedback": "Review: κωλύω and κωλύειν name the same action."
            },
            {
              "text": "κωλύω — σπεύδειν",
              "correct": false,
              "feedback": "Review: κωλύω and κωλύειν name the same action."
            },
            {
              "text": "κωλύω — μανθάνειν",
              "correct": false,
              "feedback": "Review: κωλύω and κωλύειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-07-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I hinder.”",
          "choices": [
            {
              "text": "κωλύω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is κωλύω."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is κωλύω."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: The first-person singular form is κωλύω."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is κωλύω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-07-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you hinder” (one person).",
          "choices": [
            {
              "text": "κωλύεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: κωλύεις."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: κωλύεις."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: κωλύεις."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: κωλύεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-07-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she hinders.”",
          "choices": [
            {
              "text": "κωλύει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: κωλύει."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: κωλύει."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: κωλύει."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: κωλύει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-07-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In κωλύεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: κωλύεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: κωλύεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: κωλύεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: κωλύεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-07-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I hinder.”",
          "choices": [
            {
              "text": "κωλύω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular κωλύω."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular κωλύω."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular κωλύω."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular κωλύω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-07-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change κωλύει (“he or she hinders”) to “they hinder.”",
          "choices": [
            {
              "text": "κωλύουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is κωλύουσιν."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: The third-person plural form is κωλύουσιν."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is κωλύουσιν."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: The third-person plural form is κωλύουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-07-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they hinder”?",
          "choices": [
            {
              "text": "κωλύουσιν",
              "correct": true,
              "feedback": "Correct: κωλύουσιν means “they hinder.”"
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: κωλύουσιν means “they hinder.”"
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: κωλύουσιν means “they hinder.”"
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: κωλύουσιν means “they hinder.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-07-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate κωλύουσιν.",
          "choices": [
            {
              "text": "They hinder.",
              "correct": true,
              "feedback": "Correct: κωλύουσιν has a third-person plural ending."
            },
            {
              "text": "I hinder.",
              "correct": false,
              "feedback": "Review: κωλύουσιν has a third-person plural ending."
            },
            {
              "text": "You hinder.",
              "correct": false,
              "feedback": "Review: κωλύουσιν has a third-person plural ending."
            },
            {
              "text": "He or she hinders.",
              "correct": false,
              "feedback": "Review: κωλύουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-07-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of κωλύω?",
          "choices": [
            {
              "text": "οἱ φίλοι κωλύουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb κωλύουσιν."
            },
            {
              "text": "ὁ φίλος κωλύουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb κωλύουσιν."
            },
            {
              "text": "οἱ φίλοι κωλύει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb κωλύουσιν."
            },
            {
              "text": "ὁ φίλος κωλύει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb κωλύουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-07-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of κωλύουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: κωλύουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: κωλύουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: κωλύουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: κωλύουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-07-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to hinder.",
          "choices": [
            {
              "text": "κώλυε",
              "correct": true,
              "feedback": "Correct: κώλυε is the singular command."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: κώλυε is the singular command."
            },
            {
              "text": "κωλύετε",
              "correct": false,
              "feedback": "Review: κώλυε is the singular command."
            },
            {
              "text": "κωλύειν",
              "correct": false,
              "feedback": "Review: κώλυε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-07-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to hinder.",
          "choices": [
            {
              "text": "κωλύετε",
              "correct": true,
              "feedback": "Correct: κωλύετε addresses several people."
            },
            {
              "text": "κώλυε",
              "correct": false,
              "feedback": "Review: κωλύετε addresses several people."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: κωλύετε addresses several people."
            },
            {
              "text": "κωλύειν",
              "correct": false,
              "feedback": "Review: κωλύετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-07-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not hinder!”",
          "choices": [
            {
              "text": "μὴ κώλυε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command κώλυε."
            },
            {
              "text": "οὐ κώλυε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command κώλυε."
            },
            {
              "text": "μὴ κωλύει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command κώλυε."
            },
            {
              "text": "οὐ κωλύει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command κώλυε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-07-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not hinder!”",
          "choices": [
            {
              "text": "μὴ κωλύετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command κωλύετε."
            },
            {
              "text": "οὐ κωλύετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command κωλύετε."
            },
            {
              "text": "μὴ κωλύουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command κωλύετε."
            },
            {
              "text": "οὐ κωλύουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command κωλύετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-07-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of κωλύω is a statement rather than a command?",
          "choices": [
            {
              "text": "κωλύει",
              "correct": true,
              "feedback": "Correct: κωλύει means “he or she hinders.”"
            },
            {
              "text": "κώλυε",
              "correct": false,
              "feedback": "Review: κωλύει means “he or she hinders.”"
            },
            {
              "text": "κωλύετε",
              "correct": false,
              "feedback": "Review: κωλύει means “he or she hinders.”"
            },
            {
              "text": "μὴ κώλυε",
              "correct": false,
              "feedback": "Review: κωλύει means “he or she hinders.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-07-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to hinder.”",
          "choices": [
            {
              "text": "κωλύειν",
              "correct": true,
              "feedback": "Correct: κωλύειν names the action without a person."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: κωλύειν names the action without a person."
            },
            {
              "text": "κώλυε",
              "correct": false,
              "feedback": "Review: κωλύειν names the action without a person."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: κωλύειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-07-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to hinder.”",
          "choices": [
            {
              "text": "κωλύειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive κωλύειν."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive κωλύειν."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive κωλύειν."
            },
            {
              "text": "κωλύετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive κωλύειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-07-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does κωλύειν mean?",
          "choices": [
            {
              "text": "To hinder.",
              "correct": true,
              "feedback": "Correct: κωλύειν is an infinitive: “to hinder.”"
            },
            {
              "text": "I hinder.",
              "correct": false,
              "feedback": "Review: κωλύειν is an infinitive: “to hinder.”"
            },
            {
              "text": "They hinder.",
              "correct": false,
              "feedback": "Review: κωλύειν is an infinitive: “to hinder.”"
            },
            {
              "text": "He or she hinders.",
              "correct": false,
              "feedback": "Review: κωλύειν is an infinitive: “to hinder.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-07-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb κωλύει with its infinitive.",
          "choices": [
            {
              "text": "κωλύειν",
              "correct": true,
              "feedback": "Correct: κωλύειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: κωλύειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "κωλύεις",
              "correct": false,
              "feedback": "Review: κωλύειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "κωλύουσιν",
              "correct": false,
              "feedback": "Review: κωλύειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-07-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to hinder”?",
          "choices": [
            {
              "text": "ἐθέλω κωλύειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by κωλύειν."
            },
            {
              "text": "ἐθέλω κωλύει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by κωλύειν."
            },
            {
              "text": "ἐθέλω κωλύουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by κωλύειν."
            },
            {
              "text": "ἐθέλω κώλυε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by κωλύειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-08-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form μένουσιν?",
          "choices": [
            {
              "text": "μένω",
              "correct": true,
              "feedback": "Correct: μένουσιν belongs to μένω."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: μένουσιν belongs to μένω."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: μένουσιν belongs to μένω."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: μένουσιν belongs to μένω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-08-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb μένω?",
          "choices": [
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct: μένειν is the infinitive of μένω."
            },
            {
              "text": "σπεύδειν",
              "correct": false,
              "feedback": "Review: μένειν is the infinitive of μένω."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "Review: μένειν is the infinitive of μένω."
            },
            {
              "text": "λέγειν",
              "correct": false,
              "feedback": "Review: μένειν is the infinitive of μένω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-08-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of μένω?",
          "choices": [
            {
              "text": "μένεις",
              "correct": true,
              "feedback": "Correct: μένεις and μένω share the same present verb family."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: μένεις and μένω share the same present verb family."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: μένεις and μένω share the same present verb family."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: μένεις and μένω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-08-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to wait.”",
          "choices": [
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive μένειν."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive μένειν."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive μένειν."
            },
            {
              "text": "μένε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive μένειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-08-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “wait”?",
          "choices": [
            {
              "text": "μένω — μένειν",
              "correct": true,
              "feedback": "Correct: μένω and μένειν name the same action."
            },
            {
              "text": "μένω — σπεύδειν",
              "correct": false,
              "feedback": "Review: μένω and μένειν name the same action."
            },
            {
              "text": "μένω — μανθάνειν",
              "correct": false,
              "feedback": "Review: μένω and μένειν name the same action."
            },
            {
              "text": "μένω — λέγειν",
              "correct": false,
              "feedback": "Review: μένω and μένειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-08-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I wait.”",
          "choices": [
            {
              "text": "μένω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is μένω."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is μένω."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: The first-person singular form is μένω."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is μένω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-08-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you wait” (one person).",
          "choices": [
            {
              "text": "μένεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: μένεις."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: μένεις."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: μένεις."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: μένεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-08-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she waits.”",
          "choices": [
            {
              "text": "μένει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: μένει."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: μένει."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: μένει."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: μένει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-08-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In μένεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: μένεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: μένεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: μένεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: μένεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-08-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I wait.”",
          "choices": [
            {
              "text": "μένω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular μένω."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular μένω."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular μένω."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular μένω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-08-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change μένει (“he or she waits”) to “they wait.”",
          "choices": [
            {
              "text": "μένουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is μένουσιν."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: The third-person plural form is μένουσιν."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is μένουσιν."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: The third-person plural form is μένουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-08-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they wait”?",
          "choices": [
            {
              "text": "μένουσιν",
              "correct": true,
              "feedback": "Correct: μένουσιν means “they wait.”"
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: μένουσιν means “they wait.”"
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: μένουσιν means “they wait.”"
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: μένουσιν means “they wait.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-08-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate μένουσιν.",
          "choices": [
            {
              "text": "They wait.",
              "correct": true,
              "feedback": "Correct: μένουσιν has a third-person plural ending."
            },
            {
              "text": "I wait.",
              "correct": false,
              "feedback": "Review: μένουσιν has a third-person plural ending."
            },
            {
              "text": "You wait.",
              "correct": false,
              "feedback": "Review: μένουσιν has a third-person plural ending."
            },
            {
              "text": "He or she waits.",
              "correct": false,
              "feedback": "Review: μένουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-08-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of μένω?",
          "choices": [
            {
              "text": "οἱ φίλοι μένουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb μένουσιν."
            },
            {
              "text": "ὁ φίλος μένουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb μένουσιν."
            },
            {
              "text": "οἱ φίλοι μένει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb μένουσιν."
            },
            {
              "text": "ὁ φίλος μένει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb μένουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-08-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of μένουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: μένουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: μένουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: μένουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: μένουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-08-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to wait.",
          "choices": [
            {
              "text": "μένε",
              "correct": true,
              "feedback": "Correct: μένε is the singular command."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: μένε is the singular command."
            },
            {
              "text": "μένετε",
              "correct": false,
              "feedback": "Review: μένε is the singular command."
            },
            {
              "text": "μένειν",
              "correct": false,
              "feedback": "Review: μένε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-08-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to wait.",
          "choices": [
            {
              "text": "μένετε",
              "correct": true,
              "feedback": "Correct: μένετε addresses several people."
            },
            {
              "text": "μένε",
              "correct": false,
              "feedback": "Review: μένετε addresses several people."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: μένετε addresses several people."
            },
            {
              "text": "μένειν",
              "correct": false,
              "feedback": "Review: μένετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-08-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not wait!”",
          "choices": [
            {
              "text": "μὴ μένε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command μένε."
            },
            {
              "text": "οὐ μένε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command μένε."
            },
            {
              "text": "μὴ μένει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command μένε."
            },
            {
              "text": "οὐ μένει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command μένε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-08-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not wait!”",
          "choices": [
            {
              "text": "μὴ μένετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command μένετε."
            },
            {
              "text": "οὐ μένετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command μένετε."
            },
            {
              "text": "μὴ μένουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command μένετε."
            },
            {
              "text": "οὐ μένουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command μένετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-08-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of μένω is a statement rather than a command?",
          "choices": [
            {
              "text": "μένει",
              "correct": true,
              "feedback": "Correct: μένει means “he or she waits.”"
            },
            {
              "text": "μένε",
              "correct": false,
              "feedback": "Review: μένει means “he or she waits.”"
            },
            {
              "text": "μένετε",
              "correct": false,
              "feedback": "Review: μένει means “he or she waits.”"
            },
            {
              "text": "μὴ μένε",
              "correct": false,
              "feedback": "Review: μένει means “he or she waits.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-08-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to wait.”",
          "choices": [
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct: μένειν names the action without a person."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: μένειν names the action without a person."
            },
            {
              "text": "μένε",
              "correct": false,
              "feedback": "Review: μένειν names the action without a person."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: μένειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-08-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to wait.”",
          "choices": [
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive μένειν."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive μένειν."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive μένειν."
            },
            {
              "text": "μένετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive μένειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-08-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does μένειν mean?",
          "choices": [
            {
              "text": "To wait.",
              "correct": true,
              "feedback": "Correct: μένειν is an infinitive: “to wait.”"
            },
            {
              "text": "I wait.",
              "correct": false,
              "feedback": "Review: μένειν is an infinitive: “to wait.”"
            },
            {
              "text": "They wait.",
              "correct": false,
              "feedback": "Review: μένειν is an infinitive: “to wait.”"
            },
            {
              "text": "He or she waits.",
              "correct": false,
              "feedback": "Review: μένειν is an infinitive: “to wait.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-08-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb μένει with its infinitive.",
          "choices": [
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct: μένειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: μένειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "μένεις",
              "correct": false,
              "feedback": "Review: μένειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: μένειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-08-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to wait”?",
          "choices": [
            {
              "text": "ἐθέλω μένειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by μένειν."
            },
            {
              "text": "ἐθέλω μένει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by μένειν."
            },
            {
              "text": "ἐθέλω μένουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by μένειν."
            },
            {
              "text": "ἐθέλω μένε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by μένειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-09-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form σπεύδουσιν?",
          "choices": [
            {
              "text": "σπεύδω",
              "correct": true,
              "feedback": "Correct: σπεύδουσιν belongs to σπεύδω."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: σπεύδουσιν belongs to σπεύδω."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: σπεύδουσιν belongs to σπεύδω."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: σπεύδουσιν belongs to σπεύδω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-09-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb σπεύδω?",
          "choices": [
            {
              "text": "σπεύδειν",
              "correct": true,
              "feedback": "Correct: σπεύδειν is the infinitive of σπεύδω."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "Review: σπεύδειν is the infinitive of σπεύδω."
            },
            {
              "text": "λέγειν",
              "correct": false,
              "feedback": "Review: σπεύδειν is the infinitive of σπεύδω."
            },
            {
              "text": "βαδίζειν",
              "correct": false,
              "feedback": "Review: σπεύδειν is the infinitive of σπεύδω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-09-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of σπεύδω?",
          "choices": [
            {
              "text": "σπεύδεις",
              "correct": true,
              "feedback": "Correct: σπεύδεις and σπεύδω share the same present verb family."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: σπεύδεις and σπεύδω share the same present verb family."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: σπεύδεις and σπεύδω share the same present verb family."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: σπεύδεις and σπεύδω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-09-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to hurry.”",
          "choices": [
            {
              "text": "σπεύδειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive σπεύδειν."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive σπεύδειν."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive σπεύδειν."
            },
            {
              "text": "σπεῦδε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive σπεύδειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-09-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “hurry”?",
          "choices": [
            {
              "text": "σπεύδω — σπεύδειν",
              "correct": true,
              "feedback": "Correct: σπεύδω and σπεύδειν name the same action."
            },
            {
              "text": "σπεύδω — μανθάνειν",
              "correct": false,
              "feedback": "Review: σπεύδω and σπεύδειν name the same action."
            },
            {
              "text": "σπεύδω — λέγειν",
              "correct": false,
              "feedback": "Review: σπεύδω and σπεύδειν name the same action."
            },
            {
              "text": "σπεύδω — βαδίζειν",
              "correct": false,
              "feedback": "Review: σπεύδω and σπεύδειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-09-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I hurry.”",
          "choices": [
            {
              "text": "σπεύδω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is σπεύδω."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is σπεύδω."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: The first-person singular form is σπεύδω."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is σπεύδω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-09-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you hurry” (one person).",
          "choices": [
            {
              "text": "σπεύδεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: σπεύδεις."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: σπεύδεις."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: σπεύδεις."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: σπεύδεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-09-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she hurries.”",
          "choices": [
            {
              "text": "σπεύδει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: σπεύδει."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: σπεύδει."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: σπεύδει."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: σπεύδει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-09-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In σπεύδεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: σπεύδεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: σπεύδεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: σπεύδεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: σπεύδεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-09-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I hurry.”",
          "choices": [
            {
              "text": "σπεύδω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular σπεύδω."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular σπεύδω."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular σπεύδω."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular σπεύδω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-09-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change σπεύδει (“he or she hurries”) to “they hurry.”",
          "choices": [
            {
              "text": "σπεύδουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is σπεύδουσιν."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: The third-person plural form is σπεύδουσιν."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is σπεύδουσιν."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: The third-person plural form is σπεύδουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-09-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they hurry”?",
          "choices": [
            {
              "text": "σπεύδουσιν",
              "correct": true,
              "feedback": "Correct: σπεύδουσιν means “they hurry.”"
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: σπεύδουσιν means “they hurry.”"
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: σπεύδουσιν means “they hurry.”"
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: σπεύδουσιν means “they hurry.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-09-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate σπεύδουσιν.",
          "choices": [
            {
              "text": "They hurry.",
              "correct": true,
              "feedback": "Correct: σπεύδουσιν has a third-person plural ending."
            },
            {
              "text": "I hurry.",
              "correct": false,
              "feedback": "Review: σπεύδουσιν has a third-person plural ending."
            },
            {
              "text": "You hurry.",
              "correct": false,
              "feedback": "Review: σπεύδουσιν has a third-person plural ending."
            },
            {
              "text": "He or she hurries.",
              "correct": false,
              "feedback": "Review: σπεύδουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-09-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of σπεύδω?",
          "choices": [
            {
              "text": "οἱ φίλοι σπεύδουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb σπεύδουσιν."
            },
            {
              "text": "ὁ φίλος σπεύδουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb σπεύδουσιν."
            },
            {
              "text": "οἱ φίλοι σπεύδει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb σπεύδουσιν."
            },
            {
              "text": "ὁ φίλος σπεύδει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb σπεύδουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-09-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of σπεύδουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: σπεύδουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: σπεύδουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: σπεύδουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: σπεύδουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-09-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to hurry.",
          "choices": [
            {
              "text": "σπεῦδε",
              "correct": true,
              "feedback": "Correct: σπεῦδε is the singular command."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: σπεῦδε is the singular command."
            },
            {
              "text": "σπεύδετε",
              "correct": false,
              "feedback": "Review: σπεῦδε is the singular command."
            },
            {
              "text": "σπεύδειν",
              "correct": false,
              "feedback": "Review: σπεῦδε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-09-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to hurry.",
          "choices": [
            {
              "text": "σπεύδετε",
              "correct": true,
              "feedback": "Correct: σπεύδετε addresses several people."
            },
            {
              "text": "σπεῦδε",
              "correct": false,
              "feedback": "Review: σπεύδετε addresses several people."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: σπεύδετε addresses several people."
            },
            {
              "text": "σπεύδειν",
              "correct": false,
              "feedback": "Review: σπεύδετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-09-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not hurry!”",
          "choices": [
            {
              "text": "μὴ σπεῦδε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command σπεῦδε."
            },
            {
              "text": "οὐ σπεῦδε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command σπεῦδε."
            },
            {
              "text": "μὴ σπεύδει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command σπεῦδε."
            },
            {
              "text": "οὐ σπεύδει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command σπεῦδε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-09-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not hurry!”",
          "choices": [
            {
              "text": "μὴ σπεύδετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command σπεύδετε."
            },
            {
              "text": "οὐ σπεύδετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command σπεύδετε."
            },
            {
              "text": "μὴ σπεύδουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command σπεύδετε."
            },
            {
              "text": "οὐ σπεύδουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command σπεύδετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-09-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of σπεύδω is a statement rather than a command?",
          "choices": [
            {
              "text": "σπεύδει",
              "correct": true,
              "feedback": "Correct: σπεύδει means “he or she hurries.”"
            },
            {
              "text": "σπεῦδε",
              "correct": false,
              "feedback": "Review: σπεύδει means “he or she hurries.”"
            },
            {
              "text": "σπεύδετε",
              "correct": false,
              "feedback": "Review: σπεύδει means “he or she hurries.”"
            },
            {
              "text": "μὴ σπεῦδε",
              "correct": false,
              "feedback": "Review: σπεύδει means “he or she hurries.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-09-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to hurry.”",
          "choices": [
            {
              "text": "σπεύδειν",
              "correct": true,
              "feedback": "Correct: σπεύδειν names the action without a person."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: σπεύδειν names the action without a person."
            },
            {
              "text": "σπεῦδε",
              "correct": false,
              "feedback": "Review: σπεύδειν names the action without a person."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: σπεύδειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-09-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to hurry.”",
          "choices": [
            {
              "text": "σπεύδειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive σπεύδειν."
            },
            {
              "text": "σπεύδει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive σπεύδειν."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive σπεύδειν."
            },
            {
              "text": "σπεύδετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive σπεύδειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-09-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does σπεύδειν mean?",
          "choices": [
            {
              "text": "To hurry.",
              "correct": true,
              "feedback": "Correct: σπεύδειν is an infinitive: “to hurry.”"
            },
            {
              "text": "I hurry.",
              "correct": false,
              "feedback": "Review: σπεύδειν is an infinitive: “to hurry.”"
            },
            {
              "text": "They hurry.",
              "correct": false,
              "feedback": "Review: σπεύδειν is an infinitive: “to hurry.”"
            },
            {
              "text": "He or she hurries.",
              "correct": false,
              "feedback": "Review: σπεύδειν is an infinitive: “to hurry.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-09-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb σπεύδει with its infinitive.",
          "choices": [
            {
              "text": "σπεύδειν",
              "correct": true,
              "feedback": "Correct: σπεύδειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: σπεύδειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "σπεύδεις",
              "correct": false,
              "feedback": "Review: σπεύδειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: σπεύδειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-09-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to hurry”?",
          "choices": [
            {
              "text": "ἐθέλω σπεύδειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by σπεύδειν."
            },
            {
              "text": "ἐθέλω σπεύδει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by σπεύδειν."
            },
            {
              "text": "ἐθέλω σπεύδουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by σπεύδειν."
            },
            {
              "text": "ἐθέλω σπεῦδε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by σπεύδειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-10-lemma",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary verb gives the form μανθάνουσιν?",
          "choices": [
            {
              "text": "μανθάνω",
              "correct": true,
              "feedback": "Correct: μανθάνουσιν belongs to μανθάνω."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: μανθάνουσιν belongs to μανθάνω."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: μανθάνουσιν belongs to μανθάνω."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: μανθάνουσιν belongs to μανθάνω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-10-infinitive",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which infinitive belongs to the dictionary verb μανθάνω?",
          "choices": [
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "Correct: μανθάνειν is the infinitive of μανθάνω."
            },
            {
              "text": "λέγειν",
              "correct": false,
              "feedback": "Review: μανθάνειν is the infinitive of μανθάνω."
            },
            {
              "text": "βαδίζειν",
              "correct": false,
              "feedback": "Review: μανθάνειν is the infinitive of μανθάνω."
            },
            {
              "text": "φέρειν",
              "correct": false,
              "feedback": "Review: μανθάνειν is the infinitive of μανθάνω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-10-family",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which present form belongs to the family of μανθάνω?",
          "choices": [
            {
              "text": "μανθάνεις",
              "correct": true,
              "feedback": "Correct: μανθάνεις and μανθάνω share the same present verb family."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: μανθάνεις and μανθάνω share the same present verb family."
            },
            {
              "text": "βαδίζεις",
              "correct": false,
              "feedback": "Review: μανθάνεις and μανθάνω share the same present verb family."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: μανθάνεις and μανθάνω share the same present verb family."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-10-want",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Complete “ἐθέλω ___” to say “I want to learn.”",
          "choices": [
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "Correct: After ἐθέλω, use the infinitive μανθάνειν."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive μανθάνειν."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive μανθάνειν."
            },
            {
              "text": "μάνθανε",
              "correct": false,
              "feedback": "Review: After ἐθέλω, use the infinitive μανθάνειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-word-study-10-pair",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary form and infinitive form belong together for “learn”?",
          "choices": [
            {
              "text": "μανθάνω — μανθάνειν",
              "correct": true,
              "feedback": "Correct: μανθάνω and μανθάνειν name the same action."
            },
            {
              "text": "μανθάνω — λέγειν",
              "correct": false,
              "feedback": "Review: μανθάνω and μανθάνειν name the same action."
            },
            {
              "text": "μανθάνω — βαδίζειν",
              "correct": false,
              "feedback": "Review: μανθάνω and μανθάνειν name the same action."
            },
            {
              "text": "μανθάνω — φέρειν",
              "correct": false,
              "feedback": "Review: μανθάνω and μανθάνειν name the same action."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-10-first",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “I learn.”",
          "choices": [
            {
              "text": "μανθάνω",
              "correct": true,
              "feedback": "Correct: The first-person singular form is μανθάνω."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: The first-person singular form is μανθάνω."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: The first-person singular form is μανθάνω."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: The first-person singular form is μανθάνω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-10-second",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “you learn” (one person).",
          "choices": [
            {
              "text": "μανθάνεις",
              "correct": true,
              "feedback": "Correct: The second-person singular ending is -εις: μανθάνεις."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: μανθάνεις."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: μανθάνεις."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: The second-person singular ending is -εις: μανθάνεις."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-10-third",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose the Greek form for “he or she learns.”",
          "choices": [
            {
              "text": "μανθάνει",
              "correct": true,
              "feedback": "Correct: The third-person singular ending is -ει: μανθάνει."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: μανθάνει."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: μανθάνει."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: The third-person singular ending is -ει: μανθάνει."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-10-speaker",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In μανθάνεις, who is being addressed?",
          "choices": [
            {
              "text": "One person: you.",
              "correct": true,
              "feedback": "Correct: μανθάνεις addresses one person."
            },
            {
              "text": "The speaker: I.",
              "correct": false,
              "feedback": "Review: μανθάνεις addresses one person."
            },
            {
              "text": "One person: he or she.",
              "correct": false,
              "feedback": "Review: μανθάνεις addresses one person."
            },
            {
              "text": "Several people: they.",
              "correct": false,
              "feedback": "Review: μανθάνεις addresses one person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-singular-review-10-context",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Complete “ἐγὼ ___” with the form meaning “I learn.”",
          "choices": [
            {
              "text": "μανθάνω",
              "correct": true,
              "feedback": "Correct: ἐγώ pairs with the first-person singular μανθάνω."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular μανθάνω."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular μανθάνω."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: ἐγώ pairs with the first-person singular μανθάνω."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-10-change",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Change μανθάνει (“he or she learns”) to “they learn.”",
          "choices": [
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "Correct: The third-person plural form is μανθάνουσιν."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: The third-person plural form is μανθάνουσιν."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: The third-person plural form is μανθάνουσιν."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: The third-person plural form is μανθάνουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-10-meaning",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which Greek form means “they learn”?",
          "choices": [
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "Correct: μανθάνουσιν means “they learn.”"
            },
            {
              "text": "λέγουσιν",
              "correct": false,
              "feedback": "Review: μανθάνουσιν means “they learn.”"
            },
            {
              "text": "βαδίζουσιν",
              "correct": false,
              "feedback": "Review: μανθάνουσιν means “they learn.”"
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "Review: μανθάνουσιν means “they learn.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-10-translate",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Translate μανθάνουσιν.",
          "choices": [
            {
              "text": "They learn.",
              "correct": true,
              "feedback": "Correct: μανθάνουσιν has a third-person plural ending."
            },
            {
              "text": "I learn.",
              "correct": false,
              "feedback": "Review: μανθάνουσιν has a third-person plural ending."
            },
            {
              "text": "You learn.",
              "correct": false,
              "feedback": "Review: μανθάνουσιν has a third-person plural ending."
            },
            {
              "text": "He or she learns.",
              "correct": false,
              "feedback": "Review: μανθάνουσιν has a third-person plural ending."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-10-agreement",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "Which sentence has a plural subject and the matching plural form of μανθάνω?",
          "choices": [
            {
              "text": "οἱ φίλοι μανθάνουσιν.",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι calls for the plural verb μανθάνουσιν."
            },
            {
              "text": "ὁ φίλος μανθάνουσιν.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb μανθάνουσιν."
            },
            {
              "text": "οἱ φίλοι μανθάνει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb μανθάνουσιν."
            },
            {
              "text": "ὁ φίλος μανθάνει.",
              "correct": false,
              "feedback": "Review: οἱ φίλοι calls for the plural verb μανθάνουσιν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-third-plural-10-ending",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third-Person Plurals",
          "prompt": "What does the ending of μανθάνουσιν tell you?",
          "choices": [
            {
              "text": "Several people perform the action.",
              "correct": true,
              "feedback": "Correct: μανθάνουσιν is third-person plural."
            },
            {
              "text": "The speaker performs the action.",
              "correct": false,
              "feedback": "Review: μανθάνουσιν is third-person plural."
            },
            {
              "text": "One person is commanded.",
              "correct": false,
              "feedback": "Review: μανθάνουσιν is third-person plural."
            },
            {
              "text": "The form is an infinitive.",
              "correct": false,
              "feedback": "Review: μανθάνουσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-10-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person to learn.",
          "choices": [
            {
              "text": "μάνθανε",
              "correct": true,
              "feedback": "Correct: μάνθανε is the singular command."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: μάνθανε is the singular command."
            },
            {
              "text": "μανθάνετε",
              "correct": false,
              "feedback": "Review: μάνθανε is the singular command."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "Review: μάνθανε is the singular command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-10-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people to learn.",
          "choices": [
            {
              "text": "μανθάνετε",
              "correct": true,
              "feedback": "Correct: μανθάνετε addresses several people."
            },
            {
              "text": "μάνθανε",
              "correct": false,
              "feedback": "Review: μανθάνετε addresses several people."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: μανθάνετε addresses several people."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "Review: μανθάνετε addresses several people."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-10-not-one",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Do not learn!”",
          "choices": [
            {
              "text": "μὴ μάνθανε",
              "correct": true,
              "feedback": "Correct: Use μή with the singular command μάνθανε."
            },
            {
              "text": "οὐ μάνθανε",
              "correct": false,
              "feedback": "Review: Use μή with the singular command μάνθανε."
            },
            {
              "text": "μὴ μανθάνει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command μάνθανε."
            },
            {
              "text": "οὐ μανθάνει",
              "correct": false,
              "feedback": "Review: Use μή with the singular command μάνθανε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-10-not-several",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Do not learn!”",
          "choices": [
            {
              "text": "μὴ μανθάνετε",
              "correct": true,
              "feedback": "Correct: Use μή with the plural command μανθάνετε."
            },
            {
              "text": "οὐ μανθάνετε",
              "correct": false,
              "feedback": "Review: Use μή with the plural command μανθάνετε."
            },
            {
              "text": "μὴ μανθάνουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command μανθάνετε."
            },
            {
              "text": "οὐ μανθάνουσιν",
              "correct": false,
              "feedback": "Review: Use μή with the plural command μανθάνετε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-commands-10-statement",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Which form of μανθάνω is a statement rather than a command?",
          "choices": [
            {
              "text": "μανθάνει",
              "correct": true,
              "feedback": "Correct: μανθάνει means “he or she learns.”"
            },
            {
              "text": "μάνθανε",
              "correct": false,
              "feedback": "Review: μανθάνει means “he or she learns.”"
            },
            {
              "text": "μανθάνετε",
              "correct": false,
              "feedback": "Review: μανθάνει means “he or she learns.”"
            },
            {
              "text": "μὴ μάνθανε",
              "correct": false,
              "feedback": "Review: μανθάνει means “he or she learns.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-10-form",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose the infinitive “to learn.”",
          "choices": [
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "Correct: μανθάνειν names the action without a person."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: μανθάνειν names the action without a person."
            },
            {
              "text": "μάνθανε",
              "correct": false,
              "feedback": "Review: μανθάνειν names the action without a person."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: μανθάνειν names the action without a person."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-10-want",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Complete “ἐθέλει ___” to say “he or she wants to learn.”",
          "choices": [
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "Correct: ἐθέλει takes the infinitive μανθάνειν."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive μανθάνειν."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive μανθάνειν."
            },
            {
              "text": "μανθάνετε",
              "correct": false,
              "feedback": "Review: ἐθέλει takes the infinitive μανθάνειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-10-translate",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "What does μανθάνειν mean?",
          "choices": [
            {
              "text": "To learn.",
              "correct": true,
              "feedback": "Correct: μανθάνειν is an infinitive: “to learn.”"
            },
            {
              "text": "I learn.",
              "correct": false,
              "feedback": "Review: μανθάνειν is an infinitive: “to learn.”"
            },
            {
              "text": "They learn.",
              "correct": false,
              "feedback": "Review: μανθάνειν is an infinitive: “to learn.”"
            },
            {
              "text": "He or she learns.",
              "correct": false,
              "feedback": "Review: μανθάνειν is an infinitive: “to learn.”"
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-10-replace",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Replace the finite verb μανθάνει with its infinitive.",
          "choices": [
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "Correct: μανθάνειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: μανθάνειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "μανθάνεις",
              "correct": false,
              "feedback": "Review: μανθάνειν, not a person-marked form, is the infinitive."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: μανθάνειν, not a person-marked form, is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-practice-infinitives-10-phrase",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which phrase correctly says “I want to learn”?",
          "choices": [
            {
              "text": "ἐθέλω μανθάνειν",
              "correct": true,
              "feedback": "Correct: The wanting verb is followed by μανθάνειν."
            },
            {
              "text": "ἐθέλω μανθάνει",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by μανθάνειν."
            },
            {
              "text": "ἐθέλω μανθάνουσιν",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by μανθάνειν."
            },
            {
              "text": "ἐθέλω μάνθανε",
              "correct": false,
              "feedback": "Review: The wanting verb is followed by μανθάνειν."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-01-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits Ξενοφῶν.",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ Ξενοφῶν uses the nominative article ὁ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: ὁ Ξενοφῶν uses the nominative article ὁ."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ὁ Ξενοφῶν uses the nominative article ὁ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ὁ Ξενοφῶν uses the nominative article ὁ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-01-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ Ξενοφῶν λέγει,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "Ξενοφῶν",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-01-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about ὁ Ξενοφῶν and λέγω.",
          "choices": [
            {
              "text": "ὁ Ξενοφῶν οὐ λέγει.",
              "correct": true,
              "feedback": "Correct: Use οὐ before λέγει to negate a statement."
            },
            {
              "text": "ὁ Ξενοφῶν μή λέγει.",
              "correct": false,
              "feedback": "Review: Use οὐ before λέγει to negate a statement."
            },
            {
              "text": "ὁ Ξενοφῶν οὐκ λέγει.",
              "correct": false,
              "feedback": "Review: Use οὐ before λέγει to negate a statement."
            },
            {
              "text": "ὁ Ξενοφῶν οὐχ λέγει.",
              "correct": false,
              "feedback": "Review: Use οὐ before λέγει to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-01-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to speak; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ λέγε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ λέγε."
            },
            {
              "text": "οὐ λέγε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ λέγε."
            },
            {
              "text": "οὐκ λέγε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ λέγε."
            },
            {
              "text": "οὐχ λέγε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ λέγε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-01-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ Ξενοφῶν οὐ λέγει,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-02-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits Σωκράτης.",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ Σωκράτης uses the nominative article ὁ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης uses the nominative article ὁ."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης uses the nominative article ὁ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης uses the nominative article ὁ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-02-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ Σωκράτης βαδίζει,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "Σωκράτης",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "βαδίζει",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-02-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about ὁ Σωκράτης and βαδίζω.",
          "choices": [
            {
              "text": "ὁ Σωκράτης οὐ βαδίζει.",
              "correct": true,
              "feedback": "Correct: Use οὐ before βαδίζει to negate a statement."
            },
            {
              "text": "ὁ Σωκράτης μή βαδίζει.",
              "correct": false,
              "feedback": "Review: Use οὐ before βαδίζει to negate a statement."
            },
            {
              "text": "ὁ Σωκράτης οὐκ βαδίζει.",
              "correct": false,
              "feedback": "Review: Use οὐ before βαδίζει to negate a statement."
            },
            {
              "text": "ὁ Σωκράτης οὐχ βαδίζει.",
              "correct": false,
              "feedback": "Review: Use οὐ before βαδίζει to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-02-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to walk; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ βάδιζε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ βάδιζε."
            },
            {
              "text": "οὐ βάδιζε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ βάδιζε."
            },
            {
              "text": "οὐκ βάδιζε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ βάδιζε."
            },
            {
              "text": "οὐχ βάδιζε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ βάδιζε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-02-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ Σωκράτης οὐ βαδίζει,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-03-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits ἀρτοπῶλις.",
          "choices": [
            {
              "text": "ἡ",
              "correct": true,
              "feedback": "Correct: ἡ ἀρτοπῶλις uses the nominative article ἡ."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: ἡ ἀρτοπῶλις uses the nominative article ἡ."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ἡ ἀρτοπῶλις uses the nominative article ἡ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ἡ ἀρτοπῶλις uses the nominative article ἡ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-03-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ἡ ἀρτοπῶλις ἔχει,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "ἡ",
              "correct": true,
              "feedback": "Correct: ἡ is a proclitic article in this phrase."
            },
            {
              "text": "ἀρτοπῶλις",
              "correct": false,
              "feedback": "Review: ἡ is a proclitic article in this phrase."
            },
            {
              "text": "ἔχει",
              "correct": false,
              "feedback": "Review: ἡ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: ἡ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-03-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about ἡ ἀρτοπῶλις and ἔχω.",
          "choices": [
            {
              "text": "ἡ ἀρτοπῶλις οὐκ ἔχει.",
              "correct": true,
              "feedback": "Correct: Use οὐκ before ἔχει to negate a statement."
            },
            {
              "text": "ἡ ἀρτοπῶλις μή ἔχει.",
              "correct": false,
              "feedback": "Review: Use οὐκ before ἔχει to negate a statement."
            },
            {
              "text": "ἡ ἀρτοπῶλις οὐ ἔχει.",
              "correct": false,
              "feedback": "Review: Use οὐκ before ἔχει to negate a statement."
            },
            {
              "text": "ἡ ἀρτοπῶλις οὐχ ἔχει.",
              "correct": false,
              "feedback": "Review: Use οὐκ before ἔχει to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-03-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to have; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ ἔχε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ ἔχε."
            },
            {
              "text": "οὐ ἔχε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ ἔχε."
            },
            {
              "text": "οὐκ ἔχε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ ἔχε."
            },
            {
              "text": "οὐχ ἔχε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ ἔχε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-03-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ἡ ἀρτοπῶλις οὐκ ἔχει,” what does οὐκ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐκ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐκ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐκ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐκ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-04-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits γυνή.",
          "choices": [
            {
              "text": "ἡ",
              "correct": true,
              "feedback": "Correct: ἡ γυνή uses the nominative article ἡ."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: ἡ γυνή uses the nominative article ἡ."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ἡ γυνή uses the nominative article ἡ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ἡ γυνή uses the nominative article ἡ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-04-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ἡ γυνή ἀκούει,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "ἡ",
              "correct": true,
              "feedback": "Correct: ἡ is a proclitic article in this phrase."
            },
            {
              "text": "γυνή",
              "correct": false,
              "feedback": "Review: ἡ is a proclitic article in this phrase."
            },
            {
              "text": "ἀκούει",
              "correct": false,
              "feedback": "Review: ἡ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: ἡ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-04-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about ἡ γυνή and ἀκούω.",
          "choices": [
            {
              "text": "ἡ γυνή οὐκ ἀκούει.",
              "correct": true,
              "feedback": "Correct: Use οὐκ before ἀκούει to negate a statement."
            },
            {
              "text": "ἡ γυνή μή ἀκούει.",
              "correct": false,
              "feedback": "Review: Use οὐκ before ἀκούει to negate a statement."
            },
            {
              "text": "ἡ γυνή οὐ ἀκούει.",
              "correct": false,
              "feedback": "Review: Use οὐκ before ἀκούει to negate a statement."
            },
            {
              "text": "ἡ γυνή οὐχ ἀκούει.",
              "correct": false,
              "feedback": "Review: Use οὐκ before ἀκούει to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-04-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to listen; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ ἄκουε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ ἄκουε."
            },
            {
              "text": "οὐ ἄκουε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ ἄκουε."
            },
            {
              "text": "οὐκ ἄκουε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ ἄκουε."
            },
            {
              "text": "οὐχ ἄκουε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ ἄκουε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-04-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ἡ γυνή οὐκ ἀκούει,” what does οὐκ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐκ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐκ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐκ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐκ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-05-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits παῖς.",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ παῖς uses the nominative article ὁ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: ὁ παῖς uses the nominative article ὁ."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ὁ παῖς uses the nominative article ὁ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ὁ παῖς uses the nominative article ὁ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-05-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ παῖς βλέπει,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "παῖς",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-05-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about ὁ παῖς and βλέπω.",
          "choices": [
            {
              "text": "ὁ παῖς οὐ βλέπει.",
              "correct": true,
              "feedback": "Correct: Use οὐ before βλέπει to negate a statement."
            },
            {
              "text": "ὁ παῖς μή βλέπει.",
              "correct": false,
              "feedback": "Review: Use οὐ before βλέπει to negate a statement."
            },
            {
              "text": "ὁ παῖς οὐκ βλέπει.",
              "correct": false,
              "feedback": "Review: Use οὐ before βλέπει to negate a statement."
            },
            {
              "text": "ὁ παῖς οὐχ βλέπει.",
              "correct": false,
              "feedback": "Review: Use οὐ before βλέπει to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-05-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to see; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ βλέπε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ βλέπε."
            },
            {
              "text": "οὐ βλέπε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ βλέπε."
            },
            {
              "text": "οὐκ βλέπε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ βλέπε."
            },
            {
              "text": "οὐχ βλέπε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ βλέπε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-05-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ παῖς οὐ βλέπει,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-06-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits ἔμπορος.",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ ἔμπορος uses the nominative article ὁ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος uses the nominative article ὁ."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος uses the nominative article ὁ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος uses the nominative article ὁ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-06-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ ἔμπορος φέρει,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "ἔμπορος",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-06-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about ὁ ἔμπορος and φέρω.",
          "choices": [
            {
              "text": "ὁ ἔμπορος οὐ φέρει.",
              "correct": true,
              "feedback": "Correct: Use οὐ before φέρει to negate a statement."
            },
            {
              "text": "ὁ ἔμπορος μή φέρει.",
              "correct": false,
              "feedback": "Review: Use οὐ before φέρει to negate a statement."
            },
            {
              "text": "ὁ ἔμπορος οὐκ φέρει.",
              "correct": false,
              "feedback": "Review: Use οὐ before φέρει to negate a statement."
            },
            {
              "text": "ὁ ἔμπορος οὐχ φέρει.",
              "correct": false,
              "feedback": "Review: Use οὐ before φέρει to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-06-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to carry; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ φέρε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ φέρε."
            },
            {
              "text": "οὐ φέρε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ φέρε."
            },
            {
              "text": "οὐκ φέρε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ φέρε."
            },
            {
              "text": "οὐχ φέρε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ φέρε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-06-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ ἔμπορος οὐ φέρει,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-07-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits φίλοι.",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι uses the nominative article οἱ."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: οἱ φίλοι uses the nominative article οἱ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: οἱ φίλοι uses the nominative article οἱ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἱ φίλοι uses the nominative article οἱ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-07-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “οἱ φίλοι μένουσιν,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "φίλοι",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-07-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about οἱ φίλοι and μένω.",
          "choices": [
            {
              "text": "οἱ φίλοι οὐ μένουσιν.",
              "correct": true,
              "feedback": "Correct: Use οὐ before μένουσιν to negate a statement."
            },
            {
              "text": "οἱ φίλοι μή μένουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before μένουσιν to negate a statement."
            },
            {
              "text": "οἱ φίλοι οὐκ μένουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before μένουσιν to negate a statement."
            },
            {
              "text": "οἱ φίλοι οὐχ μένουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before μένουσιν to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-07-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to wait; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ μένε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ μένε."
            },
            {
              "text": "οὐ μένε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ μένε."
            },
            {
              "text": "οὐκ μένε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ μένε."
            },
            {
              "text": "οὐχ μένε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ μένε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-07-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “οἱ φίλοι οὐ μένουσιν,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-08-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits ἔμποροι.",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ ἔμποροι uses the nominative article οἱ."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: οἱ ἔμποροι uses the nominative article οἱ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: οἱ ἔμποροι uses the nominative article οἱ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἱ ἔμποροι uses the nominative article οἱ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-08-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “οἱ ἔμποροι σπεύδουσιν,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "ἔμποροι",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "σπεύδουσιν",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-08-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about οἱ ἔμποροι and σπεύδω.",
          "choices": [
            {
              "text": "οἱ ἔμποροι οὐ σπεύδουσιν.",
              "correct": true,
              "feedback": "Correct: Use οὐ before σπεύδουσιν to negate a statement."
            },
            {
              "text": "οἱ ἔμποροι μή σπεύδουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before σπεύδουσιν to negate a statement."
            },
            {
              "text": "οἱ ἔμποροι οὐκ σπεύδουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before σπεύδουσιν to negate a statement."
            },
            {
              "text": "οἱ ἔμποροι οὐχ σπεύδουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before σπεύδουσιν to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-08-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to hurry; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ σπεῦδε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ σπεῦδε."
            },
            {
              "text": "οὐ σπεῦδε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ σπεῦδε."
            },
            {
              "text": "οὐκ σπεῦδε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ σπεῦδε."
            },
            {
              "text": "οὐχ σπεῦδε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ σπεῦδε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-08-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “οἱ ἔμποροι οὐ σπεύδουσιν,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-09-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits ἄνθρωποι.",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ ἄνθρωποι uses the nominative article οἱ."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι uses the nominative article οἱ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι uses the nominative article οἱ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι uses the nominative article οἱ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-09-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “οἱ ἄνθρωποι μανθάνουσιν,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "ἄνθρωποι",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: οἱ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-09-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about οἱ ἄνθρωποι and μανθάνω.",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι οὐ μανθάνουσιν.",
              "correct": true,
              "feedback": "Correct: Use οὐ before μανθάνουσιν to negate a statement."
            },
            {
              "text": "οἱ ἄνθρωποι μή μανθάνουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before μανθάνουσιν to negate a statement."
            },
            {
              "text": "οἱ ἄνθρωποι οὐκ μανθάνουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before μανθάνουσιν to negate a statement."
            },
            {
              "text": "οἱ ἄνθρωποι οὐχ μανθάνουσιν.",
              "correct": false,
              "feedback": "Review: Use οὐ before μανθάνουσιν to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-09-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to learn; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ μάνθανε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ μάνθανε."
            },
            {
              "text": "οὐ μάνθανε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ μάνθανε."
            },
            {
              "text": "οὐκ μάνθανε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ μάνθανε."
            },
            {
              "text": "οὐχ μάνθανε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ μάνθανε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-09-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “οἱ ἄνθρωποι οὐ μανθάνουσιν,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-10-article",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the nominative article that fits φίλος.",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ φίλος uses the nominative article ὁ."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: ὁ φίλος uses the nominative article ὁ."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ὁ φίλος uses the nominative article ὁ."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ὁ φίλος uses the nominative article ὁ."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-10-accent",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ φίλος κωλύει,” which written word is unaccented and leans on the next?",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "φίλος",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "κωλύει",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: ὁ is a proclitic article in this phrase."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-10-statement",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Choose the correctly negated statement about ὁ φίλος and κωλύω.",
          "choices": [
            {
              "text": "ὁ φίλος οὐ κωλύει.",
              "correct": true,
              "feedback": "Correct: Use οὐ before κωλύει to negate a statement."
            },
            {
              "text": "ὁ φίλος μή κωλύει.",
              "correct": false,
              "feedback": "Review: Use οὐ before κωλύει to negate a statement."
            },
            {
              "text": "ὁ φίλος οὐκ κωλύει.",
              "correct": false,
              "feedback": "Review: Use οὐ before κωλύει to negate a statement."
            },
            {
              "text": "ὁ φίλος οὐχ κωλύει.",
              "correct": false,
              "feedback": "Review: Use οὐ before κωλύει to negate a statement."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-10-command",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "Tell one person not to hinder; choose the proper negative.",
          "choices": [
            {
              "text": "μὴ κώλυε",
              "correct": true,
              "feedback": "Correct: Negative commands use μή: μὴ κώλυε."
            },
            {
              "text": "οὐ κώλυε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ κώλυε."
            },
            {
              "text": "οὐκ κώλυε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ κώλυε."
            },
            {
              "text": "οὐχ κώλυε",
              "correct": false,
              "feedback": "Review: Negative commands use μή: μὴ κώλυε."
            }
          ]
        },
        {
          "id": "lesson-5-practice-proclitics-10-rule",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics and Negatives",
          "prompt": "In “ὁ φίλος οὐ κωλύει,” what does οὐ negate?",
          "choices": [
            {
              "text": "A statement about the subject.",
              "correct": true,
              "feedback": "Correct: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to one person.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "A command to several people.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            },
            {
              "text": "The noun’s grammatical gender.",
              "correct": false,
              "feedback": "Review: οὐ negates the statement; μή is used for a negative command."
            }
          ]
        }
      ],
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Practice up to five rounds of 10. Correct each answer to continue, or stop whenever you feel confident."
    },
    "grammar-flashcards": {
      "title": "Lesson 5 Grammar Flashcards",
      "cards": [
        {
          "prompt": "λέγω / λέγεις / λέγει",
          "answer": "I speak / you speak / he or she speaks"
        },
        {
          "prompt": "λέγουσι(ν)",
          "answer": "they speak: third-person plural"
        },
        {
          "prompt": "Movable nu",
          "answer": "Optional final ν in forms such as λέγουσιν; it does not change the meaning."
        },
        {
          "prompt": "μένε / μένετε",
          "answer": "Stay! to one / to several"
        },
        {
          "prompt": "ἄκουε / ἀκούετε",
          "answer": "Listen! to one / to several"
        },
        {
          "prompt": "μὴ σπεῦδε",
          "answer": "Do not hurry! to one"
        },
        {
          "prompt": "μὴ σπεύδετε",
          "answer": "Do not hurry! to several"
        },
        {
          "prompt": "μανθάνειν",
          "answer": "to learn: present active infinitive"
        },
        {
          "prompt": "ἐθέλουσι μανθάνειν",
          "answer": "They want to learn; the infinitive has no person or number."
        },
        {
          "prompt": "μάνθανε / μανθάνειν",
          "answer": "Learn! / to learn; long -ειν changes the possible accent position."
        },
        {
          "prompt": "οὐ / οὐκ / οὐχ",
          "answer": "Before consonant / smooth-breathed vowel / rough-breathed vowel"
        },
        {
          "prompt": "Proclitic articles",
          "answer": "ὁ, ἡ, οἱ, αἱ"
        },
        {
          "prompt": "ἐν / εἰς / ἐκ (ἐξ)",
          "answer": "Proclitic prepositions; learn each with its case."
        },
        {
          "prompt": "ἕπου τοίνυν",
          "answer": "Then follow! Supplied middle command; not a paradigm to memorize yet."
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 5 Vocabulary Practice",
      "threshold": 80,
      "questions": [
        {
          "id": "lesson-5-vocab-practice-01-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “narrow lane”?",
          "choices": [
            {
              "text": "ὁ στενωπός",
              "correct": true,
              "feedback": "Correct: ὁ στενωπός means narrow lane."
            },
            {
              "text": "ἡ βακτηρία",
              "correct": false,
              "feedback": "Review: ὁ στενωπός means narrow lane."
            },
            {
              "text": "ὁ ἔμπορος",
              "correct": false,
              "feedback": "Review: ὁ στενωπός means narrow lane."
            },
            {
              "text": "ὁ ἄρτος",
              "correct": false,
              "feedback": "Review: ὁ στενωπός means narrow lane."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-01-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ στενωπός mean?",
          "choices": [
            {
              "text": "narrow lane",
              "correct": true,
              "feedback": "Correct: ὁ στενωπός means narrow lane."
            },
            {
              "text": "walking stick, staff",
              "correct": false,
              "feedback": "Review: ὁ στενωπός means narrow lane."
            },
            {
              "text": "merchant",
              "correct": false,
              "feedback": "Review: ὁ στενωπός means narrow lane."
            },
            {
              "text": "bread, loaf",
              "correct": false,
              "feedback": "Review: ὁ στενωπός means narrow lane."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-02-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “walking stick, staff”?",
          "choices": [
            {
              "text": "ἡ βακτηρία",
              "correct": true,
              "feedback": "Correct: ἡ βακτηρία means walking stick, staff."
            },
            {
              "text": "ὁ ἔμπορος",
              "correct": false,
              "feedback": "Review: ἡ βακτηρία means walking stick, staff."
            },
            {
              "text": "ὁ ἄρτος",
              "correct": false,
              "feedback": "Review: ἡ βακτηρία means walking stick, staff."
            },
            {
              "text": "ὁ οἶνος",
              "correct": false,
              "feedback": "Review: ἡ βακτηρία means walking stick, staff."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-02-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ βακτηρία mean?",
          "choices": [
            {
              "text": "walking stick, staff",
              "correct": true,
              "feedback": "Correct: ἡ βακτηρία means walking stick, staff."
            },
            {
              "text": "merchant",
              "correct": false,
              "feedback": "Review: ἡ βακτηρία means walking stick, staff."
            },
            {
              "text": "bread, loaf",
              "correct": false,
              "feedback": "Review: ἡ βακτηρία means walking stick, staff."
            },
            {
              "text": "wine",
              "correct": false,
              "feedback": "Review: ἡ βακτηρία means walking stick, staff."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-03-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “merchant”?",
          "choices": [
            {
              "text": "ὁ ἔμπορος",
              "correct": true,
              "feedback": "Correct: ὁ ἔμπορος means merchant."
            },
            {
              "text": "ὁ ἄρτος",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος means merchant."
            },
            {
              "text": "ὁ οἶνος",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος means merchant."
            },
            {
              "text": "ἡ ἀγορά",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος means merchant."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-03-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ ἔμπορος mean?",
          "choices": [
            {
              "text": "merchant",
              "correct": true,
              "feedback": "Correct: ὁ ἔμπορος means merchant."
            },
            {
              "text": "bread, loaf",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος means merchant."
            },
            {
              "text": "wine",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος means merchant."
            },
            {
              "text": "marketplace",
              "correct": false,
              "feedback": "Review: ὁ ἔμπορος means merchant."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-04-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “bread, loaf”?",
          "choices": [
            {
              "text": "ὁ ἄρτος",
              "correct": true,
              "feedback": "Correct: ὁ ἄρτος means bread, loaf."
            },
            {
              "text": "ὁ οἶνος",
              "correct": false,
              "feedback": "Review: ὁ ἄρτος means bread, loaf."
            },
            {
              "text": "ἡ ἀγορά",
              "correct": false,
              "feedback": "Review: ὁ ἄρτος means bread, loaf."
            },
            {
              "text": "ἡ σοφία",
              "correct": false,
              "feedback": "Review: ὁ ἄρτος means bread, loaf."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-04-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ ἄρτος mean?",
          "choices": [
            {
              "text": "bread, loaf",
              "correct": true,
              "feedback": "Correct: ὁ ἄρτος means bread, loaf."
            },
            {
              "text": "wine",
              "correct": false,
              "feedback": "Review: ὁ ἄρτος means bread, loaf."
            },
            {
              "text": "marketplace",
              "correct": false,
              "feedback": "Review: ὁ ἄρτος means bread, loaf."
            },
            {
              "text": "wisdom",
              "correct": false,
              "feedback": "Review: ὁ ἄρτος means bread, loaf."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-05-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “wine”?",
          "choices": [
            {
              "text": "ὁ οἶνος",
              "correct": true,
              "feedback": "Correct: ὁ οἶνος means wine."
            },
            {
              "text": "ἡ ἀγορά",
              "correct": false,
              "feedback": "Review: ὁ οἶνος means wine."
            },
            {
              "text": "ἡ σοφία",
              "correct": false,
              "feedback": "Review: ὁ οἶνος means wine."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: ὁ οἶνος means wine."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-05-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ οἶνος mean?",
          "choices": [
            {
              "text": "wine",
              "correct": true,
              "feedback": "Correct: ὁ οἶνος means wine."
            },
            {
              "text": "marketplace",
              "correct": false,
              "feedback": "Review: ὁ οἶνος means wine."
            },
            {
              "text": "wisdom",
              "correct": false,
              "feedback": "Review: ὁ οἶνος means wine."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: ὁ οἶνος means wine."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-06-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “marketplace”?",
          "choices": [
            {
              "text": "ἡ ἀγορά",
              "correct": true,
              "feedback": "Correct: ἡ ἀγορά means marketplace."
            },
            {
              "text": "ἡ σοφία",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά means marketplace."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά means marketplace."
            },
            {
              "text": "ἐθέλω",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά means marketplace."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-06-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ἀγορά mean?",
          "choices": [
            {
              "text": "marketplace",
              "correct": true,
              "feedback": "Correct: ἡ ἀγορά means marketplace."
            },
            {
              "text": "wisdom",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά means marketplace."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά means marketplace."
            },
            {
              "text": "wish, want (+ infinitive)",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά means marketplace."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-07-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “wisdom”?",
          "choices": [
            {
              "text": "ἡ σοφία",
              "correct": true,
              "feedback": "Correct: ἡ σοφία means wisdom."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: ἡ σοφία means wisdom."
            },
            {
              "text": "ἐθέλω",
              "correct": false,
              "feedback": "Review: ἡ σοφία means wisdom."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: ἡ σοφία means wisdom."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-07-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ σοφία mean?",
          "choices": [
            {
              "text": "wisdom",
              "correct": true,
              "feedback": "Correct: ἡ σοφία means wisdom."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: ἡ σοφία means wisdom."
            },
            {
              "text": "wish, want (+ infinitive)",
              "correct": false,
              "feedback": "Review: ἡ σοφία means wisdom."
            },
            {
              "text": "hurry",
              "correct": false,
              "feedback": "Review: ἡ σοφία means wisdom."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-08-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “friend”?",
          "choices": [
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ὁ φίλος means friend."
            },
            {
              "text": "ἐθέλω",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "ἐκτείνω",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-08-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ φίλος mean?",
          "choices": [
            {
              "text": "friend",
              "correct": true,
              "feedback": "Correct: ὁ φίλος means friend."
            },
            {
              "text": "wish, want (+ infinitive)",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "hurry",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "stretch out",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-09-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “wish, want (+ infinitive)”?",
          "choices": [
            {
              "text": "ἐθέλω",
              "correct": true,
              "feedback": "Correct: ἐθέλω means wish, want (+ infinitive)."
            },
            {
              "text": "σπεύδω",
              "correct": false,
              "feedback": "Review: ἐθέλω means wish, want (+ infinitive)."
            },
            {
              "text": "ἐκτείνω",
              "correct": false,
              "feedback": "Review: ἐθέλω means wish, want (+ infinitive)."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: ἐθέλω means wish, want (+ infinitive)."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-09-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐθέλω mean?",
          "choices": [
            {
              "text": "wish, want (+ infinitive)",
              "correct": true,
              "feedback": "Correct: ἐθέλω means wish, want (+ infinitive)."
            },
            {
              "text": "hurry",
              "correct": false,
              "feedback": "Review: ἐθέλω means wish, want (+ infinitive)."
            },
            {
              "text": "stretch out",
              "correct": false,
              "feedback": "Review: ἐθέλω means wish, want (+ infinitive)."
            },
            {
              "text": "hinder, block",
              "correct": false,
              "feedback": "Review: ἐθέλω means wish, want (+ infinitive)."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-10-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “hurry”?",
          "choices": [
            {
              "text": "σπεύδω",
              "correct": true,
              "feedback": "Correct: σπεύδω means hurry."
            },
            {
              "text": "ἐκτείνω",
              "correct": false,
              "feedback": "Review: σπεύδω means hurry."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: σπεύδω means hurry."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: σπεύδω means hurry."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-10-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does σπεύδω mean?",
          "choices": [
            {
              "text": "hurry",
              "correct": true,
              "feedback": "Correct: σπεύδω means hurry."
            },
            {
              "text": "stretch out",
              "correct": false,
              "feedback": "Review: σπεύδω means hurry."
            },
            {
              "text": "hinder, block",
              "correct": false,
              "feedback": "Review: σπεύδω means hurry."
            },
            {
              "text": "stay, wait",
              "correct": false,
              "feedback": "Review: σπεύδω means hurry."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-11-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “stretch out”?",
          "choices": [
            {
              "text": "ἐκτείνω",
              "correct": true,
              "feedback": "Correct: ἐκτείνω means stretch out."
            },
            {
              "text": "κωλύω",
              "correct": false,
              "feedback": "Review: ἐκτείνω means stretch out."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: ἐκτείνω means stretch out."
            },
            {
              "text": "γιγνώσκω",
              "correct": false,
              "feedback": "Review: ἐκτείνω means stretch out."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-11-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐκτείνω mean?",
          "choices": [
            {
              "text": "stretch out",
              "correct": true,
              "feedback": "Correct: ἐκτείνω means stretch out."
            },
            {
              "text": "hinder, block",
              "correct": false,
              "feedback": "Review: ἐκτείνω means stretch out."
            },
            {
              "text": "stay, wait",
              "correct": false,
              "feedback": "Review: ἐκτείνω means stretch out."
            },
            {
              "text": "know, recognize",
              "correct": false,
              "feedback": "Review: ἐκτείνω means stretch out."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-12-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “hinder, block”?",
          "choices": [
            {
              "text": "κωλύω",
              "correct": true,
              "feedback": "Correct: κωλύω means hinder, block."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: κωλύω means hinder, block."
            },
            {
              "text": "γιγνώσκω",
              "correct": false,
              "feedback": "Review: κωλύω means hinder, block."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: κωλύω means hinder, block."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-12-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does κωλύω mean?",
          "choices": [
            {
              "text": "hinder, block",
              "correct": true,
              "feedback": "Correct: κωλύω means hinder, block."
            },
            {
              "text": "stay, wait",
              "correct": false,
              "feedback": "Review: κωλύω means hinder, block."
            },
            {
              "text": "know, recognize",
              "correct": false,
              "feedback": "Review: κωλύω means hinder, block."
            },
            {
              "text": "learn",
              "correct": false,
              "feedback": "Review: κωλύω means hinder, block."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-13-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “stay, wait”?",
          "choices": [
            {
              "text": "μένω",
              "correct": true,
              "feedback": "Correct: μένω means stay, wait."
            },
            {
              "text": "γιγνώσκω",
              "correct": false,
              "feedback": "Review: μένω means stay, wait."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: μένω means stay, wait."
            },
            {
              "text": "λαμβάνω",
              "correct": false,
              "feedback": "Review: μένω means stay, wait."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-13-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does μένω mean?",
          "choices": [
            {
              "text": "stay, wait",
              "correct": true,
              "feedback": "Correct: μένω means stay, wait."
            },
            {
              "text": "know, recognize",
              "correct": false,
              "feedback": "Review: μένω means stay, wait."
            },
            {
              "text": "learn",
              "correct": false,
              "feedback": "Review: μένω means stay, wait."
            },
            {
              "text": "take, get",
              "correct": false,
              "feedback": "Review: μένω means stay, wait."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-14-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “know, recognize”?",
          "choices": [
            {
              "text": "γιγνώσκω",
              "correct": true,
              "feedback": "Correct: γιγνώσκω means know, recognize."
            },
            {
              "text": "μανθάνω",
              "correct": false,
              "feedback": "Review: γιγνώσκω means know, recognize."
            },
            {
              "text": "λαμβάνω",
              "correct": false,
              "feedback": "Review: γιγνώσκω means know, recognize."
            },
            {
              "text": "στενός",
              "correct": false,
              "feedback": "Review: γιγνώσκω means know, recognize."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-14-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does γιγνώσκω mean?",
          "choices": [
            {
              "text": "know, recognize",
              "correct": true,
              "feedback": "Correct: γιγνώσκω means know, recognize."
            },
            {
              "text": "learn",
              "correct": false,
              "feedback": "Review: γιγνώσκω means know, recognize."
            },
            {
              "text": "take, get",
              "correct": false,
              "feedback": "Review: γιγνώσκω means know, recognize."
            },
            {
              "text": "narrow",
              "correct": false,
              "feedback": "Review: γιγνώσκω means know, recognize."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-15-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “learn”?",
          "choices": [
            {
              "text": "μανθάνω",
              "correct": true,
              "feedback": "Correct: μανθάνω means learn."
            },
            {
              "text": "λαμβάνω",
              "correct": false,
              "feedback": "Review: μανθάνω means learn."
            },
            {
              "text": "στενός",
              "correct": false,
              "feedback": "Review: μανθάνω means learn."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: μανθάνω means learn."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-15-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does μανθάνω mean?",
          "choices": [
            {
              "text": "learn",
              "correct": true,
              "feedback": "Correct: μανθάνω means learn."
            },
            {
              "text": "take, get",
              "correct": false,
              "feedback": "Review: μανθάνω means learn."
            },
            {
              "text": "narrow",
              "correct": false,
              "feedback": "Review: μανθάνω means learn."
            },
            {
              "text": "beautiful, fine, noble",
              "correct": false,
              "feedback": "Review: μανθάνω means learn."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-16-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “take, get”?",
          "choices": [
            {
              "text": "λαμβάνω",
              "correct": true,
              "feedback": "Correct: λαμβάνω means take, get."
            },
            {
              "text": "στενός",
              "correct": false,
              "feedback": "Review: λαμβάνω means take, get."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: λαμβάνω means take, get."
            },
            {
              "text": "ἀγαθός",
              "correct": false,
              "feedback": "Review: λαμβάνω means take, get."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-16-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does λαμβάνω mean?",
          "choices": [
            {
              "text": "take, get",
              "correct": true,
              "feedback": "Correct: λαμβάνω means take, get."
            },
            {
              "text": "narrow",
              "correct": false,
              "feedback": "Review: λαμβάνω means take, get."
            },
            {
              "text": "beautiful, fine, noble",
              "correct": false,
              "feedback": "Review: λαμβάνω means take, get."
            },
            {
              "text": "good",
              "correct": false,
              "feedback": "Review: λαμβάνω means take, get."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-17-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “narrow”?",
          "choices": [
            {
              "text": "στενός",
              "correct": true,
              "feedback": "Correct: στενός means narrow."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: στενός means narrow."
            },
            {
              "text": "ἀγαθός",
              "correct": false,
              "feedback": "Review: στενός means narrow."
            },
            {
              "text": "ποῦ",
              "correct": false,
              "feedback": "Review: στενός means narrow."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-17-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does στενός mean?",
          "choices": [
            {
              "text": "narrow",
              "correct": true,
              "feedback": "Correct: στενός means narrow."
            },
            {
              "text": "beautiful, fine, noble",
              "correct": false,
              "feedback": "Review: στενός means narrow."
            },
            {
              "text": "good",
              "correct": false,
              "feedback": "Review: στενός means narrow."
            },
            {
              "text": "where?",
              "correct": false,
              "feedback": "Review: στενός means narrow."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-18-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “beautiful, fine, noble”?",
          "choices": [
            {
              "text": "καλός",
              "correct": true,
              "feedback": "Correct: καλός means beautiful, fine, noble."
            },
            {
              "text": "ἀγαθός",
              "correct": false,
              "feedback": "Review: καλός means beautiful, fine, noble."
            },
            {
              "text": "ποῦ",
              "correct": false,
              "feedback": "Review: καλός means beautiful, fine, noble."
            },
            {
              "text": "ἐκεῖ",
              "correct": false,
              "feedback": "Review: καλός means beautiful, fine, noble."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-18-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does καλός mean?",
          "choices": [
            {
              "text": "beautiful, fine, noble",
              "correct": true,
              "feedback": "Correct: καλός means beautiful, fine, noble."
            },
            {
              "text": "good",
              "correct": false,
              "feedback": "Review: καλός means beautiful, fine, noble."
            },
            {
              "text": "where?",
              "correct": false,
              "feedback": "Review: καλός means beautiful, fine, noble."
            },
            {
              "text": "there",
              "correct": false,
              "feedback": "Review: καλός means beautiful, fine, noble."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-19-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “good”?",
          "choices": [
            {
              "text": "ἀγαθός",
              "correct": true,
              "feedback": "Correct: ἀγαθός means good."
            },
            {
              "text": "ποῦ",
              "correct": false,
              "feedback": "Review: ἀγαθός means good."
            },
            {
              "text": "ἐκεῖ",
              "correct": false,
              "feedback": "Review: ἀγαθός means good."
            },
            {
              "text": "πάλιν",
              "correct": false,
              "feedback": "Review: ἀγαθός means good."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-19-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀγαθός mean?",
          "choices": [
            {
              "text": "good",
              "correct": true,
              "feedback": "Correct: ἀγαθός means good."
            },
            {
              "text": "where?",
              "correct": false,
              "feedback": "Review: ἀγαθός means good."
            },
            {
              "text": "there",
              "correct": false,
              "feedback": "Review: ἀγαθός means good."
            },
            {
              "text": "again",
              "correct": false,
              "feedback": "Review: ἀγαθός means good."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-20-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “where?”?",
          "choices": [
            {
              "text": "ποῦ",
              "correct": true,
              "feedback": "Correct: ποῦ means where?."
            },
            {
              "text": "ἐκεῖ",
              "correct": false,
              "feedback": "Review: ποῦ means where?."
            },
            {
              "text": "πάλιν",
              "correct": false,
              "feedback": "Review: ποῦ means where?."
            },
            {
              "text": "οὐκέτι",
              "correct": false,
              "feedback": "Review: ποῦ means where?."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-20-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ποῦ mean?",
          "choices": [
            {
              "text": "where?",
              "correct": true,
              "feedback": "Correct: ποῦ means where?."
            },
            {
              "text": "there",
              "correct": false,
              "feedback": "Review: ποῦ means where?."
            },
            {
              "text": "again",
              "correct": false,
              "feedback": "Review: ποῦ means where?."
            },
            {
              "text": "no longer",
              "correct": false,
              "feedback": "Review: ποῦ means where?."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-21-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “there”?",
          "choices": [
            {
              "text": "ἐκεῖ",
              "correct": true,
              "feedback": "Correct: ἐκεῖ means there."
            },
            {
              "text": "πάλιν",
              "correct": false,
              "feedback": "Review: ἐκεῖ means there."
            },
            {
              "text": "οὐκέτι",
              "correct": false,
              "feedback": "Review: ἐκεῖ means there."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: ἐκεῖ means there."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-21-greek-english",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐκεῖ mean?",
          "choices": [
            {
              "text": "there",
              "correct": true,
              "feedback": "Correct: ἐκεῖ means there."
            },
            {
              "text": "again",
              "correct": false,
              "feedback": "Review: ἐκεῖ means there."
            },
            {
              "text": "no longer",
              "correct": false,
              "feedback": "Review: ἐκεῖ means there."
            },
            {
              "text": "walk",
              "correct": false,
              "feedback": "Review: ἐκεῖ means there."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-22-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “again”?",
          "choices": [
            {
              "text": "πάλιν",
              "correct": true,
              "feedback": "Correct: πάλιν means again."
            },
            {
              "text": "οὐκέτι",
              "correct": false,
              "feedback": "Review: πάλιν means again."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: πάλιν means again."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: πάλιν means again."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-23-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “no longer”?",
          "choices": [
            {
              "text": "οὐκέτι",
              "correct": true,
              "feedback": "Correct: οὐκέτι means no longer."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: οὐκέτι means no longer."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: οὐκέτι means no longer."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: οὐκέτι means no longer."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-24-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “walk”?",
          "choices": [
            {
              "text": "βαδίζω",
              "correct": true,
              "feedback": "Correct: βαδίζω means walk."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-25-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “say, speak”?",
          "choices": [
            {
              "text": "λέγω",
              "correct": true,
              "feedback": "Correct: λέγω means say, speak."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: λέγω means say, speak."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: λέγω means say, speak."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: λέγω means say, speak."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-26-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “hear, listen to”?",
          "choices": [
            {
              "text": "ἀκούω",
              "correct": true,
              "feedback": "Correct: ἀκούω means hear, listen to."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: ἀκούω means hear, listen to."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: ἀκούω means hear, listen to."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: ἀκούω means hear, listen to."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-27-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “see, look at”?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: βλέπω means see, look at."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: βλέπω means see, look at."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: βλέπω means see, look at."
            },
            {
              "text": "ὁ στενωπός",
              "correct": false,
              "feedback": "Review: βλέπω means see, look at."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-28-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “carry, bring”?",
          "choices": [
            {
              "text": "φέρω",
              "correct": true,
              "feedback": "Correct: φέρω means carry, bring."
            },
            {
              "text": "ἔχω",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "ὁ στενωπός",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "ἡ βακτηρία",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            }
          ]
        },
        {
          "id": "lesson-5-vocab-practice-29-english-greek",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary item means “have, hold”?",
          "choices": [
            {
              "text": "ἔχω",
              "correct": true,
              "feedback": "Correct: ἔχω means have, hold."
            },
            {
              "text": "ὁ στενωπός",
              "correct": false,
              "feedback": "Review: ἔχω means have, hold."
            },
            {
              "text": "ἡ βακτηρία",
              "correct": false,
              "feedback": "Review: ἔχω means have, hold."
            },
            {
              "text": "ὁ ἔμπορος",
              "correct": false,
              "feedback": "Review: ἔχω means have, hold."
            }
          ]
        }
      ],
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Practice up to five rounds of 10. You may stop and return to the lesson at any time."
    },
    "lesson-quiz": {
      "title": "Lesson 5 Final Quiz",
      "description": "Apply the taught forms. Glossed middle verbs and full plural noun paradigms are not tested.",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "questions": [
        {
          "id": "lesson-5-word-study-5",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which is the present stem shared by μένει and μένουσιν?",
          "choices": [
            {
              "text": "μεν-",
              "correct": true,
              "feedback": "Correct. Removing the present endings leaves μεν-."
            },
            {
              "text": "μενου-",
              "correct": false,
              "feedback": "Review: Removing the present endings leaves μεν-."
            },
            {
              "text": "μενει-",
              "correct": false,
              "feedback": "Review: Removing the present endings leaves μεν-."
            },
            {
              "text": "με-",
              "correct": false,
              "feedback": "Review: Removing the present endings leaves μεν-."
            }
          ]
        },
        {
          "id": "lesson-5-word-study-6",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which pair contains forms of a single verb?",
          "choices": [
            {
              "text": "λαμβάνει / μανθάνει",
              "correct": false,
              "feedback": "Review: The present stem λαμβαν- is shared."
            },
            {
              "text": "μένει / λέγει",
              "correct": false,
              "feedback": "Review: The present stem λαμβαν- is shared."
            },
            {
              "text": "φέρει / βλέπει",
              "correct": false,
              "feedback": "Review: The present stem λαμβαν- is shared."
            },
            {
              "text": "λαμβάνει / λαμβάνειν",
              "correct": true,
              "feedback": "Correct. The present stem λαμβαν- is shared."
            }
          ]
        },
        {
          "id": "lesson-5-word-study-7",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "In στενωπός, στενωποῦ, ὁ, which form supplies the genitive?",
          "choices": [
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: The second form in this entry is the genitive singular."
            },
            {
              "text": "All three forms",
              "correct": false,
              "feedback": "Review: The second form in this entry is the genitive singular."
            },
            {
              "text": "στενωποῦ",
              "correct": true,
              "feedback": "Correct. The second form in this entry is the genitive singular."
            },
            {
              "text": "στενωπός",
              "correct": false,
              "feedback": "Review: The second form in this entry is the genitive singular."
            }
          ]
        },
        {
          "id": "lesson-5-word-study-8",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What remains unchanged in μανθάνει, μανθάνουσιν, μανθάνειν?",
          "choices": [
            {
              "text": "The mood.",
              "correct": false,
              "feedback": "Review: The endings change while the stem remains recognizable."
            },
            {
              "text": "The present stem μανθαν-.",
              "correct": true,
              "feedback": "Correct. The endings change while the stem remains recognizable."
            },
            {
              "text": "The ending.",
              "correct": false,
              "feedback": "Review: The endings change while the stem remains recognizable."
            },
            {
              "text": "The person.",
              "correct": false,
              "feedback": "Review: The endings change while the stem remains recognizable."
            }
          ]
        },
        {
          "id": "lesson-5-singular-review-5",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Translate βλέπεις.",
          "choices": [
            {
              "text": "You see.",
              "correct": true,
              "feedback": "Correct. -εις marks second-person singular."
            },
            {
              "text": "I see.",
              "correct": false,
              "feedback": "Review: -εις marks second-person singular."
            },
            {
              "text": "They see.",
              "correct": false,
              "feedback": "Review: -εις marks second-person singular."
            },
            {
              "text": "See!, addressed to several",
              "correct": false,
              "feedback": "Review: -εις marks second-person singular."
            }
          ]
        },
        {
          "id": "lesson-5-singular-review-6",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose “I want.”",
          "choices": [
            {
              "text": "ἐθέλεις",
              "correct": false,
              "feedback": "Review: -ω marks the speaker, I."
            },
            {
              "text": "ἐθέλει",
              "correct": false,
              "feedback": "Review: -ω marks the speaker, I."
            },
            {
              "text": "ἐθέλουσιν",
              "correct": false,
              "feedback": "Review: -ω marks the speaker, I."
            },
            {
              "text": "ἐθέλω",
              "correct": true,
              "feedback": "Correct. -ω marks the speaker, I."
            }
          ]
        },
        {
          "id": "lesson-5-singular-review-7",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "In ὁ Σωκράτης μένει, why does the verb end in -ει?",
          "choices": [
            {
              "text": "The verb is an infinitive.",
              "correct": false,
              "feedback": "Review: The ending agrees with the singular subject."
            },
            {
              "text": "The sentence is a command.",
              "correct": false,
              "feedback": "Review: The ending agrees with the singular subject."
            },
            {
              "text": "Socrates is a third-person singular subject.",
              "correct": true,
              "feedback": "Correct. The ending agrees with the singular subject."
            },
            {
              "text": "Socrates is a plural subject.",
              "correct": false,
              "feedback": "Review: The ending agrees with the singular subject."
            }
          ]
        },
        {
          "id": "lesson-5-singular-review-8",
          "type": "multiple-choice",
          "topic": "singular-review",
          "category": "Singular Review",
          "prompt": "Choose “she takes.”",
          "choices": [
            {
              "text": "λαμβάνουσιν",
              "correct": false,
              "feedback": "Review: Third-person singular -ει works for both he and she."
            },
            {
              "text": "λαμβάνει",
              "correct": true,
              "feedback": "Correct. Third-person singular -ει works for both he and she."
            },
            {
              "text": "λαμβάνω",
              "correct": false,
              "feedback": "Review: Third-person singular -ει works for both he and she."
            },
            {
              "text": "λαμβάνεις",
              "correct": false,
              "feedback": "Review: Third-person singular -ει works for both he and she."
            }
          ]
        },
        {
          "id": "lesson-5-third-plural-5",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third Plural",
          "prompt": "Choose “they get.”",
          "choices": [
            {
              "text": "λαμβάνουσιν",
              "correct": true,
              "feedback": "Correct. -ουσιν marks the third-person plural."
            },
            {
              "text": "λαμβάνει",
              "correct": false,
              "feedback": "Review: -ουσιν marks the third-person plural."
            },
            {
              "text": "λαμβάνεις",
              "correct": false,
              "feedback": "Review: -ουσιν marks the third-person plural."
            },
            {
              "text": "λάμβανε",
              "correct": false,
              "feedback": "Review: -ουσιν marks the third-person plural."
            }
          ]
        },
        {
          "id": "lesson-5-third-plural-6",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third Plural",
          "prompt": "Change φέρει to match οἱ ἔμποροι (the merchants).",
          "choices": [
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: Several merchants require the plural verb."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: Several merchants require the plural verb."
            },
            {
              "text": "φέρειν",
              "correct": false,
              "feedback": "Review: Several merchants require the plural verb."
            },
            {
              "text": "φέρουσιν",
              "correct": true,
              "feedback": "Correct. Several merchants require the plural verb."
            }
          ]
        },
        {
          "id": "lesson-5-third-plural-7",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third Plural",
          "prompt": "What does the final ν in μανθάνουσιν represent?",
          "choices": [
            {
              "text": "A past-tense marker.",
              "correct": false,
              "feedback": "Review: Movable nu may appear after -ουσι without changing the person."
            },
            {
              "text": "A singular subject.",
              "correct": false,
              "feedback": "Review: Movable nu may appear after -ουσι without changing the person."
            },
            {
              "text": "Movable nu.",
              "correct": true,
              "feedback": "Correct. Movable nu may appear after -ουσι without changing the person."
            },
            {
              "text": "An accusative noun ending.",
              "correct": false,
              "feedback": "Review: Movable nu may appear after -ουσι without changing the person."
            }
          ]
        },
        {
          "id": "lesson-5-third-plural-8",
          "type": "multiple-choice",
          "topic": "third-plural",
          "category": "Third Plural",
          "prompt": "Select the correctly accented “they learn.”",
          "choices": [
            {
              "text": "μανθανουσίν",
              "correct": false,
              "feedback": "Review: The regular recessive accent goes back to the antepenult: θά."
            },
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "Correct. The regular recessive accent goes back to the antepenult: θά."
            },
            {
              "text": "μάνθανουσιν",
              "correct": false,
              "feedback": "Review: The regular recessive accent goes back to the antepenult: θά."
            },
            {
              "text": "μανθανοῦσιν",
              "correct": false,
              "feedback": "Review: The regular recessive accent goes back to the antepenult: θά."
            }
          ]
        },
        {
          "id": "lesson-5-commands-5",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell one person: “Take!”",
          "choices": [
            {
              "text": "λάμβανε",
              "correct": true,
              "feedback": "Correct. The command uses -ε, not -ει or -ειν."
            },
            {
              "text": "λαμβάνει",
              "correct": false,
              "feedback": "Review: The command uses -ε, not -ει or -ειν."
            },
            {
              "text": "λαμβάνειν",
              "correct": false,
              "feedback": "Review: The command uses -ε, not -ει or -ειν."
            },
            {
              "text": "λαμβάνουσιν",
              "correct": false,
              "feedback": "Review: The command uses -ε, not -ει or -ειν."
            }
          ]
        },
        {
          "id": "lesson-5-commands-6",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Tell several people: “Bring the bread!”",
          "choices": [
            {
              "text": "φέρε τὸν ἄρτον",
              "correct": false,
              "feedback": "Review: Use φέρετε to address several people."
            },
            {
              "text": "φέρουσι τὸν ἄρτον",
              "correct": false,
              "feedback": "Review: Use φέρετε to address several people."
            },
            {
              "text": "φέρειν τὸν ἄρτον",
              "correct": false,
              "feedback": "Review: Use φέρετε to address several people."
            },
            {
              "text": "φέρετε τὸν ἄρτον",
              "correct": true,
              "feedback": "Correct. Use φέρετε to address several people."
            }
          ]
        },
        {
          "id": "lesson-5-commands-7",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Choose a negative command addressed to several people.",
          "choices": [
            {
              "text": "μὴ σπεῦδε",
              "correct": false,
              "feedback": "Review: μή and the plural imperative -ετε form this command."
            },
            {
              "text": "οὐ σπεύδει",
              "correct": false,
              "feedback": "Review: μή and the plural imperative -ετε form this command."
            },
            {
              "text": "μὴ σπεύδετε",
              "correct": true,
              "feedback": "Correct. μή and the plural imperative -ετε form this command."
            },
            {
              "text": "οὐ σπεύδουσιν",
              "correct": false,
              "feedback": "Review: μή and the plural imperative -ετε form this command."
            }
          ]
        },
        {
          "id": "lesson-5-commands-8",
          "type": "multiple-choice",
          "topic": "commands",
          "category": "Commands",
          "prompt": "Distinguish ἄκουε from ἀκούετε in the direct appeals.",
          "choices": [
            {
              "text": "Infinitive / noun.",
              "correct": false,
              "feedback": "Review: Both are commands here; the number of listeners changes."
            },
            {
              "text": "One listener / several listeners.",
              "correct": true,
              "feedback": "Correct. Both are commands here; the number of listeners changes."
            },
            {
              "text": "Past / future.",
              "correct": false,
              "feedback": "Review: Both are commands here; the number of listeners changes."
            },
            {
              "text": "They listen / I listen.",
              "correct": false,
              "feedback": "Review: Both are commands here; the number of listeners changes."
            }
          ]
        },
        {
          "id": "lesson-5-infinitives-5",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose “they want to walk.”",
          "choices": [
            {
              "text": "ἐθέλουσι βαδίζειν",
              "correct": true,
              "feedback": "Correct. The finite verb is plural; the infinitive remains βαδίζειν."
            },
            {
              "text": "ἐθέλει βαδίζειν",
              "correct": false,
              "feedback": "Review: The finite verb is plural; the infinitive remains βαδίζειν."
            },
            {
              "text": "ἐθέλουσι βάδιζε",
              "correct": false,
              "feedback": "Review: The finite verb is plural; the infinitive remains βαδίζειν."
            },
            {
              "text": "ἐθέλω βαδίζειν",
              "correct": false,
              "feedback": "Review: The finite verb is plural; the infinitive remains βαδίζειν."
            }
          ]
        },
        {
          "id": "lesson-5-infinitives-6",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Choose “to wait.”",
          "choices": [
            {
              "text": "μένε",
              "correct": false,
              "feedback": "Review: -ειν marks the present active infinitive."
            },
            {
              "text": "μένει",
              "correct": false,
              "feedback": "Review: -ειν marks the present active infinitive."
            },
            {
              "text": "μένουσιν",
              "correct": false,
              "feedback": "Review: -ειν marks the present active infinitive."
            },
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct. -ειν marks the present active infinitive."
            }
          ]
        },
        {
          "id": "lesson-5-infinitives-7",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Which word is finite in ἐθέλεις ἀκούειν?",
          "choices": [
            {
              "text": "Both words",
              "correct": false,
              "feedback": "Review: ἐθέλεις has a second-person singular ending."
            },
            {
              "text": "Neither word",
              "correct": false,
              "feedback": "Review: ἐθέλεις has a second-person singular ending."
            },
            {
              "text": "ἐθέλεις",
              "correct": true,
              "feedback": "Correct. ἐθέλεις has a second-person singular ending."
            },
            {
              "text": "ἀκούειν",
              "correct": false,
              "feedback": "Review: ἐθέλεις has a second-person singular ending."
            }
          ]
        },
        {
          "id": "lesson-5-infinitives-8",
          "type": "multiple-choice",
          "topic": "infinitives",
          "category": "Infinitives",
          "prompt": "Why is μανθάνειν accented later than μάνθανε?",
          "choices": [
            {
              "text": "The stem changes to another verb.",
              "correct": false,
              "feedback": "Review: A long ultima prevents an acute on the antepenult."
            },
            {
              "text": "Its long final -ειν prevents an antepenult accent.",
              "correct": true,
              "feedback": "Correct. A long ultima prevents an acute on the antepenult."
            },
            {
              "text": "Infinitives have no accents.",
              "correct": false,
              "feedback": "Review: A long ultima prevents an acute on the antepenult."
            },
            {
              "text": "The verb becomes plural.",
              "correct": false,
              "feedback": "Review: A long ultima prevents an acute on the antepenult."
            }
          ]
        },
        {
          "id": "lesson-5-proclitics-5",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics",
          "prompt": "Complete “she does not speak”: ___ λέγει.",
          "choices": [
            {
              "text": "οὐ",
              "correct": true,
              "feedback": "Correct. λέγει begins with a consonant."
            },
            {
              "text": "οὐκ",
              "correct": false,
              "feedback": "Review: λέγει begins with a consonant."
            },
            {
              "text": "οὐχ",
              "correct": false,
              "feedback": "Review: λέγει begins with a consonant."
            },
            {
              "text": "μή",
              "correct": false,
              "feedback": "Review: λέγει begins with a consonant."
            }
          ]
        },
        {
          "id": "lesson-5-proclitics-6",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics",
          "prompt": "Which group contains only proclitics?",
          "choices": [
            {
              "text": "τόν, τῷ, τῆς",
              "correct": false,
              "feedback": "Review: These article forms and ἐν are proclitics."
            },
            {
              "text": "μή, ποῦ, πάλιν",
              "correct": false,
              "feedback": "Review: These article forms and ἐν are proclitics."
            },
            {
              "text": "καί, δέ, γάρ",
              "correct": false,
              "feedback": "Review: These article forms and ἐν are proclitics."
            },
            {
              "text": "ὁ, ἡ, ἐν",
              "correct": true,
              "feedback": "Correct. These article forms and ἐν are proclitics."
            }
          ]
        },
        {
          "id": "lesson-5-proclitics-7",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics",
          "prompt": "Which spelling retains the correct breathing and accent?",
          "choices": [
            {
              "text": "ὅ φίλος",
              "correct": false,
              "feedback": "Review: The article has rough breathing and normally no accent."
            },
            {
              "text": "ο φίλος",
              "correct": false,
              "feedback": "Review: The article has rough breathing and normally no accent."
            },
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct. The article has rough breathing and normally no accent."
            },
            {
              "text": "ό φίλος",
              "correct": false,
              "feedback": "Review: The article has rough breathing and normally no accent."
            }
          ]
        },
        {
          "id": "lesson-5-proclitics-8",
          "type": "multiple-choice",
          "topic": "proclitics",
          "category": "Proclitics",
          "prompt": "Why is τόν accented while ὁ is not?",
          "choices": [
            {
              "text": "All Greek accents are optional.",
              "correct": false,
              "feedback": "Review: ὁ, ἡ, οἱ, and αἱ are the four proclitic article forms."
            },
            {
              "text": "Only certain article forms are proclitic.",
              "correct": true,
              "feedback": "Correct. ὁ, ἡ, οἱ, and αἱ are the four proclitic article forms."
            },
            {
              "text": "Every accusative has a circumflex.",
              "correct": false,
              "feedback": "Review: ὁ, ἡ, οἱ, and αἱ are the four proclitic article forms."
            },
            {
              "text": "ὁ is not an article.",
              "correct": false,
              "feedback": "Review: ὁ, ἡ, οἱ, and αἱ are the four proclitic article forms."
            }
          ]
        },
        {
          "id": "lesson-5-final-reading-market",
          "type": "multiple-choice",
          "topic": "reading",
          "category": "Reading",
          "prompt": "Where is Xenophon hurrying at the start of the reading?",
          "choices": [
            {
              "text": "To the marketplace.",
              "correct": true,
              "feedback": "Correct: He hurries toward the marketplace for bread."
            },
            {
              "text": "To the gymnasium.",
              "correct": false,
              "feedback": "Review: He hurries toward the marketplace for bread."
            },
            {
              "text": "To Delphi.",
              "correct": false,
              "feedback": "Review: He hurries toward the marketplace for bread."
            },
            {
              "text": "To a battlefield.",
              "correct": false,
              "feedback": "Review: He hurries toward the marketplace for bread."
            }
          ]
        },
        {
          "id": "lesson-5-final-reading-staff",
          "type": "multiple-choice",
          "topic": "reading",
          "category": "Reading",
          "prompt": "What does Socrates extend across the narrow lane?",
          "choices": [
            {
              "text": "His walking staff.",
              "correct": true,
              "feedback": "Correct: Socrates extends his staff to stop Xenophon."
            },
            {
              "text": "A scroll.",
              "correct": false,
              "feedback": "Review: Socrates extends his staff to stop Xenophon."
            },
            {
              "text": "A shield.",
              "correct": false,
              "feedback": "Review: Socrates extends his staff to stop Xenophon."
            },
            {
              "text": "A loaf of bread.",
              "correct": false,
              "feedback": "Review: Socrates extends his staff to stop Xenophon."
            }
          ]
        },
        {
          "id": "lesson-5-final-reading-seller",
          "type": "multiple-choice",
          "topic": "reading",
          "category": "Reading",
          "prompt": "Who offers Xenophon bread during the exchange?",
          "choices": [
            {
              "text": "The female bread seller.",
              "correct": true,
              "feedback": "Correct: The bread seller offers bread and joins the exchange."
            },
            {
              "text": "Proxenus.",
              "correct": false,
              "feedback": "Review: The bread seller offers bread and joins the exchange."
            },
            {
              "text": "A soldier.",
              "correct": false,
              "feedback": "Review: The bread seller offers bread and joins the exchange."
            },
            {
              "text": "A teacher.",
              "correct": false,
              "feedback": "Review: The bread seller offers bread and joins the exchange."
            }
          ]
        },
        {
          "id": "lesson-5-final-reading-question",
          "type": "multiple-choice",
          "topic": "reading",
          "category": "Reading",
          "prompt": "What deeper question does Socrates ask after asking about bread, wine, and shoes?",
          "choices": [
            {
              "text": "Where people become good and honorable.",
              "correct": true,
              "feedback": "Correct: Socrates turns a market question toward goodness."
            },
            {
              "text": "Where soldiers train.",
              "correct": false,
              "feedback": "Review: Socrates turns a market question toward goodness."
            },
            {
              "text": "Where ships are built.",
              "correct": false,
              "feedback": "Review: Socrates turns a market question toward goodness."
            },
            {
              "text": "Where horses are sold.",
              "correct": false,
              "feedback": "Review: Socrates turns a market question toward goodness."
            }
          ]
        },
        {
          "id": "lesson-5-final-reading-invitation",
          "type": "multiple-choice",
          "topic": "reading",
          "category": "Reading",
          "prompt": "How does Socrates invite Xenophon to continue?",
          "choices": [
            {
              "text": "Follow and learn.",
              "correct": true,
              "feedback": "Correct: Socrates says, “ἕπου τοίνυν καὶ μάνθανε.”"
            },
            {
              "text": "Go home and sleep.",
              "correct": false,
              "feedback": "Review: Socrates says, “ἕπου τοίνυν καὶ μάνθανε.”"
            },
            {
              "text": "Buy more wine.",
              "correct": false,
              "feedback": "Review: Socrates says, “ἕπου τοίνυν καὶ μάνθανε.”"
            },
            {
              "text": "Write a letter.",
              "correct": false,
              "feedback": "Review: Socrates says, “ἕπου τοίνυν καὶ μάνθανε.”"
            }
          ]
        },
        {
          "id": "lesson-5-final-reading-source",
          "type": "multiple-choice",
          "topic": "reading",
          "category": "Reading",
          "prompt": "Which detail is an invention of this course retelling?",
          "choices": [
            {
              "text": "The bread seller and expanded dialogue.",
              "correct": true,
              "feedback": "Correct: The introduction labels the bread seller and expanded dialogue as invented."
            },
            {
              "text": "The ancient anecdote’s narrow lane.",
              "correct": false,
              "feedback": "Review: The introduction labels the bread seller and expanded dialogue as invented."
            },
            {
              "text": "Socrates blocking the way with a staff.",
              "correct": false,
              "feedback": "Review: The introduction labels the bread seller and expanded dialogue as invented."
            },
            {
              "text": "Socrates inviting Xenophon to follow.",
              "correct": false,
              "feedback": "Review: The introduction labels the bread seller and expanded dialogue as invented."
            }
          ]
        }
      ],
      "instructions": "Answer every question. Score at least 80% to finish Lesson 5 and continue to Lesson 6.",
      "revision": "lesson-5-final-quiz-v1",
      "pointsPossible": 30
    }
  }
}$json$::jsonb;
  lesson_id_value uuid;
  old_content jsonb;
  old_version integer;
BEGIN
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug = 'lesson-5' FOR UPDATE;
  SELECT content, version INTO STRICT old_content, old_version
  FROM public.lesson_content_overrides WHERE lesson_id = lesson_id_value FOR UPDATE;
  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN
    IF old_content->'activities' IS DISTINCT FROM patch->'activities' THEN
      RAISE EXCEPTION 'Lesson 5 practice revision matches but activities differ; review before publishing';
    END IF;
    RETURN;
  END IF;
  IF old_content->>'contentRevision' IS DISTINCT FROM 'lesson-5-first-meeting-v1' OR old_version < 2 THEN
    RAISE EXCEPTION 'Lesson 5 published content changed after practice authoring; review before publishing';
  END IF;
  INSERT INTO public.lesson_content_versions (lesson_id, content, version, note)
  VALUES (lesson_id_value, old_content, old_version, 'Before five-round Lesson 5 practice and final quiz');
  UPDATE public.lesson_content_overrides
  SET content = old_content || patch, version = old_version + 1, updated_at = now()
  WHERE lesson_id = lesson_id_value;
  UPDATE public.lesson_content_blocks b
  SET content = jsonb_build_object('source', 'lesson_publish', 'kind', 'activities', 'value', patch->'activities'),
      updated_at = now()
  FROM public.lesson_segments s
  WHERE b.segment_id = s.id AND s.lesson_id = lesson_id_value
    AND b.content->>'source' = 'lesson_publish' AND b.content->>'kind' = 'activities';
END
$lesson5practice$;
COMMIT;
