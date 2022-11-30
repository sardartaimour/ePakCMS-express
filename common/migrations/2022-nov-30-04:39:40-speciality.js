"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
        .createTable("cms_specialities", {
            speciality_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            speciality: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(300)
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

        return queryInterface.addIndex('cms_specialities', ['speciality'], {
            name: 'cms_speciality_idx',
            type: 'FULLTEXT'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("cms_specialities");
    },
};
