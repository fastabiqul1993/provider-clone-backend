const express = require("express");
const router = express.Router();
const { createOtp, loginOtp } = require("../controllers/otp");

router.post("/loginOtp", loginOtp).post("/createOtp", createOtp);

module.exports = router;
