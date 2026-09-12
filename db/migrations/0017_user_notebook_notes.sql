-- Migration 0017: add private, user-scoped notebook notes.

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.user_notebook_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  body text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT user_notebook_notes_title_required_check CHECK (btrim(title) <> ''),
  CONSTRAINT user_notebook_notes_title_length_check CHECK (char_length(title) <= 160),
  CONSTRAINT user_notebook_notes_body_length_check CHECK (char_length(body) <= 100000)
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_user_notebook_notes_user_title_unique
  ON public.user_notebook_notes(user_id, lower(title));

CREATE INDEX IF NOT EXISTS idx_user_notebook_notes_user_updated
  ON public.user_notebook_notes(user_id, updated_at DESC);

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public'
      AND p.proname = 'xenophon_set_updated_at'
      AND p.pronargs = 0
  )
  AND NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgrelid = 'public.user_notebook_notes'::regclass
      AND tgname = 'set_updated_at'
  ) THEN
    CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.user_notebook_notes
    FOR EACH ROW
    EXECUTE FUNCTION public.xenophon_set_updated_at();
  END IF;
END;
$$;

COMMIT;
