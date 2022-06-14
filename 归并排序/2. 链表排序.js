/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 合并两个有序链表
const merge = (head1, head2) => {
    const dummyHead = new ListNode(0);
    let temp = dummyHead, temp1 = head1, temp2 = head2;
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
    if (temp1 !== null) {
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return dummyHead.next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (head === null) {
        return head;
    }
    let length = 0; // 统计链表长度
    let node = head;
    while (node !== null) {
        length++;
        node = node.next;
    }
    const dummyHead = new ListNode(0, head);
    for (let subLength = 1; subLength < length; subLength <<= 1) {
        let prev = dummyHead, curr = dummyHead.next;
        while (curr !== null) {
            // 第一个待合并子链表
            let head1 = curr;
            for (let i = 1; i < subLength && curr.next !== null; i++) {
                curr = curr.next;
            }
            // 第二个子链表
            let head2 = curr.next;
            // 断开第一个和第二个子链表
            curr.next = null;
            curr = head2;
            for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
                curr = curr.next;
            }
            let next = null; 
            if (curr !== null) {
                next = curr.next; // 记录下一个子链表的起始节点
                curr.next = null; // 断开第二个子链表与下一个子链表
            }
            // 每两个子链表相合并
            const merged = merge(head1, head2);

            // 将排序后的子链表合并为一个完整的链表
            prev.next = merged;
            while (prev.next !== null) {
                prev = prev.next;
            }
            // 下一个子链表
            curr = next;
        }
    }
    return dummyHead.next;
};