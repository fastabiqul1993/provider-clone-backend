const express = require("express");
const router = express.Router();
const { getAllReport, createReport } = require("../controllers/report");

router.get("/", getAllReport).post("/", createReport);

module.exports = router;
