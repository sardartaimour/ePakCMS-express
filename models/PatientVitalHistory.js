'use strict';
module.exports = (sequelize, DataTypes) => {
    const PatientAllergy = sequelize.define('PatientAllergy', {
        allergy_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        allergy: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        patient_id: {
            type: DataTypes.STRING(300),
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
    PatientAllergy.associate = function (models) {

    };
   
    return Clinic;
};