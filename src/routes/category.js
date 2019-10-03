const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  getCategory,
  createCategory,
  patchCategory,
  deleteCategory
} = require("../controllers/category");
const { isAuth, isAdmin } = require("../middlewares/auth");

router
  .get("/", getAllCategory)
  .post("/", isAuth, isAdmin, createCategory)
  .get("/:id", isAuth, isAdmin, getCategory)
  .patch("/:id", isAuth, isAdmin, patchCategory)
  .delete("/:id", isAuth, isAdmin, deleteCategory);

module.exports = router;
