"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Referee2", {
      id_user: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id_user",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      intelectual_ability: {
        type: Sequelize.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      oral_communication: {
        type: Sequelize.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      written_communication: {
        type: Sequelize.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      independent_work: {
        type: Sequelize.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      organize_work: {
        type: Sequelize.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      motivation: {
        type: Sequelize.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      assessment: {
        type: Sequelize.STRING(300),
      },
      recommendation: {
        type: Sequelize.ENUM(
          "Strongly Recommend",
          "Recommend",
          "Not Recommend"
        ),
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
    await queryInterface.dropTable("Referee2");
  },
};
