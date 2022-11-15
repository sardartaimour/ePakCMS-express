'use strict';
module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        appointment_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        physician_service_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        physician_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        clinic_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        patient_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        appointment_cost: {
            type: FLOAT(11,2),
            allowNull: false,
            defaultValue: 0.0
        },
        discount: {
            type: FLOAT(11,2),
            allowNull: false,
            defaultValue: 0.0
        },
        appointment_purpose: {
            type: DataTypes.STRING(1024)
        },
        start_datetime: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        end_datetime: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        appointment_status: {
            type: DataTypes.ENUM(Object.keys(constant.appointment_status)),
            allowNull: false,
            defaultValue: constant.appointment_status.BOOKED,  
        },
        appointment_notes: {
            type: DataTypes.STRING(5000)
        },
        is_sms_sent: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_appointments',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['clinic_name', 'clinic_address']
            }
        ]
    });
    Appointment.associate = function (models) {

        Appointment.belongsTo(models.PhysicianService, {
			foreignKey: {
				name: 'physician_service_id',
			},
		});
        Appointment.belongsTo(models.Employee, {
			foreignKey: {
				name: 'physician_id',
			},
		});
        Appointment.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        Appointment.belongsTo(models.Patient, {
			foreignKey: {
				name: 'patient_id',
			},
		});
    };
   
    return Appointment;
};