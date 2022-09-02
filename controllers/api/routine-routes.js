const router = require('express').Router();
const { User, Exercise, Routine } = require('../../models');
const RoutineExercise = require('../../models/RoutineExercise');

// GET all exercises
router.get('/', (req, res) => {
    Routine.findAll({
        attributes: [
            'id',
            'routine_name'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Exercise,
                attributes: ['exercise_name'],
                through: RoutineExercise,
                as: 'exercises'
            }
        ]
    })
        .then(dbRoutineData => res.json(dbRoutineData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one routine
router.get('/:id', (req, res) => {
    Routine.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'routine_name'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Exercise,
                attributes: ['exercise_name'],
                through: RoutineExercise,
                as: 'exercises'
            }
        ]
    })
        .then(dbRoutineData => {
            if (!dbRoutineData) {
                res.status(404).json({ message: 'No routine found with that id.' });
                return;
            }
            res.json(dbRoutineData);
        });
});

// POST a new routine
router.post('/', (req, res) => {
    Routine.create({
        routine_name: req.body.routine_name,
        user_id: req.body.user_id,
        exerciseIds: req.body.exerciseIds
    })
        .then(dbRoutineData => {
            if (req.body.exerciseIds.length) {
                const routineExerciseIdArr = req.body.exerciseIds.map((exercise_id) => {
                    return {
                        routine_id: routine.id,
                        exercise_id
                    };
                });
                return RoutineExercise.bulkCreate(routineExerciseIdArr);
            }
            // if no exercise ids just respond
            res.status(200).json(dbRoutineData)
        })
        .then((routineExerciseIds) => res.status(200).json(routineExerciseIds))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT update Routine
router.put('/:id', (req, res) => {
    Routine.update(req.body, {
            where: {
                id: req.params.id
            }
    })
        .then(dbRoutineData => {
            if (!dbRoutineData) {
                res.status(404).json({ message: 'No routine found with this id.' });
                return;
            }
            return RoutineExercise.findAll({ where: { routine_id: req.params.id } });
        })
        .then((routineExercises) => {
            const routineExerciseIds = routineExercises.map(({ exercise_id }) => exercise_id);

            const newRoutineExercises = req.body.exerciseIds
                .filter((exercise_id) => !routineExerciseIds.includes(exercise_id))
                .map((exercise_id) => {
                    return {
                        routine_id: req.params.id,
                        exercise_id
                    };
                });
            const routineExercisesToRemove = routineExercises
                .filter(({ exercise_id }) => !req.body.exerciseIds.includes(exercise_id))
                .map(({ id }) => id);

            return Promise.all([
                RoutineExercise.destroy({ where: { id: routineExercisesToRemove }}),
                RoutineExercise.bulkCreate(newRoutineExercises)
            ]);
        })
        .then((updatedRoutineExercises) => res.json(updatedRoutineExercises))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Routine.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRoutineData => {
            if (!dbRoutineData) {
                res.status(404).json({ message: 'No routine found with that id.' });
                return;
            }
            res.json(dbRoutineData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;