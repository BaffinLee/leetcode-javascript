/**
 * 72. Edit Distance
 * 
 * Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)
 * 
 * You have the following 3 operations permitted on a word:
 * 
 * a) Insert a character
 * b) Delete a character
 * c) Replace a character
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	var n = word1.length;
	var m = word2.length;
	var dp = Array(n);
	
	for (var i = 0; i < n; i++) {
			dp[i] = Array(m);
			for (var j = 0; j < m; j++) {
					dp[i][j] = Math.min(
							getDp(i - 1, j, dp) + 1,
							getDp(i, j - 1, dp) + 1,
							getDp(i - 1, j - 1, dp) + (word1[i] === word2[j] ? 0 : 1)
					);
			}
	}
	
	return getDp(n - 1, m - 1, dp);
};

var getDp = function (i, j, dp) {
	if (i < 0 && j < 0) return 0;
	if (i < 0) return j + 1;
	if (j < 0) return i + 1;
	return dp[i][j];
};

// dp[i][j] 代表 word1 的 0 ~ i 转为 word2 的 0 ~ j 的最少步骤
// dp[i][j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (word1[i] === word2[j] ? 0 : 1));
