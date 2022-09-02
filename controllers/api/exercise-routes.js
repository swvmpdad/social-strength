const router = require('express').Router();
const { User, Exercise, Routine } = require('../../models');

// GET all exercises
router.get('/', (req, res) => {
    Exercise.findAll({
        attributes: [
            'id',
            'exercise_name',
            'muscle_group',
            'description',
        ],
        exclude: ['video'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbExerciseData => res.json(dbExerciseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one exercise
router.get('/:id', (req, res) => {
    Exercise.findOne({
        attributes: [
            'id',
            'exercise_name',
            'muscle_group',
            'description',
            'video'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        where: {
            id: req.params.id
        }
    })
        .then(dbExerciseData => {
            if (!dbExerciseData) {
                res.status(404).json({ message: 'No exercise found with that id.' });
                return;
            }
            res.json(dbExerciseData);
        });
});

// POST a new exercise
router.post('/', (req, res) => {
    Exercise.create({
        exercise_name: req.body.exercise_name,
        muscle_group: req.body.muscle_group,
        description: req.body.description,
        video: req.body.video
    })
        .then(dbExerciseData => res.json(dbExerciseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT update exercise
router.put('/:id', (req, res) => {
    Exercise.update(
        {
            exercise_name: req.body.exercise_name,
            muscle_group: req.body.muscle_group,
            description: req.body.description,
            video: req.body.video
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbExerciseData => {
            if (!dbExerciseData) {
                res.status(404).json({ message: 'No exercise found with this id.' });
                return;
            }
            res.json(dbExerciseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Exercise.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbExerciseData => {
            if (!dbExerciseData) {
                res.status(404).json({ message: 'No exercise found with that id.' });
                return;
            }
            res.json(dbExerciseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;