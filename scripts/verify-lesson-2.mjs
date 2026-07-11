import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const expectedGreek = `Ὁ Ξενοφῶν παῖς ἐστίν. ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ.

ὁ πατὴρ τοῦ Ξενοφῶντος Γρύλλος ἐστίν. ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν. ὁ πατὴρ ἐν τῷ ἀγρῷ ἐργάζεται. ὁ δοῦλος μετὰ τοῦ πατρὸς ἐν τῷ ἀγρῷ ἐργάζεται.

ἡ μήτηρ ἐν τῇ οἰκίᾳ μένει. ἡ μήτηρ τοῦ Ξενοφῶντος ἀγαθὴ γυνή ἐστιν. ἡ μήτηρ τὸν οἶκον φυλάσσει. ἡ μήτηρ τοῖς δούλοις κελεύει. αἱ δοῦλαι πέπλους ὑφαίνουσιν. αἱ δοῦλαι ἄρτον παρασκευάζουσιν. ἡ μήτηρ τὴν οἰκίαν φιλεῖ.

ὁ Ξενοφῶν μετὰ τοῦ πατρὸς εἰς τὸν ἀγρὸν βαδίζει. ὁ παῖς τὸν ἵππον ἄγει. καὶ τὸν ὄνον ἄγει. ὁ παῖς ὕδωρ φέρει. ὁ παῖς ξύλα φέρει. ὁ παῖς τὸν κῆπον φυλάσσει.

μετὰ τὸ ἔργον ὁ Ξενοφῶν εἰς τὴν οἰκίαν ἔρχεται. ἡ μήτηρ τὸ δεῖπνον παρασκευάζει. ὁ πατὴρ καὶ ὁ παῖς ἐν τῇ οἰκίᾳ δειπνοῦσιν. ἡ οἰκία τοῦ Γρύλλου μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.`;

const expectedTranslation = `Xenophon is a boy. He lives in his father’s house.

Xenophon’s father is Gryllus. Gryllus is a good farmer. His father works in the field. The male household servant works with his father in the field.

His mother remains in the house. Xenophon’s mother is a good woman. His mother watches over the household. His mother gives instructions to the servants. The female household servants weave garments. The female household servants prepare bread. His mother loves the household.

Xenophon walks to the field with his father. The boy leads the horse. He also leads the donkey. The boy carries water. The boy carries firewood. The boy watches over the garden.

After the work, Xenophon returns to the house. His mother prepares dinner. His father and the boy dine in the house. The house of Gryllus is not small, but it is beautiful.`;

const requiredVocabulary = [
  "Γρύλλος",
  "ἀγαθός, -ή, -όν",
  "ἀγρός, ὁ",
  "ἄρτος, ὁ",
  "βαδίζω",
  "γεωργός, ὁ",
  "δεῖπνον, τό",
  "δειπνέω",
  "δοῦλος, ὁ",
  "δούλη, ἡ",
  "ἐργάζομαι",
  "ἔργον, τό",
  "ἔρχομαι",
  "ἵππος, ὁ",
  "κῆπος, ὁ",
  "κελεύω",
  "μένω",
  "μήτηρ, ἡ",
  "μικρός, -ά, -όν",
  "ὄνος, ὁ/ἡ",
  "οἰκία, ἡ",
  "οἰκέω",
  "οἶκος, ὁ",
  "παῖς, ὁ/ἡ",
  "παρασκευάζω",
  "πατήρ, ὁ",
  "πέπλος, ὁ",
  "ὕδωρ, τό",
  "ὑφαίνω",
  "φέρω",
  "φιλέω",
  "φυλάσσω",
  "ξύλον, τό",
];

function loadLessonData(source) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: "lesson-data.js" });
  return context.window.xenophonLessonData;
}

function assertNfc(value, label) {
  assert.equal(value, value.normalize("NFC"), `${label} should be NFC-normalized`);
}

