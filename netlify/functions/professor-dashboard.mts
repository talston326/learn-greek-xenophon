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

type StudentRow = {
  user_id: string;
  name: string;
  email: string;
  level_number: number | null;
  level_label: string | null;
  xp: number | null;
  current_lesson_slug: string | null;
  current_lesson_label: string | null;
  current_lesson_title: string | null;
  completed_lessons: number;
  total_lessons: number;
  last_activity_at: string | null;
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

function relativeWhen(value: string | null) {
  if (!value) {
    return "No activity";
  }

  const elapsedMs = Date.now() - new Date(value).getTime();
  const elapsedHours = Math.max(0, Math.round(elapsedMs / 36e5));

  if (elapsedHours < 24) {
    return "Today";
  }

  if (elapsedHours < 48) {
    return "Yesterday";
  }

  return `${Math.round(elapsedHours / 24)} days ago`;
}

function daysSince(value: string | null) {
  if (!value) {
    return Number.POSITIVE_INFINITY;
  }

  return Math.floor((Date.now() - new Date(value).getTime()) / 86400000);
}

function derivedAverageGrade(row: StudentRow) {
  const xp = row.xp || 0;
  const completion = row.total_lessons ? row.completed_lessons / row.total_lessons : 0;
  return Math.min(98, Math.max(62, Math.round(68 + completion * 24 + Math.min(8, xp / 120))));
}

function studentStatus(row: StudentRow, grade: number) {
  const inactiveDays = daysSince(row.last_activity_at);

  if (inactiveDays >= 7 || grade < 70) {
    return "Needs Attention";
  }

  if (inactiveDays >= 3 || grade < 80) {
    return "At Risk";
  }

  return "Active";
}

function lessonTitle(row: StudentRow) {
  if (!row.current_lesson_label && !row.current_lesson_title) {
    return "Not started";
  }

  return [row.current_lesson_label, row.current_lesson_title].filter(Boolean).join(" — ");
}

function summarizeAttention(students: ReturnType<typeof buildStudents>) {
  return students
    .filter((student) => student.status !== "Active")
    .slice(0, 5)
    .map((student) => [
      student.name,
      student.status === "Needs Attention"
        ? `${student.lastActivity}; average ${student.averageGrade}`
        : `${student.lastActivity}; monitor pacing`,
    ]);
}

function buildStudents(rows: StudentRow[]) {
  return rows.map((row) => {
    const averageGradeNumber = derivedAverageGrade(row);
    const progress = row.total_lessons
      ? Math.round((row.completed_lessons / row.total_lessons) * 100)
      : 0;

    return {
      name: row.name,
      email: row.email,
      progress,
      currentLessonId: row.current_lesson_slug || "intro-1",
      currentLesson: lessonTitle(row),
      level: row.level_label || "Novice",
      levelNumber: row.level_number || 0,
      averageGrade: `${averageGradeNumber}%`,
      lastActivity: relativeWhen(row.last_activity_at),
      status: studentStatus(row, averageGradeNumber),
    };
  });
}

function summarizeGrades(students: ReturnType<typeof buildStudents>) {
  const buckets = [
    ["A range", 0, 90, 100],
    ["B range", 0, 80, 89],
    ["C range", 0, 70, 79],
    ["Below C", 0, 0, 69],
  ] as [string, number, number, number][];

  students.forEach((student) => {
    const grade = Number.parseInt(student.averageGrade, 10);
    const bucket = buckets.find(([, , min, max]) => grade >= min && grade <= max);

    if (bucket) {
      bucket[1] += 1;
    }
  });

  return buckets.map(([label, count]) => [
    label,
    `${count} ${count === 1 ? "student" : "students"}`,
    students.length ? Math.round((count / students.length) * 100) : 0,
  ]);
}

export default async (request: Request) => {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const connectionString = getConnectionString();

  if (!connectionString) {
    return jsonResponse({ error: "Database is not configured" }, 500);
  }

  const url = new URL(request.url);
  const courseCode = url.searchParams.get("courseCode") || "GREK 110 J10";
  const term = url.searchParams.get("term") || "Spring 2027";
  const client = new Client({ connectionString });

  try {
    await client.connect();

    const courseResult = await client.query(
      `
        SELECT id, code, title, term
        FROM public.courses
        WHERE code = $1
          AND term = $2
        LIMIT 1
      `,
      [courseCode, term]
    );
    const [course] = courseResult.rows;

    if (!course) {
      return jsonResponse({ error: "Course not found" }, 404);
    }

    const studentsResult = await client.query<StudentRow>(
      `
        WITH total_lessons AS (
          SELECT count(*)::int AS count
          FROM public.lessons l
          JOIN public.modules m ON m.id = l.module_id
          WHERE m.course_id = $1
        ),
        completed AS (
          SELECT lp.user_id, count(*)::int AS count
          FROM public.lesson_progress lp
          JOIN public.lessons l ON l.id = lp.lesson_id
          JOIN public.modules m ON m.id = l.module_id
          WHERE m.course_id = $1
            AND lp.status = 'completed'
          GROUP BY lp.user_id
        ),
        latest_activity AS (
          SELECT user_id, max(occurred_at) AS last_activity_at
          FROM public.activity_events
          WHERE course_id = $1
          GROUP BY user_id
        )
        SELECT
          u.id AS user_id,
          u.name,
          u.email::text AS email,
          sp.level_number,
          sp.level_label,
          sp.xp,
          current_lesson.slug AS current_lesson_slug,
          current_lesson.number_label AS current_lesson_label,
          current_lesson.title AS current_lesson_title,
          coalesce(completed.count, 0)::int AS completed_lessons,
          total_lessons.count::int AS total_lessons,
          latest_activity.last_activity_at
        FROM public.course_memberships cm
        JOIN public.users u ON u.id = cm.user_id
        LEFT JOIN public.student_progress sp ON sp.course_id = cm.course_id AND sp.user_id = cm.user_id
        LEFT JOIN public.lessons current_lesson ON current_lesson.id = sp.current_lesson_id
        LEFT JOIN completed ON completed.user_id = cm.user_id
        LEFT JOIN latest_activity ON latest_activity.user_id = cm.user_id
        CROSS JOIN total_lessons
        WHERE cm.course_id = $1
          AND cm.enrollment_status = 'active'
        ORDER BY u.name
      `,
      [course.id]
    );

    const students = buildStudents(studentsResult.rows);
    const activeThisWeek = studentsResult.rows.filter((row) => daysSince(row.last_activity_at) <= 7).length;
    const averageCompletion = students.length
      ? Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length)
      : 0;
    const averageGrade = students.length
      ? Math.round(students.reduce((sum, student) => sum + Number.parseInt(student.averageGrade, 10), 0) / students.length)
      : 0;

    const attemptsResult = await client.query(
      `
        SELECT ea.status, ea.score, ea.max_score, ea.submitted_at, u.name AS student_name, e.title
        FROM public.exercise_attempts ea
        JOIN public.users u ON u.id = ea.user_id
        JOIN public.exercises e ON e.id = ea.exercise_id
        JOIN public.lessons l ON l.id = e.lesson_id
        JOIN public.modules m ON m.id = l.module_id
        WHERE m.course_id = $1
        ORDER BY ea.submitted_at DESC
        LIMIT 4
      `,
      [course.id]
    );

    const pendingSubmissions = attemptsResult.rows.filter((row) => row.status === "submitted").length;
    const needsReview = attemptsResult.rows.filter((row) => row.status === "needs_review").length;
    const recentSubmissions = attemptsResult.rows.map((row) => [
      row.title,
      row.student_name,
      row.score != null && row.max_score
        ? `${Math.round((Number(row.score) / Number(row.max_score)) * 100)}%`
        : row.status.replace(/_/g, " "),
    ]);

    const lessonProgressResult = await client.query(
      `
        SELECT l.number_label, l.title, count(lp.*) FILTER (WHERE lp.status = 'completed')::int AS completed_count
        FROM public.lessons l
        JOIN public.modules m ON m.id = l.module_id
        LEFT JOIN public.lesson_progress lp ON lp.lesson_id = l.id
        WHERE m.course_id = $1
        GROUP BY m.sort_order, l.sort_order, l.number_label, l.title
        ORDER BY m.sort_order, l.sort_order
        LIMIT 6
      `,
      [course.id]
    );

    const lessonProgress = lessonProgressResult.rows.map((row) => {
      const percent = students.length ? Math.round((row.completed_count / students.length) * 100) : 0;
      return [
        row.number_label,
        `${row.completed_count} completed`,
        percent,
      ];
    });

    return jsonResponse({
      course,
      overview: [
        ["Total Students", String(students.length)],
        ["Active This Week", String(activeThisWeek)],
        ["Average Completion", `${averageCompletion}%`],
        ["Average Grade", `${averageGrade}%`],
      ],
      grading: [
        ["Pending Submissions", String(pendingSubmissions)],
        ["Needs Review", String(needsReview)],
        ["Overdue", String(students.filter((student) => student.status === "Needs Attention").length)],
      ],
      weeklyActivity: [
        ["Lessons Completed This Week", String(studentsResult.rows.filter((row) => daysSince(row.last_activity_at) <= 7).length)],
        ["Average Completion", `${averageCompletion}%`],
        ["Most Active Lesson", students[0]?.currentLesson || "No activity yet"],
      ],
      students,
      attention: summarizeAttention(students),
      submissions: recentSubmissions,
      lessonProgress,
      grades: summarizeGrades(students),
    });
  } catch (error) {
    console.error("Failed to load professor dashboard", error);
    return jsonResponse({ error: "Failed to load professor dashboard" }, 500);
  } finally {
    await client.end();
  }
};

export const config = {
  path: "/api/professor-dashboard",
  method: ["GET"],
};
