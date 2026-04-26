import "dotenv/config";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { neon } from "@netlify/neon";

const [, , sqlFileArg] = process.argv;

if (!sqlFileArg) {
  console.error("Usage: node db/run-sql.mjs <path-to-sql-file>");
  process.exit(1);
}

const connectionString = process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;

if (!connectionString) {
  console.error("Missing NETLIFY_DATABASE_URL or DATABASE_URL. Add one to .env or export it before running this script.");
  process.exit(1);
}

const sqlFile = resolve(process.cwd(), sqlFileArg);
const sqlText = await readFile(sqlFile, "utf8");
const sql = neon(connectionString);

console.log(`Applying ${sqlFileArg}...`);
const result = await sql.query(sqlText);
if (Array.isArray(result) && result.length > 0) {
  console.table(result);
}
console.log("Done.");
