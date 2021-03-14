const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.PG_USER, process.env.PG_PASSWORD, {
	dialect: 'postgres',
	host: process.env.HOST,
	logging: true
});

sequelize.authenticate();

module.exports = sequelize;
