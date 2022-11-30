'use strict';
module.exports = (sequelize, DataTypes) => {
    const PhysicianService = sequelize.define('PhysicianService', {
        physician_service_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        physician_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        clinic_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        service_title: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        service_cost: {
            type: DataTypes.FLOAT(11,2),
            allowNull: false,
            defaultValue: 0.0
        },
        service_duration: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },

    }, {
        freezeTableName: true,
        tableName: 'cms_physician_services',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['service_title', 'service_cost']
            }
        ]
    });
    PhysicianService.associate = function (models) {

        PhysicianService.belongsTo(models.Employee, {
			foreignKey: {
				name: 'physician_id',
			},
		});
        PhysicianService.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});

        PhysicianService.hasMany(models.Appointment, {
            foreignKey: {
                name: 'physician_service_id'
            }
        });
    };
   
    return PhysicianService;
};