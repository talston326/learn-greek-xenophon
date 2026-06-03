-- Backfill reviewed adjective citations and verb lemmas for the global dictionaries.
--
-- This migration is intentionally conservative:
-- - It preserves existing non-null dictionary_form, feminine_form, neuter_form,
--   and principal_parts values.
-- - It does not invent verb principal parts.
-- - It keeps display_form as the lesson-facing encountered form.

BEGIN;

WITH adjective_citations(lemma, dictionary_form, feminine_form, neuter_form, variants) AS (
  VALUES
    ('κακός', 'κακός, -ή, -όν', 'κακή', 'κακόν', ARRAY['κακός', 'κακός, κακή, κακόν']),
    ('καλός', 'καλός, -ή, -όν', 'καλή', 'καλόν', ARRAY['καλός', 'καλός, καλή, καλόν']),
    ('κρυπτός', 'κρυπτός, -ή, -όν', 'κρυπτή', 'κρυπτόν', ARRAY['κρυπτός, κρυπτή, κρυπτόν']),
    ('μέγας', 'μέγας, μεγάλη, μέγα', 'μεγάλη', 'μέγα', ARRAY['μέγας', 'μέγας, μεγάλη, μέγα']),
    ('μωρός', 'μωρός, -ά, -όν', 'μωρά', 'μωρόν', ARRAY['μωρός, μωρά, μωρόν']),
    ('μόνος', 'μόνος, -η, -ον', 'μόνη', 'μόνον', ARRAY['μόνος, μόνη, μόνον']),
    ('νέος', 'νέος, -α, -ον', 'νέα', 'νέον', ARRAY['νέος', 'νέος, νέα, νέον']),
    ('πολύς', 'πολύς, πολλή, πολύ', 'πολλή', 'πολύ', ARRAY['πολύς, πολλή, πολύ']),
    ('σοφός', 'σοφός, -ή, -όν', 'σοφή', 'σοφόν', ARRAY['σοφός', 'σοφός,', 'σοφός, σοφή, σοφόν']),
    ('ἀγαθός', 'ἀγαθός, -ή, -όν', 'ἀγαθή', 'ἀγαθόν', ARRAY['ἀγαθός']),
    ('ἀληθής', 'ἀληθής, -ές', 'ἀληθής', 'ἀληθές', ARRAY['ἀληθής']),
    ('ἀσθενής', 'ἀσθενής, -ές', 'ἀσθενής', 'ἀσθενές', ARRAY['ἀσθενής']),
    ('ἄδικος', 'ἄδικος, -ον', 'ἄδικος', 'ἄδικον', ARRAY['ἄδικος']),
    ('Ἀθηναῖος', 'Ἀθηναῖος, -α, -ον', 'Ἀθηναία', 'Ἀθηναῖον', ARRAY['Ἀθηναῖος']),
    ('ἰσχυρός', 'ἰσχυρός, -ά, -όν', 'ἰσχυρά', 'ἰσχυρόν', ARRAY['ἰσχυρός', 'ἰσχυρός']),
    ('ὀλίγος', 'ὀλίγος, -η, -ον', 'ὀλίγη', 'ὀλίγον', ARRAY['ὀλίγος, ὀλίγη, ὀλίγον'])
),
matching_adjectives AS (
  SELECT
    vi.id,
    ac.lemma,
    ac.dictionary_form,
    ac.feminine_form,
    ac.neuter_form
  FROM public.vocabulary_items vi
  JOIN adjective_citations ac
    ON COALESCE(vi.lemma, vi.display_form) = ANY(ac.variants)
    OR COALESCE(vi.display_form, vi.lemma) = ANY(ac.variants)
  WHERE lower(COALESCE(vi.part_of_speech, '')) LIKE '%adjective%'
)
UPDATE public.vocabulary_items vi
SET lemma = ma.lemma,
    part_of_speech = COALESCE(NULLIF(vi.part_of_speech, ''), 'Adjectives'),
    dictionary_form = COALESCE(vi.dictionary_form, ma.dictionary_form),
    feminine_form = COALESCE(vi.feminine_form, ma.feminine_form),
    neuter_form = COALESCE(vi.neuter_form, ma.neuter_form),
    morphology = jsonb_set(
      jsonb_set(
        jsonb_set(
          COALESCE(vi.morphology, '{}'::jsonb),
          '{dictionary_form}',
          to_jsonb(COALESCE(vi.dictionary_form, ma.dictionary_form)),
          true
        ),
        '{feminine_form}',
        to_jsonb(COALESCE(vi.feminine_form, ma.feminine_form)),
        true
      ),
      '{neuter_form}',
      to_jsonb(COALESCE(vi.neuter_form, ma.neuter_form)),
      true
    ),
    updated_at = now()
