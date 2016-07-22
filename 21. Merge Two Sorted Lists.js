/**
 * 21. Merge Two Sorted Lists
 *
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    var p1 = l1,
    	p2 = l2,
    	tmp = new ListNode(),
    	newlist = tmp;

   	if (!l1) {
    	return l2;
    } else if (!l2) {
    	return l1;
    }

    while (p1 && p2) {
    	
    	if (p1.val > p2.val) {
    		tmp.val = p2.val;
    		p2 = p2.next;
    	} else {
    		tmp.val = p1.val;
    		p1 = p1.next;
    	}

    	if (!p1) {

    		while (p2) {
    			tmp.next = new ListNode(p2.val);
    			tmp = tmp.next;
    			p2 = p2.next;
    		}
    		break;

    	} else if (!p2) {

    		while (p1) {
    			tmp.next = new ListNode(p1.val);
    			tmp = tmp.next;
    			p1 = p1.next;
    		}
    		break;

    	}

    	tmp.next = new ListNode();
    	tmp = tmp.next;
    }

    return newlist;
};

// 考虑两个链表不一样长
// 需要返回完全新的链表
// 注意对象引用问题
