const router = require('express').Router();

const userRoutes = require('./user-routes');

const exerciseRoutes = require('./exercise-routes');

const routineRoutes = require('./routine-routes');

router.use('/users', userRoutes);

router.use('/exercises', exerciseRoutes);

router.use('/routines', routineRoutes);

module.exports = router;