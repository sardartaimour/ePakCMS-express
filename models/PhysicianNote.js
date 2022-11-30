'use strict';
module.exports = (sequelize, DataTypes) => {
    const PhysicianNote = sequelize.define('PhysicianNote', {
        physician_note_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        physician_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        clinic_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        patient_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING(1024),
            allowNull: false
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_physician_notes',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    PhysicianNote.associate = function (models) {

        PhysicianNote.belongsTo(models.Employee, {
			foreignKey: {
				name: 'physician_id',
			},
		});
        PhysicianNote.belongsTo(models.Clinic, {
			foreignKey: {
				name: 'clinic_id',
			},
		});

        PhysicianNote.hasMany(models.Patient, {
            foreignKey: {
                name: 'patient_id'
            }
        });
    };
   
    return PhysicianNote;
};