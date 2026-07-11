import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const expectedGreek = `Ὁ Ξενοφῶν ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ. ὁ πατὴρ καὶ ἡ μήτηρ τὸν παῖδα φιλοῦσιν καὶ παιδεύειν βούλονται.

ὁ πατὴρ τὸν Ξενοφῶντα εἰς τὸν ἀγρὸν ἄγει. ἐκεῖ ὁ παῖς τὸν ἵππον θεραπεύει καὶ τὸν ὄνον ἄγει. ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν καὶ τὸν κῆπον φυλάσσειν.

«οὗτος ὁ ἵππος καλός ἐστιν,» λέγει ὁ πατήρ· «ἐκεῖνος δὲ ὁ ὄνος μικρός ἐστιν. βούλομαι σε τὰ ζῷα θεραπεύειν.»

ὁ Ξενοφῶν τὸν πατέρα ἀκούει καὶ τὸ ἔργον ποιεῖ. τὸν ἵππον θεραπεύει, ὕδωρ φέρει, καὶ ξύλα εἰς τὴν οἰκίαν κομίζει.

ἐν δὲ τῇ οἰκίᾳ ἡ μήτηρ τὰ ἔργα τῶν δούλων σκοπεῖ. αἱ δοῦλαι τὸν ἄρτον παρασκευάζουσιν καὶ τοὺς πέπλους ὑφαίνουσιν. ἡ μήτηρ κελεύει ταύτας τὰ ἔργα καλῶς ποιεῖν.

«αὕτη ἡ δούλη τὸν ἄρτον παρασκευάζει,» λέγει ἡ μήτηρ· «ἐκείνη δὲ τὸν πέπλον ὑφαίνει.»

μετὰ τὰ ἔργα ὁ Ξενοφῶν λούεται καὶ ἐσθίει. ἔπειτα ὁ παιδαγωγὸς αὐτὸν εἰς τὸ διδασκαλεῖον ἄγει.

ἐν τῷ διδασκαλείῳ ὁ Ξενοφῶν ὑπὸ τοῦ διδασκάλου παιδεύεται. ὁ διδάσκαλος γράμματα γράφει καὶ τὸν παῖδα κελεύει γράφειν. ὁ Ξενοφῶν τὰ γράμματα βλέπει καὶ μανθάνει.

ὁ διδάσκαλος τὸν Ὅμηρον ἀναγιγνώσκει. ὁ Ξενοφῶν βούλεται τὰ ἔπη μανθάνειν καὶ καλῶς ἀναγιγνώσκειν. ὁ διδάσκαλος χαίρει, ὅτι ὁ παῖς φιλεῖ μανθάνειν.

οὗτος μὲν ὁ διδάσκαλος γράμματα διδάσκει· ἐκεῖνος δὲ ὁ διδάσκαλος μουσικὴν διδάσκει. οἱ παῖδες τὰ γράμματα μανθάνουσιν, τὴν μουσικὴν ἀκούουσιν, καὶ τοὺς τοῦ Ὁμήρου λόγους λέγουσιν.

ὁ Ξενοφῶν νέος ἐστίν, ἀλλὰ σοφὸς γενέσθαι βούλεται.`;

const expectedTranslation = `Xenophon lives in his father’s house. His father and mother love the boy and want to educate him.

His father leads Xenophon to the farm. There the boy tends the horse and leads the donkey. His father orders the boy to carry water and guard the garden.

“This horse is beautiful,” says his father, “but that donkey is small. I want you to tend the animals.”

Xenophon listens to his father and does the work. He tends the horse, carries water, and brings firewood into the house.

In the house, his mother oversees the work of the household servants. The female servants prepare the bread and weave the garments. His mother orders these women to do their work well.

“This servant prepares the bread,” says his mother, “but that one weaves the garment.”

After his chores, Xenophon washes himself and eats. Then the attendant leads him to school.

At school Xenophon is educated by the teacher. The teacher writes letters and orders the boy to write. Xenophon looks at the letters and learns.

The teacher reads Homer aloud. Xenophon wants to learn the verses and read well. The teacher is pleased because the boy loves to learn.

This teacher teaches letters, but that teacher teaches music. The boys learn their letters, listen to music, and recite the words of Homer.

Xenophon is young, but he wants to become wise.`;

