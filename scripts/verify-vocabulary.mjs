import fs from 'node:fs';
import vm from 'node:vm';
import { vocabularyByLesson } from '../content/vocabulary/reconciled.mjs';

const context = { window: {} };
vm.runInNewContext(fs.readFileSync('lesson-data.js', 'utf8'), context);
vm.runInNewContext(fs.readFileSync('vocabulary-data.js', 'utf8'), context);
const course = context.window.xenophonLessonData;
const clean = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ς/g, 'σ').replace(/[^\u0370-\u03ff]/g, '');
const words = value => [...String(value || '').matchAll(/[\p{Script=Greek}\p{M}]+/gu)].map(match => match[0]);
const categories = ['Verbs', 'Nouns', 'Adjectives', 'Pronouns', 'Numerals',
  'Adverbs', 'Prepositions', 'Conjunctions', 'Particles'];
const seen = new Map();
let total = 0;
for (let number = 1; number <= 48; number++) {
  const lesson = course.getLesson(number);
  const entries = lesson.vocabulary.flatMap(group => group.items);
  const matchingServerEntries = vocabularyByLesson[number].flatMap(group => group.items);
  const lessonCategories = lesson.vocabulary.map(group => group.category);
  if (lessonCategories.some(category => !categories.includes(category))
    || lessonCategories.some((category, index) => index > 0
      && categories.indexOf(category) <= categories.indexOf(lessonCategories[index - 1]))) {
    throw Error(`Lesson ${number}: vocabulary categories are missing or out of order`);
  }
  if (JSON.stringify(lessonCategories) !== JSON.stringify(vocabularyByLesson[number].map(group => group.category))) {
    throw Error(`Lesson ${number}: browser and server vocabulary categories differ`);
  }
  if (entries.length !== matchingServerEntries.length) throw Error(`Lesson ${number}: browser and server vocabulary differ`);
  const reading = lesson.reading.paragraphs.flatMap(paragraph => words(paragraph.greek));
  const cards = course.getVocabularyCards(lesson);
  if (cards.length !== entries.length) throw Error(`Lesson ${number}: flashcard count differs`);
  entries.forEach((entry, index) => {
    const key = /^(τίς|τις)$/.test(entry.lemma) ? entry.lemma : clean(entry.lemma);
    if (seen.has(key)) throw Error(`Repeated lemma ${entry.lemma}: Lessons ${seen.get(key)} and ${number}`);
    seen.set(key, number);
    if (!reading.some(word => word.normalize('NFC') === entry.greek.normalize('NFC'))) {
      throw Error(`Lesson ${number}: ${entry.greek} is not an exact reading form`);
    }
    if (!entry.dictionaryForm || !entry.dictionaryForm.includes(entry.lemma.split(',')[0])) {
      throw Error(`Lesson ${number}: missing standard citation for ${entry.lemma}`);
    }
    const card = cards[index];
    if (card.greek !== entry.greek || card.english !== entry.english || card.dictionaryForm !== entry.dictionaryForm) {
      throw Error(`Lesson ${number}: flashcard does not match ${entry.lemma}`);
    }
    total++;
  });
}
const flashcardsIndex = { innerHTML: '' };
context.document = { querySelector: selector => selector === '[data-flashcards-index]' ? flashcardsIndex : null };
vm.runInNewContext(fs.readFileSync('flashcards-index.js', 'utf8'), context);
if ((flashcardsIndex.innerHTML.match(/<article class="lesson-section">/g) || []).length !== 48) {
  throw Error('The flashcard index does not list all 48 lessons');
}
console.log(`Verified ${total} unique vocabulary cards across 48 lessons; every form appears in its reading.`);
