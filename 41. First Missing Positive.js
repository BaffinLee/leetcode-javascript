/**
 * 41. First Missing Positive
 * 
 * Given an unsorted integer array, find the first missing positive integer.
 * 
 * For example,
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 * 
 * Your algorithm should run in O(n) time and uses constant space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	var len = nums.length;
	var tmp = 0;
	var i = 0;
	while (i < len) {
		tmp = nums[i];
		if (tmp > 0 && tmp !== i + 1 && tmp !== nums[tmp - 1]) swap(nums, i, tmp - 1);
		else i++;
	}
	for (var j = 0; j < len; j++) {
		if (nums[j] !== j + 1) return j + 1;
	}
	return len + 1;
};

var swap = function (arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};

// 循环把 nums[i] 放到 nums[nums[i] - 1] 那里，最后 nums[i] !== i + 1 就是不对的
// 即比如 [3, 4, -2, 1] => [1, -2, 3, 4]，即缺 2
