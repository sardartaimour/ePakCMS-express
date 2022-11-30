"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
        .createTable("cms_cities", {
            city_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            city: {
                type: Sequelize.STRING(64),
                allowNull: false
            },
            lat: {
                type: Sequelize.STRING(30)
            },
            lng: {
                type: Sequelize.STRING(30)
            },
            country_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
                references: {
                    model: 'cms_countries',
                    key: 'country_id'
                },
            },
            state_or_province: {
                type: Sequelize.STRING(100),
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
        });

        return queryInterface.addIndex('cms_cities', ['city', 'state_or_province'], {
            name: 'cms_city_idx',
            type: 'FULLTEXT'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("cms_cities");
    },
};
