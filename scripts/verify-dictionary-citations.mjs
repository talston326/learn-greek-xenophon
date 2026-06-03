import assert from "node:assert/strict";
import { buildCitation, consolidateRows } from "../netlify/functions/_shared/dictionary-core.mjs";

function row(source, item, lesson = "Lesson 1") {
  return {
    id: `${source}:${item.lemma || item.greek || item.display_form}`,
    source,
    item,
    lessonRefs: [
      {
        slug: lesson.toLowerCase().replaceAll(" ", "-"),
        numberLabel: lesson,
        title: lesson,
        moduleSortOrder: 1,
        lessonSortOrder: 1,
      },
    ],
  };
}

assert.equal(
  buildCitation({
    lemma: "ἀνήρ",
    part_of_speech: "Nouns",
    genitive_form: "ἀνδρός",
    article: "ὁ",
  }),
  "ἀνήρ, ἀνδρός, ὁ"
);

assert.equal(
  buildCitation({
    lemma: "ἀγαθός",
    part_of_speech: "Adjectives",
    dictionary_form: "ἀγαθός, -ή, -όν",
  }),
  "ἀγαθός, -ή, -όν"
);

assert.equal(
  buildCitation({
    lemma: "ἀληθής",
    part_of_speech: "Adjectives",
    dictionary_form: "ἀληθής, -ές",
    neuter_form: "ἀληθές",
  }),
  "ἀληθής, -ές"
);

assert.equal(
  buildCitation({
    lemma: "ἄδικος",
    part_of_speech: "Adjectives",
    neuter_form: "ἄδικον",
  }),
  "ἄδικος, ἄδικον"
);

assert.equal(
  buildCitation({
    lemma: "μέγας",
    part_of_speech: "Adjectives",
    dictionary_form: "μέγας, μεγάλη, μέγα",
  }),
  "μέγας, μεγάλη, μέγα"
);

assert.equal(
  buildCitation({
    lemma: "πολύς",
    part_of_speech: "Adjectives",
    dictionary_form: "πολύς, πολλή, πολύ",
  }),
  "πολύς, πολλή, πολύ"
);

assert.equal(
  buildCitation({
    lemma: "γράφω",
    part_of_speech: "Verbs",
  }),
  "γράφω"
);

assert.equal(
  buildCitation({
    lemma: "γράφω",
    part_of_speech: "Verbs",
    principal_parts: ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφην"],
  }),
  "γράφω, γράψω, ἔγραψα, γέγραφα, γέγραμμαι, ἐγράφην"
);

const entries = consolidateRows([
  row("gloss", {
    greek: "τὸ δεῖπνον πάρεστιν",
    lemma: "τὸ δεῖπνον πάρεστιν",
    english: "the meal is ready",
  }),
  row("gloss", {
    greek: "ἀλλά / ἀλλ᾽",
    lemma: "ἀλλά / ἀλλ᾽",
    english: "but",
  }),
  row("vocabulary", {
    lemma: "βαδίζω",
    display_form: "βαδίζει",
    part_of_speech: "Verbs",
    gloss: "he/she/it walks",
    dictionary_form: "βαδίζω",
  }),
  row("vocabulary", {
    lemma: "βαδίζω",
    display_form: "βαδίζω",
    part_of_speech: "Verbs",
    gloss: "walk; go",
    dictionary_form: "βαδίζω",
  }),
  row("gloss", {
    lemma: "ἰσχυρός",
    display_form: "ἰσχυρός",
    english: "strong",
  }),
  row("vocabulary", {
    lemma: "ἰσχυρός",
    display_form: "ἰσχυρός",
    part_of_speech: "Adjectives",
    gloss: "strong, mighty",
    dictionary_form: "ἰσχυρός, -ά, -όν",
  }),
]);

assert.equal(entries.some((entry) => entry.lemma === "τὸ δεῖπνον πάρεστιν"), false);
assert.equal(entries.find((entry) => entry.lemma === "ἀλλά")?.citation, "ἀλλά");
assert.equal(entries.find((entry) => entry.lemma === "βαδίζω")?.citation, "βαδίζω");
assert.deepEqual(entries.find((entry) => entry.lemma === "βαδίζω")?.meanings, ["walk", "go"]);
assert.equal(entries.filter((entry) => entry.lemma === "ἰσχυρός").length, 1);
assert.equal(entries.find((entry) => entry.lemma === "ἰσχυρός")?.citation, "ἰσχυρός, -ά, -όν");

console.log("Dictionary citation verification passed.");
