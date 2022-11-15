'use strict';
module.exports = (sequelize, DataTypes) => {
    const ClinicEmployee = sequelize.define('ClinicEmployee', {
        clinic_employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        clinic_employee_no: {
            type: DataTypes.STRING(20),
            allowNull: false        
        },
        role: {
            type: DataTypes.ENUM(Object.keys(constant.secondary_roles)),
            allowNull: false,
            defaultValue: constant.secondary_roles.CLINIC_ADMIN,  
        },
        clinic_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_clinic_employees',
        underscored: true,
        timestamps: true,
        paranoid: true,             // for soft deletion
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    ClinicEmployee.associate = function (models) {

        ClinicEmployee.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
        ClinicEmployee.belongsTo(models.Employee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
    };
   
    return ClinicEmployee;
};
