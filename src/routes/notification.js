const express = require("express");
const router = express.Router();
const {
  getAllNotification,
  getNotification,
  createNotification,
  patchNotification,
  deleteNotification
} = require("../controllers/notification");
const { isAuth, isAdmin } = require("../middlewares/auth");

// router
//   .get("/", getAllNotification)
//   .get("/:id", getNotification)
//   .post("/", isAuth, isAdmin, createNotification)
//   .get("/:id", getAllNotification)
//   .patch("/:id", isAuth, isAdmin, patchNotification)
//   .delete("/:id", isAuth, isAdmin, deleteNotification);

router
  .get("/", getAllNotification)
  .get("/:id", getNotification)
  .post("/", createNotification)
  .get("/:id", getAllNotification)
  .patch("/:id", patchNotification)
  .delete("/:id", deleteNotification);

module.exports = router;
