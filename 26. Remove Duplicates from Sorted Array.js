/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * 
 * For example,
 * Given input array nums = [1,1,2],
 * 
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 */

/**
 * 其实题目的意思是说
 * 传入 [1,2,2,3,4,4,5]
 * 希望你修改传入的数组为 [1,2,3,4,5,4,5]
 * 传入的数组是引用，直接修改，leetcode只希望你修改原数组
 * 然后返回 4，代表不重复的数字的数量
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var len = nums.length,
    	newLen = 0;

    for (var i = 0; i < len; i++) {
    	if (i + 1 < len && nums[i] === nums[i + 1]) {
    		continue;
    	} else {
    		nums[newLen] = nums[i];
    		newLen += 1;
    	}
    }

    return newLen;

};

// newLen是不重复的数量
// 遇到不重复的，就放到 nums[newLen] 里面，newLen 加一
// 这样数组的前 newLen 个都是不重复的