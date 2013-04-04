var handlers = require('./handlers');

var router = function(request, response) {
	console.log("Serving request type " + request.method + " for url " + request.url);
		if(request.url === '/'){
				handlers.serveFile(request, response);
		}	else if (request.url === 'http://127.0.0.1:8080/classes/room1' || '/classes/messages'){
			if(request.method === 'GET'){
				handlers.returnMessages(request, response);
			}
			if(request.method === 'POST'){
				handlers.postMessages(request, response);
			}
		}	else {
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.end('404 yo!');
		}
};

exports.router = router;