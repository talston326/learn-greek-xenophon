// QA uses a temporary branch. Connection secrets stay in memory.
import fs from 'node:fs';import path from 'node:path';import pg from 'pg';import dotenv from 'dotenv';import {spawnSync} from 'node:child_process';
const mode=process.argv[2]||'audit';
const env=dotenv.parse(fs.readFileSync(process.env.COURSE_ENV_PATH || path.resolve('.env')));
const url=new URL(env.NETLIFY_DATABASE_URL||env.DATABASE_URL);
if(mode==='branch'){if(!process.env.MODULE3_QA_HOST)throw Error('Set MODULE3_QA_HOST to the temporary branch host.');url.hostname=process.env.MODULE3_QA_HOST;}
url.hostname=url.hostname.replace('-pooler.','.');
if(!['branch','audit','publish'].includes(mode))throw Error('Unknown mode');
const client=new pg.Client({connectionString:url.toString()});await client.connect();
try{
 const tables=(await client.query("SELECT tablename FROM pg_tables WHERE schemaname='public' ORDER BY tablename")).rows.map(r=>r.tablename);
 const report={mode,tables,lessons:(await client.query("SELECT l.slug,l.title,o.version,o.content->>'contentRevision' AS revision FROM lessons l LEFT JOIN lesson_content_overrides o ON o.lesson_id=l.id ORDER BY l.slug")).rows};
 fs.mkdirSync('/private/tmp/module3-release',{recursive:true});fs.writeFileSync(`/private/tmp/module3-release/${mode}-before.json`,JSON.stringify(report,null,2));
 console.log(JSON.stringify({mode,tables:tables.length,features:['user_reading_translations','translation_checks','course_feedback','course_site_settings'].map(t=>({table:t,exists:tables.includes(t)})),module3:report.lessons.filter(l=>/^lesson-(2[5-9]|3[0-6])$/.test(l.slug))}));
 if(mode==='audit'){
  const l1=(await client.query("SELECT content->'activities' AS a FROM lesson_content_overrides o JOIN lessons l ON l.id=o.lesson_id WHERE l.slug='lesson-1'")).rows[0].a;console.log(JSON.stringify({lesson1:Object.fromEntries(Object.entries(l1).map(([k,v])=>[k,{revision:v.revision,questions:v.questions?.length}]))}));
 }else{
  const files=[];
  if(!tables.includes('user_reading_translations'))files.push('0039_reading_translations.sql','0040_all_lesson_reading_translations.sql');
  if(!tables.includes('translation_checks'))files.push('0041_lesson_1_translation_checks.sql');
  if(!tables.includes('course_feedback'))files.push('0042_course_feedback.sql');
  if(!tables.includes('course_site_settings'))files.push('0044_administrator_workspace.sql');
  files.push('0043_lesson_1_complete_exercises.sql','0046_publish_module_3.sql');
  for(const f of files){const sql=fs.readFileSync(`db/migrations/${f}`,'utf8');await client.query(sql);console.log(`Applied ${f} on ${mode}.`);}
  const expected=Array.from({length:12},(_,i)=>JSON.parse(fs.readFileSync(`content/lessons/lesson-${i+25}.json`)));
  for(const l of expected){const a=(await client.query('SELECT o.content FROM lesson_content_overrides o JOIN lessons l ON l.id=o.lesson_id WHERE l.slug=$1',[l.id])).rows[0].content;if(JSON.stringify(a)!==JSON.stringify(l)){const equal=(await import('node:util')).isDeepStrictEqual(a,l);if(!equal)throw Error(`Mismatch ${l.id}`);}}
  console.log('All twelve database lesson overrides match authored content.');
  if(mode==='branch'){
   for(const name of ['verify:reading-translation','verify:notebook','verify:feedback','verify:admin-workspace','verify:site-policy']){
    const cmd=JSON.parse(fs.readFileSync('package.json')).scripts[name];const result=spawnSync(cmd,{shell:true,encoding:'utf8',env:{...process.env,DATABASE_URL:url.toString(),NETLIFY_DATABASE_URL:url.toString()}});
    fs.writeFileSync(`/private/tmp/module3-checks/${name.replaceAll(':','-')}.log`,result.stdout+result.stderr);console.log(name,result.status===0?'PASS':'FAIL');if(result.status!==0){console.log((result.stdout+result.stderr).slice(-1600));process.exitCode=1;}
   }
  }
 }
}finally{await client.end();}
