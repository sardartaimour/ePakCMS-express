'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_fname: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        user_lname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        full_name: {
            type: DataTypes.VIRTUAL,
            get() {
                const firstName = this.getDataValue('user_fname');
                const lastName = this.getDataValue('user_lname');
                return (firstName && firstName.trim() && lastName && lastName.trim()) ? `${firstName} ${lastName}` : '';
            }
        },
        user_email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING(1000)
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_login: {
            type: DataTypes.INTEGER(10)
        }
    }, {
        freezeTableName: true,
        tableName: 'cms_users',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [

            {
                unique: true,
                fields: ['user_fname', 'user_email']
            }
        ]
    });
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(models.UserRole, {
            foreignKey: {
                name: 'user_id'
            }
        });
        User.hasMany(models.PhysicianService, {
            foreignKey: {
                name: 'user_id'
            }
        });
        User.hasMany(models.Appointment, {
            foreignKey: {
                name: 'user_id'
            }
        });
    };
   
    return User;
};