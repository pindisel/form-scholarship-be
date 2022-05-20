"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Referee2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Referee2.init(
    {
      id_user: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id_user",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      intelectual_ability: {
        type: DataTypes.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      oral_communication: {
        type: DataTypes.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      written_communication: {
        type: DataTypes.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      independent_work: {
        type: DataTypes.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      organize_work: {
        type: DataTypes.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      motivation: {
        type: DataTypes.ENUM("Poor", "Moderate", "Good", "Very Good"),
      },
      assessment: {
        type: DataTypes.STRING(300),
      },
      recommendation: {
        type: DataTypes.ENUM(
          "Strongly Recommend",
          "Recommend",
          "Not Recommend"
        ),
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
      modelName: "Referee2",
      tableName: "Referee2",
    }
  );
  return Referee2;
};
