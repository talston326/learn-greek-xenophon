-- Backfill Lesson 2 vocabulary from the administrator-edited lesson JSON
-- into the normalized vocabulary tables.
--
-- This is intentionally scoped to lesson-2. It preserves vocabulary_items
-- with upserts, then rebuilds lesson-2's lesson_vocabulary links from the
-- current lesson_content_overrides.content->'vocabulary' order.

BEGIN;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.lessons l
    JOIN public.lesson_content_overrides o ON o.lesson_id = l.id
    WHERE l.slug = 'lesson-2'
      AND jsonb_typeof(o.content->'vocabulary') = 'array'
  ) THEN
    RAISE EXCEPTION 'No lesson-2 vocabulary override was found to backfill.';
  END IF;
END;
$$;

WITH target_lesson AS (
  SELECT l.id
  FROM public.lessons l
  WHERE l.slug = 'lesson-2'
)
DELETE FROM public.lesson_vocabulary lv
USING target_lesson tl
WHERE lv.lesson_id = tl.id;

WITH target_lesson AS (
  SELECT l.id
  FROM public.lessons l
  WHERE l.slug = 'lesson-2'
),
override_vocabulary AS (
  SELECT
    tl.id AS lesson_id,
    ((vocab_group.group_index - 1) * 1000 + (item.item_index - 1))::integer AS sort_order,
    NULLIF(trim(vocab_group.value->>'category'), '') AS category,
    NULLIF(trim(item.value->>'greek'), '') AS greek,
    NULLIF(trim(item.value->>'english'), '') AS english,
    NULLIF(trim(item.value->>'audioUrl'), '') AS audio_url
  FROM target_lesson tl
  JOIN public.lesson_content_overrides o ON o.lesson_id = tl.id
  CROSS JOIN LATERAL jsonb_array_elements(o.content->'vocabulary') WITH ORDINALITY AS vocab_group(value, group_index)
  CROSS JOIN LATERAL jsonb_array_elements(COALESCE(vocab_group.value->'items', '[]'::jsonb)) WITH ORDINALITY AS item(value, item_index)
),
valid_vocabulary AS (
  SELECT
    lesson_id,
    row_number() OVER (ORDER BY sort_order)::integer AS sort_order,
    category,
    greek,
    english,
    audio_url
  FROM override_vocabulary
  WHERE greek IS NOT NULL
    AND english IS NOT NULL
),
upserted_vocabulary AS (
  INSERT INTO public.vocabulary_items (
    lemma,
    display_form,
    part_of_speech,
    gloss,
    morphology,
    audio_url
  )
  SELECT
    greek,
    greek,
    category,
    english,
    jsonb_build_object(
      'source', 'lesson_content_override_backfill',
      'lesson_slug', 'lesson-2',
      'category', category
    ),
    audio_url
  FROM valid_vocabulary
  ON CONFLICT (lemma, display_form, gloss) DO UPDATE
  SET part_of_speech = EXCLUDED.part_of_speech,
      morphology = EXCLUDED.morphology,
      audio_url = COALESCE(EXCLUDED.audio_url, public.vocabulary_items.audio_url),
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
WHERE l.slug = 'lesson-2'
GROUP BY l.id, l.slug, l.number_label, l.title;
