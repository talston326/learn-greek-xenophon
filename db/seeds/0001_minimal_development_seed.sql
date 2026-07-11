-- Idempotent realistic seed data for Learn Ancient Greek with Xenophon.
-- Creates the Spring 2027 GREK 110 J10 course, course users, roles,
-- curriculum structure, progress, activity, levels, and achievements.

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS public.user_credentials (
  user_id uuid PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  password_hash text NOT NULL,
  password_algorithm text NOT NULL DEFAULT 'pgcrypto-bcrypt',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO public.roles (id, label, description)
VALUES
  ('administrator', 'Administrator', 'Can manage course setup, users, and site settings.'),
  ('professor', 'Professor', 'Can manage course content, students, grading, and announcements.'),
  ('student', 'Student', 'Can complete lessons, exercises, quizzes, and review vocabulary.')
ON CONFLICT (id) DO UPDATE
SET label = EXCLUDED.label,
    description = EXCLUDED.description;

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
ON CONFLICT (code, term) DO UPDATE
SET title = EXCLUDED.title,
    institution = EXCLUDED.institution,
    department = EXCLUDED.department;

CREATE TEMP TABLE seed_mock_students (
  name text NOT NULL,
  email citext NOT NULL,
  roles text[] NOT NULL,
  current_lesson_slug text NOT NULL,
  xp integer NOT NULL,
  weekly_goal_lessons integer NOT NULL,
  course_complete boolean NOT NULL DEFAULT false,
  metrics jsonb NOT NULL DEFAULT '{}'::jsonb,
  summary text
) ON COMMIT DROP;

INSERT INTO seed_mock_students (name, email, roles, current_lesson_slug, xp, weekly_goal_lessons, course_complete, metrics, summary)
VALUES
  ('New Student', 'new.student@example.edu', ARRAY['student'], 'intro-1', 0, 3, false, '{"startedUnit0":true,"lessonsCompleted":0,"quizzesPassed":0,"vocabularySetsCompleted":0,"practiceSessions":0,"activityEvents":1}'::jsonb, 'Unit 0 in progress'),
  ('Codex Student', 'codex.student@example.edu', ARRAY['student'], 'lesson-1', 40, 3, false, '{"startedUnit0":true,"lessonsCompleted":1,"quizzesPassed":0,"vocabularySetsCompleted":0,"practiceSessions":0,"activityEvents":2}'::jsonb, 'Unit 0 complete; Lesson 1 starting'),
  ('John Doe', 'jdoe@email.sc.edu', ARRAY['student'], 'lesson-2', 120, 4, false, '{"quizzesPassed":1,"vocabularySetsCompleted":1,"vocabularyMastered":18,"practiceSessions":1,"activityEvents":4}'::jsonb, 'Lesson 2 in progress'),
  ('Susan Doe', 'sdoe@email.sc.edu', ARRAY['student'], 'lesson-3', 205, 4, false, '{"quizzesPassed":2,"vocabularySetsCompleted":2,"vocabularyMastered":32,"practiceSessions":3,"translationExercisesPassed":1,"activityEvents":5}'::jsonb, 'Lesson 3 in progress'),
  ('Mary Contrary', 'mcontrary@email.sc.edu', ARRAY['student'], 'lesson-4', 300, 4, false, '{"quizzesPassed":3,"vocabularySetsCompleted":3,"vocabularyMastered":44,"practiceSessions":5,"translationExercisesPassed":1,"perfectScoreCount":1,"perfectQuizCount":1,"activityEvents":7}'::jsonb, 'Lesson 4 in progress'),
  ('Sarah Kim', 'skim@email.sc.edu', ARRAY['student'], 'lesson-6', 490, 5, false, '{"quizzesPassed":5,"vocabularySetsCompleted":5,"vocabularyMastered":70,"practiceSessions":7,"translationExercisesPassed":2,"perfectScoreCount":1,"perfectQuizCount":1,"activityEvents":9}'::jsonb, 'Lesson 6 in progress'),
  ('John Davis', 'jdavis@email.sc.edu', ARRAY['student'], 'lesson-8', 650, 5, false, '{"quizzesPassed":7,"vocabularySetsCompleted":7,"vocabularyMastered":88,"practiceSessions":9,"streakDays":7,"translationExercisesPassed":2,"perfectScoreCount":1,"perfectQuizCount":2,"audioItemsCompleted":7,"audioLessonsCompleted":4,"activityEvents":11}'::jsonb, 'Lesson 8 in progress'),
  ('Alex Chen', 'achen@email.sc.edu', ARRAY['student'], 'lesson-10', 800, 5, false, '{"quizzesPassed":9,"vocabularySetsCompleted":9,"vocabularyMastered":110,"practiceSessions":12,"streakDays":8,"translationExercisesPassed":3,"perfectScoreCount":1,"perfectQuizCount":3,"audioItemsCompleted":11,"audioLessonsCompleted":5,"activityEvents":14}'::jsonb, 'Lesson 10 in progress'),
  ('Maria Lopez', 'mlopez@email.sc.edu', ARRAY['student'], 'lesson-12', 940, 5, false, '{"quizzesPassed":11,"vocabularySetsCompleted":11,"vocabularyMastered":128,"practiceSessions":16,"streakDays":9,"translationExercisesPassed":4,"parsingExercisesPassed":5,"readingsCompleted":10,"perfectScoreCount":1,"perfectQuizCount":4,"audioItemsCompleted":12,"audioLessonsCompleted":6,"activityEvents":18}'::jsonb, 'Lesson 12 in progress'),
  ('Thomas Clay', 'tclay@email.sc.edu', ARRAY['student'], 'lesson-13', 1030, 5, false, '{"quizzesPassed":12,"vocabularySetsCompleted":12,"vocabularyMastered":142,"practiceSessions":18,"streakDays":7,"translationExercisesPassed":5,"parsingExercisesPassed":6,"readingsCompleted":12,"perfectScoreCount":2,"perfectQuizCount":5,"audioItemsCompleted":14,"audioLessonsCompleted":7,"activityEvents":20}'::jsonb, 'Module II starting'),
  ('Nikolas Ioannidis', 'nioannidis@email.sc.edu', ARRAY['student'], 'lesson-15', 1180, 5, false, '{"quizzesPassed":14,"vocabularySetsCompleted":14,"vocabularyMastered":160,"practiceSessions":22,"streakDays":8,"translationExercisesPassed":6,"parsingExercisesPassed":7,"readingsCompleted":13,"perfectScoreCount":2,"perfectQuizCount":6,"audioItemsCompleted":15,"audioLessonsCompleted":8,"activityEvents":24}'::jsonb, 'Lesson 15 in progress'),
  ('Patroclus Homer', 'phomer@email.sc.edu', ARRAY['student'], 'lesson-18', 1390, 5, false, '{"quizzesPassed":17,"vocabularySetsCompleted":17,"vocabularyMastered":178,"practiceSessions":24,"streakDays":9,"translationExercisesPassed":7,"parsingExercisesPassed":8,"readingsCompleted":15,"perfectScoreCount":2,"perfectQuizCount":7,"audioItemsCompleted":17,"audioLessonsCompleted":9,"activityEvents":27}'::jsonb, 'Lesson 18 in progress'),
  ('Achilles Homer', 'ahomer@email.sc.edu', ARRAY['student'], 'lesson-20', 1550, 6, false, '{"quizzesPassed":19,"vocabularySetsCompleted":19,"vocabularyMastered":195,"practiceSessions":27,"streakDays":10,"translationExercisesPassed":8,"parsingExercisesPassed":9,"readingsCompleted":17,"perfectScoreCount":2,"perfectQuizCount":8,"audioItemsCompleted":19,"audioLessonsCompleted":10,"activityEvents":30}'::jsonb, 'Lesson 20 in progress'),
  ('Diogenes Laertius', 'dlaertius@email.sc.edu', ARRAY['student'], 'lesson-23', 1740, 6, false, '{"quizzesPassed":22,"vocabularySetsCompleted":22,"vocabularyMastered":220,"practiceSessions":29,"streakDays":11,"translationExercisesPassed":9,"parsingExercisesPassed":10,"readingsCompleted":20,"perfectScoreCount":2,"perfectQuizCount":9,"audioItemsCompleted":21,"audioLessonsCompleted":11,"activityEvents":33}'::jsonb, 'Lesson 23 in progress'),
  ('Plato Aristocles', 'paristocles@email.sc.edu', ARRAY['student'], 'lesson-25', 1950, 6, false, '{"quizzesPassed":24,"vocabularySetsCompleted":24,"vocabularyMastered":240,"practiceSessions":31,"streakDays":12,"translationExercisesPassed":10,"parsingExercisesPassed":11,"readingsCompleted":24,"perfectScoreCount":3,"perfectQuizCount":10,"audioItemsCompleted":24,"audioLessonsCompleted":12,"activityEvents":36}'::jsonb, 'Module III starting'),
  ('Alexandros Papadopoulos', 'apapadopoulos@email.sc.edu', ARRAY['student'], 'lesson-27', 2075, 6, false, '{"quizzesPassed":26,"vocabularySetsCompleted":26,"vocabularyMastered":260,"practiceSessions":34,"streakDays":13,"translationExercisesPassed":11,"parsingExercisesPassed":12,"readingsCompleted":26,"perfectScoreCount":3,"perfectQuizCount":11,"audioItemsCompleted":26,"audioLessonsCompleted":13,"activityEvents":39}'::jsonb, 'Lesson 27 in progress'),
  ('Tom Alston', 'tpalston@email.sc.edu', ARRAY['administrator','professor','student'], 'lesson-29', 2050, 5, false, '{"lessonsCompleted":31,"completionPercent":61,"quizzesPassed":28,"vocabularySetsCompleted":28,"vocabularyMastered":176,"practiceSessions":23,"streakDays":9,"translationExercisesPassed":9,"parsingExercisesPassed":9,"readingsCompleted":18,"perfectScoreCount":2,"perfectQuizCount":7,"audioItemsCompleted":18,"audioLessonsCompleted":9,"activityEvents":28}'::jsonb, 'Module III · Lesson 29 · Purpose clauses'),
  ('Mark Beck', 'BECKMA@mailbox.sc.edu', ARRAY['professor','student'], 'lesson-32', 2220, 5, false, '{"quizzesPassed":31,"vocabularySetsCompleted":31,"vocabularyMastered":215,"practiceSessions":26,"streakDays":8,"translationExercisesPassed":10,"parsingExercisesPassed":10,"readingsCompleted":21,"perfectScoreCount":2,"perfectQuizCount":8,"audioItemsCompleted":22,"audioLessonsCompleted":11,"activityEvents":32}'::jsonb, 'Module III · Lesson 32 · Purpose and infinitives'),
  ('Alexander Great', 'agreat@email.sc.edu', ARRAY['student'], 'lesson-39', 2520, 6, false, '{"quizzesPassed":38,"vocabularySetsCompleted":38,"vocabularyMastered":320,"practiceSessions":42,"streakDays":14,"translationExercisesPassed":16,"parsingExercisesPassed":16,"readingsCompleted":34,"perfectScoreCount":4,"perfectQuizCount":12,"audioItemsCompleted":34,"audioLessonsCompleted":17,"activityEvents":48}'::jsonb, 'Module IV starting'),
  ('Dimitrios Georgiou', 'dgeorgiou@email.sc.edu', ARRAY['student'], 'lesson-48', 3000, 6, true, '{"fullCourseCompleted":true,"quizzesPassed":48,"vocabularySetsCompleted":48,"vocabularyMastered":430,"practiceSessions":60,"streakDays":21,"translationExercisesPassed":24,"parsingExercisesPassed":24,"readingsCompleted":48,"perfectScoreCount":10,"perfectQuizCount":14,"audioItemsCompleted":60,"audioLessonsCompleted":30,"activityEvents":70}'::jsonb, 'Course complete');

WITH seed_users(name, email, roles, current_lesson_slug, level_number, level_label, xp, next_level_xp, weekly_goal_lessons, summary) AS (
  SELECT
    name,
    email,
    roles,
    current_lesson_slug,
    CASE
      WHEN xp >= 2300 THEN 9
      WHEN xp >= 1850 THEN 8
      WHEN xp >= 1450 THEN 7
      WHEN xp >= 1100 THEN 6
      WHEN xp >= 800 THEN 5
      WHEN xp >= 550 THEN 4
      WHEN xp >= 350 THEN 3
      WHEN xp >= 200 THEN 2
      WHEN xp >= 100 THEN 1
      ELSE 0
    END AS level_number,
    CASE
      WHEN xp >= 2300 THEN 'Master of Greek'
      WHEN xp >= 1850 THEN 'Companion of Socrates'
      WHEN xp >= 1450 THEN 'Xenophontic Reader'
      WHEN xp >= 1100 THEN 'Philologian'
      WHEN xp >= 800 THEN 'Scholar'
      WHEN xp >= 550 THEN 'Grammarian'
      WHEN xp >= 350 THEN 'Reader'
      WHEN xp >= 200 THEN 'Student'
      WHEN xp >= 100 THEN 'Apprentice'
      ELSE 'Novice'
    END AS level_label,
    xp,
    CASE
      WHEN xp < 100 THEN 100
      WHEN xp < 200 THEN 200
      WHEN xp < 350 THEN 350
      WHEN xp < 550 THEN 550
      WHEN xp < 800 THEN 800
      WHEN xp < 1100 THEN 1100
      WHEN xp < 1450 THEN 1450
      WHEN xp < 1850 THEN 1850
      WHEN xp < 2300 THEN 2300
      ELSE GREATEST(xp, 2300)
    END AS next_level_xp,
    weekly_goal_lessons,
    summary
  FROM seed_mock_students
),
upserted_users AS (
  INSERT INTO public.users (email, name, status, last_login_at)
  SELECT email::citext, name, 'active', now() - ((row_number() OVER (ORDER BY email))::text || ' hours')::interval
  FROM seed_users
  ON CONFLICT (email) DO UPDATE
  SET name = EXCLUDED.name,
      status = 'active'
  RETURNING id, email, name
),
all_seed_users AS (
  SELECT u.id, su.email::citext AS email, su.name, su.roles, su.current_lesson_slug, su.level_number, su.level_label, su.xp, su.next_level_xp, su.weekly_goal_lessons, su.summary
  FROM seed_users su
  JOIN upserted_users u ON u.email = su.email::citext
),
course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
role_rows AS (
  INSERT INTO public.user_roles (user_id, role_id)
  SELECT asu.id, unnest(asu.roles)
  FROM all_seed_users asu
  ON CONFLICT (user_id, role_id) DO NOTHING
  RETURNING user_id, role_id
),
profile_rows AS (
  INSERT INTO public.user_profiles (user_id, summary)
  SELECT id, summary
  FROM all_seed_users
  ON CONFLICT (user_id) DO UPDATE
  SET summary = EXCLUDED.summary
  RETURNING user_id
),
credential_rows AS (
  INSERT INTO public.user_credentials (user_id, password_hash, password_algorithm)
  SELECT id, crypt('xenophon', gen_salt('bf', 10)), 'development-class-password'
  FROM all_seed_users
  ON CONFLICT (user_id) DO UPDATE
  SET password_hash = EXCLUDED.password_hash,
      password_algorithm = EXCLUDED.password_algorithm
  RETURNING user_id
)
INSERT INTO public.course_memberships (course_id, user_id, enrollment_status)
SELECT course.id, all_seed_users.id, 'active'
FROM course
CROSS JOIN all_seed_users
ON CONFLICT (course_id, user_id) DO UPDATE
SET enrollment_status = 'active';

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
canonical_seed_users AS (
  SELECT email FROM seed_mock_students
),
duplicate_mock_users AS (
  SELECT u.id
  FROM public.users u
  WHERE u.name IN ('New Student', 'Codex Student')
    AND NOT EXISTS (
      SELECT 1
      FROM canonical_seed_users csu
      WHERE csu.email = u.email
    )
)
UPDATE public.course_memberships cm
SET enrollment_status = 'dropped'
FROM course c, duplicate_mock_users dmu
WHERE cm.course_id = c.id
  AND cm.user_id = dmu.id;

WITH seed_users(email, roles) AS (
  SELECT email, roles
  FROM seed_mock_students
),
seed_user_rows AS (
  SELECT u.id, su.roles
  FROM seed_users su
  JOIN public.users u ON u.email = su.email::citext
)
DELETE FROM public.user_roles ur
USING seed_user_rows sur
WHERE ur.user_id = sur.id
  AND NOT (ur.role_id = ANY(sur.roles));

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
seed_modules(slug, label, title, subtitle, description, module_type, sort_order) AS (
  VALUES
    ('intro', 'Introduction', 'The Greek Alphabet', 'Entering the World of Greek', 'Alphabet, sound, and the habits of learning Greek.', 'intro', 0),
    ('module-1', 'Module I', 'σοφία (Wisdom and Socrates)', NULL, 'Learning, inquiry, and the examined life.', 'module', 1),
    ('module-2', 'Module II', 'ἀνδρεία (Courage and Leadership)', NULL, 'Endurance, fear, and action in crisis.', 'module', 2),
    ('module-3', 'Module III', 'σωφροσύνη (Self-Control and Discipline)', NULL, 'Mastery of self, household, and desire.', 'module', 3),
    ('module-4', 'Module IV', 'δικαιοσύνη (Justice and the City)', NULL, 'Law, duty, and moral responsibility.', 'module', 4)
)
INSERT INTO public.modules (course_id, slug, label, title, subtitle, description, module_type, sort_order)
SELECT course.id, seed_modules.slug, seed_modules.label, seed_modules.title, seed_modules.subtitle, seed_modules.description, seed_modules.module_type, seed_modules.sort_order
FROM course
CROSS JOIN seed_modules
ON CONFLICT (course_id, slug) DO UPDATE
SET label = EXCLUDED.label,
    title = EXCLUDED.title,
    subtitle = EXCLUDED.subtitle,
    description = EXCLUDED.description,
    module_type = EXCLUDED.module_type,
    sort_order = EXCLUDED.sort_order;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
seed_lessons(module_slug, slug, number_label, title, grammar_focus, page_url, sort_order) AS (
  VALUES
    ('intro', 'intro-1', 'Intro 1', 'What is Ancient Greek?', 'Alphabet overview, historical context', 'lesson-introduction.html#intro-part-1', 1),
    ('module-1', 'lesson-1', 'Lesson 1', 'Xenophon at Home', 'Nominative singular, accusative singular, present active indicative, definite article, basic noun/adjective agreement', 'lessons.html#lesson-1', 1),
    ('module-1', 'lesson-2', 'Lesson 2', 'The Household of Xenophon', 'Second-declension nouns, adjective agreement, possessive genitives, εἰμί, simple prepositions', 'lessons.html#lesson-2', 2),
    ('module-1', 'lesson-3', 'Lesson 3', 'The Education of Xenophon', 'Third-person present verbs, accusative direct objects, infinitives, introductory middle/passive forms, demonstratives', 'lessons.html#lesson-3', 3),
    ('module-1', 'lesson-4', 'Lesson 4', 'The Student and the Teacher', 'First declension nouns, agreement, subject-object relationships', 'lesson-4-first-declension.html', 4),
    ('module-1', 'lesson-5', 'Lesson 5', 'Learning Through Questioning', 'Adjectives, agreement, attributive vs predicate position', 'lessons.html#lesson-5', 5),
    ('module-1', 'lesson-6', 'Lesson 6', 'The Search for Knowledge', 'Second declension nouns, prepositions with cases', 'lessons.html#lesson-6', 6),
    ('module-1', 'lesson-7', 'Lesson 7', 'Examining Oneself', 'Middle/passive voice present, reflexive sense', 'lessons.html#lesson-7', 7),
    ('module-1', 'lesson-8', 'Lesson 8', 'In the Agora', 'Prepositions expanded, dative case introduction', 'lessons.html#lesson-8', 8),
    ('module-1', 'lesson-9', 'Lesson 9', 'Socrates Questions All', 'Imperfect tense, past continuous action', 'lessons.html#lesson-9', 9),
    ('module-1', 'lesson-10', 'Lesson 10', 'To Know and To Learn', 'Infinitives intro, complementary infinitives', 'lessons.html#lesson-10', 10),
    ('module-1', 'lesson-11', 'Lesson 11', 'The Thinking Mind', 'Participles intro, present active participle', 'lessons.html#lesson-11', 11),
    ('module-1', 'lesson-12', 'Lesson 12', 'The Examined Life', 'Module review: present, imperfect, infinitives, participles', 'lessons.html#lesson-12', 12),
    ('module-2', 'lesson-13', 'Lesson 13', 'The General Leads', 'Contract verbs, present system', 'lessons.html#lesson-13', 1),
    ('module-2', 'lesson-14', 'Lesson 14', 'Trust in Leadership', 'Imperfect of contract verbs, repeated past action', 'lessons.html#lesson-14', 2),
    ('module-2', 'lesson-15', 'Lesson 15', 'Hope and Expectation', 'Future tense, predictive statements', 'lessons.html#lesson-15', 3),
    ('module-2', 'lesson-16', 'Lesson 16', 'If They Fight', 'Subjunctive mood intro, ἐάν clauses', 'lessons.html#lesson-16', 4),
    ('module-2', 'lesson-17', 'Lesson 17', 'Fear and Courage', 'Infinitives expanded, verbs of fearing and fighting', 'lessons.html#lesson-17', 5),
    ('module-2', 'lesson-18', 'Lesson 18', 'The Battle Begins', 'Aorist tense intro, simple past action', 'lessons.html#lesson-18', 6),
    ('module-2', 'lesson-19', 'Lesson 19', 'Those Who Stand Firm', 'Present participles, descriptive action', 'lessons.html#lesson-19', 7),
    ('module-2', 'lesson-20', 'Lesson 20', 'Victory Won', 'Aorist participles, sequence of action', 'lessons.html#lesson-20', 8),
    ('module-2', 'lesson-21', 'Lesson 21', 'The Army Without Leaders', 'Integrated narrative: tense contrast, participles', 'lessons.html#lesson-21', 9),
    ('module-2', 'lesson-22', 'Lesson 22', 'Do Not Fear!', 'Imperatives, commands, prohibition', 'lessons.html#lesson-22', 10),
    ('module-2', 'lesson-23', 'Lesson 23', 'So Brave That...', 'Result clauses with infinitive', 'lessons.html#lesson-23', 11),
    ('module-2', 'lesson-24', 'Lesson 24', 'Courage Under Fire', 'Module review: subjunctive, aorist, participles', 'lessons.html#lesson-24', 12),
    ('module-3', 'lesson-25', 'Lesson 25', 'Mastering Oneself', 'Middle voice present, reflexive meaning', 'lessons.html#lesson-25', 1),
    ('module-3', 'lesson-26', 'Lesson 26', 'Habits of Discipline', 'Middle voice imperfect and aorist', 'lessons.html#lesson-26', 2),
    ('module-3', 'lesson-27', 'Lesson 27', 'What Must Be Done', 'Indirect statement, accusative plus infinitive', 'lessons.html#lesson-27', 3),
    ('module-3', 'lesson-28', 'Lesson 28', 'The Desire to Live Well', 'Complementary infinitives expanded', 'lessons.html#lesson-28', 4),
    ('module-3', 'lesson-29', 'Lesson 29', 'Working with Purpose', 'Purpose clauses with subjunctive', 'lessons.html#lesson-29', 5),
    ('module-3', 'lesson-30', 'Lesson 30', 'Knowing Oneself', 'Reflexive pronouns', 'lessons.html#lesson-30', 6),
    ('module-3', 'lesson-31', 'Lesson 31', 'If a Man is Self-Controlled', 'Conditional sentences, simple conditions', 'lessons.html#lesson-31', 7),
    ('module-3', 'lesson-32', 'Lesson 32', 'The Well-Ordered Household', 'Integrated reading: purpose and infinitives', 'lessons.html#lesson-32', 8),
    ('module-3', 'lesson-33', 'Lesson 33', 'Training the Self', 'Middle participles', 'lessons.html#lesson-33', 9),
    ('module-3', 'lesson-34', 'Lesson 34', 'Nothing in Excess', 'Negation, moderation vocabulary', 'lessons.html#lesson-34', 10),
    ('module-3', 'lesson-35', 'Lesson 35', 'What is Self-Control?', 'Dialogue structure, indirect discourse', 'lessons.html#lesson-35', 11),
    ('module-3', 'lesson-36', 'Lesson 36', 'The Disciplined Life', 'Module review: middle voice, infinitives, conditionals', 'lessons.html#lesson-36', 12),
    ('module-4', 'lesson-37', 'Lesson 37', 'Justice is the Greatest Good', 'Predicate nouns, ὅτι clauses', 'lessons.html#lesson-37', 1),
    ('module-4', 'lesson-38', 'Lesson 38', 'They Say He is Just', 'Indirect statement with ὅτι and ὡς', 'lessons.html#lesson-38', 2),
    ('module-4', 'lesson-39', 'Lesson 39', 'The Accusation', 'Accusative plus infinitive reported speech', 'lessons.html#lesson-39', 3),
    ('module-4', 'lesson-40', 'Lesson 40', 'Speaking the Truth', 'Participles in argument', 'lessons.html#lesson-40', 4),
    ('module-4', 'lesson-41', 'Lesson 41', 'The Just Man', 'Relative clauses', 'lessons.html#lesson-41', 5),
    ('module-4', 'lesson-42', 'Lesson 42', 'What is Justice?', 'Contrast and comparison structures', 'lessons.html#lesson-42', 6),
    ('module-4', 'lesson-43', 'Lesson 43', 'Law and Fear', 'Verb complements and reinforcing structures', 'lessons.html#lesson-43', 7),
    ('module-4', 'lesson-44', 'Lesson 44', 'If They Act Justly', 'Future more vivid conditions', 'lessons.html#lesson-44', 8),
    ('module-4', 'lesson-45', 'Lesson 45', 'The Defense of Socrates', 'Negation and indirect discourse reinforcement', 'lessons.html#lesson-45', 9),
    ('module-4', 'lesson-46', 'Lesson 46', 'Why They Are Angry', 'Cause clauses', 'lessons.html#lesson-46', 10),
    ('module-4', 'lesson-47', 'Lesson 47', 'The Trial of Socrates', 'Infinitives of obligation, complex reasoning', 'lessons.html#lesson-47', 11),
    ('module-4', 'lesson-48', 'Lesson 48', 'Justice and the Soul', 'Module review: advanced clauses, discourse', 'lessons.html#lesson-48', 12)
)
INSERT INTO public.lessons (module_id, slug, number_label, title, grammar_focus, page_url, sort_order, is_published)
SELECT m.id, sl.slug, sl.number_label, sl.title, sl.grammar_focus, sl.page_url, sl.sort_order, true
FROM seed_lessons sl
JOIN course c ON true
JOIN public.modules m ON m.course_id = c.id AND m.slug = sl.module_slug
ON CONFLICT (module_id, slug) DO UPDATE
SET number_label = EXCLUDED.number_label,
    title = EXCLUDED.title,
    grammar_focus = EXCLUDED.grammar_focus,
    page_url = EXCLUDED.page_url,
    sort_order = EXCLUDED.sort_order,
    is_published = true;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
obsolete_intro_lessons AS (
  SELECT l.id
  FROM public.lessons l
  JOIN public.modules m ON m.id = l.module_id
  JOIN course c ON c.id = m.course_id
  WHERE m.slug = 'intro'
    AND l.slug IN ('intro-2', 'intro-3')
)
DELETE FROM public.lessons l
USING obsolete_intro_lessons oil
WHERE l.id = oil.id;

WITH placeholder_items AS (
  SELECT id
  FROM public.vocabulary_items
  WHERE display_form = 'Vocabulary will be added later.'
    AND gloss = 'Course vocabulary placeholder'
)
DELETE FROM public.lesson_vocabulary lv
USING placeholder_items pi
WHERE lv.vocabulary_item_id = pi.id;

DELETE FROM public.vocabulary_items vi
WHERE vi.display_form = 'Vocabulary will be added later.'
  AND vi.gloss = 'Course vocabulary placeholder'
  AND NOT EXISTS (
    SELECT 1
    FROM public.lesson_vocabulary lv
    WHERE lv.vocabulary_item_id = vi.id
  );

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
seed_vocabulary(lesson_slug, sort_order, category, display_form, gloss) AS (
  VALUES
    ('lesson-1', 1, 'Verbs', 'ἄγει', 'leads'),
    ('lesson-1', 2, 'Verbs', 'βαδίζει', 'walks'),
    ('lesson-1', 3, 'Verbs', 'βλέπει', 'sees, looks'),
    ('lesson-1', 4, 'Verbs', 'θεραπεύει', 'takes care of, tends'),
    ('lesson-1', 5, 'Verbs', 'ἕπεται', 'follows'),
    ('lesson-1', 6, 'Verbs', 'ἔχει', 'has'),
    ('lesson-1', 7, 'Verbs', 'καλεῖ', 'calls'),
    ('lesson-1', 8, 'Verbs', 'λέγει', 'says'),
    ('lesson-1', 9, 'Verbs', 'μένει', 'remains, stays'),
    ('lesson-1', 10, 'Verbs', 'οἰκεῖ', 'lives'),
    ('lesson-1', 11, 'Verbs', 'ποιεῖ', 'does, makes'),
    ('lesson-1', 12, 'Verbs', 'φέρει', 'carries'),
    ('lesson-1', 13, 'Verbs', 'ὑλακτεῖ', 'barks'),
    ('lesson-1', 14, 'Verbs', 'χαίρει', 'rejoices, is glad'),
    ('lesson-1', 15, 'Nouns', 'ὁ ἀγρός', 'field'),
    ('lesson-1', 16, 'Nouns', 'ὁ ἀνήρ', 'man, husband'),
    ('lesson-1', 17, 'Nouns', 'αἱ Ἀθῆναι', 'Athens'),
    ('lesson-1', 18, 'Nouns', 'ὁ δεσπότης', 'master'),
    ('lesson-1', 19, 'Nouns', 'τὸ δεῖπνον', 'meal'),
    ('lesson-1', 20, 'Nouns', 'ἡ θύρα', 'door'),
    ('lesson-1', 21, 'Nouns', 'ὁ ἵππος', 'horse'),
    ('lesson-1', 22, 'Nouns', 'ὁ ἱππεύς', 'cavalryman, horseman'),
    ('lesson-1', 23, 'Nouns', 'τὸ ἱππικόν', 'cavalry'),
    ('lesson-1', 24, 'Nouns', 'ὁ κύων', 'dog'),
    ('lesson-1', 25, 'Nouns', 'ὁ λόφος', 'hill'),
    ('lesson-1', 26, 'Nouns', 'ἡ μήτηρ', 'mother'),
    ('lesson-1', 27, 'Nouns', 'ὁ νεανίας', 'young man'),
    ('lesson-1', 28, 'Nouns', 'ὁ οἶκος', 'house'),
    ('lesson-1', 29, 'Nouns', 'ὁ πατήρ', 'father'),
    ('lesson-1', 30, 'Nouns', 'ὁ παῖς', 'child, boy'),
    ('lesson-1', 31, 'Nouns', 'ὁ σῖτος', 'grain'),
    ('lesson-1', 32, 'Nouns', 'ὁ υἱός', 'son'),
    ('lesson-1', 33, 'Nouns', 'τὸ ὕδωρ', 'water'),
    ('lesson-1', 34, 'Nouns', 'ὁ Ξενοφῶν', 'Xenophon'),
    ('lesson-1', 35, 'Nouns', 'ὁ Γρύλλος', 'Gryllus'),
    ('lesson-1', 36, 'Nouns', 'ἡ Ἐρχία', 'Erchia'),
    ('lesson-1', 37, 'Adjectives', 'ἀγαθός', 'good'),
    ('lesson-1', 38, 'Adjectives', 'Ἀθηναῖος', 'Athenian'),
    ('lesson-1', 39, 'Adjectives', 'ἰσχυρός', 'strong'),
    ('lesson-1', 40, 'Adjectives', 'καλός', 'beautiful, noble'),
    ('lesson-1', 41, 'Adjectives', 'νέος', 'young'),
    ('lesson-1', 42, 'Other', 'ἐν', 'in'),
    ('lesson-1', 43, 'Other', 'ἐπί', 'on'),
    ('lesson-1', 44, 'Other', 'εἶτα', 'then'),
    ('lesson-1', 45, 'Other', 'οὐ', 'not'),
    ('lesson-1', 46, 'Other', 'περί', 'around'),
    ('lesson-1', 47, 'Other', 'πρός', 'toward, to'),
    ('lesson-2', 1, 'Proper Names', 'Γρύλλος', 'Gryllus'),
    ('lesson-2', 2, 'Adjectives', 'ἀγαθός, -ή, -όν', 'good'),
    ('lesson-2', 3, 'Nouns', 'ἀγρός, ὁ', 'field; farm'),
    ('lesson-2', 4, 'Nouns', 'ἄρτος, ὁ', 'bread'),
    ('lesson-2', 5, 'Verbs', 'βαδίζω', 'walk; go'),
    ('lesson-2', 6, 'Nouns', 'γεωργός, ὁ', 'farmer'),
    ('lesson-2', 7, 'Nouns', 'δεῖπνον, τό', 'dinner; evening meal'),
    ('lesson-2', 8, 'Verbs', 'δειπνέω', 'dine; eat dinner'),
    ('lesson-2', 9, 'Nouns', 'δοῦλος, ὁ', 'male slave; male household servant'),
    ('lesson-2', 10, 'Nouns', 'δούλη, ἡ', 'female slave; female household servant'),
    ('lesson-2', 11, 'Verbs', 'ἐργάζομαι', 'work'),
    ('lesson-2', 12, 'Nouns', 'ἔργον, τό', 'work; task'),
    ('lesson-2', 13, 'Verbs', 'ἔρχομαι', 'come; go'),
    ('lesson-2', 14, 'Nouns', 'ἵππος, ὁ', 'horse'),
    ('lesson-2', 15, 'Nouns', 'κῆπος, ὁ', 'garden'),
    ('lesson-2', 16, 'Nouns', 'γυνή, ἡ', 'woman'),
    ('lesson-2', 17, 'Verbs', 'κελεύω', 'order; command; instruct'),
    ('lesson-2', 18, 'Verbs', 'μένω', 'remain; stay'),
    ('lesson-2', 19, 'Nouns', 'μήτηρ, ἡ', 'mother'),
    ('lesson-2', 20, 'Adjectives', 'μικρός, -ά, -όν', 'small'),
    ('lesson-2', 21, 'Nouns', 'ὄνος, ὁ/ἡ', 'donkey'),
    ('lesson-2', 22, 'Nouns', 'οἰκία, ἡ', 'house'),
    ('lesson-2', 23, 'Verbs', 'οἰκέω', 'live; dwell'),
    ('lesson-2', 24, 'Nouns', 'οἶκος, ὁ', 'household; home'),
    ('lesson-2', 25, 'Nouns', 'παῖς, ὁ/ἡ', 'child; boy; girl'),
    ('lesson-2', 26, 'Verbs', 'παρασκευάζω', 'prepare'),
    ('lesson-2', 27, 'Nouns', 'πατήρ, ὁ', 'father'),
    ('lesson-2', 28, 'Nouns', 'πέπλος, ὁ', 'robe; garment'),
    ('lesson-2', 29, 'Nouns', 'ὕδωρ, τό', 'water'),
    ('lesson-2', 30, 'Verbs', 'ὑφαίνω', 'weave'),
    ('lesson-2', 31, 'Verbs', 'φέρω', 'carry; bring'),
    ('lesson-2', 32, 'Verbs', 'φιλέω', 'love; be fond of'),
    ('lesson-2', 33, 'Verbs', 'φυλάσσω', 'guard; watch over'),
    ('lesson-2', 34, 'Nouns', 'ξύλον, τό', 'wood; piece of firewood'),
    ('lesson-3', 1, 'Proper Names', 'Ὅμηρος, ὁ', 'Homer'),
    ('lesson-3', 2, 'New Required Vocabulary', 'ἀκούω', 'hear; listen to'),
    ('lesson-3', 3, 'New Required Vocabulary', 'ἀναγιγνώσκω', 'read; read aloud'),
    ('lesson-3', 4, 'New Required Vocabulary', 'βλέπω', 'see; look at'),
    ('lesson-3', 5, 'New Required Vocabulary', 'βούλομαι', 'wish; want'),
    ('lesson-3', 6, 'New Required Vocabulary', 'γενέσθαι', 'to become'),
    ('lesson-3', 7, 'New Required Vocabulary', 'γράμμα, τό', 'letter; written character'),
    ('lesson-3', 8, 'New Required Vocabulary', 'γράφω', 'write'),
    ('lesson-3', 9, 'New Required Vocabulary', 'διδάσκαλος, ὁ', 'teacher'),
    ('lesson-3', 10, 'New Required Vocabulary', 'διδασκαλεῖον, τό', 'school'),
    ('lesson-3', 11, 'New Required Vocabulary', 'διδάσκω', 'teach'),
    ('lesson-3', 12, 'New Required Vocabulary', 'ἐκεῖ', 'there'),
    ('lesson-3', 13, 'New Required Vocabulary', 'ἐκεῖνος, ἐκείνη, ἐκεῖνο', 'that'),
    ('lesson-3', 14, 'New Required Vocabulary', 'ἔπος, τό', 'word; verse; epic verse'),
    ('lesson-3', 15, 'New Required Vocabulary', 'ἐσθίω', 'eat'),
    ('lesson-3', 16, 'New Required Vocabulary', 'θεραπεύω', 'tend; care for'),
    ('lesson-3', 17, 'New Required Vocabulary', 'κομίζω', 'carry; bring'),
    ('lesson-3', 18, 'New Required Vocabulary', 'λούομαι', 'wash oneself; bathe'),
    ('lesson-3', 19, 'New Required Vocabulary', 'μανθάνω', 'learn'),
    ('lesson-3', 20, 'New Required Vocabulary', 'μουσική, ἡ', 'music'),
    ('lesson-3', 21, 'New Required Vocabulary', 'νέος, νέα, νέον', 'young'),
    ('lesson-3', 22, 'New Required Vocabulary', 'οὗτος, αὕτη, τοῦτο', 'this'),
    ('lesson-3', 23, 'New Required Vocabulary', 'παιδαγωγός, ὁ', 'attendant who escorts and supervises a boy'),
    ('lesson-3', 24, 'New Required Vocabulary', 'παιδεύω', 'educate; train'),
    ('lesson-3', 25, 'New Required Vocabulary', 'ποιέω', 'do; make'),
    ('lesson-3', 26, 'New Required Vocabulary', 'σκοπέω', 'examine; oversee'),
    ('lesson-3', 27, 'New Required Vocabulary', 'σοφός, σοφή, σοφόν', 'wise'),
    ('lesson-3', 28, 'New Required Vocabulary', 'ζῷον, τό', 'animal'),
    ('lesson-3', 29, 'Review Vocabulary', 'ἀγρός, ὁ', 'field; farm'),
    ('lesson-3', 30, 'Review Vocabulary', 'ἄρτος, ὁ', 'bread'),
    ('lesson-3', 31, 'Review Vocabulary', 'δοῦλος, ὁ', 'male slave; male household servant'),
    ('lesson-3', 32, 'Review Vocabulary', 'δούλη, ἡ', 'female slave; female household servant'),
    ('lesson-3', 33, 'Review Vocabulary', 'ἔργον, τό', 'work; task'),
    ('lesson-3', 34, 'Review Vocabulary', 'ἵππος, ὁ', 'horse'),
    ('lesson-3', 35, 'Review Vocabulary', 'κελεύω', 'order; command; instruct'),
    ('lesson-3', 36, 'Review Vocabulary', 'κῆπος, ὁ', 'garden'),
    ('lesson-3', 37, 'Review Vocabulary', 'μήτηρ, ἡ', 'mother'),
    ('lesson-3', 38, 'Review Vocabulary', 'οἰκία, ἡ', 'house'),
    ('lesson-3', 39, 'Review Vocabulary', 'ὄνος, ὁ/ἡ', 'donkey'),
    ('lesson-3', 40, 'Review Vocabulary', 'παῖς, ὁ/ἡ', 'child; boy; girl'),
    ('lesson-3', 41, 'Review Vocabulary', 'πατήρ, ὁ', 'father'),
    ('lesson-3', 42, 'Review Vocabulary', 'πέπλος, ὁ', 'robe; garment'),
    ('lesson-3', 43, 'Review Vocabulary', 'παρασκευάζω', 'prepare'),
    ('lesson-3', 44, 'Review Vocabulary', 'ὕδωρ, τό', 'water'),
    ('lesson-3', 45, 'Review Vocabulary', 'ὑφαίνω', 'weave'),
    ('lesson-3', 46, 'Review Vocabulary', 'φέρω', 'carry; bring'),
    ('lesson-3', 47, 'Review Vocabulary', 'φιλέω', 'love; be fond of'),
    ('lesson-3', 48, 'Review Vocabulary', 'φυλάσσω', 'guard; watch over'),
    ('lesson-3', 49, 'Review Vocabulary', 'ξύλον, τό', 'wood; piece of firewood'),
    ('lesson-4', 1, 'Verbs', 'διδάσκει', 'teaches'),
    ('lesson-4', 2, 'Verbs', 'μανθάνει', 'learns'),
    ('lesson-4', 3, 'Verbs', 'γράφει', 'writes'),
    ('lesson-4', 4, 'Nouns', 'ἡ παιδεία', 'education, training'),
    ('lesson-4', 5, 'Nouns', 'ἡ τέχνη', 'skill, craft'),
    ('lesson-4', 6, 'Nouns', 'ἡ γραφή', 'writing'),
    ('lesson-4', 7, 'Adjectives', 'καλή', 'good, noble, beautiful'),
    ('lesson-4', 8, 'Adjectives', 'σοφή', 'wise'),
    ('lesson-4', 9, 'Prepositional Phrases', 'παρὰ τῷ διδασκάλῳ', 'beside / with the teacher'),
    ('lesson-4', 10, 'Adverbs', 'καλῶς', 'well'),
    ('lesson-4', 11, 'Conjunctions', 'καί', 'and, also'),
    ('lesson-4', 12, 'Particles', 'δέ', 'and, but; marks a new step'),
    ('lesson-4', 13, 'Proper Names and Adjectives', 'Ξενοφῶν', 'Xenophon'),
    ('lesson-4', 14, 'Proper Names and Adjectives', 'Σωκρατικός', 'Socratic')
),
target_vocabulary_lessons AS (
  SELECT DISTINCT l.id
  FROM seed_vocabulary sv
  JOIN course c ON true
  JOIN public.modules m ON m.course_id = c.id
  JOIN public.lessons l ON l.module_id = m.id AND l.slug = sv.lesson_slug
),
deleted_lesson_vocabulary AS (
  DELETE FROM public.lesson_vocabulary lv
  USING target_vocabulary_lessons tl
  WHERE lv.lesson_id = tl.id
  RETURNING lv.lesson_id
),
delete_complete AS (
  SELECT count(*) AS deleted_rows
  FROM deleted_lesson_vocabulary
),
upserted_vocabulary AS (
  INSERT INTO public.vocabulary_items (
    lemma,
    display_form,
    part_of_speech,
    gloss,
    morphology
  )
  SELECT
    display_form,
    display_form,
    category,
    gloss,
    jsonb_build_object(
      'source', 'minimal_development_seed',
      'category', category
    )
  FROM seed_vocabulary
  CROSS JOIN delete_complete
  WHERE true
  ON CONFLICT (lemma, display_form, gloss) DO UPDATE
  SET part_of_speech = EXCLUDED.part_of_speech,
      morphology = EXCLUDED.morphology,
      updated_at = now()
  RETURNING id, display_form, gloss
)
INSERT INTO public.lesson_vocabulary (lesson_id, vocabulary_item_id, sort_order)
SELECT l.id, uv.id, sv.sort_order
FROM seed_vocabulary sv
JOIN upserted_vocabulary uv
  ON uv.display_form = sv.display_form
 AND uv.gloss = sv.gloss
JOIN course c ON true
JOIN public.modules m ON m.course_id = c.id
JOIN public.lessons l ON l.module_id = m.id AND l.slug = sv.lesson_slug
ON CONFLICT (lesson_id, vocabulary_item_id) DO UPDATE
SET sort_order = EXCLUDED.sort_order;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
course_lessons AS (
  SELECT l.id, l.slug, l.title
  FROM public.lessons l
  JOIN public.modules m ON m.id = l.module_id
  JOIN course c ON c.id = m.course_id
),
seed_segments AS (
  SELECT id AS lesson_id, 'lesson-start' AS slug, title AS title, 1 AS sort_order FROM course_lessons
  UNION ALL
  SELECT id, 'intro-part-1', 'Orientation', 2 FROM course_lessons WHERE slug = 'intro-1'
)
INSERT INTO public.lesson_segments (lesson_id, slug, title, body_markdown, sort_order)
SELECT lesson_id, slug, title, 'Seeded lesson segment for dashboard and progress testing.', sort_order
FROM seed_segments
ON CONFLICT (lesson_id, slug) DO UPDATE
SET title = EXCLUDED.title,
    body_markdown = EXCLUDED.body_markdown,
    sort_order = EXCLUDED.sort_order;

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
)
DELETE FROM public.levels levels
USING course
WHERE levels.course_id = course.id
  AND levels.level_number NOT BETWEEN 0 AND 9;

