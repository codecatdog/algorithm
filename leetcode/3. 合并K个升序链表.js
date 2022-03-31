/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 *  输入：lists = [[1,4,5],[1,3,4],[2,6]]
    输出：[1,1,2,3,4,4,5,6]
    解释：链表数组如下：
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    将它们合并到一个有序链表中得到。
    1->1->2->3->4->4->5->6

*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1);
};

function merge(lists, left, right) {
    if(left === right) return lists[left];
    if(left > right) return null;
    var mid = Math.floor((left + right) >> 1);
    return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right));
}

/**
 * merge two lists
 * @param {ListNode} a 
 * @param {ListNode} b 
 * @returns {ListNode}
 */
var mergeTwoLists = function(a, b) {
    if(!a || !b) return a? a : b;
    var aPtr = a;
    var bPtr = b;
    var head = new ListNode();
    var tail = head;
    while(aPtr !== null && bPtr !== null) {
        if(aPtr.val <= bPtr.val) {
            tail.next = aPtr;
            aPtr = aPtr.next;
        } else {
            tail.next = bPtr;
            bPtr = bPtr.next;
        }
        tail = tail.next;
    }
    tail.next = aPtr? aPtr: bPtr;
    return head.next;
}

var a = new ListNode(1);
var b = new ListNode(4);
var c = new ListNode(5);
var d = new ListNode(1);
var e = new ListNode(3);
var f = new ListNode(4);
var g = new ListNode(2);
var h = new ListNode(6);

a.next = b;
b.next = c;
d.next = e;
e.next = f;
g.next = h;

var lists = [a, d, g];

console.log(mergeKLists(lists));