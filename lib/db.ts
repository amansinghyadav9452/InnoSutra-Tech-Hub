import { Pool } from "pg";

const globalForDb = globalThis as unknown as {
  pool?: Pool;
};

export const db =
  globalForDb.pool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : undefined,
    max: 10,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = db;
}
