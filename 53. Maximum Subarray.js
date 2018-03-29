/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * 
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * 
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * 
 * More practice:
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	var len = nums.length;
	var max = Number.MIN_SAFE_INTEGER;
	var before = 0;
	var now = 0;
	
	if (!len) return 0;
	
	for (var i = 0; i < len; i++) {
			now = Math.max(before + nums[i], nums[i]);
			max = Math.max(now, max);
			before = now;
	}
	
	return max;
};

// 动态规划
// 当前值 = max(前值 + 当前值,  当前值)
// 最大值 = max(当前值, max)
