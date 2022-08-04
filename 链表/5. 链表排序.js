/**
 * 给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */

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
const sortList = function(head) {
    let index = 0;
    let p = head;
    while(p.next) {
        index++;
        p = p.next;
    }
    return merge(head, 0, index);
};

function merge(head) {
    if(!head || !head.next) return head;
    // 找到中间节点 slow
    var fast = head, slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // 分开两个链表
    const p = slow.next; 
    slow.next = null;

    const l1 = merge(head);
    const l2 = merge(p);
    return mergeTwoList(l1, l2);
}

/**
 * 合并两个升序链表
 * @param {ListNode} a 
 * @param {ListNode} b 
 */
function mergeTwoList(a, b) {
    if(!a || !b) return a ? a : b;
    let aPtr = a;
    let bPtr = b;
    const dummyHead = new ListNode(0);
    let head = dummyHead;
    while(aPtr && bPtr) {
        if(aPtr.val < bPtr.val) {
            head.next = aPtr;
            aPtr = aPtr.next;
        } else {
            head.next = bPtr;
            bPtr = bPtr.next;
        }
        head = head.next;
    }
    head.next = aPtr ? aPtr : bPtr;
    return dummyHead.next;
}