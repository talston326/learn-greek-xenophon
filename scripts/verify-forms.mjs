import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const forms = require("../forms-data.js");
const renderer = require("../forms.js");
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function assertNfc(value, label) {
  assert.equal(value, value.normalize("NFC"), `${label} should be NFC-normalized`);
}

function flattenGreekValues(value, label = "forms") {
  if (typeof value === "string") {
    if (/[\u0370-\u03FF\u1F00-\u1FFF]/.test(value)) {
      assertNfc(value, label);
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => flattenGreekValues(item, `${label}[${index}]`));
    return;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => flattenGreekValues(item, `${label}.${key}`));
  }
}

const navigationItems = forms.getNavigationItems();
const paradigms = forms.getParadigms();
const navLabels = navigationItems.map((item) => item.label);

assert.equal(navLabels[0], "All Forms");
[
  "The Definite Article",
  "Nouns of the First Declension",
  "Nouns of the Second Declension",
  "Nouns of the Third Declension",
  "Adjectives",
  "Pronouns",
  "Participles",
  "Verbs in -ω",
  "The Verb εἰμί",
].forEach((label) => assert.ok(navLabels.includes(label), `${label} should be in Forms navigation`));

const scriptJs = await readFile(path.join(rootDir, "script.js"), "utf8");
assert.match(scriptJs, /heading: "FORMS"/, "FORMS group should be configured in the sidebar nav");
assert.match(scriptJs, /aria-current", "page"/, "active exact links should receive aria-current=\"page\"");
assert.match(scriptJs, /nav-child-link/, "Forms child links should use the child-link sidebar class");

const resourcesHtml = await readFile(path.join(rootDir, "resources.html"), "utf8");
assert.match(resourcesHtml, /<h2>Forms<\/h2>/, "Resources page should link to Forms");

for (const item of navigationItems) {
  assert.match(item.href, /^forms(-[a-z]+)*\.html$/, `${item.label} should use the current root-level HTML route convention`);
  const pageHtml = await readFile(path.join(rootDir, item.href), "utf8");
  assert.match(pageHtml, /<script src="forms-data\.js"><\/script>/, `${item.href} should load shared forms data`);
  assert.match(pageHtml, /<script src="forms\.js"><\/script>/, `${item.href} should load the reusable forms renderer`);
}

const landingHtml = renderer.renderLandingHtml();
assert.match(landingHtml, />Forms<\/h2>/, "Landing page should render the Forms title");
assert.match(
  landingHtml,
  /Reference tables for common Ancient Greek noun, adjective, pronoun, participle, and verb forms\./,
  "Landing page should render the required intro text"
);
paradigms.forEach((paradigm) => {
  assert.match(landingHtml, new RegExp(paradigm.page.replaceAll(".", "\\.")), `${paradigm.title} should appear on landing page`);
});

const article = forms.getParadigm("definite-article");
const [articleSingular, articlePlural] = article.sections.flatMap((section) => section.tables);
assert.deepEqual(articleSingular.rows.map((row) => [row.label, ...row.cells]), [
  ["Nominative", "ὁ", "ἡ", "τό"],
  ["Genitive", "τοῦ", "τῆς", "τοῦ"],
  ["Dative", "τῷ", "τῇ", "τῷ"],
  ["Accusative", "τόν", "τήν", "τό"],
]);
assert.deepEqual(articlePlural.rows.map((row) => [row.label, ...row.cells]), [
  ["Nominative", "οἱ", "αἱ", "τά"],
  ["Genitive", "τῶν", "τῶν", "τῶν"],
  ["Dative", "τοῖς", "ταῖς", "τοῖς"],
  ["Accusative", "τούς", "τάς", "τά"],
]);
assert.ok(article.notes.includes("The definite article has no vocative forms."));

const firstDeclensionHtml = renderer.renderParadigmHtml("first-declension-nouns");
["ἡ τιμή", "ἡ χώρα", "ἡ θάλαττα", "ὁ πολίτης", "ὁ νεανίας"].forEach((model) => {
  assert.match(firstDeclensionHtml, new RegExp(model), `${model} should render on the first-declension page`);
});

for (const paradigm of paradigms) {
  flattenGreekValues(paradigm, paradigm.id);
  const html = renderer.renderParadigmHtml(paradigm.id);
  assert.match(html, /<caption>/, `${paradigm.id} should render table captions`);
  assert.match(html, /<thead>/, `${paradigm.id} should render table headers`);
  assert.match(html, /<tbody>/, `${paradigm.id} should render table bodies`);
  assert.match(html, /<th scope="col">/, `${paradigm.id} should render column headers`);
  assert.match(html, /<th scope="row">/, `${paradigm.id} should render row headers`);
  assert.match(html, /lang="grc"/, `${paradigm.id} should mark Greek text with lang="grc"`);
}

const styles = await readFile(path.join(rootDir, "styles.css"), "utf8");
assert.match(styles, /\.forms-table-region[\s\S]*overflow-x: auto;/, "Forms tables should scroll inside their own region");
assert.match(styles, /body\.dashboard-active\.forms-page \.main/, "Forms pages should be included in mobile dashboard layout rules");

console.log(`Verified ${paradigms.length} morphology form paradigms and ${navigationItems.length} Forms navigation links.`);
