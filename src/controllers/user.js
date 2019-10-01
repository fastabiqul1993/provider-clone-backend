const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRount = 10;

const { User, Transaction } = require("../models");
const { response, getOffset, sendMail } = require("../helpers/helper");

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then(result => {
        if (!result) {
          response(res, null, 400, "Email not found!");
        } else {
          bcrypt.compare(password, result.password, (err, isCompare) => {
            if (!isCompare) {
              response(res, null, 400, "Password not match!");
            } else if (isCompare) {
              const { id, name, role } = result;
              const generateToken = jwt.sign(
                {
                  id,
                  name,
                  role
                },
                process.env.SECRET_KEY,
                { expiresIn: "24h" }
              );

              response(res, { token: generateToken }, 200);
            } else {
              response(res, null, 400, err);
            }
          });
        }
      })
      .catch(error => {
        response(res, null, 400, error);
      });
  },
  register: (req, res) => {
    const { name, email, phone, password } = req.body;

    User.findOne({ where: { email }, raw: true })
      .then(result => {
        if (!result) {
          if (password) {
            bcrypt.hash(password, saltRount, (err, hash) => {
              User.create({
                name,
                email,
                phone,
                password: hash,
                role: "user",
                credit: 0
              })
                .then(result => {
                  // sendMail(name, email);
                  response(res, result, 200);
                })
                .catch(err => {
                  response(res, null, 400, err);
                });
            });
          } else {
            response(res, null, 400, "Password cannot be empty");
          }
        } else {
          response(res, null, 400, "Email already exist!");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  topUp: (req, res) => {
    const { id } = req.params;
    const { credit } = req.body;

    User.update({ credit }, { where: { id } })
      .then(result => {
        let feedback = {};

        feedback.credit = credit;
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  registerAdmin: (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, saltRount, (err, hash) => {
      User.create({ name, email, password: hash, role: "admin" })
        .then(result => {
          response(res, result, 200);
        })
        .catch(err => {
          response(res, null, 400, err);
        });
    });
  },
  getAll: (req, res) => {
    const { page, order } = req.query;
    const offset = page ? getOffset(page, 10) : 0;
    const orderBy = order ? order : "DESC";

    User.findAndCountAll({
      limit: 10,
      offset,
      order: [["createdAt", orderBy]],
      include: [{ model: Transaction }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(error => {
        response(res, null, 400, error);
      });
  },
  getAllName: (req, res) => {
    User.findAll({ attributes: ["id", "name"] })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  getById: (req, res) => {
    const { id } = req.params;

    User.findOne({
      where: { id },
      include: [{ model: Transaction }]
    })
      .then(result => {
        let feedback = {};
        feedback.rows = result;
        response(res, feedback, 200);
      })
      .catch(error => {
        response(res, null, 400, error);
      });
  },
  patchUser: (req, res) => {
    const { name, email, phone, password, credit } = req.body;
    const { id } = req.params;
    let hashPassword = password;

    if (password) {
      bcrypt.hash(password, saltRount, (err, hash) => {
        hashPassword = hash;
      });
    }

    User.update(
      {
        name,
        email,
        phone,
        password: hashPassword,
        role: "user",
        credit
      },
      { where: { id } }
    )
      .then(result => {
        let feedback = {};
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(error => {
        response(res, null, 400, error);
      });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;

    User.destroy({
      where: { id }
    })
      .then(result => {
        let feedback = {};
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(error => {
        response(res, null, 400, error);
      });
  }
};
