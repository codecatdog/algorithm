// var c = {
//     value: 3,
//     next: null
// }

// var b = {
//     value: 2,
//     next: c
// }

// var a = {
//     value: 1,
//     next: b  //存的b的地址
// }

// a.next === b;

// var d = {
//     value: 4,
//     next: null
// }
// // a, b间插入d
// d.next = b;
// a.next = d;

function Node(value) {
    this.value = value;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);

a.next = b;
b.next = c;

// console.log(a.next.value);

var arr = [1, 2, 3, 4 ,5];

function traversalArr(arr) {
    if (arr == null) return;
    for(var i = 0; i < arr.length; i ++) {
        console.log(arr[i]);
    }
}

function traversalLink(root) {
    var temp = root;
    while(temp) {
        if(temp != null) {
            console.log(temp.value);
        } else {
            break;
        }
        temp = temp.next;
    }
}

traversalLink(a)
// 链表递归遍历
function recursionTraversal(root) {
    if(root == null) return;
    console.log(root.value)
    recursionTraversal(root.next);
}

// 链表的逆置
function reverseLink(root) {
    if(root == null || root.next == null) {
        return root;
    } else {
        var result = reverseLink(root.next);
        root.next.next = root; //让当前节点的下一个节点指向自己
        root.next = null; //删除原有指向
        return result; // 返回新的根节点
    }
}
// 非递归 链表的逆置
function reverseLink2(root) {
    let pre = null;
    let cur = root;

    while(cur) {
        tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre
}


console.log(reverseLink2(a));