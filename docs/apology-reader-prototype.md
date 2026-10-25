# Xenophon’s Apology — Interactive Interlinear Reader

## Status (prototype 1)
This branch adds a functioning, self-contained §1 reader, not the entire work.

- Entry points: `Resources → Xenophon's Apology` and an optional capstone panel below the lesson list.
- Three views: Greek only; original-order Greek with aligned blue English word glosses; and natural English (separate sentence paragraphs).
- The "Show translation support" option hides glosses by returning to Greek mode. Selecting English or interlinear automatically enables it.
- Clicking a Greek word shows its lemma, gloss, grammatical parsing and syntactic function. Its related word IDs are highlighted, with clickable shortcuts in the side panel.
- Three sentence-sized reading paragraphs. All 67 source tokens accounted for, with valid in-paragraph syntactic cross references.
- §1 completion: a local, per-account/per-device browser marker. No server calls, no lesson grade writes, no effect on lesson completion, XP, awards, or course dashboards.
- All 34 numbered sections are **not** yet included. "1 of 34" is descriptive metadata, not a claim that the other 33 are implemented.
- New assets: `apology-reader.html`, `apology-reader.js`, `apology-reader.css`. Existing `resources.html` and `lessons.html` get links only. The repository's `scripts/build-site.mjs` already publishes top-level HTML/CSS/JS.

## Edition and rights
The Ancient Greek text is Xenophon, *Apology of Socrates* §1, ed. E. C. Marchant (Oxford, 1921):
https://beta.perseus.tufts.edu/urn:cts:greekLit:tlg0032.tlg005.perseus-grc2:1/
The Greek text matches the 24 + 23 + 20 word sequence (67 whitespace-delimited tokens) including its three sentences and their punctuation.
Perseus digital content is furnished under its stated Creative Commons Attribution–ShareAlike 4.0 terms (check attribution/redistribution terms for any future integrated datasets).
The interlinear glosses, English translations, morphology and syntax notes in this prototype are newly written for the course and should undergo review by a Greek instructor before production use. Do not treat automatic annotations as authoritative without review.

## Expansion to a Library of Ancient Greek Readings
1. Create a stable schema with work metadata (`author`, `title`, `edition`, `sourceUrl`, `rights`, `language`), section identifiers, and sentence/token arrays. Each token should hold stable ID, original form and punctuation, lemma, gloss, morphology tags, syntax description and links to other token IDs. English translations belong to sentences or sections and **must not** be substituted for aligned word glosses.
2. Preserve the scholarly printed order and section references; do not reorganize Greek into English syntax. Expand into manageable reading units (roughly 2–3 numbered sections at a time; adjust to actual length), with section-range navigation.
3. Add authenticated server-side reading progress **in its own tables**, separate from lesson completions, grades, achievements and XP. Allow per-section completion, resumption and aggregate reader progress.
4. Offer optional comprehension questions **for practice only**. Results should never affect course grades.
5. Consider a named commemorative award for finishing the work, explicitly optional and without affecting normal award/level logic.
6. Reuse the reader for other works, with the same core user controls, source citations, keyboard navigation, scalable fonts, screen-reader labels and iPad/mobile layouts.
7. Later, evaluate linking approved dictionary entries and adding accurate pronunciation audio. Keep lexical analyses editable by administrators so Greek teachers can correct them without redeploying the entire application.

## Acceptance tests before production publishing
- Three reading modes switch without changing or losing Greek token order.
- Disabling support hides English; clicking Greek reveals its lexical and syntactic analysis.
- Verify every word against the cited edition. In particular, check `ᾧ`, `ἔτυχον τῆς μεγαληγορίας`, `αἱρετώτερον`, and genitive-of-comparison `τοῦ βίου`.
- Related-token highlights and shortcuts work across all three sentences.
- Keyboard-only navigation and screen-reader announcement work; test iPhone/iPad and desktop layouts.
- Sign in as a student and administrator; links work from Resources and Lessons.
- Completing §1 does not affect lessons, course completion, grades, tests, XP, or awards.
- Production progress must not remain browser-only when the full Library is deployed.

