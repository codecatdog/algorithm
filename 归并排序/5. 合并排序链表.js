/**
 * 给定一个链表数组，每个链表都已经按升序排列。
 * 请将所有链表合并到一个升序链表中，返回合并后的链表。
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if(lists.length === 0) { // 注意特殊情况的处理
        return null;
    }
    return merge(lists, 0, lists.length - 1);
};
function merge(lists, left, right) {
    if(left > right) return null;
    if(left === right) return lists[left];
    var mid = Math.floor((left + right) / 2);
    var list1 = merge(lists, left, mid);
    var list2 = merge(lists, mid + 1, right);
    return mergeTwoList(list1, list2);
}
/**
 * 合并a、b两个有序的升序链表,返回合并后的链表
 * @param {*} a 
 * @param {*} b 
 */
function mergeTwoList(a, b) {
    if (!a || !b) return a ? a : b;
    var aPtr = a;
    var bPtr = b;
    var tempHead = new ListNode();
    var temp = tempHead;
    while(aPtr && bPtr) {
        if(aPtr.val < bPtr.val) {
            temp.next = aPtr;
            aPtr = aPtr.next;
        } else {
            temp.next = bPtr;
            bPtr = bPtr.next;
        }
        temp = temp.next;
    }
    temp.next = aPtr ? aPtr : bPtr;
    return tempHead.next;
}
console.log(mergeKLists([null]))