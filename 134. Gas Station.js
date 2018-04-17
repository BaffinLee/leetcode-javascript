/**
 * 134. Gas Station
 * 
 * There are N gas stations along a circular route, where the amount of gas at station i is gas[i].
 * 
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.
 * 
 * Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.
 * 
 * Note:
 * The solution is guaranteed to be unique.
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
	var len = gas.length;
	var tank = 0;
	var total = 0;
	var start = 0;
	for (var i = 0; i < len; i++) {
		tank += gas[i] - cost[i];
		if (tank < 0) {
			start = i + 1;
			total += tank;
			tank = 0;
		}
	}
	return tank + total >= 0 ? start : -1;
};

// n 点到不了 m 点，则其间所有点都到不了 m 点
// 总和大于等于 0 说明有解
