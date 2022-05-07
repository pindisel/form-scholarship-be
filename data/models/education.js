"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Education.init(
    {
      id_education_bg: {
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
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      undergrad_institution: {
        type: DataTypes.STRING,
      },
      undergrad_province: {
        type: DataTypes.STRING,
      },
      undergrad_country: {
        type: DataTypes.STRING,
      },
      undergrad_language: {
        type: DataTypes.STRING,
      },
      undergrad_date: {
        type: DataTypes.DATE,
      },
      master_institution: {
        type: DataTypes.STRING,
      },
      master_province: {
        type: DataTypes.STRING,
      },
      master_country: {
        type: DataTypes.STRING,
      },
      master_language: {
        type: DataTypes.STRING,
      },
      master_date: {
        type: DataTypes.DATE,
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
      modelName: "Education",
    }
  );
  return Education;
};
