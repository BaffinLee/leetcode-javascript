/**
 * 258. Add Digits
 * 
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * For example:
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};

// 最后输出单数，总共只有9种，依次循环，结果应该与 num % 9 有关
// 