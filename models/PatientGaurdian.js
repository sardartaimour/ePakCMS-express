'use strict';
module.exports = (sequelize, DataTypes) => {
    const PatientGaurdian = sequelize.define('PatientGaurdian', {
        patient_gaurdian_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        patient_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        title: {
            type: DataTypes.ENUM(Object.keys(constant.gender_titles)),
            allowNull: false,
            defaultValue: constant.gender_titles.MR
        },
        f_name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        l_name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        father_husband_name: {
            type: DataTypes.STRING(64)
        },
        gender: {
            type: DataTypes.ENUM(Object.keys(constant.genders)),
            allowNull: false,
            defaultValue: constant.genders.MALE
        },
        cnic: {
            type: DataTypes.STRING(20),
        },
        mobile_number: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        occupation: {
            type: DataTypes.STRING(64)
        },
        relation_with_patient: {
            type: DataTypes.STRING(64),
            allowNull: false
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_ptient_gaurdians',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['f_name', 'l_name']
            }
        ]
    });
    PatientGaurdian.associate = function (models) {

        PatientGaurdian.belongsTo(models.Patient, {
			foreignKey: {
				name: 'patient_id',
			},
		});
    };
   
    return PatientGaurdian;
};