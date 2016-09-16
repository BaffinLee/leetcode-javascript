/**
 * 28. Implement strStr()
 *
 * Implement strStr().
 * 
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

	var len = needle.length,
		hlen = haystack.length;

    if (len === 0) {
    	return 0;
    }

    for (var i = 0; i < hlen - len + 1; i++) {
    	if (haystack.substring(i, i + len) === needle) {
    		return i;
    	}
    }

    return -1;

};

// 循环，测试haystack从i位置起截取needle.length个字符，是不是和needle相等
// 是就返回i，否则最后返回-1