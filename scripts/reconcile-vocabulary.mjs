// Build one introduction per lemma, using only forms attested in that lesson's reading.
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync('lesson-data.js', 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context);
const lessons = context.window.xenophonLessonData.lessons;

// The first lesson predates the structured dictionary fields.
const firstLesson = {
  'ἄγει': ['ἄγω', 'ἄγω'], 'βαδίζει': ['βαδίζω', 'βαδίζω'],
  'βλέπει': ['βλέπω', 'βλέπω'], 'θεραπεύει': ['θεραπεύω', 'θεραπεύω'],
  'ἕπεται': ['ἕπομαι', 'ἕπομαι'], 'ἔχει': ['ἔχω', 'ἔχω'],
  'καλεῖ': ['καλέω', 'καλέω'], 'λέγει': ['λέγω', 'λέγω'],
  'μένει': ['μένω', 'μένω'], 'οἰκεῖ': ['οἰκέω', 'οἰκέω'],
  'ποιεῖ': ['ποιέω', 'ποιέω'], 'φέρει': ['φέρω', 'φέρω'],
  'ὑλακτεῖ': ['ὑλακτέω', 'ὑλακτέω'], 'χαίρει': ['χαίρω', 'χαίρω'],
  'ὁ ἀγρός': ['ἀγρός', 'ἀγρός, ἀγροῦ, ὁ'],
  'ὁ ἀνήρ': ['ἀνήρ', 'ἀνήρ, ἀνδρός, ὁ'],
  'αἱ Ἀθῆναι': ['Ἀθῆναι', 'Ἀθῆναι, Ἀθηνῶν, αἱ'],
  'ὁ δεσπότης': ['δεσπότης', 'δεσπότης, δεσπότου, ὁ'],
  'τὸ δεῖπνον': ['δεῖπνον', 'δεῖπνον, δείπνου, τό'],
  'ἡ θύρα': ['θύρα', 'θύρα, θύρας, ἡ'],
  'ὁ ἵππος': ['ἵππος', 'ἵππος, ἵππου, ὁ'],
  'ὁ ἱππεύς': ['ἱππεύς', 'ἱππεύς, ἱππέως, ὁ'],
  'τὸ ἱππικόν': ['ἱππικόν', 'ἱππικόν, ἱππικοῦ, τό'],
  'ὁ κύων': ['κύων', 'κύων, κυνός, ὁ'],
  'ὁ λόφος': ['λόφος', 'λόφος, λόφου, ὁ'],
  'ἡ μήτηρ': ['μήτηρ', 'μήτηρ, μητρός, ἡ'],
  'ὁ νεανίας': ['νεανίας', 'νεανίας, νεανίου, ὁ'],
  'ὁ οἶκος': ['οἶκος', 'οἶκος, οἴκου, ὁ'],
  'ὁ πατήρ': ['πατήρ', 'πατήρ, πατρός, ὁ'],
  'ὁ παῖς': ['παῖς', 'παῖς, παιδός, ὁ/ἡ'],
  'ὁ σῖτος': ['σῖτος', 'σῖτος, σίτου, ὁ'],
  'ὁ υἱός': ['υἱός', 'υἱός, υἱοῦ, ὁ'],
  'τὸ ὕδωρ': ['ὕδωρ', 'ὕδωρ, ὕδατος, τό'],
  'ὁ Ξενοφῶν': ['Ξενοφῶν', 'Ξενοφῶν, Ξενοφῶντος, ὁ'],
  'ὁ Γρύλλος': ['Γρύλλος', 'Γρύλλος, Γρύλλου, ὁ'],
  'ἡ Ἐρχία': ['Ἐρχία', 'Ἐρχία, Ἐρχίας, ἡ'],
  'ἀγαθός': ['ἀγαθός', 'ἀγαθός, ἀγαθή, ἀγαθόν'],
  'Ἀθηναῖος': ['Ἀθηναῖος', 'Ἀθηναῖος, Ἀθηναία, Ἀθηναῖον'],
  'ἰσχυρός': ['ἰσχυρός', 'ἰσχυρός, ἰσχυρά, ἰσχυρόν'],
  'καλός': ['καλός', 'καλός, καλή, καλόν'],
  'νέος': ['νέος', 'νέος, νέα, νέον'],
  'ἐν': ['ἐν', 'ἐν'], 'ἐπί': ['ἐπί', 'ἐπί'],
  'εἶτα': ['εἶτα', 'εἶτα'], 'οὐ': ['οὐ', 'οὐ'],
  'περί': ['περί', 'περί'], 'πρός': ['πρός', 'πρός'],
};
const standardCitations = {
  'μικρός, -ά, -όν': 'μικρός, μικρά, μικρόν',
  'μετά + genitive': 'μετά',
  'ὅπλον, ὅπλου, τό (usually plural)': 'ὅπλον, ὅπλου, τό',
  'ἐπιμελέομαι + genitive': 'ἐπιμελέομαι',
  'ἑαυτοῦ, ἑαυτῆς (reflexive)': 'ἑαυτοῦ, ἑαυτῆς, ἑαυτοῦ',
  'ἐμαυτοῦ, ἐμαυτῆς (reflexive)': 'ἐμαυτοῦ, ἐμαυτῆς',
  'σώφρων (masculine/feminine), σῶφρον (neuter), genitive σώφρονος': 'σώφρων, σῶφρον, σώφρονος',
  'χρῆμα, χρήματος, τό (usually plural)': 'χρῆμα, χρήματος, τό',
  'πᾶς, πᾶσα, πᾶν; genitive παντός, πάσης, παντός': 'πᾶς, πᾶσα, πᾶν',
  'τέτταρες (masculine/feminine), τέτταρα (neuter)': 'τέτταρες, τέτταρα',
  'τρεῖς (masculine/feminine), τρία (neuter)': 'τρεῖς, τρία',
  'δεῖ (impersonal)': 'δεῖ',
  'πιστεύω (+ dative)': 'πιστεύω',
};

