import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import pg from 'pg';
import handler from '../netlify/functions/course-feedback.mts';
const client = new pg.Client({connectionString:process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL});
const emails = [0,1].map(n=>`feedback-qa-${randomUUID()}-${n}@example.invalid`);
const ids=[];
const invoke=async(action,accountEmail=emails[0],extra={})=>{
  const response=await handler(new Request('http://localhost/api/course-feedback',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({action,accountEmail,password:'xenophon',activeRole:'administrator',...extra})}));
  return {status:response.status,data:await response.json()};
};
const form=(message='Greek: ἡ ἀρετή.\nSecond line.')=>({submissionId:randomUUID(),name:'Feedback QA',email:emails[0],kind:'Problem or bug',page:'/lesson.html?lesson=1&page=2#grammar',message});
await client.connect();
try {
  for(const [i,email] of emails.entries()){
    const result=await client.query("INSERT INTO public.users(email,name,status) VALUES ($1,'Feedback QA','active') RETURNING id",[email]);ids.push(result.rows[0].id);
    await client.query('INSERT INTO public.user_roles(user_id,role_id) VALUES ($1,$2)',[ids[i],i?'administrator':'student']);
    await client.query("INSERT INTO public.user_credentials(user_id,password_hash,password_algorithm) VALUES ($1,crypt('xenophon',gen_salt('bf')),'development-class-password')",[ids[i]]);
  }
  assert.equal((await invoke('list')).status,403,'A student cannot claim administrator access.');
  assert.equal((await invoke('clear',emails[0],{ids:[randomUUID()]})).status,403);
  assert.equal((await invoke('list',emails[1],{activeRole:'student'})).status,403);
  assert.equal((await invoke('list',emails[1],{password:'wrong'})).status,401);
  assert.equal((await invoke('submit',emails[0],{...form(),message:' '})).status,400);
  assert.equal((await invoke('submit',emails[0],{...form(),message:'x'.repeat(20001)})).status,400);
  const first=form(); const second=form('<script>literal text</script>');
  for(const entry of [first,second,first])assert.equal((await invoke('submit',emails[0],entry)).status,200);
  const stored=await client.query('SELECT count(*)::int AS n FROM public.course_feedback WHERE user_id=$1',[ids[0]]);assert.equal(stored.rows[0].n,2,'Retries do not duplicate feedback.');
  const loaded=await invoke('list',emails[1]);assert.equal(loaded.status,200);
  assert.ok(loaded.data.text.includes(first.message));assert.ok(loaded.data.text.includes('\n\nSubmitted:'));
  assert.ok(loaded.data.text.includes(second.message));assert.ok(loaded.data.text.includes(first.page));
  const late=form('Arrived after the review opened.');await invoke('submit',emails[0],late);
  const cleared=await invoke('clear',emails[1],{ids:[first.submissionId,second.submissionId]});assert.equal(cleared.status,200);
  assert.ok(!cleared.data.ids.includes(first.submissionId));assert.ok(cleared.data.ids.includes(late.submissionId),'New feedback survives clearing the displayed batch.');
  const archived=await client.query('SELECT cleared_at,cleared_by FROM public.course_feedback WHERE id=$1',[first.submissionId]);assert.ok(archived.rows[0].cleared_at);assert.equal(archived.rows[0].cleared_by,ids[1]);
  const reload=await invoke('list',emails[1]);assert.ok(reload.data.ids.includes(late.submissionId),'Feedback persists across requests.');
  console.log('Feedback passed: persistence, text separators, Unicode, idempotent retries, validation, administrator access, clearing, and concurrent submissions.');
} finally {await client.query('DELETE FROM public.users WHERE id=ANY($1::uuid[])',[ids]);await client.end();}
