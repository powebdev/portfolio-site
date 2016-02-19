var request = require('supertest');

describe('loading express', function() {
	var server;
	beforeEach(function() {
		delete require.cache[require.resolve('../app')];
		server = require('../app');
	});
	afterEach(function(done) {
		server.close(done);
	});
	it('should respond to /', function testSlash(done) {
		request(server).get('/').expect(200, done);
	});
	it('should respond to /skills', function testSkills(done) {
		request(server).get('/skills').expect(200, done);
	});
	it('should respond to /projects', function testProjects(done) {
		request(server).get('/projects').expect(200, done);
	});
	it('should 404 everything else', function testPath(done) {
		request(server).get('/not/a/valid/path').expect(404, done);
	});
});
