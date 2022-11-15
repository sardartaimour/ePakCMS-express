'use strict';
module.exports = (sequelize, DataTypes) => {
    const EmployeeAcheivement = sequelize.define('EmployeeAcheivement', {
        employee_acheivement_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        remarks: {
            type: DataTypes.STRING(512)
        },
        orginization_name: { // in case of certificate 
            type: DataTypes.STRING(150)        },
        date: {
            type: DataTypes.DATE
        },
        acheivement_type: {
            type: DataTypes.ENUM(Object.keys(constant.employee_acheivements_type)),
            allowNull: false,
            defaultValue: constant.employee_acheivements_type.CERTIFICATE
        },
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_employee_acheivements',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    EmployeeAcheivement.associate = function (models) {
        // associations can be defined here
        EmployeeAcheivement.belongsTo(models.Employee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
    };
   
    return EmployeeAcheivement;
};