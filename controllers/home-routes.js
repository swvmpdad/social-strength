const router = require('express').Router();
const { User, Exercise, Routine, RoutineExercise } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
  console.log(req.session);
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });

});

router.get('/log-in', (req, res) => {
   //If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
   //Otherwise, render the 'login' template
    res.render('log-in',);
  });

router.get('/exercise-list', withAuth, (req, res) => {
  Exercise.findAll({
    attributes: [
      'id',
      'exercise_name'
    ]
  })
    .then(dbExerciseData => {
      const exercises = dbExerciseData.map(exercise => exercise.get({ plain: true }));
      res.render('exercise-list', { exercises });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.get('/exercise/:id', withAuth, (req, res) => {
  Exercise.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'exercise_name',
      'muscle_group',
      'description',
      'video'
    ]
  })
    .then(dbExerciseData => {
      const exercise = dbExerciseData.get({ plain: true });
      res.render('exercise', { exercise });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/routines', withAuth, (req, res) => {
  Routine.findAll({
    attributes: [
      'id',
      'routine_name',
      'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbRoutineData => {
      const routines = dbRoutineData.map(routine => routine.get({ plain: true }));
      res.render('routines', { routines })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/routine/:id', withAuth, (req, res) => {
  Routine.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'routine_name',
      'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      // {
      //   model: Exercise,
      //   attributes: ['exercise_name']
      // },
      // {
      //   model: RoutineExercise,
      //   attributes: ['routine_id', 'exercise_id'],
      //   include:
      //     {
      //       model: Exercise,
      //       attributes: ['exercise_name']
      //     }
      // },
      // {
      //   model: Exercise,
      //   attributes: ['exercise_name']
      // }
    //   {
    //     model: RoutineExercise,
    //     attributes: ['routine_id', 'exercise_id'],
    //     include: {
    //       model: Routine,
    //       attributes: ['id']
    //     }
    //   }
    ]
  })
    .then(dbRoutineData => {
      const routine = dbRoutineData.get({ plain: true });
      res.render('routine', { routine })
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/routinecreate', withAuth, (req, res) => {
  Exercise.findAll({
    attributes: [
      'id',
      'exercise_name'
    ]
  })
    .then(dbExerciseData => {
      const exercises = dbExerciseData.map(exercise => exercise.get({ plain: true }));
      res.render('routinecreate', { exercises });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

module.exports = router;
