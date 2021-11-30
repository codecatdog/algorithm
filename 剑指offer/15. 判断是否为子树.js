/* 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:
     3
    / \
   4   5
  / \
 1   2

给定的树 B：
   4 
  /
 1

返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(A == null || B == null) return false;
    var stack = [];
    stack.push(A);
    while(stack.length) {
        var node = stack.pop();
        var flag = 0;
        if(node.val == B.val) { //找到与B根节点相等的A的某节点
            // 遍历B树 与A子树进行比较
            var tmpB = [];
            var tmpA = [];
            tmpA.push(node);
            tmpB.push(B);
            while(tmpB.length) {
                var nodeB = tmpB.pop();
                var nodeA = tmpA.pop();
                if(nodeA == null || nodeB.val !== nodeA.val) {
                    flag = 1;
                    break;
                }
                if(nodeB.right) {
                    tmpB.push(nodeB.right);
                    tmpA.push(nodeA.right);
                }
                if(nodeB.left) {
                    tmpB.push(nodeB.left);
                    tmpA.push(nodeA.left);
                }

            }
            if(!flag) { return true; }
        }
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return false;
};

/* 方法二：递归 */
var isSubStructure2 = function(A, B) {
    // A是否包含B
    /*  当节点 B 为空：说明树 B 已匹配完成（越过叶子节点），因此返回 true ；
        当节点 A 为空：说明已经越过树 AA 叶子节点，即匹配失败，返回 false ；
        当节点 A 和 B 的值不同：说明匹配失败，返回 false ；
    */
    const recur = (A, B) => {
        if (B === null) {
            return true;
        }
        if (A === null || A.val !== B.val) {
            return false;
        }
        return recur(A.left, B.left) && recur(A.right, B.right);
    }
    return (A !== null && B !== null) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
}

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

var h = new Node('f');
var i = new Node('d');
h.right = i;

console.log(isSubStructure(a, h));
