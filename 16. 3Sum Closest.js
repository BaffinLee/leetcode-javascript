/**
 * 16. 3Sum Closest
 *
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * 
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    var numss = nums.sort(function (a, b) {return a - b;}),
    	now = 0,
    	len = numss.length,
    	l = 1,
    	r = len - 1,
    	tmp = 0;

    now = numss[0] + numss[r] + numss[l];

    for (var i = 0; i < len; i++) {

    	if (i > 0 && numss[i] === numss[i-1]) {
    		continue;
    	}

    	l = i + 1;
    	r = len -1;

		while (l < r) {

			tmp = numss[i] + numss[r] + numss[l];

			if (tmp === target) {
				return target;
			} else if (Math.abs(target - tmp) < Math.abs(target - now)) {
				now = tmp;
			}

			if (tmp > target) {
				r--;
			} else {
				l++;
			}

		}

    }
    
    return now;
};

// 类似数组求三个的值等于固定数
// 遍历数组，头尾指针遍历其余数，求和，更新
