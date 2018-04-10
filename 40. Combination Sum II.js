/**
 * 40. Combination Sum II
 * 
 * Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 * 
 * Each number in C may only be used once in the combination.
 * 
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
 * A solution set is: 
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
		if (i > index && candidates[i] === candidates[i - 1]) continue;
		tmp = Array.from(stack);
		tmp.push(candidates[i]);
		dfs(res, tmp, i + 1, len, candidates, target - candidates[i]);
	}
};

// 与之前一题不同的地方是：1.候选数字可能有重复的 2.单个候选数字不能重复使用

