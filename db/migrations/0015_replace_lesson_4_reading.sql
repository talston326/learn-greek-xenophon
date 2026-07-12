-- Replace Lesson 4's pilot reading with the cavalry preparation reading only.
-- This migration intentionally does not modify practice, quiz, grade, or progress tables.

BEGIN;

CREATE TEMP TABLE lesson_4_reading_payload AS
SELECT
  $json$
{
  "id": "lesson-4",
  "number": 4,
  "title": "The Preparation Before the March",
  "greekTitle": "Ἡ Παρασκευὴ πρὸ τῆς πορείας",
  "scope": "Singular noun cases, singular adjective agreement, possessive genitive, and natural case usage in narrative",
  "theme": "Young Xenophon helps Gryllus prepare horse and cavalry equipment before military service.",
  "module": "Module 1: Growing Up in Classical Athens",
  "banner": {
    "placeholder": "Illustration placeholder: Young Xenophon brushing his father's horse while Gryllus prepares his cavalry equipment in the courtyard of their home.",
    "alt": "Illustration placeholder for young Xenophon brushing his father's horse while Gryllus prepares cavalry equipment",
    "caption": "Ἡ Παρασκευὴ πρὸ τῆς πορείας"
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-4-page-1",
      "title": "Reading",
      "template": "reading"
    }
  ],
  "vocabulary": [
    {
      "category": "Nouns",
      "items": [
        { "greek": "ὁ ἱππεύς", "lemma": "ἱππεύς", "english": "cavalryman", "status": "new required vocabulary", "dictionaryForm": "ἱππεύς, ἱππέως, ὁ", "gender": "masculine", "article": "ὁ", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "τὸ κράνος", "lemma": "κράνος", "english": "helmet", "status": "new required vocabulary", "dictionaryForm": "κράνος, κράνους, τό", "gender": "neuter", "article": "τό", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "ὁ θώραξ", "lemma": "θώραξ", "english": "cuirass", "status": "new required vocabulary", "dictionaryForm": "θώραξ, θώρακος, ὁ", "gender": "masculine", "article": "ὁ", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "ἡ λόγχη", "lemma": "λόγχη", "english": "spear", "status": "new required vocabulary", "dictionaryForm": "λόγχη, λόγχης, ἡ", "gender": "feminine", "article": "ἡ", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "ἡ ἀσπίς", "lemma": "ἀσπίς", "english": "shield", "status": "new required vocabulary", "dictionaryForm": "ἀσπίς, ἀσπίδος, ἡ", "gender": "feminine", "article": "ἡ", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "ἡ αὐλή", "lemma": "αὐλή", "english": "courtyard", "status": "new required vocabulary", "dictionaryForm": "αὐλή, αὐλῆς, ἡ", "gender": "feminine", "article": "ἡ", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "ὁ χαλκός", "lemma": "χαλκός", "english": "bronze", "status": "new required vocabulary", "dictionaryForm": "χαλκός, χαλκοῦ, ὁ", "gender": "masculine", "article": "ὁ", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } }
      ]
    },
    {
      "category": "Verbs",
      "items": [
        { "greek": "θεωρέω", "lemma": "θεωρέω", "english": "observe, inspect", "status": "new required vocabulary", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "ψήχω", "lemma": "ψήχω", "english": "brush, groom", "status": "new required vocabulary", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "καθαίρω", "lemma": "καθαίρω", "english": "clean", "status": "new required vocabulary", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "μέλλω", "lemma": "μέλλω", "english": "be about to", "status": "new required vocabulary", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } },
        { "greek": "ἀναβαίνω", "lemma": "ἀναβαίνω", "english": "mount", "status": "new required vocabulary", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } }
      ]
    },
    {
      "category": "Adjective",
      "items": [
        { "greek": "ἐπιμελής", "lemma": "ἐπιμελής", "english": "careful, diligent", "status": "new required vocabulary", "dictionaryForm": "ἐπιμελής, ἐπιμελές", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } }
      ]
    },
    {
      "category": "Adverb",
      "items": [
        { "greek": "προθύμως", "lemma": "προθύμως", "english": "eagerly, willingly", "status": "new required vocabulary", "audioPlaceholder": true, "spacedRepetition": { "box": 1, "intervalDays": 0, "ease": 2.5 } }
      ]
    }
  ],
  "reading": {
    "title": "Ἡ Παρασκευὴ πρὸ τῆς πορείας",
    "showQuickActions": true,
    "audioPlaceholder": "Reading audio placeholder",
    "paragraphs": [
      {
        "greek": "Πρωΐ ἐστιν. ὁ Γρύλλος ἐν τῇ αὐλῇ ἕστηκεν. ὁ γὰρ πατὴρ τοῦ Ξενοφῶντος ἱππεύς ἐστι καὶ μέλλει ἐκ τῆς οἰκίας ἀπιέναι. πρῶτον μὲν σκοπεῖ τὸν ἵππον· εἶτα δὲ τὸ κράνος καὶ τὸν θώρακα θεωρεῖ. μετὰ ταῦτα τὴν ἀσπίδα καὶ τὴν λόγχην λαμβάνει. πάντα καλὰ καὶ ἕτοιμά ἐστιν. ὁ δὲ Ξενοφῶν παρὰ τῷ πατρὶ ἵσταται καὶ σιγῇ βλέπει. ὁ γὰρ παῖς τὸν πατέρα θαυμάζει.",
        "gloss": [
          { "greek": "Πρωΐ", "english": "early in the morning" },
          { "greek": "ἕστηκεν", "english": "stands; has taken his stand" },
          { "greek": "μέλλει ... ἀπιέναι", "english": "is about to go away" },
          { "greek": "πρῶτον μὲν ... εἶτα δὲ", "english": "first ... and then" },
          { "greek": "μετὰ ταῦτα", "english": "after this" },
          { "greek": "λαμβάνει", "english": "takes, takes up" },
          { "greek": "πάντα", "english": "everything, all things" },
          { "greek": "ἕτοιμά", "english": "ready" },
          { "greek": "παρὰ τῷ πατρί", "english": "beside his father" },
          { "greek": "ἵσταται", "english": "stands" },
          { "greek": "σιγῇ", "english": "silently" },
          { "greek": "θαυμάζει", "english": "admires; is amazed at" }
        ]
      },
      {
        "greek": "ὁ δὲ Γρύλλος πρὸς τὸν παῖδα λέγει· «ὦ Ξενοφῶν, δεῦρο καὶ βοήθει μοι.» ὁ οὖν Ξενοφῶν προθύμως βοηθεῖ. πρῶτον μὲν ψήχει τὸν ἵππον, εἶτα δὲ καθαίρει τὸ κράνος. ὁ χαλκὸς τοῦ κράνους λαμπρὸς γίνεται. μετὰ ταῦτα φέρει τὴν λόγχην τῷ πατρί καὶ δίδωσιν αὐτῷ. ὁ δὲ πατὴρ τὸν θώρακα λαμβάνει καὶ πάλιν πάντα σκοπεῖ. τέλος δὲ λέγει· «καλῶς ποιεῖς, ὦ Ξενοφῶν.»",
        "gloss": [
          { "greek": "βοήθει μοι", "english": "help me" },
          { "greek": "οὖν", "english": "so, therefore" },
          { "greek": "βοηθεῖ", "english": "helps" },
          { "greek": "πρῶτον μὲν ... εἶτα δὲ", "english": "first ... and then" },
          { "greek": "λαμπρὸς γίνεται", "english": "becomes bright" },
          { "greek": "μετὰ ταῦτα", "english": "after this" },
          { "greek": "τῷ πατρί", "english": "to his father" },
          { "greek": "δίδωσιν αὐτῷ", "english": "gives it to him" },
          { "greek": "λαμβάνει", "english": "takes, takes up" },
          { "greek": "πάλιν", "english": "again" },
          { "greek": "πάντα", "english": "everything, all things" },
          { "greek": "τέλος", "english": "finally" }
        ]
      },
      {
        "greek": "ἤδη πάντα ἕτοιμά ἐστιν. ὁ Γρύλλος τὸν ἵππον ἄγει πρὸ τῆς οἰκίας καὶ ἐπὶ τὸν ἵππον ἀναβαίνει. ὁ δὲ Ξενοφῶν παρὰ τῇ θύρᾳ ἵσταται καὶ τὸν πατέρα βλέπει. ὁ πατὴρ πρὸς τὸν παῖδα χαίρων βλέπει καὶ λέγει· «ἐπιμελὴς γίνου, ὦ παῖ· οὕτω γὰρ ἀγαθὸς ἀνήρ γίγνεται.» εἶτα ἀπέρχεται. ὁ δὲ Ξενοφῶν πολὺν χρόνον τὸν πατέρα βλέπει, καὶ ἐν τῇ καρδίᾳ λέγει ὅτι καὶ αὐτὸς ποτὲ βούλεται τῇ Ἀθήνῃ ὠφέλιμος εἶναι.",
        "gloss": [
          { "greek": "ἤδη", "english": "already, now" },
          { "greek": "πάντα ἕτοιμά", "english": "everything is ready" },
          { "greek": "πρὸ τῆς οἰκίας", "english": "in front of the house" },
          { "greek": "παρὰ τῇ θύρᾳ", "english": "beside the door" },
          { "greek": "ἵσταται", "english": "stands" },
          { "greek": "χαίρων", "english": "gladly; with a pleased look" },
          { "greek": "γίνου", "english": "become; be" },
          { "greek": "οὕτω", "english": "in this way, thus" },
          { "greek": "γίγνεται", "english": "comes to be, becomes" },
          { "greek": "ἀπέρχεται", "english": "departs, goes away" },
          { "greek": "πολὺν χρόνον", "english": "for a long time" },
          { "greek": "ἐν τῇ καρδίᾳ", "english": "in his heart" },
          { "greek": "λέγει ὅτι", "english": "says that" },
          { "greek": "καὶ αὐτός", "english": "he himself too" },
          { "greek": "ποτὲ", "english": "someday" },
          { "greek": "τῇ Ἀθήνῃ", "english": "to or for Athens" },
          { "greek": "ὠφέλιμος εἶναι", "english": "to be useful" }
        ]
      }
    ],
    "translation": "It is early morning. Gryllus is standing in the courtyard. Xenophon’s father is a cavalryman and is about to leave the house. First he examines the horse; then he inspects the helmet and the cuirass. After this he takes up the shield and the spear. Everything is fine and ready. Xenophon stands beside his father and watches silently, for the boy admires his father.\n\nGryllus says to the boy, “Xenophon, come here and help me.” So Xenophon helps eagerly. First he brushes the horse, and then he cleans the helmet. The bronze of the helmet becomes bright. After this he carries the spear to his father and gives it to him. His father takes the cuirass and again examines everything. Finally he says, “You are doing well, Xenophon.”\n\nNow everything is ready. Gryllus leads the horse in front of the house and mounts the horse. Xenophon stands beside the door and looks at his father. His father looks happily toward the boy and says, “Be diligent, child; for in this way a good man comes to be.” Then he departs. Xenophon looks at his father for a long time, and in his heart he says that he too someday wants to be useful to Athens.",
    "notesMarkdown": "This reading is a plausible reconstruction for language learning, not a documented incident from Xenophon’s childhood."
  },
  "activities": {},
  "previousLesson": {
    "id": "lesson-3",
    "title": "The Education of Xenophon",
    "fallbackUrl": "lesson.html?lesson=3&page=1"
  },
  "nextLesson": {
    "id": "lesson-5",
    "title": "Learning Through Questioning",
    "fallbackUrl": "lessons.html#lesson-5"
  }
}
$json$::jsonb AS content,
  $greek$Πρωΐ ἐστιν. ὁ Γρύλλος ἐν τῇ αὐλῇ ἕστηκεν. ὁ γὰρ πατὴρ τοῦ Ξενοφῶντος ἱππεύς ἐστι καὶ μέλλει ἐκ τῆς οἰκίας ἀπιέναι. πρῶτον μὲν σκοπεῖ τὸν ἵππον· εἶτα δὲ τὸ κράνος καὶ τὸν θώρακα θεωρεῖ. μετὰ ταῦτα τὴν ἀσπίδα καὶ τὴν λόγχην λαμβάνει. πάντα καλὰ καὶ ἕτοιμά ἐστιν. ὁ δὲ Ξενοφῶν παρὰ τῷ πατρὶ ἵσταται καὶ σιγῇ βλέπει. ὁ γὰρ παῖς τὸν πατέρα θαυμάζει.

