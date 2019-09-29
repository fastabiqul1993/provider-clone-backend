const jwt = require("jsonwebtoken");
const { response } = require("../helpers/helper");

module.exports = {
  isAuth: (req, res, next) => {
    const { header_key } = req.headers;

    if (header_key !== process.env.HEADER_KEY) {
      response(res, null, 400, "Not authorized!");
    } else {
      next();
    }
  },

  isAdmin: (req, res, next) => {
    const secret_key = process.env.secret_key;
    const token = req.headers["token"];

    jwt.verify(token, secret_key, (err, decoded) => {
      if (err && err.name === "TokenExpiredError") {
        response(res, null, 400, "Token expired");
      }
      if (err && err.name === "JsonWebTokenError") {
        response(res, null, 400, "Invalid token");
      }
      if (decoded.role !== "admin") {
        response(res, null, 400, "You're not administrator!");
      }
      console.log("Access granted!");
      next();
    });
  },

  isUser: (req, res, next) => {
    const secret_key = process.env.SECRET_KEY;
    const token = req.headers["token"];

    jwt.verify(token, secret_key, (err, decoded) => {
      if (err && err.name === "TokenExpiredError") {
        response(res, null, 400, "Token expired");
      }
      if (err && err.name === "JsonWebTokenError") {
        response(res, null, 400, "Invalid token");
      }
      console.log("Access granted!");
      next();
    });
  }
};
