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

/* One Pass Algorithm */ 
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let firstNode = dummy;
    let secondNode = dummy;
    for (let i=0; i<=n; i++) {
        secondNode = secondNode.next;
    }
    while (secondNode != null) {
        secondNode = secondNode.next;
        firstNode = firstNode.next;
    }

    firstNode.next = firstNode.next.next;
    return dummy.next;
};