WITH seed_achievements(slug, label, tier, sort_order, description, image_path, criteria, locked_description) AS (
  VALUES
    ('first-steps', 'First Steps', 'bronze', 1, 'Started the course path and took the first step into Greek.', 'assets/awards/Bronze-1-First-Steps.png', '{"startedUnit0":true}'::jsonb, 'Start Unit 0 or complete any course activity.'),
    ('first-lesson', 'First Lesson', 'bronze', 2, 'Completed the first lesson-unit.', 'assets/awards/Bronze-2-First-Lesson.png', '{"lessonsCompleted":1}'::jsonb, 'Complete at least one lesson-unit.'),
    ('first-quiz', 'First Quiz', 'bronze', 3, 'Passed the first quiz.', 'assets/awards/Bronze-3-First-Quiz.png', '{"quizzesPassed":1}'::jsonb, 'Pass one quiz.'),
    ('first-vocabulary-set', 'First Vocabulary Set', 'bronze', 4, 'Completed a first vocabulary set.', 'assets/awards/Bronze-4-First-Vocabulary-Set.png', '{"vocabularySetsCompleted":1}'::jsonb, 'Complete or master one lesson vocabulary set.'),
    ('first-practice-session', 'First Practice Session', 'bronze', 5, 'Completed a first practice session.', 'assets/awards/Bronze-5-First-Practice-Session.png', '{"practiceSessions":1}'::jsonb, 'Complete one practice session.'),
    ('five-lessons-completed', 'Five Lessons Completed', 'bronze', 6, 'Completed five lesson-units.', 'assets/awards/Bronze-6-Five-Lessons-Completed.png', '{"lessonsCompleted":5}'::jsonb, 'Complete five lesson-units.'),
    ('seven-day-streak', 'Seven-Day Streak', 'bronze', 7, 'Built a seven-day Greek study streak.', 'assets/awards/Bronze-7-Seven-Day-Streak.png', '{"streakDays":7}'::jsonb, 'Study for seven days in a row.'),
    ('first-perfect-score', 'First Perfect Score', 'bronze', 8, 'Earned a first perfect quiz or activity score.', 'assets/awards/Bronze-8-First-Perfect-Score.png', '{"perfectScoreCount":1}'::jsonb, 'Earn one perfect score.'),
    ('one-hundred-words-mastered', '100 Words Mastered', 'silver', 1, 'Mastered one hundred Greek vocabulary words.', 'assets/awards/Silver-1-100-Words-Mastered.png', '{"vocabularyMastered":100}'::jsonb, 'Master 100 vocabulary words.'),
    ('first-translation', 'First Translation', 'silver', 2, 'Passed a first translation exercise.', 'assets/awards/Silver-2-First-Translation.png', '{"translationExercisesPassed":1}'::jsonb, 'Pass one translation exercise.'),
    ('parsing-apprentice', 'Parsing Apprentice', 'silver', 3, 'Passed five parsing exercises.', 'assets/awards/Silver-3-Parsing-Apprentice.png', '{"parsingExercisesPassed":5}'::jsonb, 'Pass five parsing exercises.'),
    ('reader-of-greek', 'Reader of Greek', 'silver', 4, 'Completed sustained Greek reading work.', 'assets/awards/Silver-4-Reader-of-Greek.png', '{"readingsCompleted":10,"moduleCompleted":"module-1"}'::jsonb, 'Complete ten readings or finish Module I.'),
    ('audio-explorer', 'Audio Explorer', 'silver', 5, 'Completed repeated audio and pronunciation work.', 'assets/awards/Silver-5-Audio-Explorer.png', '{"audioItemsCompleted":10,"audioLessonsCompleted":5}'::jsonb, 'Complete ten audio items or audio work for five lessons.'),
    ('twenty-practice-sessions', '20 Practice Sessions', 'silver', 6, 'Completed twenty practice sessions.', 'assets/awards/Silver-6-20-practice-sessions.png', '{"practiceSessions":20}'::jsonb, 'Complete twenty practice sessions.'),
    ('ten-perfect-quizzes', '10 Perfect Quizzes', 'silver', 7, 'Earned ten perfect quiz scores.', 'assets/awards/Silver-7-10-Perfect-Quizzes.png', '{"perfectQuizCount":10}'::jsonb, 'Earn ten perfect quiz scores.'),
    ('friend-of-athena', 'Friend of Athena', 'silver', 8, 'Joined wisdom with steady practice.', 'assets/awards/Silver-8-Friend-of-Athena.png', '{"moduleCompleted":"module-1","streakDays":7,"practiceSessionsAlternative":20}'::jsonb, 'Finish Module I with a seven-day streak, or complete twenty practice sessions.'),
    ('wisdom', 'Wisdom', 'gold', 1, 'Completed Module I, Wisdom and Socrates.', 'assets/awards/Gold-1-Wisdom.png', '{"moduleCompleted":"module-1"}'::jsonb, 'Complete Lessons 1-12.'),
    ('courage', 'Courage', 'gold', 2, 'Completed Module II, Courage and Leadership.', 'assets/awards/Gold-2-Courage.png', '{"moduleCompleted":"module-2"}'::jsonb, 'Complete Lessons 13-24.'),
    ('self-control', 'Self-Control', 'gold', 3, 'Completed Module III, Self-Control and Discipline.', 'assets/awards/Gold-3-Self-Control.png', '{"moduleCompleted":"module-3"}'::jsonb, 'Complete Lessons 25-36.'),
    ('justice', 'Justice', 'gold', 4, 'Completed Module IV, Justice and the City/Soul.', 'assets/awards/Gold-4-Justice.png', '{"moduleCompleted":"module-4"}'::jsonb, 'Complete Lessons 37-48.'),
    ('student-of-socrates', 'Student of Socrates', 'gold', 5, 'Completed the full course through Lesson 48.', 'assets/awards/Gold-5-Student-of-Socrates.png', '{"fullCourseCompleted":true}'::jsonb, 'Complete the full course through Lesson 48.')
)
INSERT INTO public.achievements (slug, label, description, icon, class_name, criteria, tier, sort_order, image_path, locked_description)
SELECT slug, label, description, '', '', criteria, tier, sort_order, image_path, locked_description
FROM seed_achievements
ON CONFLICT (slug) DO UPDATE
SET label = EXCLUDED.label,
    description = EXCLUDED.description,
    icon = EXCLUDED.icon,
    class_name = EXCLUDED.class_name,
    criteria = EXCLUDED.criteria,
    tier = EXCLUDED.tier,
    sort_order = EXCLUDED.sort_order,
    image_path = EXCLUDED.image_path,
    locked_description = EXCLUDED.locked_description;

