import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const payloadPath = path.join(root, 'content/lessons/lesson-5.json');
const fallbackPath = path.join(root, 'lesson-data.js');
const migrationPath = path.join(root, 'db/migrations/0021_lesson_5_practice_rounds_and_final_quiz.sql');
const lesson = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));

const verbs = [
  ['λέγω', 'λέγω', 'λέγεις', 'λέγει', 'λέγουσιν', 'λέγε', 'λέγετε', 'λέγειν', 'speak', 'speaks'],
  ['βαδίζω', 'βαδίζω', 'βαδίζεις', 'βαδίζει', 'βαδίζουσιν', 'βάδιζε', 'βαδίζετε', 'βαδίζειν', 'walk', 'walks'],
  ['φέρω', 'φέρω', 'φέρεις', 'φέρει', 'φέρουσιν', 'φέρε', 'φέρετε', 'φέρειν', 'carry', 'carries'],
  ['ἔχω', 'ἔχω', 'ἔχεις', 'ἔχει', 'ἔχουσιν', 'ἔχε', 'ἔχετε', 'ἔχειν', 'have', 'has'],
  ['βλέπω', 'βλέπω', 'βλέπεις', 'βλέπει', 'βλέπουσιν', 'βλέπε', 'βλέπετε', 'βλέπειν', 'see', 'sees'],
  ['ἀκούω', 'ἀκούω', 'ἀκούεις', 'ἀκούει', 'ἀκούουσιν', 'ἄκουε', 'ἀκούετε', 'ἀκούειν', 'listen', 'listens'],
  ['κωλύω', 'κωλύω', 'κωλύεις', 'κωλύει', 'κωλύουσιν', 'κώλυε', 'κωλύετε', 'κωλύειν', 'hinder', 'hinders'],
  ['μένω', 'μένω', 'μένεις', 'μένει', 'μένουσιν', 'μένε', 'μένετε', 'μένειν', 'wait', 'waits'],
  ['σπεύδω', 'σπεύδω', 'σπεύδεις', 'σπεύδει', 'σπεύδουσιν', 'σπεῦδε', 'σπεύδετε', 'σπεύδειν', 'hurry', 'hurries'],
  ['μανθάνω', 'μανθάνω', 'μανθάνεις', 'μανθάνει', 'μανθάνουσιν', 'μάνθανε', 'μανθάνετε', 'μανθάνειν', 'learn', 'learns']
].map(([lemma, first, second, third, plural, singularCommand, pluralCommand, infinitive, english, thirdEnglish]) => ({
  lemma, first, second, third, plural, singularCommand, pluralCommand, infinitive, english, thirdEnglish
}));

const questions = [];
function add(topic, category, id, prompt, answer, distractors, explanation) {
  const texts = [answer, ...distractors];
  if (texts.length !== 4 || new Set(texts).size !== 4) {
    throw new Error(`Ambiguous choices in ${id}: ${texts.join(' / ')}`);
  }
  questions.push({
    id: `lesson-5-practice-${topic}-${id}`,
    type: 'multiple-choice', topic, category, prompt,
    choices: texts.map((text, index) => ({
      text, correct: index === 0,
      feedback: `${index === 0 ? 'Correct' : 'Review'}: ${explanation}`
    }))
  });
}

function otherVerbs(index, field) {
  return [1, 2, 3].map(offset => verbs[(index + offset) % verbs.length][field]);
}

