/**
 * 70. Climbing Stairs
 * 
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * Input: 2
 * Output:  2
 * 
 * Explanation:  There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: 3
 * Output:  3
 * 
 * Explanation:  There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	var dp = [0, 1];
	for (var i = 0; i < n; i++) {
			dp = [dp[1], dp[0] + dp[1]];
	}
	return dp[1];
};

// f(x) = f(x - 1) + f(x - 2)
// 这里用了滚动数组，只保留前两个值
// 注意处理 n = 0, 1, 2 时的特殊情况
