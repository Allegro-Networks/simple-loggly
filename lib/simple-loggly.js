var SimpleLoggly = require('./SimpleLoggly'),
	HTTPRequest = require('HTTPRequest');


module.exports = function(logglyKey){
	return new SimpleLoggly(HTTPRequest,logglyKey);
};