/**
 * 42. Trapping Rain Water
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * For example,
 * Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 * 
 * ![](http://www.leetcode.com/static/images/problemset/rainwatertrap.png)
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	var res = 0;
	var left = 0;
	var right = height.length - 1;
	var leftMax = 0;
	var rightMax = 0;
	
	while (left < right) {
			if (height[left] < height[right]) {
					if (height[left] >= leftMax) {
							leftMax = height[left];
					} else {
							res += leftMax - height[left];
					}
					left++;
			} else {
					if (height[right] >= rightMax) {
							rightMax = height[right];
					} else {
							res += rightMax - height[right];
					}
					right--;
			}
	}
	
	return res;
};

// 双指针

