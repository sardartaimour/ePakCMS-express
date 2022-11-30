const constants = require('../config/constants').bootstrap();

"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
        .createTable("cms_clinics", {
            clinic_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            clinic_name: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            clinic_address: {
                type: Sequelize.STRING(300),
                allowNull: false
            },
            clinic_logo_url: {
                type: Sequelize.STRING(300)
            },
            city_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
                references: {
                    model: 'cms_cities',
                    key: 'city_id'
                },
            },
            state_or_province: {
                type: Sequelize.STRING(64)
            },
            zip_code: {
                type: Sequelize.STRING(64)
            },
            phone: {
                type: Sequelize.STRING(20)
            },
            mobile: {
                type: Sequelize.STRING(20)
            },
            email: {
                type: Sequelize.STRING(64)
            },
            enable_sms: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false      
            },
            registration_fee: {
                type: Sequelize.FLOAT(11,2),
                allowNull: false,
                defaultValue: 0.0
            },
            subscription_type: {
                type: Sequelize.ENUM(Object.values(constant.subscription_type)),
                allowNull: false,
                defaultValue: constant.subscription_type.TRIAL,  
            },
            subscription_upto: {
                type: Sequelize.DATE
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
            deleted_at: {
                type: Sequelize.DATE
            }
        });

        return queryInterface.addIndex('cms_clinics', ['clinic_name', 'clinic_address'], {
            name: 'cms_clinic_idx',
            type: 'FULLTEXT'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("cms_clinics");
    },
};
