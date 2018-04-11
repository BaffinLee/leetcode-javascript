/**
 * 51. N-Queens
 * 
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
 * 
 * ![](https://leetcode.com/static/images/problemset/8-queens.png)
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
 * 
 * For example,
 * There exist two distinct solutions to the 4-queens puzzle:
 * 
 * [
 *  [".Q..",  // Solution 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 * 
 *  ["..Q.",  // Solution 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	var res = [];
	if (n === 1 || n >= 4) dfs(res, [], n, 0);
	return res;
};

var dfs = function (res, points, n, index) {
	for (var i = index; i < n; i++) {
			if (points.length !== i) return;
			for (var j = 0; j < n; j++) {
					if (isValid(points, [i, j])) {
							points.push([i, j]);
							dfs(res, points, n, i + 1);
							if (points.length === n) res.push(buildRes(points));
							points.pop();
					}
			}
	}
};

var buildRes = function (points) {
	var res = [];
	var n = points.length;
	for (var i = 0; i < n; i++) {
			res[i] = '';
			for (var j = 0; j < n; j++) {
					res[i] += (points[i][1] === j ? 'Q' : '.');
			}
	}
	return res;
};

var isValid = function (oldPoints, newPoint) {
	var len = oldPoints.length;
	for (var i = 0; i < len; i++) {
			if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
			if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
	}
	return true;
};

// dfs
