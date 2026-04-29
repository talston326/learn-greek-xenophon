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

type ActivityRow = {
  event_type: string;
  title: string;
  xp_delta: number;
  occurred_at: string;
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

function activityIcon(eventType: string) {
  const icons: Record<string, { icon: string; type: string }> = {
    lesson_completed: { icon: "📘", type: "book" },
    exercise_completed: { icon: "✎", type: "exercise" },
    quiz_passed: { icon: "✓", type: "exercise" },
    review_completed: { icon: "☰", type: "review" },
    profile_updated: { icon: "👤", type: "review" },
    achievement_earned: { icon: "🏆", type: "book" },
  };

  return icons[eventType] || { icon: "•", type: "book" };
}

function relativeWhen(value: string) {
  const occurred = new Date(value).getTime();
  const elapsedMs = Date.now() - occurred;
  const elapsedHours = Math.max(0, Math.round(elapsedMs / 36e5));

  if (elapsedHours < 1) {
    return "Just now";
  }

  if (elapsedHours < 24) {
    return "Today";
  }

  if (elapsedHours < 48) {
    return "Yesterday";
  }

  return `${Math.round(elapsedHours / 24)} days ago`;
}

function buildCompletedExercises(lessonSlugs: string[], currentLessonSlug?: string) {
  return Object.fromEntries(
    lessonSlugs.map((slug) => [slug, ["reading", "practice", "quiz"]]).concat(
      currentLessonSlug ? [[currentLessonSlug, ["reading"]]] : []
    )
  );
}

async function buildProgress(client: InstanceType<typeof Client>, userId: string, courseId: string) {
  const lessonsResult = await client.query(
    `
      SELECT l.id, l.slug
      FROM public.lessons l
      JOIN public.modules m ON m.id = l.module_id
      WHERE m.course_id = $1
      ORDER BY m.sort_order, l.sort_order
    `,
    [courseId]
  );

  const progressResult = await client.query(
    `
      SELECT
        sp.level_number,
        sp.level_label,
        sp.xp,
        sp.next_level_xp,
        sp.weekly_goal_lessons,
        current_lesson.slug AS current_lesson_slug,
        current_segment.slug AS current_segment_slug
      FROM public.student_progress sp
      LEFT JOIN public.lessons current_lesson ON current_lesson.id = sp.current_lesson_id
      LEFT JOIN public.lesson_segments current_segment ON current_segment.id = sp.current_segment_id
      WHERE sp.user_id = $1
        AND sp.course_id = $2
    `,
    [userId, courseId]
  );

  const lessonProgressResult = await client.query(
    `
      SELECT l.slug, lp.status
      FROM public.lesson_progress lp
      JOIN public.lessons l ON l.id = lp.lesson_id
      JOIN public.modules m ON m.id = l.module_id
      WHERE lp.user_id = $1
        AND m.course_id = $2
      ORDER BY m.sort_order, l.sort_order
    `,
    [userId, courseId]
  );

  const activitiesResult = await client.query<ActivityRow>(
    `
      SELECT event_type, title, xp_delta, occurred_at
      FROM public.activity_events
      WHERE user_id = $1
        AND course_id = $2
      ORDER BY occurred_at DESC
      LIMIT 5
    `,
    [userId, courseId]
  );

  const achievementsResult = await client.query(
    `
      SELECT a.icon, a.class_name, a.label
      FROM public.user_achievements ua
      JOIN public.achievements a ON a.id = ua.achievement_id
      WHERE ua.user_id = $1
        AND ua.course_id = $2
      ORDER BY ua.earned_at, a.label
      LIMIT 5
    `,
    [userId, courseId]
  );

  const weeklyResult = await client.query(
    `
      SELECT count(*)::int AS completed
      FROM public.activity_events
      WHERE user_id = $1
        AND course_id = $2
        AND event_type = 'lesson_completed'
        AND occurred_at >= now() - interval '7 days'
    `,
    [userId, courseId]
  );

  const [progress] = progressResult.rows;
  const completedLessons = lessonProgressResult.rows
    .filter((row) => row.status === "completed")
    .map((row) => row.slug);
  const currentLessonId = progress?.current_lesson_slug || lessonsResult.rows[0]?.slug || "intro-1";
  const completedLessonsCount = completedLessons.length;
  const totalLessonsCount = lessonsResult.rows.length || 51;
  const nextLevelXp = progress?.next_level_xp || 100;

  return {
    currentLessonId,
    currentSegmentId: progress?.current_segment_slug || "lesson-start",
    completedLessons,
    passedQuizzes: completedLessons,
    completedExercises: buildCompletedExercises(completedLessons, currentLessonId),
    completedLessonsCount,
    totalLessonsCount,
    completionPercent: Math.round((completedLessonsCount / totalLessonsCount) * 100),
    level: progress?.level_number || 0,
    levelLabel: progress?.level_label || "Novice",
    xp: progress?.xp || 0,
    nextLevelXp,
    nextLevelLabel: progress?.level_label === "Erudite" ? "Sophos" : "Erudite",
    weeklyCompleted: weeklyResult.rows[0]?.completed || 0,
    weeklyGoal: progress?.weekly_goal_lessons || 5,
    recentActivity: activitiesResult.rows.map((activity) => ({
      ...activityIcon(activity.event_type),
      title: activity.title,
      when: relativeWhen(activity.occurred_at),
      xp: activity.xp_delta,
    })),
    achievements: achievementsResult.rows.map((achievement) => ({
      icon: achievement.icon || "",
      className: achievement.class_name || "",
      label: achievement.label,
    })),
  };
}

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

  const email = String(body.email || "").trim();
  const password = String(body.password || "");

  if (!email || !password) {
    return jsonResponse({ error: "Email and password are required" }, 400);
  }

  const client = new Client({ connectionString });

  try {
    await client.connect();

    const userResult = await client.query(
      `
        SELECT u.id, u.email::text AS email, u.name
        FROM public.users u
        JOIN public.user_credentials uc ON uc.user_id = u.id
        WHERE u.email = $1::citext
          AND u.status = 'active'
          AND uc.password_hash = crypt($2, uc.password_hash)
      `,
      [email, password]
    );

    const [user] = userResult.rows;

    if (!user) {
      return jsonResponse({ error: "Those credentials did not match a course user." }, 401);
    }

    const rolesResult = await client.query(
      `
        SELECT role_id
        FROM public.user_roles
        WHERE user_id = $1
        ORDER BY CASE role_id
          WHEN 'administrator' THEN 1
          WHEN 'professor' THEN 2
          WHEN 'student' THEN 3
          ELSE 4
        END
      `,
      [user.id]
    );

    const courseResult = await client.query(
      `
        SELECT c.id, c.code, c.title, c.term, c.institution, c.department
        FROM public.course_memberships cm
        JOIN public.courses c ON c.id = cm.course_id
        WHERE cm.user_id = $1
          AND cm.enrollment_status = 'active'
        ORDER BY c.created_at DESC
        LIMIT 1
      `,
      [user.id]
    );

    const [course] = courseResult.rows;
    const roles = rolesResult.rows.map((row) => row.role_id);
    const progress = course ? await buildProgress(client, user.id, course.id) : null;

    return jsonResponse({
      user: {
        name: user.name,
        email: user.email,
        roles,
        progress,
        course,
      },
    });
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
