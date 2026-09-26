import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const read = name => fs.readFileSync(new URL(name, root), 'utf8');
const context = { window: {} };
vm.runInNewContext(read('lesson-data.js'), context);
const data = context.window.xenophonLessonData;
const lesson = JSON.parse(JSON.stringify(data.getLesson(5)));
const payload = JSON.parse(read('content/lessons/lesson-5.json'));
assert.deepEqual(lesson, payload, 'Published payload and static fallback must agree');
assert.deepEqual(lesson.pages.map(p => p.template), ['reading', 'grammar']);
assert.equal(lesson.pages[0].showTranslation, false, 'Keep the student translation policy');
const words = l => l.reading.paragraphs.reduce((n, p) => n + p.greek.trim().split(/\s+/u).length, 0);
assert.ok(words(lesson) > words(data.getLesson(4)), 'Reading must grow beyond Lesson 4');
assert.ok(lesson.reading.paragraphs.every(p => p.gloss.length > 0));
assert.equal(lesson.reading.translation.split('\n\n').length, lesson.reading.paragraphs.length);
assert.match(lesson.reading.introduction.join(' '), /invented/);
assert.match(lesson.reading.sourceCitation, /Laertius.*2\.48/);
const reading = lesson.reading.paragraphs.map(p=>p.greek).join(' ');
for (const target of ['λέγουσι', 'ἀκούετε', 'μὴ σπεύδετε', 'ἐθέλει μανθάνειν', 'ἕπου τοίνυν καὶ μάνθανε']) {
  assert.ok(reading.includes(target), `Story needs ${target}`);
}
const cards = data.getVocabularyCards(lesson);
assert.equal(cards.length, lesson.vocabulary.flatMap(g=>g.items).length);
assert.equal(new Set(cards.map(c=>c.prompt)).size, cards.length);
assert.ok(cards.every(c=>c.prompt && c.answer));
const practice = lesson.activities['topic-practice'].questions;
const assessment = lesson.activities['grammar-exercises'];
const topics = [...lesson.wordStudy.blocks, ...lesson.grammar.sections].map(s=>s.practiceTopic);
for (const topic of topics) {
  assert.ok(practice.filter(q=>q.topic===topic).length>=3, `Practice coverage: ${topic}`);
  assert.ok(assessment.questions.filter(q=>q.topic===topic).length>=3, `Exercise coverage: ${topic}`);
}
assert.equal(assessment.threshold, 80);
assert.ok(assessment.required && assessment.requireAllAnswers);
const allQuestions=Object.values(lesson.activities).flatMap(a=>a.questions||[]);
assert.equal(new Set(allQuestions.map(q=>q.id)).size,allQuestions.length);
assert.equal(new Set([...practice,...assessment.questions].map(q=>q.prompt)).size,practice.length+assessment.questions.length);
for (const q of allQuestions) {
  assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);
  assert.equal(new Set(q.choices.map(c=>c.text)).size,q.choices.length,q.id);
  assert.ok(q.choices.every(c=>c.feedback),q.id);
}
assert.ok(lesson.grammar.sections.every(s=>s.checks.length && s.table.rows.length));
assert.ok(fs.existsSync(new URL(lesson.banner.image,root)),'Banner must exist');
assert.equal(data.getLesson(4).nextLesson.fallbackUrl,'lesson.html?lesson=5&page=1');
assert.match(read('script.js'),/id: "lesson-5", title: "An Unexpected Question"/);
const migration=read('db/migrations/0020_lesson_5_first_meeting.sql');
assert.deepEqual(JSON.parse(migration.match(/\$json\$([\s\S]*?)\$json\$/)[1]),payload);
assert.match(migration,/INSERT INTO public\.lesson_content_versions/);
assert.match(migration,/RAISE EXCEPTION 'Lesson 5 reading changed/);
assert.doesNotMatch(migration,/(?:UPDATE|DELETE FROM) public\.(?:users|lesson_progress|student_progress|lesson_content_drafts)/);
const serialized=JSON.stringify(payload);
assert.equal(serialized,serialized.normalize('NFC'));
console.log(`Lesson 5 verified: ${words(lesson)} words (Lesson 4: ${words(data.getLesson(4))}), ${cards.length} vocabulary cards, ${practice.length} practice questions, ${assessment.questions.length} assessed questions, two authored pages, matching migration and preserved history.`);
