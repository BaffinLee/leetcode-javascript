/**
 * 5. Longest Palindromic Substring
 *
 * Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    var maxlen = 0,
    	start = 0,
    	end = 1,
    	k = 1,
    	len = s.length;

    for (var i = 0; i < s.length; i++) {
    	
    	k = 1;
    	while(i - k >= 0 && i + k < len && s[i - k] === s[i + k]) {
    		
    		if (2 * k + 1 > maxlen) {
    			maxlen = 2 * k + 1;
    			start = i - k;
    			end = i + k + 1;
    		}

    		k++;
    	}

    	k = 0;
    	while (i - k >= 0 && i + k + 1 < len && s[i - k] === s[i + k + 1]) {
    		
    		if (2 * (k + 1) > maxlen) {
    			maxlen = 2 * (k + 1);
    			start = i - k;
    			end = i + k + 2;
    		}

    		k++;
    	}

    }

    return s.slice(start, end);

};


// 遍历 s ，以该字符为中心，扩展测试是否回文， 或者以该字符和后一字符为中心，扩展测试是否回文
