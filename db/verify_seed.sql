WITH course AS (
  SELECT id
  FROM public.courses
  WHERE code = 'GREK 110 J10'
    AND term = 'Spring 2027'
),
seed_users AS (
  SELECT unnest(ARRAY[
    'tpalston@email.sc.edu',
    'BECKMA@mailbox.sc.edu',
    'jdavis@email.sc.edu',
    'skim@email.sc.edu',
    'achen@email.sc.edu',
    'mlopez@email.sc.edu',
    'paristocles@email.sc.edu',
    'ahomer@email.sc.edu',
    'phomer@email.sc.edu',
    'tclay@email.sc.edu',
    'jdoe@email.sc.edu',
    'sdoe@email.sc.edu',
    'mcontrary@email.sc.edu',
    'agreat@email.sc.edu',
    'dlaertius@email.sc.edu',
    'apapadopoulos@email.sc.edu',
    'dgeorgiou@email.sc.edu',
    'nioannidis@email.sc.edu'
  ]::citext[]) AS email
),
seed_user_rows AS (
  SELECT u.id
  FROM public.users u
  JOIN seed_users su ON su.email = u.email
)
SELECT 'courses' AS check_name, count(*)::text AS actual, '1' AS expected
FROM public.courses
WHERE code = 'GREK 110 J10'
  AND term = 'Spring 2027'
UNION ALL
SELECT 'roles', count(*)::text, '3'
FROM public.roles
WHERE id IN ('administrator', 'professor', 'student')
UNION ALL
SELECT 'seed users', count(*)::text, '18'
FROM seed_user_rows
UNION ALL
SELECT 'user_roles', count(*)::text, '21'
FROM public.user_roles ur
JOIN seed_user_rows sur ON sur.id = ur.user_id
WHERE ur.role_id IN ('administrator', 'professor', 'student')
UNION ALL
SELECT 'course_memberships', count(*)::text, '18'
FROM public.course_memberships cm
JOIN course c ON c.id = cm.course_id
JOIN seed_user_rows sur ON sur.id = cm.user_id
WHERE cm.enrollment_status = 'active'
UNION ALL
SELECT 'student_progress', count(*)::text, '18'
FROM public.student_progress sp
JOIN course c ON c.id = sp.course_id
JOIN seed_user_rows sur ON sur.id = sp.user_id
UNION ALL
SELECT 'lesson_progress', count(*)::text, '918'
FROM public.lesson_progress lp
JOIN seed_user_rows sur ON sur.id = lp.user_id
UNION ALL
SELECT 'activity_events', count(*)::text, 'at least 54'
FROM public.activity_events ae
JOIN course c ON c.id = ae.course_id
JOIN seed_user_rows sur ON sur.id = ae.user_id
UNION ALL
SELECT 'modules', count(*)::text, '5'
FROM public.modules m
JOIN course c ON c.id = m.course_id
UNION ALL
SELECT 'lessons', count(*)::text, '51'
FROM public.lessons l
JOIN public.modules m ON m.id = l.module_id
JOIN course c ON c.id = m.course_id
UNION ALL
SELECT 'achievements', count(*)::text, '5'
FROM public.achievements
WHERE slug IN ('first-steps', 'word-collector', 'grammar-novice', 'diligent-learner', 'sophos')
UNION ALL
SELECT 'levels', count(*)::text, '4'
FROM public.levels levels
JOIN course c ON c.id = levels.course_id;

SELECT u.email::text, array_agg(ur.role_id ORDER BY CASE ur.role_id WHEN 'administrator' THEN 1 WHEN 'professor' THEN 2 WHEN 'student' THEN 3 ELSE 4 END) AS roles
FROM public.users u
JOIN public.user_roles ur ON ur.user_id = u.id
WHERE u.email IN (
  'tpalston@email.sc.edu',
  'BECKMA@mailbox.sc.edu',
  'jdavis@email.sc.edu'
)
GROUP BY u.email
ORDER BY u.email;

SELECT u.name, l.slug AS current_lesson, sp.level_number, sp.level_label, sp.xp, sp.weekly_goal_lessons
FROM public.student_progress sp
JOIN public.users u ON u.id = sp.user_id
JOIN public.lessons l ON l.id = sp.current_lesson_id
JOIN public.courses c ON c.id = sp.course_id
WHERE c.code = 'GREK 110 J10'
  AND c.term = 'Spring 2027'
ORDER BY sp.xp DESC, u.name;
