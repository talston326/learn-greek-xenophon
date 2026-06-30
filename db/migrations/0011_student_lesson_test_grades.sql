-- Add completed Lesson Test grades and align course levels to the XP scale.

BEGIN;

CREATE TABLE IF NOT EXISTS public.student_lesson_test_grades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL,
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  test_type text NOT NULL DEFAULT 'lesson-test',
  score_percent numeric(5,2) NOT NULL,
  points_earned numeric(8,2),
  points_possible numeric(8,2),
  attempt_number integer NOT NULL DEFAULT 1,
  completed_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (course_id, user_id) REFERENCES public.course_memberships(course_id, user_id) ON DELETE CASCADE,
  CONSTRAINT student_lesson_test_grades_score_check CHECK (score_percent >= 0 AND score_percent <= 100),
  CONSTRAINT student_lesson_test_grades_points_check CHECK (
    points_earned IS NULL OR points_possible IS NULL OR
    (points_earned >= 0 AND points_possible > 0 AND points_earned <= points_possible)
  ),
  CONSTRAINT student_lesson_test_grades_attempt_check CHECK (attempt_number > 0),
  CONSTRAINT student_lesson_test_grades_type_check CHECK (test_type IN ('lesson-test'))
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_student_lesson_test_grades_attempt
  ON public.student_lesson_test_grades(user_id, lesson_id, test_type, attempt_number);

CREATE INDEX IF NOT EXISTS idx_student_lesson_test_grades_user_course
  ON public.student_lesson_test_grades(course_id, user_id, completed_at DESC);

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
seed_levels(level_number, label, xp_required) AS (
  VALUES
    (0, 'Novice', 0),
    (1, 'Apprentice', 100),
    (2, 'Student', 200),
    (3, 'Reader', 350),
    (4, 'Grammarian', 550),
    (5, 'Scholar', 800),
    (6, 'Philologian', 1100),
    (7, 'Xenophontic Reader', 1450),
    (8, 'Companion of Socrates', 1850),
    (9, 'Master of Greek', 2300)
)
INSERT INTO public.levels (course_id, level_number, label, xp_required)
SELECT course.id, seed_levels.level_number, seed_levels.label, seed_levels.xp_required
FROM course
CROSS JOIN seed_levels
ON CONFLICT (course_id, level_number) DO UPDATE
SET label = EXCLUDED.label,
    xp_required = EXCLUDED.xp_required;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
seed_progress(email, xp) AS (
  VALUES
    ('new.student@example.edu', 0),
    ('codex.student@example.edu', 40),
    ('jdoe@email.sc.edu', 120),
    ('sdoe@email.sc.edu', 205),
    ('mcontrary@email.sc.edu', 300),
    ('skim@email.sc.edu', 490),
    ('jdavis@email.sc.edu', 650),
    ('achen@email.sc.edu', 800),
    ('mlopez@email.sc.edu', 940),
    ('tclay@email.sc.edu', 1030),
    ('nioannidis@email.sc.edu', 1180),
    ('phomer@email.sc.edu', 1390),
    ('ahomer@email.sc.edu', 1550),
    ('dlaertius@email.sc.edu', 1740),
    ('paristocles@email.sc.edu', 1950),
    ('apapadopoulos@email.sc.edu', 2075),
    ('tpalston@email.sc.edu', 2050),
    ('BECKMA@mailbox.sc.edu', 2220),
    ('agreat@email.sc.edu', 2520),
    ('dgeorgiou@email.sc.edu', 3000)
),
resolved AS (
  SELECT
    u.id AS user_id,
    course.id AS course_id,
    seed_progress.xp,
    current_level.level_number,
    current_level.label AS level_label,
    next_level.xp_required AS next_level_xp
  FROM seed_progress
  JOIN public.users u ON u.email = seed_progress.email::citext
  JOIN course ON true
  JOIN LATERAL (
    SELECT level_number, label, xp_required
    FROM public.levels
    WHERE course_id = course.id
      AND xp_required <= seed_progress.xp
    ORDER BY xp_required DESC
    LIMIT 1
  ) current_level ON true
  LEFT JOIN LATERAL (
    SELECT xp_required
    FROM public.levels
    WHERE course_id = course.id
      AND xp_required > seed_progress.xp
    ORDER BY xp_required
    LIMIT 1
  ) next_level ON true
)
UPDATE public.student_progress sp
SET xp = resolved.xp,
    level_number = resolved.level_number,
    level_label = resolved.level_label,
    next_level_xp = COALESCE(resolved.next_level_xp, resolved.xp),
    updated_at = now()
