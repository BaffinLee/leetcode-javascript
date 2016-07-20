/**
 * 2. Add Two Numbers
 *
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */



  //Definition for singly-linked list.
/*function ListNode(val) {
 	this.val = val;
  	this.next = null;
}
 
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

	var tmp1 = l1,
		tmp2 = l2,
		tmp3 = new ListNode(0),
		carry = 0,
		result = tmp3,
		tmp1val, tmp2val, val;
		
	while (tmp1 || tmp2 || carry) {
		
		if (tmp1) {
			tmp1val = tmp1.val;
			tmp1 = tmp1.next;
		} else {
			tmp1val = 0;
		}

		if (tmp2) {
			tmp2val = tmp2.val;
			tmp2 = tmp2.next;
		} else {
			tmp2val = 0;
		}

		val = tmp1val + tmp2val + carry;

		if (val > 9) {
			val = val % 10;
			carry = 1;
		} else {
			carry = 0;
		}

		tmp3.next = new ListNode(val);
		tmp3 = tmp3.next;

	}

	return result.next;

};


//console.log(addTwoNumbers(l1, l2));

//
