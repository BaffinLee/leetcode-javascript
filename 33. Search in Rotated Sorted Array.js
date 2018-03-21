/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * 
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * 
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	var len = nums.length
	var left = 0;
	var right = len - 1;
	var mid = 0;
	
	while (left <= right) {
			mid = left + Math.floor((right - left) / 2);
			if (nums[mid] === target) return mid;
			if (nums[mid] > nums[right]) {
					if (nums[left] <= target && target < nums[mid]) {
							right = mid - 1;
					} else {
							left = mid + 1;
					}
			} else {
					if (nums[mid] < target && target <= nums[right]) {
							left = mid + 1;
					} else {
							right = mid - 1;
					}
			}
	}
	
	return -1;
};

// 题意：输入数组是已排序的数组在某个点上翻转了一下，比如 01234 在 2 上翻转，变成 23401，在输入数组里找是否存在某个数
// 解：二分查找
// （规律：输入数组中取任意一段，从中间分开，必定有一边是已排序的）
// 先通过中间值与末尾值比大小，判断已排序的是左边还是右边，当然也可以通过中间值跟起点值比大小来判断
// (目标值等于中间值的话，就结束了，其实也包括二分查找的极限情况，区间里只剩一个值)
// 然后判断目标值是否在已排序的那边，在的话在这边继续查找，否则去另一半继续查找
