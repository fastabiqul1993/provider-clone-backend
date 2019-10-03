const { Report, User } = require("../models");
const { response, getOffset } = require("../helpers/helper");

module.exports = {
  getAllReport: (req, res) => {
    const { page, order } = req.query;
    const offset = page ? getOffset(page, 10) : 0;
    const orderBy = order ? order : "DESC";

    Report.findAndCountAll({
      limit: 10,
      offset,
      order: [["createdAt", orderBy]],
      include: [{ model: User }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },

  createReport: (req, res) => {
    const { complain, UserId } = req.body;
    Report.create({ complain, UserId })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, "UserId cannot be empty!");
      });
  }
};
