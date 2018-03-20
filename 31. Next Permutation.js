/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place, do not allocate extra memory.
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	var len = nums.length;
	for (var i = len - 2; i >= 0; i--) {
			if (nums[i] >= nums[i + 1]) continue;
			for (var j = len - 1; j >= 0; j--) {
					if (nums[j] <= nums[i]) continue;
					swap(nums, i, j);
					reverse(nums, i + 1, len - 1);
					return;
			}
			swap(nums, i, len - 1);
			reverse(nums, i + 1, len - 1);
			return;
	}
	reverse(nums, 0, len - 1);
};

var swap = function (arr, from, to) {
	var tmp = arr[from];
	arr[from] = arr[to];
	arr[to] = tmp;
};

var reverse = function (arr, start, end) {
	while (start < end) {
			swap(arr, start, end);
			start++;
			end--;
	}
};

// 题意：比如给三个数 1、2、3， 排列可以是 123、132、213、231、312、321。
//      输入 123 ，你要输出下一个排列 132；输入 321，因为没有下一下了，就输出第一个 123.

// 解：比如 123498765，可以看到 4 后面的都比它大，拿个比它大的最小的数过来交换一下
//     即得 123598764，然后把刚刚 4 位置后面的重新排列一下，其实也就是翻转一下，得 123546789，这就是下一个排列
//     如果没找到，说明输入的是最后一个排列，那就整体翻转一下，输出第一个排列
