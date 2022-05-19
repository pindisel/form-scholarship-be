"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Referee1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Referee1.init(
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
        type: DataTypes.STRING,
      },
      oral_communication: {
        type: DataTypes.STRING,
      },
      written_communication: {
        type: DataTypes.STRING,
      },
      independent_work: {
        type: DataTypes.STRING,
      },
      organize_work: {
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
      modelName: "Referee1",
      tableName: "Referee1",
    }
  );
  return Referee1;
};
