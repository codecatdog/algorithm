/**
 * 给你二叉树的根节点 root，返回其节点值 自底向上 的层序遍历。 
 * （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
    if(!root) return [];
    const res = []; // 结果
    const queue = [root]; // 队列，用于暂存节点
    while(queue.length) {
        const temp = [];
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const node = queue.shift(); // 节点出队
            temp.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.unshift(temp); // 重点，每次从头部插入
    }
    return res;
};