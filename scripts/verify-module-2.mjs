import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const read = path => fs.readFileSync(path,'utf8');
const lessons = Array.from({length:12},(_,i)=>JSON.parse(read(`content/lessons/lesson-${i+13}.json`)));
const fallback = read('lesson-data.js');
const migration = read('db/migrations/0045_publish_module_2.sql');
const outline = read('script.js');
const curriculum = read('docs/curriculum/curriculum-narrative.md');
const context = {window:{}};
vm.runInNewContext(fallback,context);
const questionIds = new Set();
const report = [];
for(const lesson of lessons){
  const n=lesson.number, label=`Lesson ${n}`;
  assert.equal(lesson.id,`lesson-${n}`);
  assert.equal(lesson.contentRevision,`lesson-${n}-module-2-v${n===13?2:1}`);
  assert(curriculum.includes(`Lesson ${n} — ${lesson.title}`),`${label}: curriculum title`);
  assert(outline.includes(`id: "lesson-${n}", title: ${JSON.stringify(lesson.title)}`),`${label}: outline`);
  assert.equal(lesson.pages.length,3,label);
  assert.deepEqual(lesson.pages.map(p=>p.template),['reading','grammar','culture']);
  const paragraphs=lesson.reading.paragraphs;
  assert(paragraphs.length>=6&&paragraphs.length<=10,`${label}: reading length`);
  assert.equal(lesson.reading.translation.split(/\n\s*\n/).length,paragraphs.length,`${label}: aligned translation`);
  assert.match(lesson.reading.introduction.join(' '),/adapt/i,`${label}: adaptation label`);
  assert.match(lesson.reading.sourceCitation,/https:\/\//,`${label}: source`);
  assert(!/will be added|placeholder reading/i.test(JSON.stringify(lesson)),`${label}: placeholder`);
  for(const [i,p]of paragraphs.entries()){
    assert(p.greek.length>=30,`${label}: paragraph ${i+1}`);
    assert(p.gloss.length>=3,`${label}: paragraph glosses ${i+1}`);
    for(const g of p.gloss) assert(p.greek.normalize('NFC').includes(g.greek.normalize('NFC')),`${label} gloss '${g.greek}' absent`);
  }
  const vocabulary=lesson.vocabulary.flatMap(g=>g.items);
  const required=vocabulary.filter(v=>v.status==='required vocabulary');
  assert(vocabulary.length>=16,`${label}: vocabulary`);
  assert(vocabulary.every(v=>v.greek&&v.english&&v.dictionaryForm&&v.lemma),`${label}: dictionary entries`);
  assert(lesson.wordStudy.blocks.length,`${label}: word study`);
  const sections=lesson.grammar.sections;
  assert(sections.length>=3,`${label}: grammar sections`);
  assert.equal(new Set(sections.map(s=>s.practiceTopic)).size,sections.length,`${label}: unique topics`);
  for(const s of sections){
    assert(s.body.length>=2&&s.examples.length&&s.checks.length&&s.table?.rows.length>=2,`${label}: developed grammar ${s.title}`);
    assert(lesson.activities['topic-practice'].questions.filter(q=>q.topic===s.practiceTopic).length>=6,`${label}: practice ${s.practiceTopic}`);
    assert(lesson.activities['grammar-exercises'].questions.some(q=>q.topic===s.practiceTopic),`${label}: assessed ${s.practiceTopic}`);
  }
  assert(lesson.activities['topic-practice'].questions.some(q=>q.topic==='word-study'),`${label}: word-study practice`);
  assert(lesson.culture.sections.length>=3&&lesson.culture.sources.length>=1,`${label}: culture`);
  assert(lesson.culture.questions.length>=3&&lesson.culture.review.items.length>=3,`${label}: reflection and review`);
  assert(lesson.activities['vocab-practice'].questions.length>=required.length*2,`${label}: vocabulary practice`);
  assert(lesson.activities['grammar-exercises'].questions.length>=24,`${label}: required exercises`);
  assert.equal(lesson.activities['lesson-quiz'].questions.length,30,`${label}: final quiz`);
  for(const key of ['grammar-exercises','lesson-quiz']){
    const a=lesson.activities[key];
    assert.equal(a.threshold,80);
    assert.equal(a.required,true);
    assert.equal(a.requireAllAnswers,true);
    assert(a.revision,`${label}: revision`);
  }
  assert.deepEqual(new Set(lesson.activities['lesson-quiz'].questions.map(q=>q.category)),new Set(['Reading','Vocabulary','Grammar','Greek World']),`${label}: quiz coverage`);
  let count=0;
  for(const [key,a]of Object.entries(lesson.activities))for(const q of a.questions||[]){
    assert(!questionIds.has(q.id),`Duplicate question ${q.id}`); questionIds.add(q.id);count++;
    assert(q.prompt&&q.type==='multiple-choice',`${label}: question ${q.id}`);
    assert.equal(q.choices.length,4,q.id);
    assert.equal(new Set(q.choices.map(c=>c.text.normalize('NFC'))).size,4,`Duplicate choices ${q.id}`);
    assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);
    assert(q.choices.every(c=>c.feedback),q.id);
  }
  const positions=Array.from({length:4},(_,i)=>lesson.activities['lesson-quiz'].questions.filter(q=>q.choices[i].correct).length);
  assert(positions.every(p=>p>=5),`${label}: answer positions ${positions}`);
  const bytes=fs.readFileSync(lesson.banner.image);
  assert.equal(bytes.subarray(1,4).toString(),'PNG',`${label}: banner`);
  const width=bytes.readUInt32BE(16),height=bytes.readUInt32BE(20);
  assert(width/height>=2.7&&width/height<=3.3,`${label}: wide banner`);
  const patch=migration.match(new RegExp(`DO \\$module2lesson${n}\\$\\nDECLARE\\n  patch jsonb := \\$json\\$([\\s\\S]*?)\\$json\\$::jsonb;`));
  assert(patch,`${label}: migration`);
  assert.deepEqual(JSON.parse(patch[1]),lesson,`${label}: SQL synchronization`);
  const fallbackLesson=context.window.xenophonLessonData.lessons[lesson.id];
  if(fallbackLesson)assert.deepEqual(JSON.parse(JSON.stringify(fallbackLesson)),lesson,`${label}: browser synchronization`);
  else{
    const match=fallback.match(new RegExp(`// BEGIN GENERATED LESSON ${n}\\s+LESSONS\\["lesson-${n}"\\] = (\\{[\\s\\S]*?\\});\\s+// END GENERATED LESSON ${n}`));
    assert(match,`${label}: fallback`);assert.deepEqual(JSON.parse(match[1]),lesson);
  }
  if(n>13)assert.equal(lesson.previousLesson.id,`lesson-${n-1}`);
  if(n<24)assert.equal(lesson.nextLesson.id,`lesson-${n+1}`);
  report.push({number:n,title:lesson.title,paragraphs:paragraphs.length,vocabulary:vocabulary.length,grammarTopics:sections.length,questions:count,quizPositions:positions,banner:[width,height]});
}
// Narrative handoffs and the terminal lesson must keep their intended scope.
assert.equal(lessons[0].previousLesson.id,'lesson-12');
assert.equal(lessons.at(-1).nextLesson.id,'lesson-25');
assert.match(JSON.stringify(lessons[7]),/403/);
assert.match(JSON.stringify(lessons[10]),/one of|several/i);
assert.match(JSON.stringify(lessons[11]),/Lycius|Λύκιος/);
console.log(JSON.stringify({verified:true,lessons:report,totalQuestions:questionIds.size},null,2));
