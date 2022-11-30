'use strict';
module.exports = (sequelize, DataTypes) => {
    const PhysicianSchedule = sequelize.define('PhysicianSchedule', {
        physician_schedule_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        physician_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        clinic_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        week_day: {
            type: DataTypes.ENUM(Object.keys(constant.week_days)),
            allowNull: false,
            defaultValue: constant.week_days.SUN
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    }, {
        freezeTableName: true,
        tableName: 'cms_physician_schedules',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['week_day', 'start_time', 'end_time']
            }
        ]
    });
    PhysicianSchedule.associate = function (models) {

        PhysicianSchedule.belongsTo(models.Employee, {
			foreignKey: {
				name: 'physician_id',
			},
		});
        PhysicianSchedule.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});

    };
   
    return PhysicianSchedule;
};

