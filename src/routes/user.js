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

// router
//   .post("/login", login)
//   .post("/register", register)
//   .post("/register/admin", isAuth, registerAdmin)
//   .get("/admin/userName", isAuth, isAdmin, getAllName)
//   .get("/admin", isAuth, isAdmin, getAll)
//   .get("/admin/:id", isAuth, isAdmin, getById)
//   .patch("/admin/:id", isAuth, isAdmin, patchUser)
//   .delete("/admin/:id", isAuth, isAdmin, deleteUser)
//   .put("/topUp/:id", isAuth, isUser, topUp);

router
  .post("/login", login)
  .post("/register", register)
  .post("/register/admin", registerAdmin)
  .get("/userName", getAllName)
  .get("/", getAll)
  .get("/:id", getById)
  .patch("/:id", patchUser)
  .delete("/:id", deleteUser)
  .put("/topUp/:id", topUp);

module.exports = router;
