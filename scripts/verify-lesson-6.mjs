import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const lesson = JSON.parse(read('content/lessons/lesson-6.json'));
const migration = read('db/migrations/0024_publish_lesson_6.sql');
const fallback = read('lesson-data.js');

assert.equal(lesson.contentRevision, 'lesson-6-gymnasium-complete-v1');
assert.deepEqual(lesson.pages.map(page => page.slug), [
  'lesson-6-page-1', 'lesson-6-page-2', 'lesson-6-page-3'
]);
assert.equal(lesson.reading.paragraphs.length, 7);
assert(lesson.reading.paragraphs.every(paragraph => paragraph.greek && paragraph.gloss?.length));
assert.equal(lesson.vocabulary.flatMap(group => group.items).length, 14);
assert.equal(lesson.grammar.sections.length, 5);
assert(lesson.grammar.sections.every(section => section.body?.length && section.table?.rows?.length && section.practiceTopic));
assert.equal(lesson.culture.questions.length, 4);
assert(fs.existsSync(path.join(root, lesson.banner.image)));
assert(fs.existsSync(path.join(root, lesson.culture.banner.image)));
assert.match(lesson.culture.banner.credit, /CC BY-SA 4\.0/);
assert.match(lesson.culture.body.at(-1), /does not say this exchange happened in a gymnasium/);

const activities = lesson.activities;
assert.equal(activities['topic-practice'].questions.length, 120);
assert.equal(activities['vocab-practice'].questions.length, 28);
assert.equal(activities['grammar-exercises'].questions.length, 24);
assert.equal(activities['lesson-quiz'].questions.length, 30);
for (const key of ['grammar-exercises', 'lesson-quiz']) {
  assert.equal(activities[key].threshold, 80);
  assert.equal(activities[key].required, true);
  assert.equal(activities[key].requireAllAnswers, true);
  assert(activities[key].revision);
}

const allQuestions = [
  ...activities['topic-practice'].questions,
  ...activities['vocab-practice'].questions,
  ...activities['grammar-exercises'].questions,
  ...activities['lesson-quiz'].questions
];
assert.equal(new Set(allQuestions.map(question => question.id)).size, allQuestions.length);
for (const question of allQuestions) {
  assert(question.prompt);
  assert.equal(question.choices.length, 4, question.id);
  assert.equal(new Set(question.choices.map(choice => choice.text)).size, 4, question.id);
  assert.equal(question.choices.filter(choice => choice.correct).length, 1, question.id);
  assert(question.choices.every(choice => choice.feedback), question.id);
}
const topicCounts = Object.groupBy(activities['topic-practice'].questions, question => question.topic);
assert.deepEqual(Object.values(topicCounts).map(questions => questions.length), [20, 20, 20, 20, 20, 20]);
const requiredGrammarPrompts = activities['grammar-exercises'].questions.map(question => question.prompt).join('\n');
for (const caseName of ['nominative', 'accusative', 'genitive', 'dative']) {
  assert(requiredGrammarPrompts.includes(caseName), `${caseName} missing from required exercises`);
}
const finalCategories = Object.groupBy(activities['lesson-quiz'].questions, question => question.category);
assert.deepEqual(Object.fromEntries(Object.entries(finalCategories).map(([key, questions]) => [key, questions.length])), {
  Reading: 6, Vocabulary: 6, Grammar: 12, 'Greek World': 6
});
const grammarTopics = activities['lesson-quiz'].questions.filter(question => question.category === 'Grammar').map(question => {
  const source = activities['topic-practice'].questions.find(candidate => question.prompt.includes(candidate.prompt));
  return source?.topic;
});
assert(activities['lesson-quiz'].questions.some(question => question.category === 'Grammar' && question.choices.some(choice => choice.correct && choice.text === 'τῶν ἀνθρώπων')));
assert.deepEqual(Object.fromEntries(Object.entries(Object.groupBy(grammarTopics, topic => topic)).map(([topic, items]) => [topic, items.length])), {
  'word-study': 2, 'plural-articles': 2, 'second-declension': 2,
  'first-and-neuter': 2, 'adjective-agreement': 2, 'shifting-accents': 2
});
const answerPositions = Object.groupBy(activities['lesson-quiz'].questions, question => question.choices.findIndex(choice => choice.correct));
assert(Object.values(answerPositions).every(items => items.length >= 6));

const publishedPatchMatch = migration.match(/patch jsonb := \$json\$([\s\S]*?)\$json\$::jsonb;/);
assert(publishedPatchMatch, 'Original published migration payload missing');
const publishedPatch = JSON.parse(publishedPatchMatch[1]);
assert.equal(publishedPatch.contentRevision, lesson.contentRevision);
assert.match(migration, /Preserve subsequent administrator edits/);
publishedPatch.reading.paragraphs[2].greek = lesson.reading.paragraphs[2].greek;
publishedPatch.reading.translation = lesson.reading.translation;
publishedPatch.nextLesson.title = lesson.nextLesson.title;
assert.deepEqual(publishedPatch, lesson, 'Local source differs from the published migration beyond the administrator reading edit');
assert.match(lesson.reading.paragraphs[2].greek, /ὁ Κλεινίας καὶ ὁ Ξενοφῶν παρὰ τῷ Σωκράτει ἵστανται καὶ ἀκούουσιν/);
assert.match(lesson.reading.translation.split('\n\n')[2], /Clinias and Xenophon stand beside Socrates and listen/);
assert(fallback.includes(`LESSONS["lesson-6"] = ${JSON.stringify(lesson, null, 2)};`));
console.log('Lesson 6 payload, assessments, source credit, fallback, and migration verified.');
