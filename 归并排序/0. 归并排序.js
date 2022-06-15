/**
 * 对数组进行升序排序：使用归并排序
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    sort(nums, 0, nums.length - 1);
    return nums;
    function sort(nums, left, right) {
        if (left >= right) return;
        // 分
        var mid = Math.floor((left + right) / 2);
        sort(nums, left, mid);
        sort(nums, mid + 1, right);
        // 并
        merge(nums, left, right, mid);
    }
};

function merge(nums, left, right, mid) {
    // 合并两个有序的子序列
    var temp = []; // 比较两个子序列，选出较小的数添加进temp中
    var i = left, j = mid + 1, p = 0; // i指向第一个子序列的首位，j指向第二个子序列的首位
    while(i <= mid && j <= right) {
        if(nums[i] < nums[j]) {
            temp[p++] = nums[i++];
        } else {
            temp[p++] = nums[j++];
        }
    }
    while(i <= mid) {
        temp[p++] = nums[i++];
    }
    while(j <= right) {
        temp[p++] = nums[j++];
    }
    // temp中保存了两个子序列的排序后的结果，将其赋值给nums的left到right位置的元素,
    // nums中left到right就排好序了
    for(var k = 0; k < p; k++) {
        nums[left + k] = temp[k];
    }
}
console.log(sortArray([5, 2, 3, 1, 0, 5, 6, 9, 3, 2]))

