import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(new URL('../lesson-data.js', import.meta.url),'utf8'),context);
const lesson = JSON.parse(JSON.stringify(context.window.xenophonLessonData.getLesson(4)));
const payload = JSON.parse(fs.readFileSync(new URL('../content/lessons/lesson-4-language-study.json',import.meta.url),'utf8'));
for (const key of ["wordStudy", "grammar"]) assert.deepEqual(lesson[key],payload[key],`${key} must match the database payload`);
for (const key of Object.keys(payload.activities)) assert.deepEqual(lesson.activities[key],payload.activities[key]);
assert.deepEqual(lesson.pages.map(p=>p.template),['reading','grammar','culture']);
assert.equal(lesson.grammar.objectives.length,7);
assert.equal(lesson.grammar.sections.length,6);
const topics=[...lesson.wordStudy.blocks.map(b=>b.practiceTopic),...lesson.grammar.sections.map(s=>s.practiceTopic)];
assert.equal(new Set(topics).size,7);
const practice=lesson.activities['topic-practice'].questions;
const exercises=lesson.activities['grammar-exercises'];
assert.equal(practice.length,28);
assert.equal(exercises.questions.length,28);
assert.equal(exercises.threshold,80);
assert.equal(exercises.required,true);
assert.equal(exercises.requireAllAnswers,true);
for (const topic of topics) {
  assert.equal(practice.filter(q=>q.topic===topic).length,4,`${topic} practice coverage`);
  assert.equal(exercises.questions.filter(q=>q.topic===topic).length,4,`${topic} assessment coverage`);
}
const questions=[...practice,...exercises.questions];
assert.equal(new Set(questions.map(q=>q.id)).size,56);
assert.equal(new Set(questions.map(q=>q.prompt)).size,56,'Assessment should use distinct prompts');
for (const q of questions) {
  assert.equal(q.choices.length,4,q.id);
  assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);
  assert.equal(new Set(q.choices.map(c=>c.text)).size,4,q.id);
  assert.ok(q.choices.every(c=>c.feedback),`${q.id} feedback`);
}
assert.ok(lesson.grammar.sections.every(s=>s.checks.length && s.table.rows.length));
assert.equal(lesson.activities['grammar-flashcards'].cards.length,12);
assert.ok(lesson.activities['lesson-quiz'], 'Page 3 has its own final assessment');
const json=JSON.stringify(payload);
assert.equal(json,json.normalize('NFC'));
const migration=fs.readFileSync(new URL('../db/migrations/0018_lesson_4_language_study.sql',import.meta.url),'utf8');
assert.deepEqual(JSON.parse(migration.match(/\$json\$([\s\S]*?)\$json\$/)[1]),payload);
assert.doesNotMatch(migration,/DELETE FROM|UPDATE public\.(?:readings|reading_glosses|users|lesson_progress|student_progress)/);
console.log('Lesson 4 Language Study verified: 7 objectives, 6 grammar topics, balanced 28-question practice and assessment, 12 flashcards, and matching migration.');
