"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Study extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Study.init(
    {
      id_study: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Personals",
          key: "id_student",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      degree: {
        type: DataTypes.ENUM("master", "phd"),
      },
      study_program: {
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
      modelName: "Study",
      tableName: "Studies",
    }
  );
  return Study;
};
