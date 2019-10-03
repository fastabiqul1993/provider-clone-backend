const express = require("express");
const router = express.Router();
const { createOtp, loginOtp, forwardMail } = require("../controllers/otp");

router
  .post("/loginOtp", loginOtp)
  .post("/createOtp", createOtp)
  .post("/sentmail", forwardMail);

module.exports = router;
