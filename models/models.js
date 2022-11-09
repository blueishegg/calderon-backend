// let users = {
//   id: 1,
//   fullname: "Israel Calderon Patino",
//   first_name: "Israel",
//   last_name: "Calderon",
//   dob: "21/10/1991",
//   description: "British-Bolivian living in London and Quebec",

import { query } from "../db/index.js";

// };
export async function getUsers() {
  const users = await query(`SELECT * FROM users;`);
  return users.rows;
}
export async function createUser(new_user) {
  let user;
  if (new_user) {
    user = await query(
      `INSERT INTO users (full_name, forename, surname, dob, description) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [
        new_user.full_name,
        new_user.forename,
        new_user.surname,
        new_user.dob,
        new_user.description,
      ]
    );
  } else {
    return { message: "Failed to create a new user, please try again" };
  }
  return user.rows;
}
