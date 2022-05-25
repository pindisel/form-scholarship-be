"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Referees", {
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
      title_ref1: {
        type: Sequelize.ENUM("mr", "mrs", "ms", "miss", "other"),
      },
      f_name_ref1: {
        type: Sequelize.STRING,
      },
      l_name_ref1: {
        type: Sequelize.STRING,
      },
      position_ref1: {
        type: Sequelize.STRING,
      },
      relationship_ref1: {
        type: Sequelize.STRING,
      },
      institution_ref1: {
        type: Sequelize.STRING,
      },
      country_ref1: {
        type: Sequelize.STRING,
      },
      phone_ref1: {
        type: Sequelize.STRING,
      },
      email_ref1: {
        type: Sequelize.STRING,
      },
      title_ref2: {
        type: Sequelize.ENUM("mr", "mrs", "ms", "miss", "other"),
      },
      f_name_ref2: {
        type: Sequelize.STRING,
      },
      l_name_ref2: {
        type: Sequelize.STRING,
      },
      position_ref2: {
        type: Sequelize.STRING,
      },
      relationship_ref2: {
        type: Sequelize.STRING,
      },
      institution_ref2: {
        type: Sequelize.STRING,
      },
      country_ref2: {
        type: Sequelize.STRING,
      },
      phone_ref2: {
        type: Sequelize.STRING,
      },
      email_ref2: {
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
    await queryInterface.dropTable("Referees");
  },
};
