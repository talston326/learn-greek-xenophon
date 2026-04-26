# Proposed Schema: Learn Ancient Greek with Xenophon

Status: proposal only. This document describes a future Neon/Postgres data model for the app. It does not create tables, migrations, seed data, or application code changes.

## Design Goals

- Move the current static/localStorage data into a normalized database without changing the user-facing course model yet.
- Keep role-based dashboards flexible enough for administrators, professors, and students.
- Track lesson progress at the level the app already uses: lesson, current segment, completed exercises, quizzes, XP, levels, weekly goals, recent activity, and achievements.
- Support course content growth: modules, lessons, lesson pages, segments, exercises, vocabulary, generated flashcards, readings, and assessments.
- Keep credentials and database access server-side only.

## Core Entities

### users

Represents an authenticated person in the course.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| email | citext | Unique, required |
| name | text | Display name |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |
| last_login_at | timestamptz | Nullable |
| status | text | active, inactive, invited, archived |

### roles

Canonical role list.

| Column | Type | Notes |
| --- | --- | --- |
| id | text | Primary key, for example administrator, professor, student |
| label | text | Human-readable label |
| description | text | Nullable |

### user_roles

Many-to-many assignment of users to roles.

| Column | Type | Notes |
| --- | --- | --- |
| user_id | uuid | Foreign key to users.id |
| role_id | text | Foreign key to roles.id |
| assigned_at | timestamptz | Required |
| assigned_by_user_id | uuid | Nullable foreign key to users.id |

Primary key: user_id, role_id.

### user_profiles

Editable profile details currently stored in localStorage.

| Column | Type | Notes |
| --- | --- | --- |
| user_id | uuid | Primary key, foreign key to users.id |
| summary | text | Nullable |
| photo_url | text | Nullable, preferred over storing data URLs in the DB |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

## Course Structure

### courses

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| code | text | Example: GREK 110 J10 |
| title | text | Learn Ancient Greek with Xenophon |
| term | text | Example: Spring 2027 |
| institution | text | Example: University of South Carolina |
| department | text | Example: Department of Classics |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

### course_memberships

Connects users to a course and gives professors/admins room to manage multiple course runs later.

| Column | Type | Notes |
| --- | --- | --- |
| course_id | uuid | Foreign key to courses.id |
| user_id | uuid | Foreign key to users.id |
| enrollment_status | text | active, dropped, completed, invited |
| enrolled_at | timestamptz | Required |

Primary key: course_id, user_id.

### modules

Matches the current Introduction, Module I, Module II, Module III, and Module IV structure.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| course_id | uuid | Foreign key to courses.id |
| slug | text | Stable app identifier, for example module-1 |
| label | text | Example: Module I |
| title | text | Module title |
| subtitle | text | Nullable |
| description | text | Nullable |
| module_type | text | intro or module |
| sort_order | integer | Required |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

Unique: course_id, slug.

### lessons

Stores the lesson path currently defined in `COURSE_MODULES`.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| module_id | uuid | Foreign key to modules.id |
| slug | text | Stable app identifier, for example lesson-4 or intro-2 |
| number_label | text | Example: Lesson 4 or Intro 2 |
| title | text | Required |
| grammar_focus | text | Nullable |
| page_url | text | Current static page or future route |
| sort_order | integer | Required |
| is_published | boolean | Default false |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

Unique: module_id, slug.

### lesson_segments

Allows a lesson to have anchors such as intro-part-1, intro-part-2, and lesson-start.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| lesson_id | uuid | Foreign key to lessons.id |
| slug | text | Stable segment identifier |
| title | text | Required |
| body_markdown | text | Nullable |
| sort_order | integer | Required |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

Unique: lesson_id, slug.

## Learning Content

### readings

Passages, translations, and notes tied to a lesson or segment.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| lesson_id | uuid | Foreign key to lessons.id |
| segment_id | uuid | Nullable foreign key to lesson_segments.id |
| title | text | Required |
| greek_text | text | Nullable |
| translation | text | Nullable |
| notes_markdown | text | Nullable |
| source_citation | text | Nullable |
| sort_order | integer | Required |

### vocabulary_items

Reusable vocabulary entries.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| lemma | text | Required |
| display_form | text | Required |
| transliteration | text | Nullable |
| part_of_speech | text | Nullable |
| gloss | text | Required |
| morphology | jsonb | Optional structured parsing data |
| audio_url | text | Nullable |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

### lesson_vocabulary

Many-to-many link between lessons and vocabulary.

| Column | Type | Notes |
| --- | --- | --- |
| lesson_id | uuid | Foreign key to lessons.id |
| vocabulary_item_id | uuid | Foreign key to vocabulary_items.id |
| sort_order | integer | Required |