ὁ δὲ Γρύλλος πρὸς τὸν παῖδα λέγει· «ὦ Ξενοφῶν, δεῦρο καὶ βοήθει μοι.» ὁ οὖν Ξενοφῶν προθύμως βοηθεῖ. πρῶτον μὲν ψήχει τὸν ἵππον, εἶτα δὲ καθαίρει τὸ κράνος. ὁ χαλκὸς τοῦ κράνους λαμπρὸς γίνεται. μετὰ ταῦτα φέρει τὴν λόγχην τῷ πατρί καὶ δίδωσιν αὐτῷ. ὁ δὲ πατὴρ τὸν θώρακα λαμβάνει καὶ πάλιν πάντα σκοπεῖ. τέλος δὲ λέγει· «καλῶς ποιεῖς, ὦ Ξενοφῶν.»

ἤδη πάντα ἕτοιμά ἐστιν. ὁ Γρύλλος τὸν ἵππον ἄγει πρὸ τῆς οἰκίας καὶ ἐπὶ τὸν ἵππον ἀναβαίνει. ὁ δὲ Ξενοφῶν παρὰ τῇ θύρᾳ ἵσταται καὶ τὸν πατέρα βλέπει. ὁ πατὴρ πρὸς τὸν παῖδα χαίρων βλέπει καὶ λέγει· «ἐπιμελὴς γίνου, ὦ παῖ· οὕτω γὰρ ἀγαθὸς ἀνήρ γίγνεται.» εἶτα ἀπέρχεται. ὁ δὲ Ξενοφῶν πολὺν χρόνον τὸν πατέρα βλέπει, καὶ ἐν τῇ καρδίᾳ λέγει ὅτι καὶ αὐτὸς ποτὲ βούλεται τῇ Ἀθήνῃ ὠφέλιμος εἶναι.$greek$ AS greek_text,
  $translation$It is early morning. Gryllus is standing in the courtyard. Xenophon’s father is a cavalryman and is about to leave the house. First he examines the horse; then he inspects the helmet and the cuirass. After this he takes up the shield and the spear. Everything is fine and ready. Xenophon stands beside his father and watches silently, for the boy admires his father.

