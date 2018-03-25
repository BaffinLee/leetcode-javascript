/**
 * Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var res = [-1, -1];
    var left = find(nums, target, true);
    var right = find(nums, target, false);
    if (!nums.length) return res;
    if (left > right) return res;
    return [left, right];
};

var find = function (nums, target, findLeft) {
    var left = 0;
    var right = nums.length - 1;
    var mid = 0;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (findLeft && nums[mid] === target)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return findLeft ? left : right;
};

// 二分查找
// 分两次，第一次找左边位置，第二次找右边位置
// 中间值小于目标，继续去右半部分找
// 中间值大于目标，继续去左半部分找
// 中间值等于目标，找左位置时，继续去左半部分找；
//               找右位置时，继续去右半部分找。
// 最终不能找到的话，左位置是会大于右位置的，否则代表找到
