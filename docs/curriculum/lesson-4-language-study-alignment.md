# Lesson 4 Language Study: implementation and verification

Published 14 September 2026 after user approval. Live page: https://learn-greek-xenophon.netlify.app/lesson.html?lesson=4&page=2.

The second page follows the agreed Lesson 4 plan: singular articles, nouns and adjectives; case functions; persistent noun/adjective accents; and recessive verb accents. It adds the missed accent foundations from Lesson 2. Singular verb persons, systematic command formation, and proclitics remain for Lesson 5. The reading, translation, glosses and required vocabulary are retained.

| Objective | Teaching and guided practice | Required questions |
|---|---|---|
| Dictionary entries and word families | Word Study, 4 questions | 4 |
| Accent marks, syllables, vowel quantity | Accent Foundations, 4 questions | 4 |
| All singular cases with supplied noun models | Articles and Nouns, 4 questions | 4 |
| Singular agreement | Article, Adjective, and Noun Agreement, 4 questions | 4 |
| Case functions in sentences | Case Functions, 4 questions | 4 |
| Persistent noun and adjective accents | Persistent Accents, 4 questions | 4 |
| Recessive accent in supplied verb forms | Recessive Accents, 4 questions | 4 |

There are 28 repeatable practice questions, 28 distinct required questions, and 12 grammar flashcards. Required exercises ask students to answer every question and score at least 80% (23 of 28). Feedback is provided for every choice. Completion uses the existing per-student activity-event and local fallback mechanisms. The required navigation gate applies in student view even during the site's general open-access build mode; staff can review freely. This is the page's learning requirement, not a new course-wide access-control system.

The feminine λόγχη model supplies limited singular case support ahead of the full treatment of first-declension variants. Third-declension nouns and ἐπιμελής are supported reading vocabulary, not full paradigm-production targets. Supplied commands μάνθανε and ψῆχε illustrate accent rules only; students are not asked to generate command endings.

## Sources used to check the scope and accent rules

- [Oxford University Press, Athenaze Book I third-edition contents](https://www.oupjapan.co.jp/en/products/detail/13843?language=en), Chapter 1β and Chapter 2β grammar headings.
- [Goodell, A School Grammar of Attic Greek, §§9–15](https://dcc.dickinson.edu/grammar/goodell/accents-and-accentuation), accent limitations and grave substitution.
- [Major and Laughy, Ancient Greek for Everyone: Rules of Accentuation](https://dcc.dickinson.edu/grammar/age/rules-accentuation), recessive accent.
- [Major and Laughy: Noun Accentuation](https://dcc.dickinson.edu/grammar/age/noun-accentuation), persistent accent.

Explanations, examples and exercise banks were independently written for the app.

## Verification

- `npm run verify:lesson4-language`: coverage, correct-answer uniqueness, feedback, distinct practice/assessment items, Unicode normalization, and matching static/database payloads.
- Existing Lesson 2, Lesson 3, and Lesson 4 verification scripts pass.
- Browser verification at desktop and 390px mobile widths: seven practice links, topic completion, unanswered submissions, 79% failure, 82% pass, progress request payload, reload persistence, separate student profiles, and Professor/Administrator views.
- Browser progress requests were intercepted locally; no production student records were used or changed.
- Database migration applied twice on isolated Neon branch `br-sweet-darkness-amqiazjg`; both runs succeed without accumulating questions or blocks. It retains the published reading and does not touch student records.
- After explicit user approval, production migration and Netlify deploy `6aa813df237a3b12d37bdbd3` completed successfully. The live API and browser checks verify page 2, all seven practice links, 28 exercises, and the student gate. Reading and vocabulary hashes remain unchanged.
- Temporary branch `br-sweet-darkness-amqiazjg` was deleted after successful live verification, as requested.

Content is maintained in `content/lessons/lesson-4-language-study.json`, mirrored in `lesson-data.js` and migration `0018_lesson_4_language_study.sql`, with equality enforced by verification.
