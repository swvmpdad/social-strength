const User = require('./User');
const Exercise = require('./Exercise');
const Routine = require('./Routine');
const RoutineExercise = require('./RoutineExercise');

User.hasMany(Routine, {
    foreignKey: 'user_id'
});

User.hasMany(Exercise, {
    foreignKey: 'added_by'
});

Routine.belongsTo(User, {
    foreignKey: 'user_id'
});

Exercise.belongsTo(User, {
    foreignKey: 'added_by'
});

Routine.belongsToMany(Exercise, {
    through: RoutineExercise,
    as: 'exercises',
    foreignKey: 'routine_id'
});

Exercise.belongsToMany(Routine, {
    through: RoutineExercise,
    as: 'routines',
    foreignKey: 'exercise_id'
});

module.exports = { User, Exercise, Routine, RoutineExercise };