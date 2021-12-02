/* 
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:

输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

示例 2:

输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(head == null) return head;
    if(head.val == val) return head.next;
    var p = head;
    while(p.next) {
        if(p.next.val == val) {
            p.next = p.next.next;
            break;
        } else {
            p = p.next;
        }
        
    }
    return head;
};

function Node(value) {
    this.val = value;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);

a.next = b;
b.next = c;
console.log(deleteNode(a, 3))