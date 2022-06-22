/**
 * 给定字符串数组 nums 和整数 k，nums 中的每个字符串都表示一个不含前导零的整数。
 * 请返回数组中第 k 个最大的元素。
 */

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
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
    var pivot = arr[index]; // 随机取一个作为基准
    swap(arr, left, index); // 将pivot放到首位
    var mark = left;
    for(var i = left + 1; i <= right; i++) {
        if(aGtB(arr[i], pivot)) { // 注意这里不能用parseInt,因为整数字符串可能超过了number大小限制
            mark++;
            swap(arr, i, mark);
        }
    }
    swap(arr, left, mark);
    return mark;
}
/**
 * 整数字符串a 是否大于 b
 * @param {string} a 
 * @param {string} b 
 */
function aGtB(a, b) {
    var aLen = a.length;
    var bLen = b.length;
    if(aLen !== bLen) {
        return aLen > bLen ? true : false;
    }
    for(var i = 0; i < aLen; i++) {
        if(a[i] > b[i]) {
            return true;
        } else if(a[i] < b[i]){
            return false;
        } else {
            continue;
        }
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(kthLargestNumber(nums = ["3","6","7","7", "10"], k = 1))