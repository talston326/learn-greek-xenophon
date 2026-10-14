import fs from 'node:fs';

// These are course-authored exercises using Lesson 1 reading/vocabulary and
// the singular nominative/accusative forms taught in its grammar sections.
const revision = 'lesson-1-exercises-v2';
const topics = ['verb-forms', 'nouns-cases-agreement', 'noun-adjective-agreement', 'definite-article', 'sentence-parts'];
const banks = Object.fromEntries(topics.map(topic => [topic, []]));
function question(topic, prompt, answer, alternatives, explanation) {
  const index = banks[topic].length;
  const texts = [...new Set([answer, ...alternatives])];
  const choices = texts.map(text => ({ text, correct: text === answer }));
  // Do not make the authored correct choice systematically first.
  choices.push(...choices.splice(0, index % choices.length));
  banks[topic].push({ id: `lesson-1-v2-${topic}-${index + 1}`, type: 'multiple_choice', topic,
    prompt, choices, explanation: explanation || `Correct: ${answer}.`, sourceStatus: 'Course-authored exercise' });
}
const verbs = [
  ['ἄγει','ἀγ-','leads'], ['βαδίζει','βαδιζ-','walks'], ['βλέπει','βλεπ-','sees or looks'],
  ['θεραπεύει','θεραπευ-','tends or takes care of'], ['ἔχει','ἐχ-','has'],
  ['λέγει','λεγ-','says'], ['μένει','μεν-','stays'], ['ποιεῖ','ποιε-','does or makes'],
  ['φέρει','φερ-','carries'], ['χαίρει','χαιρ-','rejoices or is glad']
];
for (const [form, stem, meaning] of verbs) {
  question(topics[0], `What does ${form} mean?`, `he/she/it ${meaning}`, ['he/she/it calls','he/she/it barks','he/she/it lives'].filter(t => t !== `he/she/it ${meaning}`));
  question(topics[0], `Which form means “he/she/it ${meaning}”?`, form, verbs.filter(v => v[0] !== form).slice(0, 3).map(v => v[0]));
  question(topics[0], `What person and number does ${form} express?`, 'third person singular', ['first person singular','second person singular','third person plural']);
  question(topics[0], `In ${form}, how many people or things perform the action?`, 'one', ['two','more than one'], `${form} is third person singular.`);
  if (form === 'ποιεῖ') {
    question(topics[0], `Which meaning belongs to the whole form ποιεῖ?`, 'he/she/it does or makes', ['I do or make','you do or make','they do or make'], 'Learn contracted forms such as ποιεῖ as whole forms for now.');
  } else {
    question(topics[0], `Which stem remains when -ει is removed from ${form}?`, stem, ['καλε-','ὑλακτε-','οἰκε-'], `The stem is ${stem}; -ει is the present active third-person singular ending.`);
  }
}
// nominative, accusative, gender, noun meaning; only singular forms are tested.
const nouns = [
  ['ἵππος','ἵππον','masculine','horse'], ['οἶκος','οἶκον','masculine','house'],
  ['πατήρ','πατέρα','masculine','father'], ['μήτηρ','μητέρα','feminine','mother'],
  ['θύρα','θύραν','feminine','door'], ['δεῖπνον','δεῖπνον','neuter','meal'],
  ['ὕδωρ','ὕδωρ','neuter','water'], ['σῖτος','σῖτον','masculine','grain'],
  ['υἱός','υἱόν','masculine','son'], ['νεανίας','νεανίαν','masculine','young man']
];
const article = (gender, caseName) => gender === 'neuter' ? 'τὸ' : gender === 'feminine' ? (caseName === 'nominative' ? 'ἡ' : 'τὴν') : (caseName === 'nominative' ? 'ὁ' : 'τὸν');
for (const [nom, acc, gender, meaning] of nouns) {
  question(topics[1], `What gender is ${article(gender, 'nominative')} ${nom} (“${meaning}”)?`, gender, ['masculine','feminine','neuter']);
  question(topics[1], `The ${meaning} is the subject. Which case is used for ${nom}?`, 'nominative', ['accusative','genitive','dative']);
  question(topics[1], `The ${meaning} is the direct object. Which case is used?`, 'accusative', ['nominative','genitive','dative']);
  question(topics[1], `Choose “the ${meaning}” as a direct object.`, `${article(gender,'accusative')} ${acc}`, [`${article(gender,'nominative')} ${nom}`, `${gender === 'feminine' ? 'τὸν' : 'τὴν'} ${acc}`, `${gender === 'masculine' ? 'ἡ' : 'ὁ'} ${nom}`].filter(t => t !== `${article(gender,'accusative')} ${acc}`));
  question(topics[1], `What number is ${article(gender,'nominative')} ${nom}?`, 'singular', ['plural','dual']);
  for (const caseName of ['nominative','accusative']) {
    const form = caseName === 'nominative' ? nom : acc;
    question(topics[3], `Supply the ${caseName} singular article: ___ ${form} (“the ${meaning}”).`, article(gender,caseName), ['ὁ','ἡ','τὸ','τὸν','τὴν']);
    question(topics[3], `Which gender does the article show in ${article(gender,caseName)} ${form} (${caseName} singular)?`, gender, ['masculine','feminine','neuter']);
  }
  question(topics[3], `Choose the article for “the ${meaning}” used as the subject.`, article(gender,'nominative'), ['ὁ','ἡ','τὸ','τὸν','τὴν']);
}
const adjectives = [
  ['ἀγαθός','ἀγαθή','ἀγαθόν','ἀγαθόν','ἀγαθήν','good'],
  ['καλός','καλή','καλόν','καλόν','καλήν','beautiful'],
  ['ἰσχυρός','ἰσχυρά','ἰσχυρόν','ἰσχυρόν','ἰσχυράν','strong'],
  ['νέος','νέα','νέον','νέον','νέαν','young'],
  ['Ἀθηναῖος','Ἀθηναία','Ἀθηναῖον','Ἀθηναῖον','Ἀθηναίαν','Athenian']
];
for (const forms of adjectives) {
  const [m,f,n,ma,fa,meaning] = forms;
  for (const [nom,acc,gender,nounMeaning] of nouns) {
    const useAcc = banks[topics[2]].length % 2 === 1;
    const c = useAcc ? 'accusative' : 'nominative';
    const expected = gender === 'neuter' ? n : gender === 'feminine' ? (useAcc ? fa : f) : (useAcc ? ma : m);
    question(topics[2], `Choose “${meaning}” to agree with ${article(gender,c)} ${useAcc ? acc : nom} (“the ${nounMeaning}”; ${c} singular).`, expected, [m,f,n,fa], `${expected} agrees in gender, number, and case: ${gender} ${c} singular.`);
  }
}
// Phrase tokens also supply the completed sentence-labeling and builder modes.
const sentence = (tokens, english) => ({ sentence: tokens.map(t => t[0]).join(' ') + '.', english,
  tokens: tokens.map(([text,answer]) => ({text,answer})) });
