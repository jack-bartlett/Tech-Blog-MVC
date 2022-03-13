const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Posts extends Model {}

Posts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:'user',
          key: 'id',
        },
      },
     
      created_on: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_on: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      post_body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
     
    },
    
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'posts',
    }
  );
  
  module.exports = Posts;