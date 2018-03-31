/**
 * 62. Unique Paths
 * 
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * ![](https://leetcode.com/static/images/problemset/robot_maze.png)
 * Above is a 3 x 7 grid. How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = Array(m);
    if (!m || !n) return 0;
    for (var i = 0; i < m; i++) {
        dp[i] = Array(n);
        for (var j = 0; j < n; j++) {
            if (j > 0 && i > 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            else if (j > 0 && i === 0) dp[i][j] = dp[i][j - 1];
            else if (j === 0 && i > 0) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = 1;
        }
    }
    return dp[m - 1][n - 1];
};

// dp[i][j] 代表到达该点的路径数量
// 该点可以从左边点或上边点到达
// 也就是 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
