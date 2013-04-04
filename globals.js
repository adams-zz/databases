
var messageLog = [];

var defaultCorsHeaders = {
	'Content-Type': 'application/json',
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.defaultCorsHeaders = defaultCorsHeaders;
exports.messageLog = messageLog;