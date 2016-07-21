/**
 * 7. Reverse Integer
 *
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * 
 * Have you thought about this?
 * Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
 * If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 * 
 * Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
 * 
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 * 
 * Update (2014-11-10):
 * Test cases had been added to test the overflow behavior.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

	var res = 0,
	    INT_MAX = 2147483647,
	    INT_MIN = - INT_MAX - 1;

	while (x !== 0) {
        
		res = res * 10 + x % 10;
		x = parseInt(x / 10);

		if(res > INT_MAX || res < INT_MIN){
            return 0;
        }

	}

    return res;
};

// 考虑 INT 的范围，防止溢出
// 数字计算应该比遍历字符串快
