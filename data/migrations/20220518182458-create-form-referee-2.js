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
        type: Sequelize.STRING,
      },
      oral_communication: {
        type: Sequelize.STRING,
      },
      written_communication: {
        type: Sequelize.STRING,
      },
      independent_work: {
        type: Sequelize.STRING,
      },
      organize_work: {
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
    await queryInterface.dropTable("Referee2");
  },
};
