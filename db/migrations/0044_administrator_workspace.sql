BEGIN;
CREATE TABLE IF NOT EXISTS public.course_site_settings (
  course_id uuid PRIMARY KEY REFERENCES public.courses(id) ON DELETE CASCADE,
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  version integer NOT NULL DEFAULT 1,
  updated_by uuid REFERENCES public.users(id),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS public.course_site_settings_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  settings jsonb NOT NULL,
  course_details jsonb NOT NULL,
  changed_by uuid REFERENCES public.users(id),
  changed_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO public.course_site_settings(course_id,settings)
SELECT id,'{"grammarPassingScore":80,"quizPassingScore":80,"lessonAccess":"open","registrationOpen":true,"feedbackEnabled":true,"translationEnabled":true,"translationDailyLimit":100,"translationMonthlyLimit":8,"translationGuidelines":"Use brief, supportive feedback suitable for a beginning Ancient Greek student. Explain mistakes in plain English and give a useful hint before revealing an answer."}'::jsonb
FROM public.courses ON CONFLICT(course_id) DO NOTHING;
ALTER TABLE public.translation_checks ADD COLUMN IF NOT EXISTS course_id uuid REFERENCES public.courses(id);
ALTER TABLE public.translation_checks ADD COLUMN IF NOT EXISTS policy_version integer NOT NULL DEFAULT 0;
UPDATE public.translation_checks t SET course_id=(SELECT cm.course_id FROM public.course_memberships cm JOIN public.courses c ON c.id=cm.course_id WHERE cm.user_id=t.user_id ORDER BY c.created_at DESC LIMIT 1) WHERE course_id IS NULL;
COMMIT;
