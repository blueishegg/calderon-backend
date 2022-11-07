import express from "express";
var router = express.Router();

import { getUsers } from "../models/models.js";
/* GET users listing. */
router.get("/", async function (req, res, next) {
  let result = await getUsers();
  res.send({
    message: "Here are the users",
    success: true,
    payload: result,
  });
});

export default router;
