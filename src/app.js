require('./db');
const express = require('express');
const User = require('./User');

const app = express();

app.get('/users', async (req, res) => {
	const users = await User.findAll();
	return res.status(200).json(users);
});

app.post('/users', async (req, res) => {
	const newUser = await User.create({ name: 'Test' });
	return res.status(201).json(newUser);
});

module.exports = app;