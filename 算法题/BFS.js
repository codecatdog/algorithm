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