/**
 * 43. Multiply Strings
 * 
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * Note:
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var res = Array(len1 + len2).fill(0);
    var carry = 0;
    var val = 0;
    var index = 0;
    
    for (var i = len1 - 1; i >= 0; i--) {
        carry = 0;
        for (var j = len2 - 1; j >= 0; j--) {
            index = len1 + len2 - 2 - i - j;
            val= (num1[i] * num2[j]) + carry + res[index];
            carry = Math.floor(val / 10);
            res[index] = val % 10;
        }
        if (carry) res[index + 1] = carry;
    }
    
    while (res.length > 1 && res[res.length - 1] === 0) res.pop();
    
    return res.reverse().join('');
};

// 模拟手算，就是小学教的那种写竖式的乘法
// 注意：
// 从后面开始，即个位数开始算
// carry 是上次的进位，要注意最后的进位要加上去，最开始进位要清零
// 可能会多出前导 0 ，要去掉；但是全是 0 的时候，要保留一个
