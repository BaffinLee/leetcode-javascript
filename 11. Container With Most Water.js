/**
 * 11. Container With Most Water
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * 
 * Note: You may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    var max = 0,
    	l = 0,
    	r = height.length - 1,
    	tmp = 0;

    while (l < r) {
    	
    	tmp = Math.min(height[l], height[r]) * (r - l);

    	if (tmp > max) {
    		max = tmp;
    	}

    	if (height[l] > height[r]) {
    		r--;
    	} else {
    		l++;
    	}

    }

    return max;
};

// 题目意思是：
// height.length 根垂直于 x 轴的直线，均匀分布，height[i] 是每根的高度，求出两个线之间围成的最大的矩形的面积
// 
// 取首尾指针，依次算出面积，记录最大面积，朝着面积增大的方向缩紧首尾指针







