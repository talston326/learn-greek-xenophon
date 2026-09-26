-- Add the Agora culture page to Lesson 5 without changing its reading or assessments.
BEGIN;
DO $lesson5agora$
DECLARE
  patch jsonb := $json${
  "contentRevision": "lesson-5-agora-culture-v1",
  "pages": [
    {
      "page": 1,
      "slug": "lesson-5-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-5-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-5-page-3",
      "title": "The Athens Agora",
      "template": "culture"
    }
  ],
  "culture": {
    "title": "The Athens Agora",
    "banner": {
      "image": "assets/lesson-5-agora-banner.png",
      "alt": "Artist’s reconstruction of a busy Classical Athenian agora, with market stalls, walkers, colonnades, and the Acropolis beyond.",
      "caption": "Artist’s reconstruction of the Athenian Agora in the Classical period."
    },
    "body": [
      "Imagine following Xenophon out of the narrow lane and into the wide open space below the Acropolis. Voices rise from the stalls: someone asks the price of bread, a seller calls out to a customer, and neighbors stop to exchange news. This is the agora. The Greek word ἀγορά can mean both a gathering place and a marketplace, and in Athens it was the busy center of daily public life.",
      "Trade was only one reason to come. Athenians bought food and household goods, met friends, heard announcements, and passed the workshops and shops around the square. Covered colonnades called stoas offered places to walk and talk out of the sun. The Panathenaic Way crossed the agora on its route toward the Acropolis; during the city’s great festival for Athena, a procession traveled along it. Altars and shrines made religion part of this same public landscape.",
      "Government was close at hand. On the western side stood the Bouleuterion, where the Council of Five Hundred prepared business for the city, and the round Tholos, used by council members on duty. Public notices and monuments helped citizens see what their city valued and decided. The larger citizen Assembly usually met on the Pnyx hill, not in the agora, but the square remained a place where politics, law, and ordinary conversation met.",
      "The people moving through this space did not all have the same rights. Adult male citizens held formal political power; women, resident foreigners, and enslaved people also formed part of Athens’s working and social life. A trip through the agora might therefore reveal both the energy of the city and the limits of its democracy.",
      "For Socrates, a crowded place was also a place to ask questions. Xenophon later wrote that Socrates could be seen in the marketplace when it was full, speaking where others could listen (Memorabilia 1.1.10). That detail helps us picture why a conversation about bread could lead toward a larger question: where should someone go to learn how to live well? The bread seller in our reading is invented, but the agora was a real setting in which commerce and inquiry could meet."
    ],
    "plan": {
      "title": "Plan of the Classical Athenian Agora",
      "image": "assets/lesson-5-agora-plan.svg",
      "alt": "Numbered plan of the Classical Athenian Agora, showing the Panathenaic Way crossing the square and civic buildings grouped along its western side.",
      "placeholder": "Plan image to be added here.",
      "caption": "Map key: 7 Bouleuterion; 13 New Bouleuterion; 14 Tholos; 11 Painted Stoa; 12 Temple of Hephaistos. The Panathenaic Way crosses the square diagonally.",
      "credit": "Unmodified plan by Tomisti (2016), Wikimedia Commons, CC BY-SA 4.0.",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Plan_Agora_of_Athens_Classical_colored.svg",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    "sources": [
      {
        "title": "American School of Classical Studies at Athens: Athenian Agora",
        "url": "https://www.ascsa.edu.gr/excavations/athenian-agora"
      },
      {
        "title": "American School of Classical Studies at Athens: An Ancient Shopping Center",
        "url": "https://www.ascsa.edu.gr/publications/book/?i=9780876616352"
      },
      {
        "title": "Xenophon, Memorabilia 1.1.10 (Perseus Digital Library)",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Xen.+Mem.+1.1.10"
      },
      {
        "title": "American School of Classical Studies at Athens: Women in the Athenian Agora",
        "url": "https://www.ascsa.edu.gr/uploads/media/WomenInTheAthenianAgora.pdf"
      },
      {
        "title": "Tomisti: Plan of the Classical Athenian Agora (CC BY-SA 4.0)",
        "url": "https://commons.wikimedia.org/wiki/File:Plan_Agora_of_Athens_Classical_colored.svg"
      }
    ]
  }
}$json$::jsonb;
  expected_preview jsonb := $preview${"title":"Learning Through Questioning: Source Preview","body":["Source anchor: Memorabilia 4.6.1–15.","This lesson will use Socratic questioning to show how Greek adjectives describe, classify, and evaluate a person. The final vocabulary, Greek reading, and polished historical commentary will be added in a later authoring pass."],"questions":[]}$preview$::jsonb;
  lesson_id_value uuid;
  old_content jsonb;
  old_block_culture jsonb;
  old_version integer;
  updated_blocks integer;
BEGIN
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug = 'lesson-5' FOR UPDATE;
  SELECT content, version INTO STRICT old_content, old_version
  FROM public.lesson_content_overrides WHERE lesson_id = lesson_id_value FOR UPDATE;
  SELECT b.content->'value' INTO old_block_culture
  FROM public.lesson_content_blocks b
  JOIN public.lesson_segments s ON s.id = b.segment_id
  WHERE s.lesson_id = lesson_id_value
    AND b.content->>'source' = 'lesson_publish'
    AND b.content->>'kind' = 'culture'
  FOR UPDATE OF b;
  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN
    IF old_content->'pages' IS DISTINCT FROM patch->'pages'
       OR old_content->'culture' IS DISTINCT FROM patch->'culture'
       OR old_block_culture IS DISTINCT FROM patch->'culture' THEN
      RAISE EXCEPTION 'Lesson 5 Agora revision matches but page content differs; review before publishing';
    END IF;
    RETURN;
  END IF;
  IF old_content->>'contentRevision' IS DISTINCT FROM 'lesson-5-practice-rounds-v2'
     OR old_version < 3
     OR jsonb_array_length(old_content->'pages') <> 2
     OR old_content->'culture' IS DISTINCT FROM expected_preview
     OR old_block_culture IS DISTINCT FROM expected_preview THEN
    RAISE EXCEPTION 'Lesson 5 published content changed after Agora authoring; review before publishing';
  END IF;
  INSERT INTO public.lesson_content_versions (lesson_id, content, version, note)
  VALUES (lesson_id_value, old_content, old_version, 'Before Lesson 5 Agora culture page');
  UPDATE public.lesson_content_overrides
  SET content = old_content || patch, version = old_version + 1, updated_at = now()
  WHERE lesson_id = lesson_id_value;
  UPDATE public.lesson_content_blocks b
  SET content = jsonb_set(b.content, '{value}', patch->'culture'), updated_at = now()
  FROM public.lesson_segments s
  WHERE b.segment_id = s.id AND s.lesson_id = lesson_id_value
    AND b.content->>'source' = 'lesson_publish'
    AND b.content->>'kind' = 'culture';
  GET DIAGNOSTICS updated_blocks = ROW_COUNT;
  IF updated_blocks <> 1 THEN
    RAISE EXCEPTION 'Expected one Lesson 5 published culture block; found %', updated_blocks;
  END IF;
END
$lesson5agora$;
COMMIT;
