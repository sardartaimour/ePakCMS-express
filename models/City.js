'use strict';
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        city_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        city: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        lat: {
            type: DataTypes.STRING(15)
        },
        lng: {
            type: DataTypes.STRING(15)
        },
        country_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        state_or_province: {
            type: DataTypes.STRING(100),
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_cities',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['city', 'state_or_province']
            }
        ]
    });
    City.associate = function (models) {
        // associations can be defined here
        City.belongsTo(models.Country, {
			foreignKey: {
				name: 'country_id',
			},
		});
    };
   
    return City;
};