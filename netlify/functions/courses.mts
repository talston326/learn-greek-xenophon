import pg from "pg";

const { Client } = pg;

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

export default async (request: Request) => {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  const client = new Client({ connectionString });

  try {
    await client.connect();
    const result = await client.query(
      "SELECT id, code, title, term, institution, department, created_at, updated_at FROM public.courses ORDER BY code, term"
    );

    return jsonResponse({ courses: result.rows });
  } catch (error) {
    console.error("Failed to load courses", error);
    return jsonResponse({ error: "Failed to load courses" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/courses",
  method: ["GET"],
};