Gryllus says to the boy, “Xenophon, come here and help me.” So Xenophon helps eagerly. First he brushes the horse, and then he cleans the helmet. The bronze of the helmet becomes bright. After this he carries the spear to his father and gives it to him. His father takes the cuirass and again examines everything. Finally he says, “You are doing well, Xenophon.”

Now everything is ready. Gryllus leads the horse in front of the house and mounts the horse. Xenophon stands beside the door and looks at his father. His father looks happily toward the boy and says, “Be diligent, child; for in this way a good man comes to be.” Then he departs. Xenophon looks at his father for a long time, and in his heart he says that he too someday wants to be useful to Athens.$translation$ AS translation,
  $notes$This reading is a plausible reconstruction for language learning, not a documented incident from Xenophon’s childhood.$notes$ AS notes_markdown,
  $source$Course-authored Lesson 4 reading.$source$ AS source_citation;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-4'
)
UPDATE public.lessons l
SET title = 'The Preparation Before the March',
    greek_title = 'Ἡ Παρασκευὴ πρὸ τῆς πορείας',
    grammar_focus = 'Singular noun cases, singular adjective agreement, possessive genitive, and natural case usage',
    updated_at = now()
FROM lesson
WHERE l.id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-4'
),
payload AS (
  SELECT content FROM lesson_4_reading_payload
)
INSERT INTO public.lesson_content_overrides (lesson_id, content, version)
SELECT lesson.id, payload.content, 8
FROM lesson, payload
ON CONFLICT (lesson_id) DO UPDATE
SET content = EXCLUDED.content,
    version = GREATEST(public.lesson_content_overrides.version, 8),
    updated_at = now();

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-4'
),
payload AS (
  SELECT * FROM lesson_4_reading_payload
),
updated AS (
  UPDATE public.readings r
  SET title = 'Ἡ Παρασκευὴ πρὸ τῆς πορείας',
      greek_text = payload.greek_text,
      translation = payload.translation,
      notes_markdown = payload.notes_markdown,
      source_citation = payload.source_citation
  FROM lesson, payload
  WHERE r.lesson_id = lesson.id
  RETURNING r.id
)
INSERT INTO public.readings (lesson_id, title, greek_text, translation, notes_markdown, source_citation, sort_order)
SELECT lesson.id, 'Ἡ Παρασκευὴ πρὸ τῆς πορείας', payload.greek_text, payload.translation, payload.notes_markdown, payload.source_citation, 1
FROM lesson, payload
WHERE NOT EXISTS (SELECT 1 FROM updated);

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-4'
)
DELETE FROM public.reading_glosses rg
USING lesson
WHERE rg.lesson_id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-4'
),
reading AS (
  SELECT r.id
  FROM public.readings r, lesson
  WHERE r.lesson_id = lesson.id
  ORDER BY r.sort_order, r.id
  LIMIT 1
),
payload AS (
  SELECT content FROM lesson_4_reading_payload
),
glosses AS (
  SELECT
    lesson.id AS lesson_id,
    reading.id AS reading_id,
    gloss.value->>'greek' AS greek,
    gloss.value->>'english' AS english,
    gloss.value->>'greek' AS lemma,
    gloss.value->>'greek' AS display_form,
    ((paragraph.ordinality - 1) * 100 + (gloss.ordinality - 1))::integer AS sort_order
  FROM lesson, reading, payload
  CROSS JOIN LATERAL jsonb_array_elements(payload.content #> '{reading,paragraphs}') WITH ORDINALITY AS paragraph(value, ordinality)
  CROSS JOIN LATERAL jsonb_array_elements(COALESCE(paragraph.value->'gloss', '[]'::jsonb)) WITH ORDINALITY AS gloss(value, ordinality)
)
INSERT INTO public.reading_glosses (lesson_id, reading_id, greek, english, lemma, display_form, part_of_speech, morphology, source, sort_order)
SELECT lesson_id, reading_id, greek, english, lemma, display_form, 'Reading gloss', jsonb_build_object('source', 'lesson_4_reading_migration'), 'lesson_reading_gloss', sort_order
FROM glosses
WHERE greek IS NOT NULL AND english IS NOT NULL;

CREATE TEMP TABLE lesson_4_vocabulary (
  sort_order integer NOT NULL,
  category text NOT NULL,
  lemma text NOT NULL,
  display_form text NOT NULL,
  gloss text NOT NULL,
  dictionary_form text,
  status text,
  gender text,
  article text
) ON COMMIT DROP;

INSERT INTO lesson_4_vocabulary (sort_order, category, lemma, display_form, gloss, dictionary_form, status, gender, article)
VALUES
  (1, 'Nouns', 'ἱππεύς', 'ὁ ἱππεύς', 'cavalryman', 'ἱππεύς, ἱππέως, ὁ', 'new required vocabulary', 'masculine', 'ὁ'),
  (2, 'Nouns', 'κράνος', 'τὸ κράνος', 'helmet', 'κράνος, κράνους, τό', 'new required vocabulary', 'neuter', 'τό'),
  (3, 'Nouns', 'θώραξ', 'ὁ θώραξ', 'cuirass', 'θώραξ, θώρακος, ὁ', 'new required vocabulary', 'masculine', 'ὁ'),
  (4, 'Nouns', 'λόγχη', 'ἡ λόγχη', 'spear', 'λόγχη, λόγχης, ἡ', 'new required vocabulary', 'feminine', 'ἡ'),
  (5, 'Nouns', 'ἀσπίς', 'ἡ ἀσπίς', 'shield', 'ἀσπίς, ἀσπίδος, ἡ', 'new required vocabulary', 'feminine', 'ἡ'),
  (6, 'Nouns', 'αὐλή', 'ἡ αὐλή', 'courtyard', 'αὐλή, αὐλῆς, ἡ', 'new required vocabulary', 'feminine', 'ἡ'),
  (7, 'Nouns', 'χαλκός', 'ὁ χαλκός', 'bronze', 'χαλκός, χαλκοῦ, ὁ', 'new required vocabulary', 'masculine', 'ὁ'),
  (8, 'Verbs', 'θεωρέω', 'θεωρέω', 'observe, inspect', NULL, 'new required vocabulary', NULL, NULL),
  (9, 'Verbs', 'ψήχω', 'ψήχω', 'brush, groom', NULL, 'new required vocabulary', NULL, NULL),
  (10, 'Verbs', 'καθαίρω', 'καθαίρω', 'clean', NULL, 'new required vocabulary', NULL, NULL),
  (11, 'Verbs', 'μέλλω', 'μέλλω', 'be about to', NULL, 'new required vocabulary', NULL, NULL),
  (12, 'Verbs', 'ἀναβαίνω', 'ἀναβαίνω', 'mount', NULL, 'new required vocabulary', NULL, NULL),
  (13, 'Adjective', 'ἐπιμελής', 'ἐπιμελής', 'careful, diligent', 'ἐπιμελής, ἐπιμελές', 'new required vocabulary', NULL, NULL),
  (14, 'Adverb', 'προθύμως', 'προθύμως', 'eagerly, willingly', NULL, 'new required vocabulary', NULL, NULL);

WITH upserted AS (
  INSERT INTO public.vocabulary_items (
    lemma,
    display_form,
    part_of_speech,
    gloss,
    dictionary_form,
    gender,
    article,
    morphology
  )
  SELECT
    lemma,
    display_form,
    category,
    gloss,
    dictionary_form,
    gender,
    article,
    jsonb_build_object(
      'source', 'lesson_4_reading_migration',
      'lesson_slug', 'lesson-4',
      'classification', status,
      'audio_placeholder', true,
      'spaced_repetition', jsonb_build_object('box', 1, 'interval_days', 0, 'ease', 2.5)
    )
  FROM lesson_4_vocabulary
  ON CONFLICT (lemma, display_form, gloss) DO UPDATE
  SET part_of_speech = EXCLUDED.part_of_speech,
      dictionary_form = COALESCE(EXCLUDED.dictionary_form, public.vocabulary_items.dictionary_form),
      gender = COALESCE(EXCLUDED.gender, public.vocabulary_items.gender),
      article = COALESCE(EXCLUDED.article, public.vocabulary_items.article),
      morphology = COALESCE(public.vocabulary_items.morphology, '{}'::jsonb)
        || jsonb_build_object('lesson_4_reading', EXCLUDED.morphology),
      updated_at = now()
  RETURNING id
)
SELECT count(*) FROM upserted;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-4'
),
new_items AS (
  SELECT DISTINCT ON (v.sort_order)
    v.sort_order,
    vi.id AS vocabulary_item_id
  FROM lesson_4_vocabulary v
  JOIN public.vocabulary_items vi
    ON vi.lemma = v.lemma
   AND vi.display_form = v.display_form
   AND vi.gloss = v.gloss
  ORDER BY v.sort_order, vi.updated_at DESC NULLS LAST
),
removed AS (
  DELETE FROM public.lesson_vocabulary lv
  USING lesson
  WHERE lv.lesson_id = lesson.id
    AND NOT EXISTS (
      SELECT 1
      FROM new_items ni
      WHERE ni.vocabulary_item_id = lv.vocabulary_item_id
    )
  RETURNING lv.lesson_id
)
INSERT INTO public.lesson_vocabulary (lesson_id, vocabulary_item_id, sort_order)
SELECT lesson.id, new_items.vocabulary_item_id, new_items.sort_order
FROM lesson, new_items
ON CONFLICT (lesson_id, vocabulary_item_id) DO UPDATE
SET sort_order = EXCLUDED.sort_order;

DROP TABLE lesson_4_reading_payload;

COMMIT;
