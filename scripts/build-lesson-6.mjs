import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const payloadPath = path.join(root, 'content/lessons/lesson-6.json');
const lessonDataPath = path.join(root, 'lesson-data.js');
const migrationPath = path.join(root, 'db/migrations/0024_publish_lesson_6.sql');
const lesson = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));

lesson.title = 'Strength of Body and Mind';
lesson.scope = 'Plural article, adjective, and first- and second-declension noun cases; shifting accents';
lesson.contentRevision = 'lesson-6-gymnasium-complete-v1';
delete lesson.sampleNotice;
lesson.pages = [
  { page: 1, slug: 'lesson-6-page-1', title: 'Reading', template: 'reading', showTranslation: false },
  { page: 2, slug: 'lesson-6-page-2', title: 'Language Study', template: 'grammar' },
  { page: 3, slug: 'lesson-6-page-3', title: 'The Greek Gymnasium', template: 'culture' }
];
lesson.vocabulary.forEach(group => group.items.forEach(item => {
  item.lemma ||= item.greek.replace(/^(?:ὁ|ἡ|τὸ)\s+/u, '').split(',')[0];
  item.audioPlaceholder = true;
}));

lesson.wordStudy = {
  label: 'Word Study — One Friend, Many Friends',
  blocks: [{
    title: 'The dictionary form and the plural stem',
    practiceTopic: 'word-study',
    body: [
      'A dictionary entry gives ὁ φίλος, φίλου: “friend,” followed by the genitive singular. The ending changes when the friend becomes several friends, but the stem φιλ- remains. Read οἱ φίλοι, τοὺς φίλους, τῶν φίλων, and τοῖς φίλοις as four jobs for the same noun.',
      'The reading also uses ὁ ἄνθρωπος, ἀνθρώπου. Its genitive plural, τῶν ἀνθρώπων, shifts the accent. Learn the noun and notice the change; the grammar below explains why the accent cannot stay on its original syllable.',
      'τὸ σῶμα has the genitive σώματος. It belongs to the third declension, whose full patterns come later. The blue glosses supply its forms in this reading; do not use it as a model for second-declension endings.'
    ],
    display: [
      { greek: 'ὁ φίλος → οἱ φίλοι', english: 'one friend → friends' },
      { greek: 'τοὺς φίλους', english: 'the friends as direct objects' },
      { greek: 'τῶν φίλων', english: 'of the friends' },
      { greek: 'τοῖς φίλοις', english: 'to or for the friends' }
    ]
  }]
};

