/**
 * 先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[20,9],[15,7]]
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
 * 层序遍历的扩展
 * 
 * 使用一个队列，从左至右依次访问每一层节点；
 * 当前层数为偶数层时，从左至右加入到数组中；当前层数为奇数层时，从右至左加入到数组中；
 * 每一层都是一个数组；因此只需要插入数组时，判断当前层数，然后选择从头部还是尾部插入
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let ans = [];
    let queue = [];
    queue.push(root);
    let isOrderLeft = true; // 是否从左至右遍历
    while(queue.length) {
        let arr = []; // 每一层遍历结果放到一个数组中
        let size = queue.length; // 每一层的节点数
        for(let i = 0; i < size; i ++){
            const p = queue.shift();
            if(isOrderLeft) { // 从左至右遍历时，直接取节点插入到当前层数组结果末尾
                arr.push(p.val) 
            } else { // 从右至左时，将节点插入到当前层结果数组的头部
                arr.unshift(p.val);
            }
            if(p.left) {
                queue.push(p.left);
            }
            if(p.right) {
                queue.push(p.right);
            }
        }
        isOrderLeft = !isOrderLeft;
        ans.push(arr);
    }
    return ans;
};