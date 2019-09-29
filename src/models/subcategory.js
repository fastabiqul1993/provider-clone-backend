"use strict";
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define(
    "SubCategory",
    {
      CategoryId: DataTypes.INTEGER,
      name: DataTypes.STRING
    },
    {}
  );
  SubCategory.associate = function(models) {
    // associations can be defined here
    SubCategory.belongsTo(models.PrCategory);
    SubCategory.hasMany(models.Product);
  };
  return SubCategory;
};
