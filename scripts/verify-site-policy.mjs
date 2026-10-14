import 'dotenv/config';
import assert from 'node:assert/strict';
import pg from 'pg';
import {randomUUID} from 'node:crypto';
import translation from '../netlify/functions/translation-check.mts';
import registration from '../netlify/functions/register.mts';
import feedback from '../netlify/functions/course-feedback.mts';
import bank from '../content/lesson-1-translations.json' with {type:'json'};
import {DEFAULT_SITE_POLICY} from '../netlify/functions/_shared/site-policy.mts';
let policy={...DEFAULT_SITE_POLICY},providerBody,providerCalls=0;
const originalQuery=pg.Client.prototype.query,originalFetch=globalThis.fetch,originalNetlify=globalThis.Netlify;
pg.Client.prototype.query=function(sql,...args){
  if(typeof sql==='string' && sql.startsWith('SELECT s.settings FROM public.course_site_settings'))return Promise.resolve({rows:[{settings:policy}]});
  return originalQuery.call(this,typeof sql==='string'&&sql.trim()==='COMMIT'?'ROLLBACK':sql,...args);
};
globalThis.Netlify={env:{get:name=>name==='OPENAI_API_KEY'?'mock-only-test-key':undefined}};
globalThis.fetch=async(url,options)=>{
  assert.equal(url,'https://api.openai.com/v1/responses');providerCalls++;providerBody=JSON.parse(options.body);
  const input=JSON.parse(providerBody.input);return Response.json({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify({results:input.exercises.map(q=>({questionId:q.questionId,meaningCorrect:true,feedback:'Test feedback',correctedGreek:q.referenceGreek}))})}]}]});
};
const email='tpalston@email.sc.edu';
const invoke=async(handler,body)=>{const r=await handler(new Request('https://internal/api/test',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}));return {status:r.status,data:await r.json()};};
const q=bank.activities['topic-practice'].find(q=>q.direction==='greek-english');
const body={email,password:'xenophon',lessonSlug:'lesson-1',revision:bank.revision,activityType:'topic-practice',answers:[{questionId:q.id,text:q.english}]};
try{
  policy.registrationOpen=false;assert.equal((await invoke(registration,{firstName:'Test',lastName:'Policy',email:'policy-qa@example.invalid',password:'xenophon'})).status,403);
  policy.feedbackEnabled=false;assert.equal((await invoke(feedback,{action:'submit',accountEmail:email,password:'xenophon',submissionId:randomUUID(),name:'Test',email,kind:'Other',page:'/test',message:'Policy test'})).status,403);
  policy.translationEnabled=false;assert.equal((await invoke(translation,body)).status,403);
  policy.translationEnabled=true;policy.translationMonthlyLimit=0;assert.equal((await invoke(translation,body)).status,429);assert.equal(providerCalls,0);
  policy.translationMonthlyLimit=8;policy.translationDailyLimit=1;const extra=bank.activities['topic-practice'].find(item=>item.direction==='greek-english' && item.id!==q.id);assert.equal((await invoke(translation,{...body,answers:[...body.answers,{questionId:extra.id,text:extra.english}]})).status,429);assert.equal(providerCalls,0);policy.translationDailyLimit=100;policy.translationGuidelines='Give one short hint and explain subject agreement.';
  const result=await invoke(translation,body);assert.equal(result.status,200);assert.equal(result.data.results[0].passed,true);assert.ok(providerBody.instructions.includes(policy.translationGuidelines));assert.ok(providerBody.instructions.includes('breathing'));assert.equal(providerCalls,1);
  console.log('Site policies passed: registration closed, feedback paused, AI paused, zero allowance, instructor guidelines, fixed breathing rubric. Provider mocked; test writes rolled back; no API credit used.');
}finally{pg.Client.prototype.query=originalQuery;globalThis.fetch=originalFetch;globalThis.Netlify=originalNetlify;}
