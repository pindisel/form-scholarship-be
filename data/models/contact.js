"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init(
    {
      id_contact: {
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
      address1: {
        type: DataTypes.STRING,
      },
      address2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.INTEGER,
      },
      province: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      home_phone: {
        type: DataTypes.INTEGER,
      },
      mobile_phone: {
        type: DataTypes.INTEGER,
      },
      primary_email: {
        type: DataTypes.STRING,
      },
      alternate_email: {
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
      modelName: "Contact",
    }
  );
  return Contact;
};
