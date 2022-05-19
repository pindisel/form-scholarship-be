"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Educations", {
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
      undergrad_institution: {
        type: Sequelize.STRING,
      },
      undergrad_province: {
        type: Sequelize.STRING,
      },
      undergrad_country: {
        type: Sequelize.STRING,
      },
      undergrad_language: {
        type: Sequelize.STRING,
      },
      undergrad_date: {
        type: Sequelize.DATE,
      },
      master_institution: {
        type: Sequelize.STRING,
      },
      master_province: {
        type: Sequelize.STRING,
      },
      master_country: {
        type: Sequelize.STRING,
      },
      master_language: {
        type: Sequelize.STRING,
      },
      master_date: {
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Educations");
  },
};
