-- Replace the obsolete Socrates/agora culture page for Lesson 1 only.
-- The rest of the published lesson, including activities and learner progress, is preserved.
BEGIN;
DO $lesson1_culture$
DECLARE
  lesson_id_value uuid;
  current_content jsonb;
  new_culture jsonb := $culture${
  "title": "A Horse in Xenophon’s Household",
  "body": [
    "The reading begins with Xenophon’s family outside the city of Athens. A later ancient writer, Diogenes Laertius, names Xenophon as the son of Gryllus and a citizen of the Athenian district (deme) of Erchia. Deme membership tells us about civic identity; it does not prove that Xenophon lived in Erchia as a child. The house on a hill, his mother calling the family to dinner, the dog, and this particular day with the horse are scenes reconstructed for the course, not recorded events.",
    "Xenophon brings the horse water and grain, then leads it toward the field before going in to eat. Care for a horse was daily work. Much later, in On Horsemanship, Xenophon advises an owner to watch the horse often and attend to its food, exercise, feet, and signs of illness. He also discusses the groom’s work. His advice helps us understand why the reading gives the horse such attention, but it does not tell us that the young Xenophon personally performed these chores.",
    "The mother’s call brings the household together at the end of the reading. The scene connects the care of an animal with the shared rhythm of work and dinner. As you reread, notice what each person does: Gryllus praises Xenophon, his mother calls them inside, and Xenophon finishes caring for the horse before joining the family."
  ],
  "sources": [
    {
      "title": "Diogenes Laertius, Lives of the Eminent Philosophers 2.48 (Gryllus and Erchia)",
      "url": "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diogenes_Laertius/Lives_of_the_Eminent_Philosophers/2/Xenophon*.html"
    },
    {
      "title": "Xenophon, On Horsemanship 4 (feeding, exercise, and the horse’s condition)",
      "url": "https://cts.perseids.org/read/greekLit/tlg0032/tlg013/perseus-eng2/4.1-4.5"
    },
    {
      "title": "Xenophon, On Horsemanship 5 (the groom’s work)",
      "url": "https://www.falsafa.ai/works/xenophon-on-the-art-of-horsemanship-9c7615/05/translation/"
    }
  ],
  "questions": [
    {
      "prompt": "What does Xenophon do for the horse in the reading?",
      "answer": "He brings it water and grain, then leads it toward the field."
    },
    {
      "prompt": "What does the ancient evidence tell us about Erchia?",
      "answer": "A later ancient writer identifies Erchia as Xenophon’s Athenian deme; his childhood home there is not documented."
    },
    {
      "prompt": "How does Xenophon’s later writing help us understand the horse scene?",
      "answer": "On Horsemanship shows that feeding, exercise, and attentive care mattered, though it does not document these childhood chores."
    }
  ]
}$culture$::jsonb;
BEGIN
  SELECT id INTO STRICT lesson_id_value
  FROM public.lessons WHERE slug = 'lesson-1' FOR UPDATE;

  SELECT content INTO STRICT current_content
  FROM public.lesson_content_overrides
  WHERE lesson_id = lesson_id_value FOR UPDATE;

  IF current_content->'culture' = new_culture THEN
    RETURN;
  END IF;

  IF current_content #>> '{culture,title}' IS DISTINCT FROM 'Socrates in the Agora' THEN
    RAISE EXCEPTION 'Lesson 1 culture has changed; review it before replacing the page.';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.lesson_content_blocks b
    JOIN public.lesson_segments s ON s.id = b.segment_id
    WHERE s.lesson_id = lesson_id_value
      AND b.content->>'source' = 'lesson_publish'
      AND b.content->>'kind' = 'culture'
      AND b.content #>> '{value,title}' IS DISTINCT FROM 'Socrates in the Agora'
  ) THEN
    RAISE EXCEPTION 'Lesson 1 published culture block has changed; review it before replacing the page.';
  END IF;

  UPDATE public.lesson_content_overrides
  SET content = jsonb_set(
      jsonb_set(current_content, '{culture}', new_culture, true),
      '{contentRevision}', to_jsonb('lesson-1-horse-household-culture-v1'::text), true
    ),
    version = version + 1,
    updated_at = now()
  WHERE lesson_id = lesson_id_value;

  UPDATE public.lesson_content_blocks b
  SET content = jsonb_set(b.content, '{value}', new_culture, true),
      updated_at = now()
  FROM public.lesson_segments s
  WHERE b.segment_id = s.id
    AND s.lesson_id = lesson_id_value
    AND b.content->>'source' = 'lesson_publish'
    AND b.content->>'kind' = 'culture';
END
$lesson1_culture$;
COMMIT;
