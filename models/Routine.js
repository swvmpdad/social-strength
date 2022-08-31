const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Routine extends Model {}

Routine.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        routine_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        excercise_ids: {
            type: DataTypes.ARRAY,
            references: {
                model: 'exercise',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'routine'
    }
);

module.exports = Routine;