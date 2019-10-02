"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      credit: DataTypes.INTEGER,
      role: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Otp);
    User.hasMany(models.Transaction);
    User.hasMany(models.Notification);
    User.hasMany(models.Report)
  };
  return User;
};