verbs.forEach((verb, index) => {
  const { lemma, first, second, third, plural, singularCommand, pluralCommand, infinitive, english, thirdEnglish } = verb;
  const key = String(index + 1).padStart(2, '0');
  const family = `${lemma} — ${infinitive}`;

  add('word-study', 'Word Study', `${key}-lemma`, `Which dictionary verb gives the form ${plural}?`, lemma,
    otherVerbs(index, 'lemma'), `${plural} belongs to ${lemma}.`);
  add('word-study', 'Word Study', `${key}-infinitive`, `Which infinitive belongs to the dictionary verb ${lemma}?`, infinitive,
    otherVerbs(index, 'infinitive'), `${infinitive} is the infinitive of ${lemma}.`);
  add('word-study', 'Word Study', `${key}-family`, `Which present form belongs to the family of ${lemma}?`, second,
    otherVerbs(index, 'second'), `${second} and ${lemma} share the same present verb family.`);
  add('word-study', 'Word Study', `${key}-want`, `Complete “ἐθέλω ___” to say “I want to ${english}.”`, infinitive,
    [third, plural, singularCommand], `After ἐθέλω, use the infinitive ${infinitive}.`);
  add('word-study', 'Word Study', `${key}-pair`, `Which dictionary form and infinitive form belong together for “${english}”?`, family,
    [1, 2, 3].map(offset => `${lemma} — ${verbs[(index + offset) % verbs.length].infinitive}`),
    `${lemma} and ${infinitive} name the same action.`);

  add('singular-review', 'Singular Review', `${key}-first`, `Choose the Greek form for “I ${english}.”`, first,
    [second, third, plural], `The first-person singular form is ${first}.`);
  add('singular-review', 'Singular Review', `${key}-second`, `Choose the Greek form for “you ${english}” (one person).`, second,
    [first, third, plural], `The second-person singular ending is -εις: ${second}.`);
  add('singular-review', 'Singular Review', `${key}-third`, `Choose the Greek form for “he or she ${thirdEnglish}.”`, third,
    [first, second, plural], `The third-person singular ending is -ει: ${third}.`);
  add('singular-review', 'Singular Review', `${key}-speaker`, `In ${second}, who is being addressed?`, 'One person: you.',
    ['The speaker: I.', 'One person: he or she.', 'Several people: they.'], `${second} addresses one person.`);
  add('singular-review', 'Singular Review', `${key}-context`, `Complete “ἐγὼ ___” with the form meaning “I ${english}.”`, first,
    [second, third, plural], `ἐγώ pairs with the first-person singular ${first}.`);

  add('third-plural', 'Third-Person Plurals', `${key}-change`, `Change ${third} (“he or she ${thirdEnglish}”) to “they ${english}.”`, plural,
    [first, second, third], `The third-person plural form is ${plural}.`);
  add('third-plural', 'Third-Person Plurals', `${key}-meaning`, `Which Greek form means “they ${english}”?`, plural,
    otherVerbs(index, 'plural'), `${plural} means “they ${english}.”`);
  add('third-plural', 'Third-Person Plurals', `${key}-translate`, `Translate ${plural}.`, `They ${english}.`,
    [`I ${english}.`, `You ${english}.`, `He or she ${thirdEnglish}.`], `${plural} has a third-person plural ending.`);
  add('third-plural', 'Third-Person Plurals', `${key}-agreement`, `Which sentence has a plural subject and the matching plural form of ${lemma}?`,
    `οἱ φίλοι ${plural}.`, [`ὁ φίλος ${plural}.`, `οἱ φίλοι ${third}.`, `ὁ φίλος ${third}.`],
    `οἱ φίλοι calls for the plural verb ${plural}.`);
  add('third-plural', 'Third-Person Plurals', `${key}-ending`, `What does the ending of ${plural} tell you?`,
    'Several people perform the action.', ['The speaker performs the action.', 'One person is commanded.', 'The form is an infinitive.'],
    `${plural} is third-person plural.`);

  add('commands', 'Commands', `${key}-one`, `Tell one person to ${english}.`, singularCommand,
    [third, pluralCommand, infinitive], `${singularCommand} is the singular command.`);
  add('commands', 'Commands', `${key}-several`, `Tell several people to ${english}.`, pluralCommand,
    [singularCommand, third, infinitive], `${pluralCommand} addresses several people.`);
  add('commands', 'Commands', `${key}-not-one`, `Tell one person: “Do not ${english}!”`, `μὴ ${singularCommand}`,
    [`οὐ ${singularCommand}`, `μὴ ${third}`, `οὐ ${third}`], `Use μή with the singular command ${singularCommand}.`);
  add('commands', 'Commands', `${key}-not-several`, `Tell several people: “Do not ${english}!”`, `μὴ ${pluralCommand}`,
    [`οὐ ${pluralCommand}`, `μὴ ${plural}`, `οὐ ${plural}`], `Use μή with the plural command ${pluralCommand}.`);
  add('commands', 'Commands', `${key}-statement`, `Which form of ${lemma} is a statement rather than a command?`, third,
    [singularCommand, pluralCommand, `μὴ ${singularCommand}`], `${third} means “he or she ${thirdEnglish}.”`);

  add('infinitives', 'Infinitives', `${key}-form`, `Choose the infinitive “to ${english}.”`, infinitive,
    [third, singularCommand, plural], `${infinitive} names the action without a person.`);
  add('infinitives', 'Infinitives', `${key}-want`, `Complete “ἐθέλει ___” to say “he or she wants to ${english}.”`, infinitive,
    [third, plural, pluralCommand], `ἐθέλει takes the infinitive ${infinitive}.`);
  add('infinitives', 'Infinitives', `${key}-translate`, `What does ${infinitive} mean?`, `To ${english}.`,
    [`I ${english}.`, `They ${english}.`, `He or she ${thirdEnglish}.`], `${infinitive} is an infinitive: “to ${english}.”`);
  add('infinitives', 'Infinitives', `${key}-replace`, `Replace the finite verb ${third} with its infinitive.`, infinitive,
    [first, second, plural], `${infinitive}, not a person-marked form, is the infinitive.`);
  add('infinitives', 'Infinitives', `${key}-phrase`, `Which phrase correctly says “I want to ${english}”?`, `ἐθέλω ${infinitive}`,
    [`ἐθέλω ${third}`, `ἐθέλω ${plural}`, `ἐθέλω ${singularCommand}`],
    `The wanting verb is followed by ${infinitive}.`);
});

