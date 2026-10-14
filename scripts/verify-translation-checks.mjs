import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { gradeTranslation, checkGreekOrthography } from '../netlify/functions/_shared/translation-rubric.mts';
import { scoreAssessment } from '../netlify/functions/_shared/assessment-scoring.mts';

const bank = JSON.parse(fs.readFileSync('content/lesson-1-translations.json','utf8'));
const q = bank.activities['lesson-quiz'].find(q => q.direction === 'english-greek' && q.greek.includes('ἄγει'));
const evaluate = (answer, corrected = q.greek, meaningCorrect = true) => gradeTranslation(q, answer, { meaningCorrect, correctedGreek: corrected, feedback: 'Check the subject and object.' });
assert.equal(evaluate(q.greek).passed,true);
assert.equal(evaluate(q.greek,'').passed,true,'Exact reference letters recover omitted unchanged Greek');
assert.equal(evaluate(q.greek,'ὁ παῖς μένει.',false).passed,true,'Known correct letters cannot be rejected by an AI accent or spelling repair');
const houseQuestion = bank.activities['topic-practice'].find(q => q.id === 'lesson-1-tr-practice-nouns-cases-agreement-7');
const misspelled = gradeTranslation(houseQuestion,'ὁ Ξενωφων βλἑπει τον οἴκον.',{meaningCorrect:true,feedback:'Correct.',correctedGreek:houseQuestion.greek});
assert.equal(misspelled.passed,false);
assert.ok(misspelled.spellingCorrections.some(c => c.includes('Ξενωφων')),'A changed letter produces revision feedback, not a service error');
assert.ok(misspelled.breathingErrors.some(c => c.includes('βλἑπει')),'Misplaced breathing is still checked alongside spelling');
const marksOnly = gradeTranslation(houseQuestion,'ὁ Ξενοφων βλέπει τον οἴκον.',{meaningCorrect:true,feedback:'',correctedGreek:houseQuestion.greek});
assert.equal(marksOnly.passed,true);
assert.ok(marksOnly.accentCorrections.length);
const noAccents = q.greek.normalize('NFD').replace(/[\u0300\u0301\u0342]/g,'').normalize('NFC');
const accentResult = evaluate(noAccents);
assert.equal(evaluate(noAccents,'').passed,true,'Reference fallback still forgives accents');
assert.equal(accentResult.passed,true);assert.ok(accentResult.accentCorrections.length);
assert.equal(evaluate(q.greek.normalize('NFD').replace(/[\u0313\u0314]/g,'').normalize('NFC')).passed,false);
assert.equal(evaluate(q.greek.normalize('NFD').replace(/\u0314/g,'\u0313').normalize('NFC')).passed,false);
assert.equal(evaluate('ὁ Γρύλλος τὸν ἵππον ἄγει.','ὁ Γρύλλος τὸν ἵππον ἄγει.').passed,true);
assert.equal(evaluate('τὸν Γρύλλος ὁ ἵππον ἄγει.','τὸν Γρύλλος ὁ ἵππον ἄγει.',false).passed,false,'Rearranged words still need grammatical validation');
assert.equal(evaluate('ὁ Γρύλλος φέρει τὸν ἵππον.','ὁ Γρύλλος φέρει τὸν ἵππον.',false).passed,false);
assert.equal(evaluate('The man leads the horse.','',true).passed,false);
assert.equal(evaluate(q.greek.normalize('NFD')).passed,true);
assert.throws(() => checkGreekOrthography(q.greek,'ὁ παῖς μένει.',q.greek),/could not verify/);
assert.equal(gradeTranslation({ ...q, direction: 'greek-english' },'Gryllus is leading the horse.',{ meaningCorrect:true,feedback:'',correctedGreek:'' }).passed,true);
const context = { window: {} };vm.createContext(context);
vm.runInContext(fs.readFileSync('lesson-data.js','utf8'),context);
vm.runInContext(fs.readFileSync('translation-exercises.js','utf8'),context);
const lesson = context.window.xenophonLessonData.getLesson('lesson-1');
for (const topic of new Set(bank.activities['topic-practice'].map(q => q.topic))) {
  const questions = lesson.activities['topic-practice'].questions.filter(q => q.topic === topic);
  assert.equal(questions.filter(q => q.direction === 'greek-english').length,5);
  assert.equal(questions.filter(q => q.direction === 'english-greek').length,5);
  const rounds = context.window.xenophonTranslationExercises.rounds(questions, items => [...items]);
  for(let i=0;i<rounds.length;i+=10) {
    assert.equal(rounds.slice(i,i+10).filter(q => q.direction === 'greek-english').length,2);
    assert.equal(rounds.slice(i,i+10).filter(q => q.direction === 'english-greek').length,2);
  }
}
for (const activity of Object.values(lesson.activities)) for(const question of activity.questions || []) {
  if(question.type === 'translation') { assert.equal(question.greek,undefined);assert.equal(question.english,undefined); }
}
const exam = { threshold:80, questions:[{id:'mc',choices:[{text:'correct',correct:true}]},q] };
const answers = [{questionId:'mc',choiceText:'correct'},{questionId:q.id,text:q.greek}];
assert.throws(()=>scoreAssessment(exam,answers),/Answer every/,'Unverified client grades rejected');
assert.equal(scoreAssessment(exam,answers,[{questionId:q.id,text:q.greek,passed:true}]).score,100);
assert.equal(scoreAssessment(exam,answers,[{questionId:q.id,text:q.greek,passed:false}]).passed,false);
assert.throws(()=>scoreAssessment(exam,answers,[{questionId:q.id,text:'changed answer',passed:true}]),/Answer every/);
console.log('Translation rules, Unicode, alternative word order, question counts, round balance, and verified mixed scoring passed.');
