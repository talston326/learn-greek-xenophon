-- Learn Ancient Greek with Xenophon
-- Initial Netlify DB / Postgres schema.
--
-- This migration is intentionally non-destructive:
-- - It creates extensions, tables, indexes, and triggers only when they do not exist.
-- - It does not drop, truncate, or replace existing data.
-- - If a table already exists with a different shape, CREATE TABLE IF NOT EXISTS will
--   leave that table unchanged; inspect manually before applying follow-up migrations.

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS citext;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public'
      AND p.proname = 'xenophon_set_updated_at'
      AND p.pronargs = 0
  ) THEN
    EXECUTE $create_function$
      CREATE FUNCTION public.xenophon_set_updated_at()
      RETURNS trigger
      LANGUAGE plpgsql
      AS $function$
      BEGIN
        NEW.updated_at = now();
        RETURN NEW;
      END;
      $function$;
    $create_function$;
  END IF;
END;
$$;

CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email citext NOT NULL UNIQUE,
  name text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz,
  status text NOT NULL DEFAULT 'active',
  CONSTRAINT users_status_check CHECK (status IN ('active', 'inactive', 'invited', 'archived'))
);

CREATE TABLE IF NOT EXISTS public.roles (
  id text PRIMARY KEY,
  label text NOT NULL,
  description text
);

CREATE TABLE IF NOT EXISTS public.user_roles (
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  role_id text NOT NULL REFERENCES public.roles(id) ON DELETE RESTRICT,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  assigned_by_user_id uuid REFERENCES public.users(id) ON DELETE SET NULL,
  PRIMARY KEY (user_id, role_id)
);

CREATE TABLE IF NOT EXISTS public.user_profiles (
  user_id uuid PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  summary text,
  photo_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL,
  title text NOT NULL,
  term text,
  institution text,
  department text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT courses_code_term_unique UNIQUE (code, term)
);

CREATE TABLE IF NOT EXISTS public.course_memberships (
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  enrollment_status text NOT NULL DEFAULT 'active',
  enrolled_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (course_id, user_id),
  CONSTRAINT course_memberships_status_check CHECK (enrollment_status IN ('active', 'dropped', 'completed', 'invited'))
);

CREATE TABLE IF NOT EXISTS public.modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  slug text NOT NULL,
  label text NOT NULL,
  title text NOT NULL,
  subtitle text,
  description text,
  module_type text NOT NULL DEFAULT 'module',
  sort_order integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT modules_course_slug_unique UNIQUE (course_id, slug),
  CONSTRAINT modules_type_check CHECK (module_type IN ('intro', 'module')),
  CONSTRAINT modules_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
  slug text NOT NULL,
  number_label text NOT NULL,
  title text NOT NULL,
  grammar_focus text,
  page_url text,
  sort_order integer NOT NULL,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT lessons_module_slug_unique UNIQUE (module_id, slug),
  CONSTRAINT lessons_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.lesson_segments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  slug text NOT NULL,
  title text NOT NULL,
  body_markdown text,
  sort_order integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT lesson_segments_lesson_slug_unique UNIQUE (lesson_id, slug),
  CONSTRAINT lesson_segments_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.lesson_content_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  segment_id uuid NOT NULL REFERENCES public.lesson_segments(id) ON DELETE CASCADE,
  block_type text NOT NULL,
  title text,
  body_markdown text,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  sort_order integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT lesson_content_blocks_sort_order_check CHECK (sort_order >= 0),
  CONSTRAINT lesson_content_blocks_type_check CHECK (block_type IN ('markdown', 'callout', 'example', 'exercise_embed', 'reading_embed', 'vocabulary_embed', 'audio_embed', 'custom'))
);

