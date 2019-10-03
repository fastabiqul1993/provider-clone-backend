const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Notification, User } = require("../models");
const { response } = require("../helpers/helper");

module.exports = {
  getAllNotification: (req, res) => {
    const { UserId } = req.query;

    Notification.findAndCountAll({
      where: {
        [Op.or]: [{ UserId }, { id: { [Op.not]: 0 } }]
      }
    })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  getNotification: (req, res) => {
    const { id } = req.params;

    Notification.findOne({
      where: { id },
      include: [{ model: User }]
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
  createNotification: (req, res) => {
    const { UserId, message } = req.body;

    Notification.create({ UserId, message })
      .then(result => {
        response(res, result, 200);
      })
      .catch(err => {
        response(res, null, 400, "UserId cannot be empty!");
      });
  },
  patchNotification: (req, res) => {
    const { message } = req.body;
    const { id } = req.params;

    Notification.update({ message }, { where: { id } })
      .then(result => {
        let feedback = {};
        feedback.id = id;

        response(res, feedback, 200);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },
  deleteNotification: (req, res) => {
    const { id } = req.params;

    Notification.destroy({ where: { id } })
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