lesson.grammar = {
  intro: 'In Lesson 4 you learned what the four cases do in singular phrases. Now read and form those same jobs for groups of people and things. Keep the article, adjective, and noun together as a team.',
  objectives: [
    'Identify nominative, accusative, genitive, and dative plural phrases in the reading.',
    'Form plural articles and first- and second-declension nouns in all four cases.',
    'Match a plural adjective to its noun in gender, number, and case.',
    'Place the accent correctly when plural endings change the length of the last syllable.',
    'Distinguish the regular plural patterns from glossed third-declension and verb forms.'
  ],
  sections: [
    {
      id: 'plural-articles', title: '1. Articles Tell You the Case', practiceTopic: 'plural-articles',
      body: [
        'The plural article announces the gender and case of a group. In οἱ φίλοι, οἱ marks a masculine plural subject. In τοὺς φίλους, τοὺς marks masculine plural direct objects. The same words can be “of” the friends with τῶν or “to/for” the friends with τοῖς.',
        'For the feminine, compare αἱ ἀγοραί, τὰς ἀγοράς, τῶν ἀγορῶν, and ταῖς ἀγοραῖς. For the neuter, nominative and accusative plural have the same form: τὰ ἔργα. Acute accents written on a word alone become grave before another accented word in a sentence: τούς → τοὺς φίλους.'
      ],
      table: {
        title: 'Plural article in a complete phrase',
        headers: ['Case and job', 'Masculine', 'Feminine', 'Neuter'], greekColumns: [1, 2, 3],
        rows: [
          ['Nominative · subject', 'οἱ φίλοι', 'αἱ ἀγοραί', 'τὰ ἔργα'],
          ['Accusative · direct object', 'τοὺς φίλους', 'τὰς ἀγοράς', 'τὰ ἔργα'],
          ['Genitive · of', 'τῶν φίλων', 'τῶν ἀγορῶν', 'τῶν ἔργων'],
          ['Dative · to, for, or in', 'τοῖς φίλοις', 'ταῖς ἀγοραῖς', 'τοῖς ἔργοις']
        ]
      },
      checks: [{ prompt: 'Why are τὰ ἔργα both nominative and accusative plural?', answer: 'Neuter nominative and accusative plural are identical. The sentence tells you whether the things act or receive an action.' }],
      examples: [{ greek: 'οἱ νέοι τοὺς φίλους βλέπουσιν.', english: 'The young men see the friends: subject, then direct object.' }]
    },
    {
      id: 'second-declension', title: '2. Second-Declension Plurals', practiceTopic: 'second-declension',
      body: [
        'Masculine second-declension nouns use -οι, -ους, -ων, -οις in nominative, accusative, genitive, and dative plural. Keep the article with the noun: οἱ φίλοι, τοὺς φίλους, τῶν φίλων, τοῖς φίλοις. The same endings work with ὁ ἄνθρωπος: οἱ ἄνθρωποι, τοὺς ἀνθρώπους, τῶν ἀνθρώπων, τοῖς ἀνθρώποις.',
        'Neuter second-declension nouns use -α for both nominative and accusative plural, -ων for genitive, and -οις for dative: τὰ ἔργα, τῶν ἔργων, τοῖς ἔργοις. The reading’s τὸ γυμνάσιον follows the same neuter pattern.'
      ],
      table: {
        title: 'Two second-declension models',
        headers: ['Case', 'ὁ φίλος', 'τὸ ἔργον'], greekColumns: [1, 2],
        rows: [
          ['Nominative plural', 'οἱ φίλοι', 'τὰ ἔργα'],
          ['Accusative plural', 'τοὺς φίλους', 'τὰ ἔργα'],
          ['Genitive plural', 'τῶν φίλων', 'τῶν ἔργων'],
          ['Dative plural', 'τοῖς φίλοις', 'τοῖς ἔργοις']
        ]
      },
      checks: [{ prompt: 'What does -οις tell you in τοῖς φίλοις?', answer: 'It is the dative plural ending of this second-declension masculine noun. In the reading, someone speaks to the friends.' }],
      examples: [{ greek: 'ὁ Σωκράτης τὴν πάλην τῶν φίλων βλέπει.', english: 'Socrates watches the friends’ wrestling; τῶν φίλων is genitive plural.' }]
    },
    {
      id: 'first-and-neuter', title: '3. Feminine First Declension and Neuter Plurals', practiceTopic: 'first-and-neuter',
      body: [
        'A feminine first-declension noun such as ἡ ἀγορά has plural endings -αι, -ας, -ῶν, -αις. The genitive plural has a circumflex on the last syllable: τῶν ἀγορῶν. Compare the familiar ἡ οἰκία: αἱ οἰκίαι, τὰς οἰκίας, τῶν οἰκιῶν, ταῖς οἰκίαις.',
        'Do not let the shared article τῶν conceal the different noun stems. The neuter τὰ ἔργα belongs to the second declension; the feminine αἱ ἀγοραί belongs to the first. The forms τὰ σώματα and τὴν πόλιν in the reading are supplied third-declension forms.'
      ],
      table: {
        title: 'Feminine and neuter plural contrast',
        headers: ['Case', 'ἡ ἀγορά', 'τὸ γυμνάσιον'], greekColumns: [1, 2],
        rows: [
          ['Nominative', 'αἱ ἀγοραί', 'τὰ γυμνάσια'],
          ['Accusative', 'τὰς ἀγοράς', 'τὰ γυμνάσια'],
          ['Genitive', 'τῶν ἀγορῶν', 'τῶν γυμνασίων'],
          ['Dative', 'ταῖς ἀγοραῖς', 'τοῖς γυμνασίοις']
        ]
      },
      checks: [{ prompt: 'Which ending marks the genitive plural of ἀγορά?', answer: 'The ending is -ῶν: ἀγορῶν, with a circumflex on the final syllable.' }],
      examples: [{ greek: 'ἐν ταῖς ἀγοραῖς οἱ ἄνθρωποι λέγουσιν.', english: 'People speak in the marketplaces; ταῖς ἀγοραῖς is dative plural after ἐν.' }]
    },
    {
      id: 'adjective-agreement', title: '4. Adjectives Agree with the Group', practiceTopic: 'adjective-agreement',
      body: [
        'An adjective agrees with its noun in gender, number, and case. In οἱ ἰσχυροὶ ἄνθρωποι, all three words are masculine nominative plural. When the group becomes the direct object, write τοὺς ἰσχυροὺς ἀνθρώπους. The adjective changes with the noun, even if a different word stands between them.',
        'Use καλός as a model. Masculine καλός gives καλοί, καλούς, καλῶν, καλοῖς; feminine καλή gives καλαί, καλάς, καλῶν, καλαῖς; neuter καλόν gives καλά, καλά, καλῶν, καλοῖς. Notice that the genitive plural is καλῶν for all three genders.'
      ],
      table: {
        title: 'Plural forms of καλός, καλή, καλόν',
        headers: ['Case', 'Masculine', 'Feminine', 'Neuter'], greekColumns: [1, 2, 3],
        rows: [
          ['Nominative', 'καλοί', 'καλαί', 'καλά'],
          ['Accusative', 'καλούς', 'καλάς', 'καλά'],
          ['Genitive', 'καλῶν', 'καλῶν', 'καλῶν'],
          ['Dative', 'καλοῖς', 'καλαῖς', 'καλοῖς']
        ],
        note: 'These are dictionary/table forms. In a running sentence, an acute may become a grave: καλοί → καλοὶ φίλοι.'
      },
      checks: [{ prompt: 'Which adjective agrees with ταῖς ἀγοραῖς: καλοῖς or καλαῖς?', answer: 'καλαῖς. Both adjective and noun must be feminine dative plural.' }],
      examples: [{ greek: 'οἱ ἰσχυροὶ ἄνθρωποι τοῖς φίλοις βοηθοῦσιν.', english: 'The strong people help their friends.' }]
    },
    {
      id: 'shifting-accents', title: '5. Why the Accent Shifts', practiceTopic: 'shifting-accents',
      body: [
        'A Greek acute can stand on the antepenult only when the last syllable is short. In ἄνθρωπος and ἄνθρωποι it stays far back; the final -ων of the genitive plural is long, so it moves to ἀνθρώπων. The dative plural -οις is also long: ἀνθρώποις.',
        'First-declension genitive plural regularly pulls the accent to its ending: ἀγορά → ἀγορῶν and οἰκία → οἰκιῶν. Compare φίλος → φίλοι but φίλων and φίλοις. Read the accent with the ending; do not try to copy the singular accent blindly.',
        'Words such as χρήσιμόν ἐστι in the reading show a different rule: an extra accent can appear before the enclitic ἐστι. Recognize that spelling here; the plural paradigms are this lesson’s production target.'
      ],
      table: {
        title: 'Accent movement in familiar words',
        headers: ['Singular', 'Nominative plural', 'Genitive plural', 'Dative plural'], greekColumns: [0, 1, 2, 3],
        rows: [
          ['ἄνθρωπος', 'ἄνθρωποι', 'ἀνθρώπων', 'ἀνθρώποις'],
          ['φίλος', 'φίλοι', 'φίλων', 'φίλοις'],
          ['ἀγορά', 'ἀγοραί', 'ἀγορῶν', 'ἀγοραῖς'],
          ['οἰκία', 'οἰκίαι', 'οἰκιῶν', 'οἰκίαις']
        ]
      },
      checks: [{ prompt: 'Why is the genitive plural ἀνθρώπων rather than ἄνθρωπων?', answer: 'The -ων ending is long. An accent cannot remain on the antepenult before a long final syllable, so it moves to the penult.' }],
      examples: [{ greek: 'τὸ σῶμα πρὸς πάντα τὰ ἔργα τῶν ἀνθρώπων χρήσιμόν ἐστιν.', english: 'The body is useful for all the tasks people do; τῶν ἀνθρώπων shows the shifted accent.' }]
    }
  ],
  summary: {
    title: 'Grammar Summary',
    items: [
      'Articles: οἱ / τοὺς / τῶν / τοῖς with masculine plural; αἱ / τὰς / τῶν / ταῖς with feminine plural; τὰ / τὰ / τῶν / τοῖς with neuter plural.',
      'Second-declension masculine: -οι, -ους, -ων, -οις. Second-declension neuter: -α, -α, -ων, -οις.',
      'First-declension feminine: -αι, -ας, -ῶν, -αις.',
      'Adjectives match their nouns in gender, number, and case.',
      'Long plural endings can move the accent: ἄνθρωπος → ἀνθρώπων; first-declension genitive plural ends in -ῶν.'
    ]
  }
};

