const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Transaction, User, Product } = require("../models");
const { response, getOffset } = require("../helpers/helper");

module.exports = {
  getAllTransaction: (req, res) => {
    const { page, order, UserId, ProductId } = req.query;
    const offset = page ? getOffset(page, 10) : 0;
    const orderBy = order ? order : "DESC";

    Transaction.findAndCountAll({
      limit: 10,
      offset,
      order: [["createdAt", orderBy]],
      where: {
        [Op.or]: [{ UserId }, { ProductId }, { id: { [Op.not]: 0 } }]
      },
      include: [{ model: User }, { model: Product }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  getTransaction: (req, res) => {
    const { id } = req.params;

    Transaction.findOne({
      where: { id },
      include: [{ model: User }, { model: Product }]
    })
      .then(result => {
        let feedback = {};
        feedback.rows = result;
        response(res, feedback, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  createTransaction: (req, res) => {
    const { UserId, ProductId } = req.body;

    Transaction.create({ UserId, ProductId })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  patchTransaction: (req, res) => {
    const { UserId, ProductId } = req.body;
    const { id } = req.params;

    Transaction.update({ UserId, ProductId }, { where: { id } })
      .then(result => {
        let feedback = {};
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  deleteTransaction: (req, res) => {
    const { id } = req.params;

    Transaction.destroy({ where: { id } })
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
