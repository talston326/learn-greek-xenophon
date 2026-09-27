import assert from 'node:assert/strict';
import fs from 'node:fs';

const read=file=>fs.readFileSync(file,'utf8');
const lesson=JSON.parse(read('content/lessons/lesson-12.json'));
const migration=read('db/migrations/0033_publish_lesson_12.sql');
const fallback=read('lesson-data.js');
assert.equal(lesson.id,'lesson-12');
assert.equal(lesson.title,'The Question He Did Not Ask');
assert.equal(lesson.contentRevision,'lesson-12-socrates-response-v1');
assert.deepEqual(lesson.pages.map(p=>p.template),['reading','grammar','culture']);
assert.deepEqual(lesson.pages.map(p=>p.slug),['lesson-12-page-1','lesson-12-page-2','lesson-12-page-3']);
assert.equal(lesson.reading.paragraphs.length,8);
assert.equal(lesson.reading.translation.split('\n\n').length,8);
assert.match(lesson.reading.introduction.join(' '),/adaptations/);
assert.match(lesson.reading.sourceCitation,/Anabasis 3\.1\.7–8/);
const greek=lesson.reading.paragraphs.map(p=>p.greek).join(' ');
for(const snippet of ['πότερον λῷον εἴη','πορεύεσθαι ἢ μένειν','ὅπως ἂν κάλλιστα πορευθείη','χρὴ ποιεῖν','ἐν Σάρδεσι Πρόξενον καὶ Κῦρον'])assert(greek.includes(snippet),snippet);
for(const p of lesson.reading.paragraphs){
  assert(p.gloss.length>=5);
  for(const g of p.gloss)assert(p.greek.includes(g.greek),`Gloss not found: ${g.greek}`);
}
assert.deepEqual(lesson.grammar.sections.map(s=>s.practiceTopic),['choice','middle','dative','prepositions','module-review']);
assert(lesson.grammar.sections.every(s=>s.body.length>=3&&s.table.rows.length>=3&&s.checks.length&&s.examples.length));
assert.match(lesson.grammar.sections[0].body.join(' '),/πότερον/);
assert.match(lesson.grammar.sections[2].body.join(' '),/dative/);
assert.match(lesson.grammar.sections[3].body.join(' '),/accusative/);
assert.equal(lesson.banner.image,'assets/lesson-12-socrates-banner.png');
assert.equal(lesson.culture.banner.image,'assets/lesson-12-army-forward.png');
for(const file of [lesson.banner.image,lesson.culture.banner.image]){
  const bytes=fs.readFileSync(file);
  assert.equal(bytes.subarray(1,4).toString(),'PNG');
  assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],[2172,724]);
}
const a=lesson.activities;
assert.equal(a['grammar-exercises'].questions.length,20);
assert.equal(a['lesson-quiz'].questions.length,30);
for(const key of ['grammar-exercises','lesson-quiz']){
  assert.equal(a[key].threshold,80);
  assert.equal(a[key].required,true);
  assert.equal(a[key].requireAllAnswers,true);
  assert(a[key].revision);
}
const all=['vocab-practice','topic-practice','grammar-exercises','lesson-quiz'].flatMap(k=>a[k].questions);
assert.equal(new Set(all.map(q=>q.id)).size,all.length);
for(const q of all){
  assert(q.prompt,q.id);
  assert.equal(q.choices.length,4,q.id);
  assert.equal(new Set(q.choices.map(c=>c.text)).size,4,q.id);
  assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);
  assert(q.choices.every(c=>c.feedback),q.id);
}
const quiz=a['lesson-quiz'].questions;
const distribution=Array.from({length:4},(_,i)=>quiz.filter(q=>q.choices[i].correct).length);
assert(distribution.every(n=>n>=7),`Final answer positions: ${distribution}`);
const categories=Object.fromEntries(Object.entries(Object.groupBy(quiz,q=>q.category)).map(([k,v])=>[k,v.length]));
assert.deepEqual(categories,{Reading:6,Vocabulary:6,Grammar:12,'Greek World':6});
const embedded=migration.match(/patch jsonb := \$json\$([\s\S]*?)\$json\$::jsonb;/);
assert(embedded);
assert.deepEqual(JSON.parse(embedded[1]),lesson);
assert.match(migration,/slug='lesson-12'/);
assert.match(migration,/slug='lesson-12-page-1'/);
assert.match(migration,/slug='lesson-11'/);
const fallbackMatch=fallback.match(/\/\/ BEGIN GENERATED LESSON 12\s+LESSONS\["lesson-12"\] = (\{[\s\S]*?\});\s+\/\/ END GENERATED LESSON 12/);
assert(fallbackMatch);
assert.deepEqual(JSON.parse(fallbackMatch[1]),lesson);
assert.match(fallback,/number: 12, title: "The Question He Did Not Ask",.*lesson-12-socrates-banner\.png/);
assert.match(read('script.js'),/id: "lesson-12", title: "The Question He Did Not Ask"/);
assert.match(read('db/seeds/0001_minimal_development_seed.sql'),/'lesson-12', 'Lesson 12', 'The Question He Did Not Ask'/);
const pkg=JSON.parse(read('package.json'));
assert.match(pkg.scripts['db:migrate'],/0033_publish_lesson_12\.sql/);
assert.equal(pkg.scripts['verify:lesson12'],'node scripts/verify-lesson-12.mjs');
console.log(`Lesson 12 verified: ${lesson.reading.paragraphs.length} paragraphs, ${all.length} practice and assessment questions; final answer positions ${distribution.join('/')}.`);
