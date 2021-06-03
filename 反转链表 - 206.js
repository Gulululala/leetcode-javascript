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
var reverseList = function (head) {
    // 双指针
    let pre = head
    let cur = null
    while (pre) {
        const tmp = pre.next
        pre.next = cur
        cur = pre
        pre = tmp
    }
    return cur

    // 递归
    if (head === null || head.next === null) return head
    const next = head.next
    const reverseNode = reverseList(next)
    next.next = head
    head.next = null
    return reverseNode
};