-- Editable lesson content proof of concept.
--
-- This migration is intentionally additive. It stores administrator-edited
-- lesson JSON without replacing the existing static lesson-data.js fallback.

BEGIN;

CREATE TABLE IF NOT EXISTS public.lesson_content_overrides (
  lesson_id uuid PRIMARY KEY REFERENCES public.lessons(id) ON DELETE CASCADE,
  content jsonb NOT NULL,
  version integer NOT NULL DEFAULT 1,
  updated_by_user_id uuid REFERENCES public.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT lesson_content_overrides_version_check CHECK (version >= 1),
  CONSTRAINT lesson_content_overrides_content_object_check CHECK (jsonb_typeof(content) = 'object')
);

CREATE TABLE IF NOT EXISTS public.lesson_content_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  content jsonb NOT NULL,
  version integer NOT NULL,
  saved_by_user_id uuid REFERENCES public.users(id) ON DELETE SET NULL,
  saved_at timestamptz NOT NULL DEFAULT now(),
  note text,
  CONSTRAINT lesson_content_versions_version_check CHECK (version >= 1),
  CONSTRAINT lesson_content_versions_content_object_check CHECK (jsonb_typeof(content) = 'object')
);

CREATE INDEX IF NOT EXISTS idx_lesson_content_versions_lesson_saved_at
  ON public.lesson_content_versions(lesson_id, saved_at DESC);

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
    WHERE tgrelid = 'public.lesson_content_overrides'::regclass
      AND tgname = 'set_updated_at'
  ) THEN
    CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.lesson_content_overrides
    FOR EACH ROW
    EXECUTE FUNCTION public.xenophon_set_updated_at();
  END IF;
END;
$$;

COMMIT;
