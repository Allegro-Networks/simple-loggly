var assert = require('assert'),
	SimpleLoggly = require('../lib/simple-loggly');


test('When I Log an error, Then the correct uri is posted to', function() {
	var logglyKey = 'loggly-key',
		expectedPostUri = 'https://logs-01.loggly.com/inputs/' + logglyKey + '/tag/http-client/',
		postedUri;
	var FakeHttpRequest = {
		post: function(url, data, callback, options) {
			postedUri = url;
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
		}
	};
	var simpleLoggly = new SimpleLoggly(FakeHttpRequest, logglyKey);
	simpleLoggly.log(data);
	assert.deepEqual(postedData, data);
});