// A lemma has one part of speech throughout the course. These exceptions cover
// indeclinable words, pronouns, numerals, and forms whose citation is ambiguous.
const partOfSpeechOverrides = {
  Prepositions: ['ἐν', 'ἐπί', 'περί', 'πρός', 'μετά', 'σύν', 'ἄνευ'],
  Pronouns: ['ἄλλος', 'ἐγώ', 'σύ', 'ἡμεῖς', 'ὑμεῖς', 'ἐκεῖνος', 'οὗτος',
    'ἑαυτοῦ', 'ἐμαυτοῦ', 'τίς', 'τις', 'ὅς', 'ὅδε', 'πότερος'],
  Numerals: ['τέτταρες', 'τρεῖς'],
  Conjunctions: ['ἀλλά', 'ὡς'],
  Particles: ['οὐ', 'πότερον', 'εἴθε'],
  Adjectives: ['χρήσιμος', 'ἄριστος', 'λῷον'],
  Adverbs: ['εἶτα', 'ποῦ', 'πάλιν', 'οὐκέτι', 'πολλάκις', 'καλῶς',
    'ὕστερον', 'νῦν', 'πρῶτον', 'μόνον', 'οἴκαδε', 'κάλλιστα', 'λάθρᾳ',
    'ἅμα', 'εὐθύς', 'ἄλλοθι', 'μακρόθεν', 'πάντοτε', 'πόθεν', 'πῶς',
    'δεῦρο', 'ὀρθῶς', 'αὔριον', 'πανταχοῦ', 'ὄπισθεν', 'χωρίς', 'ἧττον',
    'ἐξαίφνης', 'εὐμενῶς', 'κοινῇ', 'πιστῶς', 'ἐνταῦθα'],
  Verbs: ['χρή', 'οἶδα'],
};
const partOfSpeechByLemma = new Map(
  Object.entries(partOfSpeechOverrides).flatMap(([category, lemmas]) =>
    lemmas.map(lemma => [lemma, category]))
);
const partOfSpeechOrder = ['Verbs', 'Nouns', 'Adjectives', 'Pronouns', 'Numerals',
  'Adverbs', 'Prepositions', 'Conjunctions', 'Particles'];
const partOfSpeech = (lemma, dictionaryForm) => {
  if (partOfSpeechByLemma.has(lemma)) return partOfSpeechByLemma.get(lemma);
  if (/[,،]\s*(?:ὁ|ἡ|τό|τὸ|οἱ|αἱ|τά|τὰ)(?:\/ἡ)?$/.test(dictionaryForm)) return 'Nouns';
  if (/(?:ω|μι|μαι|ει|ειν)$/.test(normalize(lemma))) return 'Verbs';
  if (dictionaryForm.includes(',')) return 'Adjectives';
  if (normalize(lemma).endsWith('ωσ')) return 'Adverbs';
  throw Error(`No part of speech for ${lemma} (${dictionaryForm})`);
};

