/* 
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]

解题思路：
1. 题目要求的二叉树的 从上至下 打印（即按层打印），又称为二叉树的 广度优先搜索（BFS）。
2. BFS 通常借助 队列 的先入先出特性来实现。
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
 * @return {number[]}
 */
 var levelOrder1 = function(root) {
    if(root == null) return [];
    var arr = []; //arr为队列
    var res = [];
    arr.push(root);
    while(arr.length) {
        var node = arr.shift();
        res.push(node.val);
        if(node.left) arr.push(node.left);
        if(node.right) arr.push(node.right);
    }
    return res;
};


/* 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

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
 * @return {number[][]}
 */
 var levelOrder2 = function(root) {
    if(root == null) return [];
    var arr = []; //队列，用于遍历节点
    var res = []; 
    arr.push([root, 0]);
    while(arr.length) {
        var node = arr.shift();
        if(!res[node[1]]) {
            var a = [];
            a.push(node[0].val);
            res[node[1]] = a;
        } else {
            res[node[1]].push(node[0].val)
        }
        if(node[0].left) arr.push([node[0].left, node[1] + 1]);
        if(node[0].right) arr.push([node[0].right, node[1] + 1]);
    }
    return res;
};

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

levelOrder2(a);

/* 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：
[
  [3],
  [20,9],
  [15,7]
]

解析：层序遍历 + 倒序
    此方法的优点是只用列表即可，无需其他数据结构。
    偶数层倒序： 若 res 的长度为 奇数 ，说明当前是偶数层，则对 tmp 执行 倒序 操作后再添加进res中。

也可以采用双端队列来实现：
    当前层为奇数时，将元素从尾部添加进tmp；当前层为偶数时，从头部添加进tmp。然后将tmp添加至res。

复杂度分析：
时间复杂度 O(N) ： NN 为二叉树的节点数量，即 BFS 需循环 N 次，占用 O(N) 。共完成 少于 N 个节点的倒序操作，占用 O(N) 。
空间复杂度 O(N) ： 最差情况下，即当树为满二叉树时，最多有 N/2 个树节点同时在 queue 中，使用 O(N) 大小的额外空间。

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
 * @return {number[][]}
 */
var levelOrder3 = function(root) {
    if(root == null) return [];
    var queue = []; //队列
    var res = []; //返回结果
    queue.push(root);
    while(queue.length) {
        var tmp = []; //暂存当前层节点，最后通过res.push(tmp) 添加进返回结果中
        for(var i = queue.length; i > 0; i --) {
            var node = queue.shift(); //取出队列头部元素
            tmp.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(res.length % 2 == 1) { //奇数层
            tmp = tmp.reverse();
        }
        res.push(tmp);
    }

    return res;
};

console.log(levelOrder3(a));