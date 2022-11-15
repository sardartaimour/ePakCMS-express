'use strict';
module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        patient_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        mr_no: {
            type: DataTypes.STRING(20),
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
            type: DataTypes.STRING(64),
            // allowNull: false
        },
        patient_pic: {
            type: DataTypes.STRING(300)
        },
        gender: {
            type: DataTypes.ENUM(Object.keys(constant.genders)),
            allowNull: false,
            defaultValue: constant.genders.MALE
        },
        dob: { // date of birth
            type: DataTypes.DATE,
            allowNull: false
        },
        cnic: {
            type: DataTypes.STRING(20),
            unique: true
        },
        email: {
            type: DataTypes.STRING(32),
            unique: true
        },
        mobile_number: {
            type: DataTypes.STRING(64),
            unique: true
        },
        complete_address: {
            type: DataTypes.STRING(150),
            allowNull: false
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
        occupation: {
            type: DataTypes.STRING(64)
        },
        height: { // in cm
            type: DataTypes.INTEGER(10)
        },
        blood_group: {
            type: DataTypes.ENUM(Object.keys(constant.boold_groups)),
            allowNull: false,
            defaultValue: constant.boold_groups.AB_POS
        },
        emergency_contact_person: {
            type: DataTypes.STRING(64)
        },
        emergency_contact: {
            type: DataTypes.STRING(20)
        },
        emergency_contact_relation: {
            type: DataTypes.STRING(64)
        },
        password: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate: {
                len: [6, 64]
            }
        },
        is_mobile_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        is_employee_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        is_employee_blocked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        blocked_on: {
            type: DataTypes.DATTIME
        },
        block_reason: {
            type: DataTypes.STRING(100)
        },
        last_success_login: {
            type: DataTypes.DATTIME
        },
        last_failed_login: {
            type: DataTypes.DATTIME
        },
        failed_login_attempts: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_ptients',
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
    Patient.associate = function (models) {
        
        Patient.belongsTo(models.City, {
			foreignKey: {
				name: 'city_id',
			},
		});

    
        Patient.hasMany(models.ClinicPatient, {
			foreignKey: {
				name: 'patient_id',
			},
		});
    };
   
    return Patient;
};