CREATE TABLE IF NOT EXISTS public.readings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  segment_id uuid REFERENCES public.lesson_segments(id) ON DELETE SET NULL,
  title text NOT NULL,
  greek_text text,
  translation text,
  notes_markdown text,
  source_citation text,
  sort_order integer NOT NULL,
  CONSTRAINT readings_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.vocabulary_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lemma text NOT NULL,
  display_form text NOT NULL,
  transliteration text,
  part_of_speech text,
  gloss text NOT NULL,
  morphology jsonb NOT NULL DEFAULT '{}'::jsonb,
  audio_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT vocabulary_items_lemma_display_gloss_unique UNIQUE (lemma, display_form, gloss)
);

CREATE TABLE IF NOT EXISTS public.lesson_vocabulary (
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  vocabulary_item_id uuid NOT NULL REFERENCES public.vocabulary_items(id) ON DELETE CASCADE,
  sort_order integer NOT NULL,
  PRIMARY KEY (lesson_id, vocabulary_item_id),
  CONSTRAINT lesson_vocabulary_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.exercises (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  slug text NOT NULL,
  title text NOT NULL,
  exercise_type text NOT NULL,
  prompt text,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  max_score numeric,
  sort_order integer NOT NULL,
  is_required boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT exercises_lesson_slug_unique UNIQUE (lesson_id, slug),
  CONSTRAINT exercises_type_check CHECK (exercise_type IN ('quiz', 'multiple_choice', 'translation', 'parsing', 'reading', 'practice', 'letter_match', 'breathing', 'phonetics', 'composition', 'custom')),
  CONSTRAINT exercises_max_score_check CHECK (max_score IS NULL OR max_score >= 0),
  CONSTRAINT exercises_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.exercise_choices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  exercise_id uuid NOT NULL REFERENCES public.exercises(id) ON DELETE CASCADE,
  choice_text text NOT NULL,
  is_correct boolean NOT NULL DEFAULT false,
  feedback text,
  sort_order integer NOT NULL,
  CONSTRAINT exercise_choices_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.quizzes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  exercise_id uuid REFERENCES public.exercises(id) ON DELETE SET NULL,
  slug text NOT NULL,
  title text NOT NULL,
  description text,
  passing_score numeric,
  max_score numeric,
  time_limit_seconds integer,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT quizzes_lesson_slug_unique UNIQUE (lesson_id, slug),
  CONSTRAINT quizzes_exercise_unique UNIQUE (exercise_id),
  CONSTRAINT quizzes_passing_score_check CHECK (passing_score IS NULL OR passing_score >= 0),
  CONSTRAINT quizzes_max_score_check CHECK (max_score IS NULL OR max_score >= 0),
  CONSTRAINT quizzes_time_limit_check CHECK (time_limit_seconds IS NULL OR time_limit_seconds > 0),
  CONSTRAINT quizzes_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id uuid NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  vocabulary_item_id uuid REFERENCES public.vocabulary_items(id) ON DELETE SET NULL,
  prompt text NOT NULL,
  question_type text NOT NULL DEFAULT 'multiple_choice',
  explanation text,
  points numeric NOT NULL DEFAULT 1,
  sort_order integer NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT quiz_questions_type_check CHECK (question_type IN ('multiple_choice', 'multiple_select', 'short_answer', 'translation', 'parsing', 'matching', 'ordering', 'custom')),
  CONSTRAINT quiz_questions_points_check CHECK (points >= 0),
  CONSTRAINT quiz_questions_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.quiz_answer_options (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id uuid NOT NULL REFERENCES public.quiz_questions(id) ON DELETE CASCADE,
  answer_text text NOT NULL,
  is_correct boolean NOT NULL DEFAULT false,
  feedback text,
  sort_order integer NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  CONSTRAINT quiz_answer_options_sort_order_check CHECK (sort_order >= 0)
);

CREATE TABLE IF NOT EXISTS public.student_progress (
  course_id uuid NOT NULL,
  user_id uuid NOT NULL,
  current_lesson_id uuid REFERENCES public.lessons(id) ON DELETE SET NULL,
  current_segment_id uuid REFERENCES public.lesson_segments(id) ON DELETE SET NULL,
  level_number integer NOT NULL DEFAULT 0,
  level_label text NOT NULL DEFAULT 'Novice',
  xp integer NOT NULL DEFAULT 0,
  next_level_xp integer,
  weekly_goal_lessons integer NOT NULL DEFAULT 5,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (course_id, user_id),
  FOREIGN KEY (course_id, user_id) REFERENCES public.course_memberships(course_id, user_id) ON DELETE CASCADE,
  CONSTRAINT student_progress_level_check CHECK (level_number >= 0),
  CONSTRAINT student_progress_xp_check CHECK (xp >= 0),
  CONSTRAINT student_progress_next_level_xp_check CHECK (next_level_xp IS NULL OR next_level_xp >= 0),
  CONSTRAINT student_progress_weekly_goal_check CHECK (weekly_goal_lessons >= 0)
);

CREATE TABLE IF NOT EXISTS public.lesson_progress (
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  lesson_id uuid NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'locked',
  started_at timestamptz,
  completed_at timestamptz,
  last_viewed_segment_id uuid REFERENCES public.lesson_segments(id) ON DELETE SET NULL,
  xp_awarded integer NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, lesson_id),
  CONSTRAINT lesson_progress_status_check CHECK (status IN ('locked', 'available', 'in_progress', 'completed')),
  CONSTRAINT lesson_progress_xp_awarded_check CHECK (xp_awarded >= 0)
);

CREATE TABLE IF NOT EXISTS public.exercise_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  exercise_id uuid NOT NULL REFERENCES public.exercises(id) ON DELETE CASCADE,
  attempt_number integer NOT NULL,
  response jsonb NOT NULL DEFAULT '{}'::jsonb,
  score numeric,
  max_score numeric,
  passed boolean,
  status text NOT NULL DEFAULT 'submitted',
  submitted_at timestamptz NOT NULL DEFAULT now(),
  graded_at timestamptz,
  graded_by_user_id uuid REFERENCES public.users(id) ON DELETE SET NULL,
  feedback text,
  CONSTRAINT exercise_attempts_user_exercise_attempt_unique UNIQUE (user_id, exercise_id, attempt_number),
  CONSTRAINT exercise_attempts_attempt_number_check CHECK (attempt_number > 0),
  CONSTRAINT exercise_attempts_score_check CHECK (score IS NULL OR score >= 0),
  CONSTRAINT exercise_attempts_max_score_check CHECK (max_score IS NULL OR max_score >= 0),
  CONSTRAINT exercise_attempts_status_check CHECK (status IN ('submitted', 'needs_review', 'graded', 'returned'))
);