function assertGreekNfc(value, label) {
  if (/[\u0370-\u03FF\u1F00-\u1FFF]/.test(value)) {
    assertNfc(value, label);
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

function assertQuestionsHaveKeys(activity, label) {
  assert.ok(activity, `${label} should exist`);
  assert.ok(Array.isArray(activity.questions), `${label} should have questions`);
  assert.ok(activity.questions.length > 0, `${label} should include questions`);

  activity.questions.forEach((question) => {
    assert.ok(question.id, `${label} question should have a stable id`);
    assert.ok(Array.isArray(question.choices), `${question.id} should have choices`);
    assert.equal(
      question.choices.filter((choice) => choice.correct).length,
      1,
      `${question.id} should have exactly one correct answer`
    );
    question.choices.forEach((choice) => {
      assert.ok(choice.feedback, `${question.id} choice ${choice.text} should include feedback`);
    });
  });
}

const lessonDataJs = await readFile(path.join(rootDir, "lesson-data.js"), "utf8");
const lessonData = loadLessonData(lessonDataJs);
const lesson = lessonData.getLesson("lesson-2");

assert.ok(lesson, "Lesson 2 should be defined");
assert.equal(lesson.title, "The Household of Xenophon");
assert.equal(lesson.greekTitle, "Ἡ οἰκία τοῦ Ξενοφῶντος");
assert.equal(lesson.pages[0].showTranslation, false, "Lesson 2 should preserve reveal-only translation behavior");
assert.equal(lesson.reading.title, "Ἡ οἰκία τοῦ Ξενοφῶντος");
assert.equal(lesson.reading.paragraphs.map((paragraph) => paragraph.greek).join("\n\n"), expectedGreek);
assert.equal(lesson.reading.translation, expectedTranslation);

flattenStrings(lesson, "lesson-2", assertGreekNfc);

const vocabulary = lesson.vocabulary.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.category }))
);
const vocabularyLabels = vocabulary.map((item) => item.greek);
requiredVocabulary.forEach((label) => {
  assert.ok(vocabularyLabels.includes(label), `${label} should be in Lesson 2 vocabulary`);
});
assert.ok(vocabularyLabels.includes("γυνή, ἡ"), "γυνή should be present as the reading's teacher-supported exception");
["ἐν", "εἰς", "μετά"].forEach((preposition) => {
  assert.equal(vocabularyLabels.includes(preposition), false, `${preposition} should be taught in grammar, not duplicated as vocabulary`);
});
assert.equal(new Set(vocabularyLabels).size, vocabularyLabels.length, "Lesson 2 vocabulary should not contain duplicate display forms");
assert.equal(vocabulary.length, 34, "Lesson 2 should have the requested vocabulary plus γυνή");

const properName = vocabulary.find((item) => item.greek === "Γρύλλος");
assert.equal(properName?.status, "proper name");
["πατήρ, ὁ", "μήτηρ, ἡ", "παῖς, ὁ/ἡ", "γυνή, ἡ", "ὕδωρ, τό"].forEach((label) => {
  assert.equal(
    vocabulary.find((item) => item.greek === label)?.status,
    "teacher-supported exception",
    `${label} should remain a teacher-supported exception`
  );
});

const sectionIds = lesson.grammar.sections.map((section) => section.id);
[
  "second-declension-nouns",
  "adjective-agreement",
  "possessive-genitive",
  "eimi",
  "simple-prepositions",
].forEach((id) => assert.ok(sectionIds.includes(id), `${id} grammar section should exist`));

const grammarTables = lesson.grammar.sections.flatMap((section) => section.table ? [section.table] : []);
grammarTables.forEach((table) => {
  assert.ok(table.title, "grammar tables should have titles");
  assert.ok(Array.isArray(table.headers) && table.headers.length > 0, `${table.title} should have headers`);
  assert.ok(Array.isArray(table.rows) && table.rows.length > 0, `${table.title} should have rows`);
});

const notes = lesson.reading.paragraphs.flatMap((paragraph) => paragraph.gloss || []);
[
  "τοῦ πατρός",
  "ἀγαθὸς γεωργός",
  "ἐν τῷ ἀγρῷ",
  "μετὰ τοῦ πατρός",
  "εἰς τὸν ἀγρόν",
  "τοῖς δούλοις",
  "μετὰ τὸ ἔργον",
  "τοῦ Γρύλλου",
].forEach((greek) => assert.ok(notes.some((note) => note.greek === greek), `${greek} should have a guided reading note`));

assertQuestionsHaveKeys(lesson.activities["grammar-exercises"], "Lesson 2 grammar exercises");
assertQuestionsHaveKeys(lesson.activities["lesson-quiz"], "Lesson 2 quiz");
assert.equal(lesson.activities["lesson-quiz"].questions.length, 10, "Lesson 2 quiz should include ten reading questions");

const lessonJs = await readFile(path.join(rootDir, "lesson.js"), "utf8");
assert.match(lessonJs, /<th scope="col">/, "Grammar tables should render column header scope");
assert.match(lessonJs, /scope="row"/, "Grammar tables should render row header scope");
assert.match(lessonJs, /lang="grc"/, "Lesson renderer should mark Greek text with lang=\"grc\"");

const activityJs = await readFile(path.join(rootDir, "activity.js"), "utf8");
assert.match(activityJs, /data-quiz-feedback/, "Quiz renderer should expose answer feedback");
assert.match(activityJs, /aria-live="polite"/, "Quiz feedback should be announced politely");

const migration = await readFile(path.join(rootDir, "db/migrations/0013_replace_lesson_2_household_reading.sql"), "utf8");
assert.match(migration, /The Household of Xenophon/, "Lesson 2 migration should update the title");
assert.match(migration, /lesson_2_household_vocabulary/, "Lesson 2 migration should update vocabulary associations");
assert.match(migration, /γυνή, ἡ/, "Lesson 2 migration should include γυνή");
assert.doesNotMatch(migration, /Prepositions and Other/, "Lesson 2 migration should not create a preposition vocabulary group");
assert.match(migration, /DELETE FROM public.lesson_vocabulary/, "Lesson 2 migration should replace only Lesson 2 vocabulary links");
assert.doesNotMatch(migration, /lesson_progress|student_lesson_test_grades|activity_attempts/i, "Lesson 2 migration should not touch progress or grade records");

console.log(`Verified Lesson 2 reading, ${vocabulary.length} vocabulary entries, ${grammarTables.length} grammar tables, and ${notes.length} guided notes.`);
