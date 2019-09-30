const { SubCategory } = require("../models");
const { response } = require("../helpers/helper");

const { Category } = require("../models");

module.exports = {
  getAllSubCategory: (req, res) => {
    SubCategory.findAndCountAll({
      order: [["createdAt", "DESC"]],
      include: [{ model: Category }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  getSubCategory: (req, res) => {
    const { id } = req.params;

    SubCategory.findOne({
      where: { id },
      include: [{ model: Category }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  createSubCategory: (req, res) => {
    const { name, CategoryId } = req.body;

    SubCategory.create({ name, CategoryId })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  patchSubCategory: (req, res) => {
    const { name, CategoryId } = req.body;
    const { id } = req.params;

    SubCategory.update({ name, CategoryId }, { where: { id } })
      .then(result => {
        let feedback = {};
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  deleteSubCategory: (req, res) => {
    const { id } = req.params;

    SubCategory.destroy({ where: { id } })
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
