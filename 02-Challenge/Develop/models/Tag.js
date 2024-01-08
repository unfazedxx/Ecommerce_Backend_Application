const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: dataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true, 
      autoIncrememnt: true
    }, 
    tag_name: {
      type: dataTypes.STRING, 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
