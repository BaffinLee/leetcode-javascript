/**
 * 122. Best Time to Buy and Sell Stock II
 * 
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var max = 0;
	var len = prices.length;
	for (var i = 1; i < len; i++) {
			if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];
	}
	return max;
};

// 无限次的买入抛出，把所有上升的价格当做利润就好
// 即每次低的时候买入，高的时候抛出
