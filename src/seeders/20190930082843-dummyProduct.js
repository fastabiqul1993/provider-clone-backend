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
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      bandwidth: DataTypes.INTEGER,
      duration: 0ataTypes.INTEGER,
      SubCategoryId: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
      createdAt: new Date(),
      updatedAt: new Date()
    */
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Kuota 1GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 2500,
          discount: 0,
          discprice: 2500,
          bandwidth: 1000,
          duration: 23,
          recommended: true,
          SubCategoryId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bronet 24 Jam 2GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 25000,
          discount: 10,
          discprice: 22500,
          bandwidth: 2000,
          duration: 23,
          recommended: false,
          SubCategoryId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Owsem 16GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 43900,
          discount: 9,
          discprice: 39900,
          bandwidth: 16000,
          duration: 23,
          recommended: true,
          SubCategoryId: 3,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kuota 2GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 5000,
          discount: 0,
          discprice: 5000,
          bandwidth: 2000,
          duration: 23,
          recommended: true,
          SubCategoryId: 4,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bronet24Jam 3GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 29900,
          discount: 0,
          discprice: 29900,
          bandwidth: 3000,
          duration: 23,
          recommended: true,
          SubCategoryId: 5,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Sosmed 500MB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 500,
          discount: 0,
          discprice: 500,
          bandwidth: 500,
          duration: 23,
          recommended: true,
          SubCategoryId: 6,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Video 500MB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 500,
          discount: 0,
          discprice: 500,
          bandwidth: 500,
          duration: 23,
          recommended: true,
          SubCategoryId: 7,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Game 500MB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 500,
          discount: 0,
          discprice: 500,
          bandwidth: 500,
          duration: 23,
          recommended: false,
          SubCategoryId: 8,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Musik 500MB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 500,
          discount: 0,
          discprice: 500,
          bandwidth: 500,
          duration: 23,
          recommended: true,
          SubCategoryId: 9,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Sunset 500MB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 500,
          discount: 0,
          discprice: 500,
          bandwidth: 100,
          duration: 23,
          recommended: true,
          SubCategoryId: 10,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voice 10 menit",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 3900,
          discount: 0,
          discprice: 3900,
          bandwidth: 100,
          duration: 23,
          recommended: false,
          SubCategoryId: 11,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voice 20menit+20sms ",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 888,
          discount: 0,
          discprice: 888,
          bandwidth: 200,
          duration: 23,
          recommended: false,
          SubCategoryId: 12,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Axis Pass 1hr",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 85000,
          discount: 0,
          discprice: 85000,
          bandwidth: 1000,
          duration: 23,
          recommended: true,
          SubCategoryId: 13,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Internet Sepuasnya",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 199000,
          discount: 0,
          discprice: 199000,
          bandwidth: 10000000,
          duration: 23,
          recommended: true,
          SubCategoryId: 14,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Internet Sepuasnya+50mins+50SMS",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 299000,
          discount: 0,
          discprice: 299000,
          bandwidth: 30000,
          duration: 23,
          recommended: false,
          SubCategoryId: 15,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voice 50mins + 50 SMS",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 149000,
          discount: 0,
          discprice: 149000,
          bandwidth: 100000,
          duration: 23,
          recommended: false,
          SubCategoryId: 16,
          CategoryId: 4,
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
    return queryInterface.bulkDelete("Products", null, {});
  }
};
