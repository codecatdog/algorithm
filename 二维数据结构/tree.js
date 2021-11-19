

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

// 前序遍历
function preTraversal(root) {
    if(root == null) return;
    console.log(root.value);
    preTraversal(root.left);
    preTraversal(root.right);
}
preTraversal(a);

// 中序遍历
function inTraversal(root) {
    if(root == null) return;
    inTraversal(root.left);
    console.log(root.value);
    inTraversal(root.right);
}
inTraversal(a);

// 后序遍历
function postTraversal(root) {
    if(root == null) return;
    postTraversal(root.left);
    postTraversal(root.right);
    console.log(root.value);
}
postTraversal(a);

// 非递归算法
// 定义一个栈
function Stack() {
    this.arr = [];
    this.pop = function() {
        return this.arr.pop();
    }
    this.push = function(value) {
        this.arr.push(value);
    }
}

function preTrav(root) {
    if(root == null) return;
    var stack = new Stack();
    stack.push(root);
    while(stack.arr.length) {
        var node = stack.pop();
        console.log(node.value);
        if(node.right) stack.push(node.right); //先进后出
        if(node.left) stack.push(node.left);
    }
}
console.log('非递归前序遍历：\n');
preTrav(a);

function inTrav(root) {
    if(root == null) return;
    var stack = new Stack();
    var p = root;
    while(stack.arr.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        var node = stack.pop();
        console.log(node.value);
        p = node.right;
    }
}
console.log('非递归中序遍历：\n');
inTrav(a);

function posTrav(root) {
    if(root == null) return;
    var stack = new Stack();
    lastVisit = null; //用于标记是否从右子树返回
    var p = root;
    while(stack.arr.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        node = stack.pop();
        if(node.right == null || node.right == lastVisit) {
            console.log(node.value);
            lastVisit = node;
        } else {
            stack.push(node);
            p = node.right;
        }
    }
}
console.log('非递归后序遍历：');
posTrav(a);