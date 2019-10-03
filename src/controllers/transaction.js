const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const models = require("../models/index");
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
        UserId: UserId,
        [Op.or]: [{ ProductId }, { id: { [Op.not]: 0 } }]
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
    const findUser = User.findOne({
      where: { id: UserId },
      attributes: ["id", "credit"],
      raw: true
    });
    const findProduct = Product.findOne({
      where: { id: ProductId },
      attributes: ["discprice"],
      raw: true
    });
    const findTransaction = Transaction.findOne({
      where: { UserId, [Op.and]: { ProductId } },
      raw: true
    });

    Promise.all([findUser, findProduct, findTransaction])
      .then(result => {
        if (!result[2]) {
          if (result[0].credit > result[1].discprice) {
            let creditAfter = result[0].credit - result[1].discprice;

            return models.sequelize
              .transaction(function(t) {
                return User.update(
                  { credit: creditAfter },
                  { where: { id: UserId } }
                ).then(function(user) {
                  return Transaction.create({
                    UserId,
                    ProductId,
                    durationlimit: 23,
                    status: true
                  });
                });
              })
              .then(newTransaction => {
                let feedback = {};
                feedback.UserId = UserId;
                feedback.ProductId = ProductId;
                response(res, newTransaction, 200);
              })
              .catch(err => {
                response(res, null, 400, `error occurs: ${err}`);
              });
          } else {
            response(res, null, 400, "Credit not enough!");
          }
        } else {
          response(res, null, 400, "Cannot buy multiple product!");
        }
      })
      .catch(err => {
        response(res, null, 400, "UserId or CategoryId cannot be empty!");
      });
  },

  patchTransaction: (req, res) => {
    const { UserId, ProductId, durationlimit, status } = req.body;
    const { id } = req.params;

    Transaction.update(
      { UserId, ProductId, durationlimit, status },
      { where: { id } }
    )
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
