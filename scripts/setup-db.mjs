import { readFile } from "node:fs/promises";
import pg from "pg";

const { Client } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required to initialize the database.");
}

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

try {
  await client.connect();
  const schema = await readFile(new URL("../schema.sql", import.meta.url), "utf8");
  await client.query(schema);
  console.log("InnoSutra database schema is ready.");
} finally {
  await client.end();
}
