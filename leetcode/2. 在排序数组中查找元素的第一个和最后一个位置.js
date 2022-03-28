/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

示例 1：
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

示例 2：
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length;
    let results = [-1, -1];
    if(len === 0) 
        return results;
    let left = 0;
    let right = len - 1;
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        if(target < nums[mid]) {
            right = mid - 1;
        } else if(target > nums[mid]) {
            left = mid + 1;
        } else {
            let i = mid, j = mid;
            while(i >= 0) {
                if(nums[i] === nums[mid]) i --;
                else break;
            }
            while(j < len) {
                if(nums[j] === nums[mid]) j ++;
                else break;
            }
            results[0] = i + 1, results[1] = j - 1;
            break;
        }

    }
    return results;

};


console.log(searchRange([10], 10))