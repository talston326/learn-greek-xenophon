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

WITH seed_users(name, email, roles, current_lesson_slug, level_number, level_label, xp, next_level_xp, weekly_goal_lessons, summary) AS (
  VALUES
    ('Tom Alston', 'tpalston@email.sc.edu', ARRAY['administrator','professor','student'], 'lesson-29', 8, 'Erudite', 760, 900, 5, 'Module III · Lesson 29 · Purpose clauses'),
    ('Mark Beck', 'BECKMA@mailbox.sc.edu', ARRAY['professor','student'], 'lesson-33', 9, 'Erudite', 835, 900, 4, 'Module III · Lesson 33 · Middle participles'),
    ('John Davis', 'jdavis@email.sc.edu', ARRAY['student'], 'lesson-8', 3, 'Apprentice', 245, 300, 4, 'Module I · Lesson 8 · Dative case'),
    ('Sarah Kim', 'skim@email.sc.edu', ARRAY['student'], 'lesson-16', 5, 'Apprentice', 410, 500, 5, 'Module II · Lesson 16 · Subjunctive mood'),
    ('Alex Chen', 'achen@email.sc.edu', ARRAY['student'], 'lesson-21', 6, 'Erudite', 565, 700, 6, 'Module II · Lesson 21 · Integrated narrative'),
    ('Maria Lopez', 'mlopez@email.sc.edu', ARRAY['student'], 'lesson-19', 6, 'Erudite', 520, 700, 5, 'Module II · Lesson 19 · Present participles'),
    ('Plato Aristocles', 'paristocles@email.sc.edu', ARRAY['student'], 'lesson-24', 7, 'Erudite', 640, 700, 6, 'Module II · Lesson 24 · Courage review'),
    ('Achilles Homer', 'ahomer@email.sc.edu', ARRAY['student'], 'lesson-22', 7, 'Erudite', 610, 700, 5, 'Module II · Lesson 22 · Imperatives'),
    ('Patroclus Homer', 'phomer@email.sc.edu', ARRAY['student'], 'lesson-18', 5, 'Apprentice', 455, 500, 5, 'Module II · Lesson 18 · Aorist tense'),
    ('Thomas Clay', 'tclay@email.sc.edu', ARRAY['student'], 'lesson-17', 5, 'Apprentice', 430, 500, 4, 'Module II · Lesson 17 · Fear and courage'),
    ('John Doe', 'jdoe@email.sc.edu', ARRAY['student'], 'lesson-11', 4, 'Apprentice', 330, 500, 4, 'Module I · Lesson 11 · Participles'),
    ('Susan Doe', 'sdoe@email.sc.edu', ARRAY['student'], 'lesson-20', 6, 'Erudite', 540, 700, 5, 'Module II · Lesson 20 · Aorist participles'),
    ('Mary Contrary', 'mcontrary@email.sc.edu', ARRAY['student'], 'lesson-6', 2, 'Novice', 185, 300, 3, 'Module I · Lesson 6 · Second declension'),
    ('Alexander Great', 'agreat@email.sc.edu', ARRAY['student'], 'lesson-23', 7, 'Erudite', 625, 700, 6, 'Module II · Lesson 23 · Result clauses'),
    ('Diogenes Laertius', 'dlaertius@email.sc.edu', ARRAY['student'], 'lesson-14', 4, 'Apprentice', 365, 500, 5, 'Module II · Lesson 14 · Trust in leadership'),
    ('Alexandros Papadopoulos', 'apapadopoulos@email.sc.edu', ARRAY['student'], 'lesson-15', 4, 'Apprentice', 390, 500, 5, 'Module II · Lesson 15 · Future tense'),
    ('Dimitrios Georgiou', 'dgeorgiou@email.sc.edu', ARRAY['student'], 'lesson-13', 4, 'Apprentice', 350, 500, 4, 'Module II · Lesson 13 · Contract verbs'),
    ('Nikolas Ioannidis', 'nioannidis@email.sc.edu', ARRAY['student'], 'lesson-20', 6, 'Erudite', 555, 700, 6, 'Module II · Lesson 20 · Victory won')
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
  SELECT id, crypt('xeno', gen_salt('bf', 10)), 'development-class-password'
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

WITH seed_users(email, roles) AS (
  VALUES
    ('tpalston@email.sc.edu', ARRAY['administrator','professor','student']),
    ('BECKMA@mailbox.sc.edu', ARRAY['professor','student']),
    ('jdavis@email.sc.edu', ARRAY['student']),
    ('skim@email.sc.edu', ARRAY['student']),
    ('achen@email.sc.edu', ARRAY['student']),
    ('mlopez@email.sc.edu', ARRAY['student']),
    ('paristocles@email.sc.edu', ARRAY['student']),
    ('ahomer@email.sc.edu', ARRAY['student']),
    ('phomer@email.sc.edu', ARRAY['student']),
    ('tclay@email.sc.edu', ARRAY['student']),
    ('jdoe@email.sc.edu', ARRAY['student']),
    ('sdoe@email.sc.edu', ARRAY['student']),
    ('mcontrary@email.sc.edu', ARRAY['student']),
    ('agreat@email.sc.edu', ARRAY['student']),
    ('dlaertius@email.sc.edu', ARRAY['student']),
    ('apapadopoulos@email.sc.edu', ARRAY['student']),
    ('dgeorgiou@email.sc.edu', ARRAY['student']),
    ('nioannidis@email.sc.edu', ARRAY['student'])
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
    ('intro', 'intro-2', 'Intro 2', 'The Greek Alphabet', 'Letters, pronunciation, diphthongs', 'lesson-introduction.html#intro-part-2', 2),
    ('intro', 'intro-3', 'Intro 3', 'Hearing and Speaking Greek', 'Accent, syllables, phonetics', 'lesson-introduction.html#intro-part-3', 3),
    ('module-1', 'lesson-1', 'Lesson 1', 'Socrates Teaches', 'Nominative singular, accusative singular, present active indicative', 'lessons.html#lesson-1', 1),
    ('module-1', 'lesson-2', 'Lesson 2', 'The Wise Man Knows Himself', 'First and second declension nouns, definite article, εἰμί', 'lessons.html#lesson-2', 2),
    ('module-1', 'lesson-3', 'Lesson 3', 'What is Wisdom?', 'Present tense system, predicate nouns, basic sentence structure', 'lessons.html#lesson-3', 3),
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
    ('lesson-1', 1, 'Verbs', 'ἀκούει', 'he/she/it hears, listens to'),
    ('lesson-1', 2, 'Verbs', 'βαδίζει', 'he/she/it walks'),
    ('lesson-1', 3, 'Verbs', 'γράφει', 'he/she/it writes'),
    ('lesson-1', 4, 'Verbs', 'γυμνάζει', 'he/she/it trains, exercises'),
    ('lesson-1', 5, 'Verbs', 'διδάσκει', 'he/she/it teaches'),
    ('lesson-1', 6, 'Verbs', 'ἐγείρει', 'he/she/it awakens, rouses'),
    ('lesson-1', 7, 'Verbs', 'ἐστιν', 'he/she/it is'),
    ('lesson-1', 8, 'Verbs', 'ζητεῖ', 'he/she/it seeks'),
    ('lesson-1', 9, 'Verbs', 'θαυμάζει', 'he/she/it wonders, admires, is amazed'),
    ('lesson-1', 10, 'Verbs', 'λέγει', 'he/she/it says, speaks'),
    ('lesson-1', 11, 'Verbs', 'μειδιᾷ', 'he/she/it smiles'),
    ('lesson-1', 12, 'Verbs', 'οἰκεῖ', 'he/she/it lives, dwells'),
    ('lesson-1', 13, 'Verbs', 'ὁρᾷ', 'he/she/it sees'),
    ('lesson-1', 14, 'Verbs', 'παιδεύει', 'he/she/it educates, trains'),
    ('lesson-1', 15, 'Verbs', 'φιλεῖ', 'he/she/it loves'),
    ('lesson-1', 16, 'Verbs', 'χαίρει', 'he/she/it rejoices, is glad'),
    ('lesson-1', 17, 'Nouns', 'ἀλήθεια, ἡ', 'truth'),
    ('lesson-1', 18, 'Nouns', 'ἄνθρωπος, ὁ', 'human being, man'),
    ('lesson-1', 19, 'Nouns', 'ἀρετή, ἡ', 'virtue, excellence'),
    ('lesson-1', 20, 'Nouns', 'βιβλίον, τό', 'book'),
    ('lesson-1', 21, 'Nouns', 'μαθητής, ὁ', 'student, learner'),
    ('lesson-1', 22, 'Nouns', 'νεανίας, ὁ', 'young man'),
    ('lesson-1', 23, 'Nouns', 'σοφία, ἡ', 'wisdom'),
    ('lesson-1', 24, 'Nouns', 'Σωκράτης, ὁ', 'Socrates'),
    ('lesson-1', 25, 'Nouns', 'σῶμα, τό', 'body'),
    ('lesson-1', 26, 'Nouns', 'ψυχή, ἡ', 'soul'),
    ('lesson-1', 27, 'Nouns', 'Ξενοφῶν, ὁ', 'Xenophon'),
    ('lesson-1', 28, 'Adjectives', 'κακός, κακή, κακόν', 'bad'),
    ('lesson-1', 29, 'Adjectives', 'καλός, καλή, καλόν', 'beautiful, noble, good'),
    ('lesson-1', 30, 'Adjectives', 'νέος, νέα, νέον', 'young, new'),
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
  UNION ALL
  SELECT id, 'intro-part-2', 'Alphabet Practice', 2 FROM course_lessons WHERE slug = 'intro-2'
  UNION ALL
  SELECT id, 'intro-part-3', 'Sound Practice', 2 FROM course_lessons WHERE slug = 'intro-3'
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
    (3, 'Apprentice', 300),
    (6, 'Erudite', 500),
    (10, 'Sophos', 900)
)
INSERT INTO public.levels (course_id, level_number, label, xp_required)
SELECT course.id, seed_levels.level_number, seed_levels.label, seed_levels.xp_required
FROM course
CROSS JOIN seed_levels
ON CONFLICT (course_id, level_number) DO UPDATE
SET label = EXCLUDED.label,
    xp_required = EXCLUDED.xp_required;

WITH seed_achievements(slug, label, description, icon, class_name, criteria) AS (
  VALUES
    ('first-steps', 'First Steps', 'Complete the introduction and begin the course path.', '👣', 'b1', '{"completed_lessons": 1}'::jsonb),
    ('word-collector', 'Word Collector', 'Build a growing store of Greek vocabulary.', '', 'b2 wreath-badge', '{"vocabulary_reviews": 20}'::jsonb),
    ('grammar-novice', 'Grammar Novice', 'Complete early noun and verb practice.', '🏛', 'b3', '{"completed_lessons": 6}'::jsonb),
    ('diligent-learner', 'Diligent Learner', 'Stay active across the week.', '🦉', 'b4 owl-badge', '{"weekly_activity_days": 4}'::jsonb),
    ('sophos', 'Sophos', 'Reach the advanced prototype achievement tier.', '🏆', 'b5', '{"xp": 700}'::jsonb)
)
INSERT INTO public.achievements (slug, label, description, icon, class_name, criteria)
SELECT slug, label, description, icon, class_name, criteria
FROM seed_achievements
ON CONFLICT (slug) DO UPDATE
SET label = EXCLUDED.label,
    description = EXCLUDED.description,
    icon = EXCLUDED.icon,
    class_name = EXCLUDED.class_name,
    criteria = EXCLUDED.criteria;

WITH seed_users(email, current_lesson_slug, level_number, level_label, xp, next_level_xp, weekly_goal_lessons) AS (
  VALUES
    ('tpalston@email.sc.edu', 'lesson-29', 8, 'Erudite', 760, 900, 5),
    ('BECKMA@mailbox.sc.edu', 'lesson-33', 9, 'Erudite', 835, 900, 4),
    ('jdavis@email.sc.edu', 'lesson-8', 3, 'Apprentice', 245, 300, 4),
    ('skim@email.sc.edu', 'lesson-16', 5, 'Apprentice', 410, 500, 5),
    ('achen@email.sc.edu', 'lesson-21', 6, 'Erudite', 565, 700, 6),
    ('mlopez@email.sc.edu', 'lesson-19', 6, 'Erudite', 520, 700, 5),
    ('paristocles@email.sc.edu', 'lesson-24', 7, 'Erudite', 640, 700, 6),
    ('ahomer@email.sc.edu', 'lesson-22', 7, 'Erudite', 610, 700, 5),
    ('phomer@email.sc.edu', 'lesson-18', 5, 'Apprentice', 455, 500, 5),
    ('tclay@email.sc.edu', 'lesson-17', 5, 'Apprentice', 430, 500, 4),
    ('jdoe@email.sc.edu', 'lesson-11', 4, 'Apprentice', 330, 500, 4),
    ('sdoe@email.sc.edu', 'lesson-20', 6, 'Erudite', 540, 700, 5),
    ('mcontrary@email.sc.edu', 'lesson-6', 2, 'Novice', 185, 300, 3),
    ('agreat@email.sc.edu', 'lesson-23', 7, 'Erudite', 625, 700, 6),
    ('dlaertius@email.sc.edu', 'lesson-14', 4, 'Apprentice', 365, 500, 5),
    ('apapadopoulos@email.sc.edu', 'lesson-15', 4, 'Apprentice', 390, 500, 5),
    ('dgeorgiou@email.sc.edu', 'lesson-13', 4, 'Apprentice', 350, 500, 4),
    ('nioannidis@email.sc.edu', 'lesson-20', 6, 'Erudite', 555, 700, 6)
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

WITH seed_users(email, current_lesson_slug, xp) AS (
  VALUES
    ('tpalston@email.sc.edu', 'lesson-29', 760),
    ('BECKMA@mailbox.sc.edu', 'lesson-33', 835),
    ('jdavis@email.sc.edu', 'lesson-8', 245),
    ('skim@email.sc.edu', 'lesson-16', 410),
    ('achen@email.sc.edu', 'lesson-21', 565),
    ('mlopez@email.sc.edu', 'lesson-19', 520),
    ('paristocles@email.sc.edu', 'lesson-24', 640),
    ('ahomer@email.sc.edu', 'lesson-22', 610),
    ('phomer@email.sc.edu', 'lesson-18', 455),
    ('tclay@email.sc.edu', 'lesson-17', 430),
    ('jdoe@email.sc.edu', 'lesson-11', 330),
    ('sdoe@email.sc.edu', 'lesson-20', 540),
    ('mcontrary@email.sc.edu', 'lesson-6', 185),
    ('agreat@email.sc.edu', 'lesson-23', 625),
    ('dlaertius@email.sc.edu', 'lesson-14', 365),
    ('apapadopoulos@email.sc.edu', 'lesson-15', 390),
    ('dgeorgiou@email.sc.edu', 'lesson-13', 350),
    ('nioannidis@email.sc.edu', 'lesson-20', 555)
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
  SELECT u.id AS user_id, su.email, su.xp, ol.lesson_index AS current_index
  FROM seed_users su
  JOIN public.users u ON u.email = su.email::citext
  JOIN ordered_lessons ol ON ol.slug = su.current_lesson_slug
),
lesson_rows AS (
  SELECT
    ut.user_id,
    ol.id AS lesson_id,
    CASE
      WHEN ol.lesson_index < ut.current_index THEN 'completed'
      WHEN ol.lesson_index = ut.current_index THEN 'in_progress'
      WHEN ol.lesson_index = ut.current_index + 1 THEN 'available'
      ELSE 'locked'
    END AS status,
    CASE WHEN ol.lesson_index <= ut.current_index THEN now() - ((ut.current_index - ol.lesson_index + 2)::text || ' days')::interval END AS started_at,
    CASE WHEN ol.lesson_index < ut.current_index THEN now() - ((ut.current_index - ol.lesson_index + 1)::text || ' days')::interval END AS completed_at,
    CASE WHEN ol.lesson_index < ut.current_index THEN 20 + ((ol.lesson_index + ut.xp) % 16) ELSE 0 END AS xp_awarded
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
seed_users(email, current_lesson_slug, xp) AS (
  VALUES
    ('tpalston@email.sc.edu', 'lesson-29', 760),
    ('BECKMA@mailbox.sc.edu', 'lesson-33', 835),
    ('jdavis@email.sc.edu', 'lesson-8', 245),
    ('skim@email.sc.edu', 'lesson-16', 410),
    ('achen@email.sc.edu', 'lesson-21', 565),
    ('mlopez@email.sc.edu', 'lesson-19', 520),
    ('paristocles@email.sc.edu', 'lesson-24', 640),
    ('ahomer@email.sc.edu', 'lesson-22', 610),
    ('phomer@email.sc.edu', 'lesson-18', 455),
    ('tclay@email.sc.edu', 'lesson-17', 430),
    ('jdoe@email.sc.edu', 'lesson-11', 330),
    ('sdoe@email.sc.edu', 'lesson-20', 540),
    ('mcontrary@email.sc.edu', 'lesson-6', 185),
    ('agreat@email.sc.edu', 'lesson-23', 625),
    ('dlaertius@email.sc.edu', 'lesson-14', 365),
    ('apapadopoulos@email.sc.edu', 'lesson-15', 390),
    ('dgeorgiou@email.sc.edu', 'lesson-13', 350),
    ('nioannidis@email.sc.edu', 'lesson-20', 555)
),
target_users AS (
  SELECT u.id AS user_id, u.name, su.email, su.current_lesson_slug, su.xp, course.id AS course_id, row_number() OVER (ORDER BY su.email) AS user_offset
  FROM seed_users su
  JOIN public.users u ON u.email = su.email::citext
  CROSS JOIN course
)
DELETE FROM public.activity_events ae
USING target_users tu
WHERE ae.user_id = tu.user_id
  AND ae.course_id = tu.course_id
  AND ae.metadata->>'seed_key' = 'xenophon-test-data-v1';

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
seed_users(email, current_lesson_slug, xp) AS (
  VALUES
    ('tpalston@email.sc.edu', 'lesson-29', 760),
    ('BECKMA@mailbox.sc.edu', 'lesson-33', 835),
    ('jdavis@email.sc.edu', 'lesson-8', 245),
    ('skim@email.sc.edu', 'lesson-16', 410),
    ('achen@email.sc.edu', 'lesson-21', 565),
    ('mlopez@email.sc.edu', 'lesson-19', 520),
    ('paristocles@email.sc.edu', 'lesson-24', 640),
    ('ahomer@email.sc.edu', 'lesson-22', 610),
    ('phomer@email.sc.edu', 'lesson-18', 455),
    ('tclay@email.sc.edu', 'lesson-17', 430),
    ('jdoe@email.sc.edu', 'lesson-11', 330),
    ('sdoe@email.sc.edu', 'lesson-20', 540),
    ('mcontrary@email.sc.edu', 'lesson-6', 185),
    ('agreat@email.sc.edu', 'lesson-23', 625),
    ('dlaertius@email.sc.edu', 'lesson-14', 365),
    ('apapadopoulos@email.sc.edu', 'lesson-15', 390),
    ('dgeorgiou@email.sc.edu', 'lesson-13', 350),
    ('nioannidis@email.sc.edu', 'lesson-20', 555)
),
target_users AS (
  SELECT u.id AS user_id, u.name, su.email, su.current_lesson_slug, su.xp, course.id AS course_id, row_number() OVER (ORDER BY su.email) AS user_offset
  FROM seed_users su
  JOIN public.users u ON u.email = su.email::citext
  CROSS JOIN course
),
events AS (
  SELECT user_id, course_id, 'lesson_completed' AS event_type, 'Completed: ' || current_lesson_slug AS title, 35 AS xp_delta, now() - ((user_offset % 5 + 1)::text || ' hours')::interval AS occurred_at FROM target_users
  UNION ALL
  SELECT user_id, course_id, 'exercise_completed', 'Completed Exercise: morphology practice', 20, now() - ((user_offset % 6 + 1)::text || ' days')::interval FROM target_users
  UNION ALL
  SELECT user_id, course_id, 'quiz_passed', 'Passed Quiz: ' || current_lesson_slug, 30, now() - ((user_offset % 9 + 2)::text || ' days')::interval FROM target_users
  UNION ALL
  SELECT user_id, course_id, 'review_completed', 'Reviewed vocabulary set', 15, now() - ((user_offset % 4 + 1)::text || ' days')::interval FROM target_users WHERE xp >= 300
  UNION ALL
  SELECT user_id, course_id, 'profile_updated', 'Updated learner profile', 0, now() - ((user_offset % 11 + 1)::text || ' days')::interval FROM target_users WHERE user_offset % 3 = 0
)
INSERT INTO public.activity_events (user_id, course_id, event_type, title, xp_delta, metadata, occurred_at)
SELECT user_id, course_id, event_type, title, xp_delta, '{"seed_key":"xenophon-test-data-v1"}'::jsonb, occurred_at
FROM events;

WITH course AS (
  SELECT id FROM public.courses WHERE code = 'GREK 110 J10' AND term = 'Spring 2027'
),
progress AS (
  SELECT sp.user_id, sp.course_id, sp.xp, count(lp.*) FILTER (WHERE lp.status = 'completed') AS completed_lessons
  FROM public.student_progress sp
  JOIN course c ON c.id = sp.course_id
  LEFT JOIN public.lesson_progress lp ON lp.user_id = sp.user_id AND lp.status = 'completed'
  GROUP BY sp.user_id, sp.course_id, sp.xp
),
earned AS (
  SELECT user_id, course_id, 'first-steps' AS slug FROM progress WHERE completed_lessons >= 1
  UNION ALL
  SELECT user_id, course_id, 'word-collector' FROM progress WHERE completed_lessons >= 8
  UNION ALL
  SELECT user_id, course_id, 'grammar-novice' FROM progress WHERE completed_lessons >= 10
  UNION ALL
  SELECT user_id, course_id, 'diligent-learner' FROM progress WHERE xp >= 400
  UNION ALL
  SELECT user_id, course_id, 'sophos' FROM progress WHERE xp >= 700
)
INSERT INTO public.user_achievements (user_id, achievement_id, course_id, earned_at)
SELECT earned.user_id, achievements.id, earned.course_id, now() - '1 day'::interval
FROM earned
JOIN public.achievements ON achievements.slug = earned.slug
ON CONFLICT (user_id, achievement_id, course_id) DO NOTHING;

COMMIT;
