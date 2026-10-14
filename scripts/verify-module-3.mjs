import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const sandbox={window:{},console};vm.createContext(sandbox);vm.runInContext(fs.readFileSync('lesson-data.js','utf8'),sandbox);
let total=0;
for(let n=25;n<=36;n++){
 const l=JSON.parse(fs.readFileSync(`content/lessons/lesson-${n}.json`));
 assert.equal(l.contentRevision,`lesson-${n}-module-3-v1`);assert.equal(l.pages.length,3);assert.equal(l.reading.paragraphs.length,6);
 assert.equal(l.vocabulary.flatMap(g=>g.items).length,20);assert.equal(l.grammar.sections.length,4);assert.equal(l.culture.sections.length,4);
 assert.match(l.culture.sections[0].title,/Meet/);assert(l.culture.sources.length);assert(fs.statSync(l.banner.image).size>10000);
 for(const p of l.reading.paragraphs){assert(p.gloss.length>=5);for(const g of p.gloss)assert(p.greek.includes(g.greek),`${n}: gloss ${g.greek}`);}
 for(const s of l.grammar.sections){assert(s.body.length>=2);assert(s.table.rows.length>=4);assert.equal(l.activities['topic-practice'].questions.filter(q=>q.topic===s.id).length,6);}
 for(const key of ['grammar-exercises','lesson-quiz']){const a=l.activities[key];assert.equal(a.threshold,80);assert(a.required&&a.requireAllAnswers);assert.equal(a.questions.length,key==='lesson-quiz'?30:24);}
 for(const [key,a] of Object.entries(l.activities))if(a.questions){total+=a.questions.length;assert.equal(new Set(a.questions.map(q=>q.prompt)).size,a.questions.length);const positions=[0,0,0,0];for(const q of a.questions){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices.map(x=>x.text.trim())).size,4);assert.equal(q.choices.filter(x=>x.correct).length,1);positions[q.choices.findIndex(x=>x.correct)]++;}assert(Math.max(...positions)-Math.min(...positions)<=1);}
 for(const cat of ['Reading','Vocabulary','Greek World'])assert.equal(l.activities['lesson-quiz'].questions.filter(q=>q.category===cat).length,6);assert.equal(l.activities['lesson-quiz'].questions.filter(q=>q.category==='Grammar').length,12);
 assert.equal(l.previousLesson.id,`lesson-${n-1}`);assert.equal(l.nextLesson.id,`lesson-${n+1}`);
 const fallback=sandbox.window.xenophonLessonData.getLesson(l.id);assert(fallback);assert.deepEqual(JSON.parse(JSON.stringify(fallback)),l);
 console.log(`Lesson ${n}: source, gloss, grammar, culture, activity, asset and navigation checks passed.`);
}
console.log(`Module III verified: 12 lessons, 72 reading paragraphs, 240 vocabulary entries, 48 grammar sections, ${total} assessment-bank questions.`);
