"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Document.init(
    {
      id_document: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id_user",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      id_passport: {
        type: DataTypes.STRING,
      },
      edu_certificate: {
        type: DataTypes.STRING,
      },
      academic_transcript: {
        type: DataTypes.STRING,
      },
      motivation_letter: {
        type: DataTypes.STRING,
      },
      language_test: {
        type: DataTypes.STRING,
      },
      arabic_certificate: {
        type: DataTypes.STRING,
      },
      curriculum_vitae: {
        type: DataTypes.STRING,
      },
      research_proposal: {
        type: DataTypes.STRING,
      },
      admission_receipt: {
        type: DataTypes.STRING,
      },
      publication: {
        type: DataTypes.STRING,
      },
      other: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Document",
      tableName: "Documents",
    }
  );
  return Document;
};