FROM matching_adjectives ma
WHERE vi.id = ma.id;

WITH verb_citations(current_form, lemma, dictionary_form) AS (
  VALUES
    ('αἰσχύνομαι', 'αἰσχύνομαι', 'αἰσχύνομαι'),
    ('βαδίζει', 'βαδίζω', 'βαδίζω'),
    ('βαδίζω', 'βαδίζω', 'βαδίζω'),
    ('βλάπτω', 'βλάπτω', 'βλάπτω'),
    ('βλέπει', 'βλέπω', 'βλέπω'),
    ('γίγνωσκε', 'γιγνώσκω', 'γιγνώσκω'),
    ('γιγνώσκει', 'γιγνώσκω', 'γιγνώσκω'),
    ('γράφει', 'γράφω', 'γράφω'),
    ('γράφω', 'γράφω', 'γράφω'),
    ('γυμνάζει', 'γυμνάζω', 'γυμνάζω'),
    ('γυμνάζω', 'γυμνάζω', 'γυμνάζω'),
    ('δείκνυμι', 'δείκνυμι', 'δείκνυμι'),
    ('διαλέγεται', 'διαλέγομαι', 'διαλέγομαι'),
    ('διδάσκει', 'διδάσκω', 'διδάσκω'),
    ('ζητεῖ', 'ζητέω', 'ζητέω'),
    ('θέλει', 'θέλω', 'θέλω'),
    ('θαυμάζει', 'θαυμάζω', 'θαυμάζω'),
    ('θεραπεύει', 'θεραπεύω', 'θεραπεύω'),
    ('καλεῖ', 'καλέω', 'καλέω'),
    ('λέγει', 'λέγω', 'λέγω'),
    ('λέγω', 'λέγω', 'λέγω'),
    ('μένει', 'μένω', 'μένω'),
    ('μανθάνει', 'μανθάνω', 'μανθάνω'),
    ('μανθάνω,', 'μανθάνω', 'μανθάνω'),
    ('μειδιᾷ', 'μειδιάω', 'μειδιάω'),
    ('νομίζει', 'νομίζω', 'νομίζω'),
    ('οἰκεῖ', 'οἰκέω', 'οἰκέω'),
    ('παιδεύει', 'παιδεύω', 'παιδεύω'),
    ('ποιεῖ', 'ποιέω', 'ποιέω'),
    ('πράττει', 'πράττω', 'πράττω'),
    ('φέρει', 'φέρω', 'φέρω'),
    ('φιλεῖ', 'φιλέω', 'φιλέω'),
    ('χαίρει', 'χαίρω', 'χαίρω'),
    ('ἀκούει', 'ἀκούω', 'ἀκούω'),
    ('ἄγει', 'ἄγω', 'ἄγω'),
    ('ἐγείρει', 'ἐγείρω', 'ἐγείρω'),
    ('ἐρωτᾷ', 'ἐρωτάω', 'ἐρωτάω'),
    ('εἰμί', 'εἰμί', 'εἰμί'),
    ('ἐστιν', 'εἰμί', 'εἰμί'),
    ('ἔχει', 'ἔχω', 'ἔχω'),
    ('ἕπεται', 'ἕπομαι', 'ἕπομαι'),
    ('ὁρᾷ', 'ὁράω', 'ὁράω'),
    ('ὑλακτεῖ', 'ὑλακτέω', 'ὑλακτέω')
),
matching_verbs AS (
  SELECT
    vi.id,
    vc.lemma,
    vc.dictionary_form
  FROM public.vocabulary_items vi
  JOIN verb_citations vc
    ON COALESCE(vi.lemma, vi.display_form) = vc.current_form
    OR COALESCE(vi.display_form, vi.lemma) = vc.current_form
  WHERE lower(COALESCE(vi.part_of_speech, '')) LIKE '%verb%'
     OR vc.current_form = 'εἰμί'
)
UPDATE public.vocabulary_items vi
SET lemma = mv.lemma,
    part_of_speech = COALESCE(NULLIF(vi.part_of_speech, ''), 'Verbs'),
    dictionary_form = COALESCE(vi.dictionary_form, mv.dictionary_form),
    morphology = jsonb_set(
      COALESCE(vi.morphology, '{}'::jsonb),
      '{dictionary_form}',
      to_jsonb(COALESCE(vi.dictionary_form, mv.dictionary_form)),
      true
    ),
    updated_at = now()
FROM matching_verbs mv
WHERE vi.id = mv.id;

COMMIT;
