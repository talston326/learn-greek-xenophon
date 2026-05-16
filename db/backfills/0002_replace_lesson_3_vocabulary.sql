-- Replace Lesson 3 vocabulary in both the administrator-edited lesson JSON
-- and the normalized vocabulary tables.
--
-- Scope:
-- - lesson_content_overrides.content->'vocabulary' for lesson-3
-- - lesson_vocabulary links for lesson-3
-- - vocabulary_items upserts for the supplied Lesson 3 words
--
-- This does not delete vocabulary_items that may still be used elsewhere.

BEGIN;

CREATE TEMP TABLE lesson3_vocabulary_replacement (
  group_order integer NOT NULL,
  item_order integer NOT NULL,
  category text NOT NULL,
  greek text NOT NULL,
  english text NOT NULL
) ON COMMIT DROP;

INSERT INTO lesson3_vocabulary_replacement (
  group_order,
  item_order,
  category,
  greek,
  english
)
VALUES
  (1, 1, 'Verbs', 'ἐρωτᾷ', 'he/she/it asks'),
  (1, 2, 'Verbs', 'πράττει', 'he/she/it does, practices, performs'),
  (2, 1, 'Nouns', 'ἀγορά, ἡ', 'marketplace, agora'),
  (2, 2, 'Nouns', 'χρῆμα, τό', 'thing; money, wealth. Plural in passage: χρήματα — money, wealth'),
  (2, 3, 'Nouns', 'γνῶσις, ἡ', 'knowledge'),
  (2, 4, 'Nouns', 'διδάσκαλος, ὁ', 'teacher'),
  (3, 1, 'Adjectives', 'μέγας, μεγάλη, μέγα', 'great, large'),
  (3, 2, 'Adjectives', 'πολύς, πολλή, πολύ', 'much, many'),
  (3, 3, 'Adjectives', 'ὀλίγος, ὀλίγη, ὀλίγον', 'little, few'),
  (3, 4, 'Adjectives', 'μόνος, μόνη, μόνον', 'alone, only'),
  (4, 1, 'Adverbs', 'οὐ', 'not'),
  (4, 2, 'Adverbs', 'καλῶς', 'well');

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.lessons l
    JOIN public.lesson_content_overrides o ON o.lesson_id = l.id
    WHERE l.slug = 'lesson-3'
  ) THEN
    RAISE EXCEPTION 'No lesson-3 content override was found to update.';
  END IF;
END;
$$;

WITH target_override AS (
  SELECT
    l.id AS lesson_id,
    o.content,
    o.version,
    o.updated_by_user_id
  FROM public.lessons l
  JOIN public.lesson_content_overrides o ON o.lesson_id = l.id
  WHERE l.slug = 'lesson-3'
  FOR UPDATE OF o
)
INSERT INTO public.lesson_content_versions (
  lesson_id,
  content,
  version,
  saved_by_user_id,
  note
)
SELECT
  lesson_id,
  content,
  version,
  updated_by_user_id,
  'Saved before Lesson 3 vocabulary replacement'
FROM target_override;

WITH replacement_json AS (
  SELECT jsonb_agg(
    jsonb_build_object(
      'category', category,
      'items', items
    )
    ORDER BY group_order
  ) AS vocabulary
  FROM (
    SELECT
      group_order,
      category,
      jsonb_agg(
        jsonb_build_object(
          'greek', greek,
          'english', english
        )
        ORDER BY item_order
      ) AS items
    FROM lesson3_vocabulary_replacement
    GROUP BY group_order, category
  ) grouped_vocabulary
),
target_lesson AS (
  SELECT l.id AS lesson_id
  FROM public.lessons l
  WHERE l.slug = 'lesson-3'
)
UPDATE public.lesson_content_overrides o
SET content = jsonb_set(o.content, '{vocabulary}', replacement_json.vocabulary, true),
    version = o.version + 1,
    updated_at = now()
FROM target_lesson tl
CROSS JOIN replacement_json
WHERE o.lesson_id = tl.lesson_id;

WITH target_lesson AS (
  SELECT l.id
  FROM public.lessons l
  WHERE l.slug = 'lesson-3'
)
DELETE FROM public.lesson_vocabulary lv
USING target_lesson tl
WHERE lv.lesson_id = tl.id;

WITH target_lesson AS (
  SELECT l.id AS lesson_id
  FROM public.lessons l
  WHERE l.slug = 'lesson-3'
),
valid_vocabulary AS (
  SELECT
    tl.lesson_id,
    row_number() OVER (ORDER BY r.group_order, r.item_order)::integer AS sort_order,
    r.category,
    r.greek,
    r.english
  FROM target_lesson tl
  CROSS JOIN lesson3_vocabulary_replacement r
),
upserted_vocabulary AS (
  INSERT INTO public.vocabulary_items (
    lemma,
    display_form,
    part_of_speech,
    gloss,
    morphology
  )
  SELECT
    greek,
    greek,
    category,
    english,
    jsonb_build_object(
      'source', 'lesson_content_override_replacement',
      'lesson_slug', 'lesson-3',
      'category', category
    )
  FROM valid_vocabulary
  ON CONFLICT (lemma, display_form, gloss) DO UPDATE
  SET part_of_speech = EXCLUDED.part_of_speech,
      morphology = EXCLUDED.morphology,
      updated_at = now()
  RETURNING id, display_form, gloss
)
INSERT INTO public.lesson_vocabulary (
  lesson_id,
  vocabulary_item_id,
  sort_order
)
SELECT
  vv.lesson_id,
  uv.id,
  vv.sort_order
FROM valid_vocabulary vv
JOIN upserted_vocabulary uv
  ON uv.display_form = vv.greek
 AND uv.gloss = vv.english
ON CONFLICT (lesson_id, vocabulary_item_id) DO UPDATE
SET sort_order = EXCLUDED.sort_order;

COMMIT;

SELECT
  l.slug,
  l.number_label,
  l.title,
  count(lv.vocabulary_item_id)::integer AS normalized_vocabulary_rows
FROM public.lessons l
LEFT JOIN public.lesson_vocabulary lv ON lv.lesson_id = l.id
WHERE l.slug = 'lesson-3'
GROUP BY l.id, l.slug, l.number_label, l.title;
