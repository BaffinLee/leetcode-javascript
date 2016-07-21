/**
 * 9. Palindrome Number
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 * 
 * Some hints:
 * Could negative integers be palindromes? (ie, -1) (NO)
 * 
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 * 
 * You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
 * 
 * There is a more generic way of solving this problem.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

	var str = "" + x,
		l = 0,
		r = str.length - 1;

	while (l < r) {

		if (str[r] !== str[l]) {
			return false;
		}

		l++;
		r--;
	}

	return true;

};

// 转化为字符串，头尾指针判断是否相等
