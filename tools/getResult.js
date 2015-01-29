/**
 * 拿到多说 comments 结果组成的数组
 * @param  {json} data 多说 API 拿到的 JSON
 * @return {array}
 */
module.exports = getResult = function(data) {
	var tempResult = [];
	for (var i in data) {
		tempResult.push(unescape(data[i].message));
	}

	return tempResult;
};
