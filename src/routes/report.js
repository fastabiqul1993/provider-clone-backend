const express = require("express");
const router = express.Router();
const { getAllReport, createReport } = require("../controllers/report");
const { isAuth, isUser, isAdmin } = require("../middlewares/auth");

router
  .get("/", isAuth, isAdmin, getAllReport)
  .post("/", isAuth, isUser, createReport);

module.exports = router;
