/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * You may assume that there will be only one unique solution.
 * 
 * ![](http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)
 * A sudoku puzzle...
 * 
 * ![](http://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)
 * ...and its solution numbers marked in red.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
	solve(board);
};

var solve = function (board) {
	for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
					if (board[i][j] !== '.') continue;
					for (var k = 1; k <= 9; k++) {
							if (isValid(board, i, j, '' + k)) {
									board[i][j] = '' + k;
									if (solve(board)) {
											return true;
									} else {
											board[i][j] = '.';
									}
							}
					}
					return false;
			}
	}
	return true;
};

var isValid = function (board, i, j, num) {
	for (var k = 0; k < 9; k++) {
			if (board[i][k] === num) return false;
			if (board[k][j] === num) return false;
			if (board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + (k % 3)] === num) return false;
	}
	return true;
};

// dfs
// 遍历每个点，尝试填入 1~9 的数字，判断是否可以，不行就回滚，直到可以
