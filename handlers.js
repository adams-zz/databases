var globals = require('./globals');
var fs = require('fs');
var mysql = require('mysql');

// var p_server = require('./persistent_server')

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});
// dbConnection.query('SELECT username, text, roomname FROM users, messages, rooms WHERE users.id = messages.user_id and messages.room_id = rooms.id', function (err, rows, fields){
var dbget = function () {
	dbConnection.query('SELECT * FROM megatesttable', function(err, rows, fields){
	  if (err) throw err;
	  for (var i = 0; i < rows.length; i++) {
	    globals.messageLog.push(JSON.stringify(rows[i]));
	  };
	})
};

dbget();

var returnMessages = function(request, response){
		response.writeHead(200, globals.defaultCorsHeaders);
		response.end(JSON.stringify(globals.messageLog));
};

var postMessages = function(request, response){
		request.setEncoding();
		response.writeHead(302, globals.defaultCorsHeaders);
			request.on('data', function(data){
	  		query = dbConnection.query('INSERT INTO megatesttable SET ?', JSON.parse(data), function(err, result){} );
				globals.messageLog.push(data);
				fs.writeFile('log.txt', globals.messageLog);
			});
};

var serveFile = function(request, response){
			response.writeHead(200, {'Content-Type': 'text/html'});
			fs.createReadStream(__dirname + '/index.html').pipe(response);
			// read.pipe(fs.readFileSync('index.html', 'utf-8'));
};


exports.returnMessages = returnMessages;
exports.postMessages = postMessages;
exports.serveFile = serveFile;