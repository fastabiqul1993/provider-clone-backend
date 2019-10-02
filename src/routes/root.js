const express = require("express");
const router = express.Router();

const user = require("./user");
const category = require("./category");
const subCategory = require("./subCategory");
const product = require("./product");
const transaction = require("./transaction");
const notification = require("./notification");
const report = require("./report");

router.use("/user", user);
router.use("/category", category);
router.use("/subCategory", subCategory);
router.use("/product", product);
router.use("/transaction", transaction);
router.use("/notification", notification);
router.use("/report", report);

module.exports = router;
