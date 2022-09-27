const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Routine = require('./Routine');

class RoutineExercise extends Model{}

RoutineExercise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        routine_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'routine',
                key: 'id'
            }
        },
        exercise_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'exercise',
            key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'routine-exercise'
    }
);

module.exports = RoutineExercise;