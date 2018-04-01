/**
 * 64. Minimum Path Sum
 * 
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example 1:
 * [[1,3,1],
 *  [1,5,1],
 *  [4,2,1]]
 * 
 * Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = (grid[0] || []).length;
    var dp = Array(m);
    var left = 0;
    var top = 0;
    
    if (!m || !n) return 0;
    
    for (var i = 0; i < m; i++) {
        dp[i] = Array(n);
        for (var j = 0; j < n; j++) {
            top = i === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];
            left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j - 1];
            dp[i][j] = grid[i][j] + (i === 0 && j === 0 ? 0 : Math.min(left, top));
        }
    }
    
    return dp[m - 1][n - 1];
};

// dp[i][j] 代表到达此位置的最小sum
// dp[i][j] = min(dp[i - 1][j] + dp[i][j - 1]) + grid[i][j];
