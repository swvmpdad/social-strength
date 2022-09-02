const router = require('express').Router();
const { User, Exercise, RoutineExercise } = require('../../models');

// GET all exercises
router.get('/', (req, res) => {
    RoutineExercise.findAll({
        attributes: [
            'id',
            'routine_id',
            'exercise_id'
        ],
    })
        .then(dbRoutineData => res.json(dbRoutineData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;