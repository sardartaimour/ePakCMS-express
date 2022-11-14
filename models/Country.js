'use strict';
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        country_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.INTEGER(64),
            allowNull: false
        },
        dial_code: {
            type: DataTypes.INTEGER(10)
        },
        country_code: {
            type: DataTypes.INTEGER(10)
        },
        flag: {
            type: DataTypes.INTEGER(264)
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
        // associations can be defined here
        Country.hasMany(models.City, {
            foreignKey: {
                name: 'country_id'
            }
        });
    };
   
    return Country;
};