const sentences = [
  sentence([['ὁ Ξενοφῶν','S'],['τὸν ἵππον','DO'],['θεραπεύει','TV']], 'Xenophon tends the horse.'),
  sentence([['ἡ μήτηρ','S'],['τὸν ἄνδρα','DO'],['καλεῖ','TV']], 'The mother calls the husband.'),
  sentence([['ὁ Γρύλλος','S'],['τὸν ἵππον','DO'],['ἔχει','TV']], 'Gryllus has the horse.'),
  sentence([['ὁ νεανίας','S'],['τὸν σῖτον','DO'],['φέρει','TV']], 'The young man carries the grain.'),
  sentence([['ὁ υἱὸς','S'],['τὸν ἵππον','DO'],['ἄγει','TV']], 'The son leads the horse.'),
  sentence([['ὁ Ξενοφῶν','S'],['τὸν κύνα','DO'],['καλεῖ','TV']], 'Xenophon calls the dog.'),
  sentence([['ἡ μήτηρ','S'],['τὸ δεῖπνον','DO'],['φέρει','TV']], 'The mother carries the meal.'),
  sentence([['ὁ πατὴρ','S'],['τὸ ὕδωρ','DO'],['ἔχει','TV']], 'The father has the water.'),
  sentence([['ὁ Γρύλλος','S'],['τὸν οἶκον','DO'],['βλέπει','TV']], 'Gryllus sees the house.'),
  sentence([['ὁ Ξενοφῶν','S'],['τὴν θύραν','DO'],['βλέπει','TV']], 'Xenophon sees the door.'),
  sentence([['ὁ κύων','S'],['ὑλακτεῖ','IV']], 'The dog barks.'),
  sentence([['ὁ Γρύλλος','S'],['βαδίζει','IV']], 'Gryllus walks.'),
  sentence([['ὁ νεανίας','S'],['χαίρει','IV']], 'The young man rejoices.'),
  sentence([['ἡ μήτηρ','S'],['μένει','IV']], 'The mother stays.'),
  sentence([['ὁ ἵππος','S'],['βαδίζει','IV']], 'The horse walks.'),
  sentence([['ὁ Ξενοφῶν','S'],['νέος','C'],['ἐστιν','LV']], 'Xenophon is young.'),
  sentence([['ὁ οἶκος','S'],['καλός','C'],['ἐστιν','LV']], 'The house is beautiful.'),
  sentence([['ὁ ἵππος','S'],['ἰσχυρός','C'],['ἐστιν','LV']], 'The horse is strong.'),
  sentence([['ὁ Γρύλλος','S'],['ἱππεύς','C'],['ἐστιν','LV']], 'Gryllus is a horseman.'),
  sentence([['ἡ μήτηρ','S'],['ἀγαθή','C'],['ἐστιν','LV']], 'The mother is good.')
];
const meanings = {S:'subject', DO:'direct object', C:'complement', TV:'transitive verb', IV:'intransitive verb', LV:'linking verb'};
for (const s of sentences) for (const token of s.tokens.filter(t => !(s.tokens.some(t => t.answer === 'LV') && t.answer === 'S'))) {
  question(topics[4], `In “${s.sentence}”, what is the function of “${token.text}”?`, meanings[token.answer], Object.values(meanings), `${token.text} is the ${meanings[token.answer]} in this sentence.`);
}
const labels = Object.entries(meanings).map(([code,meaning]) => ({code,meaning}));
const matching = {
  type: 'matching', title: 'Matching', instructions: 'Match each Greek form or phrase with its meaning or grammatical function.',
  items: [
    ...verbs.slice(0,5).map(([form,,meaning]) => ({prompt:form, answer:meaning})),
    {prompt:'ὁ Ξενοφῶν (ὁ Ξενοφῶν θεραπεύει τὸν ἵππον.)',answer:'subject'},
    {prompt:'τὸν ἵππον (ὁ Ξενοφῶν θεραπεύει τὸν ἵππον.)',answer:'direct object'},
    {prompt:'νέος (ὁ Ξενοφῶν νέος ἐστιν.)',answer:'complement'},
    {prompt:'ἐστιν (ὁ Ξενοφῶν νέος ἐστιν.)',answer:'linking verb'},
    {prompt:'ὑλακτεῖ (ὁ κύων ὑλακτεῖ.)',answer:'intransitive verb'}
  ]
};
const blanks = {
  type:'fill-in-the-blank', title:'Fill in the Blank', instructions:'Type the missing Greek word. Press Return to check your answers.',
  items:[
    {prompt:'___ μήτηρ μένει. (The mother stays.)',answer:'ἡ'},
    {prompt:'ὁ Ξενοφῶν ___ τὸν ἵππον. (Xenophon tends the horse.)',answer:'θεραπεύει'},
    {prompt:'ὁ κύων ___. (The dog barks.)',answer:'ὑλακτεῖ'},
    {prompt:'ὁ πατὴρ φέρει ___ σῖτον. (The father carries the grain.)',answer:'τὸν'},
    {prompt:'ὁ Γρύλλος βλέπει ___ θύραν. (Gryllus sees the door.)',answer:'τὴν'},
    {prompt:'ὁ Ξενοφῶν νέος ___. (Xenophon is young.)',answer:'ἐστιν',accepted:['ἐστίν']},
    {prompt:'ὁ Γρύλλος ἔχει ___ ἵππον. (Gryllus has a beautiful horse.)',answer:'καλὸν',accepted:['καλόν']},
    {prompt:'ἡ ___ μήτηρ μένει. (The good mother stays.)',answer:'ἀγαθὴ',accepted:['ἀγαθή']},
    {prompt:'ὁ υἱὸς φέρει τὸ ___. (The son carries the water.)',answer:'ὕδωρ'},
    {prompt:'ὁ νεανίας ___. (The young man rejoices.)',answer:'χαίρει'}
  ]
};
const builderPairs = [
  ['The mother carries the meal.', ['The mother','carries','the meal'], ['ἡ μήτηρ','φέρει','τὸ δεῖπνον'], ['ἡ μήτηρ','φέρει','τὸ δεῖπνον','τὴν μητέρα','μένει','ὁ ἵππος']],
  ['Xenophon tends the horse.', ['Xenophon','tends','the horse'], ['ὁ Ξενοφῶν','θεραπεύει','τὸν ἵππον'], ['ὁ Ξενοφῶν','θεραπεύει','τὸν ἵππον','τὸν Ξενοφῶντα','ὁ ἵππος','λέγει']],
  ['Gryllus has the water.', ['Gryllus','has','the water'], ['ὁ Γρύλλος','ἔχει','τὸ ὕδωρ'], ['ὁ Γρύλλος','ἔχει','τὸ ὕδωρ','τὸν Γρύλλον','ὁ σῖτος','βαδίζει']],
  ['The son leads the horse.', ['The son','leads','the horse'], ['ὁ υἱὸς','ἄγει','τὸν ἵππον'], ['ὁ υἱὸς','ἄγει','τὸν ἵππον','τὸν υἱόν','ὁ ἵππος','φέρει']],
  ['The father calls the dog.', ['The father','calls','the dog'], ['ὁ πατὴρ','καλεῖ','τὸν κύνα'], ['ὁ πατὴρ','καλεῖ','τὸν κύνα','τὸν πατέρα','ὁ κύων','ὑλακτεῖ']]
];
const builder = {type:'translation-builder',title:'Translation Builder',instructions:'Build each translation by choosing the subject, verb, and direct object. The spaces show the order to use in this exercise.',items:[]};
for (const [english,en,gr,choices] of builderPairs) {
  builder.items.push({prompt:`Translate into Ancient Greek: ${english}`,direction:'english-greek',choices,slots:gr.map((answer,i)=>({label:['Subject','Verb','Direct object'][i],answer}))});
  builder.items.push({prompt:`Translate into English: ${gr.join(' ')}.`,direction:'greek-english',choices:[...en,'The horse','walks','the father'],slots:en.map((answer,i)=>({label:['Subject','Verb','Direct object'][i],answer}))});
}
const practice = { title:'Practice This Topic',revision, roundSize:10, questions:Object.values(banks).flat() };
const grammar = {title:'Lesson 1 Grammar Exercises',revision,threshold:80,requireAllAnswers:true,questions:topics.flatMap(t=>banks[t].slice(0,2)).map((q,i)=>({...q,id:`lesson-1-v2-grammar-${i+1}`})),modes:[{type:'sentence-labeling',title:'Label Sentence Parts',instructions:'Label the function of each marked word or phrase.',labels,items:sentences.slice(0,3).concat(sentences.slice(10,12),sentences.slice(15,18))},matching,blanks,builder]};
const data = {revision,topics,activities:{'topic-practice':practice,'grammar-exercises':grammar}};
fs.writeFileSync('content/lesson-1-exercises.json',JSON.stringify(data,null,2)+'\n');
const extension = `\n  // BEGIN LESSON 1 EXERCISES (generated by scripts/build-lesson-1-exercises.mjs)\n  const lessonOneExercises = ${JSON.stringify(data.activities,null,2)};\n  for (const [key, update] of Object.entries(lessonOneExercises)) {\n    LESSONS['lesson-1'].activities[key] = { ...LESSONS['lesson-1'].activities[key], ...update };\n  }\n  // END LESSON 1 EXERCISES\n`;
let js = fs.readFileSync('lesson-data.js','utf8').replace(/\n  \/\/ BEGIN LESSON 1 EXERCISES[\s\S]*?\/\/ END LESSON 1 EXERCISES\n/,'');
// Preserve the separate local AI pilot after this extension. Production uses
// the revisioned canonical activity banks instead of appending stale fallback.
const anchor = js.includes('  // BEGIN LESSON 1 TRANSLATION PILOT') ? '  // BEGIN LESSON 1 TRANSLATION PILOT' : '  window.xenophonLessonData = {';
js = js.replace(anchor,extension+'\n'+anchor);
fs.writeFileSync('lesson-data.js',js);
const sql = `-- Complete Lesson 1 practice and grammar exercise categories only.\n-- Reading, final quiz, other lessons, and learner progress are preserved.\nBEGIN;\nDO $exercises$\nDECLARE updates jsonb := $bank$${JSON.stringify(data.activities)}$bank$; l uuid; c jsonb; a jsonb; k text; block_row record;\nBEGIN\n SELECT id INTO STRICT l FROM public.lessons WHERE slug='lesson-1';\n SELECT content INTO STRICT c FROM public.lesson_content_overrides WHERE lesson_id=l FOR UPDATE;\n a:=COALESCE(c->'activities','{}'::jsonb);\n FOREACH k IN ARRAY ARRAY['topic-practice','grammar-exercises'] LOOP\n   a:=jsonb_set(a,ARRAY[k],(COALESCE(a->k,'{}'::jsonb)-'translationPerDirection') || (updates->k));\n END LOOP;\n UPDATE public.lesson_content_overrides SET content=jsonb_set(c,'{activities}',a),version=version+1,updated_at=now() WHERE lesson_id=l AND c->'activities' IS DISTINCT FROM a;\n FOR block_row IN SELECT b.id,b.content FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id WHERE s.lesson_id=l AND b.content->>'source'='lesson_publish' AND b.content->>'kind'='activities' FOR UPDATE OF b LOOP\n   a:=COALESCE(block_row.content->'value','{}'::jsonb);\n   FOREACH k IN ARRAY ARRAY['topic-practice','grammar-exercises'] LOOP\n     a:=jsonb_set(a,ARRAY[k],(COALESCE(a->k,'{}'::jsonb)-'translationPerDirection') || (updates->k));\n   END LOOP;\n   UPDATE public.lesson_content_blocks SET content=jsonb_set(content,'{value}',a),updated_at=now() WHERE id=block_row.id AND block_row.content->'value' IS DISTINCT FROM a;\n END LOOP;\nEND $exercises$;\nCOMMIT;\n`;
fs.writeFileSync('db/migrations/0043_lesson_1_complete_exercises.sql',sql);
console.log('Built 250 topic questions, five grammar modes, fallback, and migration 0043.');
