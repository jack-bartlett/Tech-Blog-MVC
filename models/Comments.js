const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comments extends Model {}

Comments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:'posts',
          key: 'id',
        },
      },
      //user_id/email address
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
      comments_body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      
     
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comments',
    }
  );
  
  module.exports = Comments;