const contexts = [
  ['ὁ', 'Ξενοφῶν', verbs[0], 'οὐ'], ['ὁ', 'Σωκράτης', verbs[1], 'οὐ'],
  ['ἡ', 'ἀρτοπῶλις', verbs[3], 'οὐκ'], ['ἡ', 'γυνή', verbs[5], 'οὐκ'],
  ['ὁ', 'παῖς', verbs[4], 'οὐ'], ['ὁ', 'ἔμπορος', verbs[2], 'οὐ'],
  ['οἱ', 'φίλοι', verbs[7], 'οὐ'], ['οἱ', 'ἔμποροι', verbs[8], 'οὐ'],
  ['οἱ', 'ἄνθρωποι', verbs[9], 'οὐ'], ['ὁ', 'φίλος', verbs[6], 'οὐ']
];
contexts.forEach(([article, noun, verb, negative], index) => {
  const key = String(index + 1).padStart(2, '0');
  const subject = `${article} ${noun}`;
  const finite = article === 'οἱ' ? verb.plural : verb.third;
  add('proclitics', 'Proclitics and Negatives', `${key}-article`, `Choose the nominative article that fits ${noun}.`, article,
    ['ὁ', 'ἡ', 'οἱ', 'αἱ'].filter(value => value !== article).slice(0, 3), `${subject} uses the nominative article ${article}.`);
  add('proclitics', 'Proclitics and Negatives', `${key}-accent`, `In “${subject} ${finite},” which written word is unaccented and leans on the next?`, article,
    [noun, finite, 'μή'], `${article} is a proclitic article in this phrase.`);
  add('proclitics', 'Proclitics and Negatives', `${key}-statement`, `Choose the correctly negated statement about ${subject} and ${verb.lemma}.`,
    `${subject} ${negative} ${finite}.`, [`${subject} μή ${finite}.`, `${subject} ${negative === 'οὐ' ? 'οὐκ' : 'οὐ'} ${finite}.`, `${subject} οὐχ ${finite}.`],
    `Use ${negative} before ${finite} to negate a statement.`);
  add('proclitics', 'Proclitics and Negatives', `${key}-command`, `Tell one person not to ${verb.english}; choose the proper negative.`,
    `μὴ ${verb.singularCommand}`, [`οὐ ${verb.singularCommand}`, `οὐκ ${verb.singularCommand}`, `οὐχ ${verb.singularCommand}`],
    `Negative commands use μή: μὴ ${verb.singularCommand}.`);
  add('proclitics', 'Proclitics and Negatives', `${key}-rule`, `In “${subject} ${negative} ${finite},” what does ${negative} negate?`,
    'A statement about the subject.', ['A command to one person.', 'A command to several people.', 'The noun’s grammatical gender.'],
    `${negative} negates the statement; μή is used for a negative command.`);
});

const topics = ['word-study', 'singular-review', 'third-plural', 'commands', 'infinitives', 'proclitics'];
for (const topic of topics) {
  const count = questions.filter(question => question.topic === topic).length;
  if (count !== 50) throw new Error(`${topic} has ${count}, expected 50`);
}

