// Assemble the authored Module IV lessons without changing earlier lesson content.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const read = path => fs.readFileSync(path, 'utf8');
const write = (path, value) => fs.writeFileSync(path, value);
execFileSync(process.execPath, ['scripts/build-module-4-content.mjs'], { stdio: 'inherit' });
const lessons = Array.from({length:12}, (_, i) => JSON.parse(read(`content/lessons/lesson-${i+37}.json`)));
let fallback = read('lesson-data.js');
let outline = read('script.js');
let seed = read('db/seeds/0001_minimal_development_seed.sql');
const sqlString = value => `'${value.replaceAll("'", "''")}'`;
const template = read('db/migrations/0032_publish_lesson_11.sql');
const declarationsAndBody = template.slice(template.indexOf('  lesson_id_value uuid;'), template.indexOf('\n$lesson11$;'));
const migrations = [];
for (const lesson of lessons) {
  const n = lesson.number;
  const metadata = {
    number:n, title:lesson.title, module:lesson.module, moduleTheme:'Justice and the City',
    bannerImage:lesson.banner.image, bannerAlt:lesson.banner.alt, grammarFocus:lesson.scope,
    greekPhrase:lesson.greekTitle, sourceAnchor:lesson.reading.sourceCitation,
    cultureLead:lesson.culture.sections[0].body[0]
  };
  const manifestLine = `    ${JSON.stringify(metadata)},`;
  const manifestPattern = new RegExp(`^    \\{ number: ${n},[^\\n]+`, 'm');
  const normalizedPattern = new RegExp(`^    \\{"number":${n},[^\\n]+`, 'm');
  if (manifestPattern.test(fallback)) fallback = fallback.replace(manifestPattern, manifestLine);
  else if (normalizedPattern.test(fallback)) fallback = fallback.replace(normalizedPattern, manifestLine);
  else throw new Error(`Missing manifest row ${n}`);
  const generated = `  // BEGIN GENERATED LESSON ${n}\n  LESSONS["lesson-${n}"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON ${n}\n\n`;
  const generatedPattern = new RegExp(`  // BEGIN GENERATED LESSON ${n}\\n[\\s\\S]*?  // END GENERATED LESSON ${n}\\n\\n`);
  fallback = generatedPattern.test(fallback) ? fallback.replace(generatedPattern, generated) : fallback.replace('  const ACTIVITY_LABELS = {', generated+'  const ACTIVITY_LABELS = {');
  const outlinePattern = new RegExp(`\\{ id: "lesson-${n}", title: "[^"\\n]+", grammar: "[^"\\n]+" \\}`);
  if (!outlinePattern.test(outline)) throw new Error(`Missing outline ${n}`);
  outline = outline.replace(outlinePattern, `{ id: "lesson-${n}", title: ${JSON.stringify(lesson.title)}, grammar: ${JSON.stringify(lesson.scope)} }`);
  const seedPattern = new RegExp(`\\('module-4', 'lesson-${n}', 'Lesson ${n}', '(?:''|[^'])*', '(?:''|[^'])*', '(?:''|[^'])*', ${n-36}\\)`);
  if (!seedPattern.test(seed)) throw new Error(`Missing seed ${n}`);
  seed = seed.replace(seedPattern, `('module-4', 'lesson-${n}', 'Lesson ${n}', ${sqlString(lesson.title)}, ${sqlString(lesson.scope)}, 'lesson.html?lesson=${n}&page=1', ${n-36})`);
  let body = declarationsAndBody.replaceAll('lesson-11', `lesson-${n}`).replaceAll('lesson_11_delphi', `lesson_${n}_module_4`);
  body = body.replace("UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope'", "UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope',page_url='lesson.html?lesson="+n+"&page=1',is_published=true");
  migrations.push(`DO $module4lesson${n}$\nDECLARE\n  patch jsonb := $json$${JSON.stringify(lesson,null,2)}$json$::jsonb;\n${body}\n$module4lesson${n}$;`);
}
write('lesson-data.js', fallback);
write('script.js', outline);
write('db/seeds/0001_minimal_development_seed.sql', seed);
const firstTitle = sqlString(lessons[0].title);
write('db/migrations/0047_publish_module_4.sql', `-- Publish Lessons 37–48 atomically, with source-labeled readings and aligned assessments.\nBEGIN;\n${migrations.join('\n\n')}\n\nUPDATE public.lesson_content_overrides o\nSET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb(${firstTitle}::text),true),version=o.version+1,updated_at=now()\nWHERE o.content #>> '{nextLesson,id}'='lesson-37'\n  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM ${firstTitle};\nCOMMIT;\n`);
const pkg = JSON.parse(read('package.json'));
pkg.scripts['build:module4'] = 'node scripts/build-module-4.mjs';
pkg.scripts['verify:module4'] = 'node scripts/verify-module-4.mjs';
pkg.scripts['verify:module4:live'] = 'node scripts/verify-module-4-live.mjs';
delete pkg.scripts['verify:module4:browser']; // Rendered checks use the browser-control session.
if (!pkg.scripts['db:migrate'].includes('0047_publish_module_4.sql')) pkg.scripts['db:migrate'] += ' && node db/run-sql.mjs db/migrations/0047_publish_module_4.sql';
write('package.json', JSON.stringify(pkg,null,2)+'\n');
console.log('Module IV JSON, fallback, outline, seed, and atomic publication migration synchronized.');
