BEGIN;

UPDATE public.achievements
SET image_path = regexp_replace(image_path, '\.png$', '.webp')
WHERE image_path LIKE 'assets/awards/%.png';

COMMIT;
