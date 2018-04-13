/**
 * 60. Permutation Sequence
 * 
 * The set [1,2,3,…,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order,
 * We get the following sequence (ie, for n = 3):
 * 
 *  "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * Given n and k, return the kth permutation sequence.
 * 
 * Note: Given n will be between 1 and 9 inclusive.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
	var str = '';
	var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]; // n!
	var tmp1 = 0;
	var tmp2 = 0;
	
	k--;
	
	for (var j = n; j >= 1; j--) {
		tmp1 = factorial[j - 1];
		tmp2 = Math.floor(k / tmp1);
		
		k %= tmp1;
		str += nums[tmp2];
		
		nums.splice(tmp2, 1);
	}
	
	return str;
};

// 用回溯的方法会超时
// 这个是数学规律解的，就是依次找出放在第 index 位的数字
// k-- 这里比较难理解，是用来纠正 k 正好整除于某个阶乘数的特殊情况，即 k % factorial[i] === 0 时
// TODO: 数组 splice 时应该会造成性能问题
