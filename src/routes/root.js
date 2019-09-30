const express = require("express");
const router = express.Router();

const user = require("./user");
const category = require("./category");
const subCategory = require("./subCategory");
const product = require("./product");

router.use("/user", user);
router.use("/category", category);
router.use("/subCategory", subCategory);
router.use("/product", product);

module.exports = router;
