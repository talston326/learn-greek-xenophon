-- Add a normalized home for the editable Greek lesson title.
--
-- The full administrator-edited lesson object still remains in
-- lesson_content_overrides as the rendering snapshot/fallback.

BEGIN;

ALTER TABLE public.lessons
  ADD COLUMN IF NOT EXISTS greek_title text;

COMMIT;
