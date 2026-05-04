import "dotenv/config";
import pg from "pg";

const { Client } = pg;

export const DEV_CLASS_PASSWORD = "xeno";
export const DEV_CLASS_PASSWORD_MESSAGE =
  "For this development version, please use the class password provided by the instructor.";

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

type GateActivityRow = {
  lesson_slug: string | null;
  activity_type: string | null;
};

export function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getConnectionString() {
  const netlifyEnv = (globalThis as NetlifyGlobal).Netlify?.env;

  return (
    netlifyEnv?.get("NETLIFY_DATABASE_URL") ||
    netlifyEnv?.get("DATABASE_URL") ||
    process.env.NETLIFY_DATABASE_URL ||
    process.env.DATABASE_URL
  );
}

export function createDatabaseClient(connectionString: string) {
  return new Client({ connectionString });
}

export function normalizeEmail(value: unknown) {
  return String(value || "").trim().toLowerCase();
}

export function requireDevClassPassword(password: unknown) {
  return String(password || "") === DEV_CLASS_PASSWORD;
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

function buildCompletedExercises(lessonSlugs: string[]) {
  return Object.fromEntries(lessonSlugs.map((slug) => [slug, ["reading", "practice", "quiz"]]));
}

function nextLevelLabel(currentLabel?: string | null) {
  if (currentLabel === "Novice") {
    return "Apprentice";
  }

  if (currentLabel === "Apprentice") {
    return "Erudite";
  }

  return "Sophos";
}

export async function buildProgress(
  client: InstanceType<typeof Client>,
  userId: string,
  courseId: string
) {
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

  const gateActivityResult = await client.query<GateActivityRow>(
    `
      SELECT DISTINCT
        metadata->>'lessonSlug' AS lesson_slug,
        metadata->>'activityType' AS activity_type
      FROM public.activity_events
      WHERE user_id = $1
        AND course_id = $2
        AND event_type IN ('exercise_completed', 'quiz_passed')
        AND metadata->>'passed' = 'true'
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

  const vocabularyMasteredResult = await client.query(
    `
      SELECT count(*)::int AS mastered
      FROM public.flashcard_reviews
      WHERE user_id = $1
        AND course_id = $2
        AND confidence_level >= 4
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
  const completedExercises = buildCompletedExercises(completedLessons);
  const passedQuizzes = new Set(completedLessons);

  gateActivityResult.rows.forEach((row) => {
    if (!row.lesson_slug || !row.activity_type) {
      return;
    }

    if (row.activity_type === "lesson-quiz") {
      passedQuizzes.add(row.lesson_slug);
      return;
    }

    completedExercises[row.lesson_slug] ||= [];
    if (!completedExercises[row.lesson_slug].includes(row.activity_type)) {
      completedExercises[row.lesson_slug].push(row.activity_type);
    }
  });

  const practiceCompleted = Object.values(completedExercises).reduce(
    (total, exerciseIds) => total + exerciseIds.length,
    0
  );

  return {
    currentLessonId,
    currentSegmentId: progress?.current_segment_slug || "lesson-start",
    completedLessons,
    passedQuizzes: Array.from(passedQuizzes),
    completedExercises,
    completedLessonsCount,
    totalLessonsCount,
    completionPercent: Math.round((completedLessonsCount / totalLessonsCount) * 100),
    level: progress?.level_number || 0,
    levelLabel: progress?.level_label || "Novice",
    xp: progress?.xp || 0,
    nextLevelXp,
    nextLevelLabel: nextLevelLabel(progress?.level_label),
    weeklyCompleted: weeklyResult.rows[0]?.completed || 0,
    weeklyGoal: progress?.weekly_goal_lessons || 5,
    vocabularyMastered: vocabularyMasteredResult.rows[0]?.mastered || 0,
    practiceCompleted,
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

export async function buildCourseUser(client: InstanceType<typeof Client>, userId: string) {
  const userResult = await client.query(
    `
      SELECT id, email::text AS email, name
      FROM public.users
      WHERE id = $1
        AND status = 'active'
    `,
    [userId]
  );
  const [user] = userResult.rows;

  if (!user) {
    return null;
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

  return {
    name: user.name,
    email: user.email,
    roles,
    progress,
    course,
  };
}

export async function initializeStudentAtCourseStart(
  client: InstanceType<typeof Client>,
  userId: string,
  courseId: string
) {
  const firstLessonResult = await client.query(
    `
      SELECT l.id
      FROM public.lessons l
      JOIN public.modules m ON m.id = l.module_id
      WHERE m.course_id = $1
      ORDER BY m.sort_order, l.sort_order
      LIMIT 1
    `,
    [courseId]
  );
  const [firstLesson] = firstLessonResult.rows;

  if (!firstLesson) {
    throw new Error("The course has no lessons yet.");
  }

  const firstSegmentResult = await client.query(
    `
      SELECT id
      FROM public.lesson_segments
      WHERE lesson_id = $1
      ORDER BY CASE WHEN slug = 'lesson-start' THEN 0 ELSE 1 END, sort_order
      LIMIT 1
    `,
    [firstLesson.id]
  );
  const [firstSegment] = firstSegmentResult.rows;

  await client.query(
    `
      INSERT INTO public.student_progress (
        course_id,
        user_id,
        current_lesson_id,
        current_segment_id,
        level_number,
        level_label,
        xp,
        next_level_xp,
        weekly_goal_lessons,
        updated_at
      )
      VALUES ($1, $2, $3, $4, 0, 'Novice', 0, 100, 5, now())
      ON CONFLICT (course_id, user_id) DO UPDATE
      SET current_lesson_id = EXCLUDED.current_lesson_id,
          current_segment_id = EXCLUDED.current_segment_id,
          level_number = 0,
          level_label = 'Novice',
          xp = 0,
          next_level_xp = 100,
          weekly_goal_lessons = 5,
          updated_at = now()
    `,
    [courseId, userId, firstLesson.id, firstSegment?.id || null]
  );

  await client.query(
    `
      INSERT INTO public.lesson_progress (user_id, lesson_id, status, started_at, xp_awarded)
      VALUES ($1, $2, 'available', NULL, 0)
      ON CONFLICT (user_id, lesson_id) DO UPDATE
      SET status = 'available',
          started_at = NULL,
          completed_at = NULL,
          last_viewed_segment_id = NULL,
          xp_awarded = 0
    `,
    [userId, firstLesson.id]
  );
}
