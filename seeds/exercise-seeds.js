const { Exercise } = require('../models');

const exerciseData = [
    {
        exercise_name: 'Squat',
        muscle_group: 'Legs',
        description: 'Lowering of the hips while bending at the knees and returning to a standing positon.'
    },
    {
        exercise_name: 'Bench Press',
        muscle_group: 'Chest',
        description: 'Pressing a weight away from your chest while lying flat on your back and repeatedly lowering and raising it.'
    },
    // {
    //     exercise_name: 'Deadlift'
    // },
    // {
    //     exercise_name: 'Treadmill'
    // },
    // {
    //     exercise_name: 'Elliptical Machine'
    // },
    // {
    //     exercise_name: 'Swimming'
    // },
    // {
    //     exercise_name: 'Push-ups'
    // },
    // {
    //     exercise_name: 'Pull-ups'
    // },
    // {
    //     exercise_name: 'Sit-ups'
    // },
    // {
    //     exercise_name: 'Rowing'
    // }
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;