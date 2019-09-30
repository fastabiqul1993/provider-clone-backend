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
      duration: DataTypes.INTEGER,
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
          bandwidth: 1000,
          duration: 1,
          SubCategoryId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kuota 2GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 3500,
          bandwidth: 2000,
          duration: 1,
          SubCategoryId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bronet 24 Jam 1GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 16900,
          bandwidth: 1000,
          duration: 1,
          SubCategoryId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bronet 24 Jam 2GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 25000,
          bandwidth: 2000,
          duration: 1,
          SubCategoryId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Sosmed 500MB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 500,
          bandwidth: 500,
          duration: 1,
          SubCategoryId: 3,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Sosmed 1GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 1000,
          bandwidth: 1000,
          duration: 1,
          SubCategoryId: 3,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Video 500MB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 500,
          bandwidth: 500,
          duration: 1,
          SubCategoryId: 4,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Booster Video 1GB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 1000,
          bandwidth: 1000,
          duration: 1,
          SubCategoryId: 4,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voice 10 menit",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 4000,
          bandwidth: 100,
          duration: 1,
          SubCategoryId: 5,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voice 30 menit",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 10000,
          bandwidth: 300,
          duration: 1,
          SubCategoryId: 5,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voice 20menit+20sms ",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 1000,
          bandwidth: 200,
          duration: 1,
          SubCategoryId: 6,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Voice 100menit+100sms ",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 2000,
          bandwidth: 1000,
          duration: 1,
          SubCategoryId: 6,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Axis Pass 1hr",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 85000,
          bandwidth: 10000,
          duration: 1,
          SubCategoryId: 7,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Axis Pass 3hr",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 150000,
          bandwidth: 30000,
          duration: 1,
          SubCategoryId: 7,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Internet Siang",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 200000,
          bandwidth: 100000,
          duration: 1,
          SubCategoryId: 8,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Internet Malam",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          price: 150000,
          bandwidth: 100000,
          duration: 1,
          SubCategoryId: 8,
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