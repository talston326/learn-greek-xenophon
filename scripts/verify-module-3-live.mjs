import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const base=process.env.MODULE3_URL||'https://learn-greek-xenophon.netlify.app';
const report={base,lessons:[]};
for(let n=25;n<=36;n++){
  const expected=JSON.parse(fs.readFileSync(`content/lessons/lesson-${n}.json`));
  const response=await fetch(`${base}/api/lesson-content?slug=lesson-${n}`);
  assert.equal(response.status,200);const data=await response.json();
  assert.equal(data.source,'canonical_database');
  assert.equal(data.content.contentRevision,expected.contentRevision);
  assert.equal(data.content.title,expected.title);
  for(const key of ['banner','reading','wordStudy','grammar','culture','enrichment','activities','vocabulary'])assert.deepEqual(data.content[key],expected[key],`Live lesson ${n} ${key}`);
  const image=await fetch(`${base}/${expected.banner.image}`);assert.equal(image.status,200);
  const hash=crypto.createHash('sha256').update(Buffer.from(await image.arrayBuffer())).digest('hex');
  assert.equal(hash,crypto.createHash('sha256').update(fs.readFileSync(expected.banner.image)).digest('hex'));
  report.lessons.push({number:n,revision:expected.contentRevision,source:data.source,version:data.legacyOverrideVersion,readingParagraphs:expected.reading.paragraphs.length,finalQuestions:expected.activities['lesson-quiz'].questions.length,bannerVerified:true});
  console.log(`Live Lesson ${n}: canonical content and banner verified.`);
}
report.passed=true;
fs.writeFileSync(process.env.MODULE3_LIVE_REPORT||'/private/tmp/module3-live-verification.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
