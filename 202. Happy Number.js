/**
 * 202. Happy Number
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 19 is a happy number
 * 
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    var hash = {},
    	res = 0,
    	tmp = 0;

    if (n < 1) {
    	return false;
    }

    while (res !== 1 && !hash[n]) {
    	
    	hash[n] = true;

    	while (n > 0) {
    		
    		tmp += Math.pow(n % 10, 2);
    		n = parseInt(n / 10);

    	}

    	res = tmp;
    	tmp = 0;
    	n = res;

    }

    return res === 1;
};

// hash 表来存储历史结果，判断是否重复
// 循环，条件是 不为 1 和 不重复
