/**
 * 24. Swap Nodes in Pairs
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    var tmp = null;

    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    tmp = head.next;
    head.next = swapPairs(tmp.next);
    tmp.next = head;

    return tmp;
};


// 递归，两个一组，直到一个或没有
// 
// 将第二个指向第一个
// 第一个指向 递归第二个的下一个
// 返回第二个
