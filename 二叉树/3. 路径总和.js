/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    return dfs(root, targetSum);
};

function dfs(root, target) {
    if(!root) {
        return false;
    }
    if(!root.left && !root.right) { // 一定要在叶子节点判断，不能到空姐点判断，避免根节点导致的错误
        return root.val === target;
    }
    let val = root.val;
    return dfs(root.left, target - val) || dfs(root.right, target - val);
}