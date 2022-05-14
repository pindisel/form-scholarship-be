"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Jobs", {
      id_job: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Personals",
          key: "id_student",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      unemployed: {
        type: Sequelize.BOOLEAN,
      },
      self_employment: {
        type: Sequelize.BOOLEAN,
      },
      employed: {
        type: Sequelize.BOOLEAN,
      },
      position: {
        type: Sequelize.STRING,
      },
      organization_name: {
        type: Sequelize.STRING,
      },
      organization_address: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      organization_type: {
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
    await queryInterface.dropTable("Jobs");
  },
};
