/**
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
 * 每条从根节点到叶节点的路径都代表一个数字：
 * 
 * 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123。
 * 求出 所有 从根节点到叶子节点的 数字 的 总和
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const dfs = (root, prevSum) => {
    if (!root) return 0;
    const sum = prevSum * 10 + root.val;
    if (!root.left && !root.right) {
        return sum;
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function (root) {
    return dfs(root, 0);
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
console.log(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3))))