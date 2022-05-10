"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personal.init(
    {
      id_student: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.ENUM("mr", "mrs", "ms", "miss", "other"),
      },
      f_name: {
        type: DataTypes.STRING,
      },
      l_name: {
        type: DataTypes.STRING,
      },
      birth_place: {
        type: DataTypes.STRING,
      },
      birth_date: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.ENUM("male", "female"),
      },
      country: {
        type: DataTypes.STRING,
      },
      national_num: {
        type: DataTypes.INTEGER,
      },
      passport_num: {
        type: DataTypes.INTEGER,
      },
      issue_date: {
        type: DataTypes.DATE,
      },
      expiry_date: {
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
      modelName: "Personal",
      tableName: "Personals",
    }
  );
  return Personal;
};
