/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * 
 * Example 1:
 * coins = [1, 2, 5], amount = 11
 * return 3 (11 = 5 + 5 + 1)
 * 
 * Example 2:
 * coins = [2], amount = 3
 * return -1.
 * 
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount <= 0) return 0;
    return change(coins, amount, {}, 0);
};

var change = function (coins, amount, dp) {
    var min = Number.MAX_SAFE_INTEGER;
    var len = coins.length;
    var left = 0;
    var val = 0;
    
    if (dp[amount] !== undefined) return dp[amount];
    
    for (var i = 0; i < len; i++) {
        left = amount - coins[i];
        
        if (left < 0) {
            continue;
        } else if (left === 0) {
            min = 1;
            break;
        } else {
            val = change(coins, left, dp);
            if (val !== -1) min = Math.min(val + 1, min);
        }
    }
    
    dp[amount] = min === Number.MAX_SAFE_INTEGER ? -1 : min;
    
    return dp[amount];
};

// dp[amount] 代表合成 amount 金额的最小硬币数
// 然后递归（分治）
