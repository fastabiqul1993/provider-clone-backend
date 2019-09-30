const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct
} = require("../controllers/product");
const { isAuth, isAdmin } = require("../middlewares/auth");

router
  .get("/", getAllProduct)
  .post("/", isAuth, isAdmin, createProduct)
  .get("/:id", getProduct)
  .patch("/:id", isAuth, isAdmin, patchProduct)
  .delete("/:id", isAuth, isAdmin, deleteProduct);

module.exports = router;