CREATE TABLE IF NOT EXISTS public.flashcard_reviews (
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id uuid NOT NULL,
  vocabulary_item_id uuid NOT NULL,
  confidence_level integer,
  last_reviewed_at timestamptz,
  next_review_at timestamptz,
  review_count integer NOT NULL DEFAULT 0,
  correct_count integer NOT NULL DEFAULT 0,
  incorrect_count integer NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, course_id, lesson_id, vocabulary_item_id),
  FOREIGN KEY (course_id, user_id) REFERENCES public.course_memberships(course_id, user_id) ON DELETE CASCADE,
  FOREIGN KEY (lesson_id, vocabulary_item_id) REFERENCES public.lesson_vocabulary(lesson_id, vocabulary_item_id) ON DELETE CASCADE,
  CONSTRAINT flashcard_reviews_confidence_check CHECK (confidence_level IS NULL OR confidence_level BETWEEN 0 AND 5),
  CONSTRAINT flashcard_reviews_counts_check CHECK (review_count >= 0 AND correct_count >= 0 AND incorrect_count >= 0)
);

CREATE TABLE IF NOT EXISTS public.flashcard_exports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id uuid REFERENCES public.lessons(id) ON DELETE SET NULL,
  export_format text NOT NULL DEFAULT 'quizlet_text',
  exported_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (course_id, user_id) REFERENCES public.course_memberships(course_id, user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.audio_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id uuid REFERENCES public.lessons(id) ON DELETE CASCADE,
  segment_id uuid REFERENCES public.lesson_segments(id) ON DELETE SET NULL,
  vocabulary_item_id uuid REFERENCES public.vocabulary_items(id) ON DELETE SET NULL,
  title text NOT NULL,
  asset_type text NOT NULL DEFAULT 'pronunciation',
  storage_url text NOT NULL,
  storage_key text,
  mime_type text,
  duration_seconds numeric,
  transcript text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT audio_assets_storage_key_unique UNIQUE (storage_key),
  CONSTRAINT audio_assets_type_check CHECK (asset_type IN ('pronunciation', 'reading', 'instruction', 'example', 'custom')),
  CONSTRAINT audio_assets_duration_check CHECK (duration_seconds IS NULL OR duration_seconds >= 0)
);

