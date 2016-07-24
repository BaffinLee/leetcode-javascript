/**
 * 22. Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * For example, given n = 3, a solution set is:
 * 
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    var res = [],
    	generate = function (left, right, s, n) {
	
			if (right === n) {
				res.push(s);
				return;
			} else {
				
				if (left < n) {
					generate(left + 1, right, s + '(', n);
				}

				if (right < left) {
					generate(left, right + 1, s + ')', n);
				}

			}

		};

    generate(0, 0, '', n);

    return res;

};

// 递归求解
// 右括号够了为终止条件，结果存入数组
// 左括号不够就可以加
// 右括号少于左括号也可以加
