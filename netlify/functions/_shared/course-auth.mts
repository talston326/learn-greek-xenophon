import "dotenv/config";
import { createRequire } from "node:module";
import pg from "pg";

const { Client } = pg;
const require = createRequire(import.meta.url);
const achievementTools = require("../../../achievement-catalog.js");

export const DEV_CLASS_PASSWORD = "xenophon";
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

type AchievementEarnedRow = {
  slug: string;
  earned_at: string;
};

type ProgressMetricsRow = {
  progress_metrics: Record<string, unknown> | null;
};

type LessonTestGradeRow = {
  lesson_slug: string;
  lesson_label: string | null;
  lesson_title: string;
  score_percent: string | number;
  points_earned: string | number | null;
  points_possible: string | number | null;
  attempt_number: number;
  completed_at: string;
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
    return "Student";
  }

  return "Master of Greek";
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

  const achievementsResult = await client.query<AchievementEarnedRow>(
    `
      SELECT a.slug, ua.earned_at
      FROM public.user_achievements ua
      JOIN public.achievements a ON a.id = ua.achievement_id
      WHERE ua.user_id = $1
        AND ua.course_id = $2
      ORDER BY ua.earned_at, a.label
    `,
    [userId, courseId]
  );

  const progressMetricsResult = await client.query<ProgressMetricsRow>(
    `
      SELECT metadata->'progressMetrics' AS progress_metrics
      FROM public.activity_events
      WHERE user_id = $1
        AND course_id = $2
        AND metadata ? 'progressMetrics'
      ORDER BY occurred_at DESC
      LIMIT 1
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

  const lessonTestGradesResult = await client.query<LessonTestGradeRow>(
    `
      WITH ranked_grades AS (
        SELECT
          grades.*,
          row_number() OVER (
            PARTITION BY grades.lesson_id
            ORDER BY grades.score_percent DESC, grades.completed_at DESC, grades.attempt_number DESC
          ) AS grade_rank
        FROM public.student_lesson_test_grades grades
        WHERE grades.user_id = $1
          AND grades.course_id = $2
          AND grades.test_type = 'lesson-test'
      )
      SELECT
        l.slug AS lesson_slug,
        l.number_label AS lesson_label,
        l.title AS lesson_title,
        ranked_grades.score_percent,
        ranked_grades.points_earned,
        ranked_grades.points_possible,
        ranked_grades.attempt_number,
        ranked_grades.completed_at
      FROM ranked_grades
      JOIN public.lessons l ON l.id = ranked_grades.lesson_id
      JOIN public.modules m ON m.id = l.module_id
      WHERE ranked_grades.grade_rank = 1
        AND m.course_id = $2
      ORDER BY m.sort_order, l.sort_order
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
  const xp = progress?.xp || 0;
  const computedLevel = achievementTools.getLevelForXp(xp);
  const computedNextLevel = achievementTools.getNextLevelForXp(xp);
  const maxLevelReached = computedNextLevel.number === computedLevel.number && xp >= computedLevel.xpRequired;
  const lessonTestGrades = lessonTestGradesResult.rows.map((grade) => ({
    lessonId: grade.lesson_slug,
    lessonLabel: grade.lesson_label || grade.lesson_slug,
    lessonTitle: grade.lesson_title,
    testTitle: "Lesson Test",
    scorePercent: Number(grade.score_percent),
    pointsEarned: grade.points_earned == null ? null : Number(grade.points_earned),
    pointsPossible: grade.points_possible == null ? null : Number(grade.points_possible),
    attemptNumber: grade.attempt_number,
    completedAt: grade.completed_at,
  }));
  const completedLessonTestsCount = lessonTestGrades.length;
  const currentCourseGradePercent = completedLessonTestsCount
    ? Math.round(
        lessonTestGrades.reduce((sum, grade) => sum + grade.scorePercent, 0) /
          completedLessonTestsCount
      )
    : null;
  const storedMetrics = progressMetricsResult.rows[0]?.progress_metrics || {};
  const earnedAtBySlug = Object.fromEntries(
    achievementsResult.rows.map((achievement) => [achievement.slug, achievement.earned_at])
  );
  const progressMetrics = {
    ...storedMetrics,
    completedLessons,
    lessonsCompleted: completedLessonsCount,
    completionPercent: Math.round((completedLessonsCount / totalLessonsCount) * 100),
    quizzesPassed:
      Number((storedMetrics as { quizzesPassed?: unknown }).quizzesPassed) || passedQuizzes.size,
    vocabularyMastered: Math.max(
      vocabularyMasteredResult.rows[0]?.mastered || 0,
      Number((storedMetrics as { vocabularyMastered?: unknown }).vocabularyMastered) || 0
    ),
    practiceSessions:
      Number((storedMetrics as { practiceSessions?: unknown }).practiceSessions) || practiceCompleted,
    lessonTestsCompleted: completedLessonTestsCount,
    activityEvents:
      Number((storedMetrics as { activityEvents?: unknown }).activityEvents) || activitiesResult.rows.length,
    earnedAtBySlug,
  };
  const earnedAchievements = achievementTools.computeEarnedAchievements(progressMetrics);
  const lockedAchievements = achievementTools.getLockedAchievements(progressMetrics);
  const achievementCatalog = achievementTools.getAchievementCatalog();
  const displayCompletedLessonsCount = completedLessonsCount;
  const displayCompletionPercent = progressMetrics.completionPercent;

  return {
    currentLessonId,
    currentSegmentId: progress?.current_segment_slug || "lesson-start",
    completedLessons,
    passedQuizzes: Array.from(passedQuizzes),
    completedExercises,
    completedLessonsCount: displayCompletedLessonsCount,
    totalLessonsCount,
    completionPercent: displayCompletionPercent,
    level: computedLevel.number,
    levelLabel: computedLevel.label,
    xp,
    nextLevelXp: maxLevelReached
      ? Math.max(xp, computedLevel.xpRequired)
      : computedNextLevel.xpRequired || nextLevelXp,
    nextLevelLabel: maxLevelReached ? "" : computedNextLevel.label || nextLevelLabel(computedLevel.label),
    maxLevelReached,
    currentCourseGradePercent,
    completedLessonTestsCount,
    lessonTestGrades,
    weeklyCompleted: weeklyResult.rows[0]?.completed || 0,
    weeklyGoal: progress?.weekly_goal_lessons || 5,
    vocabularyMastered: progressMetrics.vocabularyMastered,
    practiceCompleted: progressMetrics.practiceSessions,
    recentActivity: activitiesResult.rows.map((activity) => ({
      ...activityIcon(activity.event_type),
      title: activity.title,
      when: relativeWhen(activity.occurred_at),
      xp: activity.xp_delta,
    })),
    metrics: progressMetrics,
    achievements: earnedAchievements,
    lockedAchievements,
    achievementCatalog,
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
