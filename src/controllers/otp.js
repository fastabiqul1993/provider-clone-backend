const { User, Otp } = require("../models");
const { response, sendMail, sendSms } = require("../helpers/helper");
const jwt = require("jsonwebtoken");

module.exports = {
  createOtp: (id, name, phone) => {
    let newOtp = Math.floor(Math.random() * 10000);

    Otp.create({ UserId: id, otpnumber: newOtp })
      .then(result => {
        sendSms(name, "1234", phone);
        return true;
      })
      .catch(err => {
        response(res, null, 400, "error create OTP");
      });
  },

  forwardMail: (req, res) => {
    const { id, email } = req.body;

    Otp.destroy({ where: { UserId: id } })
      .then(() => {
        let newOtp = Math.floor(Math.random() * 10000);

        Otp.create({ UserId: id, otpnumber: newOtp })
          .then(result => {
            sendMail(email, newOtp);
            response(res, "Check your email!", 200);
          })
          .catch(err => {
            response(res, null, 400, err);
          });
      })
      .catch(err => {
        console.log("error forwading email!");
      });
  },

  loginOtp: (req, res) => {
    const { UserId, otp } = req.body;
    Otp.findOne({ where: { UserId }, include: { model: User } })
      .then(result => {
        const { User, otpnumber } = result;

        if (otpnumber === Number(otp)) {
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
          feedback.name = User.name;
          feedback.email = User.email;
          feedback.phone = User.phone;
          feedback.credit = User.credit;
          feedback.token = generateToken;

          Otp.destroy({ where: { UserId } })
            .then(() => {
              console.log("OTP delete!");
            })
            .catch(err => {
              console.log(`error occurs: ${err}`);
            });

          response(res, feedback, 200);
        } else {
          response(res, null, 400, "OTP not match!");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
