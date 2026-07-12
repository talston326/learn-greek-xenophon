import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const expectedGreek = `Πρωΐ ἐστιν. ὁ Γρύλλος ἐν τῇ αὐλῇ ἕστηκεν. ὁ γὰρ πατὴρ τοῦ Ξενοφῶντος ἱππεύς ἐστι καὶ μέλλει ἐκ τῆς οἰκίας ἀπιέναι. πρῶτον μὲν σκοπεῖ τὸν ἵππον· εἶτα δὲ τὸ κράνος καὶ τὸν θώρακα θεωρεῖ. μετὰ ταῦτα τὴν ἀσπίδα καὶ τὴν λόγχην λαμβάνει. πάντα καλὰ καὶ ἕτοιμά ἐστιν. ὁ δὲ Ξενοφῶν παρὰ τῷ πατρὶ ἵσταται καὶ σιγῇ βλέπει. ὁ γὰρ παῖς τὸν πατέρα θαυμάζει.

ὁ δὲ Γρύλλος πρὸς τὸν παῖδα λέγει· «ὦ Ξενοφῶν, δεῦρο καὶ βοήθει μοι.» ὁ οὖν Ξενοφῶν προθύμως βοηθεῖ. πρῶτον μὲν ψήχει τὸν ἵππον, εἶτα δὲ καθαίρει τὸ κράνος. ὁ χαλκὸς τοῦ κράνους λαμπρὸς γίνεται. μετὰ ταῦτα φέρει τὴν λόγχην τῷ πατρί καὶ δίδωσιν αὐτῷ. ὁ δὲ πατὴρ τὸν θώρακα λαμβάνει καὶ πάλιν πάντα σκοπεῖ. τέλος δὲ λέγει· «καλῶς ποιεῖς, ὦ Ξενοφῶν.»

ἤδη πάντα ἕτοιμά ἐστιν. ὁ Γρύλλος τὸν ἵππον ἄγει πρὸ τῆς οἰκίας καὶ ἐπὶ τὸν ἵππον ἀναβαίνει. ὁ δὲ Ξενοφῶν παρὰ τῇ θύρᾳ ἵσταται καὶ τὸν πατέρα βλέπει. ὁ πατὴρ πρὸς τὸν παῖδα χαίρων βλέπει καὶ λέγει· «ἐπιμελὴς γίνου, ὦ παῖ· οὕτω γὰρ ἀγαθὸς ἀνήρ γίγνεται.» εἶτα ἀπέρχεται. ὁ δὲ Ξενοφῶν πολὺν χρόνον τὸν πατέρα βλέπει, καὶ ἐν τῇ καρδίᾳ λέγει ὅτι καὶ αὐτὸς ποτὲ βούλεται τῇ Ἀθήνῃ ὠφέλιμος εἶναι.`;

const expectedVocabulary = [
  "ὁ ἱππεύς",
  "τὸ κράνος",
  "ὁ θώραξ",
  "ἡ λόγχη",
  "ἡ ἀσπίς",
  "ἡ αὐλή",
  "ὁ χαλκός",
  "θεωρέω",
  "ψήχω",
  "καθαίρω",
  "μέλλω",
  "ἀναβαίνω",
  "ἐπιμελής",
  "προθύμως",
];

function loadLessonData(source) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: "lesson-data.js" });
  return context.window.xenophonLessonData;
}

function assertGreekNfc(value, label) {
  if (/[\u0370-\u03FF\u1F00-\u1FFF]/.test(value)) {
    assert.equal(value, value.normalize("NFC"), `${label} should be NFC-normalized`);
  }
}

function flattenStrings(value, label, callback) {
  if (typeof value === "string") {
    callback(value, label);
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => flattenStrings(item, `${label}[${index}]`, callback));
    return;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => flattenStrings(item, `${label}.${key}`, callback));
  }
}

