/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(k > nums.length) return;
    var left = 0;
    var right = nums.length - 1;
    while(true) {
        var index = partion(nums, left, right);
        if(index === k - 1) {
            return nums[index];
        } else if(index < k - 1) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }
};

function partion(arr, left, right) {
    var index = Math.floor(Math.random() * (right - left + 1)) + left;
    var pivot = arr[index]; // 随机从arr[left,right]中取一个值作为基准值

    swap(arr, left, index); // 将pivot放到首位
    var mark = left;
    for(var i = left + 1; i <= right; i++) {
        if(arr[i] > pivot) {
            mark++;
            swap(arr, mark, i);
        }
    }
    swap(arr, mark, left); // 将pivot放到最终的位置
    return mark;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(findKthLargest([3,2,1,5,6,6,4], k = 2))