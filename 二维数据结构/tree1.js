// 根据前序中序还原二叉树
var preOrder = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var inOrder = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(preOd, inOd) {
    if(preOd == null || inOd == null || preOd.length == 0 || inOd.length == 0 || preOd.length != inOd.length) return null;
    var root = new Node(preOd[0]); //确定根节点
    var index = inOd.indexOf(root.value); //找到根节点在中序遍历中的位置
    var preleft = preOd.slice(1, index + 1); //前序遍历的左子树
    var preright = preOd.slice(index + 1, preOd.length); //前序遍历的右子树
    var inleft = inOd.slice(0, index); //中序遍历的左子树
    var inright = inOd.slice(index + 1, inOd.length); //中序遍历的右子树

    root.left = f1(preleft, inleft); //左子树还原
    root.right = f1(preright, inright); //右子树还原
    return root;
}

var root = f1(preOrder, inOrder);
console.log(root.left.value, root.right.value);

// 根据中序后序还原二叉树
var inOrder = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
var posOrder = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function f2(inOd, posOd) {
    if(inOd == null || posOd == null || inOd.length == 0 || posOd.length == 0 || inOd.length != posOd.length) return null;
    var root = new Node(posOd[posOd.length - 1]); //确定根节点
    var index = inOd.indexOf(root.value); //确定根节点在中序的位置
    
    var inLeft = inOd.slice(0, index);
    var inRight = inOd.slice(index + 1, inOd.length);
    var posLeft = posOd.slice(0, index);
    var posRight = posOd.slice(index, posOd.length - 1);

    root.left = f2(inLeft, posLeft);
    root.right = f2(inRight, posRight);
    return root;
}

var root = f2(inOrder, posOrder);
console.log(root);