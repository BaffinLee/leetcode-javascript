/**
 * 264. Ugly Number II
 *
 * Write a program to find the n-th ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
 * 
 * Note that 1 is typically treated as an ugly number.
 * 
 * Hint:
 * 
 * The naive approach is to call isUgly for every number until you reach the nth one. Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.
 * An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.
 * The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: L1, L2, and L3.
 * Assume you have Uk, the kth ugly number. Then Uk+1 must be Min(L1 * 2, L2 * 3, L3 * 5).
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
    var l1 = 0,
    	l3 = 0,
    	l5 = 0,
    	dp = [1],
    	tmp = 0;

    if (n < 1) {
    	return 0;
    }

    for (var i = 1; i < n; i++) {
    	
    	tmp = Math.min(dp[l5] * 5, dp[l3] * 3, dp[l1] * 2);

    	if (tmp === dp[l1] * 2) {
    		l1++;
    	} 

    	if (tmp === dp[l3] * 3) {
    		l3++;
    	} 

    	if (tmp === dp[l5] * 5) {
    		l5++;
    	}

    	dp.push(tmp);

    }

    return dp[n - 1];
};

// 设置三个 index，一个结果数组
// 结果数组第一个为 1 
// 取结果数组中，三个 index 对应的值，乘 2 、3、5，取最小值
// 更新 index
// 循环即可，结果数组最后一个为第 n 个丑数
