import type pg from 'pg';
export const DEFAULT_SITE_POLICY = {
  grammarPassingScore:80, quizPassingScore:80, lessonAccess:'open', registrationOpen:true,
  feedbackEnabled:true, translationEnabled:true, translationDailyLimit:100, translationMonthlyLimit:8,
  translationGuidelines:'Use brief, supportive feedback suitable for a beginning Ancient Greek student. Explain mistakes in plain English and give a useful hint before revealing an answer.'
};
export async function readSitePolicy(client: pg.Client, courseId?: string) {
  const result = await client.query(`SELECT s.settings FROM public.course_site_settings s JOIN public.courses c ON c.id=s.course_id WHERE ($1::uuid IS NULL OR c.id=$1) ORDER BY c.created_at DESC LIMIT 1`,[courseId || null]);
  return {...DEFAULT_SITE_POLICY,...(result.rows[0]?.settings || {})};
}
export function validateSiteSettings(body: any) {
  const errors:string[]=[];
  const course = body?.course, settings=body?.settings;
  for(const key of ['code','title','term','institution','department']) {
    if(typeof course?.[key]!=='string' || !course[key].trim() || course[key].length>200) errors.push(`Enter a ${key} of 1–200 characters.`);
  }
  for(const key of ['grammarPassingScore','quizPassingScore']) if(!Number.isInteger(settings?.[key]) || settings[key]<1 || settings[key]>100) errors.push('Passing scores must be whole numbers from 1 to 100.');
  if(!['open','sequential'].includes(settings?.lessonAccess)) errors.push('Choose a valid lesson access setting.');
  for(const key of ['registrationOpen','feedbackEnabled','translationEnabled']) if(typeof settings?.[key]!=='boolean') errors.push(`Choose a valid ${key} setting.`);
  if(!Number.isInteger(settings?.translationDailyLimit) || settings.translationDailyLimit<1 || settings.translationDailyLimit>1000) errors.push('Daily checks must be a whole number from 1 to 1,000.');
  if(typeof settings?.translationMonthlyLimit!=='number' || !Number.isFinite(settings.translationMonthlyLimit) || settings.translationMonthlyLimit<0 || settings.translationMonthlyLimit>1000) errors.push('Monthly translation allowance must be between $0 and $1,000.');
  if(typeof settings?.translationGuidelines!=='string' || settings.translationGuidelines.length>6000) errors.push('Teaching guidelines must be 6,000 characters or fewer.');
  return errors;
}
