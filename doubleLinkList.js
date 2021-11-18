// 双向链表
function Node(value) {
    this.value = value;
    this.pre = null;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

node1.next = node2;
node2.next = node3;
node2.pre = node1;
node3.pre = node2;