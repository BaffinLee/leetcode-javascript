/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * 
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * 
 *  For example, given s = "aab",
 * Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
	var len = s.length;
	var dp = Array(len).fill(0).map(_ => ({}));
	var res = Array(len + 1).fill(0).map((_, i) => (len - i - 1));
	
	for (var i = len - 1; i >= 0; i--) {
			for (var j = i; j < len; j++) {
					dp[i][j] = (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]));
					if (dp[i][j]) res[i] = Math.min(res[j + 1] + 1, res[i]);
			}
	}
	
	return res[0];
};

// 题意：给定字符串，给出最小切割次数，使得每一块都是回文（正反读是一样的）。
// 解：动态规划，dp[i][j] 代表 i 到 j 是否回文
// 从后面开始遍历，从前面开始的话，不能及时知道方案的优劣
// 依次检查当前字符 s[i] 与后面字符 s[j] 是否构成回文字符串，回文就更新数值
// 当前字符的最小切割次数 res[i] = min(res[i]，res[j + 1] + 1)