lesson.culture = {
  title: 'The Greek Gymnasium: Training, Conversation, and the City',
  banner: {
    image: 'assets/lesson-6-olympia-palaestra.jpg',
    alt: 'Standing columns and foundations beside the open court of the ancient palaestra at Olympia.',
    caption: 'The palaestra at Olympia, photographed today. This is a real Greek training site, not the particular gymnasium imagined in the reading.',
    credit: 'Photograph by Annatsach (2019), Wikimedia Commons, CC BY-SA 4.0. Unmodified.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Palaestra_at_Olympia_-_4.jpg',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  body: [
    'Xenophon and Clinias enter a gymnasium in our reconstructed story. A Greek gymnasium was more than a modern exercise room. Its open spaces and covered walks gave young men places to train, meet others, and hear conversation. The palaestra was especially associated with wrestling and other combat practice. Buildings varied from city to city and changed over time, so the Olympia ruins in the photograph should not be mistaken for the exact Athenian site or period of our story.',
    'Training could include running, throwing the discus or javelin, wrestling, boxing, and pankration. Pankration combined wrestling and striking. Athletes commonly trained without clothing and used olive oil; this was an accepted athletic custom, not the tone of an ordinary street scene. The Greek word γυμνός means “naked,” and gives English its word “gym.” The reading’s wrestlers and pankration fighters belong to that athletic setting.',
    'At Olympia the palaestra and the larger gymnasium were neighboring facilities where competitors prepared for the games. The surviving buildings date from periods after Socrates. A covered track, the xystos, let athletes continue training in poor weather. Athenian sites had their own histories; our illustration shows a related Greek institution rather than a photograph of Xenophon’s Athens.',
    'Athletic preparation mattered beyond winning prizes. At Athens, games and torch races were tied to civic festivals, and wealthier citizens could be charged with supporting the training and food of a torch-race team. In Memorabilia 3.12, Xenophon presents Socrates telling Epigenes that a sound body helps a person face danger, help friends, benefit the city, and even think and learn well. That argument is why the gymnasium suits this lesson’s conversation.',
    'The public athletic world pictured here centered on men, and participation depended on status and local custom. It would be misleading to describe every Greek person as having the same access. Greek women were not simply absent from all athletics: at Olympia, separate races for young unmarried women honored Hera. Their opportunities were different from those of the men whose training dominates our Athenian reading.',
    'Finally, the scene should be read with its source boundary in mind. Xenophon records Socrates’ advice to Epigenes, but he does not say this exchange happened in a gymnasium or that Xenophon and Clinias watched it. Those details let a beginner reader see the plural groups and case forms in action while the historical argument remains anchored in Xenophon’s text.'
  ],
  questions: [
    { prompt: 'What was a palaestra especially used for?', answer: 'Wrestling and related combat training. It was one part of the broader Greek athletic world.' },
    { prompt: 'Why does the page show a photograph from Olympia?', answer: 'It is a surviving Greek palaestra that helps us picture a training place. It is not the imagined Athenian location of Socrates’ conversation.' },
    { prompt: 'What does Socrates say bodily training can help a person do?', answer: 'In Xenophon’s account, it can help someone face danger, aid friends, serve the city, and protect the work of the mind.' },
    { prompt: 'Did all Greeks have the same athletic opportunities?', answer: 'No. Public training in the scene centered on men, while opportunities varied by place, status, and gender. Separate races for young women were held at Olympia in honor of Hera.' }
  ],
  review: {
    title: 'Before the Final Quiz',
    items: [
      'Read the four plural forms of φίλος and explain the job of each case.',
      'Match a plural adjective to a masculine, feminine, or neuter noun.',
      'Explain why ἄνθρωπος becomes ἀνθρώπων in the genitive plural.',
      'Distinguish Socrates’ recorded advice to Epigenes from the invented gymnasium frame.'
    ]
  },
  sources: [
    { title: 'Xenophon, Memorabilia 3.12.1–8 (Greek text, Centre for the Greek Language)', url: 'https://www.greek-language.gr/greekLang/ancient_greek/tools/corpora/anthology/content.html?t=381' },
    { title: 'The Metropolitan Museum of Art, Athletics in Ancient Greece', url: 'https://www.metmuseum.org/essays/athletics-in-ancient-greece' },
    { title: 'Hellenic Ministry of Culture, Ancient Gymnasium of Olympia', url: 'https://odysseus.culture.gr/h/2/eh251.jsp?obj_id=592' },
    { title: 'Acropolis Museum, Gymnasiarch', url: 'https://www.theacropolismuseum.gr/en/node/1376' },
    { title: 'Annatsach, Palaestra at Olympia photograph (Wikimedia Commons)', url: 'https://commons.wikimedia.org/wiki/File:Palaestra_at_Olympia_-_4.jpg' }
  ]
};

const CASES = [
  ['nominative', 'subject'], ['accusative', 'direct object'],
  ['genitive', 'of'], ['dative', 'to or for']
];
const paradigms = [
  { lemma: 'ὁ φίλος', genitive: 'φίλου', stem: 'φιλ-', kind: 'masculine second', forms: ['οἱ φίλοι', 'τοὺς φίλους', 'τῶν φίλων', 'τοῖς φίλοις'] },
  { lemma: 'ὁ ἄνθρωπος', genitive: 'ἀνθρώπου', stem: 'ἀνθρωπ-', kind: 'masculine second', forms: ['οἱ ἄνθρωποι', 'τοὺς ἀνθρώπους', 'τῶν ἀνθρώπων', 'τοῖς ἀνθρώποις'] },
  { lemma: 'τὸ ἔργον', genitive: 'ἔργου', stem: 'ἐργ-', kind: 'neuter second', forms: ['τὰ ἔργα', 'τὰ ἔργα', 'τῶν ἔργων', 'τοῖς ἔργοις'] },
  { lemma: 'τὸ γυμνάσιον', genitive: 'γυμνασίου', stem: 'γυμνασι-', kind: 'neuter second', forms: ['τὰ γυμνάσια', 'τὰ γυμνάσια', 'τῶν γυμνασίων', 'τοῖς γυμνασίοις'] },
  { lemma: 'ἡ ἀγορά', genitive: 'ἀγορᾶς', stem: 'ἀγορ-', kind: 'feminine first', forms: ['αἱ ἀγοραί', 'τὰς ἀγοράς', 'τῶν ἀγορῶν', 'ταῖς ἀγοραῖς'] },
  { lemma: 'ἡ οἰκία', genitive: 'οἰκίας', stem: 'οἰκι-', kind: 'feminine first', forms: ['αἱ οἰκίαι', 'τὰς οἰκίας', 'τῶν οἰκιῶν', 'ταῖς οἰκίαις'] }
];
const articleRows = [
  ['masculine', ['οἱ', 'τοὺς', 'τῶν', 'τοῖς']],
  ['feminine', ['αἱ', 'τὰς', 'τῶν', 'ταῖς']],
  ['neuter', ['τὰ', 'τὰ', 'τῶν', 'τοῖς']]
];
const practice = [];
function addPractice(topic, category, prompt, answer, alternatives, explanation) {
  const options = [answer, ...alternatives.filter(x => x !== answer)].filter((x, i, a) => a.indexOf(x) === i);
  if (options.length < 4) throw new Error(`Too few distinct choices for ${prompt}`);
  const rotation = practice.length % 4;
  const four = [options[1], options[2], options[3]];
  four.splice(rotation, 0, answer);
  practice.push({
    id: `lesson-6-practice-${topic}-${String(practice.length + 1).padStart(3, '0')}`,
    type: 'multiple-choice', topic, category, prompt,
    choices: four.map(text => ({ text, correct: text === answer, feedback: `${text === answer ? 'Correct' : 'Review'}: ${explanation}` }))
  });
}
function distractors(answer, pool) {
  return [...new Set(pool.filter(value => value !== answer))].slice(0, 3);
}
const allForms = paradigms.flatMap(p => p.forms);
const allGenitives = paradigms.map(p => p.genitive);
const allStems = paradigms.map(p => p.stem);
paradigms.slice(0, 5).forEach(p => {
  addPractice('word-study', 'Word Study', `Which genitive singular belongs to ${p.lemma}?`, p.genitive,
    distractors(p.genitive, allGenitives), `${p.lemma} has the dictionary genitive ${p.genitive}.`);
  addPractice('word-study', 'Word Study', `Which nominative plural belongs to ${p.lemma}?`, p.forms[0],
    distractors(p.forms[0], allForms), `${p.forms[0]} is nominative plural.`);
  addPractice('word-study', 'Word Study', `What case is ${p.forms[2]}?`, 'Genitive plural.',
    ['Nominative plural.', 'Accusative plural.', 'Dative plural.'], `${p.forms[2]} means “of the group.”`);
  addPractice('word-study', 'Word Study', `Which stem remains when the endings of ${p.lemma} change?`, p.stem,
    distractors(p.stem, allStems), `${p.stem} remains across the forms of ${p.lemma}.`);
});

const articlePool = ['οἱ', 'αἱ', 'τὰ', 'τοὺς', 'τὰς', 'τῶν', 'τοῖς', 'ταῖς'];
articleRows.forEach(([gender, forms]) => CASES.forEach(([caseName], index) => {
  addPractice('plural-articles', 'Plural Articles', `Choose the ${gender} ${caseName} plural article before a noun.`, forms[index],
    distractors(forms[index], articlePool), `${forms[index]} marks ${gender} ${caseName} plural here.`);
}));
const articleContexts = [
  ['___ φίλοι', 'οἱ'], ['___ φίλους', 'τοὺς'], ['___ φίλων', 'τῶν'], ['___ φίλοις', 'τοῖς'],
  ['___ ἀγοραί', 'αἱ'], ['___ ἀγοράς', 'τὰς'], ['___ ἀγοραῖς', 'ταῖς'], ['___ ἔργα', 'τὰ']
];
articleContexts.forEach(([phrase, answer]) => addPractice('plural-articles', 'Plural Articles', `Complete the phrase ${phrase}.`, answer,
  distractors(answer, articlePool), `${answer} matches the noun’s gender, number, and case.`));

paradigms.slice(0, 4).forEach(p => CASES.forEach(([caseName, job], index) => {
  addPractice('second-declension', 'Second Declension', `Choose the ${caseName} plural (${job}) of ${p.lemma}.`, p.forms[index],
    distractors(p.forms[index], [...p.forms, ...allForms]), `${p.forms[index]} is the ${caseName} plural of ${p.lemma}.`);
}));
[
  ['“The friends help,” with friends as subject.', 'οἱ φίλοι'],
  ['“Socrates sees the friends,” with friends as object.', 'τοὺς φίλους'],
  ['“The tasks of the people,” with people after “of.”', 'τῶν ἀνθρώπων'],
  ['“To the people,” with people as recipient.', 'τοῖς ἀνθρώποις']
].forEach(([prompt, answer]) => addPractice('second-declension', 'Second Declension', `Which phrase fits ${prompt}`, answer,
  distractors(answer, allForms), `${answer} gives the needed plural case.`));

paradigms.slice(2, 6).forEach(p => CASES.forEach(([caseName], index) => {
  addPractice('first-and-neuter', 'First Declension and Neuter', `Write the ${caseName} plural of ${p.lemma}.`, p.forms[index],
    distractors(p.forms[index], [...p.forms, ...allForms]), `${p.forms[index]} follows the ${p.kind} pattern.`);
}));
[
  ['Which plural can be both subject and direct object: τὰ ἔργα or τῶν ἔργων?', 'τὰ ἔργα'],
  ['Which phrase means “in the marketplaces” after ἐν?', 'ταῖς ἀγοραῖς'],
  ['Which phrase means “of the houses”?', 'τῶν οἰκιῶν'],
  ['Which phrase means “of the gymnasia”?', 'τῶν γυμνασίων']
].forEach(([prompt, answer]) => addPractice('first-and-neuter', 'First Declension and Neuter', prompt, answer,
  distractors(answer, allForms), `${answer} gives the requested plural form.`));

const adjectiveForms = {
  masculine: ['καλοί', 'καλούς', 'καλῶν', 'καλοῖς'],
  feminine: ['καλαί', 'καλάς', 'καλῶν', 'καλαῖς'],
  neuter: ['καλά', 'καλά', 'καλῶν', 'καλοῖς']
};
const adjectiveTasks = [
  ['φίλος', 'masculine'], ['ἄνθρωπος', 'masculine'], ['ἀγορά', 'feminine'],
  ['οἰκία', 'feminine'], ['ἔργον', 'neuter']
];
const adjectivePool = [...new Set(Object.values(adjectiveForms).flat())];
adjectiveTasks.forEach(([noun, gender]) => CASES.forEach(([caseName], index) => {
  const answer = adjectiveForms[gender][index];
  addPractice('adjective-agreement', 'Adjective Agreement', `For ${noun}, choose the ${caseName} plural of καλός/καλή/καλόν.`, answer,
    distractors(answer, adjectivePool), `${answer} agrees with a ${gender} ${caseName} plural noun.`);
}));

paradigms.slice(0, 5).forEach(p => CASES.forEach(([caseName], index) => {
  addPractice('shifting-accents', 'Shifting Accents', `Which is the correctly accented ${caseName} plural of ${p.lemma}?`, p.forms[index],
    distractors(p.forms[index], [...p.forms, ...allForms]), `${p.forms[index]} has the proper ending and accent.`);
}));

const topics = ['word-study', 'plural-articles', 'second-declension', 'first-and-neuter', 'adjective-agreement', 'shifting-accents'];
for (const topic of topics) {
  if (practice.filter(q => q.topic === topic).length !== 20) throw new Error(`Expected 20 practice questions for ${topic}`);
}

function copyQuestion(question, prefix, number) {
  const answer = question.choices.find(c => c.correct).text;
  const others = question.choices.filter(c => !c.correct).map(c => c.text);
  const rotation = number % 4;
  others.splice(rotation, 0, answer);
  return {
    ...question,
    id: `lesson-6-${prefix}-${String(number + 1).padStart(2, '0')}`,
    prompt: `${prefix === 'grammar-exercise' ? 'Grammar exercise' : 'Final quiz'} ${number + 1}: ${question.prompt}`,
    choices: others.map(text => ({ text, correct: text === answer, feedback: `${text === answer ? 'Correct' : 'Review'}: ${answer} is the answer.` }))
  };
}
const grammarExercises = topics.flatMap(topic => {
  const questions = practice.filter(q => q.topic === topic);
  return [0, 5, 10, 15].map(index => questions[index]);
});
const vocab = lesson.vocabulary.flatMap(group => group.items);
const vocabularyQuestions = vocab.flatMap((item, index) => [
  { id: `lesson-6-vocab-${index + 1}-meaning`, type: 'multiple-choice', topic: 'vocabulary', category: 'Vocabulary', prompt: `What does ${item.greek} mean?`, answer: item.english, alternatives: vocab.filter((_, i) => i !== index).map(x => x.english) },
  { id: `lesson-6-vocab-${index + 1}-form`, type: 'multiple-choice', topic: 'vocabulary', category: 'Vocabulary', prompt: `Which Greek vocabulary entry means “${item.english}”?`, answer: item.greek, alternatives: vocab.filter((_, i) => i !== index).map(x => x.greek) }
].map((itemQuestion, offset) => {
  const options = distractors(itemQuestion.answer, itemQuestion.alternatives);
  options.splice((index + offset) % 4, 0, itemQuestion.answer);
  const { answer, alternatives, ...rest } = itemQuestion;
  return { ...rest, choices: options.map(text => ({ text, correct: text === answer, feedback: `${text === answer ? 'Correct' : 'Review'}: ${item.greek} means ${item.english}.` })) };
}));

function bespoke(id, category, prompt, answer, wrong, explanation) {
  const options = [...wrong];
  options.splice(id % 4, 0, answer);
  if (new Set(options).size !== 4) throw new Error(`Duplicate quiz choices for ${id}`);
  return {
    id: `lesson-6-final-${String(id + 1).padStart(2, '0')}`, type: 'multiple-choice', category, prompt,
    choices: options.map(text => ({ text, correct: text === answer, feedback: `${text === answer ? 'Correct' : 'Review'}: ${explanation}` }))
  };
}
const finalReading = [
  ['Who trains with Xenophon in the reading?', 'Clinias.', ['Gryllus.', 'Proxenus.', 'Critobulus.'], 'Clinias is Xenophon’s training companion in the reconstructed frame.'],
  ['What do Xenophon and Clinias practice after wrestling?', 'Pankration.', ['A torch race.', 'Discus throwing.', 'Music.'], 'The reading says they practice pankration after wrestling.'],
  ['Who speaks directly to Epigenes?', 'Socrates.', ['Clinias.', 'Gryllus.', 'Aristarchus.'], 'Socrates addresses Epigenes in Xenophon’s source.'],
  ['Why does Epigenes say he does not train?', 'He considers himself an ordinary person, not an athlete.', ['He is leaving Athens.', 'He has already won at Olympia.', 'He dislikes his friends.'], 'Epigenes calls himself an ἰδιώτης.'],
  ['What benefit of bodily strength does Socrates name?', 'Helping friends and the city.', ['Avoiding every question.', 'Winning money in the agora.', 'Never needing to learn.'], 'Socrates links sound condition to helping friends and benefiting the city.'],
  ['What does Epigenes look at near the end of the reading?', 'The young men.', ['The horse.', 'The agora.', 'The sea.'], 'The closing sentence has Epigenes look at the young men.']
];
const finalCulture = [
  ['What was a palaestra particularly associated with?', 'Wrestling and combat training.', ['Shipbuilding.', 'Law courts.', 'Horse breeding.'], 'A palaestra was especially used for wrestling and related training.'],
  ['Where is the archaeological site in the Page 3 photograph?', 'Olympia.', ['Athens.', 'Delphi.', 'Sparta.'], 'The photograph shows the palaestra at Olympia.'],
  ['Which description of the photograph is accurate?', 'It shows surviving ruins, not the exact scene in the reading.', ['It shows Socrates speaking to Epigenes.', 'It records a fifth-century Athenian class.', 'It shows the Acropolis gymnasium.'], 'The photograph is a modern view of Olympia’s remains.'],
  ['Which practice was common among Greek athletes?', 'Training without clothing and using olive oil.', ['Wearing armor for every event.', 'Playing modern team football.', 'Avoiding all contact sports.'], 'Athletic nudity and olive oil were familiar training customs.'],
  ['What is pankration?', 'A combat sport combining wrestling and striking.', ['A kind of chariot.', 'A covered running track.', 'A building for debate.'], 'Pankration combined wrestling and striking.'],
  ['Which statement about women and Greek athletics is supported?', 'Opportunities varied; young women had separate Hera races at Olympia.', ['All women trained with men in Athenian gymnasia.', 'Women never competed anywhere in Greece.', 'All Greek cities followed exactly the same rules.'], 'The article distinguishes Athenian training from the Hera races at Olympia.']
];
const finalVocabulary = [
  ['What does τὸ γυμνάσιον name?', 'A place for exercise.', ['A marketplace.', 'A warship.', 'A helmet.'], 'γυμνάσιον is a gymnasium.'],
  ['What does ἡ πάλη mean?', 'Wrestling.', ['Wisdom.', 'Walking.', 'Bread.'], 'πάλη means wrestling.'],
  ['What does πολλάκις mean?', 'Often.', ['Never.', 'Tomorrow.', 'Together.'], 'πολλάκις means often.'],
  ['What does ὁ ἰδιώτης mean in Epigenes’ reply?', 'An ordinary private person.', ['A professional athlete.', 'A city magistrate.', 'A wrestling coach.'], 'Epigenes uses ἰδιώτης of himself.'],
  ['What does χρήσιμος mean?', 'Useful.', ['Narrow.', 'Distant.', 'Angry.'], 'χρήσιμος means useful.'],
  ['What does γυμνάζω mean?', 'I train or exercise.', ['I buy.', 'I forget.', 'I write.'], 'γυμνάζω means train or exercise.']
];
const finalGrammarIndices = {
  'word-study': [2, 13],
  'plural-articles': [2, 7],
  'second-declension': [1, 11],
  'first-and-neuter': [2, 14],
  'adjective-agreement': [8, 15],
  'shifting-accents': [6, 18]
};
const finalGrammar = topics.flatMap(topic => {
  const questions = practice.filter(q => q.topic === topic);
  return finalGrammarIndices[topic].map(index => questions[index]);
}).map((q, index) => {
  const answer = q.choices.find(c => c.correct).text;
  const wrong = q.choices.filter(c => !c.correct).map(c => c.text);
  return [q.prompt, answer, wrong, `${answer} is the correct plural form.`];
});
const finalQuizQuestions = [...finalReading, ...finalVocabulary, ...finalGrammar, ...finalCulture]
  .map(([prompt, answer, wrong, explanation], index) => bespoke(index, index < 6 ? 'Reading' : index < 12 ? 'Vocabulary' : index < 24 ? 'Grammar' : 'Greek World', prompt, answer, wrong, explanation));
if (finalQuizQuestions.length !== 30 || grammarExercises.length !== 24) throw new Error('Wrong Lesson 6 assessment counts');

lesson.activities = {
  'vocab-flashcards': { title: 'Lesson 6 Vocabulary Flashcards', cards: vocab.map(item => ({ prompt: item.greek, answer: item.english })) },
  'vocab-practice': { title: 'Lesson 6 Vocabulary Practice', practiceMode: 'rounds', roundSize: 10, threshold: 80, instructions: 'Practice the 14 lesson vocabulary items in short rounds.', questions: vocabularyQuestions },
  'grammar-flashcards': {
    title: 'Lesson 6 Grammar Flashcards',
    cards: [
      ['οἱ φίλοι', 'the friends: nominative plural'], ['τοὺς φίλους', 'the friends: accusative plural'],
      ['τῶν φίλων', 'of the friends: genitive plural'], ['τοῖς φίλοις', 'to the friends: dative plural'],
      ['αἱ ἀγοραί', 'the marketplaces: nominative plural'], ['τὰς ἀγοράς', 'the marketplaces: accusative plural'],
      ['τῶν ἀγορῶν', 'of the marketplaces: genitive plural'], ['ταῖς ἀγοραῖς', 'in the marketplaces: dative plural'],
      ['τὰ ἔργα', 'the tasks: nominative or accusative plural'], ['τῶν ἔργων', 'of the tasks: genitive plural'],
      ['καλοὶ φίλοι', 'good friends: masculine nominative plural'], ['καλαὶ ἀγοραί', 'fine marketplaces: feminine nominative plural'],
      ['καλὰ ἔργα', 'good tasks: neuter nominative or accusative plural'], ['ἀνθρώπων', 'of people: accent shifts before long -ων']
    ].map(([prompt, answer]) => ({ prompt, answer }))
  },
  'topic-practice': { title: 'Lesson 6 Grammar Topic Practice', practiceMode: 'rounds', roundSize: 10, instructions: 'Choose a topic and work through two short rounds. These questions give feedback without gating the page.', questions: practice },
  'grammar-exercises': {
    title: 'Lesson 6 Grammar Exercises', description: 'Plural cases, agreement, and accents',
    threshold: 80, required: true, requireAllAnswers: true, revision: 'lesson-6-grammar-exercises-v1',
    instructions: 'Answer every question and score at least 80% to continue to the culture page.',
    questions: grammarExercises.map((q, index) => copyQuestion(q, 'grammar-exercise', index))
  },
  'lesson-quiz': {
    title: 'Lesson 6 Final Quiz — Strength of Body and Mind',
    description: 'Reading, vocabulary, grammar, and the Greek gymnasium',
    threshold: 80, required: true, requireAllAnswers: true, revision: 'lesson-6-final-quiz-v1', pointsPossible: 30,
    instructions: 'Answer all 30 questions. Score at least 80% to complete Lesson 6 and continue to Lesson 7.',
    questions: finalQuizQuestions
  }
};

const saved = JSON.stringify(lesson, null, 2) + '\n';
fs.writeFileSync(payloadPath, saved);
let fallback = fs.readFileSync(lessonDataPath, 'utf8');
const firstMarker = '  // Lesson 6 has an authored first-page draft.';
const generatedMarker = '  // BEGIN GENERATED LESSON 6';
const start = fallback.indexOf(fallback.includes(generatedMarker) ? generatedMarker : firstMarker);
const end = fallback.indexOf('  const ACTIVITY_LABELS = {', start);
if (start < 0 || end < 0) throw new Error('Could not locate the Lesson 6 fallback block');
fallback = fallback.slice(0, start) + `  // BEGIN GENERATED LESSON 6\n  LESSONS["lesson-6"] = ${JSON.stringify(lesson, null, 2)};\n  // END GENERATED LESSON 6\n\n` + fallback.slice(end);
fs.writeFileSync(lessonDataPath, fallback);

const sql = `-- Publish the complete Lesson 6 gymnasium lesson and archive its previous version.\nBEGIN;\nDO $lesson6$\nDECLARE\n  patch jsonb := $json$${JSON.stringify(lesson, null, 2)}$json$::jsonb;\n  lesson_id_value uuid;\n  segment_id_value uuid;\n  reading_id_value uuid;\n  old_content jsonb;\n  old_version integer;\n  block_kind text;\n  group_item jsonb;\n  vocab_item jsonb;\n  vocab_id uuid;\n  vocab_order integer := 0;\n  paragraph_item jsonb;\n  gloss_item jsonb;\n  paragraph_order integer := 0;\n  gloss_order integer;\nBEGIN\n  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-6' FOR UPDATE;\n  SELECT content,version INTO old_content,old_version FROM public.lesson_content_overrides WHERE lesson_id=lesson_id_value FOR UPDATE;\n  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN\n    IF old_content IS DISTINCT FROM patch THEN RAISE EXCEPTION 'Lesson 6 revision matches but payload differs'; END IF;\n    RETURN;\n  END IF;\n  IF old_content IS NOT NULL AND (old_version IS DISTINCT FROM 1\n    OR md5(old_content::text) IS DISTINCT FROM '94bd495e712cdd40cc0d60e9412e6044') THEN\n    RAISE EXCEPTION 'Lesson 6 published content changed after inspection; review before publishing';\n  END IF;\n  IF old_content IS NOT NULL THEN\n    INSERT INTO public.lesson_content_versions (lesson_id,content,version,note)\n    VALUES (lesson_id_value,old_content,old_version,'Before complete Lesson 6 gymnasium lesson');\n  END IF;\n  INSERT INTO public.lesson_content_overrides (lesson_id,content,version) VALUES (lesson_id_value,patch,1)\n  ON CONFLICT (lesson_id) DO UPDATE SET content=EXCLUDED.content,version=public.lesson_content_overrides.version+1,updated_at=now();\n  UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope' WHERE id=lesson_id_value;\n  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order)\n  SELECT lesson_id_value,p->>'slug',p->>'title',(p->>'page')::integer FROM jsonb_array_elements(patch->'pages') p\n  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title,sort_order=EXCLUDED.sort_order;\n  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-6-page-1';\n  SELECT id INTO reading_id_value FROM public.readings WHERE lesson_id=lesson_id_value ORDER BY sort_order,id LIMIT 1;\n  IF reading_id_value IS NULL THEN\n    INSERT INTO public.readings (lesson_id,segment_id,title,sort_order) VALUES (lesson_id_value,segment_id_value,patch #>> '{reading,title}',1) RETURNING id INTO reading_id_value;\n  END IF;\n  UPDATE public.readings SET segment_id=segment_id_value,title=patch #>> '{reading,title}',\n    greek_text=(SELECT string_agg(p->>'greek',E'\\n\\n' ORDER BY n) FROM jsonb_array_elements(patch #> '{reading,paragraphs}') WITH ORDINALITY t(p,n)),\n    translation=patch #>> '{reading,translation}',notes_markdown=patch #>> '{reading,notesMarkdown}',source_citation=patch #>> '{reading,sourceCitation}'\n  WHERE id=reading_id_value;\n  DELETE FROM public.reading_glosses WHERE lesson_id=lesson_id_value AND reading_id=reading_id_value;\n  FOR paragraph_item IN SELECT value FROM jsonb_array_elements(patch #> '{reading,paragraphs}') LOOP\n    gloss_order:=0;\n    FOR gloss_item IN SELECT value FROM jsonb_array_elements(paragraph_item->'gloss') LOOP\n      INSERT INTO public.reading_glosses (lesson_id,reading_id,greek,english,lemma,display_form,part_of_speech,morphology,source,sort_order)\n      VALUES (lesson_id_value,reading_id_value,gloss_item->>'greek',gloss_item->>'english',gloss_item->>'greek',gloss_item->>'greek','Reading gloss','{}'::jsonb,'lesson_reading_gloss',paragraph_order*1000+gloss_order);\n      gloss_order:=gloss_order+1;\n    END LOOP;\n    paragraph_order:=paragraph_order+1;\n  END LOOP;\n  DELETE FROM public.lesson_vocabulary WHERE lesson_id=lesson_id_value;\n  FOR group_item IN SELECT value FROM jsonb_array_elements(patch->'vocabulary') LOOP\n    FOR vocab_item IN SELECT value FROM jsonb_array_elements(group_item->'items') LOOP\n      INSERT INTO public.vocabulary_items (lemma,display_form,gloss,part_of_speech,dictionary_form,morphology)\n      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_6_gymnasium'))\n      ON CONFLICT (lemma,display_form,gloss) DO NOTHING;\n      SELECT id INTO STRICT vocab_id FROM public.vocabulary_items WHERE lemma=vocab_item->>'lemma' AND display_form=vocab_item->>'greek' AND gloss=vocab_item->>'english';\n      INSERT INTO public.lesson_vocabulary (lesson_id,vocabulary_item_id,sort_order) VALUES (lesson_id_value,vocab_id,vocab_order);\n      vocab_order:=vocab_order+1;\n    END LOOP;\n  END LOOP;\n  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order) VALUES (lesson_id_value,'published-structured-content','Published Structured Content',99)\n  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title RETURNING id INTO segment_id_value;\n  FOREACH block_kind IN ARRAY ARRAY['reading','wordStudy','grammar','culture','activities'] LOOP\n    UPDATE public.lesson_content_blocks b SET content=jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),updated_at=now()\n    FROM public.lesson_segments s WHERE b.segment_id=s.id AND s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind;\n    IF NOT EXISTS (SELECT 1 FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id\n      WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind) THEN\n      INSERT INTO public.lesson_content_blocks (segment_id,block_type,title,content,sort_order)\n      VALUES (segment_id_value,'custom',block_kind,jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),\n        CASE block_kind WHEN 'reading' THEN 1 WHEN 'wordStudy' THEN 2 WHEN 'grammar' THEN 3 WHEN 'culture' THEN 4 ELSE 6 END);\n    END IF;\n  END LOOP;\nEND\n$lesson6$;\nCOMMIT;\n`;
fs.writeFileSync(migrationPath, sql);
console.log(`Built Lesson 6: ${practice.length} topic questions, ${grammarExercises.length} grammar exercises, ${finalQuizQuestions.length} final quiz questions.`);
