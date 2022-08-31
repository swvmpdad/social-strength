const { User } = require('../models');

const userData = [
    {
       username: 'swvmpdad',
       email: 'swvmpdad@gmail.com',
       password: 'Password123' 
    }
];

const seedUsers = () => Exercise.bulkCreate(userData);

module.exports = seedUsers;