const vocabulary = lesson.vocabulary.flatMap(group => group.items);
const vocabularyQuestions = [];
function vocabularyChoices(index, field) {
  const chosen = [];
  for (let offset = 1; chosen.length < 3; offset += 1) {
    const value = vocabulary[(index + offset) % vocabulary.length][field];
    if (value !== vocabulary[index][field] && !chosen.includes(value)) chosen.push(value);
  }
  return chosen;
}
vocabulary.forEach((item, index) => {
  const id = String(index + 1).padStart(2, '0');
  vocabularyQuestions.push({
    id: `lesson-5-vocab-practice-${id}-english-greek`, type: 'multiple-choice', topic: 'vocabulary', category: 'Vocabulary',
    prompt: `Which Greek vocabulary item means “${item.english}”?`,
    choices: [item.greek, ...vocabularyChoices(index, 'greek')].map((text, choiceIndex) => ({
      text, correct: choiceIndex === 0,
      feedback: `${choiceIndex === 0 ? 'Correct' : 'Review'}: ${item.greek} means ${item.english}.`
    }))
  });
  if (index < 21) {
    vocabularyQuestions.push({
      id: `lesson-5-vocab-practice-${id}-greek-english`, type: 'multiple-choice', topic: 'vocabulary', category: 'Vocabulary',
      prompt: `What does ${item.greek} mean?`,
      choices: [item.english, ...vocabularyChoices(index, 'english')].map((text, choiceIndex) => ({
        text, correct: choiceIndex === 0,
        feedback: `${choiceIndex === 0 ? 'Correct' : 'Review'}: ${item.greek} means ${item.english}.`
      }))
    });
  }
});
if (vocabularyQuestions.length !== 50) throw new Error('Vocabulary practice must have 50 questions.');

const originalMigration = fs.readFileSync(path.join(root, 'db/migrations/0020_lesson_5_first_meeting.sql'), 'utf8');
const originalContent = JSON.parse(originalMigration.match(/\$json\$([\s\S]*?)\$json\$/)[1]);
const finalQuiz = originalContent.activities['grammar-exercises'];
if (!finalQuiz?.questions?.length) throw new Error('Expected the existing Grammar Exercises question bank.');
const readingQuiz = [
  ['market', 'Where is Xenophon hurrying at the start of the reading?', 'To the marketplace.', ['To the gymnasium.', 'To Delphi.', 'To a battlefield.'], 'He hurries toward the marketplace for bread.'],
  ['staff', 'What does Socrates extend across the narrow lane?', 'His walking staff.', ['A scroll.', 'A shield.', 'A loaf of bread.'], 'Socrates extends his staff to stop Xenophon.'],
  ['seller', 'Who offers Xenophon bread during the exchange?', 'The female bread seller.', ['Proxenus.', 'A soldier.', 'A teacher.'], 'The bread seller offers bread and joins the exchange.'],
  ['question', 'What deeper question does Socrates ask after asking about bread, wine, and shoes?', 'Where people become good and honorable.', ['Where soldiers train.', 'Where ships are built.', 'Where horses are sold.'], 'Socrates turns a market question toward goodness.'],
  ['invitation', 'How does Socrates invite Xenophon to continue?', 'Follow and learn.', ['Go home and sleep.', 'Buy more wine.', 'Write a letter.'], 'Socrates says, “ἕπου τοίνυν καὶ μάνθανε.”'],
  ['source', 'Which detail is an invention of this course retelling?', 'The bread seller and expanded dialogue.', ['The ancient anecdote’s narrow lane.', 'Socrates blocking the way with a staff.', 'Socrates inviting Xenophon to follow.'], 'The introduction labels the bread seller and expanded dialogue as invented.']
].map(([id, prompt, answer, distractors, explanation]) => ({
  id: `lesson-5-final-reading-${id}`, type: 'multiple-choice', topic: 'reading', category: 'Reading', prompt,
  choices: [answer, ...distractors].map((text, index) => ({
    text, correct: index === 0, feedback: `${index === 0 ? 'Correct' : 'Review'}: ${explanation}`
  }))
}));

