// 普利姆算法（加点法）

// 克鲁斯卡尔算法（加边法）

// 表示一个图，可以使用点集合和边集合
var max = 100000;
var pointSet = [];
var distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function getIndex(str, pointSet) {
    for(var i = 0; i < pointSet.length; i ++) {
        if(str === pointSet[i].value) return i;
    }
    return -1;
}

// 根据当前有的节点来进行判断，获取到距离最近的节点
function getMinDisNode(pointSet, distance, nowPointSet) {
// 参数： 点的集合，边的集合，当前已经连接的集合
    var fromNode = null; //线段的起点
    var minDisNode = null; //线段的终点
    var minDis = max;
    // 根据当前已有的这些点为起点，依次判断连接其他点的距离是多少
    for(var i = 0; i < nowPointSet.length; i ++) {
        var nowPointIndex = getIndex(nowPointSet[i].value, pointSet);
        for(var j = 0; j < distance[nowPointIndex].length; j ++) {
            var thisNode = pointSet[j];
            if(nowPointSet.indexOf(thisNode) < 0 //该点不能是已接入的点
                && distance[nowPointIndex][j] < minDis //其次点之间的距离是目前最小距离
            ) { 
                fromNode = nowPointSet[i];
                minDisNode = thisNode;
                minDis = distance[nowPointIndex][j];
            }
        }
    }
    fromNode.neighbor.push(minDisNode);
    minDisNode.neighbor.push(fromNode);
    return minDisNode;
}
function prim(pointSet, distance, start) {
    var nowPointSet = [];
    nowPointSet.push(start);
    // 获取最小代价的边
    while(true) {
        var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisNode);
        if(nowPointSet.length === pointSet.length) break;
    }
}

prim(pointSet, distance, pointSet[2]);
console.log(pointSet);