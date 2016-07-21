/**
 * 4. Median of Two Sorted Arrays
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    var len1 = nums1.length,
    	len2 = nums2.length,
    	total = len1 + len2;

    if (total % 2) {
    	return findKthOfTwoSortedArrays(nums1, len1, nums2, len2, parseInt(total / 2 + 1));
    } else {
    	return (findKthOfTwoSortedArrays(nums1, len1, nums2, len2, total / 2)
    			+ findKthOfTwoSortedArrays(nums1, len1, nums2, len2, total / 2 + 1)) / 2;
    }

};

function findKthOfTwoSortedArrays (p, m, q, n, k) {

	if (m > n) {
		return findKthOfTwoSortedArrays(q, n, p, m, k);
	}

	if (m === 0) {
		return q[k - 1];
	}

	if (k === 1) {
		return Math.min(p[0], q[0]);
	}

	var pa = Math.min(parseInt(k / 2), m),
		qa = k - pa;

	if (p[pa - 1] < q[qa - 1]) {
		return findKthOfTwoSortedArrays(p.slice(pa), m - pa, q, n, k - pa);
	} else if (q[qa - 1] < p[pa - 1]) {
		return findKthOfTwoSortedArrays(p, m, q.slice(qa), n - qa, k - qa);
	} else {
		return p[pa - 1];
	}

}

// 结论1：某个数组中有一半的元素不超过数组的中位数，有一半的元素不小于中位数（如果数组中元素个数是偶数，那么这里的一半并不是严格意义的1/2）。
// 结论2：如果我们去掉数组比中位数小的k个数，再去掉比中位数大的k个数，得到的子数组的中位数和原来的中位数相同

// 转化成 求两个已经排序的数组的第 k 个数字的问题
// 在这两个数组的前一部分，各取出加起来为 k 的一部分，比较这部分的最后一个
// 更小的那部分可以去除，不会出现在这里
// 去除后更新数组及其长度，更新 k ， 递归
