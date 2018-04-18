/**
 * 135. Candy
 * 
 * There are N children standing in a line. Each child is assigned a rating value.
 * 
 * You are giving candies to these children subjected to the following requirements:
 * 
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * What is the minimum candies you must give?
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
	var len = ratings.length;
	var res = [];
	var sum = 0;
	for (var i = 0; i < len; i++) {
			res.push((i !== 0 && ratings[i] > ratings[i - 1]) ? (res[i - 1] + 1) : 1);
	}
	for (var j = len - 1; j >= 0; j--) {
			if (j !== len - 1 && ratings[j] > ratings[j + 1]) res[j] = Math.max(res[j], res[j + 1] + 1);
			sum += res[j];
	}
	return sum;
};

// 分两次循环
// 第一次从左到右，上升的依次加 1，下降或者相等的填 1
// 第二次从右到左，上升的依次加 1，下降或者相等的不管
// (注意最高点可能之前填充过，需要取 max 值，才能同时满足两边的需求)
// 第二次处理完后计算总和，省得另开一个循环
