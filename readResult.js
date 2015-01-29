var fs = require('fs');

var dataFile = 'data/result.json';

fs.readFile(dataFile, 'utf-8', function(err, data) {
	data = JSON.parse(data);
	console.log(data.length);
});