"use strict";
module.exports = (sequelize, DataTypes) => {
	const UserRole = sequelize.define(
		"UserRole",
		{
			user_id: {
				type: DataTypes.INTEGER(10),
				primaryKey: true,
				allowNull: false,
			},
			role_id: {
				type: DataTypes.INTEGER(10),
				primaryKey: true,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			tableName: "cms_user_roles",
			underscored: true,
			timestamps: false,
		}
	);
	UserRole.associate = function (models) {
		// associations can be defined here
		User.belongsTo(models.User, {
			foreignKey: {
				name: "user_id",
			},
		});
	};
	return UserRole;
};
