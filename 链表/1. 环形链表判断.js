/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**思路：使用两个指针，一个快，一个慢，分别沿链表往前移动，如果链表有环的话，两个指针会相遇
 * 两个指针步数：从同一节点出发，快指针每次走两步，满指针每次走一步
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next) {
        fast = fast.next.next; // 快指针向前移动两步
        slow = slow.next; // 慢指针向前移动一步
        if(fast === slow) { // 如果两节点相遇
            return true;
        }
    }
    return false;
};