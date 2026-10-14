import {readSitePolicy} from './_shared/site-policy.mts';
import {authenticatedCourseUser} from './_shared/admin-access.mts';
import bank from '../../content/lesson-1-translations.json' with { type: 'json' };
import { createDatabaseClient, getConnectionString, normalizeEmail } from './_shared/course-auth.mts';
import { gradeTranslation, TRANSLATION_INSTRUCTIONS } from './_shared/translation-rubric.mts';

function respond(body: unknown, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}
export default async (request: Request) => {
  if (request.method !== 'POST') return respond({ error: 'Method not allowed.' }, 405);
  let body;
  try { body = await request.json(); } catch { return respond({ error: 'Invalid request.' }, 400); }
  const activityType = body?.activityType;
  const questions = bank.activities[activityType as keyof typeof bank.activities];
  const email = normalizeEmail(body?.email);
  const answers = body?.answers;
  if (body?.lessonSlug !== 'lesson-1' || body?.revision !== bank.revision || !Array.isArray(questions) || !email || typeof body.password !== 'string' ||
      !Array.isArray(answers) || !answers.length || answers.length > 10 ||
      new Set(answers.map(a => a?.questionId)).size !== answers.length ||
      answers.some(a => typeof a?.text !== 'string' || !a.text.trim() || a.text.length > 600 || !questions.some(q => q.id === a.questionId))) {
    return respond({ error: 'Use the current Lesson 1 translation exercises and answer every translation in 600 characters or fewer.' }, 400);
  }
  const key = (globalThis as any).Netlify?.env.get('OPENAI_API_KEY');
  if (!key) return respond({ error: 'Translation checking is not configured yet. Your answers have been kept.' }, 503);
  const connection = getConnectionString();
  if (!connection) return respond({ error: 'Translation checking is temporarily unavailable.' }, 503);
  const client = createDatabaseClient(connection);
  let checkId: string | undefined;
  try {
    await client.connect();
    const user=await authenticatedCourseUser(client,email,body.password);
    const userId=user?.id;
    if(!userId)return respond({error:'Sign in again to check translations.'},401);
    const policy=await readSitePolicy(client,user.course_id);
    if(!policy.translationEnabled)return respond({error:'AI translation checking is currently paused. Your answers have been kept.'},403);
    const policyVersion=(await client.query('SELECT version FROM public.course_site_settings WHERE course_id=$1',[user.course_id])).rows[0].version;
    const normalized = answers.map(a => ({ questionId: a.questionId, text: a.text.trim().normalize('NFC') })).sort((a,b) => a.questionId.localeCompare(b.questionId));
    const cached = await client.query(`SELECT id, results FROM public.translation_checks WHERE user_id = $1 AND activity_type = $2 AND revision = $3 AND answers = $4::jsonb AND policy_version=$5 AND course_id=$6 AND status = 'complete' ORDER BY created_at DESC LIMIT 1`, [userId, activityType, bank.revision, JSON.stringify(normalized),policyVersion,user.course_id]);
    if (cached.rows.length) return respond({ checkId: cached.rows[0].id, results: cached.rows[0].results });
    await client.query('BEGIN');
    await client.query("SELECT pg_advisory_xact_lock(hashtext($1))",['translation-budget-'+user.course_id]);
    const usage = await client.query(`SELECT
      COALESCE(sum(jsonb_array_length(answers)) FILTER (WHERE user_id = $1 AND created_at >= date_trunc('day', now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC'),0) AS user_checks,
      COALESCE(sum(reserved_usd),0) AS monthly_reserved
      FROM public.translation_checks WHERE course_id=$2 AND created_at >= date_trunc('month',now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC'`, [userId,user.course_id]);
    const reserve = normalized.length * 0.005;
    if (Number(usage.rows[0].user_checks) + normalized.length > policy.translationDailyLimit || Number(usage.rows[0].monthly_reserved) + reserve > policy.translationMonthlyLimit) {
      await client.query('ROLLBACK');
      return respond({ error: 'The translation-checking limit has been reached. Your answers are still here; ask your instructor about further checks.' }, 429);
    }
    const inserted = await client.query(`INSERT INTO public.translation_checks (user_id, activity_type, revision, answers, reserved_usd,course_id,policy_version) VALUES ($1,$2,$3,$4::jsonb,$5,$6,$7) RETURNING id`, [userId, activityType, bank.revision, JSON.stringify(normalized), reserve,user.course_id,policyVersion]);
    checkId = inserted.rows[0].id;
    await client.query('COMMIT');
    const schema = { type: 'object', additionalProperties: false, required: ['results'], properties: {
      results: { type: 'array', items: { type: 'object', additionalProperties: false,
        required: ['questionId','meaningCorrect','feedback','correctedGreek'], properties: {
          questionId: { type: 'string' }, meaningCorrect: { type: 'boolean' }, feedback: { type: 'string' }, correctedGreek: { type: 'string' }
        } } }
    } };
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST', signal: AbortSignal.timeout(25000),
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'gpt-4.1-mini-2025-04-14', store: false, temperature: 0, max_output_tokens: 3500,
        instructions: TRANSLATION_INSTRUCTIONS + '\nAdditional instructor guidelines (apply consistently with the rubric above):\n' + policy.translationGuidelines, input: JSON.stringify({ activity: activityType, exercises: normalized.map(a => {
          const q = questions.find(q => q.id === a.questionId)!;
          return { questionId: q.id, direction: q.direction, prompt: q.prompt, referenceGreek: q.greek, referenceEnglish: q.english, objective: q.objective, studentAnswer: a.text };
        }) }), text: { format: { type: 'json_schema', name: 'translation_checks', strict: true, schema } } })
    });
    if (!response.ok) throw new Error(`provider-${response.status}`);
    const data = await response.json();
    const text = data.output?.flatMap((o: any) => o.content || []).filter((c: any) => c.type === 'output_text').map((c: any) => c.text).join('');
    const evaluations = JSON.parse(text || '{}').results;
    if (data.status !== 'completed' || !Array.isArray(evaluations) || evaluations.length !== normalized.length ||
        new Set(evaluations.map(e => e.questionId)).size !== normalized.length ||
        normalized.some(a => !evaluations.some(e => e.questionId === a.questionId && typeof e.meaningCorrect === 'boolean' && typeof e.feedback === 'string' && typeof e.correctedGreek === 'string'))) {
      throw new Error('Invalid provider result');
    }
    const results = normalized.map(a => gradeTranslation(questions.find(q => q.id === a.questionId)!, a.text, evaluations.find(e => e.questionId === a.questionId), activityType === 'lesson-quiz'));
    await client.query("UPDATE public.translation_checks SET status = 'complete', results = $2::jsonb WHERE id = $1", [checkId, JSON.stringify(results)]);
    return respond({ checkId, results });
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    if (checkId) await client.query("UPDATE public.translation_checks SET status = 'failed' WHERE id = $1", [checkId]).catch(() => {});
    // Never log provider payloads, student answers, credentials, or environment values.
    console.error('Translation check failed:', error instanceof Error && /^provider-\d+$/.test(error.message) ? error.message : 'check unavailable');
    return respond({ error: activityType === 'lesson-quiz'
      ? 'Translation checking could not finish. Your answers have been kept. Please try again; no quiz score has been recorded.'
      : 'Translation checking could not finish. Your answer has been kept. Please try again.' }, 503);
  } finally { await client.end(); }
};
export const config = { path: '/api/translation-check', method: 'POST' };
