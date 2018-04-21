/**
 * 61. Rotate List
 * 
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 * 
 * Example 1:
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * Example 2:
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	var count = 1;
	var last = head;
	var now = head;
	
	if (!head || !head.next) return head;

	while (last.next) {
		last = last.next;
		count++;
	}

	k %= count;
	
	if (k === 0) return head;

	while (k < count - 1) {
		now = now.next;
		k++;
	}

	last.next = head;
	head = now.next;
	now.next = null;

	return head;
};

// 1. 拿到长度 count 和最后一个 last
// 2. k %= count
// 3. 找到新的最后一个 newLast，last.next = head，head = newLast.next，newLast.next = null
// 4. return head
