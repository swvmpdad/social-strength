const { User } = require('../models');

const userData = [
    {
       username: 'swvmpdad',
       email: 'swvmpdad@gmail.com',
       password: 'Password123' 
    },
    {
        username: 'theHound',
        email: 'sandor@clegane.com',
        password: 'NoFire123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;