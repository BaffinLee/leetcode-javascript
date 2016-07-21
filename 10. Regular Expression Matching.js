/**
 * 10. Regular Expression Matching
 *
 * Implement regular expression matching with support for '.' and '*'.
 * 
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 * 
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
	var m = s.length;
    var n = p.length;
    var dp = [];
    var tmp = [];
    
    for(var i = 0; i <= m; i++) {
        tmp = [];
        
        for(var j = 0; j <= n; j++) {
            tmp.push(false);
        }
        
        dp.push(tmp);
    }

    dp[0][0] = true;

    for (i = 0; i <= m; i++) {
        
        for (j = 1; j <= n; j++) {
            
            if (p[j-1] != '*') {
                dp[i][j] = i > 0 && dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '.');
            } else {
                dp[i][j] = dp[i][j-2] || (i>0 && dp[i-1][j] && (s[i-1] == p[j-2] || p[j-2] == '.'));
            }

        }
    }

    return dp[m][n];

};

// 动态规划
