import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const lesson=JSON.parse(read('content/lessons/lesson-11.json'));
const migration=read('db/migrations/0032_publish_lesson_11.sql');
const fallback=read('lesson-data.js');
const pkg=JSON.parse(read('package.json'));

assert.equal(lesson.id,'lesson-11');
assert.equal(lesson.title,'The Question at Delphi');
assert.equal(lesson.contentRevision,'lesson-11-delphi-complete-v1');
assert.deepEqual(lesson.pages.map(p=>p.template),['reading','grammar','culture']);
assert.deepEqual(lesson.pages.map(p=>p.slug),['lesson-11-page-1','lesson-11-page-2','lesson-11-page-3']);
assert.equal(lesson.reading.paragraphs.length,8);
assert.equal(lesson.reading.translation.split('\n\n').length,8);
assert.match(lesson.reading.introduction.join(' '),/does not preserve the wording/);
assert.match(lesson.reading.introduction.join(' '),/course adaptations/);
assert.match(lesson.reading.sourceCitation,/Anabasis 3\.1\.5–6/);
const greek=lesson.reading.paragraphs.map(p=>p.greek).join(' ');
for(const snippet of ['βούλεται πρὸς Κῦρον πορεύεσθαι','εἰς Δελφοὺς ἀφικνεῖται','τίσι θεοῖς δεῖ με θύειν καὶ εὔχεσθαι','καλῶς πορεύεσθαι','σῷος οἴκαδε ἀφικνεῖσθαι']) assert(greek.includes(snippet),snippet);
for(const p of lesson.reading.paragraphs){
  assert(p.greek && p.gloss.length>=6);
  for(const gloss of p.gloss) assert(p.greek.includes(gloss.greek),`Gloss not found: ${gloss.greek}`);
}
assert.deepEqual(lesson.grammar.sections.map(s=>s.practiceTopic),['middle-endings','deponents','going-arriving','wanting-infinitives','asking-praying']);
assert(lesson.grammar.sections.every(s=>s.body.length>=3 && s.table.rows.length>=3 && s.checks.length && s.examples.length));
assert.match(lesson.grammar.sections[1].body.join(' '),/not translate a middle ending mechanically/);
assert.match(lesson.grammar.sections[4].body.join(' '),/does not supply the response’s words or the gods’ names/);
assert.deepEqual(lesson.culture.body,[]);
assert.deepEqual(lesson.culture.sections.map(s=>s.title),['A sanctuary shared across Greek cities','Croesus of Lydia: a visitor from beyond Greece']);
assert.match(lesson.culture.sections[0].body.join(' '),/Panhellenic/);
assert.match(lesson.culture.sections[1].body.join(' '),/Croesus/);
assert.match(lesson.culture.sections[1].body.join(' '),/Herodotus/);
assert(lesson.culture.sources.some(s=>s.url.includes('whc.unesco.org/en/list/393')));
assert(lesson.culture.sources.some(s=>s.url.includes('harvard.edu/primary-source/herodotus')));
assert(lesson.culture.banner.sourceUrl.includes('commons.wikimedia.org/wiki/File:Delphi_by_Albert_Tournaire.jpg'));
assert.equal(lesson.culture.banner.display,'full');
assert.match(lesson.culture.banner.caption,/modern imagined reconstruction/);
assert.match(lesson.culture.banner.credit,/public domain/);
const banner=fs.readFileSync(path.join(root,lesson.banner.image));
assert.equal(banner.toString('ascii',1,4),'PNG');
assert.deepEqual([banner.readUInt32BE(16),banner.readUInt32BE(20)],[2172,724]);
const art=fs.readFileSync(path.join(root,lesson.culture.banner.image));
assert.equal(art.subarray(0,2).toString('hex'),'ffd8');
assert(art.length>100000);

const required=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
assert.equal(required.length,17);
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
assert.deepEqual(countBy(a['topic-practice'].questions,'topic'),{'word-study':12,'middle-endings':12,deponents:12,'going-arriving':12,'wanting-infinitives':12,'asking-praying':12});
assert(Object.values(countBy(a['grammar-exercises'].questions,'topic')).every(n=>n>=4));
assert.deepEqual(countBy(a['lesson-quiz'].questions,'category'),{Reading:6,Vocabulary:6,Grammar:12,'Greek World':6});
assert(Object.values(Object.groupBy(a['lesson-quiz'].questions,q=>q.choices.findIndex(c=>c.correct))).every(items=>items.length>=7));
assert.equal(lesson.nextLesson.title,'The Question He Did Not Ask');
assert.equal(lesson.previousLesson.title,'The Letter from Proxenus');

const embedded=migration.match(/patch jsonb := \$json\$([\s\S]*?)\$json\$::jsonb;/);
assert(embedded);
assert.deepEqual(JSON.parse(embedded[1]),lesson);
assert.match(migration,/slug='lesson-11'/);
assert.match(migration,/slug='lesson-11-page-1'/);
assert.match(migration,/slug='lesson-10'/);
assert.match(migration,/o\.content #>> '\{nextLesson,id\}'='lesson-11'/);
assert.match(migration,/lesson_11_delphi/);
assert.match(migration,/old_content->>'contentRevision' = patch->>'contentRevision'/);
assert.match(fallback,/number: 11, title: "The Question at Delphi",.*lesson-11-delphi-banner-v2\.png/);
const fallbackMatch=fallback.match(/\/\/ BEGIN GENERATED LESSON 11\s+LESSONS\["lesson-11"\] = (\{[\s\S]*?\});\s+\/\/ END GENERATED LESSON 11/);
assert(fallbackMatch);
assert.deepEqual(JSON.parse(fallbackMatch[1]),lesson);
assert.match(pkg.scripts['db:migrate'],/0032_publish_lesson_11\.sql/);
assert.equal(pkg.scripts['verify:lesson11'],'node scripts/verify-lesson-11.mjs');
assert.match(read('script.js'),/id: "lesson-11", title: "The Question at Delphi"/);
assert.match(read('lesson.js'),/lesson-culture-banner--full/);
assert.match(read('styles.css'),/\.lesson-culture-banner--full img/);
assert.match(read('db/seeds/0001_minimal_development_seed.sql'),/'lesson-11', 'Lesson 11', 'The Question at Delphi'/);
console.log('Lesson 11 content, sources, assets, activities, migration, fallback, and metadata verified.');
