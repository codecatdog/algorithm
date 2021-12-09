/* 
如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

示例 1：
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]

示例 2：
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]

*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = [];

};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 维护一个有序数组
    if(this.arr.length == 0) {
        this.arr.push(num);
        return;
    }
    for(var i = this.arr.length - 1; i >= 0; i --) {
        if(this.arr[i] > num) {
            this.arr[i + 1] = this.arr[i];
        } else {
            break;
        }
    }
    this.arr[i + 1] = num;
    console.log(this.arr)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    var len = this.arr.length;
    if(len == 0) return null;
    if(len % 2) { //奇数个数
        return this.arr[Math.floor(len / 2)];
    } else {
        return (this.arr[len / 2] + this.arr[len / 2 - 1]) * 0.5;
    }
};

var a = new MedianFinder();
a.addNum(1);
a.addNum(2);
// a.addNum(3);
console.log(a.findMedian());

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */