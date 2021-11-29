/* 
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：
     4
   /   \
  2     7
 / \   / \
1   3 6   9

镜像输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1

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
 * @return {TreeNode}
 */
/* 递归 */
var mirrorTree = function(root) {
    if(root == null || root.left == null && root.right == null) return root;
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
};
mirrorTree(1)