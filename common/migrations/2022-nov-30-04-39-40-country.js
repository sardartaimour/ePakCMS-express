"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
        .createTable("cms_countries", {
            country_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            country_name: {
                type: Sequelize.STRING(64),
                allowNull: false,
            },
            dial_code: {
                type: Sequelize.STRING(10),
            },
            country_code: {
                type: Sequelize.STRING(10),
            },
            flag: {
                type: Sequelize.STRING(512),
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

        return queryInterface.addIndex('cms_countries', ['country_name', 'dial_code', 'country_code'], {
            name: 'cms_country_idx',
            type: 'FULLTEXT'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("cms_countries");
    },
};
