-- Optional development seed for Netlify DB / Postgres.
-- This file intentionally creates only tiny reference data and no lesson content.

BEGIN;

INSERT INTO public.roles (id, label, description)
VALUES
  ('administrator', 'Administrator', 'Can manage course setup, users, and site settings.'),
  ('professor', 'Professor', 'Can manage course content, students, grading, and announcements.'),
  ('student', 'Student', 'Can complete lessons, exercises, quizzes, and review vocabulary.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.courses (
  id,
  code,
  title,
  term,
  institution,
  department
)
VALUES (
  '11111111-1111-4111-8111-111111111111',
  'GREK 110 J10',
  'Learn Ancient Greek with Xenophon',
  'Spring 2027',
  'University of South Carolina',
  'Department of Classics'
)
ON CONFLICT (code, term) DO NOTHING;

COMMIT;
