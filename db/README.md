# Netlify DB Setup

This folder contains reviewable SQL for the development/prototype Netlify DB database.

## Files

- `migrations/0001_xenophon_initial_schema.sql` creates the initial Postgres schema.
- `seeds/0001_minimal_development_seed.sql` adds the idempotent GREK 110 J10 development course data: roles, 18 users, hashed prototype credentials, memberships, modules, lessons, lesson segments, progress, activity, levels, and achievements.
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
select count(*) from public.courses where code = 'GREK 110 J10' and term = 'Spring 2027';
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
select count(*) from public.course_memberships cm join public.courses c on c.id = cm.course_id where c.code = 'GREK 110 J10' and c.term = 'Spring 2027' and cm.enrollment_status = 'active';
select count(*) from public.student_progress sp join public.courses c on c.id = sp.course_id where c.code = 'GREK 110 J10' and c.term = 'Spring 2027';
select count(*) from public.lesson_progress lp join public.users u on u.id = lp.user_id where u.email in ('tpalston@email.sc.edu', 'BECKMA@mailbox.sc.edu', 'jdavis@email.sc.edu', 'skim@email.sc.edu', 'achen@email.sc.edu', 'mlopez@email.sc.edu', 'paristocles@email.sc.edu', 'ahomer@email.sc.edu', 'phomer@email.sc.edu', 'tclay@email.sc.edu', 'jdoe@email.sc.edu', 'sdoe@email.sc.edu', 'mcontrary@email.sc.edu', 'agreat@email.sc.edu', 'dlaertius@email.sc.edu', 'apapadopoulos@email.sc.edu', 'dgeorgiou@email.sc.edu', 'nioannidis@email.sc.edu');
select count(*) from public.activity_events ae join public.courses c on c.id = ae.course_id where c.code = 'GREK 110 J10' and c.term = 'Spring 2027';
select u.name, l.slug as current_lesson, sp.level_number, sp.level_label, sp.xp from public.student_progress sp join public.users u on u.id = sp.user_id join public.lessons l on l.id = sp.current_lesson_id join public.courses c on c.id = sp.course_id where c.code = 'GREK 110 J10' and c.term = 'Spring 2027' order by sp.xp desc;
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
