'use strict';
module.exports = (sequelize, DataTypes) => {
    const PatientMedicalHistory = sequelize.define('PatientMedicalHistory', {
        patient_medical_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        medical_history: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING(500)
        },
        clinic_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        patient_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_patient_medical_history',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['medical_history']
            }
        ]
    });
    PatientMedicalHistory.associate = function (models) {

        PatientMedicalHistory.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        PatientMedicalHistory.belongsTo(models.Patient, {
			foreignKey: {
				name: 'patient_id',
			},
		});
    };
   
    return PatientMedicalHistory;
};