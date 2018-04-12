/**
 * 50. Pow(x, n)
 * 
 * Implement pow(x, n).
 * 
 * Example 1:
 * 
 * Input: 2.00000, 10
 * Output: 1024.00000
 * 
 * Example 2:
 * 
 * Input: 2.10000, 3
 * Output: 9.26100
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n === 0) return 1;
	if (n > 0) return pow(x, n);
	if (n < 0) return 1 / pow(x, -n);
};

var pow = function (x, n) {
	if (n === 1) return x;
	var num = pow(x, Math.floor(n / 2));
	if (n % 2 === 0) {
			return num * num;
	} else {
			return x * num * num;
	}
};

// 二分、递归
// 注意 n 小于 0 的情况
