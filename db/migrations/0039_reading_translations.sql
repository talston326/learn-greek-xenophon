-- Lesson 1 pilot: the latest submitted translation for each student.
BEGIN;
CREATE TABLE IF NOT EXISTS public.user_reading_translations (
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  lesson_slug text NOT NULL CHECK (lesson_slug = 'lesson-1'),
  body text NOT NULL CHECK (btrim(body) <> '' AND char_length(body) <= 20000),
  submitted_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_slug)
);
COMMIT;
