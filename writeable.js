var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/html.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writehtml.txt');

myReadStream.on('data', function(chunk){
	console.log('written:');
	myWriteStream.write(chunk);
});