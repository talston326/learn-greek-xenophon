-- Add the March of the Ten Thousand introduction and animated map to Lesson 13.
-- Keep the existing culture sections, questions, review, and assessments intact.
BEGIN;
DO $lesson13march$
DECLARE
  lesson_id_value uuid;
  old_content jsonb;
  block_culture jsonb;
  new_body jsonb := $json$[
    "Xenophon’s Anabasis tells the story of Cyrus the Younger’s expedition and the Greek troops who served him. In 401 BCE Cyrus assembled an army at Sardis, claiming that he meant to campaign against the Pisidians. His real aim was to challenge his brother, Artaxerxes II, for the Persian throne. The army marched deep into Mesopotamia and fought the king’s forces at Cunaxa, where Cyrus was killed.",
    "After the Greek commanders were seized and killed, the soldiers chose new leaders, including Xenophon. They fought their way north through the mountains of Armenia, reached the Black Sea at Trapezus, and continued west. Xenophon’s account ends in western Asia Minor. Follow the journey on the animated map below; the route is a historical reconstruction, and some locations remain uncertain."
  ]$json$::jsonb;
  new_map jsonb := $json${"src":"maps/ten-thousand.html","title":"The March of the Ten Thousand animated route","caption":"Play the expedition from Sardis to Cunaxa, the Black Sea, and Pergamum. Select a stop or change the playback speed to explore the route."}$json$::jsonb;
  updated_rows integer;
BEGIN
  SELECT l.id, o.content INTO STRICT lesson_id_value, old_content
  FROM public.lessons l JOIN public.lesson_content_overrides o ON o.lesson_id=l.id
  WHERE l.slug='lesson-13' FOR UPDATE OF l,o;

  IF old_content->>'contentRevision'='lesson-13-module-2-v2' THEN RETURN; END IF;
  IF old_content->>'contentRevision' <> 'lesson-13-module-2-v1'
    OR old_content#>>'{culture,title}' <> 'Sardis, Command, and Care'
    OR old_content#>>'{pages,2,title}' <> 'Sardis, Command, and Care'
    OR old_content#>'{culture,body}' <> '[]'::jsonb
    OR old_content#>'{culture,interactiveMap}' IS NOT NULL THEN
    RAISE EXCEPTION 'Lesson 13 content has changed; review before applying the March map update';
  END IF;

  SELECT b.content->'value' INTO STRICT block_culture
  FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id
  WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'='culture'
  FOR UPDATE OF b;
  IF block_culture <> old_content->'culture' THEN
    RAISE EXCEPTION 'Lesson 13 published culture differs from its lesson record';
  END IF;

  UPDATE public.lesson_content_overrides o
  SET content=jsonb_set(
    jsonb_set(
      jsonb_set(
        jsonb_set(
          jsonb_set(
            jsonb_set(o.content,'{culture,title}',to_jsonb('The March of the Ten Thousand'::text)),
            '{pages,2,title}',to_jsonb('The March of the Ten Thousand'::text)),
          '{culture,body}',new_body),
        '{culture,interactiveMap}',new_map),
      '{culture,sources}',
      jsonb_build_array(jsonb_build_object('title','Xenophon, Anabasis, Books 1–7','url','https://www.gutenberg.org/files/1170/1170-h/1170-h.htm')) || (o.content#>'{culture,sources}')),
    '{contentRevision}',to_jsonb('lesson-13-module-2-v2'::text)),
    version=o.version+1,updated_at=now()
  WHERE o.lesson_id=lesson_id_value;

  UPDATE public.lesson_segments SET title='The March of the Ten Thousand'
  WHERE lesson_id=lesson_id_value AND slug='lesson-13-page-3';

  UPDATE public.lesson_content_blocks b
  SET content=jsonb_set(b.content,'{value}',(SELECT o.content->'culture' FROM public.lesson_content_overrides o WHERE o.lesson_id=lesson_id_value)),updated_at=now()
  FROM public.lesson_segments s
  WHERE b.segment_id=s.id AND s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'='culture';
  GET DIAGNOSTICS updated_rows = ROW_COUNT;
  IF updated_rows <> 1 THEN RAISE EXCEPTION 'Expected one Lesson 13 culture block, updated %',updated_rows; END IF;
END
$lesson13march$;
COMMIT;
