'use strict';
module.exports = (sequelize, DataTypes) => {
    const Speciality = sequelize.define('Speciality', {
        speciality_id: {
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
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_specialities',
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

    Speciality.associate = function (models) {

        Speciality.hasMany(models.Employee, {
			foreignKey: {
				name: 'speciality_id',
			},
		});
    };
    
    return Speciality;
};