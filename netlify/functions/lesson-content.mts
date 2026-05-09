import {
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
} from "./_shared/course-auth.mts";

function normalizeLessonSlug(value: unknown) {
  const raw = String(value || "").trim().toLowerCase();
  return /^\d+$/.test(raw) ? `lesson-${raw}` : raw;
}

export default async (request: Request) => {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const slug = normalizeLessonSlug(new URL(request.url).searchParams.get("slug"));

  if (!slug) {
    return jsonResponse({ error: "Lesson slug is required." }, 400);
  }

  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();

    const lessonResult = await client.query(
      `
        SELECT id, slug
        FROM public.lessons
        WHERE slug = $1
        LIMIT 1
      `,
      [slug]
    );
    const [lesson] = lessonResult.rows;

    if (!lesson) {
      return jsonResponse({ error: "Lesson was not found." }, 404);
    }

    const overrideResult = await client.query(
      `
        SELECT content, version, updated_at
        FROM public.lesson_content_overrides
        WHERE lesson_id = $1
        LIMIT 1
      `,
      [lesson.id]
    );
    const [override] = overrideResult.rows;

    if (!override) {
      return jsonResponse({
        ok: true,
        slug: lesson.slug,
        hasOverride: false,
      });
    }

    return jsonResponse({
      ok: true,
      slug: lesson.slug,
      hasOverride: true,
      content: override.content,
      version: override.version,
      updatedAt: override.updated_at,
    });
  } catch (error) {
    console.error("Failed to load lesson content", error);
    return jsonResponse({ error: "Failed to load lesson content" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/lesson-content",
  method: ["GET"],
};
