const { Routine } = require('../models');

const routineData = [
    {
        routine_name: 'Leg Day',
        user_id: 1,
        exercise_ids: [1]
    },
    {
        routine_name: 'Chest Day',
        user_id: 1,
        exercise_ids: [2]
    }
];

const seedRoutines = () => Routine.bulkCreate(routineData);

module.exports = seedRoutines;