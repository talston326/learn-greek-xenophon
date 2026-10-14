import {createDatabaseClient,getConnectionString} from './_shared/course-auth.mts';
import {authenticatedCourseUser} from './_shared/admin-access.mts';
import {DEFAULT_SITE_POLICY,readSitePolicy,validateSiteSettings} from './_shared/site-policy.mts';
const respond=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export default async(request:Request)=>{
  if(!['GET','POST'].includes(request.method)) return respond({error:'Method not allowed.'},405);
  let body:any;
  if(request.method==='POST') {
    try{body=await request.json();}catch{return respond({error:'Invalid request.'},400);}
    if(!['read','save'].includes(body?.action))return respond({error:'Invalid settings action.'},400);
    if(body.activeRole!=='administrator')return respond({error:'Administrator view is required.'},403);
    if(body.action==='save'){
      const errors=validateSiteSettings(body);
      if(errors.length)return respond({error:errors.join(' ')},400);
      if(!Number.isInteger(body.version))return respond({error:'Reload settings before saving.'},400);
    }
  }
  const connection=getConnectionString();if(!connection)return respond({error:'Settings storage is unavailable.'},503);
  const client=createDatabaseClient(connection);
  try{
    await client.connect();
    if(request.method==='GET') {
      const policy=await readSitePolicy(client);
      const course=(await client.query(`SELECT c.id,c.code,c.title,c.term,c.institution,c.department FROM public.courses c JOIN public.course_site_settings s ON s.course_id=c.id ORDER BY c.created_at DESC LIMIT 1`)).rows[0];
      const {translationGuidelines,...publicSettings}=policy;
      return respond({course,settings:publicSettings});
    }
    const user=await authenticatedCourseUser(client,body.accountEmail,body.password);
    if(!user)return respond({error:'Sign in again to manage settings.'},401);
    if(!user.administrator)return respond({error:'Administrator access is required.'},403);
    await client.query('BEGIN');
    const current=(await client.query(`SELECT settings,version,updated_at FROM public.course_site_settings WHERE course_id=$1 FOR UPDATE`,[user.course_id])).rows[0];
    if(!current)throw new Error('Settings are not initialized');
    if(body.action==='save'){
      if(current.version!==body.version){await client.query('ROLLBACK');return respond({error:'Another administrator changed these settings. Reload before saving.'},409);}
      const {code,title,term,institution,department}=body.course;
      await client.query(`INSERT INTO public.course_site_settings_history(course_id,settings,course_details,changed_by) SELECT c.id,s.settings,jsonb_build_object('code',c.code,'title',c.title,'term',c.term,'institution',c.institution,'department',c.department),$2 FROM public.courses c JOIN public.course_site_settings s ON s.course_id=c.id WHERE c.id=$1`,[user.course_id,user.id]);
      await client.query('UPDATE public.courses SET code=$2,title=$3,term=$4,institution=$5,department=$6,updated_at=now() WHERE id=$1',[user.course_id,code.trim(),title.trim(),term.trim(),institution.trim(),department.trim()]);
      const settings=Object.fromEntries(Object.keys(DEFAULT_SITE_POLICY).map(k=>[k,body.settings[k]]));

      await client.query('UPDATE public.course_site_settings SET settings=$2::jsonb,version=version+1,updated_at=now(),updated_by=$3 WHERE course_id=$1',[user.course_id,JSON.stringify(settings),user.id]);
    }
    const row=(await client.query('SELECT settings,version,updated_at FROM public.course_site_settings WHERE course_id=$1',[user.course_id])).rows[0];
    const course=(await client.query('SELECT id,code,title,term,institution,department FROM public.courses WHERE id=$1',[user.course_id])).rows[0];
    await client.query('COMMIT');
    return respond({...row,course,translationKeyConfigured:Boolean((globalThis as any).Netlify?.env.get('OPENAI_API_KEY') || process.env.OPENAI_API_KEY)});
  }catch(error){await client.query('ROLLBACK').catch(()=>{});console.error('Site settings request failed.');return respond({error:'Settings could not be loaded or saved. Please try again.'},503);}
  finally{await client.end();}
};
export const config={path:'/api/site-settings',method:['GET','POST']};
