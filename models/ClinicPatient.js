'use strict';
module.exports = (sequelize, DataTypes) => {
    const ClinicPatient = sequelize.define('ClinicPatient', {
        clinic_patient_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        clinic_mr_no: {
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
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_clinic_patients',
        underscored: true,
        timestamps: true,
        paranoid: true,             // for soft deletion
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    ClinicPatient.associate = function (models) {

        ClinicPatient.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        ClinicPatient.belongsTo(models.Patient, {
			foreignKey: {
				name: 'patient_id',
			},
		});
    };
   
    return ClinicPatient;
};
