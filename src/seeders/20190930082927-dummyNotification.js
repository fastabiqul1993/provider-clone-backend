"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
        UserId: DataTypes.INTEGER,
        message: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    */
    return queryInterface.bulkInsert(
      "Notifications",
      [
        {
          UserId: 1,
          message: "bayar tagihannya goblokkk!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          UserId: 1,
          message: "Jangan ngutang woi!",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Notifications", null, {});
  }
};
