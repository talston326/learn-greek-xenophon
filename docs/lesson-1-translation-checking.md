# Lesson 1 translation pilot

Translation questions are integrated into Practice This Topic, Grammar Exercises, and the Final Quiz. The existing instructor-authored questions and reading submit-and-compare workflow are retained.

Each of the five grammar topic banks has five Greek-to-English and five English-to-Greek sentences. A full practice round shows six existing questions and two translations in each direction; translations rotate between rounds. The final round can have fewer existing questions. Grammar Exercises adds six translations (three per direction), and the Final Quiz adds four (two per direction) to the existing questions. Grammar/quiz translation questions are interleaved with existing questions. All added sentences are course-authored exercises, not quotations from Xenophon.

## Grading rules

Meaning, vocabulary, and grammatical forms must be correct. Valid synonyms, English wording, and Greek word order are accepted. For English-to-Greek, missing, wrong, or misplaced smooth/rough breathings prevent a pass. Missing or misplaced acute/grave/circumflex accents do not prevent a pass; feedback identifies corrections. Unicode composed and decomposed input are equivalent. Greek answers must use Greek letters. Iota subscripts and diaereses are spelling distinctions, not forgiven accent errors.

The AI judges meaning and grammar and returns corrected accentuation with the student's letters and word order. The server checks breathing presence/type/placement and applies the pass rule. Exact reference letters use the instructor's accentuation even if the AI tries to change them. If the AI suggests letter changes, those are displayed as spelling corrections requiring revision; they are never silently accepted. Unverifiable corrections receive review feedback, while a provider failure produces a recoverable service error. Practice offers hints and retries. Quiz corrections and model answers appear after submission. Translation results are stored with the submitted text and bound to the user, activity, and revision; the server rejects forged or changed quiz answers.

## Instructor configuration

In topic practice, Return checks the current translation; Shift–Return inserts a new line. A small shortcut hint appears directly below the answer box. A compact Greek Keyboard button sits at the right of the Greek field's label; the separate check button and repeated orthography notice are omitted. Holding Return or pressing it while a check is running does not start duplicate requests. Continuing a round jumps to the new round's heading and questions. Across all lessons, Practice This Topic appears after the topic's explanations, examples, and tables. Stopping or exiting topic practice returns to the beginning of the next displayed lesson topic; the last grammar topic returns to Grammar Exercises.

The course rubric is in `netlify/functions/_shared/translation-rubric.mts` (`TRANSLATION_INSTRUCTIONS` and `gradeTranslation`). Sentence pairs and objectives are authored in `scripts/build-lesson-1-translations.mjs`; run `npm run build:lesson1-translations` after edits. This generates the reference bank, public static fallback, and migration. A graphical rubric editor is not part of this pilot.

## Setup and cost control

OpenAI is called directly with the server's `OPENAI_API_KEY` through the Responses API, using `gpt-4.1-mini-2025-04-14`. The app uses its existing account/password convention and verifies active course membership before spending API credits. The key and student account identity are not included in model prompts. The server sends only exercise content and student answers, with `store:false`.

At published rates of $0.40/million input tokens and $1.60/million output tokens, an illustrative 1,500-input/300-output check costs $0.00108: 2,000 such checks cost about $2.16, excluding hosting/taxes. Actual tokens vary. Each new check reserves $0.005 against an $8 monthly pilot allowance, and each student may check 100 answers per UTC day. Identical successful answers are cached per user/activity/revision without another model call. Failed attempts retain the conservative reserve. These are app request limits, not an OpenAI billing guarantee or an account-wide budget. A batch has at most 10 answers of 600 characters each, output is capped at 3,500 tokens, and a provider request times out after 25 seconds. Cached results retain student submissions until their user is deleted; the pilot does not add a retention scheduler.

`Preview Server & Agent Runners` need not be configured. Production/deploy-preview/branch/local contexts use their own Netlify environment values. Expired keys or exhausted API credits produce a recoverable error and preserve typed answers.

## Validation and publication

Run `npm run verify:translation-checks`, the existing Module 1 scoring regression, API checks with a disposable course account, and desktop/mobile browser QA through Netlify dev. Build/deploy the matching UI before applying `0041_lesson_1_translation_checks.sql` to the production question banks; older activity code does not understand translation questions. The migration is additive and preserves existing questions, grammar sections, readings, and instructor edits. It updates both override and published activity blocks. Verify the live Lesson 1 API and all three rendered activities after deployment.
