import fs from 'node:fs';

// Course-authored exercise sentences, not quotations from Xenophon.
const banks = {
  'verb-forms': [
    ['ὁ Ξενοφῶν βαδίζει.', 'Xenophon walks.'], ['ὁ κύων ὑλακτεῖ.', 'The dog barks.'],
    ['ὁ Γρύλλος λέγει.', 'Gryllus speaks.'], ['ἡ μήτηρ καλεῖ.', 'The mother calls.'],
    ['ὁ νεανίας χαίρει.', 'The young man rejoices.'], ['ὁ παῖς μένει.', 'The boy stays.'],
    ['ὁ πατὴρ φέρει τὸν σῖτον.', 'The father carries the grain.'], ['ὁ Ξενοφῶν θεραπεύει τὸν ἵππον.', 'Xenophon tends the horse.'],
    ['ἡ μήτηρ ἔχει τὸ ὕδωρ.', 'The mother has the water.'], ['ὁ Γρύλλος ἄγει τὸν ἵππον.', 'Gryllus leads the horse.']
  ],
  'nouns-cases-agreement': [
    ['ὁ Ξενοφῶν βλέπει τὸν ἵππον.', 'Xenophon sees the horse.'], ['ὁ πατὴρ καλεῖ τὸν παῖδα.', 'The father calls the boy.'],
    ['ὁ παῖς φέρει τὸ ὕδωρ.', 'The boy carries the water.'], ['ὁ Γρύλλος ἔχει τὸν σῖτον.', 'Gryllus has the grain.'],
    ['ἡ μήτηρ βλέπει τὸν υἱόν.', 'The mother sees the son.'], ['ὁ νεανίας ἄγει τὸν ἵππον.', 'The young man leads the horse.'],
    ['ὁ Ξενοφῶν βλέπει τὸν οἶκον.', 'Xenophon sees the house.'], ['ὁ Γρύλλος καλεῖ τὸν υἱόν.', 'Gryllus calls the son.'],
    ['ἡ μήτηρ φέρει τὸν σῖτον.', 'The mother carries the grain.'], ['ὁ παῖς βλέπει τὴν θύραν.', 'The boy sees the door.']
  ],
  'noun-adjective-agreement': [
    ['ὁ νέος ἵππος μένει.', 'The young horse stays.'], ['ὁ ἰσχυρὸς παῖς βαδίζει.', 'The strong boy walks.'],
    ['ὁ Ξενοφῶν βλέπει τὸν καλὸν οἶκον.', 'Xenophon sees the beautiful house.'],
    ['ὁ ἀγαθὸς πατὴρ φέρει τὸν σῖτον.', 'The good father carries the grain.'],
    ['ἡ ἀγαθὴ μήτηρ καλεῖ τὸν παῖδα.', 'The good mother calls the boy.'],
    ['ὁ καλὸς ἵππος βαδίζει.', 'The beautiful horse walks.'],
    ['ὁ Γρύλλος ἔχει τὸν νέον ἵππον.', 'Gryllus has the young horse.'],
    ['ὁ νέος υἱὸς χαίρει.', 'The young son rejoices.'],
    ['ἡ μήτηρ βλέπει τὴν καλὴν θύραν.', 'The mother sees the beautiful door.'],
    ['ὁ ἰσχυρὸς νεανίας φέρει τὸ ὕδωρ.', 'The strong young man carries the water.']
  ],
  'definite-article': [
    ['ὁ ἵππος μένει.', 'The horse stays.'], ['ἡ μήτηρ βλέπει τὴν θύραν.', 'The mother sees the door.'],
    ['ὁ παῖς φέρει τὸν σῖτον.', 'The boy carries the grain.'], ['ὁ Γρύλλος βλέπει τὸν λόφον.', 'Gryllus sees the hill.'],
    ['ὁ υἱὸς ἔχει τὸ ὕδωρ.', 'The son has the water.'], ['ὁ πατὴρ ἔχει τὸν οἶκον.', 'The father has the house.'],
    ['ὁ Ξενοφῶν καλεῖ τὸν παῖδα.', 'Xenophon calls the boy.'], ['ἡ μήτηρ φέρει τὸ δεῖπνον.', 'The mother carries the meal.'],
    ['ὁ νεανίας βλέπει τὸν ἀγρόν.', 'The young man sees the field.'], ['ὁ Γρύλλος θεραπεύει τὸν ἵππον.', 'Gryllus tends the horse.']
  ],
  'sentence-parts': [
    ['ὁ παῖς βλέπει τὸν πατέρα.', 'The boy sees the father.'], ['ὁ Ξενοφῶν φέρει τὸν σῖτον.', 'Xenophon carries the grain.'],
    ['ἡ μήτηρ ἔχει τὸν οἶκον.', 'The mother has the house.'], ['ὁ ἵππος βαδίζει.', 'The horse walks.'],
    ['ὁ πατὴρ καλεῖ τὴν μητέρα.', 'The father calls the mother.'], ['ὁ παῖς καλεῖ τὸν πατέρα.', 'The boy calls the father.'],
    ['ὁ Γρύλλος φέρει τὸ ὕδωρ.', 'Gryllus carries the water.'], ['ἡ μήτηρ βλέπει τὸν ἵππον.', 'The mother sees the horse.'],
    ['ὁ Ξενοφῶν ἄγει τὸν παῖδα.', 'Xenophon leads the boy.'], ['ὁ νέος ἵππος χαίρει.', 'The young horse rejoices.']
  ]
};
const objective = {
  'verb-forms': 'Present third-person singular verbs; identify who performs the action.',
  'nouns-cases-agreement': 'Nominative subject and accusative object; singular noun forms.',
  'noun-adjective-agreement': 'Adjective agreement in gender, number, and case.',
  'definite-article': 'Correct singular definite articles; nominative and accusative.',
  'sentence-parts': 'Identify subject, transitive/intransitive verb, and direct object.'
};
const make = (pair, topic, index, prefix) => {
  const direction = index < 5 ? 'greek-english' : 'english-greek';
  return { id: `${prefix}-${topic}-${index + 1}`, type: 'translation', topic, direction,
    prompt: `Translate into ${direction === 'greek-english' ? 'English' : 'Ancient Greek'}: ${pair[direction === 'greek-english' ? 0 : 1]}`,
    greek: pair[0], english: pair[1], objective: objective[topic], sourceStatus: 'Course-authored practice sentence' };
};
const practice = Object.entries(banks).flatMap(([topic, pairs]) => pairs.map((pair, i) => make(pair, topic, i, 'lesson-1-tr-practice')));
const selected = (specs, prefix) => specs.map(([topic, index], i) => ({ ...make(banks[topic][index], topic, index, prefix), id: `${prefix}-${i + 1}` }));
const activities = {
  'topic-practice': practice,
  'grammar-exercises': selected([['verb-forms', 0], ['nouns-cases-agreement', 6], ['noun-adjective-agreement', 2], ['definite-article', 7], ['sentence-parts', 0], ['verb-forms', 8]], 'lesson-1-tr-grammar'),
  'lesson-quiz': selected([['nouns-cases-agreement', 1], ['noun-adjective-agreement', 7], ['sentence-parts', 1], ['verb-forms', 9]], 'lesson-1-tr-quiz')
};
const revision = 'lesson-1-translations-v1';
const bank = { revision, activities };
fs.writeFileSync('content/lesson-1-translations.json', JSON.stringify(bank, null, 2) + '\n');
const publicActivities = Object.fromEntries(Object.entries(activities).map(([key, questions]) => [key, questions.map(({ greek, english, ...q }) => q)]));
const publicBank = { revision, activities: publicActivities };
const extension = `\n  // BEGIN LESSON 1 TRANSLATION PILOT (generated by scripts/build-lesson-1-translations.mjs)\n  const lessonOneTranslationBank = ${JSON.stringify(publicBank, null, 2)};\n  Object.entries(lessonOneTranslationBank.activities).forEach(([key, additions]) => {\n    const activity = LESSONS['lesson-1'].activities[key];\n    activity.questions = [...activity.questions.filter(q => !q.id?.startsWith('lesson-1-tr-')), ...additions];\n    activity.translationRevision = lessonOneTranslationBank.revision;\n    if (key === 'lesson-quiz') { activity.revision = lessonOneTranslationBank.revision; activity.requireAllAnswers = true; }\n    if (key === 'topic-practice') activity.translationPerDirection = 2;\n  });\n  // END LESSON 1 TRANSLATION PILOT\n`;
let js = fs.readFileSync('lesson-data.js', 'utf8').replace(/\n  \/\/ BEGIN LESSON 1 TRANSLATION PILOT[\s\S]*?\/\/ END LESSON 1 TRANSLATION PILOT\n/, '');
js = js.replace('  window.xenophonLessonData = {', extension + '\n  window.xenophonLessonData = {');
fs.writeFileSync('lesson-data.js', js);
const sql = `-- Append the Lesson 1 translation pilot; preserve instructor-authored existing questions.\nBEGIN;\nCREATE TABLE IF NOT EXISTS public.translation_checks (\n id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,\n activity_type text NOT NULL, revision text NOT NULL, answers jsonb NOT NULL, results jsonb,\n status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','complete','failed')),\n reserved_usd numeric(12,6) NOT NULL DEFAULT 0, created_at timestamptz NOT NULL DEFAULT now()\n);\nCREATE INDEX IF NOT EXISTS translation_checks_user_time ON public.translation_checks(user_id, created_at);\nDO $pilot$\nDECLARE bank jsonb := $bank$${JSON.stringify(bank)}$bank$; l uuid; c jsonb; a jsonb; k text; existing jsonb; updated jsonb; block_row record;\nBEGIN\n SELECT id INTO STRICT l FROM public.lessons WHERE slug = 'lesson-1';\n SELECT content INTO STRICT c FROM public.lesson_content_overrides WHERE lesson_id = l FOR UPDATE;\n a := c->'activities';\n FOREACH k IN ARRAY ARRAY['topic-practice','grammar-exercises','lesson-quiz'] LOOP\n   SELECT COALESCE(jsonb_agg(q ORDER BY ord),'[]'::jsonb) INTO existing FROM jsonb_array_elements(a->k->'questions') WITH ORDINALITY AS t(q,ord) WHERE q->>'id' NOT LIKE 'lesson-1-tr-%';\n   updated := jsonb_set(a->k, '{questions}', existing || (bank->'activities'->k));\n   updated := jsonb_set(updated, '{translationRevision}', to_jsonb(bank->>'revision'));\n   IF k = 'lesson-quiz' THEN\n     updated := updated || jsonb_build_object('revision',bank->>'revision','requireAllAnswers',true);\n   ELSIF k = 'topic-practice' THEN\n     updated := updated || jsonb_build_object('translationPerDirection',2);\n   END IF;\n   a := jsonb_set(a, ARRAY[k], updated);\n END LOOP;\n UPDATE public.lesson_content_overrides SET content = jsonb_set(c,'{activities}',a), version = version + 1, updated_at = now() WHERE lesson_id = l AND c->'activities' IS DISTINCT FROM a;\n FOR block_row IN SELECT b.id, b.content FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id WHERE s.lesson_id=l AND b.content->>'source'='lesson_publish' AND b.content->>'kind'='activities' FOR UPDATE OF b LOOP\n   a := block_row.content->'value';\n   FOREACH k IN ARRAY ARRAY['topic-practice','grammar-exercises','lesson-quiz'] LOOP\n     IF a ? k THEN\n       SELECT COALESCE(jsonb_agg(q ORDER BY ord),'[]'::jsonb) INTO existing FROM jsonb_array_elements(a->k->'questions') WITH ORDINALITY AS t(q,ord) WHERE q->>'id' NOT LIKE 'lesson-1-tr-%';\n       updated := jsonb_set(a->k, '{questions}', existing || (bank->'activities'->k));\n       updated := updated || jsonb_build_object('translationRevision',bank->>'revision');\n       IF k='lesson-quiz' THEN updated := updated || jsonb_build_object('revision',bank->>'revision','requireAllAnswers',true);\n       ELSIF k='topic-practice' THEN updated := updated || jsonb_build_object('translationPerDirection',2); END IF;\n       a := jsonb_set(a,ARRAY[k],updated);\n     END IF;\n   END LOOP;\n   UPDATE public.lesson_content_blocks SET content=jsonb_set(content,'{value}',a),updated_at=now() WHERE id=block_row.id AND content->'value' IS DISTINCT FROM a;\n END LOOP;\nEND $pilot$;\nCOMMIT;\n`;
fs.writeFileSync('db/migrations/0041_lesson_1_translation_checks.sql', sql);
console.log('Built Lesson 1 translation bank, static fallback, and additive database migration.');
