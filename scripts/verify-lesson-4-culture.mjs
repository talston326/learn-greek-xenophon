import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const root=new URL('../',import.meta.url);
const c={window:{}};vm.runInNewContext(fs.readFileSync(new URL('lesson-data.js',root),'utf8'),c);
const lesson=JSON.parse(JSON.stringify(c.window.xenophonLessonData.getLesson(4)));
const payload=JSON.parse(fs.readFileSync(new URL('content/lessons/lesson-4-culture-quiz.json',root),'utf8'));
assert.deepEqual(lesson.pages.map(p=>p.template),['reading','grammar','culture']);
assert.deepEqual(lesson.culture,payload.culture);
assert.deepEqual(lesson.activities['lesson-quiz'],payload.activities['lesson-quiz']);
const quiz=lesson.activities['lesson-quiz'];
assert.equal(quiz.questions.length,20);assert.equal(quiz.threshold,80);assert.equal(quiz.pointsPossible,100);assert.equal(quiz.pointsPerQuestion,5);
assert.equal(quiz.required,true);assert.equal(quiz.requireAllAnswers,true);
assert.equal(lesson.activities['grammar-exercises'].questions.length,28);
const prior=new Set([...lesson.activities['grammar-exercises'].questions,...lesson.activities['topic-practice'].questions].map(q=>q.prompt));
assert.equal(new Set(quiz.questions.map(q=>q.id)).size,20);
for(const q of quiz.questions){assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);assert.equal(new Set(q.choices.map(c=>c.text)).size,4,q.id);assert.ok(q.choices.every(c=>c.feedback),q.id);assert.ok(!prior.has(q.prompt),'Quiz uses distinct prompts');assert.ok(quiz.categoryFeedback[q.category]);}
assert.equal(new Set(quiz.questions.map(q=>q.category)).size,9);
assert.equal(lesson.culture.image,'assets/lesson-4-cavalry-inspection-original.png');assert.equal(lesson.culture.imagePlacement,'inline-right');assert.ok(lesson.culture.imageAlt);assert.ok(lesson.culture.imageCaption);
assert.equal(lesson.culture.questions.length,4);assert.equal(lesson.culture.sources.length,4);assert.ok(lesson.culture.review.items.length);
assert.ok(fs.statSync(new URL(lesson.culture.image,root)).size>100000);
const migration=fs.readFileSync(new URL('db/migrations/0019_lesson_4_culture_quiz.sql',root),'utf8');assert.deepEqual(JSON.parse(migration.match(/\$json\$([\s\S]*?)\$json\$/)[1]),payload);
assert.doesNotMatch(migration,/DELETE FROM|UPDATE public\.(?:readings|users|activity_events|student_progress|lesson_progress|student_lesson_test_grades)/);
assert.equal(JSON.stringify(payload),JSON.stringify(payload).normalize('NFC'));
console.log('Verified Lesson 4 page 3: original illustration, four reflections, review, sources, and 20 distinct graded questions across nine categories.');

assert.equal(lesson.culture.excerpt.citation,'On Horsemanship 6.13');assert.ok(lesson.culture.excerpt.greek.includes('σὺν ὀργῇ'));assert.ok(lesson.culture.excerpt.translation.includes('anger'));
