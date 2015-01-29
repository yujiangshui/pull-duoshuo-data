var restler = require('restler');
var fs = require('fs');
var unescape = require('unescape-html');

var getResult = require('./tools/getResult');
var createJSON = require('./tools/createJSON');


// 配置信息
// http://dev.duoshuo.com/docs/54460b82f42e54ec03e50082
var option = {
		'short_name' : 'jiangshui-test',
		'thread_key' : '1',
		'page' : 1,
		'limit' : 10000
	};


// 从多说 API 服务器上拉取数据
restler.get('http://api.duoshuo.com/threads/listPosts.json', {query: option})
	.on('complete', function(result, response) {
		var result = getResult(result.parentPosts);
		createJSON('[' + result.join(',') + ']');
	});