const { PrCategory } = require("../models");
const { response } = require("../helpers/helper");

module.exports = {
  getAllCategory: (req, res) => {
    PrCategory.findAndCountAll()
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  getCategory: (req, res) => {
    const { id } = req.params;
    PrCategory.findOne({ where: { id } })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  createCategory: (req, res) => {
    const { name } = req.body;

    PrCategory.create({ name })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  patchCategory: (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    PrCategory.update({ name }, { where: { id } })
      .then(result => {
        let feedback = {};
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  deleteCategory: (req, res) => {
    const { id } = req.params;

    PrCategory.destroy({ where: { id } })
      .then(result => {
        let feedback = {};
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  }
};
