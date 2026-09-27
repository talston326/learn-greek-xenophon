-- Add historical context to Lesson 8 without replacing administrator edits to other content.
BEGIN;
DO $lesson8_history$
DECLARE
  lesson_id_value uuid;
  current_content jsonb;
  revised_content jsonb;
  new_sections jsonb := $sections$[
  {
    "title": "War, Plague, and the Return of Democracy",
    "body": [
      "From 431 to 404 BCE, Athens fought Sparta and its allies in the Peloponnesian War. Early in the war, a devastating epidemic struck Athens in 430 BCE. Thucydides, who survived it, describes widespread illness and death. The plague came decades before Aristarchus’s crisis; Xenophon does not connect this household to any particular illness.",
      "After Athens surrendered in 404 BCE, an oligarchic board of Thirty took control with Spartan backing. The rulers later known as the Thirty Tyrants executed and expelled opponents and seized property. Democratic opponents gathered at Piraeus and fought those holding the city. This is the civil strife, or stasis, that forms the setting of Aristarchus’s complaint.",
      "Aristarchus says many people fled to Piraeus, while sisters, nieces, and cousins left behind came to him. He also says opponents held his land. Xenophon does not say that Aristarchus himself fled, identify his political allegiance, or date the conversation precisely.",
      "After further fighting and a negotiated settlement in 403 BCE, democracy returned to Athens. An amnesty aimed to limit reprisals, with exceptions for leading officials of the oligarchy. The city’s political recovery provides a wider frame for Xenophon’s smaller story of a household finding work and food."
    ]
  }
]$sections$::jsonb;
  new_sources jsonb := $sources$[
  {
    "title": "Thucydides, History of the Peloponnesian War 2.47–54 (the plague)",
    "url": "https://www.livius.org/sources/content/thucydides-historian/the-plague/"
  },
  {
    "title": "Xenophon, Hellenica 2.2–4 (defeat, the Thirty, and restoration)",
    "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C001%3A2"
  },
  {
    "title": "Constitution of the Athenians 34–40 (the Thirty and democratic restoration)",
    "url": "https://www.livius.org/sources/content/aristotle/constitution-of-the-athenians/the-regime-of-the-thirty/"
  }
]$sources$::jsonb;
BEGIN
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug = 'lesson-8' FOR UPDATE;
  SELECT content INTO current_content FROM public.lesson_content_overrides WHERE lesson_id = lesson_id_value FOR UPDATE;
  IF current_content IS NULL THEN
    RAISE EXCEPTION 'Lesson 8 must be published before applying the history update.';
  END IF;
  IF current_content->>'contentRevision' = 'lesson-8-household-history-v2' THEN
    RETURN;
  END IF;
  IF current_content->>'contentRevision' IS DISTINCT FROM 'lesson-8-household-complete-v1'
     OR (current_content #>> '{reading,introduction,0}' IS DISTINCT FROM $old_intro_live$Time has passed since the trip to Eleusis. In Athens, civil strife has left Aristarchus with sisters, nieces, and cousins in a crowded household and without the income he counted on. Socrates asks what skills the women already have.$old_intro_live$
         AND current_content #>> '{reading,introduction,0}' IS DISTINCT FROM $old_intro_initial$Time has passed since the reconstructed trip to Eleusis. In Athens, civil strife has left Aristarchus with sisters, nieces, and cousins in a crowded household and without the income he counted on. Socrates asks what skills the women already have.$old_intro_initial$)
     OR (current_content #> '{culture,sections}') IS NOT NULL THEN
    RAISE EXCEPTION 'Lesson 8 changed since the history update was prepared; review before applying.';
  END IF;

  revised_content := jsonb_set(current_content, '{reading,introduction,0}', to_jsonb($new_intro$Time has passed since the trip to Eleusis. Athens has endured the Peloponnesian War and, early in that war, a devastating plague. After Athens surrendered in 404 BCE, the oligarchic rulers known as the Thirty Tyrants took power with Spartan backing. Their opponents gathered at Piraeus, and civil conflict divided the city. In this turmoil, opponents hold Aristarchus’s land and his sisters, nieces, and cousins crowd into his home. Socrates asks what skills the women already have.$new_intro$::text), false);
  revised_content := jsonb_set(revised_content, '{culture,sections}', new_sections, true);
  revised_content := jsonb_set(revised_content, '{culture,sources}',
    new_sources || COALESCE(current_content #> '{culture,sources}', '[]'::jsonb), true);
  revised_content := jsonb_set(revised_content, '{contentRevision}',
    to_jsonb('lesson-8-household-history-v2'::text), true);

  UPDATE public.lesson_content_overrides
  SET content = revised_content, version = version + 1, updated_at = now()
  WHERE lesson_id = lesson_id_value;

  UPDATE public.lesson_content_blocks AS b
  SET content = jsonb_set(b.content, '{value}', revised_content->'reading', true), updated_at = now()
  FROM public.lesson_segments AS s
  WHERE b.segment_id = s.id AND s.lesson_id = lesson_id_value
    AND b.content->>'source' = 'lesson_publish' AND b.content->>'kind' = 'reading';

  UPDATE public.lesson_content_blocks AS b
  SET content = jsonb_set(b.content, '{value}', revised_content->'culture', true), updated_at = now()
  FROM public.lesson_segments AS s
  WHERE b.segment_id = s.id AND s.lesson_id = lesson_id_value
    AND b.content->>'source' = 'lesson_publish' AND b.content->>'kind' = 'culture';
END
$lesson8_history$;
COMMIT;
