
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head) return head;
    let pre = null;
    let cur = head;
    while(cur) {
       const nextNode = cur.next; // 重点：在调整next指针前线保存下cur的next节点
       cur.next = pre;
       pre = cur;
       cur = nextNode;
    }
    return pre;
};