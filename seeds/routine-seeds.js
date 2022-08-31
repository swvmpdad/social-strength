const { Routine } = require('../models');

const routineData = [
    {
        routine_name: 'Leg Day',
        user_id: 1,
        exercise_ids: 1
    },
    {
        routine_name: 'Chest Day',
        user_id: 2,
        exercise_ids: 2
    },
    {
        routine_name: 'Full Body Day',
        user_id: 1,
        exercise_ids: 1
    }
];

const seedRoutines = () => Routine.bulkCreate(routineData);

module.exports = seedRoutines;