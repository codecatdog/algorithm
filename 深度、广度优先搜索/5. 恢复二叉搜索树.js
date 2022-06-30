/**
 * 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点 的值被错误地交换。
 * 请在不改变其结构的情况下，恢复这棵树 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：二叉搜索树中序遍历结果是一个升序序列，通过中序遍历，找到两个位置错误的节点。然后交换他们的位置
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {
    if(!root) return root;
    const stack = []; // 栈，用于维护中序遍历时暂存的节点
    let x = null;
    let y = null;
    let pred = null; // 用于记录上一个遍历的节点
    while(stack.length || root) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 找到两个节点, 并且一定是后面的小节点和前面的大节点交换
        if(pred && root.val < pred.val) { // 当前节点值小于上一个节点
            y = root; // 记录下当前的最小节点，该节点应为遍历到第二次不满足升序条件的小节点
            if (x === null) {
                x = pred; // x一定是前面第一次比较时的大节点
            }
            else break;
        }
        pred = root;
        root = root.right;
    }
    const swap = (x, y) => {
        const temp = x.val;
        x.val = y.val;
        y.val = temp;
    }
    swap(x, y);
    return root
};
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
};
console.log(recoverTree(new Node(1, new Node(3, null, new Node(2)))))