-- Replace Lesson 1 vocabulary in both the administrator-edited lesson JSON
-- and the normalized vocabulary tables.
--
-- Scope:
-- - lesson_content_overrides.content->'vocabulary' for lesson-1, if an override exists
-- - lesson_vocabulary links for lesson-1
-- - vocabulary_items upserts for the supplied Lesson 1 words
--
-- This does not delete vocabulary_items that may still be used elsewhere.

BEGIN;

CREATE TEMP TABLE lesson1_vocabulary_replacement (
  group_order integer NOT NULL,
  item_order integer NOT NULL,
  category text NOT NULL,
  greek text NOT NULL,
  english text NOT NULL
) ON COMMIT DROP;

INSERT INTO lesson1_vocabulary_replacement (
  group_order,
  item_order,
  category,
  greek,
  english
)
VALUES
  (1, 1, 'Verbs', 'ἄγει', 'leads'),
  (1, 2, 'Verbs', 'βαδίζει', 'walks'),
  (1, 3, 'Verbs', 'βλέπει', 'sees, looks'),
  (1, 4, 'Verbs', 'θεραπεύει', 'takes care of, tends'),
  (1, 5, 'Verbs', 'ἕπεται', 'follows'),
  (1, 6, 'Verbs', 'ἔχει', 'has'),
  (1, 7, 'Verbs', 'καλεῖ', 'calls'),
  (1, 8, 'Verbs', 'λέγει', 'says'),
  (1, 9, 'Verbs', 'μένει', 'remains, stays'),
  (1, 10, 'Verbs', 'οἰκεῖ', 'lives'),
  (1, 11, 'Verbs', 'ποιεῖ', 'does, makes'),
  (1, 12, 'Verbs', 'φέρει', 'carries'),
  (1, 13, 'Verbs', 'ὑλακτεῖ', 'barks'),
  (1, 14, 'Verbs', 'χαίρει', 'rejoices, is glad'),
  (2, 1, 'Nouns', 'ὁ ἀγρός', 'field'),
  (2, 2, 'Nouns', 'ὁ ἀνήρ', 'man, husband'),
  (2, 3, 'Nouns', 'αἱ Ἀθῆναι', 'Athens'),
  (2, 4, 'Nouns', 'ὁ δεσπότης', 'master'),
  (2, 5, 'Nouns', 'τὸ δεῖπνον', 'meal'),
  (2, 6, 'Nouns', 'ἡ θύρα', 'door'),
  (2, 7, 'Nouns', 'ὁ ἵππος', 'horse'),
  (2, 8, 'Nouns', 'ὁ ἱππεύς', 'cavalryman, horseman'),
  (2, 9, 'Nouns', 'τὸ ἱππικόν', 'cavalry'),
  (2, 10, 'Nouns', 'ὁ κύων', 'dog'),
  (2, 11, 'Nouns', 'ὁ λόφος', 'hill'),
  (2, 12, 'Nouns', 'ἡ μήτηρ', 'mother'),
  (2, 13, 'Nouns', 'ὁ νεανίας', 'young man'),
  (2, 14, 'Nouns', 'ὁ οἶκος', 'house'),
  (2, 15, 'Nouns', 'ὁ πατήρ', 'father'),
  (2, 16, 'Nouns', 'ὁ παῖς', 'child, boy'),
  (2, 17, 'Nouns', 'ὁ σῖτος', 'grain'),
  (2, 18, 'Nouns', 'ὁ υἱός', 'son'),
  (2, 19, 'Nouns', 'τὸ ὕδωρ', 'water'),
  (2, 20, 'Nouns', 'ὁ Ξενοφῶν', 'Xenophon'),
  (2, 21, 'Nouns', 'ὁ Γρύλλος', 'Gryllus'),
  (2, 22, 'Nouns', 'ἡ Ἐρχία', 'Erchia'),
  (3, 1, 'Adjectives', 'ἀγαθός', 'good'),
  (3, 2, 'Adjectives', 'Ἀθηναῖος', 'Athenian'),
  (3, 3, 'Adjectives', 'ἰσχυρός', 'strong'),
  (3, 4, 'Adjectives', 'καλός', 'beautiful, noble'),
  (3, 5, 'Adjectives', 'νέος', 'young'),
  (4, 1, 'Other', 'ἐν', 'in'),
  (4, 2, 'Other', 'ἐπί', 'on'),
  (4, 3, 'Other', 'εἶτα', 'then'),
  (4, 4, 'Other', 'οὐ', 'not'),
  (4, 5, 'Other', 'περί', 'around'),
  (4, 6, 'Other', 'πρός', 'toward, to');

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.lessons
    WHERE slug = 'lesson-1'
  ) THEN
    RAISE EXCEPTION 'No lesson-1 row was found to update.';
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
  WHERE l.slug = 'lesson-1'
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
  'Saved before Lesson 1 vocabulary replacement'
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
    FROM lesson1_vocabulary_replacement
    GROUP BY group_order, category
  ) grouped_vocabulary
),
target_lesson AS (
  SELECT l.id AS lesson_id
  FROM public.lessons l
  WHERE l.slug = 'lesson-1'
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
  WHERE l.slug = 'lesson-1'
)
DELETE FROM public.lesson_vocabulary lv
USING target_lesson tl
WHERE lv.lesson_id = tl.id;

WITH target_lesson AS (
  SELECT l.id AS lesson_id
  FROM public.lessons l
  WHERE l.slug = 'lesson-1'
),
valid_vocabulary AS (
  SELECT
    tl.lesson_id,
    row_number() OVER (ORDER BY r.group_order, r.item_order)::integer AS sort_order,
    r.category,
    r.greek,
    r.english
  FROM target_lesson tl
  CROSS JOIN lesson1_vocabulary_replacement r
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
      'lesson_slug', 'lesson-1',
      'category', category
    )
  FROM valid_vocabulary
  WHERE true
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
WHERE l.slug = 'lesson-1'
GROUP BY l.id, l.slug, l.number_label, l.title;
