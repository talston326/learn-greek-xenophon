# Lesson 5 verification — 17 September 2026

## Implemented locally

- Two authored pages: Reading and Language Study.
- 329 Greek words in seven paragraphs, compared with 222 words in Lesson 4 (whitespace token counts).
- 29 vocabulary entries/cards, 57 paragraph glosses, 14 grammar cards.
- Six practice topics (word study plus five grammar sections), 24 practice questions, 24 distinct grammar assessment questions, and 29 vocabulary questions.
- Existing Lesson 5 banner reused unchanged. Reading translation retains staff-only reveal behavior.
- No recorded reading audio; explicitly marked as not yet recorded.

## Passed checks

- `verify:lesson5`, `verify:lesson4`, `verify:lesson4-language`, `verify:lesson4-culture`, `verify:glosses`.
- JavaScript syntax checks and `git diff --check`.
- Real application browser UI at desktop 1440 × 1000 and mobile 390 × 844. Local API response supplied the authored payload; live progress writes were intercepted.
- Both pages under student, professor, and administrator sessions; staff translation visibility; seven reading paragraphs; five grammar tables; all practice links.
- Vocabulary and grammar card flips and Know It actions; English-to-Greek vocabulary mode.
- Required-answer validation, 100% assessment scoring, and persistence of the grammar gate after navigation.
- No page-level JavaScript errors or mobile horizontal overflow.
- Database migration applied twice to isolated Neon branch `br-rough-king-amc554ef`: 2 pages, 29 canonical vocabulary links, 57 glosses, one archived former reading, unchanged override version on the second run. Branch expires at 2026-09-17 23:57:05 UTC.

## Separate existing issue

The read-only production dictionary test fails because `ὑλακτεῖ` appears as a global dictionary headword. No Lesson 5 changes were applied to production, and no dictionary implementation was changed in this task.

## Delivery state

Local edits are uncommitted. The production database migration and site deployment have not been run. The migration preserves the prior published Lesson 5 draft in revision history when applied; a review copy is also saved beside this report as `previous-published-lesson-5.json`. No synced project sources were modified.
