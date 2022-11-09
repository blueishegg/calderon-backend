// let users = {
//   id: 1,
//   fullname: "Israel Calderon Patino",
//   first_name: "Israel",
//   last_name: "Calderon",
//   dob: "21/10/1991",
//   description: "British-Bolivian living in London and Quebec",

import { query } from "express";

// };
export async function getUsers() {
  const users = await query(`SELECT * FROM users;`);
  return users.rows;
}
