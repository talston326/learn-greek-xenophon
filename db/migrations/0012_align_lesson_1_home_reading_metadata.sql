-- Align Lesson 1's canonical metadata with its published Xenophon-at-home reading.

BEGIN;

UPDATE public.lessons
SET title = 'Xenophon at Home',
    greek_title = 'Ὁ Ξενοφῶν ἐν τῷ οἴκῳ',
    grammar_focus = 'Nominative singular, accusative singular, present active indicative, definite article, basic noun/adjective agreement'
WHERE slug = 'lesson-1';

CREATE TEMP TABLE lesson_1_home_reading_alignment AS
SELECT
  $translation$Xenophon is young. He does not live in Athens, but in Erchia. The house is on a hill. The house is beautiful, and olive trees are around the house. Gryllus is his father. He is an Athenian horseman, for he is in the cavalry of the Athenians. Therefore he has a beautiful and strong horse. Xenophon tends the horse. He carries water and grain to the horse. Gryllus looks toward his son and says, “You are doing well, boy. The good horseman tends the horse.”

The mother stays in the doorway and calls her husband: “Come here, Gryllus. Dinner is ready.” She also calls Xenophon: “Come too, boy.” The father says to his son, “Lead the horse to the field, then come.” So Gryllus walks toward the door. Xenophon unties the horse and leads it toward the field. He calls the dog. The dog barks and follows. Finally the young man walks toward the house and rejoices.$translation$ AS translation,
  $notes$## Glosses

The paragraph glosses are stored with the published reading block. This note intentionally replaces an older Socrates/agora glossary that no longer belongs to Lesson 1.$notes$ AS notes_markdown;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-1'
)
UPDATE public.readings r
SET translation = lesson_1_home_reading_alignment.translation,
    notes_markdown = lesson_1_home_reading_alignment.notes_markdown
FROM lesson, lesson_1_home_reading_alignment
WHERE r.lesson_id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-1'
)
UPDATE public.lesson_content_overrides o
SET content = jsonb_set(
    jsonb_set(o.content, '{reading,translation}', to_jsonb(lesson_1_home_reading_alignment.translation), true),
    '{reading,notesMarkdown}', to_jsonb(lesson_1_home_reading_alignment.notes_markdown), true
  )
FROM lesson, lesson_1_home_reading_alignment
WHERE o.lesson_id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-1'
)
UPDATE public.lesson_content_blocks b
SET content = jsonb_set(
    jsonb_set(b.content, '{value,translation}', to_jsonb(lesson_1_home_reading_alignment.translation), true),
    '{value,notesMarkdown}', to_jsonb(lesson_1_home_reading_alignment.notes_markdown), true
  )
FROM public.lesson_segments s, lesson, lesson_1_home_reading_alignment
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' = 'reading';

DROP TABLE lesson_1_home_reading_alignment;

COMMIT;