CREATE TABLE IF NOT EXISTS public.activity_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  title text NOT NULL,
  xp_delta integer NOT NULL DEFAULT 0,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  occurred_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (course_id, user_id) REFERENCES public.course_memberships(course_id, user_id) ON DELETE CASCADE,
  CONSTRAINT activity_events_type_check CHECK (event_type IN ('lesson_completed', 'exercise_completed', 'quiz_passed', 'review_completed', 'profile_updated', 'achievement_earned', 'custom'))
);

CREATE TABLE IF NOT EXISTS public.achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  label text NOT NULL,
  description text,
  icon text,
  class_name text,
  criteria jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.user_achievements (
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  achievement_id uuid NOT NULL REFERENCES public.achievements(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  earned_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, achievement_id, course_id),
  FOREIGN KEY (course_id, user_id) REFERENCES public.course_memberships(course_id, user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.levels (
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  level_number integer NOT NULL,
  label text NOT NULL,
  xp_required integer NOT NULL,
  PRIMARY KEY (course_id, level_number),
  CONSTRAINT levels_level_number_check CHECK (level_number >= 0),
  CONSTRAINT levels_xp_required_check CHECK (xp_required >= 0)
);

CREATE TABLE IF NOT EXISTS public.announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  author_user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE RESTRICT,
  title text NOT NULL,
  body_markdown text NOT NULL,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.discussions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id uuid REFERENCES public.lessons(id) ON DELETE SET NULL,
  title text NOT NULL,
  created_by_user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE RESTRICT,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.discussion_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  discussion_id uuid NOT NULL REFERENCES public.discussions(id) ON DELETE CASCADE,
  author_user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE RESTRICT,
  parent_post_id uuid REFERENCES public.discussion_posts(id) ON DELETE CASCADE,
  body_markdown text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_roles_role_id ON public.user_roles(role_id);
CREATE INDEX IF NOT EXISTS idx_course_memberships_user_id ON public.course_memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_course_memberships_course_status ON public.course_memberships(course_id, enrollment_status);
CREATE INDEX IF NOT EXISTS idx_modules_course_sort_order ON public.modules(course_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_lessons_module_sort_order ON public.lessons(module_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_lessons_module_published ON public.lessons(module_id, is_published);
CREATE INDEX IF NOT EXISTS idx_lesson_segments_lesson_sort_order ON public.lesson_segments(lesson_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_lesson_content_blocks_segment_sort_order ON public.lesson_content_blocks(segment_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_lesson_content_blocks_type ON public.lesson_content_blocks(block_type);
CREATE INDEX IF NOT EXISTS idx_readings_lesson_sort_order ON public.readings(lesson_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_readings_segment_id ON public.readings(segment_id);
CREATE INDEX IF NOT EXISTS idx_vocabulary_items_lemma ON public.vocabulary_items(lemma);
CREATE INDEX IF NOT EXISTS idx_vocabulary_items_display_form ON public.vocabulary_items(display_form);
CREATE INDEX IF NOT EXISTS idx_vocabulary_items_morphology_gin ON public.vocabulary_items USING gin (morphology);
CREATE INDEX IF NOT EXISTS idx_lesson_vocabulary_lesson_sort_order ON public.lesson_vocabulary(lesson_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_lesson_vocabulary_vocabulary_item_id ON public.lesson_vocabulary(vocabulary_item_id);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson_sort_order ON public.exercises(lesson_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson_type ON public.exercises(lesson_id, exercise_type);
CREATE INDEX IF NOT EXISTS idx_exercise_choices_exercise_sort_order ON public.exercise_choices(exercise_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_quizzes_lesson_sort_order ON public.quizzes(lesson_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_quizzes_lesson_published ON public.quizzes(lesson_id, is_published);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz_sort_order ON public.quiz_questions(quiz_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_vocabulary_item_id ON public.quiz_questions(vocabulary_item_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answer_options_question_sort_order ON public.quiz_answer_options(question_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_student_progress_current_lesson_id ON public.student_progress(current_lesson_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user_status ON public.lesson_progress(user_id, status);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_lesson_status ON public.lesson_progress(lesson_id, status);
CREATE INDEX IF NOT EXISTS idx_exercise_attempts_user_exercise_submitted ON public.exercise_attempts(user_id, exercise_id, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_exercise_attempts_status_submitted ON public.exercise_attempts(status, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_flashcard_reviews_user_course_due ON public.flashcard_reviews(user_id, course_id, next_review_at);
CREATE INDEX IF NOT EXISTS idx_flashcard_reviews_user_lesson ON public.flashcard_reviews(user_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_flashcard_exports_user_exported ON public.flashcard_exports(user_id, exported_at DESC);
CREATE INDEX IF NOT EXISTS idx_flashcard_exports_course_lesson ON public.flashcard_exports(course_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_audio_assets_course_id ON public.audio_assets(course_id);
CREATE INDEX IF NOT EXISTS idx_audio_assets_lesson_id ON public.audio_assets(lesson_id);
CREATE INDEX IF NOT EXISTS idx_audio_assets_segment_id ON public.audio_assets(segment_id);
CREATE INDEX IF NOT EXISTS idx_audio_assets_vocabulary_item_id ON public.audio_assets(vocabulary_item_id);
CREATE INDEX IF NOT EXISTS idx_activity_events_user_occurred ON public.activity_events(user_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_events_course_occurred ON public.activity_events(course_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_achievements_course_id ON public.user_achievements(course_id);
CREATE INDEX IF NOT EXISTS idx_announcements_course_published ON public.announcements(course_id, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_discussions_course_updated ON public.discussions(course_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_discussions_lesson_id ON public.discussions(lesson_id);
CREATE INDEX IF NOT EXISTS idx_discussion_posts_discussion_created ON public.discussion_posts(discussion_id, created_at);
CREATE INDEX IF NOT EXISTS idx_discussion_posts_parent_post_id ON public.discussion_posts(parent_post_id);

DO $$
DECLARE
  target_table regclass;
BEGIN
  FOREACH target_table IN ARRAY ARRAY[
    'public.users'::regclass,
    'public.user_profiles'::regclass,
    'public.courses'::regclass,
    'public.modules'::regclass,
    'public.lessons'::regclass,
    'public.lesson_segments'::regclass,
    'public.lesson_content_blocks'::regclass,
    'public.vocabulary_items'::regclass,
    'public.exercises'::regclass,
    'public.quizzes'::regclass,
    'public.quiz_questions'::regclass,
    'public.audio_assets'::regclass,
    'public.announcements'::regclass,
    'public.discussions'::regclass,
    'public.discussion_posts'::regclass
  ]
  LOOP
    IF NOT EXISTS (
      SELECT 1
      FROM pg_trigger
      WHERE tgrelid = target_table
        AND tgname = 'set_updated_at'
    ) THEN
      EXECUTE format(
        'CREATE TRIGGER set_updated_at BEFORE UPDATE ON %s FOR EACH ROW EXECUTE FUNCTION public.xenophon_set_updated_at()',
        target_table
      );
    END IF;
  END LOOP;
END;
$$;

COMMIT;
