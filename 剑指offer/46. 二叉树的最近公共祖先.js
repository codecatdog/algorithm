/* 
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。

解析：
考虑通过递归对二叉树进行先序遍历，当遇到节点 p 或 q 时返回。从底至顶回溯，当节点 p, q 在节点 root 的异侧时，节点 root 即为最近公共祖先，则向上返回 root 。

递归解析：
终止条件：
    1. 当越过叶节点，则直接返回 null ；
    2. 当 root 等于 p, q ，则直接返回 root ；
递推工作：
    1. 开启递归左子节点，返回值记为 left ；
    2. 开启递归右子节点，返回值记为 right ；
返回值： 根据 left 和 right ，可展开为四种情况；
    1. 当 left 和 right 同时为空 ：说明 root 的左 / 右子树中都不包含 p,q ，返回 null ；
    2. 当 left 和 right 同时不为空 ：说明 p, q 分列在 root 的 异侧 （分别在 左 / 右子树），因此 root 为最近公共祖先，返回 root ；
    3. 当 left 为空 ，right 不为空 ：p,q 都不在 root 的左子树中，直接返回 right 。具体可分为两种情况：
        p,q 其中一个在 root 的 右子树 中，此时 right 指向 p（假设为 p ）；
        p,q 两节点都在 root 的 右子树 中，此时的 right 指向 最近公共祖先节点 ；
    4. 当 left 不为空 ， right 为空 ：与情况 3. 同理；

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
var lowestCommonAncestor = function(root, p, q) {
    const recur = function (root, p, q) {
        if(root == null) return null;
        if(root.val == p.val || root.val == q.val) return root;

        var left = recur(root.left, p, q);
        var right = recur(root.right, p, q);
        
        if(left && right) return root; // p、q 在root两边
        if(!left && !right) return null; // p、q两边都没有
        if(left && !right) return left; // p、q在左边
        if(!left && right) return right; // p、q在右边
    };    

    return recur(root, p, q);
};