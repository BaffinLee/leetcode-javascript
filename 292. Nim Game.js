/**
 * 292. Nim Game
 *
 * You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
 * 
 * Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.
 * 
 * For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 ? true : false;
};

// n 为 4的倍数就不会赢，假设我每次拿 x ，对方拿 4 - x，我必输
// 但是 n 不为 4 的倍数时，我只要第一次拿掉 n % 4，这样对方就和上一条分析一样，必输，我必赢
