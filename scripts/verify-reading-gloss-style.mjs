import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expectedGlossBlue = "#1d4ed8";

function loadLessonData(source) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: "lesson-data.js" });
  return context.window.xenophonLessonData;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return [
    Number.parseInt(normalized.slice(0, 2), 16) / 255,
    Number.parseInt(normalized.slice(2, 4), 16) / 255,
    Number.parseInt(normalized.slice(4, 6), 16) / 255,
  ];
}

function channelToLinear(channel) {
  return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(channelToLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(foreground, background) {
  const light = Math.max(relativeLuminance(foreground), relativeLuminance(background));
  const dark = Math.min(relativeLuminance(foreground), relativeLuminance(background));
  return (light + 0.05) / (dark + 0.05);
}

const [stylesCss, lessonJs, lessonDataJs] = await Promise.all([
  readFile(path.join(rootDir, "styles.css"), "utf8"),
  readFile(path.join(rootDir, "lesson.js"), "utf8"),
  readFile(path.join(rootDir, "lesson-data.js"), "utf8"),
]);

assert.match(stylesCss, /--reading-gloss-color:\s*#1d4ed8;/, "Reading gloss blue should be a shared CSS variable");
assert.match(stylesCss, /\.reading-gloss\s*\{[^}]*color:\s*var\(--reading-gloss-color\)/s, "Reading gloss wrapper should use the shared gloss color");
assert.match(stylesCss, /\.reading-gloss::before,\s*\.reading-gloss::after\s*\{[^}]*color:\s*var\(--reading-gloss-color\)/s, "Reading gloss punctuation should stay blue");
assert.match(stylesCss, /\.reading-gloss dt\s*\{[^}]*color:\s*var\(--reading-gloss-color\)/s, "Reading gloss Greek terms should stay blue");
assert.match(stylesCss, /\.reading-gloss dd\s*\{[^}]*color:\s*var\(--reading-gloss-color\)/s, "Reading gloss English explanations should stay blue");
assert.doesNotMatch(stylesCss, /\.vocab-entry__gloss\s*\{[^}]*var\(--reading-gloss-color\)/s, "Vocabulary definitions should not use the reading gloss color");
assert.doesNotMatch(stylesCss, /\.forms-headword__gloss[^{]*\{[^}]*var\(--reading-gloss-color\)/s, "Forms-reference glosses should not use the reading gloss color");

assert.match(lessonJs, /function renderGlossList/, "Lesson renderer should use a shared reading gloss renderer");
assert.match(lessonJs, /<dl class="reading-gloss"/, "Reading gloss lists should render with the shared reading-gloss class");

const lessonData = loadLessonData(lessonDataJs);
const lessonsWithGlosses = Object.values(lessonData.lessons).filter((lesson) =>
  lesson?.reading?.paragraphs?.some((paragraph) => paragraph.gloss?.length)
);

assert.ok(lessonsWithGlosses.length >= 3, "Implemented lessons with reading glosses should be covered by the shared renderer");
["lesson-1", "lesson-2", "lesson-3"].forEach((lessonId) => {
  assert.ok(
    lessonsWithGlosses.some((lesson) => lesson.id === lessonId),
    `${lessonId} should contain reading glosses covered by the shared style`
  );
});

const paperContrast = contrastRatio(expectedGlossBlue, "#fbfaf7");
const creamContrast = contrastRatio(expectedGlossBlue, "#f5f1ea");
assert.ok(paperContrast >= 4.5, `Reading gloss blue should meet WCAG AA contrast on paper (${paperContrast.toFixed(2)}:1)`);
assert.ok(creamContrast >= 4.5, `Reading gloss blue should meet WCAG AA contrast on cream (${creamContrast.toFixed(2)}:1)`);

console.log(`Verified shared reading gloss styling across ${lessonsWithGlosses.length} lessons; contrast is ${paperContrast.toFixed(2)}:1 on paper and ${creamContrast.toFixed(2)}:1 on cream.`);
