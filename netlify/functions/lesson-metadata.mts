import {
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
} from "./_shared/course-auth.mts";

type LessonMetadataRow = {
  course_id: string;
  course_code: string;
  course_title: string;
  course_term: string | null;
  module_slug: string;
  module_label: string;
  module_title: string;
  module_subtitle: string | null;
  module_description: string | null;
  module_type: string;
  module_sort_order: number;
  lesson_slug: string;
  number_label: string;
  lesson_title: string;
  greek_title: string | null;
  grammar_focus: string | null;
  page_url: string | null;
  lesson_sort_order: number;
  is_published: boolean;
};

type ModuleMetadata = {
  id: string;
  label: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  type: string;
  sortOrder: number;
  lessons: Array<{
    id: string;
    number: string;
    title: string;
    greekTitle: string | null;
    grammar: string | null;
    pageUrl: string | null;
    sortOrder: number;
    isPublished: boolean;
  }>;
};

export default async (request: Request) => {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();

    const result = await client.query<LessonMetadataRow>(
      `
        SELECT
          c.id AS course_id,
          c.code AS course_code,
          c.title AS course_title,
          c.term AS course_term,
          m.slug AS module_slug,
          m.label AS module_label,
          m.title AS module_title,
          m.subtitle AS module_subtitle,
          m.description AS module_description,
          m.module_type,
          m.sort_order AS module_sort_order,
          l.slug AS lesson_slug,
          l.number_label,
          l.title AS lesson_title,
          l.greek_title,
          l.grammar_focus,
          l.page_url,
          l.sort_order AS lesson_sort_order,
          l.is_published
        FROM public.courses c
        JOIN public.modules m ON m.course_id = c.id
        JOIN public.lessons l ON l.module_id = m.id
        ORDER BY c.code, c.term NULLS LAST, m.sort_order, l.sort_order, l.number_label
      `
    );

    const firstRow = result.rows[0];
    const modules = new Map<string, ModuleMetadata>();

    result.rows.forEach((row) => {
      if (!modules.has(row.module_slug)) {
        modules.set(row.module_slug, {
          id: row.module_slug,
          label: row.module_label,
          title: row.module_title,
          subtitle: row.module_subtitle,
          description: row.module_description,
          type: row.module_type,
          sortOrder: row.module_sort_order,
          lessons: [],
        });
      }

      modules.get(row.module_slug)?.lessons.push({
        id: row.lesson_slug,
        number: row.number_label,
        title: row.lesson_title,
        greekTitle: row.greek_title,
        grammar: row.grammar_focus,
        pageUrl: row.page_url,
        sortOrder: row.lesson_sort_order,
        isPublished: row.is_published,
      });
    });

    return jsonResponse({
      ok: true,
      course: firstRow
        ? {
            id: firstRow.course_id,
            code: firstRow.course_code,
            title: firstRow.course_title,
            term: firstRow.course_term,
          }
        : null,
      modules: Array.from(modules.values()),
    });
  } catch (error) {
    console.error("Failed to load lesson metadata", error);
    return jsonResponse({ error: "Failed to load lesson metadata" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/lesson-metadata",
  method: ["GET"],
};
