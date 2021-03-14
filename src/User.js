const { DataTypes, Model } = require('sequelize');
const sequelize = require('./db');

class User extends Model {}

User.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	timestamps: false
})

module.exports = User;