"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Contacts", {
      id_contact: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_student: {
        type: Sequelize.INTEGER,
        references: {
          model: "Personals",
          key: "id_student",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      address1: {
        type: Sequelize.STRING,
      },
      address2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.INTEGER,
      },
      province: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      home_phone: {
        type: Sequelize.INTEGER,
      },
      mobile_phone: {
        type: Sequelize.INTEGER,
      },
      primary_email: {
        type: Sequelize.STRING,
      },
      alternate_email: {
        type: Sequelize.STRING,
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Contacts");
  },
};
