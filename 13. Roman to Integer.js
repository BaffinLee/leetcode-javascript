/**
 * 13. Roman to Integer
 *
 * Given a roman numeral, convert it to an integer.
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var roman = {
	    	'I': 1,
	        'V': 5,
	        'X': 10,
	        'L': 50,
	        'C': 100,
	        'D': 500,
	        'M': 1000
    	},
    	result = 0,
    	tmp1,
    	tmp2;

    for (var i = 0; i < s.length; i++) {

    	tmp1 = roman[s[i]];
    	tmp2 = (i + 1 === 0 : s.length ? roman[s[i+1]]);

    	if (tmp1 < tmp2) {
    		result -= tmp1;
    	} else {
    		result += tmp1;
    	}

    }

    return result;
};


// 定义罗马字符映射表 roman
// 遍历字符
// 根据映射表，找出代表的数字
// 比后一个数字大就减去
// 否则加上
