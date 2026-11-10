// Rebuild reading fields only: preserve separately maintained vocabulary and artwork.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {readings as iii} from './module3/readings.mjs';
import {readings as iv} from './module4/readings.mjs';
export const changedLessons=[28,29,31,32,34,35,36,37,38,39,40,41,42,43,45];
let fallback=fs.readFileSync('lesson-data.js','utf8');
for(const n of changedLessons){
 const file=`content/lessons/lesson-${n}.json`,l=JSON.parse(fs.readFileSync(file)),r=(n<37?iii:iv)[n];
 l.reading.paragraphs=r.paragraphs.map(({translation,...p})=>p);
 l.reading.translation=r.paragraphs.map(p=>p.translation).join('\n\n')+'\n';
 if(n>=37){const count=r.paragraphs.reduce((sum,p)=>sum+p.greek.split(/\s+/).length,0);l.reading.introduction[0]=l.reading.introduction[0].replace(/\d+ Greek words in \d+ paragraphs/,`${count} Greek words in ${r.paragraphs.length} paragraphs`);}
 for(const p of r.paragraphs)for(const g of p.gloss)assert(p.greek.includes(g.greek),`${n}: ${g.greek}`);
 fs.writeFileSync(file,JSON.stringify(l,null,2)+'\n');
 const pattern=new RegExp(`  // BEGIN GENERATED LESSON ${n}\\n[\\s\\S]*?  // END GENERATED LESSON ${n}\\n\\n`);
 assert(pattern.test(fallback));fallback=fallback.replace(pattern,`  // BEGIN GENERATED LESSON ${n}\n  LESSONS["lesson-${n}"] = ${JSON.stringify(l,null,2)};\n  // END GENERATED LESSON ${n}\n\n`);
}
fs.writeFileSync('lesson-data.js',fallback);
console.log('Synchronized approved reading fields for '+changedLessons.join(', '));
