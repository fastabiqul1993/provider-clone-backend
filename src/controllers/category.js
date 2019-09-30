const { Category, SubCategory, Product } = require("../models");
const { response } = require("../helpers/helper");

module.exports = {
  getAllCategory: (req, res) => {
    Category.findAndCountAll({
      include: [{ model: SubCategory }, { model: Product }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  getCategory: (req, res) => {
    const { id } = req.params;
    Category.findOne({
      where: { id },
      include: [{ model: PrCategory }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  createCategory: (req, res) => {
    const { name } = req.body;

    Category.create({ name })
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

    Category.update({ name }, { where: { id } })
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

    Category.destroy({ where: { id } })
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
