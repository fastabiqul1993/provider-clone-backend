"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      ProductId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      durationlimit: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    },
    {}
  );
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User);
    Transaction.belongsTo(models.Product);
  };
  return Transaction;
};
