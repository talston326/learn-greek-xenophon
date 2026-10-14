import {readSitePolicy} from './_shared/site-policy.mts';
import { createDatabaseClient, getConnectionString, normalizeEmail } from './_shared/course-auth.mts';
import { formatFeedback, validFeedback } from './_shared/feedback-text.mts';
const respond = (body: unknown, status = 200) => Response.json(body, {status, headers: {'Cache-Control':'no-store'}});
export default async (request: Request) => {
  if (request.method !== 'POST') return respond({error:'Method not allowed.'},405);
  let body;
  try { body = await request.json(); } catch { return respond({error:'Invalid request.'},400); }
  if (!body || !['submit','list','clear'].includes(body.action)) return respond({error:'Invalid feedback action.'},400);
  const email = normalizeEmail(body.accountEmail);
  if (!email || typeof body.password !== 'string') return respond({error:'Sign in to use feedback.'},401);
  if (body.action === 'submit' && !validFeedback(body)) return respond({error:'Complete the feedback fields. Messages must be 20,000 characters or fewer.'},400);
  if (body.action === 'clear' && (!Array.isArray(body.ids) || !body.ids.length || body.ids.length > 10000 || body.ids.some((id: unknown) => typeof id !== 'string' || !/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(id)))) return respond({error:'Reload feedback before clearing it.'},400);
  const connection = getConnectionString();
  if (!connection) return respond({error:'Feedback storage is not configured.'},503);
  const client = createDatabaseClient(connection);
  try {
    await client.connect();
    const users = await client.query(`SELECT u.id, EXISTS(SELECT 1 FROM public.user_roles ur WHERE ur.user_id=u.id AND ur.role_id='administrator') AS administrator
      FROM public.users u JOIN public.user_credentials uc ON uc.user_id=u.id
      WHERE u.email=$1::citext AND u.status='active' AND (uc.password_hash=crypt($2,uc.password_hash)
        OR (uc.password_algorithm='development-class-password' AND $2=ANY(ARRAY['xenophon','xeno'])
        AND (uc.password_hash=crypt('xenophon',uc.password_hash) OR uc.password_hash=crypt('xeno',uc.password_hash)))) LIMIT 1`,[email,body.password]);
    const user = users.rows[0];
    if (!user) return respond({error:'Sign in again to use feedback.'},401);
    if (body.action !== 'submit' && (!user.administrator || body.activeRole !== 'administrator')) return respond({error:'Administrator view is required to review or clear feedback.'},403);
    if (body.action === 'submit') {
      const policy=await readSitePolicy(client);
      if(!policy.feedbackEnabled)return respond({error:'Feedback collection is currently paused.'},403);
      // A stable submission ID makes retrying after a lost response safe.
      const result = await client.query(`INSERT INTO public.course_feedback (id,user_id,name,email,kind,page,message)
        VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (id) DO NOTHING RETURNING id`,
        [body.submissionId,user.id,body.name.trim(),body.email.trim(),body.kind,body.page.trim(),body.message.trim().normalize('NFC')]);
      if (!result.rows.length) {
        const prior = await client.query('SELECT id FROM public.course_feedback WHERE id=$1 AND user_id=$2',[body.submissionId,user.id]);
        if (!prior.rows.length) return respond({error:'Please reload the form and try again.'},409);
      }
      return respond({ok:true});
    }
    if (body.action === 'clear') {
      // Clear only records shown to the administrator; concurrent new submissions stay visible.
      await client.query('UPDATE public.course_feedback SET cleared_at=now(),cleared_by=$2 WHERE id=ANY($1::uuid[]) AND cleared_at IS NULL',[body.ids,user.id]);
    }
    const result = await client.query('SELECT id,name,email,kind,page,message,submitted_at FROM public.course_feedback WHERE cleared_at IS NULL ORDER BY submitted_at,id');
    return respond({ids:result.rows.map(row=>row.id),count:result.rows.length,text:formatFeedback(result.rows)});
  } catch {
    console.error('Feedback storage request failed.');
    return respond({error:'Feedback could not be saved or loaded. Please try again.'},503);
  } finally { await client.end(); }
};
export const config = {path:'/api/course-feedback', method:'POST'};
