/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var len = strs.length,
    	cur = "",
    	result = "";

    if (len === 0) {
    	return result;
    } else if (len === 1) {
    	return strs[0];
    }

    for (var i = 0; i < strs[0].length; i++) {

    	cur = strs[0][i];

    	for (var j = 1; j < len; j++) {
    		
    		if (strs[j].length === i) {
    			return result;
    		}

    		if (strs[j][i] !== cur) {
    			return result;
    		}

    	}

    	result += cur;

    }

    return result;
};

// 找出字符串数组的通用最长前缀
