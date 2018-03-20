/**
 * 30. Substring with Concatenation of All Words
 *
 * You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.
 * 
 * For example, given:
 * s: "barfoothefoobarman"
 * words: ["foo", "bar"]
 * 
 * You should return the indices: [0,9].
 * (order does not matter).
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	var sLen = s.length;
	var wordLen = (words[0] || '').length;
	var wordCount = words.length;
	var map = words.reduce(function (res, item) {
			if (!res[item]) res[item] = 0;
			res[item]++;
			return res;
	}, {});
	
	if (!sLen || !wordLen || !wordCount) return words.map(() => 0);
	
	var now = 0;
	var res = [];
	
	while (now <= sLen - (wordLen * wordCount)) {
			if (test(s, now, words, map, sLen, wordLen, wordCount)) res.push(now);
			now++;
	}
	
	return res;
};

var test = function (s, index, words, map, sLen, wordLen, wordCount) {
	var right = {};
	var rightNum = 0;
	var now = index;
	var tmpStr = '';
	var tmpVal = 0;
	var tmpNum = 0;

	while (now <= sLen - wordLen) {
			tmpStr = s.substr(now, wordLen);
			tmpVal = map[tmpStr];
			tmpNum = right[tmpStr] || 0;
			if (!tmpVal || tmpVal - tmpNum < 1) {
					return false;
			} else {
					right[tmpStr] = tmpNum + 1;
					rightNum++;
					now += wordLen;
					if (rightNum === wordCount) return true;
			}
	}

	return false;
};

// 把 s 的每个字符遍历过去，看看从这开始行不行
// 注意 words 里可能有重复的词，所以判断某词用没用过的时候要计数
