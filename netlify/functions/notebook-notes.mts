import {
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
  normalizeEmail,
} from "./_shared/course-auth.mts";

const MAX_TITLE_LENGTH = 160;
const MAX_BODY_LENGTH = 100000;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type NotebookRequest = {
  email?: unknown;
  noteId?: unknown;
  title?: unknown;
  body?: unknown;
};

function notebookResponse(body: unknown, status = 200) {
  const response = jsonResponse(body, status);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

function normalizeTitle(value: unknown) {
  return String(value ?? "").trim().normalize("NFC");
}

function normalizeNoteBody(value: unknown) {
  return String(value ?? "").normalize("NFC");
}

function validateNoteId(value: unknown) {
  const noteId = String(value ?? "").trim();
  return UUID_PATTERN.test(noteId) ? noteId : "";
}

function validateNote(title: string, body: string) {
  if (!title) {
    return "A note title is required.";
  }

  if (title.length > MAX_TITLE_LENGTH) {
    return `Note titles must be ${MAX_TITLE_LENGTH} characters or fewer.`;
  }

  if (body.length > MAX_BODY_LENGTH) {
    return `Notes must be ${MAX_BODY_LENGTH.toLocaleString("en-US")} characters or fewer.`;
  }

  return "";
}

async function findActiveUserId(
  client: ReturnType<typeof createDatabaseClient>,
  email: string
) {
  const result = await client.query(
    `
      SELECT id
      FROM public.users
      WHERE email = $1::citext
        AND status = 'active'
      LIMIT 1
    `,
    [email]
  );

  return result.rows[0]?.id || null;
}

async function readJsonRequest(request: Request) {
  try {
    return (await request.json()) as NotebookRequest;
  } catch (error) {
    return null;
  }
}

export default async (request: Request) => {
  const connectionString = getConnectionString();

  if (!connectionString) {
    return notebookResponse({ error: "Database is not configured." }, 500);
  }

  const url = new URL(request.url);
  let payload: NotebookRequest = {};

  if (request.method === "POST" || request.method === "PUT") {
    const parsedPayload = await readJsonRequest(request);

    if (!parsedPayload) {
      return notebookResponse({ error: "Invalid JSON request." }, 400);
    }

    payload = parsedPayload;
  }

  const email = normalizeEmail(
    request.method === "GET" || request.method === "DELETE"
      ? url.searchParams.get("email")
      : payload.email
  );

  if (!email) {
    return notebookResponse({ error: "A signed-in user is required." }, 400);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();
    const userId = await findActiveUserId(client, email);

    if (!userId) {
      return notebookResponse({ error: "No active user was found." }, 404);
    }

    if (request.method === "GET") {
      const requestedId = url.searchParams.get("id");

      if (requestedId) {
        const noteId = validateNoteId(requestedId);

        if (!noteId) {
          return notebookResponse({ error: "The note identifier is invalid." }, 400);
        }

        const noteResult = await client.query(
          `
            SELECT
              id,
              title,
              body,
              created_at AS "createdAt",
              updated_at AS "updatedAt"
            FROM public.user_notebook_notes
            WHERE id = $1
              AND user_id = $2
            LIMIT 1
          `,
          [noteId, userId]
        );
        const note = noteResult.rows[0];

        if (!note) {
          return notebookResponse({ error: "Note not found." }, 404);
        }

        return notebookResponse({ note });
      }

      const notesResult = await client.query(
        `
          SELECT
            id,
            title,
            left(regexp_replace(body, '[[:space:]]+', ' ', 'g'), 150) AS preview,
            char_length(body)::int AS "bodyLength",
            created_at AS "createdAt",
            updated_at AS "updatedAt"
          FROM public.user_notebook_notes
          WHERE user_id = $1
          ORDER BY updated_at DESC, title
        `,
        [userId]
      );

      return notebookResponse({ notes: notesResult.rows });
    }

    if (request.method === "POST") {
      const title = normalizeTitle(payload.title);
      const body = normalizeNoteBody(payload.body);
      const validationError = validateNote(title, body);

      if (validationError) {
        return notebookResponse({ error: validationError }, 400);
      }

      const noteResult = await client.query(
        `
          INSERT INTO public.user_notebook_notes (user_id, title, body)
          VALUES ($1, $2, $3)
          RETURNING
            id,
            title,
            body,
            created_at AS "createdAt",
            updated_at AS "updatedAt"
        `,
        [userId, title, body]
      );

      return notebookResponse({ note: noteResult.rows[0] }, 201);
    }

    if (request.method === "PUT") {
      const noteId = validateNoteId(payload.noteId);
      const title = normalizeTitle(payload.title);
      const body = normalizeNoteBody(payload.body);

      if (!noteId) {
        return notebookResponse({ error: "The note identifier is invalid." }, 400);
      }

      const validationError = validateNote(title, body);

      if (validationError) {
        return notebookResponse({ error: validationError }, 400);
      }

      const noteResult = await client.query(
        `
          UPDATE public.user_notebook_notes
          SET title = $3,
              body = $4
          WHERE id = $1
            AND user_id = $2
          RETURNING
            id,
            title,
            body,
            created_at AS "createdAt",
            updated_at AS "updatedAt"
        `,
        [noteId, userId, title, body]
      );
      const note = noteResult.rows[0];

      if (!note) {
        return notebookResponse({ error: "Note not found." }, 404);
      }

      return notebookResponse({ note });
    }

    if (request.method === "DELETE") {
      const noteId = validateNoteId(url.searchParams.get("id"));

      if (!noteId) {
        return notebookResponse({ error: "The note identifier is invalid." }, 400);
      }

      const deleteResult = await client.query(
        `
          DELETE FROM public.user_notebook_notes
          WHERE id = $1
            AND user_id = $2
          RETURNING id
        `,
        [noteId, userId]
      );

      if (!deleteResult.rows[0]) {
        return notebookResponse({ error: "Note not found." }, 404);
      }

      return notebookResponse({ deletedId: deleteResult.rows[0].id });
    }

    return notebookResponse({ error: "Method not allowed." }, 405);
  } catch (error) {
    const databaseError = error as { code?: string };

    if (databaseError.code === "23505") {
      return notebookResponse(
        { error: "You already have a note with that title. Choose a different title." },
        409
      );
    }

    if (databaseError.code === "23514") {
      return notebookResponse({ error: "The note does not meet the saved-note limits." }, 400);
    }

    console.error("Failed to handle notebook request", error);
    return notebookResponse({ error: "The notebook request could not be completed." }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/notebook-notes",
  method: ["GET", "POST", "PUT", "DELETE"],
};
