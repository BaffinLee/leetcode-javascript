/**
 * 66. Plus One
 * 
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * 
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * 
 * The digits are stored such that the most significant digit is at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = digits.length - 1;
    var val = 0;
    var carry = 1;
    while (i >= 0 && carry) {
        val = digits[i] + carry;
        carry = Math.floor(val / 10);
        digits[i] = val % 10;
        i--;
    }
    if (carry) digits.unshift(carry);
    return digits;
};
