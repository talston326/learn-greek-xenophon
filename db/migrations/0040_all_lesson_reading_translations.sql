-- Expand the pilot without changing existing student submissions.
BEGIN;
ALTER TABLE public.user_reading_translations
  DROP CONSTRAINT IF EXISTS user_reading_translations_lesson_slug_check;
ALTER TABLE public.user_reading_translations
  ADD CONSTRAINT user_reading_translations_lesson_slug_check
  CHECK (lesson_slug ~ '^lesson-[1-9][0-9]*$');
COMMIT;
