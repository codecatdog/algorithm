/* 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

 */

/* 复杂链表的深拷贝 */


// Definition for a Node.
function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};


/**
 * @param {Node} head
 * @return {Node}
 */

// 利用map 映射新旧节点
/* 
算法流程：
1. 若头节点 head 为空节点，直接返回 nullnull ；
2. 初始化： 哈希表 map ， 节点 cur 指向头节点；
3. 复制链表：
    建立新节点，并向 map 添加键值对 (原 cur 节点, 新 cur 节点） ；
    cur 遍历至原链表下一节点；
4. 构建新链表的引用指向：
    构建新节点的 next 和 random 引用指向；
    cur 遍历至原链表下一节点；
5. 返回值： 新链表的头节点 map[cur] ；

复杂度分析：
时间复杂度 O(N) ： 两轮遍历链表，使用 O(N) 时间。
空间复杂度 O(N) ： 哈希表 map 使用线性大小的额外空间。

*/
var copyRandomList = function(head) {
    if(head == null) return null;
    var map = new Map();
    var cur = head;
    while(cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    while(cur) {
        map.get(cur).next = map.get(cur.next) || null;  //如果cur.next == null的话，map获取返回会是undefind，要避免next指向undefined。
        map.get(cur).random = map.get(cur.random) || null;
        cur = cur.next;
    }
    return map.get(head);
};
/* 
方法二：拼接 + 拆分
考虑构建 原节点 1 -> 新节点 1 -> 原节点 2 -> 新节点 2 -> …… 的拼接链表，如此便可在访问原节点的 random 指向节点的同时找到新对应新节点的 random 指向节点。

算法流程：
1. 复制各节点，构建拼接链表:

    设原链表为 node1 -> node2 -> ... ，构建的拼接链表如下所示：
    node1 -> node1_{new} -> node2 -> node2_{new} -> ...

2. 构建新链表各节点的 random 指向：

    当访问原节点 cur 的随机指向节点 cur.random 时，对应新节点 cur.next 的随机指向节点为 cur.random.next 。
    拆分原 / 新链表：

4. 设置 pre / cur 分别指向原 / 新链表头节点，遍历执行 pre.next = pre.next.next 和 cur.next = cur.next.next 将两链表拆分开。
返回新链表的头节点 copyHead 即可。

复杂度分析：
时间复杂度 O(N) ： 三轮遍历链表，使用 O(N) 时间。
空间复杂度 O(1) ： 节点引用变量使用常数大小的额外空间。

*/
var copyRandomList1 = function(head) {
    if(head == null) return null;
    var cur = head;
    // 原地复制节点，构建拼接链表：node1 -> node1_{new} -> node2 -> node2_{new} -> ...
    while(cur) {
        var node = new Node(cur.val);
        node.next = cur.next;
        cur.next = node;
        cur = cur.next.next;
    }
    // 构建新链表各节点的 random 指向
    cur = head;
    while(cur) {
        cur.next.random = cur.random ? cur.random.next : null; // 当cur.random==null时，访问其next属性会报错
        cur = cur.next.next;
    }
    // 遍历拆开两个链表
    var copyHead = head.next; //先把新链表的头节点保存下来用于返回
    pre = head; // pre 指向旧链表
    cur = head.next; // cur指向新链表s
    while(pre) {
        pre.next = pre.next.next;
        cur.next = cur.next ? cur.next.next : null;
        pre = pre.next;
        cur = cur.next;
    }
    return copyHead;
};
