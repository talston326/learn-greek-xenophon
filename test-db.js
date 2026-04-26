import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

console.log("Starting DB test...");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function test() {
  try {
    console.log("Connecting...");
    await client.connect();

    console.log("Running query...");
    const res = await client.query('SELECT NOW()');

    console.log('✅ Connected! Server time:', res.rows[0]);
  } catch (err) {
    console.error('❌ Connection error:', err);
  } finally {
    await client.end();
    console.log("Done.");
  }
}

test();