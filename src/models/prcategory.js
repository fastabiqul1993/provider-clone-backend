"use strict";
module.exports = (sequelize, DataTypes) => {
  const PrCategory = sequelize.define(
    "PrCategory",
    {
      name: DataTypes.STRING
    },
    {}
  );
  PrCategory.associate = function(models) {
    // associations can be defined here
    PrCategory.hasMany(models.SubCategory);
  };
  return PrCategory;
};