FROM resolved
WHERE sp.course_id = resolved.course_id
  AND sp.user_id = resolved.user_id;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
grade_targets(email, test_count, base_score, spread_seed) AS (
  VALUES
    ('new.student@example.edu', 0, 0, 0),
    ('codex.student@example.edu', 0, 0, 0),
    ('jdoe@email.sc.edu', 1, 78, 1),
    ('sdoe@email.sc.edu', 3, 84, 2),
    ('mcontrary@email.sc.edu', 3, 86, 3),
    ('skim@email.sc.edu', 5, 88, 4),
    ('jdavis@email.sc.edu', 5, 78, 5),
    ('achen@email.sc.edu', 8, 88, 6),
    ('mlopez@email.sc.edu', 10, 90, 7),
    ('tclay@email.sc.edu', 11, 84, 8),
    ('nioannidis@email.sc.edu', 12, 89, 9),
    ('phomer@email.sc.edu', 15, 86, 10),
    ('ahomer@email.sc.edu', 17, 91, 11),
    ('dlaertius@email.sc.edu', 20, 90, 12),
    ('paristocles@email.sc.edu', 22, 93, 13),
    ('apapadopoulos@email.sc.edu', 24, 91, 14),
    ('tpalston@email.sc.edu', 28, 88, 15),
    ('BECKMA@mailbox.sc.edu', 31, 94, 16),
    ('agreat@email.sc.edu', 38, 92, 17),
    ('dgeorgiou@email.sc.edu', 48, 95, 18)
),
seed_users AS (
  SELECT u.id AS user_id, course.id AS course_id, grade_targets.*
  FROM grade_targets
  JOIN public.users u ON u.email = grade_targets.email::citext
  JOIN course ON true
),
deleted AS (
  DELETE FROM public.student_lesson_test_grades grades
  USING seed_users
  WHERE grades.course_id = seed_users.course_id
    AND grades.user_id = seed_users.user_id
    AND grades.test_type = 'lesson-test'
  RETURNING grades.id
),
ordered_lessons AS (
  SELECT
    l.id AS lesson_id,
    substring(l.slug from 'lesson-([0-9]+)')::int AS lesson_number
  FROM public.lessons l
  JOIN public.modules m ON m.id = l.module_id
  JOIN course ON course.id = m.course_id
  WHERE l.slug ~ '^lesson-[0-9]+$'
),
grade_rows AS (
  SELECT
    seed_users.course_id,
    seed_users.user_id,
    ordered_lessons.lesson_id,
    GREATEST(
      72,
      LEAST(
        97,
        seed_users.base_score + (((ordered_lessons.lesson_number + seed_users.spread_seed) % 7) - 3)
      )
    )::numeric(5,2) AS score_percent,
    ordered_lessons.lesson_number,
    seed_users.spread_seed
  FROM seed_users
  JOIN ordered_lessons ON ordered_lessons.lesson_number <= seed_users.test_count
  WHERE seed_users.test_count > 0
)
INSERT INTO public.student_lesson_test_grades (
  course_id,
  user_id,
  lesson_id,
  test_type,
  score_percent,
  points_earned,
  points_possible,
  attempt_number,
  completed_at,
  updated_at
)
SELECT
  course_id,
  user_id,
  lesson_id,
  'lesson-test',
  score_percent,
  score_percent,
  100,
  1,
  ('2027-01-15'::date + ((lesson_number * 3 + (spread_seed % 3))::int))::timestamptz,
  now()
FROM grade_rows
ON CONFLICT (user_id, lesson_id, test_type, attempt_number) DO UPDATE
SET score_percent = EXCLUDED.score_percent,
    points_earned = EXCLUDED.points_earned,
    points_possible = EXCLUDED.points_possible,
    completed_at = EXCLUDED.completed_at,
    updated_at = now();

COMMIT;
