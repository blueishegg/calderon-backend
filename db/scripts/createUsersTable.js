import { query } from "../index.js";

async function createUsersTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        full_name TEXT,
        forename TEXT,
        surname TEXT,
        dob DATE,
        description TEXT
    );`);
}

createUsersTable();
