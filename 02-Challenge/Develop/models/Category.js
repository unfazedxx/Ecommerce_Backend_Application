const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: dataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true, 
      autoIncrememnt: true
    }, 
    category_name: {
      type: dataTypes.STRING, 
      allowNull: false, 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
