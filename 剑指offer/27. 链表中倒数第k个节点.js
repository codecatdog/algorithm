/* 
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.
返回链表 4->5.

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
 * @param {number} k
 * @return {ListNode}
 */
// 递归：
var getKthFromEnd = function(head, k) {
    if(k <= 0) return null;
    const getKth = function(node) {
        if(node.next == null) return 1;
        else return getKth(node.next) + 1;
    }
    var p = head;
    while(p) {
        var val = getKth(p);
        if(val == k) return p;
        else p = p.next;
    }
    return head;
};

// 双指针
/* 
算法流程：
1. 初始化： 前指针 former 、后指针 latter ，双指针都指向头节点 head​ 。

2. 构建双指针距离： 前指针 former 先向前走 k 步（结束后，双指针 former 和 latter 间相距 k 步）。

3. 双指针共同移动： 循环中，former 和 latter 每轮都向前走一步，直至 former 走过链表 尾节点 时跳出（跳出后， latter 与尾节点距离为 k-1，即 latter 指向倒数第 k 个节点）。

4. 返回值： 返回 latter 即可。

*/
var getKthFromEnd1 = function(head, k) {
    var former = head;
    var latter = head;
    var count = 0;
    while(former) {
        if(count < k) {
            former = former.next;
            count ++;
        }
        else {
            former = former.next;
            latter = latter.next;
        }
    }
    return latter;
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

console.log(getKthFromEnd1(a, 0));