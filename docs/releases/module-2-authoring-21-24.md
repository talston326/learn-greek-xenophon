# Module II authoring: Lessons 21–24

The isolated generator is `scripts/build-module2-21-24.mjs`. It writes only `content/lessons/lesson-21.json` through `lesson-24.json`. Run it before integration. The generator does not edit the browser fallback, shared renderers, package scripts, or database migrations. Publication and live rendered verification are separate root-agent work.

| Lesson | Reading paragraphs | Vocabulary (required) | Grammar sections | Vocabulary practice | Topic practice | Required grammar | Final quiz |
|---|---:|---:|---:|---:|---:|---:|---:|
| 21 | 6 | 21 (19) | 5 | 38 | 36 | 30 | 30 |
| 22 | 6 | 22 (19) | 4 | 38 | 30 | 24 | 30 |
| 23 | 7 | 22 (19) | 4 | 38 | 30 | 24 | 30 |
| 24 | 7 | 22 (19) | 5 | 38 | 66 | 60 | 30 |

Each final quiz has 6 Reading, 6 Vocabulary, 12 Grammar, and 6 Greek World questions. Required grammar and final quiz have 80% thresholds, require every answer, and carry their own revision. Every multiple-choice question has four distinct choices, exactly one correct choice, choice feedback, and a full explanation. Answer positions rotate, giving final distributions of 8/8/7/7 or 7/7/8/8. Required grammar assesses every teaching section. Topic practice contains at least six distinct prompts for each grammar section and six for Word Study.

## Primary texts checked

The standing plan and `docs/curriculum/grammar-progression-48-lessons.md` were read directly. These primary-text translations were opened and checked on 11 October 2026; Perseus Hopper requests failed, so accessible mirrors were used:

- [Xenophon, Anabasis Book 1](https://cais-soas.com/CAIS/History/hakhamaneshian/xenophon/anabasis/xeno_anbs_book_1.htm): 1.8.17–29, Greek local success, Cyrus’s separate attack, and death.
- [Xenophon, Anabasis Book 2](https://cais-soas.com/CAIS/History/hakhamaneshian/xenophon/anabasis/xeno_anbs_book_2.htm): 2.1.1–4 for the next-day news; 2.5.25–35 for objections, five generals, twenty captains, seizure inside and killing outside, and Nicarchus’s report. Chapter 2.6 supplies the separate later-fate background.
- [Xenophon, Anabasis Book 3](https://cais-soas.com/CAIS/History/hakhamaneshian/xenophon/anabasis/xeno_anbs_book_3.htm): 3.1.11–25, 32–47 for the reported dream, mixed interpretation, consultation, Cheirisophus, and several replacement commanders; 3.3.1–20 for the early-retreat missile problem, unsuccessful pursuit, accepted criticism, Rhodian expertise, two hundred slingers, fifty horsemen, and Lycius son of Polystratus.
- [Xenophon, Memorabilia 4.6](https://monadnock.net/xenophon/mem4-6.html): 4.6.10–11, Socrates and Euthydemus on informed courage.
- [Xenophon, Memorabilia 3.2](https://monadnock.net/xenophon/mem3-2.html): 3.2.1–4, care for those being led.
- [Memorabilia, public-domain translation](https://www.gutenberg.org/files/1177/1177-h/1177-h.htm) was also opened as a primary-text cross-reference.

## Source and Greek audit

All Greek sentences are new, controlled Attic course compositions, rather than ancient quotations. Introductory labels explicitly identify simplified transitions and quoted speech as adaptations. English aligns one paragraph per Greek paragraph. Exact-substring glosses support advanced irregular forms, imperfects, athematic/passive aorists, perfect participles, and unfamiliar constructions; those unsupported formations are not assessed production targets.

The historical boundaries are preserved: the Greeks win locally while Cyrus dies; the generals are captured and their later deaths are distinct; Socrates the Achaean is distinct from the philosopher; Xenophon’s dream is reported with uncertainty; several replacement officers are chosen; Rhodians and cavalry solve an early tactical problem while sea and home remain ahead. The Memorabilia comparisons are explicitly separate work/settings, with no invented later-book reading in the camp. The pursuit is described as unsuccessful, and Xenophon accepts fellow commanders’ criticism.

Lesson 22 explicitly treats the exceptional simple imperatives εἰπέ, ἐλθέ, εὑρέ, ἰδέ, λαβέ and their differently accented plurals. Present/future/aorist stems and indicative augment are distinguished from unaugmented commands, participles, and infinitives. Lesson 24 retains separate full sections for liquid/nasal first aorists, irregular sigmatic stems, and compound augment. The irregular-sigmatic lexemes are not specified by name in the standing plan: this lesson explicitly assigns καίω→ἔκαυσα, κλαίω→ἔκλαυσα, ἀπόλλυμι→ἀπώλεσα, and supplies non-sigmatic exceptional first-aorist ἤνεγκα as recognition reference. It never calls that last form sigmatic.

The cumulative review covers the actual Module II progression: substantive adjectives, declension/stem systems, velar/dental/labial/nasal/liquid/-ντ- nouns, family nouns, γυνή/χείρ, σώφρων, πᾶς, πόλις/ἄστυ/βασιλεύς/ναῦς/βοῦς, reflexives, interrogatives/indefinites, article/genitive uses, cardinal agreement, time expressions, present active/middle participles, their relative time and substantive use, regular/contract/-ίζω/liquid futures, deponent/middle futures, εἶμι versus εἰμί, future purpose participles, impersonal requirement, and first/second aorists with participles. Review supplements the three new topics.

## Verification completed and integration boundaries

`node --check scripts/build-module2-21-24.mjs` passes. The generator asserts paragraph counts, aligned translations, every exact gloss substring, vocabulary counts/statuses, full teaching section fields, topic coverage, assessment sizes, unique prompts within each bank, globally unique IDs, four distinct choices, one correct answer, and feedback/explanations. A second generation was checked for deterministic output. Renderer field names were checked against Lesson 11 and `lesson.js`; reflections are included in the rendered `culture.questions` as well as explicit metadata.

Banner references are `assets/lesson-N-banner.png` with educational-reconstruction alt text and caption; root owns generation/integration of these assets. Navigation links Lesson 21 back to the canonical Lesson 20 title and Lesson 24 onward to the verified current Lesson 25 manifest title, “Mastering Oneself.” Lesson 25’s existing grammar placeholder conflicts with the standing future grammar progression; this authoring task does not change that next-module placeholder.
