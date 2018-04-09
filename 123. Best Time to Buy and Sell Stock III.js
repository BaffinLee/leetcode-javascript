/**
 * 123. Best Time to Buy and Sell Stock III
 * 
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 * 
 * Note:
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var buy1 = Number.MIN_SAFE_INTEGER;
	var sell1 = 0;
	var buy2 = Number.MIN_SAFE_INTEGER;
	var sell2 = 0;
	var len = prices.length;
	for (var i = 0; i < len; i++) {
			buy1 = Math.max(buy1, -prices[i]);
			sell1 = Math.max(sell1, buy1 + prices[i]);
			buy2 = Math.max(buy2, sell1 - prices[i]);
			sell2 = Math.max(sell2, buy2 + prices[i]);
	}
	return sell2;
};

// 重点就是让 -buy1 + sell1 - buy2 + sell2 最大
