const db = require('../db');
const request = require('supertest');
const app = require('../app');
const User = require('../User');

let server;
let userId;

beforeAll(async () => {
	server = app.listen(5000);
	await db.sync();
});

afterAll(async () => {
	const user = await User.findByPk(userId);
	await user.destroy();

	await server.close();
	await db.close();
})

test('should create a new user', async () => {
	const res = await request(app).post('/users');

	userId = res.body.id;

	expect(res.status).toBe(201);
	expect(res.body.name).toEqual('Test');
})

test('should get all users', async () => {
	const res = await request(app).get('/users');

	expect(res.status).toBe(200);
	expect(res.body[0].name).toBe('Test');
})