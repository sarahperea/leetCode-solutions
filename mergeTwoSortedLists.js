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
let mergeTwoLists = (l1, l2) => {
    let node, val, curr = list = new ListNode(0);
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            val = l1.val;
            l1 = l1.next;
        } else {
            val = l2.val;
            l2 = l2.next;
        }       
        curr = curr.next = new ListNode(val);
    }
    
    node = l1 ? l1 : l2
    while (node) {
        curr = curr.next = new ListNode(node.val);
        node = node.next;
    }
    
    return list.next;
};