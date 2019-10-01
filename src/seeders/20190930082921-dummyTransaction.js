"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false,
        ProductId: DataTypes.INTEGER,
        UserId: DataTypes.INTEGER
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    */
    return queryInterface.bulkInsert(
      "Transactions",
      [
        {
          ProductId: 1,
          UserId: 1,
          durationlimit: 23,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 2,
          UserId: 1,
          durationlimit: 23,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 3,
          UserId: 1,
          durationlimit: 23,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 4,
          UserId: 1,
          durationlimit: 23,
          status: true,
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
    return queryInterface.bulkDelete("Transactions", null, {});
  }
};
