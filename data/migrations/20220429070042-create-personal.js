"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Personals", {
      id_user: {
        allowNull: false,

        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id_user",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      title: {
        type: Sequelize.ENUM("mr", "mrs", "ms", "miss", "other"),
      },
      f_name: {
        type: Sequelize.STRING,
      },
      l_name: {
        type: Sequelize.STRING,
      },
      birth_place: {
        type: Sequelize.STRING,
      },
      birth_date: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
      },
      country: {
        type: Sequelize.STRING,
      },
      national_num: {
        type: Sequelize.STRING,
      },
      passport_num: {
        type: Sequelize.STRING,
      },
      issue_date: {
        type: Sequelize.DATE,
      },
      expiry_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Personals");
  },
};
