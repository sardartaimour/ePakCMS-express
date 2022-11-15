'use strict';
module.exports = (sequelize, DataTypes) => {
    const Clinic = sequelize.define('Clinic', {
        clinic_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        clinic_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        clinic_address: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        clinic_logo_url: {
            type: DataTypes.STRING(300)
        },
        city_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        state_or_province: {
            type: DataTypes.STRING(64)
        },
        zip_code: {
            type: DataTypes.STRING(64)
        },
        phone: {
            type: DataTypes.STRING(20)
        },
        mobile: {
            type: DataTypes.STRING(20)
        },
        email: {
            type: DataTypes.STRING(64)
        },
        enable_sms: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false      
        },
        subscription_type: {
            type: DataTypes.ENUM(Object.keys(constant.subscription_type)),
            allowNull: false,
            defaultValue: constant.subscription_type.TRIAL,  
        },
        subscription_upto: {
            type: DataTypes.DATE,
            defaultValue: helper.moment(new Date()).add(1, 'months')
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_clinics',
        underscored: true,
        timestamps: true,
        paranoid: true,             // for soft deletion
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['clinic_name', 'clinic_address']
            }
        ]
    });
    Clinic.associate = function (models) {

        Clinic.belongsTo(models.City, {
			foreignKey: {
				name: 'city_id',
			},
		});

        Clinic.hasMany(models.PhysicianService, {
            foreignKey: {
                name: 'clinic_id'
            }
        });
        Clinic.hasMany(models.Appointment, {
            foreignKey: {
                name: 'clinic_id'
            }
        });
        Clinic.hasMany(models.ClinicEmployee, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        Clinic.hasMany(models.ClinicPatient, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        Clinic.hasMany(models.Patient, {
			foreignKey: {
				name: 'city_id',
			},
		});
        Clinic.hasMany(models.PatientAllergy, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        Clinic.hasMany(models.PatientDiagnosis, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
    };
   
    return Clinic;
};