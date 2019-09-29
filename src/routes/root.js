const express = require("express");
const router = express.Router();

const user = require("./user");
const category = require("./PrCategory");

router.use("/user", user);
router.use("/category", category);

module.exports = router;
