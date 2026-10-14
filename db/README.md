# Netlify DB Setup

This folder contains reviewable SQL for the development/prototype Netlify DB database.

## Files

- `migrations/0001_xenophon_initial_schema.sql` creates the initial Postgres schema.
- `migrations/0017_user_notebook_notes.sql` adds private user-scoped notebook notes with title, body, timestamps, and per-user title uniqueness.
- `migrations/0022_rename_course_for_fall_2027.sql` updates the existing course code and term in place, preserving memberships and progress.
- `seeds/0001_minimal_development_seed.sql` adds the idempotent GREK 120 J10 development course data: roles, 18 users, hashed prototype credentials, memberships, modules, lessons, lesson segments, progress, activity, levels, and achievements.
- `verify_schema.sql` lists the public tables after migration.
- `verify_seed.sql` checks the seeded course counts and a few representative role/progress rows.

## Create Or Connect A Database

Netlify DB was originally provisioned with:

```bash
npx netlify db init --assume-no
```

As of April 2026, that command may fail with:

```text
New database creation via the Netlify DB extension has been discontinued.
```

If that happens, create a Neon Postgres database directly in Neon or connect an existing Postgres-compatible Neon database to the Netlify site. Then set the connection string as `NETLIFY_DATABASE_URL`.

For local development, export it in your shell:

```bash
export NETLIFY_DATABASE_URL="postgresql://..."
```

For Netlify deploys, add `NETLIFY_DATABASE_URL` in the Netlify UI as a site environment variable and make it available to Functions. Do not commit the connection string.

## Apply The Migration

After reviewing the migration, apply it with the local Node runner:

```bash
npm run db:migrate
```

Or apply it with a Postgres client:

```bash
psql "$NETLIFY_DATABASE_URL" -f db/migrations/0001_xenophon_initial_schema.sql
```

If your local shell does not have `NETLIFY_DATABASE_URL`, retrieve it through Netlify's environment variable tooling or from the Netlify UI. Do not commit the connection string.

To apply the tiny optional seed:

```bash
npm run db:seed
```

Or:

```bash
psql "$NETLIFY_DATABASE_URL" -f db/seeds/0001_minimal_development_seed.sql
```

The seed is safe to run more than once. It uses upserts for stable records and replaces only activity rows marked with the seed metadata key so dashboard activity does not duplicate.

Seeded users sign in with their email address and the password `xenophon`. The password is stored in `public.user_credentials` as a `pgcrypto` bcrypt hash, not as plaintext.

## Profile Photos

Profile photos are uploaded through the server-side `/api/profile` Netlify Function. The database stores only `user_profiles.photo_url`, and uploaded image bytes are stored in Netlify Blobs under the `xenophon-profile-photos` store. The upload flow accepts JPEG, PNG, WebP, and GIF files up to 2 MB.

Run the app through Netlify dev when testing login and profile uploads locally so Functions and Blobs are available:

```bash
npx netlify dev
```

## Student Notebook

Notebook notes are stored in `public.user_notebook_notes` and linked directly to `public.users`. The `/api/notebook-notes` Netlify Function lists, creates, updates, and deletes only rows belonging to the selected signed-in user. Titles are unique per user without regard to letter case, and note bodies can contain English and Unicode polytonic Greek.

## Reading translations

Every prepared lesson reading has **Write Translation → Submit Translation → Compare**
controls. Future lessons gain these automatically when their Greek reading and English
`reading.translation` are provided. Unprepared placeholders do not show the activity.

Migration `0039_reading_translations.sql` creates `public.user_reading_translations`;
`0040_all_lesson_reading_translations.sql` expands it to all lesson numbers while
preserving Lesson 1 submissions. The table stores the latest explicit submission per
account and lesson, including the text and submission time. `/api/reading-translations`
loads and upserts the signed-in account's submission using the same account resolution
as the notebook API and verifies that the lesson exists. There is no automatic grading
or progression requirement. Drafts are not saved until submitted.

Compare displays the latest saved submission beside the lesson's stored English
translation; unsubmitted revisions are excluded. Students can revise and resubmit.
Failed saves preserve editor text; leaving with unsaved changes triggers a browser
warning. Desktop comparison uses two columns; narrow screens stack them.

Professor and Administrator sidebars include **Reading Translations**. The Professor
roster also has a **Translations** link for each student, and staff lesson readings
link to the review page with the lesson selected. `reading-translations.html` lets staff
choose any student account and lesson, then view the latest submission with its date
and the current canonical lesson translation. Missing submissions have an explicit
empty state. Staff review is read-only; Professor student-preview mode also disables
writing or resubmitting a student's translation. The staff API verifies the requested
Professor/Administrator role against active users and `public.user_roles`; students
cannot access the staff roster or review endpoint using their own account.

Run through Netlify dev for API access. Run `npm run verify:reading-translation` for
submission and staff-access verification, and
`node scripts/verify-reading-translation-browser.mjs` for browser QA (requires
Playwright; `TRANSLATION_PLAYWRIGHT_MODULE` and `TRANSLATION_CHROME_PATH` can select
local runtime paths).

## Verify

List the tables:

```bash
npm run db:verify
```

Or:

```bash
psql "$NETLIFY_DATABASE_URL" -c "\dt public.*"
```

Check core row counts:

