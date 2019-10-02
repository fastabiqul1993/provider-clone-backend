const { User, Otp } = require("../models");
const { response } = require("../helpers/helper");
const jwt = require("jsonwebtoken");

module.exports = {
  createOtp: (req, res) => {
    const { UserId } = req.body;
    const newOtp = Math.floor(Math.random() * 10000);

    Otp.create({ UserId, otpnumber: newOtp })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },

  loginOtp: (req, res) => {
    const { UserId } = req.body;
    Otp.findOne({ where: { UserId } })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteOtp: (req, res) => {
    const { UserId } = req.body;

    Otp.destroy({ where: { UserId } })
      .then(result => {
        response(res, result, 200);
      })
      .cathc(err => {
        response(res, null, 400, err);
      });
  }
};
