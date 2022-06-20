/**
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 * 返回给定数组中的重要翻转对的数量。
 * 
 * 输入: [1,3,2,3,1]
 * 输出: 2 
 * 解释：(3,1)(3,1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {

    var count = 0;
    sort(nums, 0, nums.length - 1);
    return count;

    function sort(nums, left, right) {
        if(left >= right) return;
        var mid = Math.floor((left + right) / 2);
        sort(nums, left, mid);
        sort(nums, mid + 1, right);
        var i = left;
        var j = mid + 1;
        // 计算当前位置的翻转对,每次计算都是当前位置的左数组与还没有比较过的右数组比较,所以累加即可
        // 这里的left绝对在right左边，即 i < j
        while (i <= mid && j <= right) {
            // 按升序排列，若当前nums[i] > 2 * nums[j],则必有nums[i+1] > 2 * nums[j]
            if(nums[i] > 2 * nums[j]) {
                count += mid - i + 1;
                j++;
            } else {
                i ++;
            }
        }
        merge(nums, left, mid, right);
    }

    // 合并连个有序子序列，并统计翻转对
    function merge(nums, left, mid, right) {
        var i = left;
        var j = mid + 1;
        var temp = []; // 暂存排好序的序列
        var p = 0;
        while (i <= mid && j <= right) {
            // 按升序排列
            if (nums[i] < nums[j]) {
                temp[p++] = nums[i++];
            } else {
                temp[p++] = nums[j++];
            }
        }
        while (i <= mid) {
            temp[p++] = nums[i++];
        }
        while (j <= right) {
            temp[p++] = nums[j++];
        }
        for(var k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
        }
    }
};

console.log(reversePairs([5,4,3,2,1]))