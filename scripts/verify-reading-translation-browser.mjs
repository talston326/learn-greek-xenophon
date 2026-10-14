import "dotenv/config";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import pg from "pg";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.TRANSLATION_PLAYWRIGHT_MODULE || "playwright");
const url = process.env.TRANSLATION_URL || "http://localhost:8888/lesson.html?lesson=1&page=1";
const output = process.env.TRANSLATION_QA_OUTPUT || "/tmp/xenophon-translation-qa";
const emails = [0, 1, 2, 3].map((i) => `translation-browser-${randomUUID()}-${i}@example.invalid`);
const ids = [];
const client = new pg.Client({ connectionString: process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL });
await client.connect();
await mkdir(output, { recursive: true });
let browser;
try {
  for (const [i, email] of emails.entries()) {
    const users = await client.query("INSERT INTO public.users (email, name) VALUES ($1, $2) RETURNING id", [email, `Translation Browser QA ${i}`]);
    ids.push(users.rows[0].id);
    await client.query("INSERT INTO public.user_roles (user_id, role_id) VALUES ($1, $2)", [ids[i], i === 2 ? "professor" : i === 3 ? "administrator" : "student"]);
  }
  browser = await chromium.launch({ headless: true, ...(process.env.TRANSLATION_CHROME_PATH ? { executablePath: process.env.TRANSLATION_CHROME_PATH } : {}) });
  if (!process.argv.includes("--staff-only")) {
  for (const [name, width, height] of [["desktop", 1440, 1100], ["mobile", 390, 844]]) {
    const context = await browser.newContext({ viewport: { width, height } });
    await context.addInitScript((email) => localStorage.setItem("learn-greek-session", JSON.stringify({ email, name: "Translation QA", activeRole: "student", roles: ["student"], progress: { currentLessonId: "lesson-12" } })), emails[0]);
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(url);
    const panel = page.locator("[data-reading-translation]");
    await panel.waitFor();
    if (name === "desktop") assert.equal(await panel.getByRole("button", { name: "Compare", exact: true }).count(), 0);
    assert.equal(await page.locator(".translation-toggle").count(), 0, "Student's reference translation stays hidden before comparison.");
    await panel.getByRole("button", { name: name === "desktop" ? "Write Translation" : "Revise Translation" }).click();
    const field = panel.getByLabel("Your English translation", { exact: true });
    const text = `Xenophon is young.\n\n${name}: ἡ ἀρετή. <script>alert('test')</script>`;
    await field.fill("   ");
    await panel.getByRole("button", { name: "Submit Translation" }).click();
    assert.equal(await field.evaluate((el) => el.checkValidity()), false);
    await field.fill(text);
    await panel.getByRole("button", { name: "Submit Translation" }).click();
    await panel.getByRole("status").filter({ hasText: "Translation submitted and saved" }).waitFor();
    await panel.getByRole("button", { name: "Compare", exact: true }).click();
    await page.locator("#translation-comparison").waitFor({ state: "visible" });
    assert.equal(await panel.locator("[data-submitted-translation]").textContent(), text);
    assert.equal(await panel.locator("[data-submitted-translation] script").count(), 0, "Student text is rendered literally.");
    const reference = await panel.locator("#lesson-translation-heading + div").textContent();
    assert.ok(reference.startsWith("Xenophon is young."));
    const boxes = await panel.locator(".translation-comparison section").evaluateAll((els) => els.map((el) => ({ x: el.getBoundingClientRect().x, y: el.getBoundingClientRect().y })));
    if (name === "desktop") assert.equal(boxes[0].y, boxes[1].y, "Desktop comparison is side by side.");
    else assert.ok(boxes[1].y > boxes[0].y && boxes[1].x === boxes[0].x, "Mobile comparison is stacked.");
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await panel.screenshot({ path: `${output}/${name}-comparison.png` });
    await page.reload();
    await panel.getByRole("button", { name: "Compare", exact: true }).click();
    assert.equal(await panel.locator("[data-submitted-translation]").textContent(), text, "Submission survives reload.");
    await panel.getByRole("button", { name: "Revise Translation" }).click();
    await field.fill("Unsaved revision");
    assert.equal(await panel.locator("[data-submitted-translation]").textContent(), text, "Compare shows the submitted version.");
    await page.route("**/api/reading-translations", (route) => route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ error: "Test save failure." }) }));
    await panel.getByRole("button", { name: "Submit Translation" }).click();
    await panel.getByRole("status").filter({ hasText: "Your text is still here" }).waitFor();
    assert.equal(await field.inputValue(), "Unsaved revision");
    assert.equal(await field.isEnabled(), true);
    await page.unroute("**/api/reading-translations");
    await panel.getByRole("button", { name: "Submit Translation" }).click();
    await panel.getByRole("status").filter({ hasText: "Translation submitted and saved" }).waitFor();
    for (let number = 2; number <= 12; number++) {
      await page.goto(url.replace("lesson=1", `lesson=${number}`));
      await panel.getByRole("button", { name: name === "mobile" && number === 12 ? "Revise Translation" : "Write Translation" }).waitFor();
      assert.equal(await panel.getByRole("button", { name: "Compare", exact: true }).count(), name === "mobile" && number === 12 ? 1 : 0, "Each lesson has its own submission.");
    }
    await panel.getByRole("button", { name: name === "mobile" ? "Revise Translation" : "Write Translation" }).click();
    await field.fill(`${name}: Lesson 12 submitted translation`);
    await panel.getByRole("button", { name: "Submit Translation" }).click();
    await panel.getByRole("status").filter({ hasText: "Translation submitted and saved" }).waitFor();
    assert.deepEqual(errors, []);
    await context.close();
    console.log(`${name}: writing, submission, comparison, persistence, failure recovery, revision, layout, Lessons 1–12 passed.`);
  }
  const context = await browser.newContext();
  await context.addInitScript((email) => localStorage.setItem("learn-greek-session", JSON.stringify({ email, name: "Staff QA", activeRole: "administrator", roles: ["administrator"] })), emails[3]);
  const page = await context.newPage();
  await page.route("**/api/reading-translations?*", (route) => route.fulfill({ status: 503, contentType: "application/json", body: "{}" }));
  await page.goto(url);
  const panel = page.locator("[data-reading-translation]");
  await panel.getByRole("button", { name: "Retry", exact: true }).waitFor();
  assert.equal(await panel.getByRole("button", { name: "Write Translation" }).isEnabled(), false);
  await page.unroute("**/api/reading-translations?*");
  await panel.getByRole("button", { name: "Retry", exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('[data-translation-write]')?.disabled);
  assert.equal(await panel.getByRole("button", { name: "Write Translation" }).isEnabled(), true);
  assert.equal(await panel.getByRole("button", { name: "Compare", exact: true }).count(), 0, "Another account has no submission.");
  assert.equal(await page.locator(".translation-toggle").count(), 1, "Staff's existing translation access remains available.");
  await page.getByRole("link", { name: "View Student Translations", exact: true }).click();
  await page.locator("#review-student option").nth(1).waitFor({ state: "attached" });
  assert.equal(await page.locator("#review-lesson").inputValue(), "lesson-1", "Lesson shortcut preselects the lesson.");
  await page.goto(url.replace("lesson=1", "lesson=13"));
  await page.locator(".greek-reading").waitFor();
  assert.equal(await panel.count(), 0, "Unprepared placeholder has no activity.");
  await page.route("**/api/lesson-content?slug=lesson-13", (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify({ content: { reading: { title: "Future reading", paragraphs: [{ greek: "ὁ Ξενοφῶν βαδίζει." }], translation: "Xenophon walks." } } }) }));
  await page.reload();
  await panel.getByRole("button", { name: "Write Translation" }).waitFor();
  await panel.getByRole("button", { name: "Write Translation" }).click();
  await panel.getByLabel("Your English translation", { exact: true }).fill("A future lesson translation.");
  await panel.getByRole("button", { name: "Submit Translation" }).click();
  await panel.getByRole("status").filter({ hasText: "Translation submitted and saved" }).waitFor();
  await panel.getByRole("button", { name: "Compare", exact: true }).click();
  assert.equal(await panel.locator("#lesson-translation-heading + div").textContent(), "Xenophon walks.", "A newly prepared lesson activates automatically.");
  await context.close();
  console.log("Account isolation, load failure/retry, staff lesson shortcut, placeholder handling, and future lesson activation passed.");
  } else {
    await client.query("INSERT INTO public.user_reading_translations (user_id, lesson_slug, body) VALUES ($1, 'lesson-12', 'mobile: Lesson 12 submitted translation'), ($1, 'lesson-1', 'Saved Lesson 1 translation')", [ids[0]]);
  }

  const reviewUrl = new URL("reading-translations.html", url).href;
  for (const [role, index, width] of [["professor", 2, 1440], ["administrator", 3, 390]]) {
    const staffContext = await browser.newContext({ viewport: { width, height: 1100 } });
    await staffContext.addInitScript(({ email, role }) => localStorage.setItem("learn-greek-session", JSON.stringify({ email, name: "Staff QA", activeRole: role, roles: [role] })), { email: emails[index], role });
    const staffPage = await staffContext.newPage();
    const errors = [];
    staffPage.on("pageerror", (error) => errors.push(error.message));
    await staffPage.goto(reviewUrl);
    await staffPage.locator("#review-student option").nth(1).waitFor({ state: "attached" });
    assert.equal(await staffPage.locator("[data-review-retry]").isVisible(), false, "Retry is hidden after a successful load.");
    await staffPage.locator('.nav a[href="reading-translations.html"]').waitFor({ state: "attached" });
    assert.equal(await staffPage.locator('.nav a[href="reading-translations.html"]').count(), 1);
    await staffPage.locator("#review-student").selectOption(ids[0]);
    await staffPage.locator("#review-lesson").selectOption("lesson-12");
    await staffPage.getByRole("button", { name: "View Translation", exact: true }).click();
    await staffPage.locator("[data-review-reference]").filter({ hasText: "Xenophon comes back to Athens" }).waitFor();
    assert.equal(await staffPage.locator("[data-review-submission]").textContent(), "mobile: Lesson 12 submitted translation");
    assert.equal(await staffPage.locator("textarea").count(), 0, "Review is read-only.");
    assert.equal(await staffPage.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await staffPage.locator("[data-translation-review]").screenshot({ path: `${output}/${role}-review.png` });
    await staffPage.reload();
    await staffPage.locator("[data-review-submission]").waitFor();
    assert.equal(await staffPage.locator("#review-lesson").inputValue(), "lesson-12", "Deep link survives reload.");
    await staffPage.locator("#review-student").selectOption(ids[1]);
    assert.equal(await staffPage.locator("[data-review-submission]").count(), 0, "Changing selection clears old work.");
    await staffPage.getByRole("button", { name: "View Translation", exact: true }).click();
    await staffPage.getByRole("status").filter({ hasText: "has not submitted" }).waitFor();
    if (role === "professor") {
      await staffPage.goto(new URL("index.html", url).href);
      const shortcut = staffPage.getByRole("link", { name: "Translations", exact: true }).first();
      await shortcut.waitFor();
      await shortcut.click();
      await staffPage.locator("#review-student option").nth(1).waitFor({ state: "attached" });
      assert.ok(await staffPage.locator("#review-student").inputValue(), "Roster shortcut selects the student.");
    }
    assert.deepEqual(errors, []);
    await staffContext.close();
    console.log(`${role}: roster, lesson selection, saved student work, reference, empty state, read-only review, layout passed.`);
  }
  const denied = await browser.newContext();
  await denied.addInitScript((email) => localStorage.setItem("learn-greek-session", JSON.stringify({ email, name: "Student", activeRole: "student", roles: ["student"] })), emails[0]);
  const deniedPage = await denied.newPage();
  await deniedPage.goto(reviewUrl);
  await deniedPage.getByRole("status").filter({ hasText: "access is required" }).waitFor();
  assert.equal(await deniedPage.locator("[data-review-filters]").isVisible(), false);
  assert.equal(await deniedPage.getByRole("link", { name: "Reading Translations", exact: true }).count(), 0);
  await denied.close();
  console.log("Student access denial passed.");
  const previewContext = await browser.newContext();
  await previewContext.addInitScript((email) => localStorage.setItem("learn-greek-session", JSON.stringify({ email, name: "Student preview", activeRole: "student", roles: ["student"], professorPreview: true })), emails[0]);
  const previewPage = await previewContext.newPage();
  await previewPage.goto(url);
  await previewPage.locator("[data-reading-translation]").waitFor();
  assert.equal(await previewPage.getByRole("button", { name: "Revise Translation" }).isEnabled(), false, "Staff cannot edit student work in preview.");
  assert.equal(await previewPage.getByRole("button", { name: "Compare", exact: true }).isEnabled(), true);
  await previewContext.close();
  console.log("Professor student preview remains read-only.");
} finally {
  await browser?.close();
  await client.query("DELETE FROM public.users WHERE email = ANY($1::citext[])", [emails]);
  await client.end();
}
