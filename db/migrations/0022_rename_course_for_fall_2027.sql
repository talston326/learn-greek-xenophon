-- Rename the existing course in place so memberships and progress keep their course ID.
BEGIN;

DO $rename_course$
DECLARE
  old_course_id uuid;
  new_course_id uuid;
BEGIN
  SELECT id INTO old_course_id
  FROM public.courses
  WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
  FOR UPDATE;

  SELECT id INTO new_course_id
  FROM public.courses
  WHERE code = 'GREK 120 J10' AND term = 'Fall 2027'
  FOR UPDATE;

  IF old_course_id IS NOT NULL AND new_course_id IS NOT NULL THEN
    RAISE EXCEPTION 'Both the old and new course records exist; review before renaming';
  END IF;

  IF old_course_id IS NOT NULL THEN
    UPDATE public.courses
    SET code = 'GREK 120 J10', term = 'Fall 2027', updated_at = now()
    WHERE id = old_course_id;
  END IF;
END
$rename_course$;

COMMIT;
