"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.SubCategory);
    Category.hasMany(models.Product);
  };
  return Category;
};
