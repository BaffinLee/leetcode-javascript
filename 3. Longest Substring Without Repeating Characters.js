/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 * 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * 
 * Given "bbbbb", the answer is "b", with the length of 1.
 * 
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    var map = {},
		len = 0,
		maxlen = 0,
		start = 0
		c = "";

    for (var i = 0; i < s.length; i++) {
    	
    	c = s[i];

    	if (map[c] !== undefined && map[c] >= start) {
    		start = 1 + map[c];
    		len = i - start;
    	}
    		
    	len++;
    	
    	map[c] = i;

    	if (len > maxlen) {
    		maxlen = len;
    	}

    }

    return maxlen;

};


// 遍历字符，字符上次出现的index存在map里，如果上次出现，重置index、start，计算len、maxlen
