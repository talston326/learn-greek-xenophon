import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const lesson=JSON.parse(read('content/lessons/lesson-9.json'));
const migration=read('db/migrations/0029_publish_lesson_9.sql');
const fallback=read('lesson-data.js');
const pkg=JSON.parse(read('package.json'));

assert.equal(lesson.id,'lesson-9');
assert.equal(lesson.title,'What Makes a Good Friend?');
assert.equal(lesson.contentRevision,'lesson-9-friendship-complete-v1');
assert.deepEqual(lesson.pages.map(p=>p.slug),['lesson-9-page-1','lesson-9-page-2','lesson-9-page-3']);
assert.equal(lesson.reading.paragraphs.length,8);
assert.equal(lesson.reading.translation.split('\n\n').length,8);
assert.match(lesson.reading.introduction[1],/No ancient source records this joint discussion with Plato and Xenophon/);
assert.match(lesson.reading.introduction[1],/source-informed fictional reconstruction/);
assert.match(lesson.reading.paragraphs.map(p=>p.greek).join(' '),/ὁ Πλάτων.*ὁ Ἀντισθένης.*ὁ Κριτόβουλος.*ὁ Ξενοφῶν/);
for(const p of lesson.reading.paragraphs){
  assert(p.greek && p.gloss.length);
  for(const gloss of p.gloss) assert(p.greek.includes(gloss.greek),`Gloss not found in reading: ${gloss.greek}`);
}
assert.match(lesson.reading.paragraphs[6].greek,/αὐτοὶ ἀγαθοὶ φίλοι ἐσμέν/);
assert.deepEqual(lesson.grammar.sections.map(s=>s.practiceTopic),['alpha-contract','contract-dialogue','contract-accent','elision','article-clause']);
assert(lesson.grammar.sections.every(s=>s.body.length && s.table.rows.length && s.checks.length && s.examples.length));
assert.deepEqual(lesson.grammar.sections[0].table.rows.map(row=>row[1]),['τιμῶ','τιμᾷς','τιμᾷ','τιμῶμεν','τιμᾶτε','τιμῶσι(ν)']);
assert.match(lesson.grammar.sections[3].body.join(' '),/Elision is not the same as verb contraction/);
assert.equal(lesson.culture.title,'The Symposium: Conversation after Dinner');
assert.match(lesson.culture.body.join(' '),/Paestum.*southern Italy.*earlier.*funerary painting/);
assert.match(lesson.culture.body.join(' '),/Enslaved people served guests/);
assert.equal(lesson.culture.questions.length,4);
assert(lesson.culture.sources.some(s=>s.url.includes('metmuseum.org')));
assert(lesson.culture.sources.some(s=>s.url.includes('museopaestum.cultura.gov.it')));
assert(lesson.culture.sources.some(s=>s.url.includes('commons.wikimedia.org')));
assert.match(lesson.culture.banner.credit,/Carole Raddato, CC BY-SA 2.0/);
const banner=fs.readFileSync(path.join(root,lesson.banner.image));
assert.equal(banner.toString('ascii',1,4),'PNG');
assert(banner.readUInt32BE(16)>2000 && banner.readUInt32BE(20)>700);
const fresco=fs.readFileSync(path.join(root,lesson.culture.banner.image));
assert.equal(fresco.subarray(0,2).toString('hex'),'ffd8');
assert(fresco.length>100000);

const required=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
assert.equal(required.length,19);
const a=lesson.activities;
assert.equal(a['vocab-practice'].questions.length,required.length*2);
assert.equal(a['topic-practice'].questions.length,72);
assert.equal(a['grammar-exercises'].questions.length,24);
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
assert.deepEqual(countBy(a['topic-practice'].questions,'topic'),{'word-study':12,'alpha-contract':12,'contract-dialogue':12,'contract-accent':12,elision:12,'article-clause':12});
assert(Object.values(countBy(a['grammar-exercises'].questions,'topic')).every(n=>n===4));
assert.deepEqual(countBy(a['lesson-quiz'].questions,'category'),{Reading:6,Vocabulary:6,Grammar:12,'Greek World':6});
assert(Object.values(Object.groupBy(a['lesson-quiz'].questions,q=>q.choices.findIndex(c=>c.correct))).every(items=>items.length>=6));
assert.equal(lesson.nextLesson.title,'The Letter from Proxenus');
assert.equal(lesson.previousLesson.title,'A Household Finds a Way');

const match=migration.match(/patch jsonb := \$json\$([\s\S]*?)\$json\$::jsonb;/);
assert(match);
assert.deepEqual(JSON.parse(match[1]),lesson);
assert.match(migration,/slug='lesson-9'/);
assert.match(migration,/slug='lesson-8'/);
assert.match(migration,/lesson_9_friendship/);
assert.match(migration,/old_content->>'contentRevision' = patch->>'contentRevision'/);
assert.match(migration,/WHERE o\.lesson_id=\(SELECT id FROM public\.lessons WHERE slug='lesson-8'\)/);
assert.match(fallback,/number: 9, title: "What Makes a Good Friend\?",.*lesson-9-symposium-banner\.png/);
const fallbackMatch=fallback.match(/\/\/ BEGIN GENERATED LESSON 9\s+LESSONS\["lesson-9"\] = (\{[\s\S]*?\});\s+\/\/ END GENERATED LESSON 9/);
assert(fallbackMatch);
assert.deepEqual(JSON.parse(fallbackMatch[1]),lesson);
assert.match(pkg.scripts['db:migrate'],/0029_publish_lesson_9\.sql/);
assert.equal(pkg.scripts['verify:lesson9'],'node scripts/verify-lesson-9.mjs');
console.log('Lesson 9 content, source labels, assets, activities, migration, and fallback verified.');
