-- Server-side password hashes for prototype course logins.
-- Passwords are verified in Netlify Functions with pgcrypto crypt().

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.user_credentials (
  user_id uuid PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  password_hash text NOT NULL,
  password_algorithm text NOT NULL DEFAULT 'pgcrypto-bcrypt',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public'
      AND p.proname = 'xenophon_set_updated_at'
      AND p.pronargs = 0
  ) AND NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgrelid = 'public.user_credentials'::regclass
      AND tgname = 'set_updated_at'
  ) THEN
    CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.user_credentials
    FOR EACH ROW
    EXECUTE FUNCTION public.xenophon_set_updated_at();
  END IF;
END;
$$;

COMMIT;