const manual = JSON.parse(fs.readFileSync('content/vocabulary/reading-form-overrides.json', 'utf8'));
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ς/g, 'σ').replace(/[^\u0370-\u03ff]/g, '');
const lexicalKey = value => {
  const raw = String(value || '').trim().normalize('NFC').toLowerCase()
    .replace(/^(ὁ|ἡ|τὸ|τό|οἱ|αἱ|τὰ|τά)\s+/, '').split(',')[0].trim();
  // These distinct pronouns differ only by accent.
  return /^(τίς|τί|τις|τι)$/.test(raw) ? raw : normalize(raw);
};
const words = value => [...String(value || '').matchAll(/[\p{Script=Greek}\p{M}]+/gu)].map(match => match[0]);
const firstPart = value => String(value || '').split(',')[0].trim().replace(/^(ὁ|ἡ|τὸ|τό|οἱ|αἱ|τὰ|τά)\s+/, '');
const stems = (lemma, dictionaryForm) => {
  const raw = [lemma, String(dictionaryForm || '').split(',')[1]].filter(Boolean).map(normalize);
  const result = new Set();
  for (const word of raw) {
    for (const suffix of ['ομαι', 'εομαι', 'αομαι', 'εω', 'αω', 'οω', 'ου', 'ης', 'ας', 'ος', 'ον', 'ων', 'ω', 'μι', 'η', 'α', 'σ']) {
      if (word.endsWith(suffix) && word.length - suffix.length >= 4) result.add(word.slice(0, -suffix.length));
    }
    if (word.length >= 6) result.add(word.slice(0, -2));
  }
  return [...result].sort((a, b) => b.length - a.length);
};
const thirdPerson = phrase => {
  const [word, ...rest] = phrase.split(/\s+/);
  const irregular = { be: 'is', have: 'has', do: 'does', go: 'goes' };
  const verb = irregular[word] || (/[^aeiou]y$/.test(word) ? `${word.slice(0, -1)}ies`
    : /(s|sh|ch|x|o)$/.test(word) ? `${word}es` : `${word}s`);
  return [verb, ...rest].join(' ');
};
const contextualMeaning = (item, lemma, form, gloss) => {
  const base = String(item.english || '').split(/[;,]/)[0].replace(/\s*\([^)]*\)/g, '').trim();
  const bareVerb = base.replace(/^to\s+/, '');
  const glossWords = words(gloss?.greek);
  const shortGloss = String(gloss?.english || '').split(';')[0].trim();
  const simpleGloss = glossWords.length <= 2 && shortGloss.split(/\s+/).length <= 5
    && !/(?:[’']s|supplied|form|tense|case|declension|participle|infinitive)/i.test(shortGloss);
  const verb = /(?:ω|μαι|μι)$/.test(normalize(lemma))
    && !new Set(['ἐγώ', 'οὔπω', 'ἔξω']).has(lemma);
  if (verb && simpleGloss && glossWords.length === 1
    && !/^(?:from|with|present|aorist|middle|passive|future|first|second|third|subjunctive|optative)\b/i.test(shortGloss)) return shortGloss;
  if (verb) {
    const shape = normalize(form);
    if (/(?:ειν|εσθαι|σαι)$/.test(shape)) return `to ${bareVerb}`;
    if (/(?:ουσιν|ουσι|ονται)$/.test(shape)) return `they ${bareVerb}`;
    if (/(?:εισ|εσθε|ετε)$/.test(shape)) return `you ${bareVerb}`;
    if (/(?:ομεν|ουμεν)$/.test(shape)) return `we ${bareVerb}`;
    if (/(?:εται|ει)$/.test(shape)) return `he/she ${thirdPerson(bareVerb)}`;
    if (/(?:ομαι|ω)$/.test(shape)) return `I ${bareVerb}`;
  }
  const englishStem = base.toLowerCase().replace(/[^a-z]/g, '').slice(0, 4);
  if (!verb && simpleGloss && englishStem.length >= 4
    && shortGloss.toLowerCase().includes(englishStem)
    && /^(?:the |a |an |of |in |for |[a-z]+(?:s|es)\b)/i.test(shortGloss)
    && !/^(?:provides|takes|makes|means|begins|gains|helps|shows|uses|marks)\b/i.test(shortGloss)) return shortGloss;
  return /; its case forms/.test(item.english || '') ? base : item.english;
};

const seen = new Map();
const result = {};
const audit = [];
for (let number = 1; number <= 48; number++) {
  const lesson = lessons[`lesson-${number}`];
  const reading = lesson.reading.paragraphs.map(p => p.greek).join(' ');
  const tokens = words(reading);
  const glosses = lesson.reading.paragraphs.flatMap(p => p.gloss || []);
  const selected = [];
  for (const group of lesson.vocabulary || []) for (const item of group.items || []) {
    const legacy = firstLesson[item.greek];
    const recordedLemma = item.lemma || legacy?.[0] || firstPart(item.dictionaryForm || item.principalParts?.[0] || item.greek);
    const rawCitation = item.dictionaryForm || legacy?.[1] || item.principalParts?.[0] || recordedLemma;
    const dictionaryForm = standardCitations[rawCitation] || rawCitation;
    const key = lexicalKey(recordedLemma);
    if (!key) throw Error(`Missing lemma: ${number}: ${item.greek}`);
    const override = manual[number]?.[key];
    const lemma = /^(?:ὁ|ἡ|τὸ|τό|οἱ|αἱ|τὰ|τά)\s+/.test(recordedLemma) || recordedLemma.includes('+')
      ? firstPart(dictionaryForm) : recordedLemma;
    const resolvedLemma = override?.lemma || lemma;
    const resolvedDictionaryForm = override?.dictionaryForm || dictionaryForm;
    const resolvedKey = lexicalKey(resolvedLemma);
    if (seen.has(resolvedKey)) {
      audit.push({ lesson: number, lemma: resolvedLemma, old: item.greek, issue: 'repeat', firstLesson: seen.get(resolvedKey) });
      continue;
    }
    if (override === null) {
      audit.push({ lesson: number, lemma, old: item.greek, issue: 'absent' });
      continue;
    }
    const surface = firstPart(item.greek);
    const roots = stems(lemma, dictionaryForm);
    const exact = tokens.filter(token => normalize(token) === normalize(surface) || normalize(token) === normalize(lemma));
    const candidates = exact.length ? exact : tokens.filter(token => roots.some(root => normalize(token).startsWith(root)));
    const glossCandidates = candidates.filter(token => glosses.some(gloss => words(gloss.greek).some(g => normalize(g) === normalize(token))));
    const proposedForm = override?.form || glossCandidates[0] || candidates[0] || '';
    const form = tokens.find(token => token.normalize('NFC') === proposedForm.normalize('NFC'))
      || tokens.find(token => normalize(token) === normalize(proposedForm)) || '';
    if (!form) {
      audit.push({ lesson: number, lemma, old: item.greek, issue: 'unmatched', candidates: [...new Set(candidates)].slice(0, 5) });
      continue;
    }
    seen.set(resolvedKey, number);
    const gloss = glosses.find(entry => words(entry.greek).some(token => token.normalize('NFC') === form.normalize('NFC')));
    const english = override?.english || (number === 1 ? item.english : contextualMeaning(item, resolvedLemma, form, gloss));
    const entry = { ...item, greek: form, displayForm: form, lemma: resolvedLemma, dictionaryForm: resolvedDictionaryForm, english, status: 'required vocabulary' };
    selected.push({ category: partOfSpeech(resolvedLemma, resolvedDictionaryForm), entry });
    audit.push({ lesson: number, lemma, old: item.greek, form, english, issue: override ? 'manual' : exact.length ? 'exact' : glossCandidates.length ? 'gloss' : 'stem', gloss: gloss?.english || '' });
  }
  const groups = [];
  for (const { category, entry } of selected) {
    let group = groups.find(g => g.category === category);
    if (!group) groups.push(group = { category, items: [] });
    group.items.push(entry);
  }
  result[number] = groups.sort((a, b) =>
    partOfSpeechOrder.indexOf(a.category) - partOfSpeechOrder.indexOf(b.category));
}

fs.writeFileSync('content/vocabulary/reconciled.json', JSON.stringify(result, null, 2) + '\n');
fs.writeFileSync('scripts/vocabulary-reconciliation-audit.json', JSON.stringify(audit, null, 2) + '\n');
const unresolved = audit.filter(row => row.issue === 'unmatched');
if (unresolved.length) throw Error(`${unresolved.length} vocabulary entries have no attested reading form.`);
const browserData = JSON.stringify(result);
fs.writeFileSync('vocabulary-data.js', `(function () {\n  const vocabulary = ${browserData};\n  function apply(lesson) {\n    if (lesson?.number && vocabulary[lesson.number]) lesson.vocabulary = vocabulary[lesson.number];\n    return lesson;\n  }\n  Object.values(window.xenophonLessonData?.lessons || {}).forEach(apply);\n  window.xenophonVocabulary = { apply, vocabulary };\n}());\n`);
fs.writeFileSync('content/vocabulary/reconciled.mjs', `export const vocabularyByLesson = ${browserData};\n`);
const counts = Object.groupBy(audit, x => x.issue);
console.log(Object.fromEntries(Object.entries(counts).map(([key, rows]) => [key, rows.length])));
for (const row of audit.filter(x => x.issue === 'unmatched')) console.log(`Unmatched ${row.lesson}: ${row.old} (${row.lemma})`);
