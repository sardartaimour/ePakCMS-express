'use strict';
module.exports = (sequelize, DataTypes) => {
    const PatientVitalHistory = sequelize.define('PatientVitalHistory', {
        patient_vital_history_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        vital_title: {
            type: DataTypes.ENUM(Object.keys(constant.general_vital_supported)),
            allowNull: false,
            defaultValue: constant.general_vital_supported.WEIGHT
        },
        measurements: {
            type: DataTypes.STRING(20),
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
        added_by: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_patient_allergies',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['vital_title']
            }
        ]
    });
    PatientVitalHistory.associate = function (models) {

        PatientVitalHistory.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        PatientVitalHistory.belongsTo(models.Patient, {
			foreignKey: {
				name: 'patient_id',
			},
		});
        PatientVitalHistory.belongsTo(models.Employee, {
            foreignKey: {
                name: 'added_by',
            },
        });

    };
   
    return PatientVitalHistory;
};