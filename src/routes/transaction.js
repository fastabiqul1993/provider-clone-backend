const express = require("express");
const router = express.Router();
const {
  getAllTransaction,
  getTransaction,
  createTransaction,
  patchTransaction,
  deleteTransaction
} = require("../controllers/transaction");
const { isAuth, isUser } = require("../middlewares/auth");

router
  .get("/", getAllTransaction)
  .post("/", isAuth, isUser, createTransaction)
  .get("/:id", getTransaction)
  .patch("/:id", isAuth, isUser, patchTransaction)
  .delete("/:id", isAuth, isUser, deleteTransaction);

module.exports = router;
