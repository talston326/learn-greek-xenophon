import {
  buildCourseUser,
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
  normalizeEmail,
} from "./_shared/course-auth.mts";

const DEVELOPMENT_PASSWORDS = ["xenophon", "xeno"];

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
  const password = String(body.password || "");

  if (!email || !password) {
    return jsonResponse({ error: "Email and password are required" }, 400);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();

    const userResult = await client.query(
      `
        SELECT u.id
        FROM public.users u
        JOIN public.user_roles ur ON ur.user_id = u.id
        JOIN public.user_credentials uc ON uc.user_id = u.id
        WHERE u.email = $1::citext
          AND u.status = 'active'
          AND ur.role_id = 'student'
          AND (
            uc.password_hash = crypt($2, uc.password_hash)
            OR (
              uc.password_algorithm = 'development-class-password'
              AND $2 = ANY($3::text[])
              AND EXISTS (
                SELECT 1
                FROM unnest($3::text[]) AS dev_password(value)
                WHERE uc.password_hash = crypt(dev_password.value, uc.password_hash)
              )
            )
          )
        LIMIT 1
      `,
      [email, password, DEVELOPMENT_PASSWORDS]
    );
    const [user] = userResult.rows;

    if (!user) {
      return jsonResponse(
        { error: "The email or password was not recognized." },
        401
      );
    }

    await client.query("UPDATE public.users SET last_login_at = now() WHERE id = $1", [user.id]);

    const courseUser = await buildCourseUser(client, user.id);

    if (!courseUser) {
      return jsonResponse({ error: "No active course user was found." }, 404);
    }

    return jsonResponse({ user: courseUser });
  } catch (error) {
    console.error("Failed to log in", error);
    return jsonResponse({ error: "Failed to log in" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/login",
  method: ["POST"],
};
