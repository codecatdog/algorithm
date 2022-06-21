/**
 * 设计一个算法，找出数组中最小的k个数。以 任意顺序 返回这k个数均可。
 * 输入： arr = [1,3,5,7,2,4,6,8], k = 4
 * 输出： [1,2,3,4]
 * 
 * 思路：题目明显提示了任意顺序返回，利用快速排序，只要找到第k大的数，就可以了。
 *      因为快速排序，每一趟就会确定一个值的位置，且该位置左边的数比他小，右边比他大(升序)
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    if(k === 0) return [];
    var left = 0;
    var right = arr.length - 1;
    while(true) {
        var index = quickSort(arr, left, right);
        if(index === k - 1) {
            return arr.slice(0, k);
        } else if(index < k - 1) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }
};

function quickSort(arr, left, right) {
    // Math.random() 只能取到[0, 1)，所以必须 right - left + 1 才能使index取到right
    var index = Math.floor(Math.random() * (right - left + 1)) + left;
    var pivot = arr[index]; // 每一次随机取一个值作为 当次要确定位置 的值
    swap(arr, left, index); // 将基准值放到首位

    var mark = left;
    for(var i = left + 1; i <= right; i ++) {
        if(arr[i] < pivot) {
            mark++;
            swap(arr, mark, i);
        }
    }
    swap(arr, mark, left);
    return mark;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(smallestK(arr = [1,3,5,7,2,4,6,1,8], k = 4))