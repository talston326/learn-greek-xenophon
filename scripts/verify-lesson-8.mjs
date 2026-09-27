import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const lesson=JSON.parse(read('content/lessons/lesson-8.json'));
const migration=read('db/migrations/0027_publish_lesson_8.sql');
const historyMigration=read('db/migrations/0028_lesson_8_historical_context.sql');
const fallback=read('lesson-data.js');
const outline=read('script.js');
const seed=read('db/seeds/0001_minimal_development_seed.sql');
const packageJson=JSON.parse(read('package.json'));

assert.equal(lesson.id,'lesson-8');
assert.equal(lesson.title,'A Household Finds a Way');
assert.equal(lesson.contentRevision,'lesson-8-household-history-v2');
assert.deepEqual(lesson.pages.map(p=>p.slug),['lesson-8-page-1','lesson-8-page-2','lesson-8-page-3']);
assert.equal(lesson.reading.paragraphs.length,8);
assert.equal(lesson.reading.translation.split('\n\n').length,8);
assert(lesson.reading.paragraphs.every(p=>p.greek && p.gloss.length));
for(const p of lesson.reading.paragraphs) for(const g of p.gloss){
  for(const part of g.greek.split('…').map(s=>s.trim()).filter(Boolean)) assert(p.greek.includes(part),`Gloss not found: ${part}`);
}
assert.match(lesson.reading.introduction.join(' '),/time has passed|Time has passed/);
assert.match(lesson.reading.introduction[0],/Peloponnesian War.*plague.*Thirty Tyrants.*Piraeus/);
assert.match(lesson.reading.introduction.join(' '),/reconstructions/);
assert.match(lesson.reading.notesMarkdown,/does not date this conversation precisely/);
assert.match(lesson.reading.paragraphs[3].greek,/ἀδελφιδῆ/);
assert.doesNotMatch(lesson.reading.paragraphs[3].greek,/ἀνεψιά/);
assert.match(lesson.reading.paragraphs[4].greek,/αὐταὶ διαιροῦσιν/);
assert.match(lesson.reading.paragraphs[7].greek,/σὺ δὲ τί ποιεῖς/);

const required=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
assert.equal(required.length,20);
assert.deepEqual(lesson.grammar.sections.map(s=>s.practiceTopic),['masculine-first','feminine-second','adjective-agreement','irregular-adjectives','adverbs']);
assert(lesson.grammar.sections.every(s=>s.body.length && s.table.rows.length && s.checks.length));
assert(lesson.grammar.sections[0].table.rows.some(row=>row.includes('τοῦ νεανίου')));
assert(lesson.grammar.sections[1].table.rows.some(row=>row.includes('τῇ ὁδῷ')));
assert.match(lesson.grammar.sections[4].body.join(' '),/adverb does not change/);
assert.equal(lesson.culture.title,'Textile Work and Household Survival');
assert.equal(lesson.culture.body.length,5);
assert.equal(lesson.culture.sections.length,1);
assert.equal(lesson.culture.sections[0].title,'War, Plague, and the Return of Democracy');
assert.equal(lesson.culture.sections[0].body.length,4);
assert.match(lesson.culture.sections[0].body.join(' '),/430 BCE.*404 BCE.*403 BCE/);
assert.match(lesson.culture.sections[0].body.join(' '),/does not say that Aristarchus himself fled/);
assert.equal(lesson.culture.questions.length,4);
assert(lesson.culture.sources.some(s=>s.url.includes('perseus.tufts.edu')));
assert(lesson.culture.sources.some(s=>s.url.includes('metmuseum.org/art/collection/search/253348')));
for(const imagePath of [lesson.banner.image,lesson.culture.banner.image]){
  const png=fs.readFileSync(path.join(root,imagePath));
  assert.equal(png.toString('ascii',1,4),'PNG');
  assert(png.readUInt32BE(16)>=2000);
  assert(png.readUInt32BE(20)>=700);
}
assert.notEqual(lesson.banner.image,lesson.culture.banner.image);

const a=lesson.activities;
assert.equal(a['topic-practice'].questions.length,72);
assert.equal(a['vocab-practice'].questions.length,40);
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
assert(Object.values(byTopic).every(items=>items.length===12));
const byExerciseTopic=Object.groupBy(a['grammar-exercises'].questions,q=>q.topic);
assert(Object.values(byExerciseTopic).every(items=>items.length===4));
const quizCategories=Object.groupBy(a['lesson-quiz'].questions,q=>q.category);
assert.deepEqual(Object.fromEntries(Object.entries(quizCategories).map(([k,v])=>[k,v.length])),{Reading:6,Vocabulary:6,Grammar:12,'Greek World':6});
const positions=Object.groupBy(a['lesson-quiz'].questions,q=>q.choices.findIndex(c=>c.correct));
assert(Object.values(positions).every(items=>items.length>=6));
assert.equal(lesson.nextLesson.title,'What Makes a Good Friend?');
assert.equal(lesson.previousLesson.title,'The Road to Eleusis');

const match=migration.match(/patch jsonb := \$json\$([\s\S]*?)\$json\$::jsonb;/);
assert(match);
const initialLesson=JSON.parse(match[1]);
assert.equal(initialLesson.contentRevision,'lesson-8-household-complete-v1');
assert.deepEqual(initialLesson.culture.body,lesson.culture.body);
assert.equal(initialLesson.culture.title,lesson.culture.title);
assert.equal(initialLesson.culture.sections,undefined);
const sectionsMatch=historyMigration.match(/new_sections jsonb := \$sections\$([\s\S]*?)\$sections\$::jsonb;/);
const sourcesMatch=historyMigration.match(/new_sources jsonb := \$sources\$([\s\S]*?)\$sources\$::jsonb;/);
assert(sectionsMatch && sourcesMatch);
assert.deepEqual(JSON.parse(sectionsMatch[1]),lesson.culture.sections);
assert.deepEqual(JSON.parse(sourcesMatch[1]),lesson.culture.sources.slice(0,3));
assert(historyMigration.includes(lesson.reading.introduction[0]));
assert(historyMigration.includes(initialLesson.reading.introduction[0]));
assert.doesNotMatch(historyMigration,/^\+/m);
assert.match(historyMigration,/jsonb_set\(current_content, '\{reading,introduction,0\}'/);
assert.match(historyMigration,/lesson-8-household-history-v2/);
assert.doesNotMatch(migration,/^\+/m);
assert.match(migration,/UPDATE public\.lesson_content_overrides SET content=patch,version=version\+1/);
assert.match(migration,/ARRAY\['reading','wordStudy','grammar','culture','enrichment','activities'\]/);
assert.match(migration,/lesson-7/);
assert(fallback.includes(`LESSONS["lesson-8"] = ${JSON.stringify(lesson,null,2)};`));
assert(fallback.includes('{ number: 8, title: "A Household Finds a Way"'));
assert(outline.includes('id: "lesson-8", title: "A Household Finds a Way"'));
assert(seed.includes("'lesson-8', 'Lesson 8', 'A Household Finds a Way'"));
assert(packageJson.scripts['db:migrate'].includes('0027_publish_lesson_8.sql'));
assert(packageJson.scripts['db:migrate'].includes('0028_lesson_8_historical_context.sql'));
console.log('Lesson 8 reading, source labels, grammar, assessments, images, navigation, fallback, seed, and migration verified.');
