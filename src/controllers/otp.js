const { User, Otp } = require("../models");
const { response, sendMail } = require("../helpers/helper");
const jwt = require("jsonwebtoken");

module.exports = {
  createOtp: async (id, email, name) => {
    const newOtp = await Math.floor(Math.random() * 10000);

    Otp.create({ UserId: id, otpnumber: newOtp })
      .then(result => {
        sendMail(name, email, newOtp);
        return true;
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },

  loginOtp: (req, res) => {
    const { UserId, otp } = req.body;
    Otp.findOne({ where: { UserId }, include: { model: User } })
      .then(result => {
        // console.log(result.User.name);
        if (result) {
          const { User } = result;
          if (result.otpnumber === Number(otp)) {
            const generateToken = jwt.sign(
              {
                id: UserId,
                name: User.name,
                role: User.role
              },
              process.env.SECRET_KEY,
              { expiresIn: "24h" }
            );
            let feedback = {};
            feedback.token = generateToken;
            Otp.destroy({ where: { UserId } })
              .then(resDestroy => {
                console.log("delete OTP success");
              })
              .catch(err => {
                console.log(`error occurs: ${err}`);
              });
            response(res, feedback, 200);
          } else {
            response(res, null, 400, "OTP not valid!");
          }
        } else {
          response(res, null, 400, "UserId not found!");
        }
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
