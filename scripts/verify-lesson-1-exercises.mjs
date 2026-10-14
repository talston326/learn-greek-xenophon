import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const bank = JSON.parse(fs.readFileSync('content/lesson-1-exercises.json','utf8'));
const practice = bank.activities['topic-practice'];
assert.equal(practice.roundSize,10);
assert.equal(practice.questions.length,250);
assert.equal(new Set(practice.questions.map(q=>q.id)).size,250);
for (const topic of bank.topics) {
  const questions = practice.questions.filter(q=>q.topic===topic);
  assert.equal(questions.length,50,topic);
  assert.equal(new Set(questions.map(q=>q.prompt)).size,50,topic);
  for (let offset=0;offset<50;offset+=10) assert.equal(questions.slice(offset,offset+10).length,10);
  for (const q of questions) {
    assert.equal(q.choices.filter(c=>c.correct).length,1,q.id);
    assert.equal(new Set(q.choices.map(c=>c.text)).size,q.choices.length,q.id);
    assert.ok(q.choices.length>=2,q.id);
  }
}
const modes = bank.activities['grammar-exercises'].modes;
assert.deepEqual(modes.map(m=>m.type),['sentence-labeling','matching','fill-in-the-blank','translation-builder']);
for (const mode of modes) assert.ok(mode.items.length >= 8);
const builder = modes.find(m=>m.type==='translation-builder');
assert.equal(builder.items.filter(i=>i.direction==='greek-english').length,5);
assert.equal(builder.items.filter(i=>i.direction==='english-greek').length,5);
for (const item of builder.items) for (const slot of item.slots) assert.ok(item.choices.includes(slot.answer));
const context = vm.createContext({window:{}});
vm.runInContext(fs.readFileSync('grammar-exercises.js','utf8'),context);
const {checkAnswer} = context.window.xenophonGrammarExercises;
assert.equal(checkAnswer('ἡ',{answer:'ἡ'}).correct,true);
assert.equal(checkAnswer('η',{answer:'ἡ'}).correct,false,'missing rough breathing');
assert.equal(checkAnswer('ἠ',{answer:'ἡ'}).correct,false,'wrong breathing');
assert.equal(checkAnswer('ὑλακτει',{answer:'ὑλακτεῖ'}).correct,true,'accent forgiven');
assert.match(checkAnswer('ὑλακτει',{answer:'ὑλακτεῖ'}).feedback,/Accent correction/);
assert.equal(checkAnswer('υλακτεῖ',{answer:'ὑλακτεῖ'}).correct,false,'breathing required');
assert.equal(checkAnswer('θεραπεύει'.normalize('NFD'),{answer:'θεραπεύει'}).correct,true,'decomposed Unicode');
assert.equal(checkAnswer('καλεῖ',{answer:'θεραπεύει'}).correct,false,'incorrect verb fails');
assert.equal(checkAnswer('τὸν ἵππον',{answer:'ὁ ἵππος'}).correct,false,'incorrect case fails');
assert.equal(checkAnswer('καλόν',{answer:'καλὸν',accepted:['καλόν']}).feedback,'Correct.');
for(const mode of modes.filter(m=>m.type!=='sentence-labeling')) for(const item of mode.items) {
  for(const slot of item.slots || [item]) assert.equal(checkAnswer(slot.answer,slot).correct,true);
}
// Generated SQL touches only the two requested activities; no progress changes.
const sql = fs.readFileSync('db/migrations/0043_lesson_1_complete_exercises.sql','utf8');
assert.ok(sql.includes("c->'activities' IS DISTINCT FROM a"));
assert.ok(sql.includes("block_row.content->'value' IS DISTINCT FROM a"));
assert.ok(!sql.includes('DELETE FROM') && !sql.includes('UPDATE public.student'));
console.log('Passed: 250 distinct questions, five rounds per topic, all grammar modes, accents/breathings, and migration scope.');
