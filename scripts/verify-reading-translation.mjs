import "dotenv/config";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import pg from "pg";
import handler from "../netlify/functions/reading-translations.mts";
import staffHandler from "../netlify/functions/staff-reading-translations.mts";

const connectionString = process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;
assert.ok(connectionString, "A database connection is required.");
const client = new pg.Client({ connectionString });
const emails = [0, 1, 2, 3, 4].map((n) => `translation-qa-${randomUUID()}-${n}@example.invalid`);
const userIds = [];
let futureLessonId;
const review = async (email, activeRole, params = {}, method = "GET") => {
  const response = await staffHandler(new Request(`http://localhost/api/staff-reading-translations?${new URLSearchParams({ email, activeRole, ...params })}`, { method }));
  return { status: response.status, data: await response.json() };
};
const invoke = async (method, email = emails[0], body, lessonSlug = "lesson-1") => {
  const response = await handler(new Request(`http://localhost/api/reading-translations?${new URLSearchParams({ email, lessonSlug })}`, {
    method, headers: { "Content-Type": "application/json" },
    body: method === "POST" ? JSON.stringify({ email, body, lessonSlug }) : undefined,
  }));
  return { status: response.status, data: await response.json() };
};

await client.connect();
try {
  for (const [i, email] of emails.entries()) {
    const users = await client.query("INSERT INTO public.users (email, name, status) VALUES ($1, 'Translation QA', $2) RETURNING id", [email, i === 2 ? "inactive" : "active"]);
    userIds.push(users.rows[0].id);
    await client.query("INSERT INTO public.user_roles (user_id, role_id) VALUES ($1, $2)", [users.rows[0].id, i === 3 ? "professor" : i === 4 ? "administrator" : "student"]);
  }
  assert.equal((await invoke("GET")).data.submission, null);
  assert.equal((await invoke("POST", emails[0], "   ")).status, 400);
  assert.equal((await invoke("POST", emails[0], "x".repeat(20001))).status, 400);
  assert.equal((await invoke("POST", emails[0], { text: "bad type" })).status, 400);
  assert.equal((await invoke("POST", "", "text")).status, 400);
  assert.equal((await invoke("POST", emails[2], "text")).status, 404);
  assert.equal((await invoke("POST", emails[0], "text", "lesson-0")).status, 400);
  assert.equal((await invoke("POST", emails[0], "text", "lesson-99999999")).status, 404);
  assert.equal((await invoke("PUT")).status, 405);
  const body = 'My translation.\n\nGreek: ἡ ἀρετή. <script>alert("test")</script>';
  const saved = await invoke("POST", emails[0], body);
  assert.equal(saved.status, 200);
  assert.equal(saved.data.submission.body, body);
  assert.ok(saved.data.submission.submittedAt);
  assert.equal((await invoke("GET")).data.submission.body, body);
  assert.equal((await invoke("GET", emails[1])).data.submission, null, "Another account cannot read this submission.");
  assert.equal((await invoke("POST", emails[1], "Second account")).status, 200);
  assert.equal((await invoke("POST", emails[0], "Revised translation")).status, 200);
  assert.equal((await invoke("GET")).data.submission.body, "Revised translation");
  assert.equal((await invoke("GET", emails[1])).data.submission.body, "Second account");
  const count = await client.query("SELECT count(*)::int AS count FROM public.user_reading_translations t JOIN public.users u ON u.id = t.user_id WHERE u.email = $1", [emails[0]]);
  assert.equal(count.rows[0].count, 1, "Resubmission replaces only the latest translation.");
  for (let number = 2; number <= 12; number++) {
    const slug = `lesson-${number}`;
    assert.equal((await invoke("POST", emails[0], `Translation ${number}`, slug)).status, 200);
    assert.equal((await invoke("GET", emails[0], undefined, slug)).data.submission.body, `Translation ${number}`);
  }
  assert.equal((await invoke("GET")).data.submission.body, "Revised translation", "Other lessons preserve Lesson 1.");
  const nextNumber = await client.query("SELECT max(substring(slug from 8)::int) + 1 AS number FROM public.lessons WHERE slug ~ '^lesson-[1-9][0-9]*$'");
  const futureSlug = `lesson-${nextNumber.rows[0].number}`;
  const future = await client.query(`INSERT INTO public.lessons (module_id, slug, number_label, title, sort_order)
    SELECT module_id, $1, 'QA future lesson', 'QA future lesson', 9999 FROM public.lessons WHERE slug = 'lesson-1' LIMIT 1 RETURNING id`, [futureSlug]);
  futureLessonId = future.rows[0].id;
  assert.equal((await invoke("POST", emails[0], "Future lesson translation", futureSlug)).status, 200, "New lesson numbers work without code changes.");

  assert.equal((await review(emails[0], "student")).status, 403);
  assert.equal((await review(emails[0], "professor")).status, 403, "Claiming a staff role is insufficient.");
  assert.equal((await review(emails[2], "professor")).status, 403);
  for (const [email, role] of [[emails[3], "professor"], [emails[4], "administrator"]]) {
    const roster = await review(email, role);
    assert.equal(roster.status, 200);
    assert.ok(roster.data.students.some((student) => student.id === userIds[0]));
    assert.ok(roster.data.lessons.some((lesson) => lesson.slug === futureSlug));
    const params = { studentId: userIds[0], lessonSlug: "lesson-2" };
    assert.equal((await review(email, role, params)).data.submission.body, "Translation 2");
    assert.equal((await review(email, role, { studentId: userIds[1], lessonSlug: "lesson-2" })).data.submission, null);
    assert.equal((await review(email, role, { ...params, studentId: randomUUID() })).status, 404);
    assert.equal((await review(email, role, { ...params, studentId: "invalid" })).status, 400);
    assert.equal((await review(email, role, { studentId: userIds[0] })).status, 400);
    assert.equal((await review(email, role, params, "POST")).status, 405, "Staff review is read-only.");
  }
  console.log("Reading translation API passed: Lessons 1–12, future lesson, persistence, revision, account/lesson isolation, validation, both staff roles, access denial, empty states.");
} finally {
  if (futureLessonId) await client.query("DELETE FROM public.lessons WHERE id = $1", [futureLessonId]);
  await client.query("DELETE FROM public.users WHERE email = ANY($1::citext[])", [emails]);
  await client.end();
}
