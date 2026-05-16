import {
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
} from "./_shared/course-auth.mts";

type DatabaseClient = ReturnType<typeof createDatabaseClient>;

type LessonRow = {
  id: string;
  slug: string;
  number_label: string;
  title: string;
  greek_title: string | null;
  grammar_focus: string | null;
  module_label: string;
  module_title: string;
  module_sort_order: number;
  lesson_sort_order: number;
};

function normalizeLessonSlug(value: unknown) {
  const raw = String(value || "").trim().toLowerCase();
  return /^\d+$/.test(raw) ? `lesson-${raw}` : raw;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function lessonNumberFromLabel(value: string) {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : null;
}

function defaultPages(lessonSlug: string) {
  return [
    { page: 1, slug: `${lessonSlug}-page-1`, title: "Reading", template: "reading", showTranslation: false },
    { page: 2, slug: `${lessonSlug}-page-2`, title: "Language Study", template: "grammar" },
    { page: 3, slug: `${lessonSlug}-page-3`, title: "Greek World / Review / Quiz", template: "culture" },
  ];
}

function mergeContent(base: unknown, patch: Record<string, unknown>) {
  const content = isRecord(base) ? { ...base } : {};

  Object.entries(patch).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      content[key] = value;
    }
  });

  return content;
}

async function getLegacyPublishedContent(client: DatabaseClient, lessonId: string) {
  const result = await client.query(
    `
      SELECT content, version, updated_at
      FROM public.lesson_content_overrides
      WHERE lesson_id = $1
      LIMIT 1
    `,
    [lessonId]
  );

  return result.rows[0] || null;
}

async function getLessonRow(client: DatabaseClient, slug: string): Promise<LessonRow | null> {
  const result = await client.query(
    `
      SELECT
        l.id,
        l.slug,
        l.number_label,
        l.title,
        l.greek_title,
        l.grammar_focus,
        l.sort_order AS lesson_sort_order,
        m.label AS module_label,
        m.title AS module_title,
        m.sort_order AS module_sort_order
      FROM public.lessons l
      JOIN public.modules m ON m.id = l.module_id
      WHERE l.slug = $1
      LIMIT 1
    `,
    [slug]
  );

  return result.rows[0] || null;
}

async function getPages(client: DatabaseClient, lesson: LessonRow, legacyContent: unknown) {
  if (isRecord(legacyContent) && Array.isArray(legacyContent.pages) && legacyContent.pages.length) {
    return legacyContent.pages;
  }

  const result = await client.query(
    `
      SELECT slug, title, sort_order
      FROM public.lesson_segments
      WHERE lesson_id = $1
        AND slug <> 'lesson-start'
      ORDER BY sort_order, slug
    `,
    [lesson.id]
  );

  if (!result.rows.length) {
    return defaultPages(lesson.slug);
  }

  return result.rows.slice(0, 3).map((row, index) => ({
    page: index + 1,
    slug: row.slug,
    title: row.title,
    template: index === 0 ? "reading" : index === 1 ? "grammar" : "culture",
    ...(index === 0 ? { showTranslation: false } : {}),
  }));
}

async function getVocabulary(client: DatabaseClient, lessonId: string) {
  const result = await client.query(
    `
      SELECT
        lv.sort_order,
        vi.display_form,
        vi.gloss,
        vi.part_of_speech,
        vi.audio_url
      FROM public.lesson_vocabulary lv
      JOIN public.vocabulary_items vi ON vi.id = lv.vocabulary_item_id
      WHERE lv.lesson_id = $1
      ORDER BY lv.sort_order, vi.display_form
    `,
    [lessonId]
  );

  const groups = new Map<string, Array<Record<string, string>>>();

  result.rows.forEach((row) => {
    const category = row.part_of_speech || "Vocabulary";
    const items = groups.get(category) || [];
    items.push({
      greek: row.display_form,
      english: row.gloss,
      ...(row.audio_url ? { audioUrl: row.audio_url } : {}),
    });
    groups.set(category, items);
  });

  return Array.from(groups, ([category, items]) => ({ category, items }));
}

function splitParagraphs(value: string | null) {
  return String(value || "")
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

async function getReading(client: DatabaseClient, lessonId: string) {
  const result = await client.query(
    `
      SELECT title, greek_text, translation, notes_markdown, source_citation
      FROM public.readings
      WHERE lesson_id = $1
      ORDER BY sort_order, id
      LIMIT 1
    `,
    [lessonId]
  );
  const reading = result.rows[0];

  if (!reading) {
    return null;
  }

  return {
    title: reading.title,
    paragraphs: splitParagraphs(reading.greek_text).map((greek) => ({ greek, gloss: [] })),
    translation: reading.translation || "",
    notesMarkdown: reading.notes_markdown || "",
    sourceCitation: reading.source_citation || "",
  };
}

async function getPublishedBlocks(client: DatabaseClient, lessonId: string) {
  const result = await client.query(
    `
      SELECT b.content
      FROM public.lesson_segments s
      JOIN public.lesson_content_blocks b ON b.segment_id = s.id
      WHERE s.lesson_id = $1
        AND b.content->>'source' = 'lesson_publish'
      ORDER BY s.sort_order, b.sort_order
    `,
    [lessonId]
  );

  const blocks = new Map<string, unknown>();

  result.rows.forEach((row) => {
    const content = row.content;
    if (isRecord(content) && typeof content.kind === "string" && "value" in content) {
      blocks.set(content.kind, content.value);
    }
  });

  return blocks;
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

    const lesson = await getLessonRow(client, slug);

    if (!lesson) {
      return jsonResponse({ error: "Lesson was not found." }, 404);
    }

    const legacy = await getLegacyPublishedContent(client, lesson.id);
    const legacyContent = legacy?.content || null;
    const pages = await getPages(client, lesson, legacyContent);
    const vocabulary = await getVocabulary(client, lesson.id);
    const reading = await getReading(client, lesson.id);
    const publishedBlocks = await getPublishedBlocks(client, lesson.id);

    const assembled = mergeContent(legacyContent, {
      id: lesson.slug,
      number: lessonNumberFromLabel(lesson.number_label),
      title: lesson.title,
      greekTitle: lesson.greek_title || undefined,
      scope: lesson.grammar_focus || undefined,
      module: `${lesson.module_label} · ${lesson.module_title}`,
      pages,
      vocabulary: vocabulary.length ? vocabulary : undefined,
      reading: publishedBlocks.get("reading") || reading || undefined,
      wordStudy: publishedBlocks.get("wordStudy") || undefined,
      grammar: publishedBlocks.get("grammar") || undefined,
      culture: publishedBlocks.get("culture") || undefined,
      enrichment: publishedBlocks.get("enrichment") || undefined,
      activities: publishedBlocks.get("activities") || undefined,
    });

    return jsonResponse({
      ok: true,
      slug: lesson.slug,
      source: "canonical_database",
      hasPublishedContent: true,
      legacyOverrideVersion: legacy?.version || null,
      legacyOverrideUpdatedAt: legacy?.updated_at || null,
      content: assembled,
    });
  } catch (error) {
    console.error("Failed to assemble lesson content", error);
    return jsonResponse({ error: "Failed to assemble lesson content" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/lesson-content",
  method: ["GET"],
};
