/**
 * 20. Valid Parentheses
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var arr = [],
    	code = {
    		'{' : {'dir': 'left', 'no' : 1},
    		'[' : {'dir': 'left', 'no' : 2},
    		'(' : {'dir': 'left', 'no' : 3},
    		')' : {'dir': 'right', 'no' : 3},
    		']' : {'dir': 'right', 'no' : 2},
    		'}' : {'dir': 'right', 'no' : 1}
    	},
    	len = s.length;

    if (len === 0) {
    	return true;
    }

    
    for (var i = 0; i < len; i++) {

    	if (arr.length === 0) {
    		arr.push(s[i]);
    		continue;
    	}

    	if (code[s[i]]['dir'] === code[arr[arr.length - 1]]['dir']) {
    		arr.push(s[i]);
    	} else if (code[s[i]]['no'] === code[arr[arr.length - 1]]['no']) {
    		arr.pop();
    	} else {
    		return false;
    	}

    }

    if (arr.length > 0) {
    	return false;
    } else {
    	return true;
    }

};

// 遍历存到数组
// 左括号的话，下一个必须与当前的闭合或者同方向
// 右括号的话，必须与前一个闭合
// 闭合就删掉
