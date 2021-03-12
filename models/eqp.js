'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eqp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Eqp.init({
    type: DataTypes.STRING,
    model: DataTypes.STRING,
    oilChangeHours: DataTypes.STRING,
    hydraulicOilChangeHours: DataTypes.STRING,
    fuelFilterChangeHours: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Eqp',
  });
  return Eqp;
};