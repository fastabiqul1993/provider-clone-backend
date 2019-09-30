const express = require("express");
const router = express.Router();

const user = require("./user");
const category = require("./category");
const subCategory = require("./subCategory");

router.use("/user", user);
router.use("/category", category);
router.use("/subCategory", subCategory);

module.exports = router;
