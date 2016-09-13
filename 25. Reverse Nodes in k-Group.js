/**
 * 25. Reverse Nodes in k-Group
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * 
 * If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * 
 * You may not alter the values in the nodes, only nodes itself may be changed.
 * 
 * Only constant memory is allowed.
 * 
 * For example,
 * Given this linked list: 1->2->3->4->5
 * 
 * For k = 2, you should return: 2->1->4->3->5
 * 
 * For k = 3, you should return: 3->2->1->4->5
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
var reverseKGroup = function(head, k) {
    
	var result = [],
		arr = [],
		tmp = head;

	if (k <= 1) {
		return head;
	}

	arr.push(tmp);
	while (tmp.next) {
		arr.push(tmp.next);
		tmp = tmp.next;
	}

	while (arr.length >= k) {
		result = result.concat(arr.splice(0, k).reverse());
	}
	result = result.concat(arr);

	for (var i = 0; i < result.length - 1; i++) {
		result[i].next = result[i + 1];
	}
	result[result.length - 1].next = null;

	return result[0];

};

// 先循环生成数组
// 再按k值依次取出小数组，颠倒
// 合并所有小数组
// 循环合并后的数组，next都指向下一位