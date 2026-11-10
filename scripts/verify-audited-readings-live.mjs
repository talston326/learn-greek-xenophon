import fs from 'node:fs';
import assert from 'node:assert/strict';
const base=process.env.AUDIT_URL||'https://learn-greek-xenophon.netlify.app';
const before=process.env.AUDIT_BASELINE?JSON.parse(fs.readFileSync(process.env.AUDIT_BASELINE)):null;
const report={base,checkedAt:new Date().toISOString(),lessons:[]};
for(let n=25;n<=48;n++){
 const expected=JSON.parse(fs.readFileSync(`content/lessons/lesson-${n}.json`));
 const response=await fetch(`${base}/api/lesson-content?slug=lesson-${n}`);
 assert.equal(response.status,200);const live=await response.json();assert.equal(live.source,'canonical_database');
 assert.deepEqual(live.content.reading,expected.reading,`Lesson ${n}: complete Greek, English translation, glosses and reading metadata`);
 if(before){const original=before.find(x=>x.slug===`lesson-${n}`);assert(original);const {reading:a,...restA}=original.content;const {reading:b,...restB}=live.content;assert.deepEqual(restB,restA,`Lesson ${n}: unrelated content changed`);}
 report.lessons.push({number:n,source:live.source,paragraphs:live.content.reading.paragraphs.length,glosses:live.content.reading.paragraphs.reduce((t,p)=>t+p.gloss.length,0),readingMatches:true,unrelatedContentUnchanged:before?true:undefined});
 console.log(`Lesson ${n}: Greek, English, glosses verified${before?'; unrelated content unchanged':''}.`);
}
report.passed=true;if(process.env.AUDIT_REPORT)fs.writeFileSync(process.env.AUDIT_REPORT,JSON.stringify(report,null,2)+'\n');
console.log('All 24 Module III/IV production readings verified.');
