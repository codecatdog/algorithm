/* 
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。

解题思路：

最近公共祖先的定义： 设节点 root 为节点 p,q 的某公共祖先，若其左子节点 root.left 和右子节点 root.right 都不是 p,q的公共祖先，则称 root 是 “最近的公共祖先” 。

根据以上定义，若 root 是 p,q 的 最近公共祖先 ，则只可能为以下情况之一：

    1. p 和 q 在 root 的子树中，且分列 root 的 异侧（即分别在左、右子树中）；
    2. p = root，且 q 在 root 的左或右子树中；
    3. q = root，且 p 在 root 的左或右子树中；

本题给定了两个重要条件：① 树为 二叉搜索树 ，② 树的所有节点的值都是 唯一 的。根据以上条件，可方便地判断 p,q 与 root的子树关系，即：

    1. 若 root.val < p.val ，则 p 在 root 右子树 中；
    2. 若 root.val > p.val ，则 p 在 root 左子树 中；
    3. 若 root.val = p.val ，则 p 和 root 指向 同一节点 。

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归
var lowestCommonAncestor = function(root, p, q) {
    if(root == null) return null;
    var res;
    if(root.val >= p.val && root.val <= q.val || root.val <= p.val && root.val >= q.val) {
        return root;
    } else if(root.val > p.val) {
        res = lowestCommonAncestor(root.left, p, q);
    } else {
        res = lowestCommonAncestor(root.right, p, q);
    }
    return res;
};

// 迭代
var lowestCommonAncestor1 = function(root, p, q) {
    while(root) {
        if(p.val > q.val) { // 保证p 小于 q ，减少比较次数
            var tmp = p;
            p = q;
            q = tmp;
        }
        if(root.val < p.val) { //p,q 在root的右子树中
            root = root.right;
        } else if(root.val > q.val) { //p, q 在root的左子树中
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};