'use strict';
const {
  Model
} = require('sequelize');
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
  Personal.init({
    title: DataTypes.ENUM('mr', 'mrs', 'ms', 'miss', 'other'),
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    gender: DataTypes.ENUM('male', 'female'),
    country: DataTypes.STRING,
    national_num: DataTypes.INTEGER,
    passport_num: DataTypes.INTEGER,
    issue_date: DataTypes.DATE,
    expiry_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Personal',
  });
  return Personal;
};