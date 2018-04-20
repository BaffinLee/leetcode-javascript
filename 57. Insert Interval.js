/**
 * 57. Insert Interval
 * 
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their start times.
 * 
 * Example 1:
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * Example 2:
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
	var len = intervals.length;
	var i = 0;
	var res = [];
	while (i < len && intervals[i].end < newInterval.start) {
			res.push(intervals[i]);
			i++;
	}
	while (i < len && intervals[i].start <= newInterval.end) {
			newInterval.start = Math.min(newInterval.start, intervals[i].start);
			newInterval.end = Math.max(newInterval.end, intervals[i].end);
			i++;
	}
	res.push(newInterval);
	while (i < len) {
			res.push(intervals[i]);
			i++;
	}
	return res;
};
