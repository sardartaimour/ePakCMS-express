'use strict';
module.exports = (sequelize, DataTypes) => {
    const PhysicianException = sequelize.define('PhysicianException', {
        physician_exception_id: {
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
        start_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        end_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        remarks: {
            type: DataTypes.STRING(512),
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_physician_exceptions',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    PhysicianException.associate = function (models) {

        PhysicianException.belongsTo(models.Employee, {
			foreignKey: {
				name: 'physician_id',
			},
		});
        PhysicianException.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});
    };
   
    return PhysicianException;
};