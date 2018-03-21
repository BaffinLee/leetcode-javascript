/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 * 
 * For "(()", the longest valid parentheses substring is "()", which has length = 2.
 * 
 * Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	var max = 0;
	var len = s.length;
	var dp = Array(len).fill(0);
	var tmp = 0;
	var getNum = function (index) {
			return index >= 0 ? dp[index] : 0;
	};

	for (var i = 1; i < len; i++) {
			if (s[i] === ')') {
					if (s[i - 1] === '(') {
							dp[i] = getNum(i - 2) + 2;
					} else {
							tmp = i - dp[i - 1] - 1;
							if (tmp >= 0 && s[tmp] === '(') {
									dp[i] = dp[i - 1] + getNum(tmp - 1) + 2;
							}
					}
					max = Math.max(max, dp[i]);
			}
	}

	return max;
};

// 动态规划
// 1. 建立等长的 dp 数组，填充 0，每个数值代表 s 相应位置处的连续匹配括号的长度
// 2. '(' 不影响结果，不处理，数值为 0
// 3. ')' 的上一个是 '(' 的话，配对，数值为上一数值 + 2
// 4. ')' 的上一个是 ')' 时，这时候要看上一个数值，上一个数值代表连续匹配的括号数量，记为 n
//                          如果回退 n + 1 个，正好是个 '(' 的话，配对，数值为上一数值 + (回退 n + 2 个的数值) + 2
//                                            否则是不匹配，不处理，数值为 0
