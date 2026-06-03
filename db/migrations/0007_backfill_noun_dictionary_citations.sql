-- Backfill noun dictionary citations for the global vocabulary dictionaries.
--
-- Noun citation display should be:
--   nominative singular, genitive singular, nominative singular article
--
-- Example:
--   ἀγορά, ἀγορᾶς, ἡ
--
-- This migration keeps the structured pieces in vocabulary_items and also stores
-- the complete display string in dictionary_form so the lexicon pages can use a
-- stable, human-reviewed citation directly.

BEGIN;

ALTER TABLE public.vocabulary_items
  ADD COLUMN IF NOT EXISTS article text;

WITH noun_citations(lemma, genitive_form, article, gender) AS (
  VALUES
    ('Ξενοφῶν', 'Ξενοφῶντος', 'ὁ', 'masculine'),
    ('Σωκράτης', 'Σωκράτους', 'ὁ', 'masculine'),
    ('Ἀθῆναι', 'Ἀθηνῶν', 'αἱ', 'feminine'),
    ('βιβλίον', 'βιβλίου', 'τό', 'neuter'),
    ('γνῶσις', 'γνώσεως', 'ἡ', 'feminine'),
    ('διδάσκαλος', 'διδασκάλου', 'ὁ', 'masculine'),
    ('μαθητής', 'μαθητοῦ', 'ὁ', 'masculine'),
    ('νεανίας', 'νεανίου', 'ὁ', 'masculine'),
    ('σοφία', 'σοφίας', 'ἡ', 'feminine'),
    ('σῶμα', 'σώματος', 'τό', 'neuter'),
    ('δεῖπνον', 'δείπνου', 'τό', 'neuter'),
    ('στάδιον', 'σταδίου', 'τό', 'neuter'),
    ('ἔργον', 'ἔργου', 'τό', 'neuter'),
    ('ἱππικόν', 'ἱππικοῦ', 'τό', 'neuter'),
    ('ὕδωρ', 'ὕδατος', 'τό', 'neuter'),
    ('χρῆμα', 'χρήματος', 'τό', 'neuter'),
    ('ψυχή', 'ψυχῆς', 'ἡ', 'feminine'),
    ('ἀγορά', 'ἀγορᾶς', 'ἡ', 'feminine'),
    ('ἀλήθεια', 'ἀληθείας', 'ἡ', 'feminine'),
    ('ἀρετή', 'ἀρετῆς', 'ἡ', 'feminine'),
    ('ἄνθρωπος', 'ἀνθρώπου', 'ὁ', 'masculine'),
    ('διάνοια', 'διανοίας', 'ἡ', 'feminine'),
    ('δόξα', 'δόξης', 'ἡ', 'feminine'),
    ('θύρα', 'θύρας', 'ἡ', 'feminine'),
    ('μήτηρ', 'μητρός', 'ἡ', 'feminine'),
    ('τέχνη', 'τέχνης', 'ἡ', 'feminine'),
    ('φιλοσοφία', 'φιλοσοφίας', 'ἡ', 'feminine'),
    ('φύσις', 'φύσεως', 'ἡ', 'feminine'),
    ('ἀμαθία', 'ἀμαθίας', 'ἡ', 'feminine'),
    ('Ἐρχία', 'Ἐρχίας', 'ἡ', 'feminine'),
    ('Γρύλλος', 'Γρύλλου', 'ὁ', 'masculine'),
    ('δεσπότης', 'δεσπότου', 'ὁ', 'masculine'),
    ('καιρός', 'καιροῦ', 'ὁ', 'masculine'),
    ('κύων', 'κυνός', 'ὁ', 'masculine'),
    ('λόφος', 'λόφου', 'ὁ', 'masculine'),
    ('νέος', 'νέου', 'ὁ', 'masculine'),
    ('οἶκος', 'οἴκου', 'ὁ', 'masculine'),
    ('πατήρ', 'πατρός', 'ὁ', 'masculine'),
    ('παῖς', 'παιδός', 'ὁ', 'masculine'),
    ('πολίτης', 'πολίτου', 'ὁ', 'masculine'),
    ('σῖτος', 'σίτου', 'ὁ', 'masculine'),
    ('υἱός', 'υἱοῦ', 'ὁ', 'masculine'),
    ('φίλος', 'φίλου', 'ὁ', 'masculine'),
    ('ἀγρός', 'ἀγροῦ', 'ὁ', 'masculine'),
    ('ἀνήρ', 'ἀνδρός', 'ὁ', 'masculine'),
    ('ἱππεύς', 'ἱππέως', 'ὁ', 'masculine'),
    ('ἵππος', 'ἵππου', 'ὁ', 'masculine')
),
normalized_vocabulary AS (
  SELECT
    vi.id,
    regexp_replace(
      regexp_replace(
        COALESCE(vi.lemma, vi.display_form),
        '^[[:space:]]*(ὁ|ἡ|τό|τὸ|οἱ|αἱ|τά|τὰ)[[:space:]]+',
        ''
      ),
      '[[:space:]]*,[[:space:]]*(ὁ|ἡ|τό|τὸ|οἱ|αἱ|τά|τὰ)[[:space:]]*$',
      ''
    ) AS normalized_lemma
  FROM public.vocabulary_items vi
  WHERE lower(COALESCE(vi.part_of_speech, '')) LIKE '%noun%'
)
UPDATE public.vocabulary_items vi
SET genitive_form = nc.genitive_form,
    article = nc.article,
    gender = nc.gender,
    dictionary_form = CONCAT(nc.lemma, ', ', nc.genitive_form, ', ', nc.article),
    morphology = jsonb_set(
      jsonb_set(
        jsonb_set(
          COALESCE(vi.morphology, '{}'::jsonb),
          '{genitive_form}',
          to_jsonb(nc.genitive_form),
          true
        ),
        '{article}',
        to_jsonb(nc.article),
        true
      ),
      '{dictionary_form}',
      to_jsonb(CONCAT(nc.lemma, ', ', nc.genitive_form, ', ', nc.article)),
      true
    ),
    updated_at = now()
FROM normalized_vocabulary nv
JOIN noun_citations nc ON nc.lemma = nv.normalized_lemma
WHERE vi.id = nv.id;

CREATE INDEX IF NOT EXISTS idx_vocabulary_items_article
  ON public.vocabulary_items(article);

COMMIT;
