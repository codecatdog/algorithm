/* *
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。
 * 如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 * 
 * 上一道题的进阶版，注意这里数据结构不是满二叉树
 */

/* *
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    if (!root) return root;
    let cur = root; // cur看作当前正在遍历的层
    while(cur) {
        let dummy = new Node(0); // 虚节点作为下一层的头节点
        let pre = dummy; // pre表示下一层的节点, 通过pre将下一层节点串联起来
        while(cur) {  // 遍历每层的节点
            if(cur.left) {
                pre.next = cur.left;
                pre = pre.next;
            }
            if(cur.right) {
                pre.next = cur.right;
                pre = pre.next;
            }
    
            cur = cur.next; // cur到当前层的下一个节点
        }
        // cur进到下一层
        cur = dummy.next;
    }
    return root;
};
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

console.log(connect(new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, null, new Node(7)))));