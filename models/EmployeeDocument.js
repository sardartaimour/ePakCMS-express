'use strict';
module.exports = (sequelize, DataTypes) => {
    const EmployeeDocument = sequelize.define('EmployeeDocument', {
        employee_document_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        reference_id: { // this could be Emp Eduction id or Emp Acheivement id or Emp history id
            type: DataTypes.INTEGER(10)
        },
        reference_type: {
            type: DataTypes.ENUM(Object.keys(constant.document_refrence_type)),
            allowNull: false,
            defaultValue: constant.document_refrence_type.OTHER_DOCUMENTS
        },
        remarks: {
            type: DataTypes.STRING(512)
        },
        document_url: {
            type: DataTypes.STRING(200),
            allowNull: false
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

        EmployeeDocument.belongsTo(models.Employee, {
			foreignKey: {
				name: 'employee_id',
			},
		});
    };
   
    return EmployeeDocument;
};