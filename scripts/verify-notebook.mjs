import "dotenv/config";
import assert from "node:assert/strict";
import pg from "pg";
import notebookHandler from "../netlify/functions/notebook-notes.mts";

const { Client } = pg;
const connectionString =
  process.env.NETLIFY_DATABASE_URL ||
  process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing NETLIFY_DATABASE_URL or DATABASE_URL.");
}

async function invoke(method, path, body) {
  const response = await notebookHandler(new Request(`http://localhost${path}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  }));
  const data = await response.json();
  return { status: response.status, data };
}

const client = new Client({ connectionString });
await client.connect();
const usersResult = await client.query(
  `
    SELECT email::text AS email
    FROM public.users
    WHERE status = 'active'
    ORDER BY created_at, email
    LIMIT 2
  `
);
await client.end();

assert.equal(usersResult.rows.length, 2, "Notebook verification requires two active users.");

const [primaryUser, otherUser] = usersResult.rows;
const testTitle = `Notebook API Verification ${Date.now()}`;
const originalBody = "English notes and Greek: ἡ ἀρετή.";
const updatedBody = "Updated in English and Greek: σοφία καὶ δικαιοσύνη.";
let noteId = "";

try {
  const created = await invoke("POST", "/api/notebook-notes", {
    email: primaryUser.email,
    title: testTitle,
    body: originalBody,
  });
  assert.equal(created.status, 201);
  assert.equal(created.data.note.title, testTitle);
  assert.equal(created.data.note.body, originalBody);
  noteId = created.data.note.id;

  const listed = await invoke(
    "GET",
    `/api/notebook-notes?email=${encodeURIComponent(primaryUser.email)}`
  );
  assert.equal(listed.status, 200);
  assert.ok(listed.data.notes.some((note) => note.id === noteId));

  const isolatedList = await invoke(
    "GET",
    `/api/notebook-notes?email=${encodeURIComponent(otherUser.email)}`
  );
  assert.equal(isolatedList.status, 200);
  assert.ok(!isolatedList.data.notes.some((note) => note.id === noteId));

  const isolatedRead = await invoke(
    "GET",
    `/api/notebook-notes?email=${encodeURIComponent(otherUser.email)}&id=${noteId}`
  );
  assert.equal(isolatedRead.status, 404);

  const duplicate = await invoke("POST", "/api/notebook-notes", {
    email: primaryUser.email,
    title: testTitle.toUpperCase(),
    body: "Duplicate-title check",
  });
  assert.equal(duplicate.status, 409);

  const updated = await invoke("PUT", "/api/notebook-notes", {
    email: primaryUser.email,
    noteId,
    title: testTitle,
    body: updatedBody,
  });
  assert.equal(updated.status, 200);
  assert.equal(updated.data.note.body, updatedBody);

  const loaded = await invoke(
    "GET",
    `/api/notebook-notes?email=${encodeURIComponent(primaryUser.email)}&id=${noteId}`
  );
  assert.equal(loaded.status, 200);
  assert.equal(loaded.data.note.body, updatedBody);
} finally {
  if (noteId) {
    const deleted = await invoke(
      "DELETE",
      `/api/notebook-notes?email=${encodeURIComponent(primaryUser.email)}&id=${noteId}`
    );
    assert.equal(deleted.status, 200);
  }
}

const missingAfterDelete = await invoke(
  "GET",
  `/api/notebook-notes?email=${encodeURIComponent(primaryUser.email)}&id=${noteId}`
);
assert.equal(missingAfterDelete.status, 404);

console.log(JSON.stringify({
  notebookApi: "passed",
  operations: ["create", "list", "read", "update", "delete"],
  userIsolation: "passed",
  duplicateTitleProtection: "passed",
  greekRoundTrip: "passed",
}, null, 2));
