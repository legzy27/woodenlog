var should = require('chai').should(),
	woodenlog = require('../index'),
	log = woodenlog.log,
	warn = woodenlog.warn,
	error = woodenlog.error;

describe('#log', function() {
	it('log message', function() {
		log('message').should.equal(true);
	});
});

describe('#warn', function() {
	it('warn message', function() {
		warn('message').should.equal(true);
	});
});

describe('#error', function() {
	it('error message', function() {
		error('message').should.equal(true);
	});
});