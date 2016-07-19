/**
 * 1. Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * UPDATE (2016/2/13):
 * The return format had been changed to zero-based indices. Please read the above updated description carefully.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j ++) {
            if (i === j) {
                continue;
            }
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