WITH seed_users(email, current_lesson_slug, level_number, level_label, xp, next_level_xp, weekly_goal_lessons) AS (
  SELECT
    email,
    current_lesson_slug,
    CASE
      WHEN xp >= 2300 THEN 9
      WHEN xp >= 1850 THEN 8
      WHEN xp >= 1450 THEN 7
      WHEN xp >= 1100 THEN 6
      WHEN xp >= 800 THEN 5
      WHEN xp >= 550 THEN 4
      WHEN xp >= 350 THEN 3
      WHEN xp >= 200 THEN 2
      WHEN xp >= 100 THEN 1
      ELSE 0
    END AS level_number,
    CASE
      WHEN xp >= 2300 THEN 'Master of Greek'
      WHEN xp >= 1850 THEN 'Companion of Socrates'
      WHEN xp >= 1450 THEN 'Xenophontic Reader'
      WHEN xp >= 1100 THEN 'Philologian'
      WHEN xp >= 800 THEN 'Scholar'
      WHEN xp >= 550 THEN 'Grammarian'
      WHEN xp >= 350 THEN 'Reader'
      WHEN xp >= 200 THEN 'Student'
      WHEN xp >= 100 THEN 'Apprentice'
      ELSE 'Novice'
    END AS level_label,
    xp,
    CASE
      WHEN xp < 100 THEN 100
      WHEN xp < 200 THEN 200
      WHEN xp < 350 THEN 350
      WHEN xp < 550 THEN 550
      WHEN xp < 800 THEN 800
      WHEN xp < 1100 THEN 1100
      WHEN xp < 1450 THEN 1450
      WHEN xp < 1850 THEN 1850
      WHEN xp < 2300 THEN 2300
      ELSE GREATEST(xp, 2300)
    END AS next_level_xp,
    weekly_goal_lessons
  FROM seed_mock_students
),
course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
ordered_lessons AS (
  SELECT l.id, l.slug, row_number() OVER (ORDER BY m.sort_order, l.sort_order) AS lesson_index
  FROM public.lessons l
  JOIN public.modules m ON m.id = l.module_id
  JOIN course c ON c.id = m.course_id
),
user_targets AS (
  SELECT u.id AS user_id, c.id AS course_id, su.*, ol.id AS current_lesson_id, ol.lesson_index AS current_index
  FROM seed_users su
  JOIN public.users u ON u.email = su.email::citext
  JOIN course c ON true
  JOIN ordered_lessons ol ON ol.slug = su.current_lesson_slug
),
current_segments AS (
  SELECT DISTINCT ON (ut.user_id) ut.user_id, ls.id AS current_segment_id
  FROM user_targets ut
  JOIN public.lesson_segments ls ON ls.lesson_id = ut.current_lesson_id
  ORDER BY ut.user_id, CASE WHEN ls.slug = 'lesson-start' THEN 0 ELSE 1 END, ls.sort_order
)
INSERT INTO public.student_progress (
  course_id,
  user_id,
  current_lesson_id,
  current_segment_id,
  level_number,
  level_label,
  xp,
  next_level_xp,
  weekly_goal_lessons,
  updated_at
)
SELECT ut.course_id, ut.user_id, ut.current_lesson_id, cs.current_segment_id, ut.level_number, ut.level_label, ut.xp, ut.next_level_xp, ut.weekly_goal_lessons, now()
FROM user_targets ut
JOIN current_segments cs ON cs.user_id = ut.user_id
ON CONFLICT (course_id, user_id) DO UPDATE
SET current_lesson_id = EXCLUDED.current_lesson_id,
    current_segment_id = EXCLUDED.current_segment_id,
    level_number = EXCLUDED.level_number,
    level_label = EXCLUDED.level_label,
    xp = EXCLUDED.xp,
    next_level_xp = EXCLUDED.next_level_xp,
    weekly_goal_lessons = EXCLUDED.weekly_goal_lessons,
    updated_at = now();

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

