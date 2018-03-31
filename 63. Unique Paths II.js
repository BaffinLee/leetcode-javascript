/**
 * 63. Unique Paths II
 * 
 * Follow up for "Unique Paths":
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * For example,
 * There is one obstacle in the middle of a 3x3 grid as illustrated below.
 * [
 *   [0,0,0],
 *   [0,1,0],
 *   [0,0,0]
 * ]
 * The total number of unique paths is 2.
 * 
 * Note: m and n will be at most 100.
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = (obstacleGrid[0] || []).length;
    var dp = Array(m);
    var left = 0;
    var top = 0;

    if (!m || !n) return 0;
    
    for (var i = 0; i < m; i++) {
        dp[i] = Array(n);
        for (var j = 0; j < n; j++) {
            left = (j === 0 || obstacleGrid[i][j - 1] === 1) ? 0 : dp[i][j - 1];
            top = (i === 0 || obstacleGrid[i - 1][j] === 1) ? 0 : dp[i - 1][j];
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : ((i === 0 && j === 0) ? 1 : (left + top));
        }
    }
    
    return dp[m - 1][n - 1];
};

// dp[i][j] 代表到达该点的路径数量
// 该点可以从左边点或上边点到达
// 也就是 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
// 考虑特殊情况：
// 该点为障碍，dp[i][j] = 0;
// 左边点为障碍或不存在，left = 0;
// 上边点点为障碍或不存在，top = 0;
// 左边点与上边点均不存在，dp[i][j] = 1;
