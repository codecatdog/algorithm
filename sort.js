
var arr = [2, 1, 3, 0, 4, 23, 9, 5, 7, 3, 8];

// 排序的本质是比较和交换
function compare(a, b) { //比较得出是否需要交换
    if (a > b) {
        return true;
    }
    return false;
}
function exchange(arr, a, b) { //将数组中a、b位进行交换
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr) {  //各种排序算法
    // 1. 冒泡排序
    for(var i = 0; i < arr.length - 1; i ++) {
        for(var j = 0; j < arr.length - 1 - i ; j ++) { //找出一个最大数
            if(compare(arr[j], arr[j + 1])) {
                exchange(arr, j , j + 1);
            }
        }
    }
    // 2. 选择排序
    // 内层循环，每一轮选出一个最小的，放在最前面
    for( var i = 0; i < arr.length; i ++) {
        var minIndex = i;
        for(var j = i; j < arr.length; j ++) {
            if(compare(arr[minIndex], arr[j])) {
                minIndex = j
            }
        }
        exchange(arr, minIndex, i);
    }

}

// 快速排序 空间复杂度较高，逻辑容易理解的版本
function quickSort1(arr) {
    if(arr == null || arr.length == 0) return [];
    // 选一个标准
    var leader = arr[0];
    // 小的站左边，大的站右边
    var left = [];
    var right = [];
    for(var i = 1; i < arr.length; i ++) {
        if(arr[i] < leader) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    left = quickSort1(left);
    right = quickSort1(right);
    left.push(leader);
    return left.concat(right);
}

// 快速排序 标准版
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function quickSortSub(arr, begin, end) {
    if(begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left ++; while(left < right && arr[left] < arr[begin]);
        do right --; while(right > left && arr[right] > arr[begin]);
        if(left < right) swap(arr, left, right);
    }while(left < right);
    var swapPoint = left == right ? right - 1: right;
    swap(arr, begin, swapPoint);
    quickSortSub(arr, begin, swapPoint);
    quickSortSub(arr, swapPoint + 1, end);
}
function quickSortSub2(arr, begin, end) {
    if(begin >= end) return;
    var left = begin;
    var right = end;
    baseValue = arr[begin];
    while(left < right) {
        while(right > left && arr[right] >= baseValue) right --; 
        arr[left] = arr[right];
        while(left < right && arr[left] <= baseValue) left ++;
        arr[right] = arr[left];
    }
    arr[left] = baseValue;
    quickSortSub2(arr, begin, right - 1);
    quickSortSub2(arr, right + 1, end);
    
}
function quickSort(arr) {
    quickSortSub2(arr, 0, arr.length - 1);
    // quickSortSub(arr, 0, arr.length);
}

console.log(quickSort(arr), arr);
