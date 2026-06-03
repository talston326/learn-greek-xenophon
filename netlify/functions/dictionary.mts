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
  source: "vocabulary" | "gloss";
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
      LEFT JOIN public.lesson_vocabulary lv ON lv.vocabulary_item_id = vi.id
      LEFT JOIN public.lessons l ON l.id = lv.lesson_id
      LEFT JOIN public.modules m ON m.id = l.module_id
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

async function getGlossRows(client: DatabaseClient): Promise<DictionaryRow[]> {
  const tableResult = await client.query("SELECT to_regclass('public.reading_glosses') AS table_name");

  if (!tableResult.rows[0]?.table_name) {
    return [];
  }

  const result = await client.query(
    `
      SELECT
        rg.id,
        to_jsonb(rg) AS item,
        jsonb_build_array(
          jsonb_build_object(
            'slug', l.slug,
            'numberLabel', l.number_label,
            'title', l.title,
            'moduleSortOrder', m.sort_order,
            'lessonSortOrder', l.sort_order
          )
        ) AS lesson_refs
      FROM public.reading_glosses rg
      JOIN public.lessons l ON l.id = rg.lesson_id
      JOIN public.modules m ON m.id = l.module_id
      ORDER BY rg.greek, rg.english
    `
  );

  return result.rows.map((row) => ({
    id: row.id,
    source: "gloss",
    item: row.item,
    lessonRefs: row.lesson_refs,
  }));
}

async function getPublishedReadingGlossRows(client: DatabaseClient): Promise<DictionaryRow[]> {
  const result = await client.query(
    `
      SELECT
        CONCAT(o.lesson_id::text, ':', paragraph.ordinality::text, ':', gloss.ordinality::text) AS id,
        jsonb_strip_nulls(
          jsonb_build_object(
            'lemma', COALESCE(gloss.item->>'lemma', gloss.item->>'greek'),
            'display_form', COALESCE(gloss.item->>'displayForm', gloss.item->>'display_form', gloss.item->>'greek'),
            'greek', gloss.item->>'greek',
            'english', gloss.item->>'english',
            'part_of_speech', COALESCE(gloss.item->>'partOfSpeech', gloss.item->>'part_of_speech', gloss.item->>'category'),
            'morphology', jsonb_build_object(
              'source', 'lesson_content_override',
              'paragraph', paragraph.ordinality
            )
          )
        ) AS item,
        jsonb_build_array(
          jsonb_build_object(
            'slug', l.slug,
            'numberLabel', l.number_label,
            'title', l.title,
            'moduleSortOrder', m.sort_order,
            'lessonSortOrder', l.sort_order
          )
        ) AS lesson_refs
      FROM public.lesson_content_overrides o
      JOIN public.lessons l ON l.id = o.lesson_id
      JOIN public.modules m ON m.id = l.module_id
      CROSS JOIN LATERAL jsonb_array_elements(
        CASE
          WHEN jsonb_typeof(o.content #> '{reading,paragraphs}') = 'array'
            THEN o.content #> '{reading,paragraphs}'
          ELSE '[]'::jsonb
        END
      ) WITH ORDINALITY AS paragraph(item, ordinality)
      CROSS JOIN LATERAL jsonb_array_elements(
        CASE
          WHEN jsonb_typeof(paragraph.item->'gloss') = 'array'
            THEN paragraph.item->'gloss'
          ELSE '[]'::jsonb
        END
      ) WITH ORDINALITY AS gloss(item, ordinality)
      WHERE COALESCE(gloss.item->>'greek', '') <> ''
        AND COALESCE(gloss.item->>'english', '') <> ''
      ORDER BY gloss.item->>'greek', gloss.item->>'english'
    `
  );

  return result.rows.map((row) => ({
    id: row.id,
    source: "gloss",
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
    const glossRows = [
      ...(await getGlossRows(client)),
      ...(await getPublishedReadingGlossRows(client)),
    ];
    const entries = consolidateRows([...vocabularyRows, ...glossRows]);

    return jsonResponse({
      ok: true,
      generatedAt: new Date().toISOString(),
      source: {
        vocabularyRows: vocabularyRows.length,
        glossRows: glossRows.length,
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
