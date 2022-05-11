"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Documents", {
      id_document: {
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
      id_passport: {
        type: Sequelize.STRING,
      },
      edu_certificate: {
        type: Sequelize.STRING,
      },
      academic_transcript: {
        type: Sequelize.STRING,
      },
      motivation_letter: {
        type: Sequelize.STRING,
      },
      language_test: {
        type: Sequelize.STRING,
      },
      arabic_certificate: {
        type: Sequelize.STRING,
      },
      curriculum_vitae: {
        type: Sequelize.STRING,
      },
      research_proposal: {
        type: Sequelize.STRING,
      },
      admission_receipt: {
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
    await queryInterface.dropTable("Documents");
  },
};