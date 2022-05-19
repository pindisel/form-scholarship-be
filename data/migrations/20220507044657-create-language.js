"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Languages", {
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
      english_proficiency: {
        type: Sequelize.STRING,
      },
      arabic_proficiency: {
        type: Sequelize.STRING,
      },
      other_language: {
        type: Sequelize.STRING,
      },
      other_proficiency: {
        type: Sequelize.STRING,
      },
      test_name: {
        type: Sequelize.STRING,
      },
      test_date: {
        type: Sequelize.DATE,
      },
      test_score: {
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
    await queryInterface.dropTable("Languages");
  },
};
