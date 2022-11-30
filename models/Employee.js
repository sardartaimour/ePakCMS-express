'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        employee_no: {
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
        emp_pic: {
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
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(32),
            unique: true
        },
        mobile_number: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true
        },
        license_no: {
            type: DataTypes.STRING(64),
            unique: true
        },
        speciality_id: {
            type: DataTypes.INTEGER(10)
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
            type: DataTypes.DATE
        },
        block_reason: {
            type: DataTypes.STRING(100)
        },
        last_success_login: {
            type: DataTypes.DATE
        },
        last_failed_login: {
            type: DataTypes.DATE
        },
        failed_login_attempts: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_employees',
        underscored: true,
        timestamps: true,
        paranoid: true,             // for soft deletion
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['f_name', 'l_name']
            }
        ]
    });
    Employee.associate = function (models) {

        Employee.belongsTo(models.City, {
			foreignKey: {
				name: 'city_id',
			},
		});
        Employee.belongsTo(models.Speciality, {
			foreignKey: {
				name: 'speciality_id',
			},
		});

        Employee.hasMany(models.EmployeeEducation, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.EmployeeDocument, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.EmployeeAcheivement, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.EmployementHistory, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.ClinicEmployee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.PhysicianService, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.Appointment, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.PhysicianService, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        Employee.hasMany(models.PhysicianException, {
			foreignKey: {
				name: 'employee_id',
			},
		});
    };
   
    return Employee;
};
