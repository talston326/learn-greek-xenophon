BEGIN;
CREATE TABLE IF NOT EXISTS public.course_feedback (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  email text NOT NULL CHECK (char_length(email) BETWEEN 1 AND 320),
  kind text NOT NULL,
  page text NOT NULL DEFAULT '' CHECK (char_length(page) <= 2000),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 20000),
  submitted_at timestamptz NOT NULL DEFAULT now(),
  cleared_at timestamptz,
  cleared_by uuid REFERENCES public.users(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS course_feedback_pending_idx ON public.course_feedback (submitted_at, id) WHERE cleared_at IS NULL;
COMMIT;
