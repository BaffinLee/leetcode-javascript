/**
 * 18. 4Sum
 *
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * 
 * Note: The solution set must not contain duplicate quadruplets.
 * 
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * 
 * [
 * 	[-1,  0, 0, 1],
 * 	[-2, -1, 1, 2],
 * 	[-2,  0, 0, 2]
 * ]
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    var len = nums.length,
    	l = 2,
    	r = len - 1,
    	result = [],
    	tmp = 0,
    	ll,
    	rr;

    nums.sort(function (a, b) {return a- b;});

    for (var i = 0; i < len - 3; i++) {

    	if(i > 0 && nums[i] === nums[i-1]) {
    		continue;
    	}

    	for (var j = i + 1; j < len - 2; j++) {

    		if (j - 1 > i && nums[j] === nums[j-1]) {
    			continue;
    		}

    		l = j + 1;
    		r = len - 1;

    		while (l < r) {

    			rr = false;
    			ll = false;

    			tmp = nums[i] + nums[j] + nums[l] + nums[r];
    			
    			if (tmp === target) {
    				result.push([nums[i], nums[j], nums[l], nums[r]]);
    				r--;
    				l++;
    				ll = true;
    				rr = true;
    			} else if (tmp > target) {
    				r--;
    				rr = true;
    			} else {
    				l++;
    				ll = true;
    			}

    			while (rr && r > 0 && nums[r] === nums[r+1]) {
					r--;
				}
    			while (ll && l < len && nums[l] === nums[l-1]) {
					l++;
				}

    		}

    	}
    }

    return result;
};



// k sum 问题，遍历，依次固定一个值，转化为 k-1 sum，k-2 sum 之类
// 注意重复的问题
