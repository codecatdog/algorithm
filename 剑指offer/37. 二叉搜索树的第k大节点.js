/* 
给定一棵二叉搜索树，请找出其中第k大的节点。

限制：
1 ≤ k ≤ 二叉搜索树元素个数

二叉搜索树的中序遍历即为递增数列，现在要求递减数列
则利用中序遍历的倒序，即 右-》根-》左
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    if(root == null) return 0;
    var stack = [];
    var p = root;
    var count = 0;
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.right;
        }
        var node = stack.pop();
        count ++;
        if(count == k) return node.val;
        p = node.left;
        
    }
};

