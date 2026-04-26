import "dotenv/config";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import pg from "pg";

const { Client } = pg;

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
const client = new Client({ connectionString });

function splitSqlStatements(sqlText) {
  const statements = [];
  let statement = "";
  let singleQuoted = false;
  let doubleQuoted = false;
  let lineComment = false;
  let blockComment = false;
  let dollarQuoteTag = null;

  for (let index = 0; index < sqlText.length; index += 1) {
    const char = sqlText[index];
    const nextChar = sqlText[index + 1];

    statement += char;

    if (lineComment) {
      if (char === "\n") {
        lineComment = false;
      }
      continue;
    }

    if (blockComment) {
      if (char === "*" && nextChar === "/") {
        statement += nextChar;
        index += 1;
        blockComment = false;
      }
      continue;
    }

    if (dollarQuoteTag) {
      if (sqlText.startsWith(dollarQuoteTag, index)) {
        statement += sqlText.slice(index + 1, index + dollarQuoteTag.length);
        index += dollarQuoteTag.length - 1;
        dollarQuoteTag = null;
      }
      continue;
    }

    if (singleQuoted) {
      if (char === "'" && nextChar === "'") {
        statement += nextChar;
        index += 1;
      } else if (char === "'") {
        singleQuoted = false;
      }
      continue;
    }

    if (doubleQuoted) {
      if (char === "\"" && nextChar === "\"") {
        statement += nextChar;
        index += 1;
      } else if (char === "\"") {
        doubleQuoted = false;
      }
      continue;
    }

    if (char === "-" && nextChar === "-") {
      statement += nextChar;
      index += 1;
      lineComment = true;
      continue;
    }

    if (char === "/" && nextChar === "*") {
      statement += nextChar;
      index += 1;
      blockComment = true;
      continue;
    }

    if (char === "'") {
      singleQuoted = true;
      continue;
    }

    if (char === "\"") {
      doubleQuoted = true;
      continue;
    }

    if (char === "$") {
      const tagMatch = sqlText.slice(index).match(/^\$[A-Za-z_][A-Za-z0-9_]*\$|^\$\$/);
      if (tagMatch) {
        dollarQuoteTag = tagMatch[0];
        statement += sqlText.slice(index + 1, index + dollarQuoteTag.length);
        index += dollarQuoteTag.length - 1;
        continue;
      }
    }

    if (char === ";") {
      if (hasExecutableSql(statement)) {
        statements.push(statement.trim());
      }
      statement = "";
    }
  }

  if (hasExecutableSql(statement)) {
    statements.push(statement.trim());
  }

  return statements;
}

function hasExecutableSql(statement) {
  let singleQuoted = false;
  let doubleQuoted = false;
  let lineComment = false;
  let blockComment = false;
  let dollarQuoteTag = null;

  for (let index = 0; index < statement.length; index += 1) {
    const char = statement[index];
    const nextChar = statement[index + 1];

    if (lineComment) {
      if (char === "\n") {
        lineComment = false;
      }
      continue;
    }

    if (blockComment) {
      if (char === "*" && nextChar === "/") {
        index += 1;
        blockComment = false;
      }
      continue;
    }

    if (dollarQuoteTag) {
      if (statement.startsWith(dollarQuoteTag, index)) {
        index += dollarQuoteTag.length - 1;
        dollarQuoteTag = null;
      }
      continue;
    }

    if (singleQuoted) {
      if (char === "'" && nextChar === "'") {
        index += 1;
      } else if (char === "'") {
        singleQuoted = false;
      }
      continue;
    }

    if (doubleQuoted) {
      if (char === "\"" && nextChar === "\"") {
        index += 1;
      } else if (char === "\"") {
        doubleQuoted = false;
      }
      continue;
    }

    if (char === "-" && nextChar === "-") {
      index += 1;
      lineComment = true;
      continue;
    }

    if (char === "/" && nextChar === "*") {
      index += 1;
      blockComment = true;
      continue;
    }

    if (char === "'") {
      singleQuoted = true;
      return true;
    }

    if (char === "\"") {
      doubleQuoted = true;
      return true;
    }

    if (char === "$") {
      const tagMatch = statement.slice(index).match(/^\$[A-Za-z_][A-Za-z0-9_]*\$|^\$\$/);
      if (tagMatch) {
        dollarQuoteTag = tagMatch[0];
        index += dollarQuoteTag.length - 1;
        return true;
      }
    }

    if (!/\s|;/.test(char)) {
      return true;
    }
  }

  return false;
}

console.log(`Applying ${sqlFileArg}...`);
const statements = splitSqlStatements(sqlText);

try {
  await client.connect();

  for (const statement of statements) {
    const result = await client.query(statement);
    if (Array.isArray(result.rows) && result.rows.length > 0) {
      console.table(result.rows);
    }
  }
} finally {
  await client.end();
}
console.log("Done.");
