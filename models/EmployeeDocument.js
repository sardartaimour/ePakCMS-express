'use strict';
module.exports = (sequelize, DataTypes) => {
    const EmployeeDocument = sequelize.define('EmployeeDocument', {
        employee_document_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        reference_id: {
            type: DataTypes.INTEGER(10)
        },
        reference_type: {
            type: DataTypes.ENUM(Object.keys(constant.document_refrence_type)),
            allowNull: false,
            defaultValue: constant.document_refrence_type.OTHER_DOCUMENTS, 
        },
        document_url: {
            type: DataTypes.STRING(200),
            a,
            llowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_employee_documents',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    EmployeeDocument.associate = function (models) {
        // associations can be defined here
        EmployeeDocument.belongsTo(models.Employee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
    };
   
    return EmployeeDocument;
};