-- Publish the Module 1 review, refresher, and cumulative exam.
BEGIN;
ALTER TABLE public.student_lesson_test_grades DROP CONSTRAINT IF EXISTS student_lesson_test_grades_type_check;
ALTER TABLE public.student_lesson_test_grades ADD CONSTRAINT student_lesson_test_grades_type_check CHECK (test_type IN ('lesson-test', 'module-exam'));
UPDATE public.lesson_content_overrides
SET content = content || $json${
  "activities": {
    "vocab-flashcards": {
      "title": "Lesson 12 Vocabulary Flashcards",
      "cards": [
        {
          "prompt": "πότερον",
          "answer": "whether"
        },
        {
          "prompt": "λῷον",
          "answer": "better, more advantageous"
        },
        {
          "prompt": "μένω",
          "answer": "stay, remain"
        },
        {
          "prompt": "πυνθάνομαι",
          "answer": "ask, inquire"
        },
        {
          "prompt": "κρίνω",
          "answer": "decide, judge"
        },
        {
          "prompt": "ὅπως",
          "answer": "how"
        },
        {
          "prompt": "κάλλιστα",
          "answer": "as well as possible"
        },
        {
          "prompt": "ἡ μαντεία",
          "answer": "oracular response"
        },
        {
          "prompt": "χρή",
          "answer": "one must"
        },
        {
          "prompt": "ποιέω",
          "answer": "do, make"
        },
        {
          "prompt": "κελεύω",
          "answer": "order, instruct"
        },
        {
          "prompt": "θύω",
          "answer": "sacrifice"
        },
        {
          "prompt": "πορεύομαι",
          "answer": "travel, go"
        },
        {
          "prompt": "σύν",
          "answer": "with (+ dative)"
        },
        {
          "prompt": "πρός",
          "answer": "toward (+ accusative)"
        },
        {
          "prompt": "ἡ ὁδός",
          "answer": "road, journey"
        },
        {
          "prompt": "αἱ Σάρδεις",
          "answer": "Sardis"
        },
        {
          "prompt": "ὁρμάω",
          "answer": "set out"
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 12 Vocabulary Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "threshold": 80,
      "instructions": "Practice the required words in short rounds.",
      "questions": [
        {
          "id": "lesson-12-vocab-1-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πότερον mean?",
          "choices": [
            {
              "text": "as well as possible",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            },
            {
              "text": "whether",
              "correct": true,
              "feedback": "Correct: πότερον means whether."
            },
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            },
            {
              "text": "decide, judge",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-1-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “whether”?",
          "choices": [
            {
              "text": "ἡ μαντεία",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            },
            {
              "text": "πότερον",
              "correct": true,
              "feedback": "Correct: πότερον means whether."
            },
            {
              "text": "πυνθάνομαι",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            },
            {
              "text": "ὅπως",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-2-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does λῷον mean?",
          "choices": [
            {
              "text": "how",
              "correct": false,
              "feedback": "Review: λῷον means better, more advantageous."
            },
            {
              "text": "oracular response",
              "correct": false,
              "feedback": "Review: λῷον means better, more advantageous."
            },
            {
              "text": "better, more advantageous",
              "correct": true,
              "feedback": "Correct: λῷον means better, more advantageous."
            },
            {
              "text": "ask, inquire",
              "correct": false,
              "feedback": "Review: λῷον means better, more advantageous."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-2-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “better, more advantageous”?",
          "choices": [
            {
              "text": "κάλλιστα",
              "correct": false,
              "feedback": "Review: λῷον means better, more advantageous."
            },
            {
              "text": "χρή",
              "correct": false,
              "feedback": "Review: λῷον means better, more advantageous."
            },
            {
              "text": "λῷον",
              "correct": true,
              "feedback": "Correct: λῷον means better, more advantageous."
            },
            {
              "text": "κρίνω",
              "correct": false,
              "feedback": "Review: λῷον means better, more advantageous."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-3-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does μένω mean?",
          "choices": [
            {
              "text": "decide, judge",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "as well as possible",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "one must",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "stay, remain",
              "correct": true,
              "feedback": "Correct: μένω means stay, remain."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-3-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “stay, remain”?",
          "choices": [
            {
              "text": "ὅπως",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "ἡ μαντεία",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "ποιέω",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "μένω",
              "correct": true,
              "feedback": "Correct: μένω means stay, remain."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-4-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πυνθάνομαι mean?",
          "choices": [
            {
              "text": "ask, inquire",
              "correct": true,
              "feedback": "Correct: πυνθάνομαι means ask, inquire."
            },
            {
              "text": "how",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask, inquire."
            },
            {
              "text": "oracular response",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask, inquire."
            },
            {
              "text": "do, make",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask, inquire."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-4-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “ask, inquire”?",
          "choices": [
            {
              "text": "πυνθάνομαι",
              "correct": true,
              "feedback": "Correct: πυνθάνομαι means ask, inquire."
            },
            {
              "text": "κάλλιστα",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask, inquire."
            },
            {
              "text": "χρή",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask, inquire."
            },
            {
              "text": "κελεύω",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask, inquire."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-5-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does κρίνω mean?",
          "choices": [
            {
              "text": "order, instruct",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            },
            {
              "text": "decide, judge",
              "correct": true,
              "feedback": "Correct: κρίνω means decide, judge."
            },
            {
              "text": "as well as possible",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            },
            {
              "text": "one must",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-5-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “decide, judge”?",
          "choices": [
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            },
            {
              "text": "κρίνω",
              "correct": true,
              "feedback": "Correct: κρίνω means decide, judge."
            },
            {
              "text": "ἡ μαντεία",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            },
            {
              "text": "ποιέω",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-6-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὅπως mean?",
          "choices": [
            {
              "text": "do, make",
              "correct": false,
              "feedback": "Review: ὅπως means how."
            },
            {
              "text": "sacrifice",
              "correct": false,
              "feedback": "Review: ὅπως means how."
            },
            {
              "text": "how",
              "correct": true,
              "feedback": "Correct: ὅπως means how."
            },
            {
              "text": "oracular response",
              "correct": false,
              "feedback": "Review: ὅπως means how."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-6-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “how”?",
          "choices": [
            {
              "text": "κελεύω",
              "correct": false,
              "feedback": "Review: ὅπως means how."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: ὅπως means how."
            },
            {
              "text": "ὅπως",
              "correct": true,
              "feedback": "Correct: ὅπως means how."
            },
            {
              "text": "χρή",
              "correct": false,
              "feedback": "Review: ὅπως means how."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-7-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does κάλλιστα mean?",
          "choices": [
            {
              "text": "one must",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "order, instruct",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "as well as possible",
              "correct": true,
              "feedback": "Correct: κάλλιστα means as well as possible."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-7-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “as well as possible”?",
          "choices": [
            {
              "text": "ποιέω",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "σύν",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "κάλλιστα",
              "correct": true,
              "feedback": "Correct: κάλλιστα means as well as possible."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-8-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ μαντεία mean?",
          "choices": [
            {
              "text": "oracular response",
              "correct": true,
              "feedback": "Correct: ἡ μαντεία means oracular response."
            },
            {
              "text": "do, make",
              "correct": false,
              "feedback": "Review: ἡ μαντεία means oracular response."
            },
            {
              "text": "sacrifice",
              "correct": false,
              "feedback": "Review: ἡ μαντεία means oracular response."
            },
            {
              "text": "with (+ dative)",
              "correct": false,
              "feedback": "Review: ἡ μαντεία means oracular response."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-8-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “oracular response”?",
          "choices": [
            {
              "text": "ἡ μαντεία",
              "correct": true,
              "feedback": "Correct: ἡ μαντεία means oracular response."
            },
            {
              "text": "κελεύω",
              "correct": false,
              "feedback": "Review: ἡ μαντεία means oracular response."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: ἡ μαντεία means oracular response."
            },
            {
              "text": "πρός",
              "correct": false,
              "feedback": "Review: ἡ μαντεία means oracular response."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-9-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does χρή mean?",
          "choices": [
            {
              "text": "toward (+ accusative)",
              "correct": false,
              "feedback": "Review: χρή means one must."
            },
            {
              "text": "one must",
              "correct": true,
              "feedback": "Correct: χρή means one must."
            },
            {
              "text": "order, instruct",
              "correct": false,
              "feedback": "Review: χρή means one must."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: χρή means one must."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-9-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “one must”?",
          "choices": [
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: χρή means one must."
            },
            {
              "text": "χρή",
              "correct": true,
              "feedback": "Correct: χρή means one must."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: χρή means one must."
            },
            {
              "text": "σύν",
              "correct": false,
              "feedback": "Review: χρή means one must."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-10-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ποιέω mean?",
          "choices": [
            {
              "text": "with (+ dative)",
              "correct": false,
              "feedback": "Review: ποιέω means do, make."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: ποιέω means do, make."
            },
            {
              "text": "do, make",
              "correct": true,
              "feedback": "Correct: ποιέω means do, make."
            },
            {
              "text": "sacrifice",
              "correct": false,
              "feedback": "Review: ποιέω means do, make."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-10-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “do, make”?",
          "choices": [
            {
              "text": "πρός",
              "correct": false,
              "feedback": "Review: ποιέω means do, make."
            },
            {
              "text": "πότερον",
              "correct": false,
              "feedback": "Review: ποιέω means do, make."
            },
            {
              "text": "ποιέω",
              "correct": true,
              "feedback": "Correct: ποιέω means do, make."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: ποιέω means do, make."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-11-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does κελεύω mean?",
          "choices": [
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: κελεύω means order, instruct."
            },
            {
              "text": "toward (+ accusative)",
              "correct": false,
              "feedback": "Review: κελεύω means order, instruct."
            },
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: κελεύω means order, instruct."
            },
            {
              "text": "order, instruct",
              "correct": true,
              "feedback": "Correct: κελεύω means order, instruct."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-11-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “order, instruct”?",
          "choices": [
            {
              "text": "σύν",
              "correct": false,
              "feedback": "Review: κελεύω means order, instruct."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: κελεύω means order, instruct."
            },
            {
              "text": "λῷον",
              "correct": false,
              "feedback": "Review: κελεύω means order, instruct."
            },
            {
              "text": "κελεύω",
              "correct": true,
              "feedback": "Correct: κελεύω means order, instruct."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-12-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does θύω mean?",
          "choices": [
            {
              "text": "sacrifice",
              "correct": true,
              "feedback": "Correct: θύω means sacrifice."
            },
            {
              "text": "with (+ dative)",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-12-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “sacrifice”?",
          "choices": [
            {
              "text": "θύω",
              "correct": true,
              "feedback": "Correct: θύω means sacrifice."
            },
            {
              "text": "πρός",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "πότερον",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-13-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "travel, go",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel, go."
            },
            {
              "text": "toward (+ accusative)",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-13-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “travel, go”?",
          "choices": [
            {
              "text": "πυνθάνομαι",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "πορεύομαι",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel, go."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "λῷον",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-14-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does σύν mean?",
          "choices": [
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: σύν means with (+ dative)."
            },
            {
              "text": "ask, inquire",
              "correct": false,
              "feedback": "Review: σύν means with (+ dative)."
            },
            {
              "text": "with (+ dative)",
              "correct": true,
              "feedback": "Correct: σύν means with (+ dative)."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: σύν means with (+ dative)."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-14-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “with (+ dative)”?",
          "choices": [
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: σύν means with (+ dative)."
            },
            {
              "text": "κρίνω",
              "correct": false,
              "feedback": "Review: σύν means with (+ dative)."
            },
            {
              "text": "σύν",
              "correct": true,
              "feedback": "Correct: σύν means with (+ dative)."
            },
            {
              "text": "πότερον",
              "correct": false,
              "feedback": "Review: σύν means with (+ dative)."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-15-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πρός mean?",
          "choices": [
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "decide, judge",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "toward (+ accusative)",
              "correct": true,
              "feedback": "Correct: πρός means toward (+ accusative)."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-15-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “toward (+ accusative)”?",
          "choices": [
            {
              "text": "λῷον",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "πυνθάνομαι",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "ὅπως",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "πρός",
              "correct": true,
              "feedback": "Correct: πρός means toward (+ accusative)."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-16-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ὁδός mean?",
          "choices": [
            {
              "text": "road, journey",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, journey."
            },
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "ask, inquire",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "how",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            }
          ]
        },
        {
          "id": "lesson-12-vocab-16-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which entry means “road, journey”?",
          "choices": [
            {
              "text": "ἡ ὁδός",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, journey."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "κρίνω",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "κάλλιστα",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 12 Grammar Flashcards",
      "cards": [
        {
          "prompt": "πότερον … ἢ",
          "answer": "whether … or"
        },
        {
          "prompt": "ὅπως",
          "answer": "how"
        },
        {
          "prompt": "τῷ Σωκράτει",
          "answer": "to Socrates"
        },
        {
          "prompt": "σὺν τῷ Προξένῳ",
          "answer": "with Proxenus"
        },
        {
          "prompt": "ἐν Σάρδεσι",
          "answer": "at Sardis"
        },
        {
          "prompt": "πορεύεσθαι",
          "answer": "to travel"
        },
        {
          "prompt": "μένειν",
          "answer": "to stay"
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 12 Topic Practice",
      "practiceMode": "rounds",
      "roundSize": 6,
      "instructions": "Practice this topic, then return to the reading.",
      "questions": [
        {
          "id": "lesson-12-practice-001",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What contrast does πότερον … ἢ introduce?",
          "choices": [
            {
              "text": "with … in",
              "correct": false,
              "feedback": "Review: πότερον … ἢ marks alternatives."
            },
            {
              "text": "whether … or",
              "correct": true,
              "feedback": "Correct: πότερον … ἢ marks alternatives."
            },
            {
              "text": "because … therefore",
              "correct": false,
              "feedback": "Review: πότερον … ἢ marks alternatives."
            },
            {
              "text": "from … to",
              "correct": false,
              "feedback": "Review: πότερον … ἢ marks alternatives."
            }
          ]
        },
        {
          "id": "lesson-12-practice-002",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does μένειν mean?",
          "choices": [
            {
              "text": "to ask",
              "correct": false,
              "feedback": "Review: μένειν means to stay."
            },
            {
              "text": "to sacrifice",
              "correct": false,
              "feedback": "Review: μένειν means to stay."
            },
            {
              "text": "to stay",
              "correct": true,
              "feedback": "Correct: μένειν means to stay."
            },
            {
              "text": "to travel",
              "correct": false,
              "feedback": "Review: μένειν means to stay."
            }
          ]
        },
        {
          "id": "lesson-12-practice-003",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does πορεύεσθαι mean?",
          "choices": [
            {
              "text": "to remain",
              "correct": false,
              "feedback": "Review: πορεύεσθαι means to travel."
            },
            {
              "text": "to report",
              "correct": false,
              "feedback": "Review: πορεύεσθαι means to travel."
            },
            {
              "text": "to meet",
              "correct": false,
              "feedback": "Review: πορεύεσθαι means to travel."
            },
            {
              "text": "to travel",
              "correct": true,
              "feedback": "Correct: πορεύεσθαι means to travel."
            }
          ]
        },
        {
          "id": "lesson-12-practice-004",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does κάλλιστα mean here?",
          "choices": [
            {
              "text": "as well as possible",
              "correct": true,
              "feedback": "Correct: κάλλιστα means as well as possible."
            },
            {
              "text": "much later",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "with a friend",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            },
            {
              "text": "to Athens",
              "correct": false,
              "feedback": "Review: κάλλιστα means as well as possible."
            }
          ]
        },
        {
          "id": "lesson-12-practice-005",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is ἡ μαντεία?",
          "choices": [
            {
              "text": "the army",
              "correct": false,
              "feedback": "Review: μαντεία is an oracle’s response."
            },
            {
              "text": "the oracle’s response",
              "correct": true,
              "feedback": "Correct: μαντεία is an oracle’s response."
            },
            {
              "text": "the road",
              "correct": false,
              "feedback": "Review: μαντεία is an oracle’s response."
            },
            {
              "text": "the letter",
              "correct": false,
              "feedback": "Review: μαντεία is an oracle’s response."
            }
          ]
        },
        {
          "id": "lesson-12-practice-006",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does χρὴ ποιεῖν mean?",
          "choices": [
            {
              "text": "one must remain",
              "correct": false,
              "feedback": "Review: χρὴ ποιεῖν means one must do."
            },
            {
              "text": "one must return",
              "correct": false,
              "feedback": "Review: χρὴ ποιεῖν means one must do."
            },
            {
              "text": "one must do",
              "correct": true,
              "feedback": "Correct: χρὴ ποιεῖν means one must do."
            },
            {
              "text": "one must ask",
              "correct": false,
              "feedback": "Review: χρὴ ποιεῖν means one must do."
            }
          ]
        },
        {
          "id": "lesson-12-practice-007",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ὅπως introduce?",
          "choices": [
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: ὅπως introduces how."
            },
            {
              "text": "with whom",
              "correct": false,
              "feedback": "Review: ὅπως introduces how."
            },
            {
              "text": "from where",
              "correct": false,
              "feedback": "Review: ὅπως introduces how."
            },
            {
              "text": "how",
              "correct": true,
              "feedback": "Correct: ὅπως introduces how."
            }
          ]
        },
        {
          "id": "lesson-12-practice-008",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does πυνθάνομαι mean?",
          "choices": [
            {
              "text": "I ask or inquire",
              "correct": true,
              "feedback": "Correct: πυνθάνομαι means ask or inquire."
            },
            {
              "text": "I travel",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask or inquire."
            },
            {
              "text": "I sacrifice",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask or inquire."
            },
            {
              "text": "I stay",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means ask or inquire."
            }
          ]
        },
        {
          "id": "lesson-12-practice-009",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "Which question should Xenophon have asked first?",
          "choices": [
            {
              "text": "where to meet Proxenus",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            },
            {
              "text": "whether to go or stay",
              "correct": true,
              "feedback": "Correct: Socrates faults the missing prior decision."
            },
            {
              "text": "how quickly to sail",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            },
            {
              "text": "which ship to hire",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            }
          ]
        },
        {
          "id": "lesson-12-practice-010",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "What had Xenophon already decided?",
          "choices": [
            {
              "text": "to return from Sardis",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            },
            {
              "text": "to refuse Proxenus",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            },
            {
              "text": "to go",
              "correct": true,
              "feedback": "Correct: He had already decided to go."
            },
            {
              "text": "to stay",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            }
          ]
        },
        {
          "id": "lesson-12-practice-011",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "Which pair names the alternatives?",
          "choices": [
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "πορεύεσθαι ἢ μένειν",
              "correct": true,
              "feedback": "Correct: The infinitives mean to travel or to stay."
            }
          ]
        },
        {
          "id": "lesson-12-practice-012",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "What did his actual question ask?",
          "choices": [
            {
              "text": "how to travel best",
              "correct": true,
              "feedback": "Correct: He asked how to make the journey best."
            },
            {
              "text": "whether to stay in Athens",
              "correct": false,
              "feedback": "Review: He asked how to make the journey best."
            },
            {
              "text": "who wrote the letter",
              "correct": false,
              "feedback": "Review: He asked how to make the journey best."
            },
            {
              "text": "why Cyrus was king",
              "correct": false,
              "feedback": "Review: He asked how to make the journey best."
            }
          ]
        },
        {
          "id": "lesson-12-practice-013",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "Which word means “whether”?",
          "choices": [
            {
              "text": "ἐν",
              "correct": false,
              "feedback": "Review: πότερον opens the choice."
            },
            {
              "text": "πότερον",
              "correct": true,
              "feedback": "Correct: πότερον opens the choice."
            },
            {
              "text": "ὅπως",
              "correct": false,
              "feedback": "Review: πότερον opens the choice."
            },
            {
              "text": "σύν",
              "correct": false,
              "feedback": "Review: πότερον opens the choice."
            }
          ]
        },
        {
          "id": "lesson-12-practice-014",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "Which word means “how”?",
          "choices": [
            {
              "text": "ἢ",
              "correct": false,
              "feedback": "Review: ὅπως asks how."
            },
            {
              "text": "οἷς",
              "correct": false,
              "feedback": "Review: ὅπως asks how."
            },
            {
              "text": "ὅπως",
              "correct": true,
              "feedback": "Correct: ὅπως asks how."
            },
            {
              "text": "πότερον",
              "correct": false,
              "feedback": "Review: ὅπως asks how."
            }
          ]
        },
        {
          "id": "lesson-12-practice-015",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does πορεύεται mean?",
          "choices": [
            {
              "text": "he is traveled",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            },
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            },
            {
              "text": "I travel",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            },
            {
              "text": "he travels",
              "correct": true,
              "feedback": "Correct: πορεύεται means he travels."
            }
          ]
        },
        {
          "id": "lesson-12-practice-016",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "I travel",
              "correct": true,
              "feedback": "Correct: -ομαι marks first singular."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            },
            {
              "text": "we travel",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            },
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            }
          ]
        },
        {
          "id": "lesson-12-practice-017",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does πορεύονται mean?",
          "choices": [
            {
              "text": "you travel",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            },
            {
              "text": "they travel",
              "correct": true,
              "feedback": "Correct: -ονται marks third plural."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            },
            {
              "text": "I travel",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            }
          ]
        },
        {
          "id": "lesson-12-practice-018",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does ἐπυνθάνετο mean in the gloss?",
          "choices": [
            {
              "text": "they asked",
              "correct": false,
              "feedback": "Review: The past middle has active meaning."
            },
            {
              "text": "I inquire",
              "correct": false,
              "feedback": "Review: The past middle has active meaning."
            },
            {
              "text": "he was asking",
              "correct": true,
              "feedback": "Correct: The past middle has active meaning."
            },
            {
              "text": "he was asked",
              "correct": false,
              "feedback": "Review: The past middle has active meaning."
            }
          ]
        },
        {
          "id": "lesson-12-practice-019",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does ἤρου mean in the gloss?",
          "choices": [
            {
              "text": "he went",
              "correct": false,
              "feedback": "Review: The source uses ἤρου for you asked."
            },
            {
              "text": "they sacrificed",
              "correct": false,
              "feedback": "Review: The source uses ἤρου for you asked."
            },
            {
              "text": "I asked",
              "correct": false,
              "feedback": "Review: The source uses ἤρου for you asked."
            },
            {
              "text": "you asked",
              "correct": true,
              "feedback": "Correct: The source uses ἤρου for you asked."
            }
          ]
        },
        {
          "id": "lesson-12-practice-020",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "Which verb uses middle forms to mean “I inquire”?",
          "choices": [
            {
              "text": "πυνθάνομαι",
              "correct": true,
              "feedback": "Correct: πυνθάνομαι means I inquire."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means I inquire."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means I inquire."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: πυνθάνομαι means I inquire."
            }
          ]
        },
        {
          "id": "lesson-12-practice-021",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What is τῷ Σωκράτει in λέγει τὴν μαντείαν τῷ Σωκράτει?",
          "choices": [
            {
              "text": "place",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            },
            {
              "text": "recipient",
              "correct": true,
              "feedback": "Correct: Socrates receives the report."
            },
            {
              "text": "direct object",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            },
            {
              "text": "subject",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            }
          ]
        },
        {
          "id": "lesson-12-practice-022",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What does σὺν τῷ Προξένῳ mean?",
          "choices": [
            {
              "text": "from Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            },
            {
              "text": "about Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            },
            {
              "text": "with Proxenus",
              "correct": true,
              "feedback": "Correct: σύν takes a dative and means with."
            },
            {
              "text": "toward Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            }
          ]
        },
        {
          "id": "lesson-12-practice-023",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What does ἐν Σάρδεσι mean?",
          "choices": [
            {
              "text": "toward Sardis",
              "correct": false,
              "feedback": "Review: ἐν plus dative marks location."
            },
            {
              "text": "from Sardis",
              "correct": false,
              "feedback": "Review: ἐν plus dative marks location."
            },
            {
              "text": "with Sardis",
              "correct": false,
              "feedback": "Review: ἐν plus dative marks location."
            },
            {
              "text": "at Sardis",
              "correct": true,
              "feedback": "Correct: ἐν plus dative marks location."
            }
          ]
        },
        {
          "id": "lesson-12-practice-024",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What does αὐτῷ mean after λῷον εἴη?",
          "choices": [
            {
              "text": "for him",
              "correct": true,
              "feedback": "Correct: The dative shows whose interest is involved."
            },
            {
              "text": "toward him",
              "correct": false,
              "feedback": "Review: The dative shows whose interest is involved."
            },
            {
              "text": "him as object",
              "correct": false,
              "feedback": "Review: The dative shows whose interest is involved."
            },
            {
              "text": "from him",
              "correct": false,
              "feedback": "Review: The dative shows whose interest is involved."
            }
          ]
        },
        {
          "id": "lesson-12-practice-025",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "Which case follows σύν here?",
          "choices": [
            {
              "text": "nominative",
              "correct": false,
              "feedback": "Review: σύν takes the dative."
            },
            {
              "text": "dative",
              "correct": true,
              "feedback": "Correct: σύν takes the dative."
            },
            {
              "text": "accusative",
              "correct": false,
              "feedback": "Review: σύν takes the dative."
            },
            {
              "text": "genitive",
              "correct": false,
              "feedback": "Review: σύν takes the dative."
            }
          ]
        },
        {
          "id": "lesson-12-practice-026",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "Which case is Σάρδεσι?",
          "choices": [
            {
              "text": "genitive",
              "correct": false,
              "feedback": "Review: Σάρδεσι is dative plural."
            },
            {
              "text": "nominative",
              "correct": false,
              "feedback": "Review: Σάρδεσι is dative plural."
            },
            {
              "text": "dative",
              "correct": true,
              "feedback": "Correct: Σάρδεσι is dative plural."
            },
            {
              "text": "accusative",
              "correct": false,
              "feedback": "Review: Σάρδεσι is dative plural."
            }
          ]
        },
        {
          "id": "lesson-12-practice-027",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase means “to Athens”?",
          "choices": [
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            },
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            },
            {
              "text": "εἰς τὰς Ἀθήνας",
              "correct": true,
              "feedback": "Correct: εἰς with accusative marks movement to."
            }
          ]
        },
        {
          "id": "lesson-12-practice-028",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase means “toward Cyrus”?",
          "choices": [
            {
              "text": "πρὸς Κῦρον",
              "correct": true,
              "feedback": "Correct: πρός with accusative points toward."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            },
            {
              "text": "περὶ τῆς μαντείας",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            }
          ]
        },
        {
          "id": "lesson-12-practice-029",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase marks location?",
          "choices": [
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: ἐν with dative marks location."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": true,
              "feedback": "Correct: ἐν with dative marks location."
            },
            {
              "text": "εἰς τὰς Ἀθήνας",
              "correct": false,
              "feedback": "Review: ἐν with dative marks location."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: ἐν with dative marks location."
            }
          ]
        },
        {
          "id": "lesson-12-practice-030",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase marks accompaniment?",
          "choices": [
            {
              "text": "εἰς τὰς Ἀθήνας",
              "correct": false,
              "feedback": "Review: σύν means with."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: σύν means with."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": true,
              "feedback": "Correct: σύν means with."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: σύν means with."
            }
          ]
        },
        {
          "id": "lesson-12-practice-031",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which case follows εἰς?",
          "choices": [
            {
              "text": "dative",
              "correct": false,
              "feedback": "Review: εἰς takes the accusative."
            },
            {
              "text": "genitive",
              "correct": false,
              "feedback": "Review: εἰς takes the accusative."
            },
            {
              "text": "nominative",
              "correct": false,
              "feedback": "Review: εἰς takes the accusative."
            },
            {
              "text": "accusative",
              "correct": true,
              "feedback": "Correct: εἰς takes the accusative."
            }
          ]
        },
        {
          "id": "lesson-12-practice-032",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which case follows ἐν?",
          "choices": [
            {
              "text": "dative",
              "correct": true,
              "feedback": "Correct: ἐν takes the dative."
            },
            {
              "text": "accusative",
              "correct": false,
              "feedback": "Review: ἐν takes the dative."
            },
            {
              "text": "genitive",
              "correct": false,
              "feedback": "Review: ἐν takes the dative."
            },
            {
              "text": "nominative",
              "correct": false,
              "feedback": "Review: ἐν takes the dative."
            }
          ]
        },
        {
          "id": "lesson-12-practice-033",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "What is the direct object of λέγει?",
          "choices": [
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            },
            {
              "text": "τὴν μαντείαν",
              "correct": true,
              "feedback": "Correct: He reports the oracle’s response."
            },
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            }
          ]
        },
        {
          "id": "lesson-12-practice-034",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "What is the subject of λέγει?",
          "choices": [
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": true,
              "feedback": "Correct: Xenophon is the one reporting."
            },
            {
              "text": "τὴν μαντείαν",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            }
          ]
        },
        {
          "id": "lesson-12-practice-035",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "Which verb is present active?",
          "choices": [
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: λέγει is present active."
            },
            {
              "text": "πυνθάνεται",
              "correct": false,
              "feedback": "Review: λέγει is present active."
            },
            {
              "text": "ἔρχεται",
              "correct": false,
              "feedback": "Review: λέγει is present active."
            },
            {
              "text": "λέγει",
              "correct": true,
              "feedback": "Correct: λέγει is present active."
            }
          ]
        },
        {
          "id": "lesson-12-practice-036",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "Which is an active infinitive?",
          "choices": [
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct: μένειν is an active infinitive."
            },
            {
              "text": "πορεύεσθαι",
              "correct": false,
              "feedback": "Review: μένειν is an active infinitive."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: μένειν is an active infinitive."
            },
            {
              "text": "πυνθάνομαι",
              "correct": false,
              "feedback": "Review: μένειν is an active infinitive."
            }
          ]
        },
        {
          "id": "lesson-12-practice-037",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "Which is a middle infinitive?",
          "choices": [
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: πορεύεσθαι is a middle infinitive."
            },
            {
              "text": "πορεύεσθαι",
              "correct": true,
              "feedback": "Correct: πορεύεσθαι is a middle infinitive."
            },
            {
              "text": "μένειν",
              "correct": false,
              "feedback": "Review: πορεύεσθαι is a middle infinitive."
            },
            {
              "text": "λέγει",
              "correct": false,
              "feedback": "Review: πορεύεσθαι is a middle infinitive."
            }
          ]
        },
        {
          "id": "lesson-12-practice-038",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "What happened before Xenophon sailed?",
          "choices": [
            {
              "text": "the army returned home",
              "correct": false,
              "feedback": "Review: Xenophon sacrificed as instructed."
            },
            {
              "text": "Socrates went to Sardis",
              "correct": false,
              "feedback": "Review: Xenophon sacrificed as instructed."
            },
            {
              "text": "he sacrificed as directed",
              "correct": true,
              "feedback": "Correct: Xenophon sacrificed as instructed."
            },
            {
              "text": "he met Cyrus at Athens",
              "correct": false,
              "feedback": "Review: Xenophon sacrificed as instructed."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 12 Grammar Exercises",
      "description": "Required cumulative Module 1 grammar check",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-12-grammar-v1",
      "instructions": "Answer all 20 questions and score at least 80% to continue.",
      "questions": [
        {
          "id": "lesson-12-grammar-01",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "Which question should Xenophon have asked first?",
          "choices": [
            {
              "text": "where to meet Proxenus",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            },
            {
              "text": "whether to go or stay",
              "correct": true,
              "feedback": "Correct: Socrates faults the missing prior decision."
            },
            {
              "text": "how quickly to sail",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            },
            {
              "text": "which ship to hire",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-02",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "What had Xenophon already decided?",
          "choices": [
            {
              "text": "to return from Sardis",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            },
            {
              "text": "to refuse Proxenus",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            },
            {
              "text": "to go",
              "correct": true,
              "feedback": "Correct: He had already decided to go."
            },
            {
              "text": "to stay",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-03",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "Which pair names the alternatives?",
          "choices": [
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "πορεύεσθαι ἢ μένειν",
              "correct": true,
              "feedback": "Correct: The infinitives mean to travel or to stay."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-04",
          "type": "multiple-choice",
          "topic": "choice",
          "category": "Grammar",
          "prompt": "What did his actual question ask?",
          "choices": [
            {
              "text": "how to travel best",
              "correct": true,
              "feedback": "Correct: He asked how to make the journey best."
            },
            {
              "text": "whether to stay in Athens",
              "correct": false,
              "feedback": "Review: He asked how to make the journey best."
            },
            {
              "text": "who wrote the letter",
              "correct": false,
              "feedback": "Review: He asked how to make the journey best."
            },
            {
              "text": "why Cyrus was king",
              "correct": false,
              "feedback": "Review: He asked how to make the journey best."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-05",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does πορεύεται mean?",
          "choices": [
            {
              "text": "I travel",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            },
            {
              "text": "he travels",
              "correct": true,
              "feedback": "Correct: πορεύεται means he travels."
            },
            {
              "text": "he is traveled",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            },
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-06",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "we travel",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            },
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            },
            {
              "text": "I travel",
              "correct": true,
              "feedback": "Correct: -ομαι marks first singular."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-07",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does πορεύονται mean?",
          "choices": [
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            },
            {
              "text": "I travel",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            },
            {
              "text": "you travel",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            },
            {
              "text": "they travel",
              "correct": true,
              "feedback": "Correct: -ονται marks third plural."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-08",
          "type": "multiple-choice",
          "topic": "middle",
          "category": "Grammar",
          "prompt": "What does ἐπυνθάνετο mean in the gloss?",
          "choices": [
            {
              "text": "he was asking",
              "correct": true,
              "feedback": "Correct: The past middle has active meaning."
            },
            {
              "text": "he was asked",
              "correct": false,
              "feedback": "Review: The past middle has active meaning."
            },
            {
              "text": "they asked",
              "correct": false,
              "feedback": "Review: The past middle has active meaning."
            },
            {
              "text": "I inquire",
              "correct": false,
              "feedback": "Review: The past middle has active meaning."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-09",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What is τῷ Σωκράτει in λέγει τὴν μαντείαν τῷ Σωκράτει?",
          "choices": [
            {
              "text": "place",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            },
            {
              "text": "recipient",
              "correct": true,
              "feedback": "Correct: Socrates receives the report."
            },
            {
              "text": "direct object",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            },
            {
              "text": "subject",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-10",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What does σὺν τῷ Προξένῳ mean?",
          "choices": [
            {
              "text": "from Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            },
            {
              "text": "about Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            },
            {
              "text": "with Proxenus",
              "correct": true,
              "feedback": "Correct: σύν takes a dative and means with."
            },
            {
              "text": "toward Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-11",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What does ἐν Σάρδεσι mean?",
          "choices": [
            {
              "text": "toward Sardis",
              "correct": false,
              "feedback": "Review: ἐν plus dative marks location."
            },
            {
              "text": "from Sardis",
              "correct": false,
              "feedback": "Review: ἐν plus dative marks location."
            },
            {
              "text": "with Sardis",
              "correct": false,
              "feedback": "Review: ἐν plus dative marks location."
            },
            {
              "text": "at Sardis",
              "correct": true,
              "feedback": "Correct: ἐν plus dative marks location."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-12",
          "type": "multiple-choice",
          "topic": "dative",
          "category": "Grammar",
          "prompt": "What does αὐτῷ mean after λῷον εἴη?",
          "choices": [
            {
              "text": "for him",
              "correct": true,
              "feedback": "Correct: The dative shows whose interest is involved."
            },
            {
              "text": "toward him",
              "correct": false,
              "feedback": "Review: The dative shows whose interest is involved."
            },
            {
              "text": "him as object",
              "correct": false,
              "feedback": "Review: The dative shows whose interest is involved."
            },
            {
              "text": "from him",
              "correct": false,
              "feedback": "Review: The dative shows whose interest is involved."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-13",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase means “to Athens”?",
          "choices": [
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            },
            {
              "text": "εἰς τὰς Ἀθήνας",
              "correct": true,
              "feedback": "Correct: εἰς with accusative marks movement to."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-14",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase means “toward Cyrus”?",
          "choices": [
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            },
            {
              "text": "περὶ τῆς μαντείας",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": true,
              "feedback": "Correct: πρός with accusative points toward."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-15",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase marks location?",
          "choices": [
            {
              "text": "εἰς τὰς Ἀθήνας",
              "correct": false,
              "feedback": "Review: ἐν with dative marks location."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: ἐν with dative marks location."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: ἐν with dative marks location."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": true,
              "feedback": "Correct: ἐν with dative marks location."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-16",
          "type": "multiple-choice",
          "topic": "prepositions",
          "category": "Grammar",
          "prompt": "Which phrase marks accompaniment?",
          "choices": [
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": true,
              "feedback": "Correct: σύν means with."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: σύν means with."
            },
            {
              "text": "εἰς τὰς Ἀθήνας",
              "correct": false,
              "feedback": "Review: σύν means with."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: σύν means with."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-17",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "What is the direct object of λέγει?",
          "choices": [
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            },
            {
              "text": "τὴν μαντείαν",
              "correct": true,
              "feedback": "Correct: He reports the oracle’s response."
            },
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-18",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "What is the subject of λέγει?",
          "choices": [
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": true,
              "feedback": "Correct: Xenophon is the one reporting."
            },
            {
              "text": "τὴν μαντείαν",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-19",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "Which verb is present active?",
          "choices": [
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: λέγει is present active."
            },
            {
              "text": "πυνθάνεται",
              "correct": false,
              "feedback": "Review: λέγει is present active."
            },
            {
              "text": "ἔρχεται",
              "correct": false,
              "feedback": "Review: λέγει is present active."
            },
            {
              "text": "λέγει",
              "correct": true,
              "feedback": "Correct: λέγει is present active."
            }
          ]
        },
        {
          "id": "lesson-12-grammar-20",
          "type": "multiple-choice",
          "topic": "module-review",
          "category": "Grammar",
          "prompt": "Which is an active infinitive?",
          "choices": [
            {
              "text": "μένειν",
              "correct": true,
              "feedback": "Correct: μένειν is an active infinitive."
            },
            {
              "text": "πορεύεσθαι",
              "correct": false,
              "feedback": "Review: μένειν is an active infinitive."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: μένειν is an active infinitive."
            },
            {
              "text": "πυνθάνομαι",
              "correct": false,
              "feedback": "Review: μένειν is an active infinitive."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 12 Final Quiz — The Question He Did Not Ask",
      "description": "Reading, vocabulary, grammar, and the road to Sardis",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-12-final-v1",
      "pointsPossible": 30,
      "instructions": "Answer all 30 Lesson 12 questions. Score at least 80% to continue to the Module 1 Review and Exam.",
      "questions": [
        {
          "id": "lesson-12-final-01",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "To whom does Xenophon report the oracle?",
          "choices": [
            {
              "text": "Apollo",
              "correct": false,
              "feedback": "Review: He reports it to Socrates."
            },
            {
              "text": "Socrates",
              "correct": true,
              "feedback": "Correct: He reports it to Socrates."
            },
            {
              "text": "Proxenus",
              "correct": false,
              "feedback": "Review: He reports it to Socrates."
            },
            {
              "text": "Cyrus",
              "correct": false,
              "feedback": "Review: He reports it to Socrates."
            }
          ]
        },
        {
          "id": "lesson-12-final-02",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What did Socrates fault?",
          "choices": [
            {
              "text": "the number of sacrifices",
              "correct": false,
              "feedback": "Review: He faulted the unasked prior question."
            },
            {
              "text": "the words of the priestess",
              "correct": false,
              "feedback": "Review: He faulted the unasked prior question."
            },
            {
              "text": "the question Xenophon failed to ask first",
              "correct": true,
              "feedback": "Correct: He faulted the unasked prior question."
            },
            {
              "text": "the length of the road",
              "correct": false,
              "feedback": "Review: He faulted the unasked prior question."
            }
          ]
        },
        {
          "id": "lesson-12-final-03",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What choice should Xenophon have put first?",
          "choices": [
            {
              "text": "whether to bring a horse",
              "correct": false,
              "feedback": "Review: The first question was going versus staying."
            },
            {
              "text": "whether to visit Sardis first",
              "correct": false,
              "feedback": "Review: The first question was going versus staying."
            },
            {
              "text": "whether to write home",
              "correct": false,
              "feedback": "Review: The first question was going versus staying."
            },
            {
              "text": "whether to go or stay",
              "correct": true,
              "feedback": "Correct: The first question was going versus staying."
            }
          ]
        },
        {
          "id": "lesson-12-final-04",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What had Xenophon already decided?",
          "choices": [
            {
              "text": "to go",
              "correct": true,
              "feedback": "Correct: He had decided to go."
            },
            {
              "text": "to remain in Athens",
              "correct": false,
              "feedback": "Review: He had decided to go."
            },
            {
              "text": "to reject the oracle",
              "correct": false,
              "feedback": "Review: He had decided to go."
            },
            {
              "text": "to join a fleet",
              "correct": false,
              "feedback": "Review: He had decided to go."
            }
          ]
        },
        {
          "id": "lesson-12-final-05",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What did Socrates tell him after hearing the report?",
          "choices": [
            {
              "text": "bring Cyrus to Athens",
              "correct": false,
              "feedback": "Review: Socrates told him to obey the god’s instruction."
            },
            {
              "text": "do what the god instructed",
              "correct": true,
              "feedback": "Correct: Socrates told him to obey the god’s instruction."
            },
            {
              "text": "ask a second oracle",
              "correct": false,
              "feedback": "Review: Socrates told him to obey the god’s instruction."
            },
            {
              "text": "stay in Delphi",
              "correct": false,
              "feedback": "Review: Socrates told him to obey the god’s instruction."
            }
          ]
        },
        {
          "id": "lesson-12-final-06",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Where did Xenophon find Proxenus and Cyrus?",
          "choices": [
            {
              "text": "at Athens",
              "correct": false,
              "feedback": "Review: He found them at Sardis."
            },
            {
              "text": "at Eleusis",
              "correct": false,
              "feedback": "Review: He found them at Sardis."
            },
            {
              "text": "at Sardis",
              "correct": true,
              "feedback": "Correct: He found them at Sardis."
            },
            {
              "text": "at Delphi",
              "correct": false,
              "feedback": "Review: He found them at Sardis."
            }
          ]
        },
        {
          "id": "lesson-12-final-07",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does πότερον mean?",
          "choices": [
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            },
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            },
            {
              "text": "ask, inquire",
              "correct": false,
              "feedback": "Review: πότερον means whether."
            },
            {
              "text": "whether",
              "correct": true,
              "feedback": "Correct: πότερον means whether."
            }
          ]
        },
        {
          "id": "lesson-12-final-08",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does μένω mean?",
          "choices": [
            {
              "text": "stay, remain",
              "correct": true,
              "feedback": "Correct: μένω means stay, remain."
            },
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            },
            {
              "text": "ask, inquire",
              "correct": false,
              "feedback": "Review: μένω means stay, remain."
            }
          ]
        },
        {
          "id": "lesson-12-final-09",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does κρίνω mean?",
          "choices": [
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            },
            {
              "text": "decide, judge",
              "correct": true,
              "feedback": "Correct: κρίνω means decide, judge."
            },
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            },
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: κρίνω means decide, judge."
            }
          ]
        },
        {
          "id": "lesson-12-final-10",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does χρή mean?",
          "choices": [
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: χρή means one must."
            },
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: χρή means one must."
            },
            {
              "text": "one must",
              "correct": true,
              "feedback": "Correct: χρή means one must."
            },
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: χρή means one must."
            }
          ]
        },
        {
          "id": "lesson-12-final-11",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "travel, go",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel, go."
            }
          ]
        },
        {
          "id": "lesson-12-final-12",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does πρός mean?",
          "choices": [
            {
              "text": "toward (+ accusative)",
              "correct": true,
              "feedback": "Correct: πρός means toward (+ accusative)."
            },
            {
              "text": "whether",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "better, more advantageous",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            },
            {
              "text": "stay, remain",
              "correct": false,
              "feedback": "Review: πρός means toward (+ accusative)."
            }
          ]
        },
        {
          "id": "lesson-12-final-13",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which question should Xenophon have asked first?",
          "choices": [
            {
              "text": "where to meet Proxenus",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            },
            {
              "text": "whether to go or stay",
              "correct": true,
              "feedback": "Correct: Socrates faults the missing prior decision."
            },
            {
              "text": "how quickly to sail",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            },
            {
              "text": "which ship to hire",
              "correct": false,
              "feedback": "Review: Socrates faults the missing prior decision."
            }
          ]
        },
        {
          "id": "lesson-12-final-14",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What had Xenophon already decided?",
          "choices": [
            {
              "text": "to return from Sardis",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            },
            {
              "text": "to refuse Proxenus",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            },
            {
              "text": "to go",
              "correct": true,
              "feedback": "Correct: He had already decided to go."
            },
            {
              "text": "to stay",
              "correct": false,
              "feedback": "Review: He had already decided to go."
            }
          ]
        },
        {
          "id": "lesson-12-final-15",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which pair names the alternatives?",
          "choices": [
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: The infinitives mean to travel or to stay."
            },
            {
              "text": "πορεύεσθαι ἢ μένειν",
              "correct": true,
              "feedback": "Correct: The infinitives mean to travel or to stay."
            }
          ]
        },
        {
          "id": "lesson-12-final-16",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does πορεύεται mean?",
          "choices": [
            {
              "text": "he travels",
              "correct": true,
              "feedback": "Correct: πορεύεται means he travels."
            },
            {
              "text": "he is traveled",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            },
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            },
            {
              "text": "I travel",
              "correct": false,
              "feedback": "Review: πορεύεται means he travels."
            }
          ]
        },
        {
          "id": "lesson-12-final-17",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            },
            {
              "text": "I travel",
              "correct": true,
              "feedback": "Correct: -ομαι marks first singular."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            },
            {
              "text": "we travel",
              "correct": false,
              "feedback": "Review: -ομαι marks first singular."
            }
          ]
        },
        {
          "id": "lesson-12-final-18",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does πορεύονται mean?",
          "choices": [
            {
              "text": "I travel",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            },
            {
              "text": "you travel",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            },
            {
              "text": "they travel",
              "correct": true,
              "feedback": "Correct: -ονται marks third plural."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -ονται marks third plural."
            }
          ]
        },
        {
          "id": "lesson-12-final-19",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What is τῷ Σωκράτει in λέγει τὴν μαντείαν τῷ Σωκράτει?",
          "choices": [
            {
              "text": "direct object",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            },
            {
              "text": "subject",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            },
            {
              "text": "place",
              "correct": false,
              "feedback": "Review: Socrates receives the report."
            },
            {
              "text": "recipient",
              "correct": true,
              "feedback": "Correct: Socrates receives the report."
            }
          ]
        },
        {
          "id": "lesson-12-final-20",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does σὺν τῷ Προξένῳ mean?",
          "choices": [
            {
              "text": "with Proxenus",
              "correct": true,
              "feedback": "Correct: σύν takes a dative and means with."
            },
            {
              "text": "toward Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            },
            {
              "text": "from Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            },
            {
              "text": "about Proxenus",
              "correct": false,
              "feedback": "Review: σύν takes a dative and means with."
            }
          ]
        },
        {
          "id": "lesson-12-final-21",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase means “to Athens”?",
          "choices": [
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            },
            {
              "text": "εἰς τὰς Ἀθήνας",
              "correct": true,
              "feedback": "Correct: εἰς with accusative marks movement to."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            },
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: εἰς with accusative marks movement to."
            }
          ]
        },
        {
          "id": "lesson-12-final-22",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase means “toward Cyrus”?",
          "choices": [
            {
              "text": "σὺν τῷ Προξένῳ",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            },
            {
              "text": "περὶ τῆς μαντείας",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": true,
              "feedback": "Correct: πρός with accusative points toward."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: πρός with accusative points toward."
            }
          ]
        },
        {
          "id": "lesson-12-final-23",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What is the direct object of λέγει?",
          "choices": [
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            },
            {
              "text": "ἐν Σάρδεσι",
              "correct": false,
              "feedback": "Review: He reports the oracle’s response."
            },
            {
              "text": "τὴν μαντείαν",
              "correct": true,
              "feedback": "Correct: He reports the oracle’s response."
            }
          ]
        },
        {
          "id": "lesson-12-final-24",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What is the subject of λέγει?",
          "choices": [
            {
              "text": "ὁ Ξενοφῶν",
              "correct": true,
              "feedback": "Correct: Xenophon is the one reporting."
            },
            {
              "text": "τὴν μαντείαν",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            },
            {
              "text": "τῷ Σωκράτει",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: Xenophon is the one reporting."
            }
          ]
        },
        {
          "id": "lesson-12-final-25",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What journey were Proxenus and Cyrus about to begin?",
          "choices": [
            {
              "text": "a procession to Eleusis",
              "correct": false,
              "feedback": "Review: They were about to set out inland."
            },
            {
              "text": "the journey inland",
              "correct": true,
              "feedback": "Correct: They were about to set out inland."
            },
            {
              "text": "the return to Athens",
              "correct": false,
              "feedback": "Review: They were about to set out inland."
            },
            {
              "text": "a voyage to Delphi",
              "correct": false,
              "feedback": "Review: They were about to set out inland."
            }
          ]
        },
        {
          "id": "lesson-12-final-26",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Whom was Xenophon introduced to at Sardis?",
          "choices": [
            {
              "text": "Apollo",
              "correct": false,
              "feedback": "Review: He was introduced to Cyrus."
            },
            {
              "text": "Aristarchus",
              "correct": false,
              "feedback": "Review: He was introduced to Cyrus."
            },
            {
              "text": "Cyrus",
              "correct": true,
              "feedback": "Correct: He was introduced to Cyrus."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Review: He was introduced to Cyrus."
            }
          ]
        },
        {
          "id": "lesson-12-final-27",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which comes first in the source sequence?",
          "choices": [
            {
              "text": "the meeting at Sardis",
              "correct": false,
              "feedback": "Review: The report comes before the journey."
            },
            {
              "text": "the introduction to Cyrus",
              "correct": false,
              "feedback": "Review: The report comes before the journey."
            },
            {
              "text": "the inland march",
              "correct": false,
              "feedback": "Review: The report comes before the journey."
            },
            {
              "text": "the report to Socrates",
              "correct": true,
              "feedback": "Correct: The report comes before the journey."
            }
          ]
        },
        {
          "id": "lesson-12-final-28",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What does the final image point toward?",
          "choices": [
            {
              "text": "the army and inland expedition",
              "correct": true,
              "feedback": "Correct: It points toward the expedition."
            },
            {
              "text": "Xenophon’s childhood school",
              "correct": false,
              "feedback": "Review: It points toward the expedition."
            },
            {
              "text": "the procession to Eleusis",
              "correct": false,
              "feedback": "Review: It points toward the expedition."
            },
            {
              "text": "a return to the oracle",
              "correct": false,
              "feedback": "Review: It points toward the expedition."
            }
          ]
        },
        {
          "id": "lesson-12-final-29",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What did Xenophon do before sailing?",
          "choices": [
            {
              "text": "asked whether to stay",
              "correct": false,
              "feedback": "Review: He sacrificed according to the god’s direction."
            },
            {
              "text": "sacrificed as directed",
              "correct": true,
              "feedback": "Correct: He sacrificed according to the god’s direction."
            },
            {
              "text": "met Cyrus in Athens",
              "correct": false,
              "feedback": "Review: He sacrificed according to the god’s direction."
            },
            {
              "text": "became a general",
              "correct": false,
              "feedback": "Review: He sacrificed according to the god’s direction."
            }
          ]
        },
        {
          "id": "lesson-12-final-30",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which detail is reported at the end of Anabasis 3.1.8?",
          "choices": [
            {
              "text": "Apollo names Cyrus king",
              "correct": false,
              "feedback": "Review: Xenophon reaches Sardis and meets them."
            },
            {
              "text": "the army reaches the sea",
              "correct": false,
              "feedback": "Review: Xenophon reaches Sardis and meets them."
            },
            {
              "text": "Xenophon meets Proxenus and Cyrus at Sardis",
              "correct": true,
              "feedback": "Correct: Xenophon reaches Sardis and meets them."
            },
            {
              "text": "Socrates accompanies the army",
              "correct": false,
              "feedback": "Review: Xenophon reaches Sardis and meets them."
            }
          ]
        }
      ]
    },
    "module-review-practice": {
      "title": "Module 1 Refresher Exercises",
      "description": "Ungraded practice across every lesson",
      "requireAllAnswers": true,
      "instructions": "Answer all 24 questions, then read the explanations. Repeat whenever you want.",
      "questions": [
        {
          "id": "module-1-practice-l1-5",
          "type": "multiple-choice",
          "category": "Lesson 1",
          "sourceLesson": 1,
          "prompt": "What case is τὸν ἵππον in ὁ Ξενοφῶν τὸν ἵππον θεραπεύει?",
          "explanation": "τὸν ἵππον is accusative because the horse receives the action.",
          "choices": [
            {
              "text": "accusative",
              "correct": true,
              "feedback": "Correct answer: accusative. τὸν ἵππον is accusative because the horse receives the action."
            },
            {
              "text": "nominative",
              "correct": false,
              "feedback": "Correct answer: accusative. τὸν ἵππον is accusative because the horse receives the action."
            },
            {
              "text": "genitive",
              "correct": false,
              "feedback": "Correct answer: accusative. τὸν ἵππον is accusative because the horse receives the action."
            },
            {
              "text": "vocative",
              "correct": false,
              "feedback": "Correct answer: accusative. τὸν ἵππον is accusative because the horse receives the action."
            }
          ]
        },
        {
          "id": "module-1-practice-l1-11",
          "type": "multiple-choice",
          "category": "Lesson 1",
          "sourceLesson": 1,
          "prompt": "What does Xenophon bring to the horse?",
          "explanation": "The reading says Xenophon brings water and grain to the horse.",
          "choices": [
            {
              "text": "a book and a tablet",
              "correct": false,
              "feedback": "Correct answer: water and grain. The reading says Xenophon brings water and grain to the horse."
            },
            {
              "text": "a shield and a spear",
              "correct": false,
              "feedback": "Correct answer: water and grain. The reading says Xenophon brings water and grain to the horse."
            },
            {
              "text": "water and grain",
              "correct": true,
              "feedback": "Correct answer: water and grain. The reading says Xenophon brings water and grain to the horse."
            },
            {
              "text": "bread and wine",
              "correct": false,
              "feedback": "Correct answer: water and grain. The reading says Xenophon brings water and grain to the horse."
            }
          ]
        },
        {
          "id": "module-1-practice-l2-3",
          "type": "multiple-choice",
          "category": "Lesson 2",
          "sourceLesson": 2,
          "prompt": "τίς ἐν τῇ οἰκίᾳ μένει; (Who remains in the house?)",
          "explanation": "The mother remains in the house.",
          "choices": [
            {
              "text": "ἡ μήτηρ",
              "correct": true,
              "feedback": "Correct answer: ἡ μήτηρ. The mother remains in the house."
            },
            {
              "text": "ὁ πατήρ",
              "correct": false,
              "feedback": "Correct answer: ἡ μήτηρ. The mother remains in the house."
            },
            {
              "text": "ὁ ἵππος",
              "correct": false,
              "feedback": "Correct answer: ἡ μήτηρ. The mother remains in the house."
            }
          ]
        },
        {
          "id": "module-1-practice-l2-5",
          "type": "multiple-choice",
          "category": "Lesson 2",
          "sourceLesson": 2,
          "prompt": "μετὰ τίνος ὁ Ξενοφῶν εἰς τὸν ἀγρὸν βαδίζει; (With whom does Xenophon walk to the field?)",
          "explanation": "He walks with his father.",
          "choices": [
            {
              "text": "μετὰ τοῦ πατρός",
              "correct": true,
              "feedback": "Correct answer: μετὰ τοῦ πατρός. He walks with his father."
            },
            {
              "text": "μετὰ τὸ ἔργον",
              "correct": false,
              "feedback": "Correct answer: μετὰ τοῦ πατρός. He walks with his father."
            },
            {
              "text": "μετὰ τῆς μητρός",
              "correct": false,
              "feedback": "Correct answer: μετὰ τοῦ πατρός. He walks with his father."
            }
          ]
        },
        {
          "id": "module-1-practice-l3-10",
          "type": "multiple-choice",
          "category": "Lesson 3",
          "sourceLesson": 3,
          "prompt": "Complete: ὁ Ξενοφῶν βούλεται ___.",
          "explanation": "βούλεται takes the infinitive.",
          "choices": [
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Correct answer: μανθάνειν. βούλεται takes the infinitive."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "Correct answer: μανθάνειν. βούλεται takes the infinitive."
            },
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "Correct answer: μανθάνειν. βούλεται takes the infinitive."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "Correct answer: μανθάνειν. βούλεται takes the infinitive."
            }
          ]
        },
        {
          "id": "module-1-practice-l3-17",
          "type": "multiple-choice",
          "category": "Lesson 3",
          "sourceLesson": 3,
          "prompt": "Choose the correct demonstrative: ___ ἡ δούλη.",
          "explanation": "δούλη is feminine.",
          "choices": [
            {
              "text": "οὗτος",
              "correct": false,
              "feedback": "Correct answer: αὕτη. δούλη is feminine."
            },
            {
              "text": "αὕτη",
              "correct": true,
              "feedback": "Correct answer: αὕτη. δούλη is feminine."
            },
            {
              "text": "τοῦτο",
              "correct": false,
              "feedback": "Correct answer: αὕτη. δούλη is feminine."
            },
            {
              "text": "οὗτοι",
              "correct": false,
              "feedback": "Correct answer: αὕτη. δούλη is feminine."
            }
          ]
        },
        {
          "id": "module-1-practice-l4-7",
          "type": "multiple-choice",
          "category": "Lesson 4",
          "sourceLesson": 4,
          "prompt": "Which phrase means “of the spear”?",
          "explanation": "The genitive singular is τῆς λόγχης.",
          "choices": [
            {
              "text": "τῇ λόγχῃ",
              "correct": false,
              "feedback": "Correct answer: τῆς λόγχης. The genitive singular is τῆς λόγχης."
            },
            {
              "text": "ἡ λόγχη",
              "correct": false,
              "feedback": "Correct answer: τῆς λόγχης. The genitive singular is τῆς λόγχης."
            },
            {
              "text": "τῆς λόγχης",
              "correct": true,
              "feedback": "Correct answer: τῆς λόγχης. The genitive singular is τῆς λόγχης."
            },
            {
              "text": "τὴν λόγχην",
              "correct": false,
              "feedback": "Correct answer: τῆς λόγχης. The genitive singular is τῆς λόγχης."
            }
          ]
        },
        {
          "id": "module-1-practice-l4-11",
          "type": "multiple-choice",
          "category": "Lesson 4",
          "sourceLesson": 4,
          "prompt": "In ὁ Γρύλλος τὸν ἵππον ἄγει, what does τὸν ἵππον do?",
          "explanation": "The accusative marks the horse as the direct object.",
          "choices": [
            {
              "text": "Names the owner of Gryllus.",
              "correct": false,
              "feedback": "Correct answer: Names the direct object being led. The accusative marks the horse as the direct object."
            },
            {
              "text": "Addresses the horse directly.",
              "correct": false,
              "feedback": "Correct answer: Names the direct object being led. The accusative marks the horse as the direct object."
            },
            {
              "text": "Names the direct object being led.",
              "correct": true,
              "feedback": "Correct answer: Names the direct object being led. The accusative marks the horse as the direct object."
            },
            {
              "text": "Names the person doing the leading.",
              "correct": false,
              "feedback": "Correct answer: Names the direct object being led. The accusative marks the horse as the direct object."
            }
          ]
        },
        {
          "id": "module-1-practice-l5-13",
          "type": "multiple-choice",
          "category": "Lesson 5",
          "sourceLesson": 5,
          "prompt": "Tell one person: “Take!”",
          "explanation": "The command uses -ε, not -ει or -ειν.",
          "choices": [
            {
              "text": "λάμβανε",
              "correct": true,
              "feedback": "Correct answer: λάμβανε. The command uses -ε, not -ει or -ειν."
            },
            {
              "text": "λαμβάνει",
              "correct": false,
              "feedback": "Correct answer: λάμβανε. The command uses -ε, not -ει or -ειν."
            },
            {
              "text": "λαμβάνειν",
              "correct": false,
              "feedback": "Correct answer: λάμβανε. The command uses -ε, not -ει or -ειν."
            },
            {
              "text": "λαμβάνουσιν",
              "correct": false,
              "feedback": "Correct answer: λάμβανε. The command uses -ε, not -ει or -ειν."
            }
          ]
        },
        {
          "id": "module-1-practice-l5-25",
          "type": "multiple-choice",
          "category": "Lesson 5",
          "sourceLesson": 5,
          "prompt": "Where is Xenophon hurrying at the start of the reading?",
          "explanation": "He hurries toward the marketplace for bread.",
          "choices": [
            {
              "text": "To the marketplace.",
              "correct": true,
              "feedback": "Correct answer: To the marketplace. He hurries toward the marketplace for bread."
            },
            {
              "text": "To the gymnasium.",
              "correct": false,
              "feedback": "Correct answer: To the marketplace. He hurries toward the marketplace for bread."
            },
            {
              "text": "To Delphi.",
              "correct": false,
              "feedback": "Correct answer: To the marketplace. He hurries toward the marketplace for bread."
            },
            {
              "text": "To a battlefield.",
              "correct": false,
              "feedback": "Correct answer: To the marketplace. He hurries toward the marketplace for bread."
            }
          ]
        },
        {
          "id": "module-1-practice-l6-5",
          "type": "multiple-choice",
          "category": "Lesson 6",
          "sourceLesson": 6,
          "prompt": "What benefit of bodily strength does Socrates name?",
          "explanation": "Socrates links sound condition to helping friends and benefiting the city.",
          "choices": [
            {
              "text": "Helping friends and the city.",
              "correct": true,
              "feedback": "Correct answer: Helping friends and the city. Socrates links sound condition to helping friends and benefiting the city."
            },
            {
              "text": "Avoiding every question.",
              "correct": false,
              "feedback": "Correct answer: Helping friends and the city. Socrates links sound condition to helping friends and benefiting the city."
            },
            {
              "text": "Winning money in the agora.",
              "correct": false,
              "feedback": "Correct answer: Helping friends and the city. Socrates links sound condition to helping friends and benefiting the city."
            },
            {
              "text": "Never needing to learn.",
              "correct": false,
              "feedback": "Correct answer: Helping friends and the city. Socrates links sound condition to helping friends and benefiting the city."
            }
          ]
        },
        {
          "id": "module-1-practice-l6-13",
          "type": "multiple-choice",
          "category": "Lesson 6",
          "sourceLesson": 6,
          "prompt": "What case is τῶν φίλων?",
          "explanation": "Genitive plural. is the correct plural form.",
          "choices": [
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct answer: Genitive plural. Genitive plural. is the correct plural form."
            },
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Correct answer: Genitive plural. Genitive plural. is the correct plural form."
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Correct answer: Genitive plural. Genitive plural. is the correct plural form."
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Correct answer: Genitive plural. Genitive plural. is the correct plural form."
            }
          ]
        },
        {
          "id": "module-1-practice-l7-7",
          "type": "multiple-choice",
          "category": "Lesson 7",
          "sourceLesson": 7,
          "prompt": "What does ἡ πομπή mean?",
          "explanation": "ἡ πομπή means procession.",
          "choices": [
            {
              "text": "sister",
              "correct": false,
              "feedback": "Correct answer: procession. ἡ πομπή means procession."
            },
            {
              "text": "earth, land",
              "correct": false,
              "feedback": "Correct answer: procession. ἡ πομπή means procession."
            },
            {
              "text": "walk",
              "correct": false,
              "feedback": "Correct answer: procession. ἡ πομπή means procession."
            },
            {
              "text": "procession",
              "correct": true,
              "feedback": "Correct answer: procession. ἡ πομπή means procession."
            }
          ]
        },
        {
          "id": "module-1-practice-l7-19",
          "type": "multiple-choice",
          "category": "Lesson 7",
          "sourceLesson": 7,
          "prompt": "Which form of πομπή is accusative singular?",
          "explanation": "τὴν πομπήν is accusative singular.",
          "choices": [
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Correct answer: τὴν πομπήν. τὴν πομπήν is accusative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Correct answer: τὴν πομπήν. τὴν πομπήν is accusative singular."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Correct answer: τὴν πομπήν. τὴν πομπήν is accusative singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": true,
              "feedback": "Correct answer: τὴν πομπήν. τὴν πομπήν is accusative singular."
            }
          ]
        },
        {
          "id": "module-1-practice-l8-4",
          "type": "multiple-choice",
          "category": "Lesson 8",
          "sourceLesson": 8,
          "prompt": "What does Melitta propose in the reconstructed conversation?",
          "explanation": "Melitta proposes tasks and quality checks.",
          "choices": [
            {
              "text": "divide the textile tasks and inspect the garments",
              "correct": true,
              "feedback": "Correct answer: divide the textile tasks and inspect the garments. Melitta proposes tasks and quality checks."
            },
            {
              "text": "leave Athens for Delphi",
              "correct": false,
              "feedback": "Correct answer: divide the textile tasks and inspect the garments. Melitta proposes tasks and quality checks."
            },
            {
              "text": "sell the loom",
              "correct": false,
              "feedback": "Correct answer: divide the textile tasks and inspect the garments. Melitta proposes tasks and quality checks."
            },
            {
              "text": "stop making clothing",
              "correct": false,
              "feedback": "Correct answer: divide the textile tasks and inspect the garments. Melitta proposes tasks and quality checks."
            }
          ]
        },
        {
          "id": "module-1-practice-l8-21",
          "type": "multiple-choice",
          "category": "Lesson 8",
          "sourceLesson": 8,
          "prompt": "Which means “she weaves well”?",
          "explanation": "καλῶς describes how she weaves.",
          "choices": [
            {
              "text": "καλοί ὑφαίνει",
              "correct": false,
              "feedback": "Correct answer: καλῶς ὑφαίνει. καλῶς describes how she weaves."
            },
            {
              "text": "καλῶς ὑφαίνει",
              "correct": true,
              "feedback": "Correct answer: καλῶς ὑφαίνει. καλῶς describes how she weaves."
            },
            {
              "text": "καλὸν ὑφαίνει",
              "correct": false,
              "feedback": "Correct answer: καλῶς ὑφαίνει. καλῶς describes how she weaves."
            },
            {
              "text": "καλὴ ὑφαίνει",
              "correct": false,
              "feedback": "Correct answer: καλῶς ὑφαίνει. καλῶς describes how she weaves."
            }
          ]
        },
        {
          "id": "module-1-practice-l9-3",
          "type": "multiple-choice",
          "category": "Lesson 9",
          "sourceLesson": 9,
          "prompt": "What does Antisthenes first emphasize?",
          "explanation": "Antisthenes points to useful help.",
          "choices": [
            {
              "text": "the size of the house",
              "correct": false,
              "feedback": "Correct answer: help that meets a need. Antisthenes points to useful help."
            },
            {
              "text": "festival offerings",
              "correct": false,
              "feedback": "Correct answer: help that meets a need. Antisthenes points to useful help."
            },
            {
              "text": "military rank",
              "correct": false,
              "feedback": "Correct answer: help that meets a need. Antisthenes points to useful help."
            },
            {
              "text": "help that meets a need",
              "correct": true,
              "feedback": "Correct answer: help that meets a need. Antisthenes points to useful help."
            }
          ]
        },
        {
          "id": "module-1-practice-l9-21",
          "type": "multiple-choice",
          "category": "Lesson 9",
          "sourceLesson": 9,
          "prompt": "What is the full form of ἀλλ᾽?",
          "explanation": "ἀλλ᾽ loses the final alpha of ἀλλά.",
          "choices": [
            {
              "text": "ἄρα",
              "correct": false,
              "feedback": "Correct answer: ἀλλά. ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἀλλά",
              "correct": true,
              "feedback": "Correct answer: ἀλλά. ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἀπό",
              "correct": false,
              "feedback": "Correct answer: ἀλλά. ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἄνευ",
              "correct": false,
              "feedback": "Correct answer: ἀλλά. ἀλλ᾽ loses the final alpha of ἀλλά."
            }
          ]
        },
        {
          "id": "module-1-practice-l10-5",
          "type": "multiple-choice",
          "category": "Lesson 10",
          "sourceLesson": 10,
          "prompt": "What does Socrates advise?",
          "explanation": "Socrates recommends Delphi.",
          "choices": [
            {
              "text": "ask the Athenian assembly to write back",
              "correct": false,
              "feedback": "Correct answer: consult Apollo at Delphi. Socrates recommends Delphi."
            },
            {
              "text": "consult Apollo at Delphi",
              "correct": true,
              "feedback": "Correct answer: consult Apollo at Delphi. Socrates recommends Delphi."
            },
            {
              "text": "leave immediately for Sardis",
              "correct": false,
              "feedback": "Correct answer: consult Apollo at Delphi. Socrates recommends Delphi."
            },
            {
              "text": "ignore the letter",
              "correct": false,
              "feedback": "Correct answer: consult Apollo at Delphi. Socrates recommends Delphi."
            }
          ]
        },
        {
          "id": "module-1-practice-l10-16",
          "type": "multiple-choice",
          "category": "Lesson 10",
          "sourceLesson": 10,
          "prompt": "What is ὁ φίλος μου?",
          "explanation": "μου means my.",
          "choices": [
            {
              "text": "my friend",
              "correct": true,
              "feedback": "Correct answer: my friend. μου means my."
            },
            {
              "text": "your friend",
              "correct": false,
              "feedback": "Correct answer: my friend. μου means my."
            },
            {
              "text": "his friend",
              "correct": false,
              "feedback": "Correct answer: my friend. μου means my."
            },
            {
              "text": "this friend",
              "correct": false,
              "feedback": "Correct answer: my friend. μου means my."
            }
          ]
        },
        {
          "id": "module-1-practice-l11-7",
          "type": "multiple-choice",
          "category": "Lesson 11",
          "sourceLesson": 11,
          "prompt": "What does πορεύομαι mean?",
          "explanation": "πορεύομαι means travel, go.",
          "choices": [
            {
              "text": "come, go",
              "correct": false,
              "feedback": "Correct answer: travel, go. πορεύομαι means travel, go."
            },
            {
              "text": "sanctuary",
              "correct": false,
              "feedback": "Correct answer: travel, go. πορεύομαι means travel, go."
            },
            {
              "text": "consider, reflect",
              "correct": false,
              "feedback": "Correct answer: travel, go. πορεύομαι means travel, go."
            },
            {
              "text": "travel, go",
              "correct": true,
              "feedback": "Correct answer: travel, go. πορεύομαι means travel, go."
            }
          ]
        },
        {
          "id": "module-1-practice-l11-21",
          "type": "multiple-choice",
          "category": "Lesson 11",
          "sourceLesson": 11,
          "prompt": "What does βούλομαι πορεύεσθαι mean?",
          "explanation": "The infinitive names the action wanted.",
          "choices": [
            {
              "text": "I am traveling",
              "correct": false,
              "feedback": "Correct answer: I want to travel. The infinitive names the action wanted."
            },
            {
              "text": "I want to travel",
              "correct": true,
              "feedback": "Correct answer: I want to travel. The infinitive names the action wanted."
            },
            {
              "text": "I travel unwillingly",
              "correct": false,
              "feedback": "Correct answer: I want to travel. The infinitive names the action wanted."
            },
            {
              "text": "he wants to arrive",
              "correct": false,
              "feedback": "Correct answer: I want to travel. The infinitive names the action wanted."
            }
          ]
        },
        {
          "id": "module-1-practice-l12-2",
          "type": "multiple-choice",
          "category": "Lesson 12",
          "sourceLesson": 12,
          "prompt": "What did Socrates fault?",
          "explanation": "He faulted the unasked prior question.",
          "choices": [
            {
              "text": "the number of sacrifices",
              "correct": false,
              "feedback": "Correct answer: the question Xenophon failed to ask first. He faulted the unasked prior question."
            },
            {
              "text": "the words of the priestess",
              "correct": false,
              "feedback": "Correct answer: the question Xenophon failed to ask first. He faulted the unasked prior question."
            },
            {
              "text": "the question Xenophon failed to ask first",
              "correct": true,
              "feedback": "Correct answer: the question Xenophon failed to ask first. He faulted the unasked prior question."
            },
            {
              "text": "the length of the road",
              "correct": false,
              "feedback": "Correct answer: the question Xenophon failed to ask first. He faulted the unasked prior question."
            }
          ]
        },
        {
          "id": "module-1-practice-l12-19",
          "type": "multiple-choice",
          "category": "Lesson 12",
          "sourceLesson": 12,
          "prompt": "What is τῷ Σωκράτει in λέγει τὴν μαντείαν τῷ Σωκράτει?",
          "explanation": "Socrates receives the report.",
          "choices": [
            {
              "text": "direct object",
              "correct": false,
              "feedback": "Correct answer: recipient. Socrates receives the report."
            },
            {
              "text": "subject",
              "correct": false,
              "feedback": "Correct answer: recipient. Socrates receives the report."
            },
            {
              "text": "place",
              "correct": false,
              "feedback": "Correct answer: recipient. Socrates receives the report."
            },
            {
              "text": "recipient",
              "correct": true,
              "feedback": "Correct answer: recipient. Socrates receives the report."
            }
          ]
        }
      ]
    },
    "module-exam": {
      "title": "Module 1 Exam · Wisdom and Socrates",
      "description": "Cumulative assessment of Lessons 1–12",
      "threshold": 70,
      "required": true,
      "requireAllAnswers": true,
      "isModuleExam": true,
      "revision": "module-1-exam-v1",
      "pointsPossible": 40,
      "instructions": "Answer all 40 questions. At least 28 correct (70%) are required for Module 2. You may retake the exam. After each attempt, every correct answer and its explanation will appear.",
      "questions": [
        {
          "id": "module-1-exam-l1-1",
          "type": "multiple-choice",
          "category": "Lesson 1",
          "sourceLesson": 1,
          "prompt": "What does θεραπεύει mean?",
          "explanation": "θεραπεύει describes how Xenophon tends the horse in the reading.",
          "choices": [
            {
              "text": "he tends or cares for",
              "correct": true,
              "feedback": "Correct answer: he tends or cares for. θεραπεύει describes how Xenophon tends the horse in the reading."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct answer: he tends or cares for. θεραπεύει describes how Xenophon tends the horse in the reading."
            },
            {
              "text": "he calls",
              "correct": false,
              "feedback": "Correct answer: he tends or cares for. θεραπεύει describes how Xenophon tends the horse in the reading."
            },
            {
              "text": "he walks",
              "correct": false,
              "feedback": "Correct answer: he tends or cares for. θεραπεύει describes how Xenophon tends the horse in the reading."
            }
          ]
        },
        {
          "id": "module-1-exam-l1-4",
          "type": "multiple-choice",
          "category": "Lesson 1",
          "sourceLesson": 1,
          "prompt": "What case is ὁ Ξενοφῶν in ὁ Ξενοφῶν τὸν ἵππον θεραπεύει?",
          "explanation": "ὁ Ξενοφῶν is the subject of θεραπεύει, so it is nominative.",
          "choices": [
            {
              "text": "accusative",
              "correct": false,
              "feedback": "Correct answer: nominative. ὁ Ξενοφῶν is the subject of θεραπεύει, so it is nominative."
            },
            {
              "text": "genitive",
              "correct": false,
              "feedback": "Correct answer: nominative. ὁ Ξενοφῶν is the subject of θεραπεύει, so it is nominative."
            },
            {
              "text": "dative",
              "correct": false,
              "feedback": "Correct answer: nominative. ὁ Ξενοφῶν is the subject of θεραπεύει, so it is nominative."
            },
            {
              "text": "nominative",
              "correct": true,
              "feedback": "Correct answer: nominative. ὁ Ξενοφῶν is the subject of θεραπεύει, so it is nominative."
            }
          ]
        },
        {
          "id": "module-1-exam-l1-12",
          "type": "multiple-choice",
          "category": "Lesson 1",
          "sourceLesson": 1,
          "prompt": "Who calls Gryllus and Xenophon to dinner?",
          "explanation": "In the reading, Xenophon’s mother calls the family to dinner.",
          "choices": [
            {
              "text": "his father",
              "correct": false,
              "feedback": "Correct answer: Xenophon’s mother. In the reading, Xenophon’s mother calls the family to dinner."
            },
            {
              "text": "the dog",
              "correct": false,
              "feedback": "Correct answer: Xenophon’s mother. In the reading, Xenophon’s mother calls the family to dinner."
            },
            {
              "text": "a teacher",
              "correct": false,
              "feedback": "Correct answer: Xenophon’s mother. In the reading, Xenophon’s mother calls the family to dinner."
            },
            {
              "text": "Xenophon’s mother",
              "correct": true,
              "feedback": "Correct answer: Xenophon’s mother. In the reading, Xenophon’s mother calls the family to dinner."
            }
          ]
        },
        {
          "id": "module-1-exam-l1-15",
          "type": "multiple-choice",
          "category": "Lesson 1",
          "sourceLesson": 1,
          "prompt": "Which claim about Xenophon’s childhood is supported by an ancient source?",
          "explanation": "A later ancient writer names Gryllus as Xenophon’s father and Erchia as his deme; the household scene is reconstructed.",
          "choices": [
            {
              "text": "We know the exact dinner conversation.",
              "correct": false,
              "feedback": "Correct answer: A later writer names Gryllus as his father and Erchia as his deme. A later ancient writer names Gryllus as Xenophon’s father and Erchia as his deme; the household scene is reconstructed."
            },
            {
              "text": "We know he personally fed this horse.",
              "correct": false,
              "feedback": "Correct answer: A later writer names Gryllus as his father and Erchia as his deme. A later ancient writer names Gryllus as Xenophon’s father and Erchia as his deme; the household scene is reconstructed."
            },
            {
              "text": "A later writer names Gryllus as his father and Erchia as his deme.",
              "correct": true,
              "feedback": "Correct answer: A later writer names Gryllus as his father and Erchia as his deme. A later ancient writer names Gryllus as Xenophon’s father and Erchia as his deme; the household scene is reconstructed."
            },
            {
              "text": "We know his family kept this dog.",
              "correct": false,
              "feedback": "Correct answer: A later writer names Gryllus as his father and Erchia as his deme. A later ancient writer names Gryllus as Xenophon’s father and Erchia as his deme; the household scene is reconstructed."
            }
          ]
        },
        {
          "id": "module-1-exam-l2-1",
          "type": "multiple-choice",
          "category": "Lesson 2",
          "sourceLesson": 2,
          "prompt": "τίς ἐστιν ὁ πατὴρ τοῦ Ξενοφῶντος; (Who is Xenophon’s father?)",
          "explanation": "The household reading names Γρύλλος as Xenophon’s father.",
          "choices": [
            {
              "text": "Γρύλλος",
              "correct": true,
              "feedback": "Correct answer: Γρύλλος. The household reading names Γρύλλος as Xenophon’s father."
            },
            {
              "text": "ὁ δοῦλος",
              "correct": false,
              "feedback": "Correct answer: Γρύλλος. The household reading names Γρύλλος as Xenophon’s father."
            },
            {
              "text": "ὁ ὄνος",
              "correct": false,
              "feedback": "Correct answer: Γρύλλος. The household reading names Γρύλλος as Xenophon’s father."
            }
          ]
        },
        {
          "id": "module-1-exam-l2-4",
          "type": "multiple-choice",
          "category": "Lesson 2",
          "sourceLesson": 2,
          "prompt": "τί αἱ δοῦλαι ὑφαίνουσιν; (What do the female servants weave?)",
          "explanation": "In the reading, the female servants weave πέπλους, garments.",
          "choices": [
            {
              "text": "πέπλους",
              "correct": true,
              "feedback": "Correct answer: πέπλους. In the reading, the female servants weave πέπλους, garments."
            },
            {
              "text": "ἄρτον",
              "correct": false,
              "feedback": "Correct answer: πέπλους. In the reading, the female servants weave πέπλους, garments."
            },
            {
              "text": "ξύλα",
              "correct": false,
              "feedback": "Correct answer: πέπλους. In the reading, the female servants weave πέπλους, garments."
            }
          ]
        },
        {
          "id": "module-1-exam-l2-9",
          "type": "multiple-choice",
          "category": "Lesson 2",
          "sourceLesson": 2,
          "prompt": "μικρά ἐστιν ἡ οἰκία τοῦ Γρύλλου; (Is Gryllus’s house small?)",
          "explanation": "The reply uses οὐκ to reject “small” and ἀλλά to say the house is beautiful.",
          "choices": [
            {
              "text": "No. μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.",
              "correct": true,
              "feedback": "Correct answer: No. μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν. The reply uses οὐκ to reject “small” and ἀλλά to say the house is beautiful."
            },
            {
              "text": "Yes. μικρά ἐστιν.",
              "correct": false,
              "feedback": "Correct answer: No. μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν. The reply uses οὐκ to reject “small” and ἀλλά to say the house is beautiful."
            },
            {
              "text": "No. ἐν τῷ ἀγρῷ ἐστιν.",
              "correct": false,
              "feedback": "Correct answer: No. μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν. The reply uses οὐκ to reject “small” and ἀλλά to say the house is beautiful."
            }
          ]
        },
        {
          "id": "module-1-exam-l2-10",
          "type": "multiple-choice",
          "category": "Lesson 2",
          "sourceLesson": 2,
          "prompt": "Which phrase shows possession with the genitive?",
          "explanation": "τοῦ Γρύλλου is genitive and tells whose house it is.",
          "choices": [
            {
              "text": "ἡ οἰκία τοῦ Γρύλλου",
              "correct": true,
              "feedback": "Correct answer: ἡ οἰκία τοῦ Γρύλλου. τοῦ Γρύλλου is genitive and tells whose house it is."
            },
            {
              "text": "ἐν τῇ οἰκίᾳ",
              "correct": false,
              "feedback": "Correct answer: ἡ οἰκία τοῦ Γρύλλου. τοῦ Γρύλλου is genitive and tells whose house it is."
            },
            {
              "text": "εἰς τὸν ἀγρόν",
              "correct": false,
              "feedback": "Correct answer: ἡ οἰκία τοῦ Γρύλλου. τοῦ Γρύλλου is genitive and tells whose house it is."
            }
          ]
        },
        {
          "id": "module-1-exam-l3-2",
          "type": "multiple-choice",
          "category": "Lesson 3",
          "sourceLesson": 3,
          "prompt": "Which verb means “they learn”?",
          "explanation": "The -ουσιν ending marks third-person plural active: “they learn.”",
          "choices": [
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Correct answer: μανθάνουσιν. The -ουσιν ending marks third-person plural active: “they learn.”"
            },
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "Correct answer: μανθάνουσιν. The -ουσιν ending marks third-person plural active: “they learn.”"
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "Correct answer: μανθάνουσιν. The -ουσιν ending marks third-person plural active: “they learn.”"
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "Correct answer: μανθάνουσιν. The -ουσιν ending marks third-person plural active: “they learn.”"
            }
          ]
        },
        {
          "id": "module-1-exam-l3-5",
          "type": "multiple-choice",
          "category": "Lesson 3",
          "sourceLesson": 3,
          "prompt": "Identify the direct object: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.",
          "explanation": "τὸν ἵππον is accusative and receives the action of θεραπεύει.",
          "choices": [
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "Correct answer: τὸν ἵππον. τὸν ἵππον is accusative and receives the action of θεραπεύει."
            },
            {
              "text": "τὸν ἵππον",
              "correct": true,
              "feedback": "Correct answer: τὸν ἵππον. τὸν ἵππον is accusative and receives the action of θεραπεύει."
            },
            {
              "text": "θεραπεύει",
              "correct": false,
              "feedback": "Correct answer: τὸν ἵππον. τὸν ἵππον is accusative and receives the action of θεραπεύει."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "Correct answer: τὸν ἵππον. τὸν ἵππον is accusative and receives the action of θεραπεύει."
            }
          ]
        },
        {
          "id": "module-1-exam-l3-9",
          "type": "multiple-choice",
          "category": "Lesson 3",
          "sourceLesson": 3,
          "prompt": "Which form means “to write”?",
          "explanation": "The ending -ειν marks the present active infinitive, “to write.”",
          "choices": [
            {
              "text": "γράφει",
              "correct": false,
              "feedback": "Correct answer: γράφειν. The ending -ειν marks the present active infinitive, “to write.”"
            },
            {
              "text": "γράφουσιν",
              "correct": false,
              "feedback": "Correct answer: γράφειν. The ending -ειν marks the present active infinitive, “to write.”"
            },
            {
              "text": "γράφειν",
              "correct": true,
              "feedback": "Correct answer: γράφειν. The ending -ειν marks the present active infinitive, “to write.”"
            },
            {
              "text": "γράφεται",
              "correct": false,
              "feedback": "Correct answer: γράφειν. The ending -ειν marks the present active infinitive, “to write.”"
            }
          ]
        },
        {
          "id": "module-1-exam-l3-19",
          "type": "multiple-choice",
          "category": "Lesson 3",
          "sourceLesson": 3,
          "prompt": "According to the reading, who takes Xenophon to school?",
          "explanation": "The παιδαγωγός is the attendant who takes Xenophon to school in the reading.",
          "choices": [
            {
              "text": "his father",
              "correct": false,
              "feedback": "Correct answer: the παιδαγωγός. The παιδαγωγός is the attendant who takes Xenophon to school in the reading."
            },
            {
              "text": "his mother",
              "correct": false,
              "feedback": "Correct answer: the παιδαγωγός. The παιδαγωγός is the attendant who takes Xenophon to school in the reading."
            },
            {
              "text": "the παιδαγωγός",
              "correct": true,
              "feedback": "Correct answer: the παιδαγωγός. The παιδαγωγός is the attendant who takes Xenophon to school in the reading."
            },
            {
              "text": "the music teacher",
              "correct": false,
              "feedback": "Correct answer: the παιδαγωγός. The παιδαγωγός is the attendant who takes Xenophon to school in the reading."
            }
          ]
        },
        {
          "id": "module-1-exam-l4-1",
          "type": "multiple-choice",
          "category": "Lesson 4",
          "sourceLesson": 4,
          "prompt": "What is Gryllus preparing to do in the reading?",
          "explanation": "Gryllus prepares his horse and equipment because he is departing for war.",
          "choices": [
            {
              "text": "Ride to war.",
              "correct": true,
              "feedback": "Correct answer: Ride to war. Gryllus prepares his horse and equipment because he is departing for war."
            },
            {
              "text": "Go to school.",
              "correct": false,
              "feedback": "Correct answer: Ride to war. Gryllus prepares his horse and equipment because he is departing for war."
            },
            {
              "text": "Sell the family house.",
              "correct": false,
              "feedback": "Correct answer: Ride to war. Gryllus prepares his horse and equipment because he is departing for war."
            },
            {
              "text": "Become a music teacher.",
              "correct": false,
              "feedback": "Correct answer: Ride to war. Gryllus prepares his horse and equipment because he is departing for war."
            }
          ]
        },
        {
          "id": "module-1-exam-l4-9",
          "type": "multiple-choice",
          "category": "Lesson 4",
          "sourceLesson": 4,
          "prompt": "Choose the correctly agreeing phrase for “to/for the beautiful horse.”",
          "explanation": "τῷ, καλῷ, and ἵππῳ all agree as masculine dative singular.",
          "choices": [
            {
              "text": "τῷ καλῷ ἵππῳ",
              "correct": true,
              "feedback": "Correct answer: τῷ καλῷ ἵππῳ. τῷ, καλῷ, and ἵππῳ all agree as masculine dative singular."
            },
            {
              "text": "τῷ καλῇ ἵππῳ",
              "correct": false,
              "feedback": "Correct answer: τῷ καλῷ ἵππῳ. τῷ, καλῷ, and ἵππῳ all agree as masculine dative singular."
            },
            {
              "text": "τοῦ καλοῦ ἵππου",
              "correct": false,
              "feedback": "Correct answer: τῷ καλῷ ἵππῳ. τῷ, καλῷ, and ἵππῳ all agree as masculine dative singular."
            },
            {
              "text": "τὸν καλὸν ἵππον",
              "correct": false,
              "feedback": "Correct answer: τῷ καλῷ ἵππῳ. τῷ, καλῷ, and ἵππῳ all agree as masculine dative singular."
            }
          ]
        },
        {
          "id": "module-1-exam-l4-17",
          "type": "multiple-choice",
          "category": "Lesson 4",
          "sourceLesson": 4,
          "prompt": "Which expense helps explain the connection between cavalry and wealth?",
          "explanation": "A cavalryman needed resources to obtain, feed, and maintain a suitable horse.",
          "choices": [
            {
              "text": "Obtaining and maintaining a suitable horse.",
              "correct": true,
              "feedback": "Correct answer: Obtaining and maintaining a suitable horse. A cavalryman needed resources to obtain, feed, and maintain a suitable horse."
            },
            {
              "text": "Purchasing a medieval title.",
              "correct": false,
              "feedback": "Correct answer: Obtaining and maintaining a suitable horse. A cavalryman needed resources to obtain, feed, and maintain a suitable horse."
            },
            {
              "text": "Paying to join the Ten Thousand as a child.",
              "correct": false,
              "feedback": "Correct answer: Obtaining and maintaining a suitable horse. A cavalryman needed resources to obtain, feed, and maintain a suitable horse."
            },
            {
              "text": "Building a private temple before every ride.",
              "correct": false,
              "feedback": "Correct answer: Obtaining and maintaining a suitable horse. A cavalryman needed resources to obtain, feed, and maintain a suitable horse."
            }
          ]
        },
        {
          "id": "module-1-exam-l4-20",
          "type": "multiple-choice",
          "category": "Lesson 4",
          "sourceLesson": 4,
          "prompt": "How should we describe young Xenophon helping Gryllus depart?",
          "explanation": "The course labels this childhood departure scene as plausible invention, not a documented event.",
          "choices": [
            {
              "text": "A scene from a medieval chronicle.",
              "correct": false,
              "feedback": "Correct answer: A plausible invented scene, not a documented childhood event. The course labels this childhood departure scene as plausible invention, not a documented event."
            },
            {
              "text": "A plausible invented scene, not a documented childhood event.",
              "correct": true,
              "feedback": "Correct answer: A plausible invented scene, not a documented childhood event. The course labels this childhood departure scene as plausible invention, not a documented event."
            },
            {
              "text": "An eyewitness account written by the boy.",
              "correct": false,
              "feedback": "Correct answer: A plausible invented scene, not a documented childhood event. The course labels this childhood departure scene as plausible invention, not a documented event."
            },
            {
              "text": "Proof of every detail of Gryllus’s military service.",
              "correct": false,
              "feedback": "Correct answer: A plausible invented scene, not a documented childhood event. The course labels this childhood departure scene as plausible invention, not a documented event."
            }
          ]
        },
        {
          "id": "module-1-exam-l5-9",
          "type": "multiple-choice",
          "category": "Lesson 5",
          "sourceLesson": 5,
          "prompt": "Choose “they get.”",
          "explanation": "λαμβάνουσιν has the third-person plural ending -ουσιν.",
          "choices": [
            {
              "text": "λαμβάνουσιν",
              "correct": true,
              "feedback": "Correct answer: λαμβάνουσιν. λαμβάνουσιν has the third-person plural ending -ουσιν."
            },
            {
              "text": "λαμβάνει",
              "correct": false,
              "feedback": "Correct answer: λαμβάνουσιν. λαμβάνουσιν has the third-person plural ending -ουσιν."
            },
            {
              "text": "λαμβάνεις",
              "correct": false,
              "feedback": "Correct answer: λαμβάνουσιν. λαμβάνουσιν has the third-person plural ending -ουσιν."
            },
            {
              "text": "λάμβανε",
              "correct": false,
              "feedback": "Correct answer: λαμβάνουσιν. λαμβάνουσιν has the third-person plural ending -ουσιν."
            }
          ]
        },
        {
          "id": "module-1-exam-l5-14",
          "type": "multiple-choice",
          "category": "Lesson 5",
          "sourceLesson": 5,
          "prompt": "Tell several people: “Bring the bread!”",
          "explanation": "φέρετε is the plural imperative, while φέρε addresses one person.",
          "choices": [
            {
              "text": "φέρε τὸν ἄρτον",
              "correct": false,
              "feedback": "Correct answer: φέρετε τὸν ἄρτον. φέρετε is the plural imperative, while φέρε addresses one person."
            },
            {
              "text": "φέρουσι τὸν ἄρτον",
              "correct": false,
              "feedback": "Correct answer: φέρετε τὸν ἄρτον. φέρετε is the plural imperative, while φέρε addresses one person."
            },
            {
              "text": "φέρειν τὸν ἄρτον",
              "correct": false,
              "feedback": "Correct answer: φέρετε τὸν ἄρτον. φέρετε is the plural imperative, while φέρε addresses one person."
            },
            {
              "text": "φέρετε τὸν ἄρτον",
              "correct": true,
              "feedback": "Correct answer: φέρετε τὸν ἄρτον. φέρετε is the plural imperative, while φέρε addresses one person."
            }
          ]
        },
        {
          "id": "module-1-exam-l5-28",
          "type": "multiple-choice",
          "category": "Lesson 5",
          "sourceLesson": 5,
          "prompt": "What deeper question does Socrates ask after asking about bread, wine, and shoes?",
          "explanation": "Socrates shifts from where goods are found to where people become good and honorable.",
          "choices": [
            {
              "text": "Where people become good and honorable.",
              "correct": true,
              "feedback": "Correct answer: Where people become good and honorable. Socrates shifts from where goods are found to where people become good and honorable."
            },
            {
              "text": "Where soldiers train.",
              "correct": false,
              "feedback": "Correct answer: Where people become good and honorable. Socrates shifts from where goods are found to where people become good and honorable."
            },
            {
              "text": "Where ships are built.",
              "correct": false,
              "feedback": "Correct answer: Where people become good and honorable. Socrates shifts from where goods are found to where people become good and honorable."
            },
            {
              "text": "Where horses are sold.",
              "correct": false,
              "feedback": "Correct answer: Where people become good and honorable. Socrates shifts from where goods are found to where people become good and honorable."
            }
          ]
        },
        {
          "id": "module-1-exam-l6-3",
          "type": "multiple-choice",
          "category": "Lesson 6",
          "sourceLesson": 6,
          "prompt": "Who speaks directly to Epigenes?",
          "explanation": "In Memorabilia 3.12, Socrates addresses Epigenes; Xenophon narrates the exchange.",
          "choices": [
            {
              "text": "Clinias.",
              "correct": false,
              "feedback": "Correct answer: Socrates. In Memorabilia 3.12, Socrates addresses Epigenes; Xenophon narrates the exchange."
            },
            {
              "text": "Gryllus.",
              "correct": false,
              "feedback": "Correct answer: Socrates. In Memorabilia 3.12, Socrates addresses Epigenes; Xenophon narrates the exchange."
            },
            {
              "text": "Socrates.",
              "correct": true,
              "feedback": "Correct answer: Socrates. In Memorabilia 3.12, Socrates addresses Epigenes; Xenophon narrates the exchange."
            },
            {
              "text": "Aristarchus.",
              "correct": false,
              "feedback": "Correct answer: Socrates. In Memorabilia 3.12, Socrates addresses Epigenes; Xenophon narrates the exchange."
            }
          ]
        },
        {
          "id": "module-1-exam-l6-17",
          "type": "multiple-choice",
          "category": "Lesson 6",
          "sourceLesson": 6,
          "prompt": "Choose the accusative plural (direct object) of ὁ φίλος.",
          "explanation": "τοὺς φίλους has the article and noun in masculine accusative plural.",
          "choices": [
            {
              "text": "τοὺς φίλους",
              "correct": true,
              "feedback": "Correct answer: τοὺς φίλους. τοὺς φίλους has the article and noun in masculine accusative plural."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Correct answer: τοὺς φίλους. τοὺς φίλους has the article and noun in masculine accusative plural."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Correct answer: τοὺς φίλους. τοὺς φίλους has the article and noun in masculine accusative plural."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Correct answer: τοὺς φίλους. τοὺς φίλους has the article and noun in masculine accusative plural."
            }
          ]
        },
        {
          "id": "module-1-exam-l6-30",
          "type": "multiple-choice",
          "category": "Lesson 6",
          "sourceLesson": 6,
          "prompt": "Which statement about women and Greek athletics is supported?",
          "explanation": "The Hera races at Olympia show that opportunities for women varied by place and occasion.",
          "choices": [
            {
              "text": "All women trained with men in Athenian gymnasia.",
              "correct": false,
              "feedback": "Correct answer: Opportunities varied; young women had separate Hera races at Olympia. The Hera races at Olympia show that opportunities for women varied by place and occasion."
            },
            {
              "text": "Opportunities varied; young women had separate Hera races at Olympia.",
              "correct": true,
              "feedback": "Correct answer: Opportunities varied; young women had separate Hera races at Olympia. The Hera races at Olympia show that opportunities for women varied by place and occasion."
            },
            {
              "text": "Women never competed anywhere in Greece.",
              "correct": false,
              "feedback": "Correct answer: Opportunities varied; young women had separate Hera races at Olympia. The Hera races at Olympia show that opportunities for women varied by place and occasion."
            },
            {
              "text": "All Greek cities followed exactly the same rules.",
              "correct": false,
              "feedback": "Correct answer: Opportunities varied; young women had separate Hera races at Olympia. The Hera races at Olympia show that opportunities for women varied by place and occasion."
            }
          ]
        },
        {
          "id": "module-1-exam-l7-2",
          "type": "multiple-choice",
          "category": "Lesson 7",
          "sourceLesson": 7,
          "prompt": "Who speaks to Xenophon about her reason for joining?",
          "explanation": "Myrrhine explains her journey in the course’s reconstructed procession scene.",
          "choices": [
            {
              "text": "Gryllus",
              "correct": false,
              "feedback": "Correct answer: Myrrhine. Myrrhine explains her journey in the course’s reconstructed procession scene."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Correct answer: Myrrhine. Myrrhine explains her journey in the course’s reconstructed procession scene."
            },
            {
              "text": "Myrrhine",
              "correct": true,
              "feedback": "Correct answer: Myrrhine. Myrrhine explains her journey in the course’s reconstructed procession scene."
            },
            {
              "text": "Persephone",
              "correct": false,
              "feedback": "Correct answer: Myrrhine. Myrrhine explains her journey in the course’s reconstructed procession scene."
            }
          ]
        },
        {
          "id": "module-1-exam-l7-15",
          "type": "multiple-choice",
          "category": "Lesson 7",
          "sourceLesson": 7,
          "prompt": "Which present active form is 1st plural of βλέπω?",
          "explanation": "The -ομεν ending of βλέπομεν means “we see,” first-person plural.",
          "choices": [
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Correct answer: βλέπομεν. The -ομεν ending of βλέπομεν means “we see,” first-person plural."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Correct answer: βλέπομεν. The -ομεν ending of βλέπομεν means “we see,” first-person plural."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Correct answer: βλέπομεν. The -ομεν ending of βλέπομεν means “we see,” first-person plural."
            },
            {
              "text": "βλέπομεν",
              "correct": true,
              "feedback": "Correct answer: βλέπομεν. The -ομεν ending of βλέπομεν means “we see,” first-person plural."
            }
          ]
        },
        {
          "id": "module-1-exam-l7-28",
          "type": "multiple-choice",
          "category": "Lesson 7",
          "sourceLesson": 7,
          "prompt": "Which statement about women is accurate?",
          "explanation": "Women could take part in the Eleusinian Mysteries as initiates.",
          "choices": [
            {
              "text": "Women could participate in the Eleusinian Mysteries.",
              "correct": true,
              "feedback": "Correct answer: Women could participate in the Eleusinian Mysteries. Women could take part in the Eleusinian Mysteries as initiates."
            },
            {
              "text": "Women were always excluded.",
              "correct": false,
              "feedback": "Correct answer: Women could participate in the Eleusinian Mysteries. Women could take part in the Eleusinian Mysteries as initiates."
            },
            {
              "text": "Only priestesses could travel to Eleusis.",
              "correct": false,
              "feedback": "Correct answer: Women could participate in the Eleusinian Mysteries. Women could take part in the Eleusinian Mysteries as initiates."
            },
            {
              "text": "Women could watch but never be initiated.",
              "correct": false,
              "feedback": "Correct answer: Women could participate in the Eleusinian Mysteries. Women could take part in the Eleusinian Mysteries as initiates."
            }
          ]
        },
        {
          "id": "module-1-exam-l8-1",
          "type": "multiple-choice",
          "category": "Lesson 8",
          "sourceLesson": 8,
          "prompt": "What problem faces Aristarchus’s household?",
          "explanation": "Aristarchus has many relatives at home after conflict cuts off income from his land.",
          "choices": [
            {
              "text": "a dispute about a festival",
              "correct": false,
              "feedback": "Correct answer: many relatives and little income. Aristarchus has many relatives at home after conflict cuts off income from his land."
            },
            {
              "text": "many relatives and little income",
              "correct": true,
              "feedback": "Correct answer: many relatives and little income. Aristarchus has many relatives at home after conflict cuts off income from his land."
            },
            {
              "text": "a failed sea voyage",
              "correct": false,
              "feedback": "Correct answer: many relatives and little income. Aristarchus has many relatives at home after conflict cuts off income from his land."
            },
            {
              "text": "a lost horse",
              "correct": false,
              "feedback": "Correct answer: many relatives and little income. Aristarchus has many relatives at home after conflict cuts off income from his land."
            }
          ]
        },
        {
          "id": "module-1-exam-l8-18",
          "type": "multiple-choice",
          "category": "Lesson 8",
          "sourceLesson": 8,
          "prompt": "In τὰ καλὰ ἱμάτια, what are the gender and number?",
          "explanation": "τὰ, καλὰ, and ἱμάτια agree as neuter plural.",
          "choices": [
            {
              "text": "feminine singular",
              "correct": false,
              "feedback": "Correct answer: neuter plural. τὰ, καλὰ, and ἱμάτια agree as neuter plural."
            },
            {
              "text": "masculine plural",
              "correct": false,
              "feedback": "Correct answer: neuter plural. τὰ, καλὰ, and ἱμάτια agree as neuter plural."
            },
            {
              "text": "neuter plural",
              "correct": true,
              "feedback": "Correct answer: neuter plural. τὰ, καλὰ, and ἱμάτια agree as neuter plural."
            },
            {
              "text": "masculine singular",
              "correct": false,
              "feedback": "Correct answer: neuter plural. τὰ, καλὰ, and ἱμάτια agree as neuter plural."
            }
          ]
        },
        {
          "id": "module-1-exam-l8-27",
          "type": "multiple-choice",
          "category": "Lesson 8",
          "sourceLesson": 8,
          "prompt": "What is known about the women’s own words?",
          "explanation": "Memorabilia 2.7 describes the women’s work, but does not record their individual words.",
          "choices": [
            {
              "text": "Xenophon records every word.",
              "correct": false,
              "feedback": "Correct answer: Xenophon does not preserve their individual dialogue. Memorabilia 2.7 describes the women’s work, but does not record their individual words."
            },
            {
              "text": "Their letters survive.",
              "correct": false,
              "feedback": "Correct answer: Xenophon does not preserve their individual dialogue. Memorabilia 2.7 describes the women’s work, but does not record their individual words."
            },
            {
              "text": "They speak in the Anabasis.",
              "correct": false,
              "feedback": "Correct answer: Xenophon does not preserve their individual dialogue. Memorabilia 2.7 describes the women’s work, but does not record their individual words."
            },
            {
              "text": "Xenophon does not preserve their individual dialogue.",
              "correct": true,
              "feedback": "Correct answer: Xenophon does not preserve their individual dialogue. Memorabilia 2.7 describes the women’s work, but does not record their individual words."
            }
          ]
        },
        {
          "id": "module-1-exam-l9-1",
          "type": "multiple-choice",
          "category": "Lesson 9",
          "sourceLesson": 9,
          "prompt": "What question does Socrates ask Critobulus?",
          "explanation": "The friendship lesson draws its central question from Socrates’ exchange with Critobulus in Memorabilia 2.6.",
          "choices": [
            {
              "text": "When will a ship sail?",
              "correct": false,
              "feedback": "Correct answer: What makes a good friend? The friendship lesson draws its central question from Socrates’ exchange with Critobulus in Memorabilia 2.6."
            },
            {
              "text": "What makes a good friend?",
              "correct": true,
              "feedback": "Correct answer: What makes a good friend? The friendship lesson draws its central question from Socrates’ exchange with Critobulus in Memorabilia 2.6."
            },
            {
              "text": "Where is Eleusis?",
              "correct": false,
              "feedback": "Correct answer: What makes a good friend? The friendship lesson draws its central question from Socrates’ exchange with Critobulus in Memorabilia 2.6."
            },
            {
              "text": "Who bought the wool?",
              "correct": false,
              "feedback": "Correct answer: What makes a good friend? The friendship lesson draws its central question from Socrates’ exchange with Critobulus in Memorabilia 2.6."
            }
          ]
        },
        {
          "id": "module-1-exam-l9-13",
          "type": "multiple-choice",
          "category": "Lesson 9",
          "sourceLesson": 9,
          "prompt": "Which form of τιμάω is first-person singular?",
          "explanation": "τιμάω contracts to τιμῶ in the first-person singular.",
          "choices": [
            {
              "text": "τιμᾶτε",
              "correct": false,
              "feedback": "Correct answer: τιμῶ. τιμάω contracts to τιμῶ in the first-person singular."
            },
            {
              "text": "τιμῶ",
              "correct": true,
              "feedback": "Correct answer: τιμῶ. τιμάω contracts to τιμῶ in the first-person singular."
            },
            {
              "text": "τιμᾷς",
              "correct": false,
              "feedback": "Correct answer: τιμῶ. τιμάω contracts to τιμῶ in the first-person singular."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Correct answer: τιμῶ. τιμάω contracts to τιμῶ in the first-person singular."
            }
          ]
        },
        {
          "id": "module-1-exam-l9-30",
          "type": "multiple-choice",
          "category": "Lesson 9",
          "sourceLesson": 9,
          "prompt": "Which ancient text asks Critobulus about friendship?",
          "explanation": "Memorabilia 2.6 is Xenophon’s discussion with Critobulus about friendship.",
          "choices": [
            {
              "text": "Thucydides 2.47",
              "correct": false,
              "feedback": "Correct answer: Xenophon’s Memorabilia 2.6. Memorabilia 2.6 is Xenophon’s discussion with Critobulus about friendship."
            },
            {
              "text": "Xenophon’s Anabasis 3.1",
              "correct": false,
              "feedback": "Correct answer: Xenophon’s Memorabilia 2.6. Memorabilia 2.6 is Xenophon’s discussion with Critobulus about friendship."
            },
            {
              "text": "Xenophon’s Memorabilia 2.6",
              "correct": true,
              "feedback": "Correct answer: Xenophon’s Memorabilia 2.6. Memorabilia 2.6 is Xenophon’s discussion with Critobulus about friendship."
            },
            {
              "text": "Homer’s Iliad 1",
              "correct": false,
              "feedback": "Correct answer: Xenophon’s Memorabilia 2.6. Memorabilia 2.6 is Xenophon’s discussion with Critobulus about friendship."
            }
          ]
        },
        {
          "id": "module-1-exam-l10-1",
          "type": "multiple-choice",
          "category": "Lesson 10",
          "sourceLesson": 10,
          "prompt": "Who sends Xenophon the invitation?",
          "explanation": "Proxenus of Thebes sends the invitation and offers an introduction to Cyrus.",
          "choices": [
            {
              "text": "Critobulus",
              "correct": false,
              "feedback": "Correct answer: Proxenus of Thebes. Proxenus of Thebes sends the invitation and offers an introduction to Cyrus."
            },
            {
              "text": "Proxenus of Thebes",
              "correct": true,
              "feedback": "Correct answer: Proxenus of Thebes. Proxenus of Thebes sends the invitation and offers an introduction to Cyrus."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Correct answer: Proxenus of Thebes. Proxenus of Thebes sends the invitation and offers an introduction to Cyrus."
            },
            {
              "text": "Cyrus the Great",
              "correct": false,
              "feedback": "Correct answer: Proxenus of Thebes. Proxenus of Thebes sends the invitation and offers an introduction to Cyrus."
            }
          ]
        },
        {
          "id": "module-1-exam-l10-19",
          "type": "multiple-choice",
          "category": "Lesson 10",
          "sourceLesson": 10,
          "prompt": "Which phrase means “my road”?",
          "explanation": "ἐμή is feminine nominative singular and agrees with ἡ ὁδός.",
          "choices": [
            {
              "text": "ὁ ἐμὸς ὁδός",
              "correct": false,
              "feedback": "Correct answer: ἡ ἐμὴ ὁδός. ἐμή is feminine nominative singular and agrees with ἡ ὁδός."
            },
            {
              "text": "τὸ ἐμὸν ὁδός",
              "correct": false,
              "feedback": "Correct answer: ἡ ἐμὴ ὁδός. ἐμή is feminine nominative singular and agrees with ἡ ὁδός."
            },
            {
              "text": "ἡ σὴ ὁδός",
              "correct": false,
              "feedback": "Correct answer: ἡ ἐμὴ ὁδός. ἐμή is feminine nominative singular and agrees with ἡ ὁδός."
            },
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": true,
              "feedback": "Correct answer: ἡ ἐμὴ ὁδός. ἐμή is feminine nominative singular and agrees with ἡ ὁδός."
            }
          ]
        },
        {
          "id": "module-1-exam-l10-27",
          "type": "multiple-choice",
          "category": "Lesson 10",
          "sourceLesson": 10,
          "prompt": "What happened to Athens in 404 BCE?",
          "explanation": "Athens surrendered in 404 BCE, ending the Peloponnesian War and losing most of its fleet.",
          "choices": [
            {
              "text": "it conquered Persia",
              "correct": false,
              "feedback": "Correct answer: it surrendered at the end of the Peloponnesian War. Athens surrendered in 404 BCE, ending the Peloponnesian War and losing most of its fleet."
            },
            {
              "text": "it founded Delphi",
              "correct": false,
              "feedback": "Correct answer: it surrendered at the end of the Peloponnesian War. Athens surrendered in 404 BCE, ending the Peloponnesian War and losing most of its fleet."
            },
            {
              "text": "it hired Cyrus as king",
              "correct": false,
              "feedback": "Correct answer: it surrendered at the end of the Peloponnesian War. Athens surrendered in 404 BCE, ending the Peloponnesian War and losing most of its fleet."
            },
            {
              "text": "it surrendered at the end of the Peloponnesian War",
              "correct": true,
              "feedback": "Correct answer: it surrendered at the end of the Peloponnesian War. Athens surrendered in 404 BCE, ending the Peloponnesian War and losing most of its fleet."
            }
          ]
        },
        {
          "id": "module-1-exam-l11-5",
          "type": "multiple-choice",
          "category": "Lesson 11",
          "sourceLesson": 11,
          "prompt": "Which gods does Xenophon ask about?",
          "explanation": "Xenophon’s question at Delphi concerns which gods to sacrifice and pray to for his journey.",
          "choices": [
            {
              "text": "the gods in Proxenus’s home",
              "correct": false,
              "feedback": "Correct answer: the gods to sacrifice and pray to for his journey. Xenophon’s question at Delphi concerns which gods to sacrifice and pray to for his journey."
            },
            {
              "text": "the gods to sacrifice and pray to for his journey",
              "correct": true,
              "feedback": "Correct answer: the gods to sacrifice and pray to for his journey. Xenophon’s question at Delphi concerns which gods to sacrifice and pray to for his journey."
            },
            {
              "text": "the gods who founded Athens",
              "correct": false,
              "feedback": "Correct answer: the gods to sacrifice and pray to for his journey. Xenophon’s question at Delphi concerns which gods to sacrifice and pray to for his journey."
            },
            {
              "text": "the gods worshiped by Croesus alone",
              "correct": false,
              "feedback": "Correct answer: the gods to sacrifice and pray to for his journey. Xenophon’s question at Delphi concerns which gods to sacrifice and pray to for his journey."
            }
          ]
        },
        {
          "id": "module-1-exam-l11-14",
          "type": "multiple-choice",
          "category": "Lesson 11",
          "sourceLesson": 11,
          "prompt": "Which form means “they travel”?",
          "explanation": "πορεύονται has the third-person plural middle ending -ονται, with the meaning “they travel.”",
          "choices": [
            {
              "text": "πορεύῃ",
              "correct": false,
              "feedback": "Correct answer: πορεύονται. πορεύονται has the third-person plural middle ending -ονται, with the meaning “they travel.”"
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Correct answer: πορεύονται. πορεύονται has the third-person plural middle ending -ονται, with the meaning “they travel.”"
            },
            {
              "text": "πορεύονται",
              "correct": true,
              "feedback": "Correct answer: πορεύονται. πορεύονται has the third-person plural middle ending -ονται, with the meaning “they travel.”"
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Correct answer: πορεύονται. πορεύονται has the third-person plural middle ending -ονται, with the meaning “they travel.”"
            }
          ]
        },
        {
          "id": "module-1-exam-l11-26",
          "type": "multiple-choice",
          "category": "Lesson 11",
          "sourceLesson": 11,
          "prompt": "Who delivered responses at Apollo’s oracle?",
          "explanation": "The Pythia was Apollo’s priestess who delivered the oracle’s responses at Delphi.",
          "choices": [
            {
              "text": "Xenophon",
              "correct": false,
              "feedback": "Correct answer: the Pythia, Apollo’s priestess. The Pythia was Apollo’s priestess who delivered the oracle’s responses at Delphi."
            },
            {
              "text": "Proxenus",
              "correct": false,
              "feedback": "Correct answer: the Pythia, Apollo’s priestess. The Pythia was Apollo’s priestess who delivered the oracle’s responses at Delphi."
            },
            {
              "text": "the Pythia, Apollo’s priestess",
              "correct": true,
              "feedback": "Correct answer: the Pythia, Apollo’s priestess. The Pythia was Apollo’s priestess who delivered the oracle’s responses at Delphi."
            },
            {
              "text": "Croesus",
              "correct": false,
              "feedback": "Correct answer: the Pythia, Apollo’s priestess. The Pythia was Apollo’s priestess who delivered the oracle’s responses at Delphi."
            }
          ]
        },
        {
          "id": "module-1-exam-l12-3",
          "type": "multiple-choice",
          "category": "Lesson 12",
          "sourceLesson": 12,
          "prompt": "What choice should Xenophon have put first?",
          "explanation": "Socrates says Xenophon should have asked whether going or staying was better before asking how to go.",
          "choices": [
            {
              "text": "whether to bring a horse",
              "correct": false,
              "feedback": "Correct answer: whether to go or stay. Socrates says Xenophon should have asked whether going or staying was better before asking how to go."
            },
            {
              "text": "whether to visit Sardis first",
              "correct": false,
              "feedback": "Correct answer: whether to go or stay. Socrates says Xenophon should have asked whether going or staying was better before asking how to go."
            },
            {
              "text": "whether to write home",
              "correct": false,
              "feedback": "Correct answer: whether to go or stay. Socrates says Xenophon should have asked whether going or staying was better before asking how to go."
            },
            {
              "text": "whether to go or stay",
              "correct": true,
              "feedback": "Correct answer: whether to go or stay. Socrates says Xenophon should have asked whether going or staying was better before asking how to go."
            }
          ]
        },
        {
          "id": "module-1-exam-l12-20",
          "type": "multiple-choice",
          "category": "Lesson 12",
          "sourceLesson": 12,
          "prompt": "What does σὺν τῷ Προξένῳ mean?",
          "explanation": "σύν takes the dative, so σὺν τῷ Προξένῳ means “with Proxenus.”",
          "choices": [
            {
              "text": "with Proxenus",
              "correct": true,
              "feedback": "Correct answer: with Proxenus. σύν takes the dative, so σὺν τῷ Προξένῳ means “with Proxenus.”"
            },
            {
              "text": "toward Proxenus",
              "correct": false,
              "feedback": "Correct answer: with Proxenus. σύν takes the dative, so σὺν τῷ Προξένῳ means “with Proxenus.”"
            },
            {
              "text": "from Proxenus",
              "correct": false,
              "feedback": "Correct answer: with Proxenus. σύν takes the dative, so σὺν τῷ Προξένῳ means “with Proxenus.”"
            },
            {
              "text": "about Proxenus",
              "correct": false,
              "feedback": "Correct answer: with Proxenus. σύν takes the dative, so σὺν τῷ Προξένῳ means “with Proxenus.”"
            }
          ]
        },
        {
          "id": "module-1-exam-l12-29",
          "type": "multiple-choice",
          "category": "Lesson 12",
          "sourceLesson": 12,
          "prompt": "What did Xenophon do before sailing?",
          "explanation": "Anabasis 3.1.8 says Xenophon sacrificed as the god instructed before sailing.",
          "choices": [
            {
              "text": "asked whether to stay",
              "correct": false,
              "feedback": "Correct answer: sacrificed as directed. Anabasis 3.1.8 says Xenophon sacrificed as the god instructed before sailing."
            },
            {
              "text": "sacrificed as directed",
              "correct": true,
              "feedback": "Correct answer: sacrificed as directed. Anabasis 3.1.8 says Xenophon sacrificed as the god instructed before sailing."
            },
            {
              "text": "met Cyrus in Athens",
              "correct": false,
              "feedback": "Correct answer: sacrificed as directed. Anabasis 3.1.8 says Xenophon sacrificed as the god instructed before sailing."
            },
            {
              "text": "became a general",
              "correct": false,
              "feedback": "Correct answer: sacrificed as directed. Anabasis 3.1.8 says Xenophon sacrificed as the god instructed before sailing."
            }
          ]
        }
      ]
    }
  },
  "culture": {
    "title": "Toward the March of the Ten Thousand",
    "banner": {
      "image": "assets/lesson-12-army-forward.png",
      "display": "full",
      "alt": "Educational reconstruction of Xenophon looking toward a gathering Greek army on the road inland",
      "caption": "A forward-looking reconstruction: Xenophon joins Proxenus and Cyrus as the inland expedition is about to move. This is the bridge into the March of the Ten Thousand.",
      "credit": "Original digital illustration generated for Learn Greek with Xenophon."
    },
    "body": [],
    "sections": [
      {
        "title": "Sardis: the end of this lesson, the start of the march",
        "body": [
          "Xenophon says he found Proxenus and Cyrus at Sardis just as they were about to begin τὴν ἄνω ὁδόν, “the journey inland.” He was introduced to Cyrus there. The episode closes with action rather than a further oracle: he had sacrificed according to Apollo’s instruction and had left for the expedition.",
          "Sardis was the point at which Xenophon’s personal decision met Cyrus’ assembled force. The image looks ahead to the army, but the reading ends with Xenophon’s arrival and introduction, exactly where Anabasis 3.1.8 leaves this scene."
        ]
      },
      {
        "title": "The question that follows him",
        "body": [
          "Socrates’ criticism concerns the order of Xenophon’s questions. Asking how to travel well assumes a decision to travel. Asking whether to travel leaves that decision open. The difference is the lesson’s central reading problem.",
          "The next module follows the expedition and the Greek soldiers later known as the Ten Thousand. Keep the distinction between what Xenophon reports here and what the later narrative will reveal: at this moment, Proxenus and Cyrus are preparing to set out."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Where did Xenophon find Proxenus and Cyrus?",
        "answer": "At Sardis."
      },
      {
        "prompt": "What did the men at Sardis prepare to do?",
        "answer": "Set out on the journey inland."
      },
      {
        "prompt": "What action did Xenophon take before he left?",
        "answer": "He sacrificed as Apollo had instructed."
      },
      {
        "prompt": "What question did Socrates think should come first?",
        "answer": "Whether it was better to go or stay."
      }
    ],
    "review": {
      "title": "Lesson 12 review",
      "items": [
        "Read the contrast between πότερον … ἢ and ὅπως.",
        "Explain the datives τῷ Σωκράτει, σὺν τῷ Προξένῳ, and ἐν Σάρδεσι.",
        "Follow the sequence: oracle reported, Socrates’ response, sacrifices, departure, Sardis."
      ]
    },
    "sources": [
      {
        "title": "Xenophon, Anabasis 3.1.4–8 (Greek text)",
        "url": "https://www.tha.de/~harsch/graeca/Chronologia/S_ante04/Xenophon/xen_ana3.html"
      },
      {
        "title": "Xenophon, Anabasis Book 3 (Perseus English)",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3"
      }
    ]
  },
  "nextLesson": {
    "id": "module-1-review",
    "title": "Module 1 Review and Exam",
    "fallbackUrl": "module-1-review.html"
  },
  "contentRevision": "lesson-12-module-1-review-exam-v1"
}$json$::jsonb,
    version = version + 1,
    updated_at = now()
WHERE lesson_id = (SELECT id FROM public.lessons WHERE slug = 'lesson-12')
  AND content->>'contentRevision' IS DISTINCT FROM 'lesson-12-module-1-review-exam-v1';
DO $check$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.lesson_content_overrides o JOIN public.lessons l ON l.id = o.lesson_id WHERE l.slug = 'lesson-12' AND o.content->>'contentRevision' = 'lesson-12-module-1-review-exam-v1') THEN
    RAISE EXCEPTION 'Lesson 12 content override is missing';
  END IF;
END $check$;
COMMIT;
