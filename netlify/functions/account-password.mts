import {
  buildCourseUser,
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
  normalizeEmail,
} from "./_shared/course-auth.mts";

export default async (request: Request) => {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  let body: { email?: string; password?: string };

  try {
    body = await request.json();
  } catch (error) {
    return jsonResponse({ error: "Invalid JSON request" }, 400);
  }

  const email = normalizeEmail(body.email);
  const password = String(body.password || "").trim();

  if (!email || !password) {
    return jsonResponse({ error: "Email and password are required." }, 400);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();

    const userResult = await client.query(
      `
        SELECT u.id
        FROM public.users u
        JOIN public.user_roles ur ON ur.user_id = u.id
        WHERE u.email = $1::citext
          AND u.status = 'active'
          AND ur.role_id = 'student'
        LIMIT 1
      `,
      [email]
    );
    const [user] = userResult.rows;

    if (!user) {
      return jsonResponse({ error: "No student account was found for that email." }, 404);
    }

    await client.query(
      `
        INSERT INTO public.user_credentials (user_id, password_hash, password_algorithm)
        VALUES ($1, crypt($2, gen_salt('bf', 10)), 'profile-visible-password')
        ON CONFLICT (user_id) DO UPDATE
        SET password_hash = EXCLUDED.password_hash,
            password_algorithm = EXCLUDED.password_algorithm
      `,
      [user.id, password]
    );

    const courseUser = await buildCourseUser(client, user.id);

    return jsonResponse({ user: courseUser });
  } catch (error) {
    console.error("Failed to change password", error);
    const message = error instanceof Error ? error.message : "Failed to change password";
    return jsonResponse({ error: message }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/account-password",
  method: ["POST"],
};