const lessonDataJs = await readFile(path.join(rootDir, "lesson-data.js"), "utf8");
const lessonData = loadLessonData(lessonDataJs);
const lesson = lessonData.getLesson("lesson-4");

assert.ok(lesson, "Lesson 4 should be defined");
assert.equal(lesson.title, "The Preparation Before the March");
assert.equal(lesson.greekTitle, "Ἡ Παρασκευὴ πρὸ τῆς πορείας");
assert.equal(lesson.pages.length, 1, "Lesson 4 should expose only the Reading page for this build");
assert.equal(lesson.pages[0].template, "reading");
assert.notEqual(lesson.pages[0].showTranslation, false, "Lesson 4 translation should be available behind the reveal control");
assert.equal(lesson.reading.title, "Ἡ Παρασκευὴ πρὸ τῆς πορείας");
assert.equal(lesson.reading.paragraphs.map((paragraph) => paragraph.greek).join("\n\n"), expectedGreek);
assert.ok(lesson.reading.translation.includes("It is early morning."), "Lesson 4 should include the approved English translation");
assert.equal(lesson.banner.image, "assets/lesson-4-banner.png", "Lesson 4 should use the committed banner image");
assert.ok(lesson.banner.alt.includes("Young Xenophon brushing his father's horse"), "Lesson 4 banner should describe the requested image");
assert.equal(lesson.activities && Object.keys(lesson.activities).length, 0, "Lesson 4 should not add grammar, practice, quiz, or assessment activities");

flattenStrings(lesson, "lesson-4", assertGreekNfc);

const vocabulary = lesson.vocabulary.flatMap((group) => group.items.map((item) => ({ ...item, category: group.category })));
const vocabularyLabels = vocabulary.map((item) => item.greek);
assert.equal(JSON.stringify(vocabularyLabels), JSON.stringify(expectedVocabulary), "Lesson 4 vocabulary should include only the specified new entries");
assert.equal(new Set(vocabularyLabels).size, vocabularyLabels.length, "Lesson 4 vocabulary should not contain duplicate display forms");
vocabulary.forEach((item) => {
  assert.equal(item.status, "new required vocabulary", `${item.greek} should be new required vocabulary`);
  assert.equal(item.audioPlaceholder, true, `${item.greek} should have a safe audio placeholder`);
  assert.equal(JSON.stringify(item.spacedRepetition), JSON.stringify({ box: 1, intervalDays: 0, ease: 2.5 }), `${item.greek} should include spaced repetition metadata`);
});

const cards = lessonData.getVocabularyCards(lesson);
assert.equal(cards.length, expectedVocabulary.length, "Lesson 4 flashcards should be generated only from Lesson 4 vocabulary");
assert.equal(JSON.stringify(cards.map((card) => card.greek)), JSON.stringify(expectedVocabulary), "Lesson 4 flashcards should match the vocabulary list");
cards.forEach((card) => {
  assert.equal(card.audioPlaceholder, true, `${card.greek} flashcard should preserve the audio placeholder`);
  assert.equal(JSON.stringify(card.spacedRepetition), JSON.stringify({ box: 1, intervalDays: 0, ease: 2.5 }), `${card.greek} flashcard should preserve spaced repetition metadata`);
});

const glosses = lesson.reading.paragraphs.flatMap((paragraph) => paragraph.gloss || []);
[
  "μέλλει ... ἀπιέναι",
  "πρῶτον μὲν ... εἶτα δὲ",
  "λαμβάνει",
  "παρὰ τῷ πατρί",
  "ἵσταται",
  "θαυμάζει",
  "βοήθει μοι",
  "οὖν",
  "βοηθεῖ",
  "λαμπρὸς γίνεται",
  "τῷ πατρί",
  "δίδωσιν αὐτῷ",
  "τέλος",
  "πάντα ἕτοιμά",
  "πρὸ τῆς οἰκίας",
  "παρὰ τῇ θύρᾳ",
  "γίνου",
  "γίγνεται",
  "ἀπέρχεται",
  "λέγει ὅτι",
  "καὶ αὐτός",
  "τῇ Ἀθήνῃ",
  "ὠφέλιμος εἶναι",
].forEach((greek) => assert.ok(glosses.some((gloss) => gloss.greek === greek), `${greek} should be glossed as Lesson 4 support`));

