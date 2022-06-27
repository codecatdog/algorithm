/**
 * 输入一棵树，要求验证该树是否为二叉搜索树
 * 二叉搜索树： 对于一个节点，他的左节点总是比他小，他的右节点总是比他大。
 * 所有左子树和右子树自身必须也是二叉搜索树。
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
 * @return {boolean}
 */
const isValidBST = function(root) {
    return dfs(root, -Infinity, Infinity)
};

/**
 * 判断节点root的值是否位于lower和upper之间
 * 自底向上看
 * @param {TreeNode} root 
 * @param {number} lower 
 * @param {number} upper 
 */
function dfs(root, lower, upper) {
    if(!root) return true;
    if(root.val >= lower || root.val <= upper) {
        return false;
    }
    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
}