import type { Config } from "@netlify/functions";
import {
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
} from "./_shared/course-auth.mts";
import { consolidateRows } from "./_shared/dictionary-core.mjs";

type DatabaseClient = ReturnType<typeof createDatabaseClient>;

type LessonReference = {
  slug: string;
  numberLabel: string;
  title: string;
  moduleSortOrder: number;
  lessonSortOrder: number;
};

type DictionaryRow = {
  id: string;
  source: "vocabulary";
  item: Record<string, unknown>;
  lessonRefs: LessonReference[] | unknown;
};

async function getVocabularyRows(client: DatabaseClient): Promise<DictionaryRow[]> {
  const result = await client.query(
    `
      SELECT
        vi.id,
        to_jsonb(vi) AS item,
        COALESCE(
          jsonb_agg(
            DISTINCT jsonb_build_object(
              'slug', l.slug,
              'numberLabel', l.number_label,
              'title', l.title,
              'moduleSortOrder', m.sort_order,
              'lessonSortOrder', l.sort_order
            )
          ) FILTER (WHERE l.id IS NOT NULL),
          '[]'::jsonb
        ) AS lesson_refs
      FROM public.vocabulary_items vi
      JOIN public.lesson_vocabulary lv ON lv.vocabulary_item_id = vi.id
      JOIN public.lessons l ON l.id = lv.lesson_id
      JOIN public.modules m ON m.id = l.module_id
      GROUP BY vi.id
      ORDER BY vi.lemma, vi.display_form
    `
  );

  return result.rows.map((row) => ({
    id: row.id,
    source: "vocabulary",
    item: row.item,
    lessonRefs: row.lesson_refs,
  }));
}

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
    const vocabularyRows = await getVocabularyRows(client);
    const entries = consolidateRows(vocabularyRows);

    return jsonResponse({
      ok: true,
      generatedAt: new Date().toISOString(),
      source: {
        vocabularyRows: vocabularyRows.length,
        glossRows: 0,
      },
      entries,
    });
  } catch (error) {
    console.error("Failed to load dictionary", error);
    return jsonResponse({ error: "Failed to load dictionary" }, 500);
  } finally {
    await client.end();
  }
};

export const config: Config = {
  path: "/api/dictionary",
  method: ["GET"],
};