const requiredVocabulary = [
  "ἀκούω",
  "ἀναγιγνώσκω",
  "βλέπω",
  "βούλομαι",
  "γενέσθαι",
  "γράμμα, τό",
  "γράφω",
  "διδάσκαλος, ὁ",
  "διδασκαλεῖον, τό",
  "διδάσκω",
  "ἐκεῖ",
  "ἐκεῖνος, ἐκείνη, ἐκεῖνο",
  "ἔπος, τό",
  "ἐσθίω",
  "θεραπεύω",
  "κομίζω",
  "λούομαι",
  "μανθάνω",
  "μουσική, ἡ",
  "νέος, νέα, νέον",
  "Ὅμηρος, ὁ",
  "οὗτος, αὕτη, τοῦτο",
  "παιδαγωγός, ὁ",
  "παιδεύω",
  "ποιέω",
  "σκοπέω",
  "σοφός, σοφή, σοφόν",
  "ζῷον, τό",
  "ἀγρός, ὁ",
  "ἄρτος, ὁ",
  "δοῦλος, ὁ",
  "δούλη, ἡ",
  "ἔργον, τό",
  "ἵππος, ὁ",
  "κελεύω",
  "κῆπος, ὁ",
  "μήτηρ, ἡ",
  "οἰκία, ἡ",
  "ὄνος, ὁ/ἡ",
  "παῖς, ὁ/ἡ",
  "πατήρ, ὁ",
  "πέπλος, ὁ",
  "παρασκευάζω",
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
const lesson = lessonData.getLesson("lesson-3");

assert.ok(lesson, "Lesson 3 should be defined");
assert.equal(lesson.title, "The Education of Xenophon");
assert.equal(lesson.greekTitle, "Ἡ παιδεία τοῦ Ξενοφῶντος");
assert.equal(lesson.pages[0].showTranslation, false, "Lesson 3 should preserve reveal-only translation behavior");
assert.equal(lesson.reading.title, "Ἡ παιδεία τοῦ Ξενοφῶντος");
assert.equal(lesson.reading.paragraphs.map((paragraph) => paragraph.greek).join("\n\n"), expectedGreek);
assert.equal(lesson.reading.translation, expectedTranslation);

flattenStrings(lesson, "lesson-3", assertGreekNfc);

const vocabulary = lesson.vocabulary.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.category }))
);
const vocabularyLabels = vocabulary.map((item) => item.greek);
requiredVocabulary.forEach((label) => {
  assert.ok(vocabularyLabels.includes(label), `${label} should be in Lesson 3 vocabulary`);
});
assert.equal(new Set(vocabularyLabels).size, vocabularyLabels.length, "Lesson 3 vocabulary should not contain duplicate display forms");
assert.equal(vocabulary.length, 49, "Lesson 3 should include 49 vocabulary entries");
assert.equal(vocabulary.find((item) => item.greek === "Ὅμηρος, ὁ")?.status, "proper name");
assert.equal(vocabulary.find((item) => item.greek === "ἀγρός, ὁ")?.status, "review vocabulary");
assert.equal(vocabulary.find((item) => item.greek === "παιδαγωγός, ὁ")?.status, "new required vocabulary");

const notes = lesson.reading.paragraphs.flatMap((paragraph) => paragraph.gloss || []);
[
  "τὸν παῖδα",
  "παιδεύειν βούλονται",
  "τὸν Ξενοφῶντα",
  "κελεύει τὸν παῖδα ὕδωρ φέρειν",
  "οὗτος ὁ ἵππος",
  "ἐκεῖνος ὁ ὄνος",
  "σε",
  "ταύτας",
  "λούεται",
  "παιδεύεται",
  "ὑπὸ τοῦ διδασκάλου",
  "σοφὸς γενέσθαι βούλεται",
].forEach((greek) => assert.ok(notes.some((note) => note.greek === greek), `${greek} should have a guided reading note`));

const sectionIds = lesson.grammar.sections.map((section) => section.id);
[
  "third-person-present-verbs",
  "accusative-direct-objects",
  "simple-infinitive-expressions",
  "present-middle-and-passive",
  "demonstratives",
].forEach((id) => assert.ok(sectionIds.includes(id), `${id} grammar section should exist`));

lesson.grammar.sections.forEach((section) => {
  assert.ok(section.practiceTopic, `${section.id} should link to a practice topic`);
  assert.ok(Array.isArray(section.checks) && section.checks.length > 0, `${section.id} should have check items`);
  const tables = [...(section.tables || []), ...(section.table ? [section.table] : [])];
  assert.ok(tables.length > 0, `${section.id} should include at least one table`);
  tables.forEach((table) => {
    assert.ok(table.title, `${section.id} table should have a title`);
    assert.ok(Array.isArray(table.headers) && table.headers.length > 0, `${table.title} should have headers`);
    assert.ok(Array.isArray(table.rows) && table.rows.length > 0, `${table.title} should have rows`);
  });
});

