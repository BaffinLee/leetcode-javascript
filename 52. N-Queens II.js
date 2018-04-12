/**
 * 52. N-Queens II
 * 
 * Follow up for N-Queens problem.
 * 
 * Now, instead outputting board configurations, return the total number of distinct solutions.
 * 
 * ![](https://leetcode.com/static/images/problemset/8-queens.png)
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
	if (n === 1 || n >= 4) return dfs([], n, 0);
	return 0;
};

var dfs = function (points, n, index) {
	var res = 0;
	if (points.length === n) return 1;
	for (var i = index; i < n; i++) {
		if (points.length !== i) return res;
		for (var j = 0; j < n; j++) {
			if (!isValid(points, [i, j])) continue;
			points.push([i, j]);
			res += dfs(points, n, i + 1);
			points.pop();
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

// 跟之前的题不同的是，退出的时候要返回 count
