/**
 * Determine if a Sudoku is valid, according to: [Sudoku Puzzles](http://sudoku.com.au/TheRules.aspx) - The Rules.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 * 
 * ![](http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)
 * A partially filled sudoku which is valid.
 * 
 * Note:
 * A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var map = {};
    var tmp = 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            tmp = board[i][j];
            if (tmp === '.') continue;
            if (map['i' + i + tmp] || map['j' + j + tmp] || map['b' + Math.floor(i / 3) + Math.floor(j / 3) + tmp]) return false;
            map['i' + i + tmp] = 1;
            map['j' + j + tmp] = 1;
            map['b' + Math.floor(i / 3) + Math.floor(j / 3) + tmp] = 1;
        }
    }
    return true;
};

// 哈希表
// i、j、b 开头的键分别代表 某行、某列、某块 中，某数字是否已存在
