const { User, Otp } = require("../models");
const { response, sendMail, sendSms } = require("../helpers/helper");
const jwt = require("jsonwebtoken");
const newOtp = Math.floor(Math.random() * 10000);

module.exports = {
  createOtp: (id, name, phone) => {
    Otp.create({ UserId: id, otpnumber: newOtp })
      .then(result => {
        sendSms(name, newOtp, phone);
        return true;
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },

  forwardMail: async (req, res) => {
    const { id, email } = req.body;

    Otp.destroy({ where: { UserId: id } })
      .then(() => {
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
        // if(User.)
        // console.log(User.name);
        // console.log(result.User).name;
        // if (result) {
        //   const { User } = result;
        //   if (result.otpnumber === Number(otp)) {
        //     const generateToken = jwt.sign(
        //       {
        //         id: UserId,
        //         name: User.name,
        //         role: User.role
        //       },
        //       process.env.SECRET_KEY,
        //       { expiresIn: "24h" }
        //     );
        //     let feedback = {};
        //     feedback.name = User.name;
        //     feedback.email = User.email;
        //     feedback.phone = User.phone;
        //     feedback.token = generateToken;

        //     Otp.destroy({ where: { UserId } })
        //       .then(resDestroy => {
        //         console.log("delete OTP success");
        //       })
        //       .catch(err => {
        //         console.log(`error occurs: ${err}`);
        //       });

        //     response(res, feedback, 200);
        //   } else {
        //     response(res, null, 400, "OTP not valid!");
        //   }
        // } else {
        //   response(res, null, 400, "UserId not found!");
        // }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