assertQuestionsHaveKeys(lesson.activities["topic-practice"], "Lesson 3 topic practice");
assertQuestionsHaveKeys(lesson.activities["grammar-exercises"], "Lesson 3 grammar exercises");
assertQuestionsHaveKeys(lesson.activities["lesson-quiz"], "Lesson 3 test");

const topicCounts = lesson.activities["topic-practice"].questions.reduce((counts, question) => {
  counts.set(question.topic, (counts.get(question.topic) || 0) + 1);
  return counts;
}, new Map());
[
  ["third-person-present-verbs", 15],
  ["accusative-direct-objects", 8],
  ["simple-infinitive-expressions", 12],
  ["present-middle-and-passive", 8],
  ["demonstratives", 10],
  ["reading-comprehension", 13],
  ["translation", 14],
].forEach(([topic, minimum]) => {
  assert.ok((topicCounts.get(topic) || 0) >= minimum, `${topic} should have at least ${minimum} items`);
});

const quiz = lesson.activities["lesson-quiz"];
assert.equal(quiz.questions.length, 20, "Lesson 3 test should have 20 questions");
assert.equal(quiz.pointsPossible, 100);
assert.equal(quiz.pointsPerQuestion, 5);
assert.equal(quiz.threshold, 70);
assert.equal(quiz.masteryScore, 85);
assert.equal(quiz.randomizeChoices, true);
assert.ok(quiz.categoryFeedback, "Lesson 3 test should include category feedback");

const categoryCounts = quiz.questions.reduce((counts, question) => {
  counts.set(question.category, (counts.get(question.category) || 0) + 1);
  return counts;
}, new Map());
[
  "Third-person verbs",
  "Accusative direct objects",
  "Infinitives",
  "Middle and passive forms",
  "Demonstratives and comprehension",
].forEach((category) => {
  assert.equal(categoryCounts.get(category), 4, `${category} should have four test questions`);
  assert.ok(quiz.categoryFeedback[category], `${category} should have targeted feedback`);
});

const lessonJs = await readFile(path.join(rootDir, "lesson.js"), "utf8");
assert.match(lessonJs, /<th scope="col">/, "Grammar tables should render column header scope");
assert.match(lessonJs, /scope="row"/, "Grammar tables should render row header scope");
assert.match(lessonJs, /lang="grc"/, "Lesson renderer should mark Greek text with lang=\"grc\"");
assert.match(lessonJs, /grammar-checks/, "Grammar renderer should show check items");

const activityJs = await readFile(path.join(rootDir, "activity.js"), "utf8");
assert.match(activityJs, /randomizeChoices/, "Lesson tests should support randomized answer order");
assert.match(activityJs, /categoryScores/, "Lesson tests should report category scores");
assert.match(activityJs, /category-feedback/, "Lesson tests should render category feedback");

const progressJs = await readFile(path.join(rootDir, "lesson-progress.js"), "utf8");
assert.match(progressJs, /categoryScores/, "Lesson progress should send category scores");
assert.match(progressJs, /pointsEarned/, "Lesson progress should send points earned");

const progressFunction = await readFile(path.join(rootDir, "netlify/functions/lesson-progress.mts"), "utf8");
assert.match(progressFunction, /student_lesson_test_grades/, "Lesson test passes should be saved to grade records");
assert.match(progressFunction, /attempt_number/, "Saved test grades should preserve prior attempts by adding an attempt number");

const migration = await readFile(path.join(rootDir, "db/migrations/0014_replace_lesson_3_education_reading.sql"), "utf8");
assert.match(migration, /The Education of Xenophon/, "Lesson 3 migration should update the title");
assert.match(migration, /lesson_3_education_vocabulary/, "Lesson 3 migration should update vocabulary associations");
assert.match(migration, /Ὅμηρος, ὁ/, "Lesson 3 migration should include Homer");
assert.match(migration, /DELETE FROM public.lesson_vocabulary/, "Lesson 3 migration should replace only Lesson 3 vocabulary links");
assert.doesNotMatch(migration, /DELETE FROM public\\.lesson_progress|DELETE FROM public\\.student_lesson_test_grades|DELETE FROM public\\.activity_events/i, "Lesson 3 migration should not delete progress, grades, or activity records");

console.log(`Verified Lesson 3 reading, ${vocabulary.length} vocabulary entries, ${lesson.grammar.sections.length} grammar sections, ${notes.length} guided notes, and ${quiz.questions.length} test questions.`);
