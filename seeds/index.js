const seedExercises = require('./exercise-seeds');
const seedUsers = require('./user-seeds');
const seedRoutines = require('./routine-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedExercises();
    console.log('\n----- EXERCISES SEEDED -----\n');

    await seedRoutines();
    console.log('\n----- ROUTINES SEEDED -----\n');

    process.exit(0);
};

seedAll();