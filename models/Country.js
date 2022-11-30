'use strict';
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        country_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        country_name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        dial_code: {
            type: DataTypes.STRING(10)
        },
        country_code: {
            type: DataTypes.STRING(10)
        },
        flag: {
            type: DataTypes.STRING(512)
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_countries',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['name', 'dial_code', 'country_code']
            }
        ]
    });
    Country.associate = function (models) {

        Country.hasMany(models.City, {
            foreignKey: {
                name: 'country_id'
            }
        });
        Country.hasMany(models.EmployeeEducation, {
			foreignKey: {
				name: 'country_id',
			},
		});
    };
   
    return Country;
};