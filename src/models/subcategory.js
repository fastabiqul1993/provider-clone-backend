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
    SubCategory.belongsTo(models.Category);
    SubCategory.hasMany(models.Product);
  };
  return SubCategory;
};
