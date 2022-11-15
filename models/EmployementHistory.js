'use strict';
module.exports = (sequelize, DataTypes) => {
    const EmployementHistory = sequelize.define('EmployementHistory', {
        employement_history_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        city_id: { // location 
            type: DataTypes.STRING(150)
        },
        job_title: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(150), // like senior Engineer etc
            allowNull: false
        },
        orginization_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        job_type: {
            type: DataTypes.ENUM(Object.keys(constant.employee_job_type)),
            allowNull: false,
            defaultValue: constant.employee_job_type.PERMANENT
        },
        job_description: {
            type: DataTypes.STRING(1024)
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
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_employement_histories',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    EmployementHistory.associate = function (models) {
        // associations can be defined here
        EmployementHistory.belongsTo(models.Employee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
        EmployementHistory.belongsTo(models.City, {
			foreignKey: {
				name: 'city_id',
			},
		});
    };
   
    return EmployementHistory;
};