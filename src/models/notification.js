"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    "Notification",
    {
      UserId: DataTypes.INTEGER,
      message: DataTypes.STRING
    },
    {}
  );
  Notification.associate = function(models) {
    // associations can be defined here
    Notification.belongsTo(models.User);
  };
  return Notification;
};
