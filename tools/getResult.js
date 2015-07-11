/**
 * 拿到多说 comments 结果组成的数组
 * @param  {json} data 多说 API 拿到的 JSON
 * @return {array}
 */
var getResult = module.exports  = function(data) {
	var tempResult = [];
	for (var i in data) {
		var dataItem = data[i].message;
		dataItem = unescape(dataItem);
		dataItem = dataItem.replace(/&quot;/g, '"');;
		tempResult.push(dataItem);
	}

	return tempResult;
};
