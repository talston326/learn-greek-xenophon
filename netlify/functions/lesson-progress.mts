import {
  buildCourseUser,
  createDatabaseClient,
  getConnectionString,
  jsonResponse,
  normalizeEmail,
} from "./_shared/course-auth.mts";
import { scoreAssessment } from "./_shared/assessment-scoring.mts";

type LessonProgressRequest = {
  email?: string;
  action?: "view_segment" | "activity_passed" | "complete_lesson";
  lessonSlug?: string;
  segmentSlug?: string;
  segmentTitle?: string;
  page?: number;
  activityType?: string;
  activityRevision?: string;
  score?: number;
  pointsEarned?: number;
  pointsPossible?: number;
  categoryScores?: Array<Record<string, unknown>>;
  answers?: Array<{ questionId?: string; choiceText?: string }>;
  passed?: boolean;
  nextLessonSlug?: string;
  advanceToNext?: boolean;
};

function normalizeLessonSlug(value: unknown) {
  const raw = String(value || "").trim().toLowerCase();
  return /^\d+$/.test(raw) ? `lesson-${raw}` : raw;
}

function eventTypeForActivity(activityType?: string) {
  if (activityType === "lesson-quiz" || activityType === "module-exam") {
    return "quiz_passed";
  }

  if (activityType === "grammar-exercises" || activityType === "topic-practice") {
    return "exercise_completed";
  }

  if (activityType?.includes("flashcards")) {
    return "review_completed";
  }

  return "custom";
}