Primary key: lesson_id, vocabulary_item_id.

### Flashcards

Do not create a separate flashcards table for static card content yet. Flashcard content should be generated from `vocabulary_items` linked to lessons through `lesson_vocabulary`. A separate flashcards table should only be considered later if the app needs custom student-created cards.

Flashcards should be accessible in two places:

- Within each lesson, showing the vocabulary assigned to that lesson.
- In a global Flashcards navigation area, grouped by lesson so students can review vocabulary across the course.

Plan a server-side export function for vocabulary flashcards. It should query `lesson_vocabulary` and `vocabulary_items` for the selected lesson or lesson group, then produce a Quizlet-compatible plain text format with one card per line:

```text
term<TAB>definition
```

The export function should run server-side so future access checks, course membership checks, and audit logging can happen without exposing privileged database access in frontend code.

### exercises

Represents practice items such as letter-match, breathing, noun-endings, translation, and quiz.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| lesson_id | uuid | Foreign key to lessons.id |
| slug | text | Stable app identifier |
| title | text | Required |
| exercise_type | text | quiz, multiple_choice, translation, parsing, reading, practice |
| prompt | text | Nullable |
| content | jsonb | Exercise-specific structure |
| max_score | numeric | Nullable |
| sort_order | integer | Required |
| is_required | boolean | Default true |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

Unique: lesson_id, slug.

### exercise_choices

Optional normalized choices for multiple-choice exercises.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| exercise_id | uuid | Foreign key to exercises.id |
| choice_text | text | Required |
| is_correct | boolean | Required |
| feedback | text | Nullable |
| sort_order | integer | Required |

## Student Progress

### student_progress

One row per student per course.

| Column | Type | Notes |
| --- | --- | --- |
| course_id | uuid | Foreign key to courses.id |
| user_id | uuid | Foreign key to users.id |
| current_lesson_id | uuid | Nullable foreign key to lessons.id |
| current_segment_id | uuid | Nullable foreign key to lesson_segments.id |
| level_number | integer | Default 0 |
| level_label | text | Default Novice |
| xp | integer | Default 0 |
| next_level_xp | integer | Nullable |
| weekly_goal_lessons | integer | Default 5 |
| updated_at | timestamptz | Required |

Primary key: course_id, user_id.

### lesson_progress

Tracks per-lesson state.

| Column | Type | Notes |
| --- | --- | --- |
| user_id | uuid | Foreign key to users.id |
| lesson_id | uuid | Foreign key to lessons.id |
| status | text | locked, available, in_progress, completed |
| started_at | timestamptz | Nullable |
| completed_at | timestamptz | Nullable |
| last_viewed_segment_id | uuid | Nullable foreign key to lesson_segments.id |
| xp_awarded | integer | Default 0 |

Primary key: user_id, lesson_id.

### exercise_attempts

Stores attempts, submissions, quiz passes, and professor review state.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| user_id | uuid | Foreign key to users.id |
| exercise_id | uuid | Foreign key to exercises.id |
| attempt_number | integer | Required |
| response | jsonb | Student response |
| score | numeric | Nullable |
| max_score | numeric | Nullable |
| passed | boolean | Nullable |
| status | text | submitted, needs_review, graded, returned |
| submitted_at | timestamptz | Required |
| graded_at | timestamptz | Nullable |
| graded_by_user_id | uuid | Nullable foreign key to users.id |
| feedback | text | Nullable |

Unique: user_id, exercise_id, attempt_number.

### flashcard_reviews

Future student-specific spaced repetition and review history for generated vocabulary flashcards.

| Column | Type | Notes |
| --- | --- | --- |
| user_id | uuid | Foreign key to users.id |
| course_id | uuid | Foreign key to courses.id |
| lesson_id | uuid | Foreign key to lessons.id |
| vocabulary_item_id | uuid | Foreign key to vocabulary_items.id |
| confidence_level | integer | Student self-rating or review confidence |
| last_reviewed_at | timestamptz | Nullable until first review |
| next_review_at | timestamptz | Nullable until scheduled |
| review_count | integer | Default 0 |
| correct_count | integer | Default 0 |
| incorrect_count | integer | Default 0 |

Primary key: user_id, course_id, lesson_id, vocabulary_item_id.

### flashcard_exports

Optional future analytics/audit table for flashcard exports. This should not store static flashcard content.

| Column | Type | Notes |
| --- | --- | --- |
| user_id | uuid | Foreign key to users.id |
| course_id | uuid | Foreign key to courses.id |
| lesson_id | uuid | Nullable foreign key to lessons.id; null can represent a multi-lesson or global export |
| export_format | text | Example: quizlet_text |
| exported_at | timestamptz | Required |

