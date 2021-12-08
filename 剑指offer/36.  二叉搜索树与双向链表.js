/* 
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

注意：二叉搜索树的中序遍历为 递增序列 

算法流程：
dfs(cur): 递归法中序遍历；

1. 终止条件： 当节点 cur 为空，代表越过叶节点，直接返回；
2. 递归左子树，即 dfs(cur.left) ；
3. 构建链表：
    当 pre 为空时： 代表正在访问链表头节点，记为 head ；
    当 pre 不为空时： 修改双向节点引用，即 pre.right = cur ， cur.left = pre ；
    保存 cur ： 更新 pre = cur ，即节点 cur 是后继节点的 pre ；
4. 递归右子树，即 dfs(cur.right) ；

treeToDoublyList(root)：
1. 特例处理： 若节点 root 为空，则直接返回；
2. 初始化： 空节点 pre ；
3. 转化为双向链表： 调用 dfs(root) ；
4. 构建循环链表： 中序遍历完成后，head 指向头节点， pre 指向尾节点，因此修改 head 和 pre 的双向节点引用即可；
5. 返回值： 返回链表的头节点 head 即可；

*/

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(root == null) return;
    
    const dfs = function(cur) {
        if(!cur) return;
        dfs(cur.left);
        if(!pre) {
            head = cur;
        } else {
            cur.left = pre;
            pre.right = cur;
        }
        pre = cur;
        dfs(cur.right);
    }

    var pre = null;
    var head;
    dfs(root);
    head.left = pre;
    pre.right = head;
    return head;
};