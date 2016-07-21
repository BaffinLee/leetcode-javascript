/**
 * 8. String to Integer (atoi)
 *
 * Implement atoi to convert a string to an integer.
 * 
 * Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases
 * 
 * Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
 * 
 * Update (2015-02-10):
 * The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {

    var s= str.match(/^\s*[+-]?\d+/),
    	INT_MAX = 2147483647,
	    INT_MIN = - INT_MAX - 1,
	    res = 0;
    
    if(s && s.length > 0) {
    	res = parseInt(s[0]);
    }

    if (res < INT_MIN) {
    	res = INT_MIN;
    }

    if (res > INT_MAX) {
    	res = INT_MAX;
    }

    return res;

};

// leetcode 的意思是需要输出 int，不要 floor double 之类
// 有效的数字之前只能有空格，否则为 0
// 不能超出 int 范围