### activity_events

Source of the dashboard recent activity list.

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| user_id | uuid | Foreign key to users.id |
| course_id | uuid | Foreign key to courses.id |
| event_type | text | lesson_completed, exercise_completed, quiz_passed, review_completed, profile_updated |
| title | text | Required |
| xp_delta | integer | Default 0 |
| metadata | jsonb | Optional link targets or display details |
| occurred_at | timestamptz | Required |

## Achievements And Levels

### achievements

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| slug | text | Unique |
| label | text | Required |
| description | text | Nullable |
| icon | text | Nullable |
| class_name | text | Nullable, maps current badge styling |
| criteria | jsonb | Future unlock rules |
| created_at | timestamptz | Required |

### user_achievements

| Column | Type | Notes |
| --- | --- | --- |
| user_id | uuid | Foreign key to users.id |
| achievement_id | uuid | Foreign key to achievements.id |
| course_id | uuid | Foreign key to courses.id |
| earned_at | timestamptz | Required |

Primary key: user_id, achievement_id, course_id.

### levels

| Column | Type | Notes |
| --- | --- | --- |
| course_id | uuid | Foreign key to courses.id |
| level_number | integer | Required |
| label | text | Required |
| xp_required | integer | Required |

Primary key: course_id, level_number.

## Professor And Admin Views

Most professor dashboard cards can be computed from the tables above, but a few workflow tables are useful.

### announcements

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| course_id | uuid | Foreign key to courses.id |
| author_user_id | uuid | Foreign key to users.id |
| title | text | Required |
| body_markdown | text | Required |
| published_at | timestamptz | Nullable |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

### discussions

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| course_id | uuid | Foreign key to courses.id |
| lesson_id | uuid | Nullable foreign key to lessons.id |
| title | text | Required |
| created_by_user_id | uuid | Foreign key to users.id |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

### discussion_posts

| Column | Type | Notes |
| --- | --- | --- |
| id | uuid | Primary key |
| discussion_id | uuid | Foreign key to discussions.id |
| author_user_id | uuid | Foreign key to users.id |
| parent_post_id | uuid | Nullable self-reference |
| body_markdown | text | Required |
| created_at | timestamptz | Required |
| updated_at | timestamptz | Required |

## Suggested Indexes

- users.email unique index.
- modules(course_id, sort_order).
- lessons(module_id, sort_order).
- lessons(module_id, slug) unique index.
- lesson_segments(lesson_id, sort_order).
- lesson_vocabulary(lesson_id, sort_order).
- lesson_vocabulary(vocabulary_item_id).
- exercises(lesson_id, sort_order).
- lesson_progress(user_id, status).
- lesson_progress(lesson_id, status).
- exercise_attempts(user_id, exercise_id, submitted_at desc).
- exercise_attempts(status, submitted_at desc) for professor review queues.
- flashcard_reviews(user_id, course_id, next_review_at) for due review queues.
- flashcard_reviews(user_id, lesson_id) for lesson-specific flashcard review.
- flashcard_exports(user_id, exported_at desc) if export audit logging is added.
- activity_events(user_id, occurred_at desc).
- course_memberships(course_id, enrollment_status).

## Initial Seed Shape

Seed data should eventually include:

- One course: GREK 110 J10, Learn Ancient Greek with Xenophon, Spring 2027.
- Roles: administrator, professor, student.
- Modules: Introduction plus Modules I through IV.
- Lessons: intro-1 through intro-3 and lesson-1 through lesson-48.
- Vocabulary items and lesson_vocabulary links; generated flashcards and Quizlet-compatible exports should come from these rows rather than a static flashcards table.
- Exercise slugs already used by the app, including orientation, letter-match, breathing, diphthong, combo, phonetics, noun-endings, agreement, translation, reading, practice, and quiz.
- Level labels currently displayed in the prototype, including Novice, Apprentice, Erudite, and Sophos.
- Achievements currently displayed in the prototype, including First Steps, Word Collector, Grammar Novice, Diligent Learner, and Sophos.

## Open Questions

- Authentication source: Netlify Identity, a campus SSO provider, or another auth system.
- File storage for profile photos: Netlify Blobs, object storage, or a campus-approved asset store.
- Whether lesson content should live fully in Postgres, in Markdown files with database metadata, or in a hybrid model.
- Whether professor gradebook data should be computed entirely from attempts or stored as snapshot rows for exports.
- Whether student-visible progress should unlock strictly by quiz pass, lesson completion, professor release rules, or a mix.
