"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Referee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Referee.init(
    {
      id_referee: {
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
      title_ref1: {
        type: DataTypes.ENUM("mr", "mrs", "ms", "miss", "other"),
      },
      f_name_ref1: {
        type: DataTypes.STRING,
      },
      l_name_ref1: {
        type: DataTypes.STRING,
      },
      position_ref1: {
        type: DataTypes.STRING,
      },
      relationship_ref1: {
        type: DataTypes.STRING,
      },
      institution_ref1: {
        type: DataTypes.STRING,
      },
      country_ref1: {
        type: DataTypes.STRING,
      },
      phone_ref1: {
        type: DataTypes.INTEGER,
      },
      email_ref1: {
        type: DataTypes.STRING,
      },
      title_ref2: {
        type: DataTypes.ENUM("mr", "mrs", "ms", "miss", "other"),
      },
      f_name_ref2: {
        type: DataTypes.STRING,
      },
      l_name_ref2: {
        type: DataTypes.STRING,
      },
      position_ref2: {
        type: DataTypes.STRING,
      },
      relationship_ref2: {
        type: DataTypes.STRING,
      },
      institution_ref2: {
        type: DataTypes.STRING,
      },
      country_ref2: {
        type: DataTypes.STRING,
      },
      phone_ref2: {
        type: DataTypes.INTEGER,
      },
      email_ref2: {
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
      modelName: "Referee",
      tableName: "Referees",
    }
  );
  return Referee;
};