async function mayEnterModuleTwo(client: ReturnType<typeof createDatabaseClient>, userId: string, courseId: string) {
  const staff = await client.query(
    `SELECT 1 FROM public.user_roles WHERE user_id = $1 AND role_id IN ('administrator', 'professor') LIMIT 1`,
    [userId]
  );
  if (staff.rowCount) return true;
  const passed = await client.query(
    `SELECT 1 FROM public.activity_events e
     JOIN public.lesson_content_overrides o ON o.lesson_id = (
       SELECT l.id FROM public.lessons l JOIN public.modules m ON m.id = l.module_id
       WHERE l.slug = 'lesson-12' AND m.course_id = $2 LIMIT 1
     )
     WHERE e.user_id = $1 AND e.course_id = $2 AND e.event_type = 'quiz_passed'
       AND e.metadata->>'lessonSlug' = 'lesson-12'
       AND e.metadata->>'activityType' = 'module-exam'
       AND e.metadata->>'activityRevision' = (o.content #>> '{activities,module-exam,revision}')
       AND e.metadata->>'passed' = 'true'
       AND (e.metadata->>'score')::numeric >= COALESCE((o.content #>> '{activities,module-exam,threshold}')::numeric, 70)
     LIMIT 1`,
    [userId, courseId]
  );
  return Boolean(passed.rowCount);
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  let body: LessonProgressRequest;

  try {
    body = await request.json();
  } catch (error) {
    return jsonResponse({ error: "Invalid JSON request" }, 400);
  }

  const email = normalizeEmail(body.email);
  const action = body.action;
  const lessonSlug = normalizeLessonSlug(body.lessonSlug);

  if (!email || !action || !lessonSlug) {
    return jsonResponse({ error: "Email, action, and lesson slug are required." }, 400);
  }

  const client = createDatabaseClient(connectionString);

  try {
    await client.connect();
    await client.query("BEGIN");

    const userResult = await client.query(
      `
        SELECT u.id AS user_id, c.id AS course_id
        FROM public.users u
        JOIN public.course_memberships cm ON cm.user_id = u.id
        JOIN public.courses c ON c.id = cm.course_id
        WHERE u.email = $1::citext
          AND u.status = 'active'
          AND cm.enrollment_status = 'active'
        ORDER BY c.created_at DESC
        LIMIT 1
      `,
      [email]
    );
    const [user] = userResult.rows;

    if (!user) {
      await client.query("ROLLBACK");
      return jsonResponse({ error: "No active course user was found." }, 404);
    }

    const lessonResult = await client.query(
      `
        SELECT l.id, l.title, l.sort_order, m.sort_order AS module_sort_order
        FROM public.lessons l
        JOIN public.modules m ON m.id = l.module_id
        WHERE m.course_id = $1
          AND l.slug = $2
        LIMIT 1
      `,
      [user.course_id, lessonSlug]
    );
    const [lesson] = lessonResult.rows;

    if (!lesson) {
      await client.query("ROLLBACK");
      return jsonResponse({ error: "Lesson was not found." }, 404);
    }

    let segmentId: string | null = null;
    let examResult: { score: number; passed: boolean; pointsEarned: number; pointsPossible: number } | null = null;

    // Module 2 and later require the current Module 1 exam for learners.
    const lessonNumber = Number(lessonSlug.match(/^lesson-(\d+)$/)?.[1] || 0);
    if (lessonNumber >= 13 && !(await mayEnterModuleTwo(client, user.user_id, user.course_id))) {
      await client.query('ROLLBACK');
      return jsonResponse({ error: 'Pass the Module 1 exam with at least 70% before entering Module 2.' }, 403);
    }

    if (action === "view_segment") {
      const segmentSlug = String(body.segmentSlug || "lesson-start").trim() || "lesson-start";
      const segmentTitle = String(body.segmentTitle || lesson.title || "Lesson Page").trim();
      const sortOrder = Math.max(1, Number(body.page || 1));
      const segmentResult = await client.query(
        `
          INSERT INTO public.lesson_segments (lesson_id, slug, title, body_markdown, sort_order)
          VALUES ($1, $2, $3, 'Reusable lesson template page.', $4)
          ON CONFLICT (lesson_id, slug) DO UPDATE
          SET title = EXCLUDED.title,
              sort_order = EXCLUDED.sort_order
          RETURNING id
        `,
        [lesson.id, segmentSlug, segmentTitle, sortOrder]
      );
      segmentId = segmentResult.rows[0].id;

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
              updated_at = now()
        `,
        [user.course_id, user.user_id, lesson.id, segmentId]
      );

      await client.query(
        `
          INSERT INTO public.lesson_progress (user_id, lesson_id, status, started_at, last_viewed_segment_id, xp_awarded)
          VALUES ($1, $2, 'in_progress', now(), $3, 0)
          ON CONFLICT (user_id, lesson_id) DO UPDATE
          SET status = CASE
                WHEN public.lesson_progress.status = 'completed' THEN 'completed'
                ELSE 'in_progress'
              END,
              started_at = COALESCE(public.lesson_progress.started_at, now()),
              last_viewed_segment_id = EXCLUDED.last_viewed_segment_id
        `,
        [user.user_id, lesson.id, segmentId]
      );
    }

    if (action === "activity_passed") {
      let score = Number.isFinite(Number(body.score)) ? Number(body.score) : null;
      let pointsEarned = Number.isFinite(Number(body.pointsEarned)) ? Number(body.pointsEarned) : score;
      let pointsPossible = Number.isFinite(Number(body.pointsPossible)) ? Number(body.pointsPossible) : 100;
      let passed = Boolean(body.passed);
      let categoryScores = Array.isArray(body.categoryScores) ? body.categoryScores : [];

      if (lessonSlug === 'lesson-12' && ['lesson-quiz', 'module-exam'].includes(body.activityType || '')) {
        const examRows = await client.query(
          `SELECT content->'activities'->'module-exam' AS exam,
                  content->'activities'->'lesson-quiz' AS lesson_quiz
           FROM public.lesson_content_overrides WHERE lesson_id = $1`,
          [lesson.id]
        );
        const exam = body.activityType === 'module-exam' ? examRows.rows[0]?.exam : examRows.rows[0]?.lesson_quiz;
        const lessonQuiz = examRows.rows[0]?.lesson_quiz;
        if (!exam?.questions?.length || (body.activityType === 'module-exam' && !exam.isModuleExam) || body.activityRevision !== exam.revision) {
          await client.query('ROLLBACK');
          return jsonResponse({ error: 'Use the current assessment.' }, 400);
        }
        if (body.activityType === 'module-exam') {
          const priorQuiz = await client.query(
            `SELECT 1 FROM public.activity_events e
             WHERE e.user_id = $1 AND e.course_id = $2 AND e.event_type = 'quiz_passed'
               AND e.metadata->>'lessonSlug' = 'lesson-12'
               AND e.metadata->>'activityType' = 'lesson-quiz'
               AND e.metadata->>'activityRevision' = $3
               AND e.metadata->>'passed' = 'true'
               AND (e.metadata->>'score')::numeric >= $4
             LIMIT 1`,
            [user.user_id, user.course_id, lessonQuiz?.revision, lessonQuiz?.threshold || 80]
          );
          const staff = await client.query(
            `SELECT 1 FROM public.user_roles WHERE user_id = $1 AND role_id IN ('administrator', 'professor') LIMIT 1`,
            [user.user_id]
          );
          if (!priorQuiz.rowCount && !staff.rowCount) {
            await client.query('ROLLBACK');
            return jsonResponse({ error: 'Pass the Lesson 12 quiz with at least 80% before the Module 1 exam.' }, 403);
          }
        }
        let graded;
        try {
          graded = scoreAssessment(exam, body.answers || []);
        } catch (error) {
          await client.query('ROLLBACK');
          return jsonResponse({ error: error instanceof Error ? error.message : 'Invalid exam answers.' }, 400);
        }
        ({ score, passed, pointsEarned, pointsPossible, categoryScores } = graded);
        examResult = { score, passed, pointsEarned, pointsPossible };
      }

      await client.query(
        `
          INSERT INTO public.activity_events (user_id, course_id, event_type, title, xp_delta, metadata, occurred_at)
          VALUES ($1, $2, $3, $4, $5, $6::jsonb, now())
        `,
        [
          user.user_id,
          user.course_id,
          eventTypeForActivity(body.activityType),
          passed
            ? `Passed ${String(body.activityType || "activity").replaceAll("-", " ")}`
            : `Attempted ${String(body.activityType || "activity").replaceAll("-", " ")}`,
          passed ? 10 : 0,
          JSON.stringify({
            lessonSlug,
            lessonId: lesson.id,
            activityType: body.activityType,
            activityRevision: body.activityRevision,
            score,
            passed,
            pointsEarned,
            pointsPossible,
            categoryScores,
          }),
        ]
      );

      if (["lesson-quiz", "module-exam"].includes(body.activityType || "") && score != null) {
        const testType = body.activityType === 'module-exam' ? 'module-exam' : 'lesson-test';
        const attemptResult = await client.query(
          `
            SELECT COALESCE(max(attempt_number), 0) + 1 AS next_attempt
            FROM public.student_lesson_test_grades
            WHERE course_id = $1
              AND user_id = $2
              AND lesson_id = $3
              AND test_type = $4
          `,
          [user.course_id, user.user_id, lesson.id, testType]
        );
        const attemptNumber = Number(attemptResult.rows[0]?.next_attempt || 1);

        await client.query(
          `
            INSERT INTO public.student_lesson_test_grades (
              course_id,
              user_id,
              lesson_id,
              test_type,
              score_percent,
              points_earned,
              points_possible,
              attempt_number,
              completed_at,
              updated_at
            )
            VALUES ($1, $2, $3, $8, $4, $5, $6, $7, now(), now())
            ON CONFLICT (user_id, lesson_id, test_type, attempt_number) DO UPDATE
            SET score_percent = EXCLUDED.score_percent,
                points_earned = EXCLUDED.points_earned,
                points_possible = EXCLUDED.points_possible,
                completed_at = EXCLUDED.completed_at,
                updated_at = now()
          `,
          [user.course_id, user.user_id, lesson.id, score, pointsEarned, pointsPossible, attemptNumber, testType]
        );
      }
    }

    if (action === "complete_lesson") {
      const requestedNextNumber = Number(normalizeLessonSlug(body.nextLessonSlug).match(/^lesson-(\d+)$/)?.[1] || 0);
      if (requestedNextNumber >= 13 && !(await mayEnterModuleTwo(client, user.user_id, user.course_id))) {
        await client.query('ROLLBACK');
        return jsonResponse({ error: 'Pass the Module 1 exam with at least 70% before unlocking Module 2.' }, 403);
      }
      const quizRequirement = await client.query(
        `SELECT content->'activities'->'lesson-quiz'->>'revision' AS revision,
                (content->'activities'->'lesson-quiz'->>'threshold')::integer AS threshold
         FROM public.lesson_content_overrides WHERE lesson_id = $1`,
        [lesson.id]
      );
      const requiredRevision = quizRequirement.rows[0]?.revision;
      if (requiredRevision) {
        const passedQuiz = await client.query(
          `SELECT 1 FROM public.activity_events
           WHERE user_id = $1 AND course_id = $2 AND event_type = 'quiz_passed'
             AND metadata->>'lessonSlug' = $3
             AND metadata->>'activityType' = 'lesson-quiz'
             AND metadata->>'activityRevision' = $4
             AND metadata->>'passed' = 'true'
             AND (metadata->>'score')::numeric >= $5
           LIMIT 1`,
          [user.user_id, user.course_id, lessonSlug, requiredRevision, quizRequirement.rows[0]?.threshold || 80]
        );
        if (!passedQuiz.rowCount) {
          await client.query("ROLLBACK");
          return jsonResponse({ error: "Pass the current final lesson quiz before continuing." }, 403);
        }
      }
      await client.query(
        `
          INSERT INTO public.lesson_progress (user_id, lesson_id, status, started_at, completed_at, xp_awarded)
          VALUES ($1, $2, 'completed', now(), now(), 40)
          ON CONFLICT (user_id, lesson_id) DO UPDATE
          SET status = 'completed',
              started_at = COALESCE(public.lesson_progress.started_at, now()),
              completed_at = COALESCE(public.lesson_progress.completed_at, now()),
              xp_awarded = GREATEST(public.lesson_progress.xp_awarded, 40)
        `,
        [user.user_id, lesson.id]
      );

      await client.query(
        `
          INSERT INTO public.activity_events (user_id, course_id, event_type, title, xp_delta, metadata, occurred_at)
          VALUES ($1, $2, 'lesson_completed', $3, 40, $4::jsonb, now())
        `,
        [
          user.user_id,
          user.course_id,
          `Completed ${lesson.title}`,
          JSON.stringify({ lessonSlug, lessonId: lesson.id }),
        ]
      );

      if (body.nextLessonSlug) {
        const nextLessonSlug = normalizeLessonSlug(body.nextLessonSlug);
        const nextLessonResult = await client.query(
          `
            SELECT l.id
            FROM public.lessons l
            JOIN public.modules m ON m.id = l.module_id
            WHERE m.course_id = $1
              AND l.slug = $2
            LIMIT 1
          `,
          [user.course_id, nextLessonSlug]
        );
        const [nextLesson] = nextLessonResult.rows;

        if (nextLesson) {
          await client.query(
            `
              INSERT INTO public.lesson_progress (user_id, lesson_id, status, xp_awarded)
              VALUES ($1, $2, 'available', 0)
              ON CONFLICT (user_id, lesson_id) DO UPDATE
              SET status = CASE
                    WHEN public.lesson_progress.status = 'locked' THEN 'available'
                    ELSE public.lesson_progress.status
                  END
            `,
            [user.user_id, nextLesson.id]
          );

          if (body.advanceToNext) {
            const nextSegmentResult = await client.query(
              `
                SELECT id
                FROM public.lesson_segments
                WHERE lesson_id = $1
                ORDER BY CASE WHEN slug = 'lesson-start' THEN 0 ELSE 1 END, sort_order
                LIMIT 1
              `,
              [nextLesson.id]
            );

            await client.query(
              `
                UPDATE public.student_progress
                SET current_lesson_id = $3,
                    current_segment_id = $4,
                    updated_at = now()
                WHERE course_id = $1
                  AND user_id = $2
              `,
              [user.course_id, user.user_id, nextLesson.id, nextSegmentResult.rows[0]?.id || null]
            );
          }
        }
      }
    }

    await client.query("COMMIT");
    const courseUser = await buildCourseUser(client, user.user_id);
    return jsonResponse({ ok: true, user: courseUser, ...(examResult || {}) });
  } catch (error) {
    await client.query("ROLLBACK").catch(() => undefined);
    console.error("Failed to save lesson progress", error);
    return jsonResponse({ error: "Failed to save lesson progress" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/lesson-progress",
  method: ["POST"],
};
