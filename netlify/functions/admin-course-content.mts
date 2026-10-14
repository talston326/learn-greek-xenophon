import {createDatabaseClient,getConnectionString} from './_shared/course-auth.mts';
import {authenticatedCourseUser} from './_shared/admin-access.mts';
import lessonContent from './lesson-content.mts';
import saveLessonContent from './admin-lesson-content.mts';
const respond=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export function validateQuestionBank(activity:any) {
  const errors:string[]=[];
  if(!activity || !Array.isArray(activity.questions))return ['The question bank must contain a question list.'];
  const ids=new Set();
  for(const q of activity.questions){
    if(!q.id || ids.has(q.id))errors.push('Every question must have a unique identifier.'); ids.add(q.id);
    if(typeof q.prompt!=='string' || !q.prompt.trim() || q.prompt.length>3000)errors.push('Each question needs a prompt of 1–3,000 characters.');
    if(q.type!=='translation' && (!Array.isArray(q.choices) || q.choices.length<2 || q.choices.filter((c:any)=>c.correct===true).length!==1 || q.choices.some((c:any)=>typeof c.text!=='string'||!c.text.trim()) || new Set(q.choices.map((c:any)=>c.text.trim())).size!==q.choices.length)) errors.push('Each multiple-choice question needs distinct choices and exactly one correct answer.');
  }
  for(const mode of activity.modes || [])for(const item of mode.items || []){
    if(mode.type==='sentence-labeling'){
      if(!item.sentence?.trim() || !item.tokens?.length || !item.tokens.every((t:any)=>t.text?.trim() && (!t.answer || ['S','C','DO','LV','TV','IV'].includes(t.answer))))errors.push('Sentence labeling needs a sentence and valid token labels.');
    }else{
      if(!item.prompt?.trim()) errors.push('Every exercise needs a prompt.');
      if(mode.type==='translation-builder'){
        if(!item.slots?.length || !item.choices?.length || item.slots.some((s:any)=>!s.label?.trim() || !item.choices.includes(s.answer)))errors.push('Every builder slot needs a label and an answer present in its phrase bank.');
      }else if(!item.answer?.trim())errors.push('Every exercise needs an answer.');
    }
  }
  return [...new Set(errors)];
}
export default async(request:Request)=>{
  if(request.method!=='POST')return respond({error:'Method not allowed.'},405);
  let body:any;try{body=await request.json();}catch{return respond({error:'Invalid request.'},400);}
  if(body?.activeRole!=='administrator')return respond({error:'Administrator view is required.'},403);
  if(!['list','read','draft','publish'].includes(body.action))return respond({error:'Invalid content action.'},400);
  const connection=getConnectionString();if(!connection)return respond({error:'Content storage is unavailable.'},503);
  const client=createDatabaseClient(connection);
  try{
    await client.connect();
    const user=await authenticatedCourseUser(client,body.accountEmail,body.password);
    if(!user)return respond({error:'Sign in again to manage content.'},401);
    if(!user.administrator)return respond({error:'Administrator access is required.'},403);
    if(body.action==='list'){
      const result=await client.query(`SELECT m.slug AS module_slug,m.label AS module_label,m.title AS module_title,m.module_type,
        l.slug,l.number_label,l.title,l.page_url,l.is_published,o.version AS published_version,o.updated_at AS published_at,
        d.version AS draft_version,d.updated_at AS draft_at,COALESCE(o.content,'{}'::jsonb) || COALESCE(p.blocks,'{}'::jsonb) AS content,
        (SELECT count(*)::int FROM public.lesson_vocabulary v WHERE v.lesson_id=l.id) AS vocabulary_count
        FROM public.modules m JOIN public.lessons l ON l.module_id=m.id
        LEFT JOIN public.lesson_content_overrides o ON o.lesson_id=l.id LEFT JOIN public.lesson_content_drafts d ON d.lesson_id=l.id
        LEFT JOIN LATERAL (SELECT jsonb_object_agg(kind,value) AS blocks FROM (
          SELECT DISTINCT ON (b.content->>'kind') b.content->>'kind' AS kind,b.content->'value' AS value
          FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id
          WHERE s.lesson_id=l.id AND b.content->>'source'='lesson_publish' ORDER BY b.content->>'kind',b.updated_at DESC
        ) latest) p ON true WHERE m.course_id=$1 ORDER BY m.sort_order,l.sort_order,l.number_label`,[user.course_id]);
      const modules:any[]=[];
      for(const row of result.rows){
        let module=modules.find(m=>m.id===row.module_slug);
        if(!module){module={id:row.module_slug,label:row.module_label,title:row.module_title,type:row.module_type,lessons:[]};modules.push(module);}
        const a=row.content.activities || {};
        const topicCounts:Record<string,number>={};(a['topic-practice']?.questions || []).forEach((q:any)=>{if(q.topic)topicCounts[q.topic]=(topicCounts[q.topic]||0)+1;});
        module.lessons.push({id:row.slug,number:row.number_label,title:row.title,pageUrl:row.page_url,
          isPublished:row.is_published,hasContent:Boolean(row.published_version || Object.keys(row.content).length),hasDraft:Boolean(row.draft_version),publishedVersion:row.published_version || 0,draftVersion:row.draft_version || 0,publishedAt:row.published_at,draftAt:row.draft_at,
          counts:{vocabulary:row.vocabulary_count,reading:row.content.reading?.paragraphs?.length || 0,grammar:row.content.grammar?.sections?.length || 0,practice:a['topic-practice']?.questions?.length || 0,exercises:(a['grammar-exercises']?.questions?.length || 0)+(a['grammar-exercises']?.modes || []).reduce((n:number,m:any)=>n+(m.items?.length || 0),0),quiz:a['lesson-quiz']?.questions?.length || 0},topicCounts});
      }
      return respond({modules});
    }
    const row=(await client.query(`SELECT l.id FROM public.lessons l JOIN public.modules m ON m.id=l.module_id WHERE l.slug=$1 AND m.course_id=$2`,[body.slug,user.course_id])).rows[0];
    if(!row)return respond({error:'Lesson was not found in your course.'},404);
    if(body.action==='read'){
      const published=await lessonContent(new Request(`https://internal/api/lesson-content?slug=${encodeURIComponent(body.slug)}`));
      if(!published.ok)return published;
      const data=await published.json();
      const draft=(await client.query('SELECT content,version,updated_at FROM public.lesson_content_drafts WHERE lesson_id=$1',[row.id])).rows[0];
      return respond({content:draft?.content || data.content,hasDraft:Boolean(draft),draftVersion:draft?.version || 0,publishedVersion:data.legacyOverrideVersion || 0});
    }
    if(!Number.isInteger(body.publishedVersion) || !Number.isInteger(body.draftVersion))return respond({error:'Reload the lesson before saving.'},400);
    if(body.activityType){const errors=validateQuestionBank(body.content?.activities?.[body.activityType]);if(errors.length)return respond({error:errors.join(' ')},400);}
    const delegated=new Request(`https://internal/api/admin/lesson-content?slug=${encodeURIComponent(body.slug)}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:body.accountEmail,password:body.password,activeRole:body.activeRole,action:body.action,content:body.content,expectedVersion:body.publishedVersion,expectedDraftVersion:body.draftVersion})});
    const saved=await saveLessonContent(delegated);const data=await saved.json();
    return respond({...data,publishedVersion:body.action==='publish'?data.version:body.publishedVersion,draftVersion:body.action==='draft'?data.version:0},saved.status);
  }catch{console.error('Administrator content request failed.');return respond({error:'Course content could not be loaded or saved. Please try again.'},503);}
  finally{await client.end();}
};
export const config={path:'/api/admin/course-content',method:'POST'};
