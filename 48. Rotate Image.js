/**
 * 48. Rotate Image
 * 
 * You are given an n x n 2D matrix representing an image.
 * 
 * Rotate the image by 90 degrees (clockwise).
 * 
 * Note:
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * 
 * Example 1:
 * 
 * Given input matrix = 
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ],
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 *   [7,4,1],
 *   [8,5,2],
 *   [9,6,3]
 * ]
 * 
 * Example 2:
 * 
 * Given input matrix =
 * [
 *   [ 5, 1, 9,11],
 *   [ 2, 4, 8,10],
 *   [13, 3, 6, 7],
 *   [15,14,12,16]
 * ], 
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 *   [15,13, 2, 5],
 *   [14, 3, 4, 1],
 *   [12, 6, 8, 9],
 *   [16, 7,10,11]
 * ]
 */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	var n = matrix.length;
	var n2 = Math.floor(n / 2);
	// 1 2 3     7 8 9
	// 4 5 6  => 4 5 6
	// 7 8 9     1 2 3
	for (var i = 0; i < n2; i++) {
			for (var j = 0; j < n; j++) {
					swap(matrix, i, j, n - 1 - i, j);
			}
	}
	// 7 8 9     7 4 1
	// 4 5 6  => 8 5 2
	// 1 2 3     9 6 3
	for (var i = 0; i < n; i++) {
			for (var j = i + 1; j < n; j++) {
					swap(matrix, i, j, j, i);
			}
	}
};

var swap = function (matrix, x1, y1, x2, y2) {
	var tmp = matrix[x1][y1];
	matrix[x1][y1] = matrix[x2][y2];
	matrix[x2][y2] = tmp;
};

// 见注释
// 顺时针 90°：先上下倒置，再对角倒置
// 逆时针 90°：先左右倒置，再对角倒置
