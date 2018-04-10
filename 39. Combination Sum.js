/**
 * 39. Combination Sum
 * 
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 * 
 * The same repeated number may be chosen from C unlimited number of times.
 * 
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [2, 3, 6, 7] and target 7, 
 * A solution set is: 
 * [
 *   [7],
 *   [2, 2, 3]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	var res = [];
	var len = candidates.length;
	candidates.sort((a, b) => (a - b));
	dfs(res, [], 0, len, candidates, target);
	return res;
};

var dfs = function (res, stack, index, len, candidates, target) {
	var tmp = null;
	if (target < 0) return;
	if (target === 0) return res.push(stack);
	for (var i = index; i < len; i++) {
			if (candidates[i] > target) break;
			tmp = Array.from(stack);
			tmp.push(candidates[i]);
			dfs(res, tmp, i, len, candidates, target - candidates[i]);
	}
};

// 对树进行深度优先的搜索
// 注意解法不能重复，即下次搜索从 index 开始
