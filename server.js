var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end();
});

server.listen(3000, '127.0.0.1');
console.log('server started');
module.exports.server = server;