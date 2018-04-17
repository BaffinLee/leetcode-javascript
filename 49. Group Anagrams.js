/**
 * 49. Group Anagrams
 * 
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * 
 * Note:
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	var res = {};
	var str = '';
	var len = strs.length;
	for (var i = 0; i < len; i++) {
			str = Array.from(strs[i]).sort().join('');
			if (!res[str]) res[str] = [];
			res[str].push(strs[i]);
	}
	return Object.values(res);
};

// 把每个字符串排序一下，用哈希表存起来
