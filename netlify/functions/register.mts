import {
  DEV_CLASS_PASSWORD,
  DEV_CLASS_PASSWORD_MESSAGE,
  buildCourseUser,
  createDatabaseClient,
  getConnectionString,
  initializeStudentAtCourseStart,
  jsonResponse,
  normalizeEmail,
  requireDevClassPassword,
} from "./_shared/course-auth.mts";

const COURSE_CODE = "GREK 110 J10";
const COURSE_TERM = "Spring 2027";

function isLikelyEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  let body: { firstName?: string; lastName?: string; email?: string; password?: string };

  try {
    body = await request.json();
  } catch (error) {
    return jsonResponse({ error: "Invalid JSON request" }, 400);
  }

  const firstName = String(body.firstName || "").trim();
  const lastName = String(body.lastName || "").trim();
  const email = normalizeEmail(body.email);
  const password = String(body.password || "");

  if (!firstName || !lastName || !email || !password) {
    return jsonResponse({ error: "First name, last name, email, and password are required." }, 400);
  }

  if (!isLikelyEmail(email)) {
    return jsonResponse({ error: "Please enter a valid email address." }, 400);
  }

  if (!requireDevClassPassword(password)) {
    return jsonResponse({ error: DEV_CLASS_PASSWORD_MESSAGE }, 401);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();
    await client.query("BEGIN");

    await client.query(
      `
        INSERT INTO public.roles (id, label, description)
        VALUES ('student', 'Student', 'Can complete lessons, exercises, quizzes, and review vocabulary.')
        ON CONFLICT (id) DO NOTHING
      `
    );

    const existingUserResult = await client.query(
      "SELECT id FROM public.users WHERE email = $1::citext LIMIT 1",
      [email]
    );

    if (existingUserResult.rows[0]) {
      await client.query("ROLLBACK");
      return jsonResponse(
        { error: "A student account already exists for that email. Please log in instead." },
        409
      );
    }

    const courseResult = await client.query(
      `
        SELECT id
        FROM public.courses
        WHERE code = $1
          AND term = $2
        LIMIT 1
      `,
      [COURSE_CODE, COURSE_TERM]
    );
    const [course] = courseResult.rows;

    if (!course) {
      throw new Error("The course has not been seeded yet. Run the database seed before registration.");
    }

    const fullName = `${firstName} ${lastName}`;
    const insertedUserResult = await client.query(
      `
        INSERT INTO public.users (email, name, status, last_login_at)
        VALUES ($1::citext, $2, 'active', now())
        RETURNING id
      `,
      [email, fullName]
    );
    const [insertedUser] = insertedUserResult.rows;

    await client.query(
      `
        INSERT INTO public.user_roles (user_id, role_id)
        VALUES ($1, 'student')
        ON CONFLICT (user_id, role_id) DO NOTHING
      `,
      [insertedUser.id]
    );

    await client.query(
      `
        INSERT INTO public.course_memberships (course_id, user_id, enrollment_status)
        VALUES ($1, $2, 'active')
        ON CONFLICT (course_id, user_id) DO UPDATE
        SET enrollment_status = 'active'
      `,
      [course.id, insertedUser.id]
    );

    await client.query(
      `
        INSERT INTO public.user_profiles (user_id, summary)
        VALUES ($1, NULL)
        ON CONFLICT (user_id) DO NOTHING
      `,
      [insertedUser.id]
    );

    await client.query(
      `
        INSERT INTO public.user_credentials (user_id, password_hash, password_algorithm)
        VALUES ($1, crypt($2, gen_salt('bf', 10)), 'development-class-password')
        ON CONFLICT (user_id) DO UPDATE
        SET password_hash = EXCLUDED.password_hash,
            password_algorithm = EXCLUDED.password_algorithm
      `,
      [insertedUser.id, DEV_CLASS_PASSWORD]
    );

    await initializeStudentAtCourseStart(client, insertedUser.id, course.id);
    await client.query("COMMIT");

    const courseUser = await buildCourseUser(client, insertedUser.id);

    return jsonResponse({ user: courseUser }, 201);
  } catch (error) {
    try {
      await client.query("ROLLBACK");
    } catch (rollbackError) {
      // Nothing useful to do if rollback also fails.
    }

    console.error("Failed to register student", error);
    const message = error instanceof Error ? error.message : "Failed to register student";
    return jsonResponse({ error: message }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/register",
  method: ["POST"],
};
