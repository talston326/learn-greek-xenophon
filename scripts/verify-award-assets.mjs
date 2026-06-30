import { createRequire } from "node:module";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { getAchievementCatalog, resolveAchievementImagePath } = require("../achievement-catalog.js");
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const missingAssets = [];

for (const achievement of getAchievementCatalog()) {
  const relativePath = resolveAchievementImagePath(achievement);
  const absolutePath = path.join(rootDir, relativePath);

  try {
    await access(absolutePath);
  } catch (error) {
    missingAssets.push(`${achievement.label}: ${relativePath}`);
  }
}

if (missingAssets.length) {
  console.error("Missing achievement badge assets:");
  missingAssets.forEach((asset) => console.error(`- ${asset}`));
  process.exit(1);
}

console.log(`Verified ${getAchievementCatalog().length} achievement badge assets.`);
