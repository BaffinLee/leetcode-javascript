/**
 * 118. Pascal's Triangle
 *
 * Given numRows, generate the first numRows of Pascal's triangle.
 * 
 * For example, given numRows = 5,
 * Return
 *
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = [];
    for (var i = 0; i < numRows; i++) {
    	arr[i] = [];
    	for (var j = 0; j <= i; j++) {
    		if (j === 0 || j === i) {
    			arr[i][j] = 1;
    		} else {
    			arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    		}
    	}
    }
    return arr;
};