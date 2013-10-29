var SimpleLoggly = function(HttpRequestWrapper, logglyKey) {
	var logglyUri = "https://logs-01.loggly.com/inputs/" + logglyKey + "/tag/http-client/";

	function log(logglyData) {
		HttpRequestWrapper.post(logglyUri, logglyData);
	}

	return {
		log: log
	};
};


module.exports = SimpleLoggly;