# Module II authoring: Lessons 13–16

Canonical plan: `docs/curriculum/curriculum-narrative.md`, Module II, plan dated 11 October 2026. Grammar allocation: `docs/curriculum/grammar-progression-48-lessons.md`, I 7α–8β. Renderer schema inspected in Lesson 11 JSON, its generator, and `lesson.js`.

Run `node scripts/build-module2-13-16.mjs` to reproduce only the four canonical lesson JSONs. This generator does not edit browser fallback data, database migrations, metadata, or assets. It inherits no Module I lesson bodies or activities.

| Lesson | Reading paragraphs | Vocabulary total / required | Grammar sections | Topic practice | Required grammar | Final quiz |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 13 | 8 | 22 / 19 | 4 | 30 | 24 | 30 |
| 14 | 8 | 22 / 17 | 5 | 36 | 30 | 30 |
| 15 | 8 | 23 / 20 | 5 | 36 | 30 | 30 |
| 16 | 8 | 23 / 20 | 5 | 36 | 30 | 30 |

Each grammar section and the word-study topic has six distinct formative questions. Vocabulary practice has two questions for each required entry (38, 34, 40, and 40 questions). Required grammar and final quizzes require every answer and 80%. Each final quiz has eight Reading, six Vocabulary, ten Grammar, and six Greek World questions, with answer positions distributed 8/8/7/7 across the four choices. All 30 final prompts in each lesson are distinct.

Each lesson has three culture sections with two substantive paragraphs each, six reflection questions with suggested answers, review material, and primary-text source links. Reading translations have eight aligned paragraphs. Exact-substring gloss checks are enforced in the generator, alongside vocabulary bounds, topic coverage, answer uniqueness, and assessment counts.

## Primary sources verified through the web tool

- [Xenophon, Anabasis 1.2](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A1%3A2), Carleton L. Brownson translation: 1.2.1–5 for gathering at Sardis and the stated Pisidian target; 1.2.5–11 for the river bridge, route, royal park, gathering contingents, games, and arrears; 1.2.12–18 and 25–27 for Epyaxa, payment, review, civilian flight, and negotiation.
- [Xenophon, Anabasis 3.1](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3), Brownson translation: **3.1.4** is the initial neither-general/nor-captain/nor-private statement. It supplements the canonical plan’s 3.1.8–10, which supplies arrival, welcome, and limited knowledge of the expedition’s purpose.
- [Xenophon, Memorabilia 3.2](https://monadnock.net/xenophon/mem3-2.html): shepherd comparison and responsibility for followers’ safety, supplies, and welfare.
- [Xenophon, Memorabilia 3.4](https://monadnock.net/xenophon/mem3-4.html): Nicomachides’s complaint, Antisthenes’s election, chorus organization, skilled helpers, management, and readiness.
- [Xenophon, Memorabilia 3.1](https://monadnock.net/xenophon/mem3-1.html): preparation extends beyond formation.

The short `Xen.+Anab.+1.2` / `Xen.+Anab.+3.1` Perseus URLs initially returned errors. The full encoded Perseus ABO URLs above returned the text, and passage findings were read directly. No source claim relies on a failed fetch.

## Greek and source audit

All Greek is original course adaptation in the historical present. Reunion dialogue, observations, ordinary soldiers’ speech, and transitions are identified as reconstruction. Memorabilia scenes stay separate from the expedition, and Xenophon is not claimed as a witness or as remembering an attested exchange.

Lesson 13 retains Xenophon’s lack of any of the three initial military ranks. Lesson 14 does not identify the elected Antisthenes with the philosopher. Lesson 15 introduces present middle participles formally; Lessons 13–14 do not assess participial grammar. Its golden strigils use feminine agreement, χρυσαῖ στλεγγίδες. Lesson 14’s need-question uses genitive τίνος with χρῄζω. Lesson 16 makes Syennesis the explicit subject receiving assurances, preserves the distinction between reported financial assistance and stated four-month payment, and supplies no invented Epyaxa motives or speech. Civilian harm and fear remain visible. Root review corrected the prose accent to γυναικί and narrowed the shield-bearing statement to πᾶς ὁπλίτης, every hoplite, to avoid implying that all Greek archers also carried shields.

Morphology tables and exercises distinguish velar/dental changes, nasal/labial/liquid patterns, reflexive reference, present participle agreement and relative time, family-noun alternations, irregular γυνή/χείρ, πᾶς, inflected cardinals, and the three time constructions. Genitive τεττάρων μηνῶν after μισθός is labeled quantity of wages, distinct from an accusative duration. Synonymous vocabulary distractors (for example save/protect, watch/inspect, and prepare/preparation) are excluded from competing options.

## Validation and integration boundaries

Passed: `node --check scripts/build-module2-13-16.mjs`; generator execution; exact gloss containment; eight-paragraph translation alignment; per-topic distinct prompts; one correct choice per question; 30 distinct final prompts per lesson; all four final-answer positions; appropriate neighbor titles and links.

Reserved banners use `assets/lesson-N-banner.png`, explicitly labeled AI-generated educational reconstruction in alt text and caption. Root integration supplies those images and performs browser rendering, fallback integration, metadata reconciliation, migration/deployment, and live API checks. Canonical authoring checks alone do not establish publication or visual QA.
