/**
 * 17. Letter Combinations of a Phone Number
 *
 * Given a digit string, return all possible letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * 
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    var dial = [
    		[""],
    		["*"],
    		["a", "b", "c"],
    		["d", "e", "f"],
    		["g", "h", "i"],
    		["j", "k", "l"],
    		["m", "n", "o"],
    		["p", "q", "r", "s"],
    		["t", "u", "v"],
    		["w", "x", "y", "z"]
    	],
    	len = digits.length,
    	index = 0,
    	res = [],
    	tmp = [];

    if (len === 0 || digits.indexOf('0') !== -1) {
    	return [];
    }

    res = res.concat(dial[digits[index]]);
    index = 1;

    while (index < len) {

    	for (var i = 0; i < res.length; i++) {
    		
    		for (var j = 0; j < dial[digits[index]].length; j++) {
    			tmp.push(res[i] + dial[digits[index]][j]);
    		}

    	}

    	res = tmp;
    	tmp = [];
    	index++;
    }

    return res;

};



// leetcode 里面，出现 0 就返回 []
// 1 是 *
// 套了三次循环，有点低效……
