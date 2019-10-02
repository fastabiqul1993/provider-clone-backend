const { sequelize, Sequelize } = require("../models/index");
const Op = Sequelize.Op;
const { Product, Category, SubCategory } = require("../models");
const { response, getOffset, getDiscount } = require("../helpers/helper");

module.exports = {
  getAllProduct: (req, res) => {
    const { page, order, recommended, CategoryId, SubCategoryId } = req.query;
    const offset = page ? getOffset(page, 10) : 0;
    const orderBy = order ? order : "DESC";

    Product.findAndCountAll({
      limit: 10,
      offset,
      order: [["createdAt", orderBy]],
      where: {
        [Op.or]: [{ CategoryId }, { SubCategoryId }],
        [Op.and]: recommended ? { recommended } : { id: { [Op.not]: 0 } }
      },
      include: [{ model: Category }, { model: SubCategory }]
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  getAllProductName: (req, res) => {
    Product.findAll({ attributes: ["id", "name"] })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },

  getProduct: (req, res) => {
    const { id } = req.params;
    Product.findOne({
      where: { id },
      include: [{ model: Category }, { model: SubCategory }]
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
  createProduct: (req, res) => {
    const {
      name,
      description,
      price,
      discount,
      bandwidth,
      duration,
      SubCategoryId,
      CategoryId
    } = req.body;

    const afterDiscount = getDiscount(price, discount);

    Product.create({
      name,
      description,
      price,
      discount,
      discprice: afterDiscount,
      bandwidth,
      duration,
      SubCategoryId,
      CategoryId
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  patchProduct: (req, res) => {
    const {
      name,
      description,
      price,
      bandwidth,
      discount,
      duration,
      recommended,
      SubCategoryId
    } = req.body;
    const { id } = req.params;

    const discFix = Number(discount);
    const priceFix = Number(price);

    const afterDiscount = discount ? getDiscount(priceFix, discFix) : discFix;

    Product.update(
      {
        name,
        description,
        price,
        discount,
        discprice: afterDiscount,
        bandwidth,
        duration,
        recommended,
        SubCategoryId
      },
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
  deleteProduct: (req, res) => {
    const { id } = req.params;

    Product.destroy({ where: { id } })
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
