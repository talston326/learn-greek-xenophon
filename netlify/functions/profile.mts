import { createHash } from "node:crypto";
import { getStore } from "@netlify/blobs";
import pg from "pg";

const { Client } = pg;
const STORE_NAME = "xenophon-profile-photos";
const MAX_PHOTO_BYTES = 2 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
]);

type NetlifyGlobal = typeof globalThis & {
  Netlify?: {
    env: {
      get: (name: string) => string | undefined;
    };
  };
};

declare const process: {
  env: Record<string, string | undefined>;
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getConnectionString() {
  const netlifyEnv = (globalThis as NetlifyGlobal).Netlify?.env;

  return (
    netlifyEnv?.get("NETLIFY_DATABASE_URL") ||
    netlifyEnv?.get("DATABASE_URL") ||
    process.env.NETLIFY_DATABASE_URL ||
    process.env.DATABASE_URL
  );
}

function getBlobKeyFromUrl(photoUrl?: string | null) {
  if (!photoUrl?.startsWith("/api/profile-photo/")) {
    return null;
  }

  return decodeURIComponent(photoUrl.replace("/api/profile-photo/", ""));
}

function safeText(value: FormDataEntryValue | null) {
  return String(value || "").trim();
}

async function storePhoto(email: string, file: File) {
  const extension = ALLOWED_IMAGE_TYPES.get(file.type);

  if (!extension) {
    throw new Error("Only JPEG, PNG, WebP, and GIF images are allowed.");
  }

  if (file.size > MAX_PHOTO_BYTES) {
    throw new Error("Profile photos must be 2 MB or smaller.");
  }

  const bytes = await file.arrayBuffer();
  const digest = createHash("sha256")
    .update(email.toLowerCase())
    .update(String(Date.now()))
    .digest("hex")
    .slice(0, 32);
  const key = `profile-photos/${digest}.${extension}`;
  const store = getStore({ name: STORE_NAME, consistency: "strong" });

  await store.set(key, bytes, {
    metadata: {
      contentType: file.type,
      uploadedAt: new Date().toISOString(),
    },
  });

  return `/api/profile-photo/${encodeURIComponent(key)}`;
}

async function deleteStoredPhoto(photoUrl?: string | null) {
  const key = getBlobKeyFromUrl(photoUrl);

  if (!key) {
    return;
  }

  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  await store.delete(key);
}

async function loadProfile(client: InstanceType<typeof Client>, email: string) {
  const result = await client.query(
    `
      SELECT u.id, u.email::text AS email, u.name, up.summary, up.photo_url
      FROM public.users u
      LEFT JOIN public.user_profiles up ON up.user_id = u.id
      WHERE u.email = $1::citext
    `,
    [email]
  );

  const [row] = result.rows;

  if (!row) {
    return null;
  }

  return {
    userId: row.id,
    email: row.email,
    name: row.name || "",
    summary: row.summary || "",
    photoUrl: row.photo_url || "",
  };
}

export default async (request: Request) => {
  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  const client = new Client({ connectionString });

  try {
    await client.connect();

    if (request.method === "GET") {
      const email = new URL(request.url).searchParams.get("email") || "";
      const profile = await loadProfile(client, email);

      if (!profile) {
        return jsonResponse({ error: "Profile not found" }, 404);
      }

      return jsonResponse({ profile });
    }

    if (request.method === "PUT") {
      const formData = await request.formData();
      const email = safeText(formData.get("email"));
      const name = safeText(formData.get("name"));
      const summary = safeText(formData.get("summary"));
      const removePhoto = safeText(formData.get("removePhoto")) === "true";
      const photo = formData.get("photo");
      const existingProfile = await loadProfile(client, email);

      if (!existingProfile) {
        return jsonResponse({ error: "Profile not found" }, 404);
      }

      let photoUrl = existingProfile.photoUrl;

      if (removePhoto) {
        await deleteStoredPhoto(existingProfile.photoUrl);
        photoUrl = "";
      }

      if (photo instanceof File && photo.size > 0) {
        await deleteStoredPhoto(existingProfile.photoUrl);
        photoUrl = await storePhoto(email, photo);
      }

      await client.query("BEGIN");
      await client.query(
        `
          UPDATE public.users
          SET name = COALESCE(NULLIF($2, ''), name)
          WHERE id = $1
        `,
        [existingProfile.userId, name]
      );
      await client.query(
        `
          INSERT INTO public.user_profiles (user_id, summary, photo_url)
          VALUES ($1, $2, NULLIF($3, ''))
          ON CONFLICT (user_id) DO UPDATE
          SET summary = EXCLUDED.summary,
              photo_url = EXCLUDED.photo_url
        `,
        [existingProfile.userId, summary, photoUrl]
      );
      await client.query("COMMIT");

      const profile = await loadProfile(client, email);
      return jsonResponse({ profile });
    }

    if (request.method === "DELETE") {
      const email = new URL(request.url).searchParams.get("email") || "";
      const existingProfile = await loadProfile(client, email);

      if (!existingProfile) {
        return jsonResponse({ error: "Profile not found" }, 404);
      }

      await deleteStoredPhoto(existingProfile.photoUrl);
      await client.query(
        `
          UPDATE public.user_profiles
          SET summary = NULL,
              photo_url = NULL
          WHERE user_id = $1
        `,
        [existingProfile.userId]
      );

      return jsonResponse({
        profile: {
          ...existingProfile,
          summary: "",
          photoUrl: "",
        },
      });
    }

    return jsonResponse({ error: "Method not allowed" }, 405);
  } catch (error) {
    try {
      await client.query("ROLLBACK");
    } catch (rollbackError) {
      // Nothing useful to do if rollback also fails.
    }

    console.error("Failed to handle profile request", error);
    const message = error instanceof Error ? error.message : "Failed to handle profile request";
    return jsonResponse({ error: message }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/profile",
  method: ["GET", "PUT", "DELETE"],
};
