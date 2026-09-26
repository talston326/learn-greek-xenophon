# Lesson 5 verification — 26 September 2026

## Content

- Two authored pages: Reading and Language Study, with the existing Xenophon and Socrates story and banner preserved.
- Six optional grammar and word-study practice topics, each with 50 questions in five rounds of 10. Each question gives immediate feedback and must be corrected before continuing. Students may stop at any point.
- Optional vocabulary practice has 50 questions in five rounds of 10, with the same stop control.
- A distinct, required 30-question final Quiz covers the six practice topics and reading. Students must answer every question and score at least 80% to proceed from Lesson 5.
- Quiz passes carry a revision identifier. Earlier Lesson 5 completions and quiz attempts do not satisfy the new final Quiz gate. The progress API checks for the revisioned pass before recording completion.

## Source and publication

- `content/lessons/lesson-5.json` and `lesson-data.js` contain the same authored payload.
- Migration `0021_lesson_5_practice_rounds_and_final_quiz.sql` updates published activities and the content revision, archives the previous published version, and leaves the reading and learner progress tables intact.
- `scripts/build-lesson-5-practice.mjs` regenerates the question banks, static fallback, and migration from the original Lesson 5 content.
- Run `npm run verify:lesson5` for structural and content checks.
