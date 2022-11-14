'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        employee_id: {
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
        city_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(64)
        },
        zip_code: {
            type: DataTypes.STRING(64)
        },
        phone: {
            type: DataTypes.STRING(64)
        },
        enable_sms: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,        
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
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['clinic_name', 'clinic_address']
            }
        ]
    });
    Employee.associate = function (models) {
        // associations can be defined here
    };
   
    return Clinic;
};