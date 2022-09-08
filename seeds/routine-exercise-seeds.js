const { RoutineExercise } = require('../models');

const routineExerciseData = [
    {
        routine_id: 1,
        exercise_id: 1
    },
    {
        routine_id: 1,
        exercise_id: 3
    },
    {
        routine_id: 2,
        exercise_id: 2
    },
    {
        routine_id: 3,
        exercise_id: 1
    },
    {
        routine_id: 3,
        exercise_id: 2
    },
    {
        routine_id: 3,
        exercise_id: 3
    }
];

const seedRoutineExercises = () => RoutineExercise.bulkCreate(routineExerciseData);

module.exports = seedRoutineExercises;