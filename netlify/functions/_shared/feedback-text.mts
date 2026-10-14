export const FEEDBACK_KINDS = ['Question', 'Problem or bug', 'Greek typing or keyboard issue', 'Lesson content', 'Practice or test feedback', 'Suggestion', 'Other'];
const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ');
export function formatFeedback(rows: any[]) {
  return rows.map(row => [
    `Submitted: ${new Date(row.submitted_at).toISOString()}`,
    `Name: ${singleLine(row.name)}`, `Email: ${singleLine(row.email)}`,
    `Type: ${singleLine(row.kind)}`, `Where: ${singleLine(row.page) || '(not specified)'}`,
    `Message: ${row.message.replace(/\r\n?/g, '\n')}`
  ].join('\n')).join('\n\n');
}
export function validFeedback(body: any) {
  return typeof body?.submissionId === 'string' && /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(body.submissionId)
    && ['name','email','kind','page','message'].every(key => typeof body[key] === 'string')
    && body.name.trim().length > 0 && body.name.length <= 200
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) && body.email.length <= 320
    && FEEDBACK_KINDS.includes(body.kind) && body.page.length <= 2000
    && body.message.trim().length > 0 && body.message.length <= 20000;
}
