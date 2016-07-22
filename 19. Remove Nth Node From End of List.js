/**
 * 19. Remove Nth Node From End of List
 *
 * Given a linked list, remove the nth node from the end of list and return its head.
 * 
 * For example,
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * 
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    var arr = [],
    	tmp = head;

    while (tmp) {
    	arr.push(tmp);
    	tmp = tmp.next;
    }

    if (n === arr.length) {
    	return arr[arr.length - n].next;
    } 

    arr[arr.length - n - 1].next = arr[arr.length - n].next;

    return head;

};

// 先遍历，存入数组，注意存入的是引用，对象全是传递引用
// 去掉开头节点的话，返回开头节点的 next
// 否则把去除的节点的前一节点，指针指向去除节点的指针，返回原链表
