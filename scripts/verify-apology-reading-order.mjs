import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { runInNewContext } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {} };
for (const file of ['apology-reader-data.js', 'apology-reading-order-data.js']) {
  runInNewContext(readFileSync(resolve(root, file), 'utf8'), context, { filename: file });
}

const passages = context.window.apologyContinuation;
const groupsBySection = context.window.apologyReadingGroups;
assert.equal(passages.length, 33, 'Expected continuation §§2–34');
assert.equal(Object.keys(groupsBySection).length, 33, 'Expected one reading plan per continuation section');

let tokenCount = 0;
let phraseCount = 0;
for (const passage of passages) {
  const { number, words } = passage;
  const groups = groupsBySection[number];
  assert.ok(groups?.length, `No study phrases in §${number}`);
  const order = [];
  for (const [spec, cue] of groups) {
    assert.ok(cue?.trim(), `Empty English phrase cue in §${number}`);
    const before = order.length;
    for (const piece of spec.trim().split(/\s+/)) {
      assert.match(piece, /^\d+(?:-\d+)?$/, `Invalid token span in §${number}`);
      const [first, last = first] = piece.split('-').map(Number);
      assert.ok(last >= first, `Reversed token span in §${number}`);
      for (let index = first; index <= last; index++) order.push(index);
    }
    assert.ok(order.length > before, `Empty Greek phrase in §${number}`);
    phraseCount++;
  }
  assert.equal(order.length, words.length, `Token count mismatch in §${number}`);
  assert.deepEqual([...order].sort((a, b) => a - b), Array.from(words, (_, i) => i + 1),
    `A Greek token is missing, repeated, or out of range in §${number}`);
  assert.ok(order.some((index, position) => index !== position + 1),
    `§${number} still has only the original word order`);
  tokenCount += words.length;
}
assert.equal(tokenCount, 1933, 'Unexpected continuation word count');
console.log(`Verified 33 reading plans, ${phraseCount} study phrases, and ${tokenCount} Greek tokens.`);
