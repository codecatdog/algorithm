/* 统计一个数字在排序数组中出现的次数。

示例 1:
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

示例 2:
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    //  function1 
    // var left = 0;
    // var right = arr.length - 1;
    // var count = 0;
    // while(left < right) {
    //     var mid = Math.floor((left + right) / 2);
    //     if(nums[mid] < target) {
    //         left = mid + 1;
    //     } else {
    //         right = mid;
    //     }
    // }
    // while(left<nums.length && nums[left ++] === target) {
    //     count ++;
    // }
    // return count; 

    // function2
    var index = function(arr, tar) {
        var left = 0;
        var right = arr.length - 1;
        while(left <= right) {
            mid = Math.floor((left + right) / 2);
            if(arr[mid] < tar) left = mid + 1;
            else right = mid - 1;
        }
        return left;
    }
    return index(nums, target + 1) - index(nums, target);
};
