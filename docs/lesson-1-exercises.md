# Lesson 1 completed practice and grammar exercises

Source: `scripts/build-lesson-1-exercises.mjs`. It writes `content/lesson-1-exercises.json`, the static fallback extension in `lesson-data.js`, and migration `0043_lesson_1_complete_exercises.sql`. Questions are course-authored, using the published Lesson 1 reading, vocabulary, and taught singular forms; they are not quotations from Xenophon.

Each of the five practice topics has 50 questions, shuffled once per session and presented ten at a time. A round unlocks Continue after every answer is correct; after question 50 the control becomes Finish Practice. Continuing scrolls to the beginning of the next round.

Grammar Exercises has Multiple Choice, Label Sentence Parts, Matching, Fill in the Blank, and Translation Builder. The builder has five Greek-to-English and five English-to-Greek exercises with subject/verb/object phrase choices. Typed blanks tolerate ordinary accent differences with corrections but require the correct breathing marks. Inputs must be completed before grading; the exercise pass threshold is 80%.

`grammar-exercises.js` implements the three new modes. `activity.js` treats the revisioned database question/mode arrays as authoritative, so obsolete fallback banks cannot append extra questions. No AI calls or email are added by these modes.

Verify with `npm run verify:lesson1-exercises`. Deploy a renderer supporting all modes before applying the migration. The migration updates both canonical activity layers, is idempotent, and leaves reading, final quiz, other lessons, and previous learner progress intact. The focused production artifact preserves the previously published course-flow and saved-feedback fixes; separate local AI, reading-translation, and atlas work is excluded. See `docs/releases/lesson-1-exercises-2026-10-05.json` for publication evidence.
