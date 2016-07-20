/**
 * 15. 3Sum
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * 
 * Note: The solution set must not contain duplicate triplets.
 * 
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var numArr = nums.sort(function (a, b) {
    	return a - b;
    });

    var len = numArr.length;

    var result = [];

    var target, r, l;

    for (var i = 0; i < len - 2; i++) {
        
        if (i === 0 || numArr[i] > numArr[i - 1]) {
            
            target = 0 - numArr[i];
            r = i + 1;
            l = len - 1;
            
            while (r < l) {
                
                if (numArr[r] + numArr[l] === target) {
                    result.push([numArr[i], numArr[r], numArr[l]]);
                    r++;
                } else if (numArr[r] + numArr[l] < target) {
                    r++;
                } else {
                    l--;
                }

            }

        }

    }

    return result;
};

// 先排序，再遍历，头尾指针查找答案，找到合适的，不与上条结果重复就加入结果
