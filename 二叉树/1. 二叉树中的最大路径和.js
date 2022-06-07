/**
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。
 * 同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
 * 
 * 路径和 是路径中各节点值的总和。
 * 
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 * 
 * -1000 <= Node.val <= 1000
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
 * @return {number}
 */
 var maxPathSum = function(root) {
    let ans = Number.MIN_SAFE_INTEGER;
    dfs(root);
    return ans;

    function dfs(root) {
        //  节点为空，直接返回0
        if(!root) return 0;

        // 如果子节点的值为负数的话，就不要加上他的值
        let left = Math.max(dfs(root.left), 0);
        let right = Math.max(dfs(root.right), 0);

        // 以root为根节点的最大路径和包括root和他的子女节点
        ans = Math.max(ans, root.val + left + right);

        // 返回到上一层时，必须从子女节点中选择一个较大值作为最大路径和的子节点，保证路径不分叉
        return Math.max(left, right) + root.val;
    }

};