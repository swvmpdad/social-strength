const User = require('./User');
const Exercise = require('./Exercise');
const Routine = require('./Routine');

User.hasMany(Routine, {
    foreignKey: 'user_id'
});

User.hasMany(Exercise, {
    foreignKey: 'added_by'
});

Routine.belongsTo(User, {
    foreignKey: 'user_id'
});

Routine.hasMany(Exercise, {
    foreignKey: 'exercise_ids'
});

Exercise.belongsTo(User, {
    foreignKey: 'added_by'
});

Exercise.belongsTo(Routine, {
    foreignKey: 'exercises_ids'
});