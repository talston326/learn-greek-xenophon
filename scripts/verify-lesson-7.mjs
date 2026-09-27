import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const lesson=JSON.parse(read('content/lessons/lesson-7.json'));
const migration=read('db/migrations/0026_refine_lesson_7_eleusis.sql');
const fallback=read('lesson-data.js');
const outline=read('script.js');

assert.equal(lesson.title,'The Road to Eleusis');
assert.equal(lesson.contentRevision,'lesson-7-eleusis-visuals-v2');
assert.deepEqual(lesson.pages.map(p=>p.slug),['lesson-7-page-1','lesson-7-page-2','lesson-7-page-3']);
assert.equal(lesson.reading.paragraphs.length,7);
assert.equal(lesson.reading.translation.split('\n\n').length,7);
assert(lesson.reading.paragraphs.every(p=>p.greek && p.gloss.length));
assert.match(lesson.reading.introduction.join(' '),/not attested/);
assert.doesNotMatch(lesson.reading.paragraphs[0].greek,/Δίπυλον/);
assert.doesNotMatch(lesson.culture.body.join(' '),/Dipylon Gate/);
assert.match(lesson.reading.introduction.join(' '),/Dipylon Amphora/);
assert.match(lesson.reading.paragraphs[0].greek,/Ἱερᾶς Πύλης/);
assert.match(lesson.reading.paragraphs[2].greek,/ἐγὼ τῇ θεᾷ δῶρα φέρω/);
assert.match(lesson.reading.paragraphs.at(-1).greek,/πρὸ τῶν πυλῶν/);
assert.equal(lesson.vocabulary.flatMap(g=>g.items).filter(i=>i.status==='required vocabulary').length,17);
assert.equal(lesson.grammar.sections.length,4);
assert(lesson.grammar.sections.every(s=>s.practiceTopic && s.table.rows.length && s.checks.length));
assert.deepEqual(lesson.grammar.sections.map(s=>s.practiceTopic),['present-persons','agreement-review','eta-feminines','alpha-feminines']);
assert.equal(lesson.culture.questions.length,4);
assert(lesson.culture.sources.some(s=>s.url.includes('perseus.tufts.edu')));
assert(lesson.culture.sources.some(s=>s.url.includes('metmuseum.org')));
assert(fs.existsSync(path.join(root,lesson.banner.image)));
assert(fs.existsSync(path.join(root,lesson.culture.banner.image)));
for(const imagePath of [lesson.banner.image,lesson.culture.banner.image]){
  const png=fs.readFileSync(path.join(root,imagePath));
  assert.equal(png.toString('ascii',1,4),'PNG');
  assert.deepEqual([png.readUInt32BE(16),png.readUInt32BE(20)],[2172,724]);
}
assert.notEqual(lesson.banner.image,lesson.culture.banner.image);
assert(fs.existsSync(path.join(root,lesson.culture.plan.image)));
assert.match(lesson.culture.plan.credit,/CC BY-SA 4.0/);
assert.match(lesson.culture.plan.caption,/Roman/);
assert.match(lesson.culture.banner.caption,/Telesterion/);

const a=lesson.activities;
assert.equal(a['topic-practice'].questions.length,60);
assert.equal(a['vocab-practice'].questions.length,34);
assert.equal(a['grammar-exercises'].questions.length,24);
assert.equal(a['lesson-quiz'].questions.length,30);
for(const key of ['grammar-exercises','lesson-quiz']){
  assert.equal(a[key].threshold,80);
  assert.equal(a[key].required,true);
  assert.equal(a[key].requireAllAnswers,true);
  assert(a[key].revision);
}
const all=[...a['topic-practice'].questions,...a['vocab-practice'].questions,...a['grammar-exercises'].questions,...a['lesson-quiz'].questions];
assert.equal(new Set(all.map(q=>q.id)).size,all.length);
for(const q of all){
  assert(q.prompt,q.id);
  assert.equal(q.choices.length,4,q.id);
  assert.equal(new Set(q.choices.map(c=>c.text)).size,4,q.id);
  assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);
  assert(q.choices.every(c=>c.feedback),q.id);
}
const byTopic=Object.groupBy(a['topic-practice'].questions,q=>q.topic);
assert.deepEqual(Object.fromEntries(Object.entries(byTopic).map(([k,v])=>[k,v.length])),{'word-study':12,'present-persons':12,'agreement-review':12,'eta-feminines':12,'alpha-feminines':12});
const exerciseTopics=Object.groupBy(a['grammar-exercises'].questions,q=>q.topic);
assert.deepEqual(Object.fromEntries(Object.entries(exerciseTopics).map(([k,v])=>[k,v.length])),{'word-study':4,'present-persons':6,'agreement-review':4,'eta-feminines':5,'alpha-feminines':5});
const quizCategories=Object.groupBy(a['lesson-quiz'].questions,q=>q.category);
assert.deepEqual(Object.fromEntries(Object.entries(quizCategories).map(([k,v])=>[k,v.length])),{Reading:6,Vocabulary:6,Grammar:12,'Greek World':6});
assert(quizCategories['Greek World'].some(q=>q.prompt.includes('Telesterion')));
const grammarPrompts=quizCategories.Grammar.map(q=>q.prompt).join('\n');
for(const text of ['βλέπω','πομπή','θεά']) assert(grammarPrompts.includes(text),`${text} absent from final grammar quiz`);
const positions=Object.groupBy(a['lesson-quiz'].questions,q=>q.choices.findIndex(c=>c.correct));
assert(Object.values(positions).every(v=>v.length>=6));
const match=migration.match(/patch jsonb := \$json\$([\s\S]*?)\$json\$::jsonb;/);
assert(match);
assert.deepEqual(JSON.parse(match[1]),lesson);
assert(migration.includes("old_version IS DISTINCT FROM 2"));
assert(migration.includes("jsonb_set(o.content,'{nextLesson,title}'"));
assert(fallback.includes(`LESSONS["lesson-7"] = ${JSON.stringify(lesson,null,2)};`));
assert(outline.includes('id: "lesson-7", title: "The Road to Eleusis"'));
console.log('Lesson 7 content, grammar coverage, assessments, illustration, fallback, and migration verified.');
