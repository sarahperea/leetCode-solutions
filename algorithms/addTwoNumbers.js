/**
 * Problem:
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
let addTwoNumbers = (l1, l2) => {
    let curr = list = new ListNode(0),
        carry = 0;
    
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0)
            + (l2 ? l2.val : 0)
            + carry;
        carry = parseInt(sum/10);
        curr = curr.next = new ListNode(sum%10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next
    }
    if (carry > 0) curr.next = new ListNode(carry);
    
    return list.next;
};
