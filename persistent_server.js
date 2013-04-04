var globals = require('./globals');

/* Import node's http module: */
var http = require("http");
var router = require('./router');
var server = require('./persistent_server.js');

var requestListener = function (request, response) {


  var resp = router.router(request, response);

  var statusCode = 200;

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";

  response.writeHead(statusCode, headers);

  response.end(resp);

};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var port = 8080;

var ip = "127.0.0.1";

var server = http.createServer(requestListener);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
