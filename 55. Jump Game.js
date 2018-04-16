/**
 * 55. Jump Game
 * 
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * For example:
 * A = [2,3,1,1,4], return true.
 * 
 * A = [3,2,1,0,4], return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	var len = nums.length;
	var max = 0;
	for (var i = 0; i < len; i++) {
			if (i > max) return false;
			max = Math.max(max, i + nums[i]);
	}
	return true;
};
