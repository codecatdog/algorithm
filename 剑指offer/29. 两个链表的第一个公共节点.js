/* 
输入两个链表，找出它们的第一个公共节点。

考虑构建两个节点指针 A​ , B 分别指向两链表头节点 headA , headB ，做如下操作：

指针 A 先遍历完链表 headA ，再开始遍历链表 headB ，当走到 node 时，共走步数为：
a + (b - c)

指针 B 先遍历完链表 headB ，再开始遍历链表 headA ，当走到 node 时，共走步数为：
b + (a - c)

若两链表 有 公共尾部 (即 c > 0 ) ：指针 A , B 同时指向「第一个公共节点」node 。
若两链表 无 公共尾部 (即 c = 0 ) ：指针 A , B 同时指向 null 。

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var A = headA, B = headB;
    while(A != B) {
        A = A != null ? A.next : headB;
        B = B != null ? B.next : headA;
    }
    return A;
};