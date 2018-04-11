/**
 * 46. Permutations
 * 
 * Given a collection of distinct numbers, return all possible permutations.
 * 
 * For example,
 * [1,2,3] have the following permutations:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	var res = [];

	dfs(res, [], nums);

	return res;
};

var dfs = function (res, arr, nums) {
	var len = nums.length;
	var tmp1 = null;
	var tmp2 = null;

	if (!len) return res.push(arr);

	for (var i = 0; i < len; i++) {
		tmp1 = Array.from(arr);
		tmp1.push(nums[i]);

		tmp2 = Array.from(nums);
		tmp2.splice(i, 1);

		dfs(res, tmp1, tmp2);
	}
};

// [1, 2, 3] 的全排列 = （1 开头 * ([2, 3] 的全排列)
//											+ 2 开头 * ([1, 3] 的全排列)
//											+ 3 开头 * ([1, 2] 的全排列))
