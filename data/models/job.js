"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init(
    {
      id_job: {
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
      unemployed: {
        type: DataTypes.BOOLEAN,
      },
      self_employment: {
        type: DataTypes.BOOLEAN,
      },
      employed: {
        type: DataTypes.BOOLEAN,
      },
      position: {
        type: DataTypes.STRING,
      },
      organization_name: {
        type: DataTypes.STRING,
      },
      organization_address: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      organization_type: {
        type: DataTypes.ENUM(
          "government/public",
          "ngo/civil society",
          "private"
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
      modelName: "Job",
      tableName: "Jobs",
    }
  );
  return Job;
};
