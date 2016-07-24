/**
 * 23. Merge k Sorted Lists
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    var heap = [],
    	result = new ListNode(0),
    	tmp = result;

    for (var i = 0; i < lists.length; i++) {
    	if (lists[i]) {
    		heap.push(lists[i]);
    	}
    }

    heap.sort(function (a, b) {return b.val - a.val});
    
    while (heap.length > 0) {

    	tmp.next = heap.pop();
    	tmp = tmp.next;

    	if (tmp.next) {
    		heap.push(tmp.next);
    		heap.sort(function (a, b) {return b.val - a.val});
    	}

    }

    return result.next;
};

// 
