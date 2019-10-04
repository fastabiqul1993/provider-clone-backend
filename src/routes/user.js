const express = require("express");
const router = express.Router();
const {
  login,
  register,
  topUp,
  registerAdmin,
  getAll,
  getAllName,
  getById,
  patchUser,
  deleteUser
} = require("../controllers/user");
const { isAuth, isAdmin, isUser } = require("../middlewares/auth");

router
  .post("/login", login)
  .post("/register", register)
  .post("/register/admin", isAuth, registerAdmin)
  .get("/userName", getAllName)
  .get("/", isAuth, isAdmin, getAll)
  .get("/:id", isAuth, isUser, getById)
  .patch("/:id", isAuth, isUser, patchUser)
  .delete("/:id", isAuth, isAdmin, deleteUser)
  .put("/topUp/:id", isAuth, isAdmin, topUp);

module.exports = router;
