var SimpleLoggly = require('./SimpleLoggly'),
	HTTPRequest = require('HTTPRequest');


module.exports = function(logglyKey, logglyTag){
	return new SimpleLoggly(HTTPRequest, logglyKey, logglyTag);
};