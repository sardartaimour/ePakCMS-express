'use strict';
module.exports = (sequelize, DataTypes) => {
    const PatientDiagnosis = sequelize.define('PatientDiagnosis', {
        diagnosis_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        diagnose: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(200)
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
        tableName: 'cms_patient_allergies',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['allergy']
            }
        ]
    });
    PatientDiagnosis.associate = function (models) {

        PatientDiagnosis.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        PatientDiagnosis.belongsTo(models.Patient, {
			foreignKey: {
				name: 'patient_id',
			},
		});
    };
   
    return PatientDiagnosis;
};