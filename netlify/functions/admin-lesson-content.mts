import {
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
  normalizeEmail,
} from "./_shared/course-auth.mts";

type LessonContentRequest = {
  email?: string;
  activeRole?: string;
  content?: unknown;
  note?: string;
};

type ValidationResult = {
  valid: boolean;
  errors: string[];
};

type DatabaseClient = ReturnType<typeof createDatabaseClient>;

function normalizeLessonSlug(value: unknown) {
  const raw = String(value || "").trim().toLowerCase();
  return /^\d+$/.test(raw) ? `lesson-${raw}` : raw;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function validateString(value: unknown, path: string, errors: string[]) {
  if (value !== undefined && typeof value !== "string") {
    errors.push(`${path} must be a string.`);
  }
}

function validateStringArray(value: unknown, path: string, errors: string[]) {
  if (value === undefined) {
    return;
  }

  if (!Array.isArray(value)) {
    errors.push(`${path} must be an array.`);
    return;
  }

  value.forEach((item, index) => validateString(item, `${path}[${index}]`, errors));
}

function validateGreekEnglishRows(value: unknown, path: string, errors: string[]) {
  if (value === undefined) {
    return;
  }

  if (!Array.isArray(value)) {
    errors.push(`${path} must be an array.`);
    return;
  }

  value.forEach((row, index) => {
    if (!isRecord(row)) {
      errors.push(`${path}[${index}] must be an object.`);
      return;
    }

    validateString(row.greek, `${path}[${index}].greek`, errors);
    validateString(row.english, `${path}[${index}].english`, errors);
  });
}

function optionalText(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function buildReadingNotesMarkdown(reading: Record<string, unknown>): string | null {
  const sections: string[] = [];

  if (Array.isArray(reading.introduction)) {
    const introduction = reading.introduction
      .filter((paragraph): paragraph is string => typeof paragraph === "string" && Boolean(paragraph.trim()))
      .map((paragraph) => paragraph.trim())
      .join("\n\n");

    if (introduction) {
      sections.push(`## Introduction\n\n${introduction}`);
    }
  }

  if (Array.isArray(reading.paragraphs)) {
    const glossSections = reading.paragraphs
      .map((paragraph, paragraphIndex) => {
        if (!isRecord(paragraph) || !Array.isArray(paragraph.gloss)) {
          return "";
        }

        const rows = paragraph.gloss
          .filter(isRecord)
          .map((entry) => {
            const greek = optionalText(entry.greek);
            const english = optionalText(entry.english);

            if (!greek && !english) {
              return "";
            }

            if (greek && english) {
              return `- **${greek}** - ${english}`;
            }

            return `- ${greek || english}`;
          })
          .filter(Boolean);

        return rows.length ? `### Paragraph ${paragraphIndex + 1}\n\n${rows.join("\n")}` : "";
      })
      .filter(Boolean);

    if (glossSections.length) {
      sections.push(`## Glosses\n\n${glossSections.join("\n\n")}`);
    }
  }

  return sections.length ? sections.join("\n\n") : null;
}

function validateLessonContent(content: unknown): ValidationResult {
  const errors: string[] = [];

  if (!isRecord(content)) {
    return {
      valid: false,
      errors: ["Lesson content must be an object."],
    };
  }

  validateString(content.title, "title", errors);
  validateString(content.greekTitle, "greekTitle", errors);

  if (content.banner !== undefined) {
    if (!isRecord(content.banner)) {
      errors.push("banner must be an object.");
    } else {
      validateString(content.banner.image, "banner.image", errors);
      validateString(content.banner.text, "banner.text", errors);
      validateString(content.banner.caption, "banner.caption", errors);
      validateString(content.banner.alt, "banner.alt", errors);
    }
  }

  if (content.vocabulary !== undefined) {
    if (!Array.isArray(content.vocabulary)) {
      errors.push("vocabulary must be an array.");
    } else {
      content.vocabulary.forEach((group, groupIndex) => {
        if (!isRecord(group)) {
          errors.push(`vocabulary[${groupIndex}] must be an object.`);
          return;
        }

        validateString(group.category, `vocabulary[${groupIndex}].category`, errors);

        if (group.items !== undefined && !Array.isArray(group.items)) {
          errors.push(`vocabulary[${groupIndex}].items must be an array.`);
          return;
        }

        (group.items as unknown[] | undefined)?.forEach((item, itemIndex) => {
          if (!isRecord(item)) {
            errors.push(`vocabulary[${groupIndex}].items[${itemIndex}] must be an object.`);
            return;
          }

          validateString(item.greek, `vocabulary[${groupIndex}].items[${itemIndex}].greek`, errors);
          validateString(item.english, `vocabulary[${groupIndex}].items[${itemIndex}].english`, errors);
          validateString(item.audioUrl, `vocabulary[${groupIndex}].items[${itemIndex}].audioUrl`, errors);
        });
      });
    }
  }

  if (content.reading !== undefined) {
    if (!isRecord(content.reading)) {
      errors.push("reading must be an object.");
    } else {
      validateString(content.reading.title, "reading.title", errors);
      validateString(content.reading.translation, "reading.translation", errors);
      validateString(content.reading.notesMarkdown, "reading.notesMarkdown", errors);
      validateString(content.reading.sourceCitation, "reading.sourceCitation", errors);

      if (content.reading.paragraphs !== undefined && !Array.isArray(content.reading.paragraphs)) {
        errors.push("reading.paragraphs must be an array.");
      }

      (content.reading.paragraphs as unknown[] | undefined)?.forEach((paragraph, paragraphIndex) => {
        if (!isRecord(paragraph)) {
          errors.push(`reading.paragraphs[${paragraphIndex}] must be an object.`);
          return;
        }

        validateString(paragraph.greek, `reading.paragraphs[${paragraphIndex}].greek`, errors);
        validateGreekEnglishRows(paragraph.gloss, `reading.paragraphs[${paragraphIndex}].gloss`, errors);
      });
    }
  }

  if (content.wordStudy !== undefined) {
    if (!isRecord(content.wordStudy)) {
      errors.push("wordStudy must be an object.");
    } else {
      validateString(content.wordStudy.label, "wordStudy.label", errors);

      if (content.wordStudy.blocks !== undefined && !Array.isArray(content.wordStudy.blocks)) {
        errors.push("wordStudy.blocks must be an array.");
      }

      (content.wordStudy.blocks as unknown[] | undefined)?.forEach((block, blockIndex) => {
        if (!isRecord(block)) {
          errors.push(`wordStudy.blocks[${blockIndex}] must be an object.`);
          return;
        }

        validateString(block.title, `wordStudy.blocks[${blockIndex}].title`, errors);
        validateStringArray(block.body, `wordStudy.blocks[${blockIndex}].body`, errors);
        validateGreekEnglishRows(block.display, `wordStudy.blocks[${blockIndex}].display`, errors);
        validateStringArray(block.connections, `wordStudy.blocks[${blockIndex}].connections`, errors);
      });
    }
  }

  if (content.grammar !== undefined) {
    if (!isRecord(content.grammar)) {
      errors.push("grammar must be an object.");
    } else {
      validateString(content.grammar.intro, "grammar.intro", errors);

      if (content.grammar.sections !== undefined && !Array.isArray(content.grammar.sections)) {
        errors.push("grammar.sections must be an array.");
      }

      (content.grammar.sections as unknown[] | undefined)?.forEach((section, sectionIndex) => {
        if (!isRecord(section)) {
          errors.push(`grammar.sections[${sectionIndex}] must be an object.`);
          return;
        }

        validateString(section.id, `grammar.sections[${sectionIndex}].id`, errors);
        validateString(section.title, `grammar.sections[${sectionIndex}].title`, errors);
        validateString(section.practiceTopic, `grammar.sections[${sectionIndex}].practiceTopic`, errors);
        validateStringArray(section.body, `grammar.sections[${sectionIndex}].body`, errors);
        validateGreekEnglishRows(section.examples, `grammar.sections[${sectionIndex}].examples`, errors);
      });
    }
  }

  if (content.culture !== undefined) {
    if (!isRecord(content.culture)) {
      errors.push("culture must be an object.");
    } else {
      validateString(content.culture.title, "culture.title", errors);
      validateString(content.culture.image, "culture.image", errors);
      validateString(content.culture.imageUrl, "culture.imageUrl", errors);
      validateString(content.culture.imageAlt, "culture.imageAlt", errors);
      validateStringArray(content.culture.body, "culture.body", errors);

      if (content.culture.questions !== undefined && !Array.isArray(content.culture.questions)) {
        errors.push("culture.questions must be an array.");
      }

      (content.culture.questions as unknown[] | undefined)?.forEach((question, questionIndex) => {
        if (!isRecord(question)) {
          errors.push(`culture.questions[${questionIndex}] must be an object.`);
          return;
        }

        validateString(question.prompt, `culture.questions[${questionIndex}].prompt`, errors);
        validateString(question.answer, `culture.questions[${questionIndex}].answer`, errors);
      });
    }
  }

  if (content.enrichment !== undefined) {
    if (!Array.isArray(content.enrichment)) {
      errors.push("enrichment must be an array.");
    } else {
      content.enrichment.forEach((section, sectionIndex) => {
        if (!isRecord(section)) {
          errors.push(`enrichment[${sectionIndex}] must be an object.`);
          return;
        }

        validateString(section.type, `enrichment[${sectionIndex}].type`, errors);
        validateString(section.title, `enrichment[${sectionIndex}].title`, errors);
        validateString(section.image, `enrichment[${sectionIndex}].image`, errors);
        validateString(section.imageUrl, `enrichment[${sectionIndex}].imageUrl`, errors);
        validateString(section.imageAlt, `enrichment[${sectionIndex}].imageAlt`, errors);
        validateStringArray(section.body, `enrichment[${sectionIndex}].body`, errors);
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

async function syncLessonEnrichment(
  client: DatabaseClient,
  lessonId: string,
  content: unknown
): Promise<{
  segmentCount: number;
  blockCount: number;
} | null> {
  if (!isRecord(content) || !Array.isArray(content.enrichment)) {
    return null;
  }

  const existingSegments = await client.query(
    `
      SELECT id
      FROM public.lesson_segments
      WHERE lesson_id = $1
        AND slug LIKE 'enrichment-%'
    `,
    [lessonId]
  );

  if (existingSegments.rowCount) {
    await client.query(
      `
        DELETE FROM public.lesson_segments
        WHERE lesson_id = $1
          AND slug LIKE 'enrichment-%'
      `,
      [lessonId]
    );
  }

  let segmentCount = 0;
  let blockCount = 0;

  for (const [index, section] of content.enrichment.entries()) {
    if (!isRecord(section)) {
      continue;
    }

    const type = optionalText(section.type) || "Enrichment";
    const title = optionalText(section.title) || type;
    const image = optionalText(section.image) || optionalText(section.imageUrl);
    const imageAlt = optionalText(section.imageAlt);
    const bodyParagraphs = Array.isArray(section.body)
      ? section.body.filter((paragraph): paragraph is string => typeof paragraph === "string" && Boolean(paragraph.trim()))
      : [];
    const bodyMarkdown = bodyParagraphs.map((paragraph) => paragraph.trim()).join("\n\n");
    const sortOrder = 30 + index;

    const segmentResult = await client.query(
      `
        INSERT INTO public.lesson_segments (
          lesson_id,
          slug,
          title,
          body_markdown,
          sort_order
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id
      `,
      [lessonId, `enrichment-${index + 1}`, title, bodyMarkdown || null, sortOrder]
    );
    const segmentId = segmentResult.rows[0].id;
    segmentCount += 1;

    const blockResult = await client.query(
      `
        INSERT INTO public.lesson_content_blocks (
          segment_id,
          block_type,
          title,
          body_markdown,
          content,
          sort_order
        )
        VALUES ($1, 'markdown', $2, $3, $4::jsonb, 0)
        RETURNING id
      `,
      [
        segmentId,
        type,
        bodyMarkdown || null,
        JSON.stringify({
          source: "lesson_content_override",
          kind: "enrichment",
          type,
          image: image
            ? {
                src: image,
                alt: imageAlt || "",
              }
            : null,
        }),
      ]
    );
    blockCount += blockResult.rowCount || 0;
  }

  return {
    segmentCount,
    blockCount,
  };
}

async function syncLessonCulture(
  client: DatabaseClient,
  lessonId: string,
  content: unknown
): Promise<{
  segmentId: string;
  blockCount: number;
} | null> {
  if (!isRecord(content) || !isRecord(content.culture)) {
    return null;
  }

  const culture = content.culture;
  const title = optionalText(culture.title) || "Culture and History";
  const bodyParagraphs = Array.isArray(culture.body)
    ? culture.body.filter((paragraph): paragraph is string => typeof paragraph === "string" && Boolean(paragraph.trim()))
    : [];
  const bodyMarkdown = bodyParagraphs.map((paragraph) => paragraph.trim()).join("\n\n");
  const image = optionalText(culture.image) || optionalText(culture.imageUrl);
  const imageAlt = optionalText(culture.imageAlt);

  const segmentResult = await client.query(
    `
      INSERT INTO public.lesson_segments (
        lesson_id,
        slug,
        title,
        body_markdown,
        sort_order
      )
      VALUES ($1, 'culture', $2, $3, 3)
      ON CONFLICT (lesson_id, slug) DO UPDATE
      SET title = EXCLUDED.title,
          body_markdown = EXCLUDED.body_markdown,
          sort_order = EXCLUDED.sort_order
      RETURNING id
    `,
    [lessonId, title, bodyMarkdown || null]
  );
  const segmentId = segmentResult.rows[0].id;

  await client.query("DELETE FROM public.lesson_content_blocks WHERE segment_id = $1", [segmentId]);

  const blockResult = await client.query(
    `
      INSERT INTO public.lesson_content_blocks (
        segment_id,
        block_type,
        title,
        body_markdown,
        content,
        sort_order
      )
      VALUES ($1, 'markdown', $2, $3, $4::jsonb, 0)
      RETURNING id
    `,
    [
      segmentId,
      title,
      bodyMarkdown || null,
      JSON.stringify({
        source: "lesson_content_override",
        kind: "culture",
        image: image
          ? {
              src: image,
              alt: imageAlt || "",
            }
          : null,
      }),
    ]
  );

  return {
    segmentId,
    blockCount: blockResult.rowCount || 0,
  };
}

async function syncLessonVocabulary(
  client: DatabaseClient,
  lessonId: string,
  content: unknown
): Promise<number> {
  if (!isRecord(content) || !Array.isArray(content.vocabulary)) {
    return 0;
  }

  await client.query("DELETE FROM public.lesson_vocabulary WHERE lesson_id = $1", [lessonId]);

  let sortOrder = 0;

  for (const group of content.vocabulary) {
    if (!isRecord(group) || !Array.isArray(group.items)) {
      continue;
    }

    const category = typeof group.category === "string" ? group.category.trim() : null;

    for (const item of group.items) {
      if (!isRecord(item)) {
        continue;
      }

      const greek = typeof item.greek === "string" ? item.greek.trim() : "";
      const english = typeof item.english === "string" ? item.english.trim() : "";
      const audioUrl = typeof item.audioUrl === "string" && item.audioUrl.trim() ? item.audioUrl.trim() : null;

      if (!greek && !english) {
        continue;
      }

      if (!greek || !english) {
        throw new Error("Vocabulary rows saved to normalized tables must include both Greek and English text.");
      }

      const vocabularyItemResult = await client.query(
        `
          INSERT INTO public.vocabulary_items (
            lemma,
            display_form,
            part_of_speech,
            gloss,
            morphology,
            audio_url
          )
          VALUES ($1, $1, $2, $3, $4::jsonb, $5)
          ON CONFLICT (lemma, display_form, gloss) DO UPDATE
          SET audio_url = COALESCE(EXCLUDED.audio_url, public.vocabulary_items.audio_url),
              updated_at = now()
          RETURNING id
        `,
        [
          greek,
          category,
          english,
          JSON.stringify({
            source: "lesson_content_override",
            category,
          }),
          audioUrl,
        ]
      );
      const vocabularyItemId = vocabularyItemResult.rows[0].id;

      await client.query(
        `
          INSERT INTO public.lesson_vocabulary (
            lesson_id,
            vocabulary_item_id,
            sort_order
          )
          VALUES ($1, $2, $3)
          ON CONFLICT (lesson_id, vocabulary_item_id) DO UPDATE
          SET sort_order = EXCLUDED.sort_order
        `,
        [lessonId, vocabularyItemId, sortOrder]
      );

      sortOrder += 1;
    }
  }

  return sortOrder;
}

async function syncLessonReading(
  client: DatabaseClient,
  lessonId: string,
  content: unknown
): Promise<{
  id: string;
  title: string;
  greekParagraphCount: number;
} | null> {
  if (!isRecord(content) || !isRecord(content.reading)) {
    return null;
  }

  const reading = content.reading;
  const title = optionalText(reading.title) || optionalText(content.title) || "Reading";
  const paragraphs = Array.isArray(reading.paragraphs) ? reading.paragraphs : [];
  const greekParagraphs = paragraphs
    .filter(isRecord)
    .map((paragraph) => optionalText(paragraph.greek))
    .filter((paragraph): paragraph is string => Boolean(paragraph));
  const greekText = greekParagraphs.length ? greekParagraphs.join("\n\n") : null;
  const translation = optionalText(reading.translation);
  const notesMarkdown = optionalText(reading.notesMarkdown) || buildReadingNotesMarkdown(reading);
  const sourceCitation = optionalText(reading.sourceCitation);

  const segmentResult = await client.query(
    `
      SELECT id
      FROM public.lesson_segments
      WHERE lesson_id = $1
      ORDER BY sort_order, slug
      LIMIT 1
    `,
    [lessonId]
  );
  const segmentId = segmentResult.rows[0]?.id || null;

  const existingResult = await client.query(
    `
      SELECT id
      FROM public.readings
      WHERE lesson_id = $1
      ORDER BY sort_order, id
      LIMIT 1
      FOR UPDATE
    `,
    [lessonId]
  );
  const existing = existingResult.rows[0];

  if (existing) {
    const updateResult = await client.query(
      `
        UPDATE public.readings
        SET segment_id = $2,
            title = $3,
            greek_text = $4,
            translation = $5,
            notes_markdown = $6,
            source_citation = $7,
            sort_order = 0
        WHERE id = $1
        RETURNING id, title
      `,
      [existing.id, segmentId, title, greekText, translation, notesMarkdown, sourceCitation]
    );

    return {
      id: updateResult.rows[0].id,
      title: updateResult.rows[0].title,
      greekParagraphCount: greekParagraphs.length,
    };
  }

  const insertResult = await client.query(
    `
      INSERT INTO public.readings (
        lesson_id,
        segment_id,
        title,
        greek_text,
        translation,
        notes_markdown,
        source_citation,
        sort_order
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, 0)
      RETURNING id, title
    `,
    [lessonId, segmentId, title, greekText, translation, notesMarkdown, sourceCitation]
  );

  return {
    id: insertResult.rows[0].id,
    title: insertResult.rows[0].title,
    greekParagraphCount: greekParagraphs.length,
  };
}

async function syncLessonTitles(
  client: DatabaseClient,
  lessonId: string,
  content: unknown
): Promise<{ title: string; greekTitle: string | null } | null> {
  if (!isRecord(content)) {
    return null;
  }

  const title = typeof content.title === "string" ? content.title.trim() : "";

  if (!title) {
    throw new Error("Lesson title saved to the lessons table must include English title text.");
  }

  const banner = isRecord(content.banner) ? content.banner : null;
  const greekTitle =
    typeof content.greekTitle === "string"
      ? content.greekTitle.trim()
      : typeof banner?.text === "string"
        ? banner.text.trim()
        : typeof banner?.caption === "string"
          ? banner.caption.trim()
          : "";

  await client.query(
    `
      UPDATE public.lessons
      SET title = $2,
          greek_title = $3
      WHERE id = $1
    `,
    [lessonId, title, greekTitle || null]
  );

  return {
    title,
    greekTitle: greekTitle || null,
  };
}

export default async (request: Request) => {
  if (request.method !== "PUT") {
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

  let body: LessonContentRequest;

  try {
    body = await request.json();
  } catch (error) {
    return jsonResponse({ error: "Invalid JSON request" }, 400);
  }

  const email = normalizeEmail(body.email || request.headers.get("x-xenophon-user-email"));
  const validation = validateLessonContent(body.content);

  if (!email) {
    return jsonResponse({ error: "Administrator email is required." }, 401);
  }

  if (body.activeRole !== "administrator") {
    return jsonResponse({ error: "Administrator view is required to save lesson content." }, 403);
  }

  if (!validation.valid) {
    return jsonResponse({ error: "Lesson content is malformed.", details: validation.errors }, 400);
  }

  if (isRecord(body.content) && body.content.id !== undefined && body.content.id !== slug) {
    return jsonResponse({ error: "Lesson content id must match the requested lesson slug." }, 400);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();
    await client.query("BEGIN");

    const userResult = await client.query(
      `
        SELECT u.id
        FROM public.users u
        JOIN public.user_roles ur ON ur.user_id = u.id
        WHERE u.email = $1::citext
          AND u.status = 'active'
          AND ur.role_id = 'administrator'
        LIMIT 1
      `,
      [email]
    );
    const [user] = userResult.rows;

    if (!user) {
      await client.query("ROLLBACK");
      return jsonResponse({ error: "Administrator role is required." }, 403);
    }

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
      await client.query("ROLLBACK");
      return jsonResponse({ error: "Lesson was not found." }, 404);
    }

    const previousResult = await client.query(
      `
        SELECT content, version
        FROM public.lesson_content_overrides
        WHERE lesson_id = $1
        FOR UPDATE
      `,
      [lesson.id]
    );
    const previous = previousResult.rows[0];
    const nextVersion = previous ? Number(previous.version) + 1 : 1;

    if (previous) {
      await client.query(
        `
          INSERT INTO public.lesson_content_versions (
            lesson_id,
            content,
            version,
            saved_by_user_id,
            note
          )
          VALUES ($1, $2::jsonb, $3, $4, $5)
        `,
        [
          lesson.id,
          JSON.stringify(previous.content),
          previous.version,
          user.id,
          body.note || `Saved before version ${nextVersion}`,
        ]
      );
    }

    const saveResult = await client.query(
      `
        INSERT INTO public.lesson_content_overrides (
          lesson_id,
          content,
          version,
          updated_by_user_id
        )
        VALUES ($1, $2::jsonb, $3, $4)
        ON CONFLICT (lesson_id) DO UPDATE
        SET content = EXCLUDED.content,
            version = EXCLUDED.version,
            updated_by_user_id = EXCLUDED.updated_by_user_id
        RETURNING content, version, updated_at
      `,
      [lesson.id, JSON.stringify(body.content), nextVersion, user.id]
    );
    const normalizedTitles = await syncLessonTitles(client, lesson.id, body.content);
    const normalizedVocabularyCount = await syncLessonVocabulary(client, lesson.id, body.content);
    const normalizedReading = await syncLessonReading(client, lesson.id, body.content);
    const normalizedCulture = await syncLessonCulture(client, lesson.id, body.content);
    const normalizedEnrichment = await syncLessonEnrichment(client, lesson.id, body.content);

    await client.query("COMMIT");

    return jsonResponse({
      ok: true,
      slug: lesson.slug,
      hasOverride: true,
      content: saveResult.rows[0].content,
      version: saveResult.rows[0].version,
      updatedAt: saveResult.rows[0].updated_at,
      normalizedTitles,
      normalizedVocabularyCount,
      normalizedReading,
      normalizedCulture,
      normalizedEnrichment,
    });
  } catch (error) {
    await client.query("ROLLBACK").catch(() => undefined);

    if (error instanceof Error && error.message.startsWith("Lesson title saved to the lessons table")) {
      return jsonResponse({ error: error.message }, 400);
    }

    if (error instanceof Error && error.message.startsWith("Vocabulary rows saved to normalized tables")) {
      return jsonResponse({ error: error.message }, 400);
    }

    if (error && typeof error === "object" && "code" in error && error.code === "42703") {
      return jsonResponse(
        {
          error: "The lessons.greek_title column is missing. Run npm run db:migrate before saving normalized lesson titles.",
        },
        500
      );
    }

    if (error && typeof error === "object" && "code" in error && error.code === "42P01") {
      return jsonResponse(
        {
          error: "Editable lesson content tables are missing. Run npm run db:migrate before saving lesson edits.",
        },
        500
      );
    }

    console.error("Failed to save lesson content", error);
    return jsonResponse({ error: "Failed to save lesson content" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/admin/lesson-content",
  method: ["PUT"],
};
