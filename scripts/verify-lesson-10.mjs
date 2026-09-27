import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const lesson=JSON.parse(read('content/lessons/lesson-10.json'));
const migration=read('db/migrations/0030_publish_lesson_10.sql');
const fallback=read('lesson-data.js');
const pkg=JSON.parse(read('package.json'));

assert.equal(lesson.id,'lesson-10');
assert.equal(lesson.title,'The Letter from Proxenus');
assert.equal(lesson.contentRevision,'lesson-10-proxenus-complete-v1');
assert.deepEqual(lesson.pages.map(p=>p.slug),['lesson-10-page-1','lesson-10-page-2','lesson-10-page-3']);
assert.equal(lesson.reading.paragraphs.length,8);
assert.equal(lesson.reading.translation.split('\n\n').length,8);
assert.match(lesson.reading.introduction[1],/Anabasis 3\.1\.4–5/);
assert.match(lesson.reading.introduction[1],/does not preserve the letter’s wording/);
assert.match(lesson.reading.introduction[1],/adapted dialogue and visual reconstruction/);
const greek=lesson.reading.paragraphs.map(p=>p.greek).join(' ');
for(const snippet of ['ὁ φίλος μου','ἡ σὴ πατρὶς','αὕτη ἡ ὁδὸς','τοῦτο τὸ γράμμα','πρὸς Δελφοὺς']) assert(greek.includes(snippet),snippet);
for(const p of lesson.reading.paragraphs){
  assert(p.greek && p.gloss.length);
  for(const gloss of p.gloss) assert(p.greek.includes(gloss.greek),`Gloss not found in reading: ${gloss.greek}`);
}
assert.deepEqual(lesson.grammar.sections.map(s=>s.practiceTopic),['personal-pronouns','genitive-possession','possessive-adjectives','demonstratives','adjective-placement']);
assert(lesson.grammar.sections.every(s=>s.body.length && s.table.rows.length && s.checks.length && s.examples.length));
assert.match(lesson.grammar.sections[2].body.join(' '),/agree with the thing owned/);
assert.match(lesson.grammar.sections[3].body.join(' '),/outside the article-plus-noun group/);
assert.match(lesson.grammar.sections[4].body.join(' '),/attributive/);
assert.match(lesson.culture.body.join(' '),/Cyrus the Younger/);
assert.match(lesson.culture.body.join(' '),/not show Cyrus, Proxenus, or a Greek mercenary/);
assert(lesson.culture.sources.some(s=>s.url.includes('perseus.tufts.edu')));
assert(lesson.culture.sources.some(s=>s.url.includes('metmuseum.org/art/collection/search/324433')));
assert.match(lesson.culture.banner.credit,/Public Domain/);
const banner=fs.readFileSync(path.join(root,lesson.banner.image));
assert.equal(banner.toString('ascii',1,4),'PNG');
assert(banner.readUInt32BE(16)>1800 && banner.readUInt32BE(20)>700);
const relief=fs.readFileSync(path.join(root,lesson.culture.banner.image));
assert.equal(relief.subarray(0,2).toString('hex'),'ffd8');
assert(relief.length>100000);

const required=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
assert.equal(required.length,19);
const a=lesson.activities;
assert.equal(a['vocab-practice'].questions.length,required.length*2);
assert.equal(a['topic-practice'].questions.length,72);
assert.equal(a['grammar-exercises'].questions.length,24);
assert.equal(new Set(a['grammar-exercises'].questions.map(q=>q.prompt)).size,24);
assert.equal(a['lesson-quiz'].questions.length,30);
for(const key of ['grammar-exercises','lesson-quiz']){
  assert.equal(a[key].threshold,80);
  assert.equal(a[key].required,true);
  assert.equal(a[key].requireAllAnswers,true);
  assert(a[key].revision);
}
const all=[...a['vocab-practice'].questions,...a['topic-practice'].questions,...a['grammar-exercises'].questions,...a['lesson-quiz'].questions];
assert.equal(new Set(all.map(q=>q.id)).size,all.length);
for(const q of all){
  assert(q.prompt,q.id);
  assert.equal(q.choices.length,4,q.id);
  assert.equal(new Set(q.choices.map(c=>c.text)).size,4,q.id);
  assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);
  assert(q.choices.every(c=>c.feedback),q.id);
}
const countBy=(items,key)=>Object.fromEntries(Object.entries(Object.groupBy(items,q=>q[key])).map(([k,v])=>[k,v.length]));
assert.deepEqual(countBy(a['topic-practice'].questions,'topic'),{'word-study':12,'personal-pronouns':12,'genitive-possession':12,'possessive-adjectives':12,demonstratives:12,'adjective-placement':12});
assert(Object.values(countBy(a['grammar-exercises'].questions,'topic')).every(n=>n>=4));
assert.deepEqual(countBy(a['lesson-quiz'].questions,'category'),{Reading:6,Vocabulary:6,Grammar:12,'Greek World':6});
assert(Object.values(Object.groupBy(a['lesson-quiz'].questions,q=>q.choices.findIndex(c=>c.correct))).every(items=>items.length>=6));
assert.equal(lesson.nextLesson.title,'The Question at Delphi');
assert.equal(lesson.previousLesson.title,'What Makes a Good Friend?');

const match=migration.match(/patch jsonb := \$json\$([\s\S]*?)\$json\$::jsonb;/);
assert(match);
assert.deepEqual(JSON.parse(match[1]),lesson);
assert.match(migration,/slug='lesson-10'/);
assert.match(migration,/slug='lesson-9'/);
assert.match(migration,/lesson_10_proxenus/);
assert.match(migration,/old_content->>'contentRevision' = patch->>'contentRevision'/);
assert.match(fallback,/number: 10, title: "The Letter from Proxenus",.*lesson-10-letter-banner\.png/);
const fallbackMatch=fallback.match(/\/\/ BEGIN GENERATED LESSON 10\s+LESSONS\["lesson-10"\] = (\{[\s\S]*?\});\s+\/\/ END GENERATED LESSON 10/);
assert(fallbackMatch);
assert.deepEqual(JSON.parse(fallbackMatch[1]),lesson);
assert.match(pkg.scripts['db:migrate'],/0030_publish_lesson_10\.sql/);
assert.equal(pkg.scripts['verify:lesson10'],'node scripts/verify-lesson-10.mjs');
console.log('Lesson 10 content, source labels, assets, activities, migration, and fallback verified.');