```bash
psql "$NETLIFY_DATABASE_URL" -c "select count(*) from public.roles;"
psql "$NETLIFY_DATABASE_URL" -c "select count(*) from public.courses;"
```

Check the seeded course:

```bash
npm run db:verify:seed
```

Or run these SQL checks in Neon:

```sql
select count(*) from public.courses where code = 'GREK 120 J10' and term = 'Fall 2027';
select count(*) from public.roles where id in ('administrator', 'professor', 'student');
select count(*) from public.users where email in (
  'tpalston@email.sc.edu',
  'BECKMA@mailbox.sc.edu',
  'jdavis@email.sc.edu',
  'skim@email.sc.edu',
  'achen@email.sc.edu',
  'mlopez@email.sc.edu',
  'paristocles@email.sc.edu',
  'ahomer@email.sc.edu',
  'phomer@email.sc.edu',
  'tclay@email.sc.edu',
  'jdoe@email.sc.edu',
  'sdoe@email.sc.edu',
  'mcontrary@email.sc.edu',
  'agreat@email.sc.edu',
  'dlaertius@email.sc.edu',
  'apapadopoulos@email.sc.edu',
  'dgeorgiou@email.sc.edu',
  'nioannidis@email.sc.edu'
);
select role_id, count(*) from public.user_roles group by role_id order by role_id;
select count(*) from public.course_memberships cm join public.courses c on c.id = cm.course_id where c.code = 'GREK 120 J10' and c.term = 'Fall 2027' and cm.enrollment_status = 'active';
select count(*) from public.student_progress sp join public.courses c on c.id = sp.course_id where c.code = 'GREK 120 J10' and c.term = 'Fall 2027';
select count(*) from public.lesson_progress lp join public.users u on u.id = lp.user_id where u.email in ('tpalston@email.sc.edu', 'BECKMA@mailbox.sc.edu', 'jdavis@email.sc.edu', 'skim@email.sc.edu', 'achen@email.sc.edu', 'mlopez@email.sc.edu', 'paristocles@email.sc.edu', 'ahomer@email.sc.edu', 'phomer@email.sc.edu', 'tclay@email.sc.edu', 'jdoe@email.sc.edu', 'sdoe@email.sc.edu', 'mcontrary@email.sc.edu', 'agreat@email.sc.edu', 'dlaertius@email.sc.edu', 'apapadopoulos@email.sc.edu', 'dgeorgiou@email.sc.edu', 'nioannidis@email.sc.edu');
select count(*) from public.activity_events ae join public.courses c on c.id = ae.course_id where c.code = 'GREK 120 J10' and c.term = 'Fall 2027';
select u.name, l.slug as current_lesson, sp.level_number, sp.level_label, sp.xp from public.student_progress sp join public.users u on u.id = sp.user_id join public.lessons l on l.id = sp.current_lesson_id join public.courses c on c.id = sp.course_id where c.code = 'GREK 120 J10' and c.term = 'Fall 2027' order by sp.xp desc;
```

Confirm key extensions:

```bash
psql "$NETLIFY_DATABASE_URL" -c "select extname from pg_extension where extname in ('pgcrypto', 'citext');"
```

## Notes

- The migration does not drop or overwrite tables.
- `CREATE TABLE IF NOT EXISTS` leaves any existing table unchanged if the name already exists.
- Static flashcard content is not stored in a separate table, following `docs/schema.md`; flashcards are generated from `lesson_vocabulary` and `vocabulary_items`.
- Quiz-specific tables are included as an explicit extension of the proposed schema, which otherwise models quizzes through `exercises`.
- Audio assets are included as a separate table for lesson, segment, and vocabulary audio metadata.

### Lesson 1 translation checking pilot

`0041_lesson_1_translation_checks.sql` adds saved translation-check receipts and appends the pilot sentence banks without replacing existing questions. Deploy the compatible activity UI first, then apply the migration. See `docs/lesson-1-translation-checking.md` for the rubric, cost limits, and verification.

### Saved course feedback

`0042_course_feedback.sql` stores authenticated feedback as text fields in `course_feedback`. `/api/course-feedback` saves submissions without Netlify Forms or email. Administrator view can list the text and clear the displayed records; cleared records remain archived in the database. A stable submission UUID prevents duplicate retries. Clearing uses the displayed IDs, so new submissions arriving during review are retained.

Feedback links capture the originating URL and scroll position. A successful save returns there; an edited location field changes only the feedback record. Lesson/activity scroll restoration waits for the published content to finish rendering. `npm run verify:feedback` checks persistence, validation, access control, duplicate retry protection, formatting, and clearing without dropping concurrent submissions.

Lesson 1 exercise completion: run `node scripts/build-lesson-1-exercises.mjs`, then `npm run verify:lesson1-exercises`. Apply `0043_lesson_1_complete_exercises.sql` after deploying the completed-mode renderer. It replaces only Lesson 1 topic practice and grammar exercises in both canonical content layers, keeps the final quiz and learner progress, and is idempotent. Each of five topic banks contains 50 questions delivered in rounds of 10.

### Administrator settings and content workspace

`0044_administrator_workspace.sql` creates per-course site settings and settings history, and adds course/settings-version scope to AI checking reservations. Defaults retain open development access, 80% passing defaults, open registration, and stored feedback. Existing lesson-specific thresholds take precedence. See `docs/administrator-workspace.md` for saved drafts, publishing, access controls, and verification commands.
