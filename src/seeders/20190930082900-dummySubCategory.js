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

      CategoryId: DataTypes.INTEGER,
      name: DataTypes.STRING
    */

    return queryInterface.bulkInsert(
      "SubCategories",
      [
        {
          CategoryId: 1,
          name: "Booster Weekend",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CategoryId: 1,
          name: "Bronet 24 Jam",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CategoryId: 2,
          name: "Booster Sosmed",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CategoryId: 2,
          name: "Booster Video",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CategoryId: 3,
          name: "Kangen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CategoryId: 3,
          name: "Curhat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CategoryId: 4,
          name: "Axis Pass",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CategoryId: 4,
          name: "Internet Mabrur",
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
    return queryInterface.bulkDelete("SubCategories", null, {});
  }
};
