import { Pool } from "pg";

const pool = new Pool({
  user: process.env["PG_USERNAME"],
  password: process.env["PG_PASSWORD"],
  host: process.env["PG_HOST"],
  port: Number(process.env["PG_PORT"]),
  database: process.env["PG_DATABASE"],
});

export default async function queryDB(query: string, values: any) {
  const client = await pool.connect();
  try {
    const result = await client.query(query, values);
    return result.rows;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  } finally {
    client.release();
  }
}
