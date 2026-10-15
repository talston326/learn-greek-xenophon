import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import crypto from 'node:crypto';
const cultureHashes=new Set();
const sandbox={window:{},console};vm.createContext(sandbox);vm.runInContext(fs.readFileSync('lesson-data.js','utf8'),sandbox);
let total=0;
for(let n=37;n<=48;n++){
 const l=JSON.parse(fs.readFileSync(`content/lessons/lesson-${n}.json`));
 assert.equal(l.contentRevision,`lesson-${n}-module-4-v1`);assert.equal(l.pages.length,3);assert(l.reading.paragraphs.length>=5); const words=l.reading.paragraphs.reduce((sum,p)=>sum+p.greek.split(/\s+/).length,0); assert(words>=(n<=40?250:n<=44?300:350)); assert(words<=450);
 assert.equal(l.vocabulary.flatMap(g=>g.items).length,20);assert(l.grammar.sections.length>=4);assert(l.culture.sections.length>=4);
 assert.match(l.culture.sections[0].title,/Meet/);assert(l.culture.sources.length);assert(fs.statSync(l.banner.image).size>10000);
 assert.notEqual(l.culture.banner.image,l.banner.image);
 assert(fs.statSync(l.culture.banner.image).size>10000);
 const cultureHash=crypto.createHash('sha256').update(fs.readFileSync(l.culture.banner.image)).digest('hex');
 assert(!cultureHashes.has(cultureHash));cultureHashes.add(cultureHash);
 assert.notEqual(cultureHash,crypto.createHash('sha256').update(fs.readFileSync(l.banner.image)).digest('hex'));
 const intro=l.culture.sections[0];assert(intro.body.join(' ').split(/\s+/).length>=250);
 assert.equal(intro.links.length,2);assert.match(intro.links[0].url,/gutenberg.org/);assert.match(intro.links[1].url,/en.wikipedia.org/);
 for(const p of l.reading.paragraphs){assert(p.gloss.length>=5);for(const g of p.gloss)assert(p.greek.includes(g.greek),`${n}: gloss ${g.greek}`);}
 for(const s of l.grammar.sections){assert(s.body.length>=2);assert(s.table.rows.length>=4);assert.equal(l.activities['topic-practice'].questions.filter(q=>q.topic===s.id).length,6);}
 for(const key of ['grammar-exercises','lesson-quiz']){const a=l.activities[key];assert.equal(a.threshold,80);assert(a.required&&a.requireAllAnswers);assert.equal(a.questions.length,key==='lesson-quiz'?(n===48?49:30):l.grammar.sections.length*6);}
 for(const [key,a] of Object.entries(l.activities))if(a.questions){total+=a.questions.length;assert.equal(new Set(a.questions.map(q=>q.prompt)).size,a.questions.length);const positions=[0,0,0,0];for(const q of a.questions){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices.map(x=>x.text.trim())).size,4);assert.equal(q.choices.filter(x=>x.correct).length,1);positions[q.choices.findIndex(x=>x.correct)]++;}assert(Math.max(...positions)-Math.min(...positions)<=1);}
 for(const cat of ['Reading','Vocabulary','Greek World'])assert.equal(l.activities['lesson-quiz'].questions.filter(q=>q.category===cat).length,6);assert.equal(l.activities['lesson-quiz'].questions.filter(q=>q.category==='Grammar').length,12);
 assert.equal(l.previousLesson.id,`lesson-${n-1}`);if(n<48)assert.equal(l.nextLesson.id,`lesson-${n+1}`);else{assert.equal(l.nextLesson.id,'');assert.equal(l.nextLesson.fallbackUrl,'lessons.html');assert(l.culture.sections.some(s=>s.title.includes('unseen')));}
 const fallback=sandbox.window.xenophonLessonData.getLesson(l.id);assert(fallback);assert.deepEqual(JSON.parse(JSON.stringify(fallback)),l);
 console.log(`Lesson ${n}: source, gloss, grammar, culture, activity, asset and navigation checks passed.`);
}
console.log(`Module IV verified: 12 lessons, 240 vocabulary entries, 53 grammar sections, ${total} assessment-bank questions.`);

const l47=JSON.parse(fs.readFileSync('content/lessons/lesson-47.json'));assert(fs.statSync(l47.culture.sections.find(s=>s.image).image).size>10000);assert.match(JSON.stringify(l47.culture),/Phaedo/);assert.match(JSON.stringify(l47.culture),/Hermogenes/);
