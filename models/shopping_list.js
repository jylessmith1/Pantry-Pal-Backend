'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shopping_list.init({
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    quantity_metric: DataTypes.STRING,
    is_perishable: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shopping_list',
  });
  return shopping_list;
};