/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 
 * 路径总和等于给定目标和的路径。节点值有正有负。
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
 * @return {number[][]}
 */
const pathSum = function(root, targetSum) {
    const res = [];
    const path = [];
    dfs(root, targetSum);
    return res;

    function dfs(root, targetSum) {
        if(!root) return;
        // 下一个目标值=当前目标值减去当前节点值
        targetSum -= root.val;
        // 将当前节点值加入到路径
        path.push(root.val);
        // 如果当前节点是叶子节点，且下一个目标值为0，则将当前路径加入到结果中；
        if(!root.left && !root.right && targetSum === 0) {
            res.push([...path]); 
            // 注意必须通过扩展运算符取出数组中的数值后重新组成数组赋值，否则后面pop操作对其有影响
        }
        // 递归找下一个目标值
        dfs(root.left, targetSum);
        dfs(root.right, targetSum);
        path.pop(); // 某条路径结束，回到上一个节点，因此将最近的一个节点出栈。
    }
};

