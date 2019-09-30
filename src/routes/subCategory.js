const express = require("express");
const router = express.Router();
const {
  getAllSubCategory,
  getSubCategory,
  createSubCategory,
  patchSubCategory,
  deleteSubCategory
} = require("../controllers/subCategory");
const { isAuth, isAdmin } = require("../middlewares/auth");

// router
//   .get("/", getAllSubCategory)
//   .post("/", isAuth, isAdmin, createSubCategory)
//   .get("/:id", getSubCategory)
//   .patch("/:id", isAuth, isAdmin, patchSubCategory)
//   .delete("/:id", isAuth, isAdmin, deleteSubCategory);

router
  .get("/", getAllSubCategory)
  .post("/", createSubCategory)
  .get("/:id", getSubCategory)
  .patch("/:id", patchSubCategory)
  .delete("/:id", deleteSubCategory);

module.exports = router;
