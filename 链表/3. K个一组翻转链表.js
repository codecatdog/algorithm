 /**
  * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
  * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，
  * 那么请将最后剩余的节点保持原有顺序。
  * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-nodes-in-k-group
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路：遍历链表，每k个节点断开，然后翻转这个子链表，再将每个子链表合并
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head) return head;
    var p = head; // 子链表的尾节点
    var left = head; // 每个子链表的头节点
    var count = 1; // 计数
    var listNode = null;
    while(p) {
        if(count === k) {
            var node = p.next; // 下个子链表的头节点
            p.next = null; // 断开链表
            listNode = mergeLinkList(listNode, reverseLinkList(left)); // 翻转子链表
            p = node; 
            left = node;
            count = 1;
        } else {
            count++;
            p = p.next;
        }
    }
    listNode = mergeLinkList(listNode, left);
    return listNode;
};
/**
 * 翻转链表
 * @param {ListNode} head 
 */
function reverseLinkList(head) {
    var pre = null;
    var cur = head;
    while(cur) {
        var node = cur.next;
        cur.next = pre;
        pre = cur;
        cur = node;
    }
    return pre; // 返回翻转后的头节点
}
/**
 * 合并两个子链表
 */
function mergeLinkList(head1, head2) {
    if(!head1) return head2;
    var p = head1;
    while(p.next) {
        p = p.next
    }
    p.next = head2;
    return head1;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var a = new ListNode(1, new ListNode(2));

console.log(reverseKGroup(a, 2))