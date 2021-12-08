/* 
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

算法流程：
pathSum(root, sum) 函数：
初始化： 结果列表 res ，路径列表 path 。
返回值： 返回 res 即可。

recur(root, tar) 函数：
递推参数： 当前节点 root ，当前目标值 tar 。
终止条件： 若节点 root 为空，则直接返回。

递推工作：
路径更新： 将当前节点值 root.val 加入路径 path ；
目标值更新： tar = tar - root.val（即目标值 tar 从 sum 减至 0 ）；
路径记录： 当 ① root 为叶节点 且 ② 路径和等于目标值 ，则将此路径 path 加入 res 。
先序遍历： 递归左 / 右子节点。
路径恢复： 向上回溯前，需要将当前节点从路径 path 中删除，即执行 path.pop() 。

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    var res = [], path = [];
    const recur = function(node, tar) {
        if(node == null) return;
        path.push(node.val);
        tar -= node.val;
        if(tar == 0 && !node.left && !node.right) {
            res.push(path.slice());
        }
        recur(node.left, tar);
        recur(node.right, tar);
        path.pop();
    }

    recur(root, target);
    return res;
};