/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。
 * 如果找不到下一个右侧节点，则将 next 指针设置为 NULL。初始状态下，所有 next 指针都被设置为 NULL。
 */

/**
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
const connect = function(root) {
    if(!root) return root;
    const queue = [root]; // 队列，暂存节点
    while(queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) { // 遍历同一层的节点
            const node = queue.shift(); // 节点出队
            if(i < len - 1) { // 如果不是该层最后一个节点
                node.next = queue[0]; // 则当前节点的next指向队列中的首个节点
            }
            // 加入下一层节点到队列
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
    }
    return root;
};

// 法2：利用已建立的next指针，来建立下一层的next
// 因为需要建立的next分为两种，一种是同一个父节点的左右孩子，另外一种是兄弟节点的右左孩子。
// 转换为代码就是： 1. node.left.next = node.right; 2. node.right.next = node.next.left;
// 而每一层 正好从左边的第一个节点， 沿着next可以遍历完(一层可以看作一个链表)
const connect2 = function(root) {
    if (!root) {
        return root;
    }
    // 从根节点开始
    let leftmost = root;
    while (leftmost.left !== null) {
        // 遍历这一层节点组织成的链表，为下一层的节点更新 next 指针
        let head = leftmost;
        while (head !== null) {
            // 情况1
            head.left.next = head.right;
            // 情况2
            if(head.next) {
                head.right.next = head.next.left;
            }
            // 节点后移
            head = head.next;
        }
        // 去下一层的最左的节点
        leftmost = leftmost.left;
    }
    return root;
};
