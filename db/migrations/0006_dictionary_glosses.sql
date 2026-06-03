-- Global vocabulary dictionaries support.
--
-- This migration is intentionally non-destructive:
-- - It extends vocabulary_items with optional dictionary citation fields.
-- - It creates reading_glosses as a normalized, generated companion table for
--   reading gloss rows saved through the lesson editor.
-- - It does not remove or rewrite existing vocabulary or lesson content.

BEGIN;

ALTER TABLE public.vocabulary_items
  ADD COLUMN IF NOT EXISTS dictionary_form text,
  ADD COLUMN IF NOT EXISTS principal_parts text[],
  ADD COLUMN IF NOT EXISTS gender text,
  ADD COLUMN IF NOT EXISTS genitive_form text,
  ADD COLUMN IF NOT EXISTS feminine_form text,
  ADD COLUMN IF NOT EXISTS neuter_form text,
  ADD COLUMN IF NOT EXISTS definition text;

CREATE TABLE IF NOT EXISTS public.reading_glosses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  reading_id uuid REFERENCES public.readings(id) ON DELETE CASCADE,
  greek text NOT NULL,
  english text NOT NULL,
  lemma text,
  display_form text,
  part_of_speech text,
  morphology jsonb NOT NULL DEFAULT '{}'::jsonb,
  source text NOT NULL DEFAULT 'lesson_reading_gloss',
  sort_order integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT reading_glosses_sort_order_check CHECK (sort_order >= 0)
);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'set_reading_glosses_updated_at'
  ) THEN
    CREATE TRIGGER set_reading_glosses_updated_at
    BEFORE UPDATE ON public.reading_glosses
    FOR EACH ROW
    EXECUTE FUNCTION public.xenophon_set_updated_at();
  END IF;
END;
$$;

CREATE INDEX IF NOT EXISTS idx_vocabulary_items_dictionary_form
  ON public.vocabulary_items(dictionary_form);

CREATE INDEX IF NOT EXISTS idx_vocabulary_items_definition
  ON public.vocabulary_items(definition);

CREATE INDEX IF NOT EXISTS idx_reading_glosses_lesson_sort_order
  ON public.reading_glosses(lesson_id, sort_order);

CREATE INDEX IF NOT EXISTS idx_reading_glosses_greek
  ON public.reading_glosses(greek);

CREATE INDEX IF NOT EXISTS idx_reading_glosses_lemma
  ON public.reading_glosses(lemma);

CREATE INDEX IF NOT EXISTS idx_reading_glosses_english
  ON public.reading_glosses(english);

CREATE INDEX IF NOT EXISTS idx_reading_glosses_morphology_gin
  ON public.reading_glosses USING gin (morphology);

INSERT INTO public.reading_glosses (
  lesson_id,
  reading_id,
  greek,
  english,
  lemma,
  display_form,
  part_of_speech,
  morphology,
  source,
  sort_order
)
SELECT
  o.lesson_id,
  r.id,
  gloss.item->>'greek',
  gloss.item->>'english',
  COALESCE(gloss.item->>'lemma', gloss.item->>'greek'),
  COALESCE(gloss.item->>'displayForm', gloss.item->>'display_form', gloss.item->>'greek'),
  COALESCE(gloss.item->>'partOfSpeech', gloss.item->>'part_of_speech', gloss.item->>'category'),
  jsonb_build_object(
    'source', 'lesson_content_override_backfill',
    'paragraph', paragraph.ordinality
  ),
  'lesson_content_override_backfill',
  ((paragraph.ordinality - 1) * 1000 + (gloss.ordinality - 1))::integer
FROM public.lesson_content_overrides o
LEFT JOIN LATERAL (
  SELECT id
  FROM public.readings
  WHERE lesson_id = o.lesson_id
  ORDER BY sort_order, id
  LIMIT 1
) r ON true
CROSS JOIN LATERAL jsonb_array_elements(
  CASE
    WHEN jsonb_typeof(o.content #> '{reading,paragraphs}') = 'array'
      THEN o.content #> '{reading,paragraphs}'
    ELSE '[]'::jsonb
  END
) WITH ORDINALITY AS paragraph(item, ordinality)
CROSS JOIN LATERAL jsonb_array_elements(
  CASE
    WHEN jsonb_typeof(paragraph.item->'gloss') = 'array'
      THEN paragraph.item->'gloss'
    ELSE '[]'::jsonb
  END
) WITH ORDINALITY AS gloss(item, ordinality)
WHERE COALESCE(gloss.item->>'greek', '') <> ''
  AND COALESCE(gloss.item->>'english', '') <> ''
  AND NOT EXISTS (
    SELECT 1
    FROM public.reading_glosses existing
    WHERE existing.lesson_id = o.lesson_id
      AND existing.greek = gloss.item->>'greek'
      AND existing.english = gloss.item->>'english'
  );

COMMIT;