[
  "ἐν τῇ αὐλῇ",
  "ἱππεύς",
  "τὸ κράνος",
  "τὸν θώρακα",
  "θεωρεῖ",
  "τὴν ἀσπίδα",
  "τὴν λόγχην",
  "δεῦρο",
  "προθύμως",
  "ψήχει",
  "καθαίρει",
  "ὁ χαλκός",
  "ἐπὶ τὸν ἵππον ἀναβαίνει",
  "ἐπιμελὴς",
  "καλῶς ποιεῖς",
].forEach((greek) => assert.ok(!glosses.some((gloss) => gloss.greek === greek), `${greek} should not be duplicated in paragraph glosses`));

const lessonJs = await readFile(path.join(rootDir, "lesson.js"), "utf8");
assert.match(lessonJs, /lesson-hero__placeholder/, "Lesson renderer should support an illustration placeholder");
assert.match(lessonJs, /Show Translation/, "Lesson renderer should keep translation behind a reveal control");
assert.match(lessonJs, /reading-audio-placeholder/, "Lesson renderer should support reading audio placeholders");
assert.match(lessonJs, /vocab-audio-button--placeholder/, "Lesson renderer should support vocabulary audio placeholders");
assert.match(lessonJs, /getPreviousLessonUrl/, "Lesson renderer should support previous lesson navigation");
assert.match(lessonJs, /lang="grc"/, "Lesson renderer should mark Greek text with lang=\"grc\"");

const styles = await readFile(path.join(rootDir, "styles.css"), "utf8");
assert.match(styles, /\.lesson-hero__placeholder/, "Placeholder should have shared styling");
assert.match(styles, /\.reading-audio-placeholder/, "Reading audio placeholder should be styled");

const scriptJs = await readFile(path.join(rootDir, "script.js"), "utf8");
assert.match(scriptJs, /The Preparation Before the March/, "Course navigation metadata should use the new Lesson 4 title");

const packageJson = await readFile(path.join(rootDir, "package.json"), "utf8");
assert.match(packageJson, /0015_replace_lesson_4_reading\.sql/, "db:migrate should include the Lesson 4 reading migration");

const lessonContentFunction = await readFile(path.join(rootDir, "netlify/functions/lesson-content.mts"), "utf8");
assert.match(lessonContentFunction, /public\.reading_glosses/, "Lesson content API should preserve stored paragraph glosses");
assert.match(lessonContentFunction, /paragraph\.gloss\.push/, "Lesson content API should attach glosses to reading paragraphs");

const migration = await readFile(path.join(rootDir, "db/migrations/0015_replace_lesson_4_reading.sql"), "utf8");
assert.match(migration, /lesson_4_reading_payload/, "Lesson 4 migration should define the reading payload");
assert.match(migration, /lesson_4_vocabulary/, "Lesson 4 migration should define vocabulary associations");
assert.match(migration, /Πρωΐ ἐστιν\./, "Lesson 4 migration should include the exact reading");
assert.match(migration, /assets\/lesson-4-banner\.png/, "Lesson 4 migration should publish the banner image");
assert.match(migration, /lesson_content_overrides/, "Lesson 4 migration should publish the content override");
assert.doesNotMatch(migration, /public\.exercises|public\.quizzes|quiz_questions|student_lesson_test_grades|lesson_progress|student_progress/i, "Lesson 4 reading migration should not touch practice, quiz, grade, or progress tables");

console.log(`Verified Lesson 4 reading page with ${lesson.reading.paragraphs.length} paragraphs, ${glosses.length} glosses, and ${cards.length} vocabulary flashcards.`);
