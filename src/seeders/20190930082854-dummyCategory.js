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
      }], {});
    */
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Internet",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New Booster",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Telepon dan SMS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Roaming",
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
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