lesson.contentRevision = 'lesson-5-practice-rounds-v2';
lesson.activities['topic-practice'] = {
  ...lesson.activities['topic-practice'], practiceMode: 'rounds', roundSize: 10,
  instructions: 'Practice up to five rounds of 10. Correct each answer to continue, or stop whenever you feel confident.',
  questions
};
lesson.activities['vocab-practice'] = {
  ...lesson.activities['vocab-practice'], practiceMode: 'rounds', roundSize: 10,
  instructions: 'Practice up to five rounds of 10. You may stop and return to the lesson at any time.',
  questions: vocabularyQuestions
};
delete lesson.activities['grammar-exercises'];
lesson.activities['lesson-quiz'] = {
  ...finalQuiz,
  title: 'Lesson 5 Final Quiz',
  instructions: 'Answer every question. Score at least 80% to finish Lesson 5 and continue to Lesson 6.',
  required: true, requireAllAnswers: true, threshold: 80,
  revision: 'lesson-5-final-quiz-v1',
  pointsPossible: finalQuiz.questions.length + readingQuiz.length,
  questions: [...finalQuiz.questions, ...readingQuiz]
};

const allQuestions = Object.values(lesson.activities).flatMap(activity => activity.questions || []);
if (new Set(allQuestions.map(question => question.id)).size !== allQuestions.length) throw new Error('Duplicate question IDs.');
if (new Set(allQuestions.map(question => question.prompt)).size !== allQuestions.length) throw new Error('Duplicate question prompts.');

fs.writeFileSync(payloadPath, `${JSON.stringify(lesson, null, 2)}\n`);
const fallback = fs.readFileSync(fallbackPath, 'utf8');
const start = fallback.indexOf('  const LESSON_5 = ');
const end = fallback.indexOf('\n\n  const LESSONS =', start);
if (start < 0 || end < 0) throw new Error('Could not locate Lesson 5 static fallback.');
fs.writeFileSync(fallbackPath, `${fallback.slice(0, start)}  const LESSON_5 = ${JSON.stringify(lesson, null, 2)};${fallback.slice(end)}`);

const patch = { contentRevision: lesson.contentRevision, activities: lesson.activities };
const sql = `-- Publish optional 10-by-5 Lesson 5 practice and a required final quiz.\n-- Keep reading, vocabulary, grammar, staff drafts, and student progress intact.\nBEGIN;\nDO $lesson5practice$\nDECLARE\n  patch jsonb := $json$${JSON.stringify(patch, null, 2)}$json$::jsonb;\n  lesson_id_value uuid;\n  old_content jsonb;\n  old_version integer;\nBEGIN\n  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug = 'lesson-5' FOR UPDATE;\n  SELECT content, version INTO STRICT old_content, old_version\n  FROM public.lesson_content_overrides WHERE lesson_id = lesson_id_value FOR UPDATE;\n  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN\n    IF old_content->'activities' IS DISTINCT FROM patch->'activities' THEN\n      RAISE EXCEPTION 'Lesson 5 practice revision matches but activities differ; review before publishing';\n    END IF;\n    RETURN;\n  END IF;\n  IF old_content->>'contentRevision' IS DISTINCT FROM 'lesson-5-first-meeting-v1' OR old_version < 2 THEN\n    RAISE EXCEPTION 'Lesson 5 published content changed after practice authoring; review before publishing';\n  END IF;\n  INSERT INTO public.lesson_content_versions (lesson_id, content, version, note)\n  VALUES (lesson_id_value, old_content, old_version, 'Before five-round Lesson 5 practice and final quiz');\n  UPDATE public.lesson_content_overrides\n  SET content = old_content || patch, version = old_version + 1, updated_at = now()\n  WHERE lesson_id = lesson_id_value;\n  UPDATE public.lesson_content_blocks b\n  SET content = jsonb_build_object('source', 'lesson_publish', 'kind', 'activities', 'value', patch->'activities'),\n      updated_at = now()\n  FROM public.lesson_segments s\n  WHERE b.segment_id = s.id AND s.lesson_id = lesson_id_value\n    AND b.content->>'source' = 'lesson_publish' AND b.content->>'kind' = 'activities';\nEND\n$lesson5practice$;\nCOMMIT;\n`;
fs.writeFileSync(migrationPath, sql);
console.log(`Wrote ${questions.length} grammar and word-study practice questions, ${vocabularyQuestions.length} vocabulary practice questions, and ${lesson.activities['lesson-quiz'].questions.length} final quiz questions.`);
