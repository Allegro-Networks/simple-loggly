var SimpleLoggly = function(HTTPRequest, logglyKey, logglyTag) {
		var logglyUri = "https://logs-01.loggly.com/inputs/" + logglyKey + "/";

		if (logglyTag)
		{
			logglyUri += "tag/";
			for (var i = 0; i < logglyTag.length; i++) {
				if (i > 0)
				{
					logglyUri += ",";
				}
				logglyUri += logglyTag[i];
			}
		}

		function log(logglyData) {
			HTTPRequest.post(logglyUri, logglyData, function() {
				console.log('Loggly log sent: ', logglyUri, logglyData);
			});
		}

		return {
			log: log
		};
	};


module.exports = SimpleLoggly;