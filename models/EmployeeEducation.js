'use strict';
module.exports = (sequelize, DataTypes) => {
    const EmployeeEducation = sequelize.define('EmployeeEducation', {
        employee_eduction_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        degree_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        university_college: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
        },
        is_continue: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        remarks: {
            type: DataTypes.STRING(150)
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_employees_education',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['degree_name', 'university_college']
            }
        ]
    });
    EmployeeEducation.associate = function (models) {

        EmployeeEducation.belongsTo(models.Employee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        EmployeeEducation.belongsTo(models.Country, {
			foreignKey: {
				name: 'country_id',
			},
		});
    };
   
    return EmployeeEducation;
};