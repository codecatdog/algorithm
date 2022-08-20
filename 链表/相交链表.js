/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的 起始 节点。
 * 如果两个链表不存在相交节点，返回 null 。
 * 
 * 题目数据 保证 整个链式结构中不存在环。
 * 
 * 注意，函数返回结果后，链表必须 保持其原始结构 。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法1：使用Set记录链表A，然后遍历链表B，看当前节点是否在Set中存在；
 * 存在的第一个节点就是相交的起始节点
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let temp = headA;
    let set = new Set();
    // 遍历链表A，将节点存至Set集合中
    while(temp) {
        set.add(temp);
        temp = temp.next;
    }
    // 遍历链表B，找第一个在Set中存在的节点
    temp = headB
    while(temp) {
        if(set.has(temp)) {
            return temp;
        }  
        temp = temp.next;
    }
    return null;
};

/**
 * 方法2：优化空间效率，使用双指针，分别指向链表A头节点，链表B头节点，然后同时遍历；
 * 当链表A遍历结束就将指针指向链表B头节点，链表B遍历结束就将指针指向A头节点；
 * 两个指针相遇的位置就是相交的起始节点
 * 如果两个链表不相交，两个指针遍历完两个链表，最后刚好都为null，正好也是相等的；
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode2 = function(headA, headB) {
    if(!headA || !headB) return null; // 如果有一个链表为空，直接返回null
    let aPtr = headA;
    let bPtr = headB;
    while(aPtr !== bPtr) { // 指针不相等时，就一直走；直到两个指针相遇或遍历完两个链表指向null
        aPtr = aPtr? aPtr.next : bPtr;
        bPtr = bPtr? bPtr.next : aPtr;
    }
    return aPtr;
};
