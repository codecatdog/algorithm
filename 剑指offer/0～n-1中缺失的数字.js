/* 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

示例 1:
输入: [0,1,3]
输出: 2

示例 2:
输入: [0,1,2,3,4,5,6,7,9]
输出: 8

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // 正常情况下nums[i]==i，当出现第一个空缺数字后，后面的数字就会向前移位，便出现了nums[i] !== i的情况
    // 有序数组 常用二分法
    var left = 0;
    var right = nums.length - 1;
    while(left <= right) {
        var mid = Math.floor((left + right) / 2);
        if(nums[mid] === mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};