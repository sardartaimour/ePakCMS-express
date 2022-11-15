'use strict';
module.exports = (sequelize, DataTypes) => {
    const EmployeeSpeciality = sequelize.define('EmployeeSpeciality', {
        employee_speciality_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        speciality: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(300)
        },
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_employee_specialities',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['speciality']
            }
        ]
    });
    EmployeeSpeciality.associate = function (models) {
        // associations can be defined here
        EmployeeSpeciality.belongsTo(models.Employee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
    };
   
    return EmployeeSpeciality;
};