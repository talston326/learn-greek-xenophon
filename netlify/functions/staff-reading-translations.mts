import { createDatabaseClient, getConnectionString, jsonResponse, normalizeEmail } from "./_shared/course-auth.mts";

function respond(body: unknown, status = 200) {
  const response = jsonResponse(body, status);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export default async (request: Request) => {
  if (request.method !== "GET") return respond({ error: "Method not allowed." }, 405);
  const params = new URL(request.url).searchParams;
  const email = normalizeEmail(params.get("email"));
  const role = params.get("activeRole") || "";
  if (!email || !["professor", "administrator"].includes(role)) {
    return respond({ error: "Professor or Administrator access is required." }, 403);
  }
  const studentId = params.get("studentId") || "";
  const slug = params.get("lessonSlug") || "";
  if (studentId && !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(studentId)) {
    return respond({ error: "Select a valid student." }, 400);
  }
  if (slug && !/^lesson-[1-9][0-9]*$/.test(slug)) return respond({ error: "Select a valid lesson." }, 400);
  if (Boolean(studentId) !== Boolean(slug)) return respond({ error: "Select both a student and lesson." }, 400);
  const connectionString = getConnectionString();
  if (!connectionString) return respond({ error: "Database is not configured." }, 500);
  const client = createDatabaseClient(connectionString);
  try {
    await client.connect();
    // Like admin-lesson-content, verify the selected staff role in the database.
    const staff = await client.query(`SELECT u.id FROM public.users u
      JOIN public.user_roles r ON r.user_id = u.id
      WHERE u.email = $1::citext AND u.status = 'active' AND r.role_id = $2 LIMIT 1`, [email, role]);
    if (!staff.rows.length) return respond({ error: "Professor or Administrator access is required." }, 403);
    if (!studentId) {
      const students = await client.query(`SELECT u.id, u.name, u.email::text AS email, u.status,
          count(t.lesson_slug)::int AS "submissionCount"
        FROM public.users u
        JOIN public.user_roles r ON r.user_id = u.id AND r.role_id = 'student'
        LEFT JOIN public.user_reading_translations t ON t.user_id = u.id
        GROUP BY u.id ORDER BY lower(coalesce(u.name, u.email::text)), u.email`);
      const lessons = await client.query(`SELECT DISTINCT slug, number_label AS label, title
        FROM public.lessons WHERE slug ~ '^lesson-[1-9][0-9]*$'
        ORDER BY slug`);
      lessons.rows.sort((a, b) => Number(a.slug.slice(7)) - Number(b.slug.slice(7)));
      return respond({ students: students.rows, lessons: lessons.rows });
    }
    const students = await client.query(`SELECT u.id, u.name, u.email::text AS email
      FROM public.users u JOIN public.user_roles r ON r.user_id = u.id AND r.role_id = 'student'
      WHERE u.id = $1 LIMIT 1`, [studentId]);
    if (!students.rows.length) return respond({ error: "Student not found." }, 404);
    const lessons = await client.query("SELECT slug, number_label AS label, title FROM public.lessons WHERE slug = $1 LIMIT 1", [slug]);
    if (!lessons.rows.length) return respond({ error: "Lesson not found." }, 404);
    const submissions = await client.query(`SELECT body, submitted_at AS "submittedAt"
      FROM public.user_reading_translations WHERE user_id = $1 AND lesson_slug = $2`, [studentId, slug]);
    return respond({ student: students.rows[0], lesson: lessons.rows[0], submission: submissions.rows[0] || null });
  } catch (error) {
    console.error("Staff reading translation request failed", error);
    return respond({ error: "Student translations could not be loaded. Please try again." }, 500);
  } finally {
    await client.end();
  }
};

export const config = { path: "/api/staff-reading-translations", method: ["GET"] };
