import type { Config } from "@netlify/functions";
import {
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
} from "./_shared/course-auth.mts";

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
  lessonRefs: LessonReference[];
};

type DictionaryEntry = {
  key: string;
  lemma: string;
  citation: string;
  meanings: string[];
  definition: string;
  partOfSpeech: string | null;
  source: "vocabulary" | "gloss" | "mixed";
  lessons: LessonReference[];
  audioUrl: string | null;
  completeness: number;
};

const LEADING_ARTICLES = new Map([
  ["ὁ", "ὁ"],
  ["τοῦ", "ὁ"],
  ["τῷ", "ὁ"],
  ["τόν", "ὁ"],
  ["τὸν", "ὁ"],
  ["ἡ", "ἡ"],
  ["τῆς", "ἡ"],
  ["τῇ", "ἡ"],
  ["τήν", "ἡ"],
  ["τὴν", "ἡ"],
  ["τό", "τό"],
  ["τὸ", "τό"],
  ["τοῦ", "τό"],
  ["τῷ", "τό"],
  ["αἱ", "αἱ"],
  ["οἱ", "οἱ"],
  ["τά", "τά"],
  ["τὰ", "τά"],
]);

const GENDER_ARTICLES = new Map([
  ["masculine", "ὁ"],
  ["m", "ὁ"],
  ["feminine", "ἡ"],
  ["f", "ἡ"],
  ["neuter", "τό"],
  ["n", "τό"],
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function textOrNull(value: unknown): string | null {
  const next = text(value);
  return next || null;
}

function asTextArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(text).filter(Boolean);
  }

  return text(value)
    .split(/\s*,\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function itemMorphology(item: Record<string, unknown>) {
  return isRecord(item.morphology) ? item.morphology : {};
}

function normalizeGreek(value: string) {
  return value.normalize("NFC").replace(/\s+/g, " ").trim();
}

function splitCitation(value: string) {
  return normalizeGreek(value)
    .split(/\s*,\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function stripLeadingArticle(value: string) {
  const normalized = normalizeGreek(value);
  const [first, ...rest] = normalized.split(/\s+/);
  const article = LEADING_ARTICLES.get(first);

  if (article && rest.length) {
    return {
      lemma: rest.join(" "),
      article,
    };
  }

  const parts = splitCitation(normalized);
  if (parts.length > 1) {
    const finalPart = parts[parts.length - 1];
    const citationArticle = LEADING_ARTICLES.get(finalPart);

    if (citationArticle) {
      return {
        lemma: parts[0],
        article: citationArticle,
      };
    }
  }

  return {
    lemma: normalized,
    article: null,
  };
}

function normalizedLemmaKey(item: Record<string, unknown>) {
  const raw =
    text(item.lemma) ||
    text(item.display_form) ||
    text(item.displayForm) ||
    text(item.greek);
  const { lemma } = stripLeadingArticle(splitCitation(raw)[0] || raw);
  return normalizeGreek(lemma).toLocaleLowerCase("el-GR");
}

function normalizedPartOfSpeech(value: string | null) {
  const next = String(value || "").trim().toLowerCase();

  if (!next) {
    return null;
  }

  if (next.includes("noun")) {
    return next.includes("proper") ? "proper noun" : "noun";
  }

  if (next.includes("verb")) {
    return "verb";
  }

  if (next.includes("adjective")) {
    return "adjective";
  }

  return next;
}

function itemPartOfSpeech(item: Record<string, unknown>) {
  const morphology = itemMorphology(item);
  return normalizedPartOfSpeech(
    textOrNull(item.part_of_speech) ||
    textOrNull(item.partOfSpeech) ||
    textOrNull(morphology.part_of_speech) ||
    textOrNull(morphology.category)
  );
}

function itemGenderArticle(item: Record<string, unknown>) {
  const morphology = itemMorphology(item);
  const explicitArticle =
    textOrNull(item.article) ||
    textOrNull(morphology.article) ||
    textOrNull(morphology.dictionary_article);

  if (explicitArticle) {
    return explicitArticle;
  }

  const gender = (
    textOrNull(item.gender) ||
    textOrNull(morphology.gender) ||
    textOrNull(morphology.grammatical_gender) ||
    ""
  ).toLowerCase();

  return GENDER_ARTICLES.get(gender) || null;
}

function itemPrincipalParts(item: Record<string, unknown>) {
  const morphology = itemMorphology(item);
  return asTextArray(item.principal_parts).length
    ? asTextArray(item.principal_parts)
    : asTextArray(morphology.principal_parts);
}

function itemDefinition(item: Record<string, unknown>) {
  const morphology = itemMorphology(item);
  return (
    text(item.definition) ||
    text(morphology.definition) ||
    text(item.gloss) ||
    text(item.english)
  );
}

function splitMeanings(definition: string) {
  return definition
    .split(/\s*(?:;|,)\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniqueBy<T>(items: T[], keyFn: (item: T) => string) {
  const seen = new Set<string>();
  const unique: T[] = [];

  items.forEach((item) => {
    const key = keyFn(item);

    if (!seen.has(key)) {
      seen.add(key);
      unique.push(item);
    }
  });

  return unique;
}

function buildCitation(item: Record<string, unknown>) {
  const morphology = itemMorphology(item);
  const dictionaryForm =
    text(item.dictionary_form) ||
    text(item.dictionaryForm) ||
    text(morphology.dictionary_form) ||
    text(morphology.citation_form);

  if (dictionaryForm) {
    return dictionaryForm;
  }

  const rawLemma =
    text(item.lemma) ||
    text(item.display_form) ||
    text(item.displayForm) ||
    text(item.greek);
  const parsed = stripLeadingArticle(rawLemma);
  const displayParsed = stripLeadingArticle(text(item.display_form) || text(item.displayForm) || rawLemma);
  const lemma = parsed.lemma || displayParsed.lemma || rawLemma;
  const article = itemGenderArticle(item) || parsed.article || displayParsed.article;
  const partOfSpeech = itemPartOfSpeech(item);

  if (partOfSpeech === "verb") {
    const principalParts = itemPrincipalParts(item);
    return principalParts.length ? principalParts.join(", ") : lemma;
  }

  if (partOfSpeech === "adjective") {
    const feminine =
      text(item.feminine_form) ||
      text(item.feminineForm) ||
      text(morphology.feminine_form) ||
      text(morphology.feminine);
    const neuter =
      text(item.neuter_form) ||
      text(item.neuterForm) ||
      text(morphology.neuter_form) ||
      text(morphology.neuter);
    return [lemma, feminine, neuter].filter(Boolean).join(", ");
  }

  if (partOfSpeech === "noun" || partOfSpeech === "proper noun" || article) {
    const genitive =
      text(item.genitive_form) ||
      text(item.genitiveForm) ||
      text(morphology.genitive_form) ||
      text(morphology.genitive);
    return [lemma, genitive, article].filter(Boolean).join(", ");
  }

  return splitCitation(rawLemma).join(", ") || lemma;
}

function completenessScore(row: DictionaryRow) {
  const item = row.item;
  const morphology = itemMorphology(item);
  const has = (value: unknown) => Boolean(text(value)) || (Array.isArray(value) && value.length > 0);
  let score = row.source === "vocabulary" ? 100 : 0;

  [
    item.dictionary_form,
    item.definition,
    item.part_of_speech,
    item.article,
    item.gender,
    item.genitive_form,
    item.feminine_form,
    item.neuter_form,
    item.principal_parts,
    morphology.dictionary_form,
    morphology.citation_form,
    morphology.principal_parts,
    morphology.genitive,
    morphology.gender,
  ].forEach((value) => {
    if (has(value)) {
      score += 5;
    }
  });

  return score;
}

function normalizeLessonRefs(value: unknown): LessonReference[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(isRecord).map((row) => ({
    slug: text(row.slug),
    numberLabel: text(row.numberLabel) || text(row.number_label),
    title: text(row.title),
    moduleSortOrder: Number(row.moduleSortOrder ?? row.module_sort_order ?? 0),
    lessonSortOrder: Number(row.lessonSortOrder ?? row.lesson_sort_order ?? 0),
  }));
}

function lessonRefKey(lesson: LessonReference) {
  return lesson.slug || `${lesson.numberLabel}:${lesson.title}`;
}

function sortLessons(lessons: LessonReference[]) {
  return [...lessons].sort((a, b) => (
    a.moduleSortOrder - b.moduleSortOrder ||
    a.lessonSortOrder - b.lessonSortOrder ||
    a.numberLabel.localeCompare(b.numberLabel, "en")
  ));
}

function consolidateRows(rows: DictionaryRow[]) {
  const entries = new Map<string, DictionaryEntry>();

  rows.forEach((row) => {
    const key = normalizedLemmaKey(row.item);

    if (!key) {
      return;
    }

    const definition = itemDefinition(row.item);

    if (!definition) {
      return;
    }

    const rawLemma =
      stripLeadingArticle(
        text(row.item.lemma) ||
        text(row.item.display_form) ||
        text(row.item.displayForm) ||
        text(row.item.greek)
      ).lemma || key;
    const meanings = splitMeanings(definition);
    const score = completenessScore(row);
    const existing = entries.get(key);
    const lessonRefs = normalizeLessonRefs(row.lessonRefs);

    if (!existing) {
      entries.set(key, {
        key,
        lemma: rawLemma,
        citation: buildCitation(row.item),
        meanings,
        definition: meanings.join(", "),
        partOfSpeech: itemPartOfSpeech(row.item),
        source: row.source,
        lessons: sortLessons(uniqueBy(lessonRefs, lessonRefKey)),
        audioUrl: textOrNull(row.item.audio_url),
        completeness: score,
      });
      return;
    }

    meanings.forEach((meaning) => {
      if (!existing.meanings.some((item) => item.toLocaleLowerCase("en-US") === meaning.toLocaleLowerCase("en-US"))) {
        existing.meanings.push(meaning);
      }
    });

    existing.definition = existing.meanings.join(", ");
    existing.lessons = sortLessons(uniqueBy([...existing.lessons, ...lessonRefs], lessonRefKey));
    existing.source = existing.source === row.source ? existing.source : "mixed";

    if (!existing.audioUrl) {
      existing.audioUrl = textOrNull(row.item.audio_url);
    }

    if (score > existing.completeness) {
      existing.lemma = rawLemma;
      existing.citation = buildCitation(row.item);
      existing.partOfSpeech = itemPartOfSpeech(row.item) || existing.partOfSpeech;
      existing.completeness = score;
    }
  });

  return Array.from(entries.values())
    .map(({ completeness, ...entry }) => entry)
    .sort((a, b) => a.lemma.localeCompare(b.lemma, "el-GR"));
}

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
    lessonRefs: normalizeLessonRefs(row.lesson_refs),
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
    lessonRefs: normalizeLessonRefs(row.lesson_refs),
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
    lessonRefs: normalizeLessonRefs(row.lesson_refs),
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