WITH seed_users(email, current_lesson_slug, xp, course_complete) AS (
  SELECT email, current_lesson_slug, xp, course_complete
  FROM seed_mock_students
),
course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
ordered_lessons AS (
  SELECT l.id, l.slug, row_number() OVER (ORDER BY m.sort_order, l.sort_order) AS lesson_index
  FROM public.lessons l
  JOIN public.modules m ON m.id = l.module_id
  JOIN course c ON c.id = m.course_id
),
user_targets AS (
  SELECT u.id AS user_id, su.email, su.xp, su.course_complete, ol.lesson_index AS current_index
  FROM seed_users su
  JOIN public.users u ON u.email = su.email::citext
  JOIN ordered_lessons ol ON ol.slug = su.current_lesson_slug
),
lesson_rows AS (
  SELECT
    ut.user_id,
    ol.id AS lesson_id,
    CASE
      WHEN ut.course_complete AND ol.lesson_index <= ut.current_index THEN 'completed'
      WHEN ol.lesson_index < ut.current_index THEN 'completed'
      WHEN ol.lesson_index = ut.current_index THEN 'in_progress'
      WHEN ol.lesson_index = ut.current_index + 1 THEN 'available'
      ELSE 'locked'
    END AS status,
    CASE WHEN ol.lesson_index <= ut.current_index THEN now() - ((ut.current_index - ol.lesson_index + 2)::text || ' days')::interval END AS started_at,
    CASE WHEN ol.lesson_index < ut.current_index OR (ut.course_complete AND ol.lesson_index <= ut.current_index) THEN now() - ((ut.current_index - ol.lesson_index + 1)::text || ' days')::interval END AS completed_at,
    CASE WHEN ol.lesson_index < ut.current_index OR (ut.course_complete AND ol.lesson_index <= ut.current_index) THEN 20 + ((ol.lesson_index + ut.xp) % 16) ELSE 0 END AS xp_awarded
  FROM user_targets ut
  CROSS JOIN ordered_lessons ol
)
INSERT INTO public.lesson_progress (user_id, lesson_id, status, started_at, completed_at, xp_awarded)
SELECT user_id, lesson_id, status, started_at, completed_at, xp_awarded
FROM lesson_rows
ON CONFLICT (user_id, lesson_id) DO UPDATE
SET status = EXCLUDED.status,
    started_at = EXCLUDED.started_at,
    completed_at = EXCLUDED.completed_at,
    xp_awarded = EXCLUDED.xp_awarded;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
