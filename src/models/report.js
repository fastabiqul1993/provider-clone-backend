"use strict";
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define(
    "Report",
    {
      complain: DataTypes.STRING,
      UserId: DataTypes.INTEGER
    },
    {}
  );
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.User);
  };
  return Report;
};
