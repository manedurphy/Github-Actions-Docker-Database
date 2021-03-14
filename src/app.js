require('./db');
const express = require('express');
const User = require('./User');

const app = express();

app.get('/users', async (req, res) => {
	const users = await User.find();
	return users;
})

module.exports = app;