target_users AS (
  SELECT u.id AS user_id, u.name, sms.email, sms.current_lesson_slug, sms.xp, sms.metrics, course.id AS course_id, row_number() OVER (ORDER BY sms.email) AS user_offset
  FROM seed_mock_students sms
  JOIN public.users u ON u.email = sms.email::citext
  CROSS JOIN course
)
DELETE FROM public.activity_events ae
USING target_users tu
WHERE ae.user_id = tu.user_id
  AND ae.course_id = tu.course_id
  AND ae.metadata->>'seed_key' IN ('xenophon-test-data-v1', 'xenophon-awards-v1');

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
target_users AS (
  SELECT u.id AS user_id, u.name, sms.email, sms.current_lesson_slug, sms.xp, sms.metrics, course.id AS course_id, row_number() OVER (ORDER BY sms.email) AS user_offset
  FROM seed_mock_students sms
  JOIN public.users u ON u.email = sms.email::citext
  CROSS JOIN course
),
events AS (
  SELECT
    user_id,
    course_id,
    'custom' AS event_type,
    CASE WHEN current_lesson_slug = 'intro-1' THEN 'Started Unit 0' ELSE 'Progress snapshot: ' || current_lesson_slug END AS title,
    CASE WHEN current_lesson_slug = 'intro-1' THEN 20 ELSE 0 END AS xp_delta,
    jsonb_build_object(
      'seed_key', 'xenophon-awards-v1',
      'progressMetrics', metrics || jsonb_build_object('startedUnit0', true)
    ) AS metadata,
    now() - ((user_offset % 5 + 1)::text || ' hours')::interval AS occurred_at
  FROM target_users
  UNION ALL
  SELECT user_id, course_id, 'lesson_completed', 'Completed lesson-units: ' || COALESCE((metrics->>'lessonsCompleted')::int, 0), 35, jsonb_build_object('seed_key','xenophon-awards-v1','lessonSlug',current_lesson_slug), now() - ((user_offset % 5 + 1)::text || ' days')::interval
  FROM target_users
  WHERE COALESCE((metrics->>'lessonsCompleted')::int, 0) > 0
  UNION ALL
  SELECT user_id, course_id, 'exercise_completed', 'Completed Exercise: translation drill', 25, jsonb_build_object('seed_key','xenophon-awards-v1','lessonSlug',current_lesson_slug,'activityType','translation','passed',true), now() - ((user_offset % 6 + 2)::text || ' days')::interval
  FROM target_users
  WHERE COALESCE((metrics->>'translationExercisesPassed')::int, 0) > 0
  UNION ALL
  SELECT user_id, course_id, 'quiz_passed', 'Passed Quiz: ' || current_lesson_slug, 30, jsonb_build_object('seed_key','xenophon-awards-v1','lessonSlug',current_lesson_slug,'activityType','lesson-quiz','passed',true,'perfect',COALESCE((metrics->>'perfectQuizCount')::int, 0) > 0), now() - ((user_offset % 7 + 2)::text || ' days')::interval
  FROM target_users
  WHERE COALESCE((metrics->>'quizzesPassed')::int, 0) > 0
  UNION ALL
  SELECT user_id, course_id, 'review_completed', 'Reviewed vocabulary set', 15, jsonb_build_object('seed_key','xenophon-awards-v1','lessonSlug',current_lesson_slug,'activityType','vocabulary-set','passed',true), now() - ((user_offset % 4 + 1)::text || ' days')::interval
  FROM target_users
  WHERE COALESCE((metrics->>'vocabularySetsCompleted')::int, 0) > 0
  UNION ALL
  SELECT user_id, course_id, 'exercise_completed', 'Completed Exercise: parsing practice', 20, jsonb_build_object('seed_key','xenophon-awards-v1','lessonSlug',current_lesson_slug,'activityType','parsing','passed',true), now() - ((user_offset % 8 + 3)::text || ' days')::interval
  FROM target_users
  WHERE COALESCE((metrics->>'parsingExercisesPassed')::int, 0) > 0
)
INSERT INTO public.activity_events (user_id, course_id, event_type, title, xp_delta, metadata, occurred_at)
SELECT user_id, course_id, event_type, title, xp_delta, metadata, occurred_at
FROM events;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
target_users AS (
  SELECT u.id AS user_id, sms.email, sms.metrics, course.id AS course_id, row_number() OVER (ORDER BY sms.email) AS user_offset
  FROM seed_mock_students sms
  JOIN public.users u ON u.email = sms.email::citext
  CROSS JOIN course
)
DELETE FROM public.user_achievements ua
USING target_users tu
WHERE ua.user_id = tu.user_id
  AND ua.course_id = tu.course_id;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
