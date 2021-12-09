/* 
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
示例 1：
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

示例 2：
输入：arr = [0,1,2,1], k = 1
输出：[0]

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    // 利用选择排序
    for(var i = 0; i < k; i ++) {
        var minIndex = i;
        for(var j = i + 1; j < arr.length; j ++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 交换最小值到前面
        var tmp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tmp; 
    }
    return arr.slice(0, k);
};


var quickSort = function(arr, i, j, k) {
    var mark = arr[i]; // 确立第一个为标兵
    var end = j;
    while(i < j) {
        while(i < j && arr[j] >= mark) j --;
        if(i < j) {
            arr[i] = arr[j];
            i ++;
        }
        while(i < j && arr[i] < mark) i ++;
        if(i < j) {
            arr[j] = arr[i];
            j --;
        }
    }
    arr[i] = mark;
    if(i == k) return;
    if(i > k) quickSort(arr, 0, i - 1, k);
    if(i < k) quickSort(arr, i + 1, end, k);
};
var getLeastNumbers1 = function(arr, k) {
    // 利用快速排序
    if(arr.length <= k) return arr;
    quickSort(arr, 0, arr.length - 1, k);
    return arr.slice(0, k);
};

console.log(getLeastNumbers1([0,0,1,2,4,2,2,3,1,4], 8))