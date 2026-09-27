-- Apply the approved Lesson 2 household banner without changing lesson progress.
BEGIN;

UPDATE public.lesson_content_overrides AS o
SET content = jsonb_set(
      o.content,
      '{banner}',
      COALESCE(o.content->'banner', '{}'::jsonb) || jsonb_build_object(
        'image', 'assets/lesson-2-banner.png',
        'alt', 'Xenophon''s mother directs household work while Xenophon and Gryllus leave for the fields with a horse and donkey'
      )
    ),
    version = o.version + 1,
    updated_at = now()
FROM public.lessons AS l
WHERE o.lesson_id = l.id
  AND l.slug = 'lesson-2'
  AND (
    o.content #>> '{banner,image}' IS DISTINCT FROM 'assets/lesson-2-banner.png'
    OR o.content #>> '{banner,alt}' IS DISTINCT FROM 'Xenophon''s mother directs household work while Xenophon and Gryllus leave for the fields with a horse and donkey'
  );

DO $check$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.lesson_content_overrides AS o
    JOIN public.lessons AS l ON l.id = o.lesson_id
    WHERE l.slug = 'lesson-2'
      AND o.content #>> '{banner,image}' = 'assets/lesson-2-banner.png'
  ) THEN
    RAISE EXCEPTION 'Lesson 2 banner override is missing';
  END IF;
END
$check$;

COMMIT;
