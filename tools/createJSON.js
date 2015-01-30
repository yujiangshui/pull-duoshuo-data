var fs = require('fs');

var createJSON = module.exports = function(data) {
	var fileName = 'result-' + Date.now() + '.json';
	var defaultName = 'result.json';

	fs.readdir('./data', function(err, files) {

		// 检查是否有目录
		if ( err ) {
			fs.mkdir('./data');
		}

		fs.writeFile('./data/'+defaultName, data, function() {
			console.log('result.json was updated!');
		});
		fs.writeFile('./data/'+fileName, data, function() {
			console.log('New file was saved! Named as', fileName);
		});

	});


};

