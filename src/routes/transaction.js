const express = require("express");
const router = express.Router();
const {
  getAllTransaction,
  getAllTransactionAdmin,
  getTransaction,
  createTransaction,
  patchTransaction,
  deleteTransaction
} = require("../controllers/transaction");
const { isAuth, isAdmin, isUser } = require("../middlewares/auth");

router
  .get("/", getAllTransaction)
  .get("/admin", isAuth, isAdmin, getAllTransactionAdmin)
  .post("/", isAuth, isUser, createTransaction)
  .get("/:id", getTransaction)
  .patch("/:id", isAuth, isUser, patchTransaction)
  .delete("/:id", isAuth, isUser, deleteTransaction);

module.exports = router;
