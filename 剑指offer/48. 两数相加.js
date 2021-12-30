/* 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    
    let pre = new ListNode();
    let cur = pre;
    let carry = 0; // 进位
    while(l1 != null || l2 != null) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let node = new ListNode();
        node.val = (val1 + val2 + carry) % 10;
        cur.next = node;
        cur = node;
        
        carry = val1 + val2 + carry < 10 ? 0 : 1;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(carry == 1) {
        let node = new ListNode();
        node.val = 1;
        cur.next = node;
    }
    return pre.next;
};

var a = new ListNode(2);
var b = new ListNode(4);
var c = new ListNode(3);

a.next = b;
b.next = c;

var d = new ListNode(5);
var e = new ListNode(6);
var f = new ListNode(4);

d.next = e;
e.next = f;

addTwoNumbers(a, d);