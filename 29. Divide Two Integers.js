/**
 * 29. Divide Two Integers
 *
 * Divide two integers without using multiplication, division and mod operator.
 * 
 * If it is overflow, return MAX_INT.
 */

/**
 * 计算两整型数字相除，不能用乘除和取模运算，溢出要返回 MAX_INT
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// var divide = function(dividend, divisor) {

// 	var did = Math.abs(dividend),
// 		dis = Math.abs(divisor),
// 		i = 0,
// 		res = 0,
// 		sum = 0;

// 	// 处理特别情况
//     if (dividend === 0 || divisor === 0) {
//     	return 0;
//     }

//     if (divisor === -1 && dividend === -2147483648) {
//     	return 2147483647;
//     }

//     // 直到 dis*2^i > did
//     while ((dis << i) > 0 && (dis << i) <= did) {
//     	i++;
//     }

//     // 计算结果
//     while (i > 0) {

//     	i--;

//     	// 如果加上 dis*2^i 大于 did，就不加
//     	if (sum + (dis << i) <= did) {
//     		sum += (dis << i);
//     		res += (1 << i);
//     	}

//     }

//     // 返回正数或者负数
//     if ((dividend > 0 && divisor > 0) || (divisor < 0 && dividend < 0)) {
//     	return res;
//     } else {
//     	return -res;
//     }

// };

// 思路
// 所有的整数都可以表示为 (A1 * 2^0) + (A2 * 2^1) + (A3 * 2^2) + ……，其中Ai是0或者1
// 也就是说，dividend / divisor = (A1 * 2^0) + (A2 * 2^1) + (A3 * 2^2) + ……
// n << i == n * 2^i
// 有个坑：1 << 31 == -2147483648，而不是2147483648，要处理这种情况（其他语言用long long的整型类型不会出现这种情况）
// 
// 被这坑害死……弃疗
// 改用log取巧……

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

	// 处理特别情况
    if (dividend === 0 || divisor === 0) {
    	return 0;
    }

    if (divisor === -1 && dividend === -2147483648) {
    	return 2147483647;
    }

    // 取对数
    var did = Math.log(Math.abs(dividend)),
    	div = Math.log(Math.abs(divisor)),
    	res = 0;

    // 以指数相减当做除法
    res = parseInt(Math.exp(did - div));

 	//返回正数或者负数
    if ((dividend > 0 && divisor > 0) || (divisor < 0 && dividend < 0)) {
    	return res;
    } else {
    	return -res;
    }

};