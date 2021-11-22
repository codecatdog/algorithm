function Node(value) {
    this.value = value;
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

// 深度优先搜索 (对于二叉树来说，和前序遍历一样)
function DFSearch(root, target) {
    if(root == null) return false;
    if(root.value == target) return true;
    var left = DFSearch(root.left, target);
    var right = DFSearch(root.right, target);
    return left || right;
}

// 广度优先搜索 
function BFSearch(rootList, target) {
    if(rootList == null || rootList.length == 0) return false;
    var childList = [];
    for(var i = 0; i < rootList.length; i ++) {
        if(rootList[i] && rootList[i].value == target) {
            return true;
        } else {
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return BFSearch(childList, target);
    
}

console.log(BFSearch([a], 'f'));