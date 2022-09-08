const router = require('express').Router();
const { User, Exercise, Routine } = require('../models');
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

  // router.get('/exercise', withAuth, (req, res) => {
  //   Exercise.findOne({
  //     where: {
  //       id: 
  //     },
  //   })
  // })

router.get('/routines', withAuth, (req, res) => {
  Routine.findAll({
    attributes: [
      'id',
      'routine_name'
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

module.exports = router;
