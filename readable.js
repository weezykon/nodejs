var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/html.txt', 'utf8');

myReadStream.on('data', function(chunk){
	console.log('received:');
	console.log(chunk);
});