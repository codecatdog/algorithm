/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 上一题3 的优化
 * 思路：遍历链表，每k个节点进行翻转，再将每个子链表合并回去
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
   if(!head) return head;
   var vHead = new ListNode(0);
   vHead.next = head;
   var pre = vHead; // 前一个链表的尾节点
   while(head) {
        var tail = pre; //当前子链表的尾节点
        for(var i = 0; i < k; i++) { // 每次取k个节点
            tail = tail.next;
            if(!tail) { // 不到k个节点，直接返回
                return vHead.next;
            }
        }
        var nxt = tail.next; // 下一个k链表的头节点
        [head, tail] = reverseLinkList(head, tail);
        pre.next = head; // 将反转后的链表合并回去
        tail.next = nxt;
        pre = tail;
        head = nxt; // 下一个子链表头节点
   }
   return vHead.next;
};

/**
 * 翻转链表
 * @param {ListNode} head 
 * @param {ListNode} tail 
 */
function reverseLinkList(head, tail) {
    var pre = null;
    var cur = head;
    while(pre !== tail) { // !!!注意这里，判断条件不能是cur!=null, 不然会翻转整个链表
        var node = cur.next;
        cur.next = pre;
        pre = cur;
        cur = node;
    }
    return [tail, head]
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(reverseKGroup(a, 2))