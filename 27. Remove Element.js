/**
 * 27. Remove Element
 *
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * 
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * 
 * Example:
 * Given input array nums = [3,2,2,3], val = 3
 * 
 * Your function should return length = 2, with the first two elements of nums being 2.
 */


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = 0;
    for (var i = 0; i < nums.length; i++) {
        if (val !== nums[i]) {
            nums[len++] = nums[i];
        }
    }
    return len;
};

// 跟26差不多，遍历数组
// 不相等就放到数组第len的位置
// 最后数组前len个就都是不与val相等的数组啦