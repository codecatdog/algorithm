/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 1. 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 2. 展开后的单链表仍然采用二叉树的结构，left指向null，right进行链表连接。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**利用先序遍历，根左右。当前节点cur的左子树一定是cur的后驱节点，所以cur的right指向左子树，而cur原来的右子树一定会在左子树前序遍历完之后才开始遍历，所以把cur的右子树接到cur的左子树的最右边即可，而不用接到左子树先序遍历的最后一个节点。
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
    let cur = root;
    while (cur !== null) {
        if (cur.left !== null) {
            const next = cur.left;
            // 找到左子树最右边的节点
            let predecessor = next;
            while (predecessor.right !== null) {
                predecessor = predecessor.right;
            }
            // 将当前节点的右子树挂到左子树最右节点上
            predecessor.right = cur.right;
            // 释放左子树
            cur.left = null;
            // 将左子树挂到当前节点右边
            cur.right = next;
        }
        cur = cur.right;
    }
};