target_users AS (
  SELECT u.id AS user_id, sms.email, sms.metrics, course.id AS course_id, row_number() OVER (ORDER BY sms.email) AS user_offset
  FROM seed_mock_students sms
  JOIN public.users u ON u.email = sms.email::citext
  CROSS JOIN course
),
completed_lesson_numbers AS (
  SELECT
    tu.user_id,
    tu.course_id,
    substring(l.slug from 'lesson-([0-9]+)')::int AS lesson_number
  FROM target_users tu
  JOIN public.lesson_progress lp ON lp.user_id = tu.user_id AND lp.status = 'completed'
  JOIN public.lessons l ON l.id = lp.lesson_id
  WHERE l.slug ~ '^lesson-[0-9]+$'
),
progress AS (
  SELECT
    tu.user_id,
    tu.course_id,
    tu.user_offset,
    tu.metrics,
    COALESCE((tu.metrics->>'lessonsCompleted')::int, count(cln.lesson_number)::int) AS lessons_completed,
    bool_and(cln.lesson_number IS NOT NULL) FILTER (WHERE needed.lesson_number BETWEEN 1 AND 12) AS module_1_complete,
    bool_and(cln.lesson_number IS NOT NULL) FILTER (WHERE needed.lesson_number BETWEEN 13 AND 24) AS module_2_complete,
    bool_and(cln.lesson_number IS NOT NULL) FILTER (WHERE needed.lesson_number BETWEEN 25 AND 36) AS module_3_complete,
    bool_and(cln.lesson_number IS NOT NULL) FILTER (WHERE needed.lesson_number BETWEEN 37 AND 48) AS module_4_complete
  FROM target_users tu
  CROSS JOIN generate_series(1, 48) AS needed(lesson_number)
  LEFT JOIN completed_lesson_numbers cln
    ON cln.user_id = tu.user_id
   AND cln.course_id = tu.course_id
   AND cln.lesson_number = needed.lesson_number
  GROUP BY tu.user_id, tu.course_id, tu.user_offset, tu.metrics
),
earned AS (
  SELECT user_id, course_id, user_offset, 'first-steps' AS slug FROM progress WHERE COALESCE((metrics->>'startedUnit0')::boolean, true)
  UNION ALL
  SELECT user_id, course_id, user_offset, 'first-lesson' FROM progress WHERE lessons_completed >= 1
  UNION ALL
  SELECT user_id, course_id, user_offset, 'first-quiz' FROM progress WHERE COALESCE((metrics->>'quizzesPassed')::int, 0) >= 1
  UNION ALL
  SELECT user_id, course_id, user_offset, 'first-vocabulary-set' FROM progress WHERE COALESCE((metrics->>'vocabularySetsCompleted')::int, 0) >= 1
  UNION ALL
  SELECT user_id, course_id, user_offset, 'first-practice-session' FROM progress WHERE COALESCE((metrics->>'practiceSessions')::int, 0) >= 1
  UNION ALL
  SELECT user_id, course_id, user_offset, 'five-lessons-completed' FROM progress WHERE lessons_completed >= 5
  UNION ALL
  SELECT user_id, course_id, user_offset, 'seven-day-streak' FROM progress WHERE COALESCE((metrics->>'streakDays')::int, 0) >= 7
  UNION ALL
  SELECT user_id, course_id, user_offset, 'first-perfect-score' FROM progress WHERE COALESCE((metrics->>'perfectScoreCount')::int, COALESCE((metrics->>'perfectQuizCount')::int, 0)) >= 1
  UNION ALL
  SELECT user_id, course_id, user_offset, 'one-hundred-words-mastered' FROM progress WHERE COALESCE((metrics->>'vocabularyMastered')::int, 0) >= 100
  UNION ALL
  SELECT user_id, course_id, user_offset, 'first-translation' FROM progress WHERE COALESCE((metrics->>'translationExercisesPassed')::int, 0) >= 1
  UNION ALL
  SELECT user_id, course_id, user_offset, 'parsing-apprentice' FROM progress WHERE COALESCE((metrics->>'parsingExercisesPassed')::int, 0) >= 5
  UNION ALL
  SELECT user_id, course_id, user_offset, 'reader-of-greek' FROM progress WHERE COALESCE((metrics->>'readingsCompleted')::int, 0) >= 10 OR COALESCE(module_1_complete, false)
  UNION ALL
  SELECT user_id, course_id, user_offset, 'audio-explorer' FROM progress WHERE COALESCE((metrics->>'audioItemsCompleted')::int, 0) >= 10 OR COALESCE((metrics->>'audioLessonsCompleted')::int, 0) >= 5
  UNION ALL
  SELECT user_id, course_id, user_offset, 'twenty-practice-sessions' FROM progress WHERE COALESCE((metrics->>'practiceSessions')::int, 0) >= 20
  UNION ALL
  SELECT user_id, course_id, user_offset, 'ten-perfect-quizzes' FROM progress WHERE COALESCE((metrics->>'perfectQuizCount')::int, 0) >= 10
  UNION ALL
  SELECT user_id, course_id, user_offset, 'friend-of-athena' FROM progress WHERE (COALESCE(module_1_complete, false) AND COALESCE((metrics->>'streakDays')::int, 0) >= 7) OR COALESCE((metrics->>'practiceSessions')::int, 0) >= 20
  UNION ALL
  SELECT user_id, course_id, user_offset, 'wisdom' FROM progress WHERE COALESCE(module_1_complete, false)
  UNION ALL
  SELECT user_id, course_id, user_offset, 'courage' FROM progress WHERE COALESCE(module_2_complete, false)
  UNION ALL
  SELECT user_id, course_id, user_offset, 'self-control' FROM progress WHERE COALESCE(module_3_complete, false)
  UNION ALL
  SELECT user_id, course_id, user_offset, 'justice' FROM progress WHERE COALESCE(module_4_complete, false)
  UNION ALL
  SELECT user_id, course_id, user_offset, 'student-of-socrates' FROM progress WHERE COALESCE((metrics->>'fullCourseCompleted')::boolean, false) OR COALESCE(module_4_complete, false)
)
INSERT INTO public.user_achievements (user_id, achievement_id, course_id, earned_at)
SELECT earned.user_id, achievements.id, earned.course_id, now() - ((earned.user_offset + achievements.sort_order)::text || ' days')::interval
FROM earned
JOIN public.achievements ON achievements.slug = earned.slug
ON CONFLICT (user_id, achievement_id, course_id) DO UPDATE
SET earned_at = EXCLUDED.earned_at;

COMMIT;
