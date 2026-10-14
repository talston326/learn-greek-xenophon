import { createDatabaseClient, getConnectionString, jsonResponse, normalizeEmail } from "./_shared/course-auth.mts";

function respond(body: unknown, status = 200) {
  const response = jsonResponse(body, status);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export default async (request: Request) => {
  if (!["GET", "POST"].includes(request.method)) return respond({ error: "Method not allowed." }, 405);
  const url = new URL(request.url);
  let payload: { email?: unknown; lessonSlug?: unknown; body?: unknown } = {};
  if (request.method === "POST") {
    try {
      const parsed = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid payload");
      payload = parsed;
    } catch {
      return respond({ error: "Invalid JSON request." }, 400);
    }
  }
  // Follow the app's existing account resolution, as used by notebook-notes.
  const email = normalizeEmail(request.method === "GET" ? url.searchParams.get("email") : payload.email);
  const slug = request.method === "GET" ? url.searchParams.get("lessonSlug") : payload.lessonSlug;
  if (!email) return respond({ error: "Sign in to save your translation." }, 400);
  if (typeof slug !== "string" || !/^lesson-[1-9][0-9]*$/.test(slug)) return respond({ error: "Select a valid lesson." }, 400);
  const body = typeof payload.body === "string" ? payload.body.trim().normalize("NFC") : "";
  if (request.method === "POST" && (!body || body.length > 20000)) {
    return respond({ error: "Enter a translation of 20,000 characters or fewer." }, 400);
  }
  const connectionString = getConnectionString();
  if (!connectionString) return respond({ error: "Database is not configured." }, 500);
  const client = createDatabaseClient(connectionString);
  try {
    await client.connect();
    const users = await client.query("SELECT id FROM public.users WHERE email = $1::citext AND status = 'active' LIMIT 1", [email]);
    const userId = users.rows[0]?.id;
    if (!userId) return respond({ error: "No active user was found." }, 404);
    const lessons = await client.query("SELECT id FROM public.lessons WHERE slug = $1 LIMIT 1", [slug]);
    if (!lessons.rows.length) return respond({ error: "Lesson not found." }, 404);
    const result = request.method === "GET"
      ? await client.query(`SELECT body, submitted_at AS "submittedAt" FROM public.user_reading_translations WHERE user_id = $1 AND lesson_slug = $2`, [userId, slug])
      : await client.query(`INSERT INTO public.user_reading_translations (user_id, lesson_slug, body)
          VALUES ($1, $2, $3) ON CONFLICT (user_id, lesson_slug)
          DO UPDATE SET body = EXCLUDED.body, submitted_at = now()
          RETURNING body, submitted_at AS "submittedAt"`, [userId, slug, body]);
    return respond({ submission: result.rows[0] || null });
  } catch (error) {
    console.error("Reading translation request failed", error);
    return respond({ error: "Your translation could not be saved or loaded. Please try again." }, 500);
  } finally {
    await client.end();
  }
};

export const config = { path: "/api/reading-translations", method: ["GET", "POST"] };
