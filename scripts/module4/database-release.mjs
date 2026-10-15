// Publishes only Module IV; QA runs against a separate Neon branch.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import pg from 'pg';
import dotenv from 'dotenv';
const mode=process.argv[2];
assert(['branch','publish'].includes(mode),'Choose branch or publish.');
const env=dotenv.parse(fs.readFileSync(process.env.COURSE_ENV_PATH||'.env'));
const url=new URL(env.NETLIFY_DATABASE_URL||env.DATABASE_URL);
if(mode==='branch'){assert(process.env.MODULE4_QA_HOST);url.hostname=process.env.MODULE4_QA_HOST;}
url.hostname=url.hostname.replace('-pooler.','.');
const c=new pg.Client({connectionString:url.toString()});await c.connect();
try{
const tables=(await c.query("SELECT tablename FROM pg_tables WHERE schemaname='public' ORDER BY tablename")).rows.map(r=>r.tablename).filter(t=>/^(user_|student_|translation_checks$|course_feedback$)/.test(t));
async function snapshot(){const result={};for(const table of tables){assert(/^[a-z_]+$/.test(table));result[table]=(await c.query(`SELECT count(*)::int AS count,md5(coalesce(string_agg(row_to_json(t)::text,'' ORDER BY row_to_json(t)::text),'')) AS digest FROM public.${table} t`)).rows[0];}return result;}
const before=await snapshot();
const versions=async()=> (await c.query("SELECT l.slug,o.version FROM lesson_content_overrides o JOIN lessons l ON l.id=o.lesson_id WHERE l.slug ~ '^lesson-(3[7-9]|4[0-8])$' ORDER BY l.slug")).rows;
const sql=fs.readFileSync('db/migrations/0047_publish_module_4.sql','utf8');
await c.query(sql);
for(let n=37;n<=48;n++){const expected=JSON.parse(fs.readFileSync(`content/lessons/lesson-${n}.json`));const actual=(await c.query('SELECT o.content FROM lesson_content_overrides o JOIN lessons l ON l.id=o.lesson_id WHERE l.slug=$1',[expected.id])).rows[0]?.content;assert.deepEqual(actual,expected,`Database content ${n}`);}
const firstVersions=await versions();
if(mode==='branch'){await c.query(sql);assert.deepEqual(await versions(),firstVersions,'Repeated migration must not create new revisions.');}
const after=await snapshot();assert.deepEqual(after,before,'Learner records must remain unchanged.');
const report={mode,passed:true,lessons:12,learnerTablesUnchanged:tables,versions:firstVersions,idempotenceChecked:mode==='branch'};
fs.writeFileSync(`/private/tmp/module4-${mode}-database.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report));
}finally{await c.end();}
