var SimpleLoggly = function(HTTPRequest, logglyKey) {
	var logglyUri = "https://logs-01.loggly.com/inputs/" + logglyKey + "/tag/http-client/";

	function log(logglyData) {
		HTTPRequest.post(logglyUri, logglyData,function(){});
	}

	return {
		log: log
	};
};


module.exports = SimpleLoggly;