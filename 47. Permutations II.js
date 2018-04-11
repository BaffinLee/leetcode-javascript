/**
 * 47. Permutations II
 * 
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 * 
 * For example,
 * [1,1,2] have the following unique permutations:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	var res = [];

	nums.sort((a, b) => (a - b));
	dfs(res, [], nums);

	return res;
};

var dfs = function (res, arr, nums) {
	var len = nums.length;
	var tmp1 = null;
	var tmp2 = null;

	if (!len) return res.push(arr);

	for (var i = 0; i < len; i++) {
		if (nums[i] === nums[i - 1]) continue;
				
		tmp1 = Array.from(arr);
		tmp1.push(nums[i]);

		tmp2 = Array.from(nums);
		tmp2.splice(i, 1);

		dfs(res, tmp1, tmp2);
	}
};

// 跟之前一题的差别是可能有重复的数字，那就先排序一下，遇到重复的数字跳过就好
