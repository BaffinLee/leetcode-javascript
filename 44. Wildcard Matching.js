/**
 * 44. Wildcard Matching
 * 
 * Implement wildcard pattern matching with support for '?' and '*'.
 * 
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * 
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * 
 * bool isMatch(const char *s, const char *p)
 * 
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "*") → true
 * isMatch("aa", "a*") → true
 * isMatch("ab", "?*") → true
 * isMatch("aab", "c*a*b") → false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var dp = Array(p.length + 1).fill(0).map(_ => ({}));
    return test(s, p, 0, 0, dp);
};

var test = function (s, p, sIndex, pIndex, dp) {
    if (dp[pIndex][sIndex] !== undefined) return dp[pIndex][sIndex];
    
    var sNow = s[sIndex];
    var pNow = p[pIndex];
    var res = false;
    
    if (pNow === undefined) return sNow === undefined;
    if (sNow === undefined) {
        for (var i = pIndex; i < p.length; i++) {
            if (p[i] !== '*') return false;
        }
        return true;
    }
    
    if (sNow === pNow || pNow === '?') {
        res = test(s, p, sIndex + 1, pIndex + 1, dp);
    } else if (pNow === '*') {
        res = test(s, p, sIndex, pIndex + 1, dp) || test(s, p, sIndex + 1, pIndex + 1, dp) || test(s, p, sIndex + 1, pIndex, dp);
    }
    
    dp[pIndex][sIndex] = res;
    
    return res;
};

// dp[i][j] 代表当正则第i位匹配字符串第j位时，是否match
// TODO: 性能问题
