import 'dotenv/config';
import assert from 'node:assert/strict';
import pg from 'pg';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {DEV_CLASS_PASSWORD} from '../netlify/functions/_shared/course-auth.mts';
import settingsHandler from '../netlify/functions/site-settings.mts';
import contentHandler,{validateQuestionBank} from '../netlify/functions/admin-course-content.mts';
import {DEFAULT_SITE_POLICY,validateSiteSettings} from '../netlify/functions/_shared/site-policy.mts';
const credentials={accountEmail:'tpalston@email.sc.edu',password:'xenophon',activeRole:'administrator'};
const invoke=async(handler,body)=>{const response=await handler(new Request('https://internal/api/test',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...credentials,...body})}));return {status:response.status,data:await response.json()};};
const example={course:{code:'GREK',title:'Greek',term:'Fall',institution:'USC',department:'Classics'},settings:{...DEFAULT_SITE_POLICY}};
const profileFunction=readFileSync('script.js','utf8').match(/function profileLinkLabel\([\s\S]*?\n}/)[0];
const label=vm.runInNewContext('('+profileFunction+')',{ROLE_LABELS:{administrator:'Administrator',professor:'Professor',student:'Student'}});
for(const role of ['administrator','professor','student'])assert.equal(label({activeRole:role}),role[0].toUpperCase()+role.slice(1)+' Profile →');
assert.equal(label({activeRole:'professor',professorPreview:true}),'Student Profile →');
assert.deepEqual(validateSiteSettings(example),[]);
assert.ok(validateSiteSettings({...example,settings:{...example.settings,quizPassingScore:101}}).length);
assert.ok(validateSiteSettings({...example,settings:{...example.settings,translationMonthlyLimit:-1}}).length);
assert.ok(validateQuestionBank({questions:[{id:'q',prompt:'Question',choices:[{text:'A',correct:true},{text:'A',correct:false}]}]}).length);
const original=pg.Client.prototype.query;
// Exercise real SQL writes, but roll back every transaction instead of committing.
// No user roles, credentials, published lessons, drafts, or settings are changed.
pg.Client.prototype.query=function(sql,...args){return original.call(this,typeof sql==='string' && sql.trim()==='COMMIT'?'ROLLBACK':sql,...args);};
try{
  assert.equal((await invoke(settingsHandler,{action:'read',activeRole:'student'})).status,403);
  assert.equal((await invoke(contentHandler,{action:'list',activeRole:'professor'})).status,403);
  assert.equal((await invoke(settingsHandler,{action:'read',password:'invalid'})).status,401);
  const lookup=new pg.Client({connectionString:process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL});await lookup.connect();
  try {const student=(await lookup.query("SELECT u.email FROM public.users u JOIN public.user_credentials uc ON uc.user_id=u.id JOIN public.course_memberships cm ON cm.user_id=u.id AND cm.enrollment_status='active' WHERE NOT EXISTS(SELECT 1 FROM public.user_roles ur WHERE ur.user_id=u.id AND ur.role_id='administrator') AND uc.password_hash=crypt($1,uc.password_hash) LIMIT 1",[DEV_CLASS_PASSWORD])).rows[0];if(student){assert.equal((await invoke(settingsHandler,{action:'read',accountEmail:student.email})).status,403,'A non-administrator cannot claim admin access.');assert.equal((await invoke(contentHandler,{action:'list',accountEmail:student.email})).status,403);}}finally{await lookup.end();}
  const current=await invoke(settingsHandler,{action:'read'});assert.equal(current.status,200);
  assert.equal(typeof current.data.translationKeyConfigured,'boolean');assert.ok(!('password' in current.data));
  assert.equal((await invoke(settingsHandler,{action:'save',...current.data,version:current.data.version-1})).status,409);
  const changed={...current.data.settings,grammarPassingScore:79};
  const saved=await invoke(settingsHandler,{action:'save',...current.data,settings:changed});assert.equal(saved.status,200);assert.equal(saved.data.version,current.data.version+1);assert.equal(saved.data.settings.grammarPassingScore,79);
  assert.deepEqual((await invoke(settingsHandler,{action:'read'})).data.settings,current.data.settings,'Test transaction must not change live settings.');
  const overview=await invoke(contentHandler,{action:'list'});assert.equal(overview.status,200);
  const first=overview.data.modules.flatMap(m=>m.lessons).find(l=>l.id==='lesson-1');assert.equal(first.counts.practice,250);assert.equal(Object.values(first.topicCounts).length,5);assert.ok(Object.values(first.topicCounts).every(n=>n===50));
  const loaded=await invoke(contentHandler,{action:'read',slug:'lesson-1'});assert.equal(loaded.status,200);assert.deepEqual(validateQuestionBank(loaded.data.content.activities['grammar-exercises']),[]);
  assert.equal((await invoke(contentHandler,{action:'draft',slug:'lesson-1',...loaded.data,publishedVersion:loaded.data.publishedVersion-1})).status,409);
  for(const action of ['draft','publish']){
    const result=await invoke(contentHandler,{action,slug:'lesson-1',...loaded.data,activityType:'topic-practice'});assert.equal(result.status,200,JSON.stringify(result.data));
    assert.equal(action==='publish'?result.data.publishedVersion:result.data.draftVersion,action==='publish'?loaded.data.publishedVersion+1:loaded.data.draftVersion+1);
  }
  const reloaded=await invoke(contentHandler,{action:'read',slug:'lesson-1'});assert.deepEqual(reloaded.data,loaded.data,'Test transactions must not change published content or drafts.');
  const publicResponse=await settingsHandler(new Request('https://internal/api/site-settings'));const publicData=await publicResponse.json();assert.equal(publicResponse.status,200);assert.ok(!('translationGuidelines' in publicData.settings));assert.ok(!('translationKeyConfigured' in publicData));
  console.log('Administrator workspace passed: validation, role and credential guards, course counts, conflicts, settings save, draft and full publish SQL, unchanged live data.');
}finally{pg.Client.prototype.query=original;}
