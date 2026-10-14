# Saved reading translations and comparison

Published 11 October 2026. Production deploy: `6acbe84ba545c3d5e1d20da9`.

The live lesson renderer lacked the three saved-translation integration calls, the translation-entry script, and both translation API functions. The earlier local implementation and its database migrations existed, but the feature had been excluded from the October 5 course-flow release and consequently was not in the production baseline retained by the Module II release.

The scoped release publishes the existing translation entry, submission, revision, and comparison flow, its responsive styles, and the professor/administrator review page. It adds `reading-translations` and `staff-reading-translations` functions. It preserves 351 other static files and all 17 previously published backend functions and their routes and runtime settings. Module II content and banners are retained. No database migration was needed.

Tom Alston's Lesson 1 submission was present before the release: 900 characters, submitted 3 October 2026. Read-only checks before and after publication confirmed the same content hash and submission timestamp. The user's real Lesson 1 browser session loads this saved work and displays both translations when Compare is selected.

Verification passed for persistence, account/lesson isolation, revisions, input validation, staff roles and access denial. Preview and live browser checks passed for desktop and mobile comparison, reload persistence, responsive placement, literal rendering of submitted markup, and failed-save recovery and retry. Browser submission tests use intercepted fixture requests; Tom's saved submission was never modified. No browser script errors occurred.

The release preparation script is `scripts/release-reading-translations.mjs`. Its generated manifest and bundle records are retained in `/private/tmp/xenophon-reading-translations-release`. Future repository deploys must include the translation scripts, renderer integration calls, CSS, review page, and API functions. No commit or push was performed; unrelated local work is preserved.
