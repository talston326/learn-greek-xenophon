import assert from "node:assert/strict";
import "dotenv/config";
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
  "γράφω"
);

assert.equal(
  buildCitation({
    lemma: "λύω",
    display_form: "λύει",
    part_of_speech: "Verbs",
  }),
  "λύω"
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
  row("gloss", {
    greek: "χαίρει",
    lemma: "χαίρει",
    english: "rejoices, is glad",
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
    principal_parts: ["βαδίζω", "βαδιῶ"],
  }),
  row("gloss", {
    lemma: "ἰσχυρός",
    display_form: "ἰσχυρός",
    english: "strong",
  }),
  row("vocabulary", {
    lemma: "Vocabulary will be added later.",
    display_form: "Vocabulary will be added later.",
    part_of_speech: "Placeholder",
    gloss: "Course vocabulary placeholder",
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
assert.equal(entries.some((entry) => entry.lemma === "ἀλλά"), false);
assert.equal(entries.some((entry) => entry.lemma === "χαίρει"), false);
assert.equal(entries.some((entry) => entry.lemma === "Vocabulary will be added later."), false);
assert.equal(entries.find((entry) => entry.lemma === "βαδίζω")?.citation, "βαδίζω");
assert.deepEqual(entries.find((entry) => entry.lemma === "βαδίζω")?.meanings, ["walk", "go"]);
assert.equal(entries.find((entry) => entry.lemma === "βαδίζω")?.forms.includes("βαδιῶ"), true);
assert.equal(entries.filter((entry) => entry.lemma === "ἰσχυρός").length, 1);
assert.equal(entries.find((entry) => entry.lemma === "ἰσχυρός")?.citation, "ἰσχυρός, -ά, -όν");

async function verifyLiveDictionary() {
  if (!process.env.NETLIFY_DATABASE_URL && !process.env.DATABASE_URL) {
    return {
      skipped: true,
      reason: "No database connection string is configured.",
    };
  }

  const mod = await import("../netlify/functions/dictionary.mts");
  const response = await mod.default(new Request("http://localhost/api/dictionary"));
  assert.equal(response.status, 200);

  const data = await response.json();
  const liveEntries = Array.isArray(data.entries) ? data.entries : [];
  const headwords = liveEntries.flatMap((entry) => [entry.lemma, entry.citation]);
  const allFields = liveEntries.flatMap((entry) => [
    entry.lemma,
    entry.citation,
    entry.definition,
    ...(entry.forms || []),
  ]);
  const excluded = [
    "ἄγε",
    "ἐλθέ",
    "αὐτοῦ",
    "ἐλαῖαι",
    "πολλοὶ",
    "ὑλακτεῖ",
    "χαίρει",
    "τὸ δεῖπνον πάρεστιν",
    "καλῶς ποιεῖς",
  ];

  excluded.forEach((value) => {
    assert.equal(
      headwords.some((entry) => entry === value),
      false,
      `${value} should not appear as a global dictionary headword`
    );
  });

  assert.equal(
    allFields.some((entry) => entry === "Vocabulary will be added later."),
    false,
    "Vocabulary will be added later. should not appear in the global dictionary"
  );

  const exactCitation = new Set(liveEntries.map((entry) => entry.citation));
  [
    "εἰμί",
    "ἄγω",
    "βλέπω",
    "ἀγαθός, -ή, -όν",
    "ἀγρός, ἀγροῦ, ὁ",
    "Ξενοφῶν, Ξενοφῶντος, ὁ",
    "σοφία, σοφίας, ἡ",
  ].forEach((value) => {
    assert.equal(exactCitation.has(value), true, `${value} should appear in the global dictionary`);
  });

  assert.equal(
    liveEntries.some((entry) => /wisdon/i.test(`${entry.definition} ${entry.citation}`)),
    false,
    "The misspelling wisdon should not appear in the global dictionary"
  );

  return {
    skipped: false,
    entries: liveEntries.length,
    source: data.source,
  };
}

const live = await verifyLiveDictionary();
console.log(`Dictionary citation verification passed.${live.skipped ? ` Live check skipped: ${live.reason}` : ` Live entries: ${live.entries}.`}`);
