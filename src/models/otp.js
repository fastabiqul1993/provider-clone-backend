"use strict";
module.exports = (sequelize, DataTypes) => {
  const Otp = sequelize.define(
    "Otp",
    {
      UserId: DataTypes.INTEGER,
      otpnumber: DataTypes.INTEGER
    },
    {}
  );
  Otp.associate = function(models) {
    // associations can be defined here
    Otp.belongsTo(models.User);
  };
  return Otp;
};
