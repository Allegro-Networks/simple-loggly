var assert = require('assert'),
	SimpleLoggly = require('../lib/SimpleLoggly');


test('When I Log an error, Then the correct uri is posted to', function() {
	var logglyKey = 'loggly-key',
		expectedPostUri = 'https://logs-01.loggly.com/inputs/' + logglyKey + '/',
		postedUri;
	var FakeHttpRequest = {
		post: function(url, data, callback, options) {
			postedUri = url;
			callback();
		}
	};
	var simpleLoggly = new SimpleLoggly(FakeHttpRequest, logglyKey);
	simpleLoggly.log("");
	assert.equal(postedUri, expectedPostUri);
});

test('When I Log an error, Then the correct data is posted', function() {
	var logglyKey = 'loggly-key',
		data = {
			message: 'This is some data, yo.'
		},
		postedData;
	var FakeHttpRequest = {
		post: function(url, data, callback, options) {
			postedData = data;
			callback();
		}
	};
	var simpleLoggly = new SimpleLoggly(FakeHttpRequest, logglyKey);
	simpleLoggly.log(data);
	assert.deepEqual(postedData, data);
});

test('When I Log an error with a single tag, Then the correct uri is posted to', function() {
	var logglyKey = 'loggly-key',
		expectedPostUri = 'https://logs-01.loggly.com/inputs/' + logglyKey + '/tag/testtag1',
		logglyTag = ["testtag1"],
		postedUri;

	var FakeHttpRequest = {
		post: function(url, data, callback, options) {
			postedUri = url;
			callback();
		}
	};
	var simpleLoggly = new SimpleLoggly(FakeHttpRequest, logglyKey, logglyTag);
	simpleLoggly.log("");
	assert.equal(postedUri, expectedPostUri);
});

test('When I Log an error with multiple tags, Then the correct uri is posted to', function() {
	var logglyKey = 'loggly-key',
		expectedPostUri = 'https://logs-01.loggly.com/inputs/' + logglyKey + '/tag/testtag1,taggingAgain,onceMoreForLuck',
		logglyTag = ["testtag1", "taggingAgain", "onceMoreForLuck"],
		postedUri;

	var FakeHttpRequest = {
		post: function(url, data, callback, options) {
			postedUri = url;
			callback();
		}
	};
	var simpleLoggly = new SimpleLoggly(FakeHttpRequest, logglyKey, logglyTag);
	simpleLoggly.log("");
	assert.equal(postedUri, expectedPostUri);
});