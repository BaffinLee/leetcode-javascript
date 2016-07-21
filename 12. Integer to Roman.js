/**
 * 12. Integer to Roman
 *
 * Given an integer, convert it to a roman numeral.
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    var now = 0,
    	result = "",
    	tmp = 0,
    	roman = [
			['I', 'V'],
			['X', 'L'],
			['C', 'D'],
			['M'],
    	];

    while (num > 0) {
    	
    	tmp = num % 10;
    	num = parseInt(num / 10);

    	if (tmp < 4) {
    		while (tmp > 0) {
    			result = roman[now][0] + result;
    			tmp--;
    		}
    	} else if (tmp < 5) {
    		result = roman[now][0] + roman[now][1] + result;
    	} else if (tmp < 9) {
    		while (tmp > 5) {
    			result = roman[now][0] + result;
    			tmp--;
    		}
    		result = roman[now][1] + result;
    	} else {
    		result = roman[now][0] + roman[now + 1][0] + result;
    	}

    	now++;
    }

    return result;

};

// roman 里保存了一个罗马数字映射表
// 每次按 10 的倍数取余，对照映射表，化为同一问题
// 分别对 1~3、4、5~8、9，得到罗马数字
