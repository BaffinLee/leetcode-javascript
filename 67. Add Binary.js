/**
 * 67. Add Binary
 * 
 * Given two binary strings, return their sum (also a binary string).
 * 
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var len1 = a.length;
    var len2 = b.length;
    var max = Math.max(len1, len2);
    var res = '';
    var carry = 0;
    var val = 0;
    
    for (var i = 0; i < max; i++) {
        val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
        carry = Math.floor(val / 2);
        res = (val % 2) + res;
    }
    
    if (carry) res = 1 + res;
    
    return res;
};
