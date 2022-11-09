import express from "express";
var router = express.Router();
import { getUsers, createUser } from "../models/models.js";
/* GET users listing. */
router.get("/", async function (req, res) {
  let result = await getUsers();
  res.json({
    message: "Here are the users",
    success: true,
    payload: result || "no users",
  });
});
// ----- CREATE USER -----
router.post("/", async function (req, res) {
  console.log(req.body);
  let new_user = await createUser(req.body);
  res.json({
    message: "here is your request to create a new user",
    success: true,
    payload: new_user,
  });
});
export default router;
