"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Language.init(
    {
      id_language: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_student: {
        type: DataTypes.INTEGER,
        references: {
          model: "Personals",
          key: "id_student",
        },
      },
      english_proficiency: {
        type: DataTypes.STRING,
      },
      arabic_proficiency: {
        type: DataTypes.STRING,
      },
      other_language: {
        type: DataTypes.STRING,
      },
      other_proficiency: {
        type: DataTypes.STRING,
      },
      test_name: {
        type: DataTypes.STRING,
      },
      test_date: {
        type: DataTypes.DATE,
      },
      test_score: {
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
      modelName: "Language",
    }
  );
  return Language;
};
