-- Align Lesson 1's final quiz with its published household reading and culture page.
-- Preserve other activities and existing learner progress.
BEGIN;
DO $lesson1_quiz$
DECLARE
  lesson_id_value uuid;
  current_content jsonb;
  new_quiz jsonb := $quiz${
  "title": "Lesson 1 Quiz — Xenophon at Home",
  "threshold": 80,
  "questions": [
    {
      "id": "lesson-quiz-1",
      "type": "multiple_choice",
      "prompt": "What does θεραπεύει mean?",
      "choices": [
        {
          "text": "he tends or cares for",
          "correct": true
        },
        {
          "text": "he writes",
          "correct": false
        },
        {
          "text": "he calls",
          "correct": false
        },
        {
          "text": "he walks",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-2",
      "type": "multiple_choice",
      "prompt": "Where does the reading place Xenophon’s home?",
      "choices": [
        {
          "text": "in Sparta",
          "correct": false
        },
        {
          "text": "in Erchia",
          "correct": true
        },
        {
          "text": "in Delphi",
          "correct": false
        },
        {
          "text": "in Persia",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-3",
      "type": "multiple_choice",
      "prompt": "In the reading, what does ὁ Ξενοφῶν mean?",
      "choices": [
        {
          "text": "Xenophon as direct object",
          "correct": false
        },
        {
          "text": "the horse as subject",
          "correct": false
        },
        {
          "text": "Xenophon as subject",
          "correct": true
        },
        {
          "text": "Xenophon’s father",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-4",
      "type": "multiple_choice",
      "prompt": "What case is ὁ Ξενοφῶν in ὁ Ξενοφῶν τὸν ἵππον θεραπεύει?",
      "choices": [
        {
          "text": "accusative",
          "correct": false
        },
        {
          "text": "genitive",
          "correct": false
        },
        {
          "text": "dative",
          "correct": false
        },
        {
          "text": "nominative",
          "correct": true
        }
      ]
    },
    {
      "id": "lesson-quiz-5",
      "type": "multiple_choice",
      "prompt": "What case is τὸν ἵππον in ὁ Ξενοφῶν τὸν ἵππον θεραπεύει?",
      "choices": [
        {
          "text": "accusative",
          "correct": true
        },
        {
          "text": "nominative",
          "correct": false
        },
        {
          "text": "genitive",
          "correct": false
        },
        {
          "text": "vocative",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-6",
      "type": "multiple_choice",
      "prompt": "Which article is feminine nominative singular?",
      "choices": [
        {
          "text": "ὁ",
          "correct": false
        },
        {
          "text": "ἡ",
          "correct": true
        },
        {
          "text": "τό",
          "correct": false
        },
        {
          "text": "τόν",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-7",
      "type": "multiple_choice",
      "prompt": "Which article is masculine accusative singular?",
      "choices": [
        {
          "text": "ὁ",
          "correct": false
        },
        {
          "text": "ἡ",
          "correct": false
        },
        {
          "text": "τόν",
          "correct": true
        },
        {
          "text": "τήν",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-8",
      "type": "multiple_choice",
      "prompt": "Which phrase means “the good horseman” as a subject?",
      "choices": [
        {
          "text": "τὸν ἀγαθὸν ἵππον",
          "correct": false
        },
        {
          "text": "ἡ καλὴ μήτηρ",
          "correct": false
        },
        {
          "text": "ὁ καλὸς ἵππος",
          "correct": false
        },
        {
          "text": "ὁ ἀγαθὸς ἱππεύς",
          "correct": true
        }
      ]
    },
    {
      "id": "lesson-quiz-9",
      "type": "multiple_choice",
      "prompt": "What does ὕδωρ mean?",
      "choices": [
        {
          "text": "water",
          "correct": true
        },
        {
          "text": "grain",
          "correct": false
        },
        {
          "text": "field",
          "correct": false
        },
        {
          "text": "horse",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-10",
      "type": "multiple_choice",
      "prompt": "What does σῖτος mean in the reading?",
      "choices": [
        {
          "text": "water",
          "correct": false
        },
        {
          "text": "grain",
          "correct": true
        },
        {
          "text": "dog",
          "correct": false
        },
        {
          "text": "dinner",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-11",
      "type": "multiple_choice",
      "prompt": "What does Xenophon bring to the horse?",
      "choices": [
        {
          "text": "a book and a tablet",
          "correct": false
        },
        {
          "text": "a shield and a spear",
          "correct": false
        },
        {
          "text": "water and grain",
          "correct": true
        },
        {
          "text": "bread and wine",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-12",
      "type": "multiple_choice",
      "prompt": "Who calls Gryllus and Xenophon to dinner?",
      "choices": [
        {
          "text": "his father",
          "correct": false
        },
        {
          "text": "the dog",
          "correct": false
        },
        {
          "text": "a teacher",
          "correct": false
        },
        {
          "text": "Xenophon’s mother",
          "correct": true
        }
      ]
    },
    {
      "id": "lesson-quiz-13",
      "type": "multiple_choice",
      "prompt": "Which verb means “he leads”?",
      "choices": [
        {
          "text": "ἄγει",
          "correct": true
        },
        {
          "text": "λέγει",
          "correct": false
        },
        {
          "text": "μένει",
          "correct": false
        },
        {
          "text": "χαίρει",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-14",
      "type": "multiple_choice",
      "prompt": "Which noun in the reading is neuter?",
      "choices": [
        {
          "text": "ὁ ἵππος",
          "correct": false
        },
        {
          "text": "τὸ δεῖπνον",
          "correct": true
        },
        {
          "text": "ἡ μήτηρ",
          "correct": false
        },
        {
          "text": "ὁ κύων",
          "correct": false
        }
      ]
    },
    {
      "id": "lesson-quiz-15",
      "type": "multiple_choice",
      "prompt": "Which claim about Xenophon’s childhood is supported by an ancient source?",
      "choices": [
        {
          "text": "We know the exact dinner conversation.",
          "correct": false
        },
        {
          "text": "We know he personally fed this horse.",
          "correct": false
        },
        {
          "text": "A later writer names Gryllus as his father and Erchia as his deme.",
          "correct": true
        },
        {
          "text": "We know his family kept this dog.",
          "correct": false
        }
      ]
    }
  ]
}$quiz$::jsonb;
BEGIN
  SELECT id INTO STRICT lesson_id_value
  FROM public.lessons WHERE slug = 'lesson-1' FOR UPDATE;

  SELECT content INTO STRICT current_content
  FROM public.lesson_content_overrides
  WHERE lesson_id = lesson_id_value FOR UPDATE;

  IF current_content #> '{activities,lesson-quiz}' = new_quiz THEN
    RETURN;
  END IF;

  IF current_content #>> '{activities,lesson-quiz,title}' IS DISTINCT FROM 'Lesson 1 Quiz — Socrates Teaches' THEN
    RAISE EXCEPTION 'Lesson 1 final quiz has changed; review it before replacing the questions.';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.lesson_content_blocks b
    JOIN public.lesson_segments s ON s.id = b.segment_id
    WHERE s.lesson_id = lesson_id_value
      AND b.content->>'source' = 'lesson_publish'
      AND b.content->>'kind' = 'activities'
      AND b.content #>> '{value,lesson-quiz,title}' IS DISTINCT FROM 'Lesson 1 Quiz — Socrates Teaches'
  ) THEN
    RAISE EXCEPTION 'Lesson 1 published quiz block has changed; review it before replacing the questions.';
  END IF;

  UPDATE public.lesson_content_overrides
  SET content = jsonb_set(
      jsonb_set(current_content, '{activities,lesson-quiz}', new_quiz, false),
      '{contentRevision}', to_jsonb('lesson-1-household-page-v2'::text), true
    ),
    version = version + 1,
    updated_at = now()
  WHERE lesson_id = lesson_id_value;

  UPDATE public.lesson_content_blocks b
  SET content = jsonb_set(b.content, '{value,lesson-quiz}', new_quiz, true),
      updated_at = now()
  FROM public.lesson_segments s
  WHERE b.segment_id = s.id
    AND s.lesson_id = lesson_id_value
    AND b.content->>'source' = 'lesson_publish'
    AND b.content->>'kind' = 'activities';
END
$lesson1_quiz$;
COMMIT;
