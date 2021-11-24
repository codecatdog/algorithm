/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let node = head;
    let nums = [];
    while(node !== null) {
        nums.unshift(node.val);
        node = node.next;
    }
    return nums;

};

var a = new ListNode(1);
var b = new ListNode(3);
var c = new ListNode(2);
a.next = b;
b.next = c;

console.log(reversePrint(a));