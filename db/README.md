# Netlify DB Setup

This folder contains reviewable SQL for the development/prototype Netlify DB database.

## Files

- `migrations/0001_xenophon_initial_schema.sql` creates the initial Postgres schema.
- `seeds/0001_minimal_development_seed.sql` optionally adds only roles and one development course.
- `verify_schema.sql` lists the public tables after migration.

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
