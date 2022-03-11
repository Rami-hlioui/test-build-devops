const request = require('supertest');
const app = require('../app')


describe('Test Handlers', function () {
    test('Should return hello world', (done) => {
        request(app)
        .get('/')
        .expect(400)
    });
});
