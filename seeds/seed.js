const sequelize = require('..config/connection');
const { User, Post, Comment } = require('../models');
const userData = require('.userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    try{
        const users = await User.bulkCreate(userData, {
            individualHooks: true
        });
        const users = await User.bulkCreate(postData, {
            individualHooks: true
        });
    }
    catch (error) {
        console.error(error);
    }
}

seedDatabase();