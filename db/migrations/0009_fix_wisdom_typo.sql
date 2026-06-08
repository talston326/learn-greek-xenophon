-- Correct a misspelled English gloss for σοφία and any copied lesson content.

BEGIN;

UPDATE public.vocabulary_items
SET gloss = replace(gloss, 'wisdon', 'wisdom'),
    definition = CASE
      WHEN definition IS NULL THEN NULL
      ELSE replace(definition, 'wisdon', 'wisdom')
    END,
    updated_at = now()
WHERE gloss LIKE '%wisdon%'
   OR definition LIKE '%wisdon%';

UPDATE public.reading_glosses
SET english = replace(english, 'wisdon', 'wisdom'),
    updated_at = now()
WHERE english LIKE '%wisdon%';

UPDATE public.lesson_content_overrides
SET content = replace(content::text, 'wisdon', 'wisdom')::jsonb,
    updated_at = now()
WHERE content::text LIKE '%wisdon%';

COMMIT;
