const router = require('express').Router();
const { User, Exercise, Routine } = require('../../models');

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
                attributes: ['exercise_name']
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
                attributes: ['exercise_name']
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

// POST a new exercise
router.post('/', (req, res) => {
    Routine.create({
        routine_name: req.body.routine_name,
        user_id: req.body.user_id,
        exercise_ids: req.body.exercise_ids
    })
        .then(dbRoutineData => res.json(dbRoutineData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT update Routine
router.put('/:id', (req, res) => {
    Routine.update(
        {
            routine_name: req.body.routine_name,
            exercise_ids: req.body.exercise_ids
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbRoutineData => {
            if (!dbRoutineData) {
                res.status(404).json({ message: 'No routine found with this id.' });
                return;
            }
            res.json(dbRoutineData);
        })
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