"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      discprice: DataTypes.INTEGER,
      bandwidth: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      recommended: DataTypes.BOOLEAN,
      SubCategoryId: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER
    },
    {}
  );
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.SubCategory);
    Product.belongsTo(models.Category);
  };
  return Product;
};
