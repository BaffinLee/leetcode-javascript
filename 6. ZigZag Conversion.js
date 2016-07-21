/**
 * 6. ZigZag Conversion
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * 
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
	var num = 2 * (numRows - 1),
		rows = [],
		tmp = 0,
		tmp2 = 0;

	if (s.length <= numRows || numRows < 2) {
		return s;
	}

	for (var i = 0; i < s.length; i++) {
		
		tmp = i % num;
		tmp2 = num - tmp;

		if (tmp < numRows) {
		    rows[tmp] = (rows[tmp] ? rows[tmp] : "") + s[i];
		} else {
			rows[tmp2] = (rows[tmp2] ? rows[tmp2] : "") + s[i];
		}
		
	}

	return rows.join("");

};

// 每个锯齿 num = 2 * (numRows - 1) 个数字
// 取余，小于 numRows 的，放入 rows[余数]
// 否则放入 rows[num - 余数]
// rows join 成为字符串
