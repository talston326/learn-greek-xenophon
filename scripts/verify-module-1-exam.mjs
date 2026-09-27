import assert from 'node:assert/strict';
import fs from 'node:fs';
import { scoreAssessment } from '../netlify/functions/_shared/assessment-scoring.mts';

const review = JSON.parse(fs.readFileSync('content/module-1-review.json', 'utf8'));
const exam = review.exam;
const answersFor = correctCount => exam.questions.map((question, index) => ({
  questionId: question.id,
  choiceText: question.choices.find(choice => choice.correct === (index < correctCount)).text
}));

const below = scoreAssessment(exam, answersFor(27));
assert.deepEqual([below.pointsEarned, below.score, below.passed], [27, 68, false]);
const passing = scoreAssessment(exam, answersFor(28).reverse());
assert.deepEqual([passing.pointsEarned, passing.score, passing.passed], [28, 70, true]);
assert.equal(scoreAssessment(exam, answersFor(40)).score, 100);
assert.throws(() => scoreAssessment(exam, answersFor(40).slice(1)), /Answer every question/);
assert.throws(() => scoreAssessment(exam, [answersFor(40)[0], ...answersFor(40).slice(0, -1)]), /Answer every question/);
assert.throws(() => scoreAssessment(exam, answersFor(40).map((answer, index) => index ? answer : { ...answer, choiceText: 'invented answer' })), /Answer every question/);

const lessonTwelve = JSON.parse(fs.readFileSync('content/lessons/lesson-12.json', 'utf8')).activities['lesson-quiz'];
const lessonAnswers = correctCount => lessonTwelve.questions.map((question, index) => ({
  questionId: question.id,
  choiceText: question.choices.find(choice => choice.correct === (index < correctCount)).text
}));
assert.deepEqual([scoreAssessment(lessonTwelve, lessonAnswers(23)).score, scoreAssessment(lessonTwelve, lessonAnswers(23)).passed], [77, false]);
assert.deepEqual([scoreAssessment(lessonTwelve, lessonAnswers(24)).score, scoreAssessment(lessonTwelve, lessonAnswers(24)).passed], [80, true]);

console.log('Module 1 exam scoring verified: 27/40 fails, 28/40 passes, all answers required.');
