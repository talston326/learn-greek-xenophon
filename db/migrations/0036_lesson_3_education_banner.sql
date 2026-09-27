-- Apply the approved Lesson 3 schoolroom banner without changing lesson progress.
BEGIN;

UPDATE public.lesson_content_overrides AS o
SET content = jsonb_set(
      o.content,
      '{banner}',
      COALESCE(o.content->'banner', '{}'::jsonb) || jsonb_build_object(
        'image', 'assets/lesson-3-banner.png',
        'alt', 'Young Xenophon practices writing while a teacher reads Homer and another teacher instructs boys in music'
      )
    ),
    version = o.version + 1,
    updated_at = now()
FROM public.lessons AS l
WHERE o.lesson_id = l.id
  AND l.slug = 'lesson-3'
  AND (
    o.content #>> '{banner,image}' IS DISTINCT FROM 'assets/lesson-3-banner.png'
    OR o.content #>> '{banner,alt}' IS DISTINCT FROM 'Young Xenophon practices writing while a teacher reads Homer and another teacher instructs boys in music'
  );

DO $check$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.lesson_content_overrides AS o
    JOIN public.lessons AS l ON l.id = o.lesson_id
    WHERE l.slug = 'lesson-3'
      AND o.content #>> '{banner,image}' = 'assets/lesson-3-banner.png'
  ) THEN
    RAISE EXCEPTION 'Lesson 3 banner override is missing';
  END IF;
END
$check$;

COMMIT;
