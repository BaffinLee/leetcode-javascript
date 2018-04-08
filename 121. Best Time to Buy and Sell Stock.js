/**
 * 121. Best Time to Buy and Sell Stock
 * 
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * 
 * Example 1:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 5
 * 
 * max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 * 
 * Example 2:
 * Input: [7, 6, 4, 3, 1]
 * Output: 0
 * 
 * In this case, no transaction is done, i.e. max profit = 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var n = prices.length;
	var minPrice = Number.MAX_SAFE_INTEGER;
	var maxProfit = 0;
	for (var i = 0; i < n; i++) {
			if (prices[i] < minPrice) minPrice = prices[i];
			else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
	}
	return maxProfit;
};
