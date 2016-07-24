/**
 * 263. Ugly Number
 *
 * Write a program to check whether a given number is an ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 * 
 * Note that 1 is typically treated as an ugly number.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    
    var res = false,
    	ugly = function (n) {

    		if (n <= 0) {
    			return;
    		}

    		if (n === 1 || res) {
    			res = true;
    			return;
    		}

    		if (n % 2 === 0) {
    			ugly(n / 2);
    		} else if (n % 3 === 0) {
    			ugly(n / 3);
    		} else if (n % 5 === 0) {
    			ugly(n / 5);
    		}

    	};
    
    ugly(num);

    return res;
};

// 0 及以下都错
// 能被 2,3,5整除的话，除了该数后，继续递归
// 递归到等于 1 说明对了
