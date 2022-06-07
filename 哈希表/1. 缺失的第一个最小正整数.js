/**
 * 找出给定数组中 缺失的第一个最小的正整数
 * 
 * 示例：  [1, 2, -1, 0]  3
 *        [-3, 3, 4, 5]  1
 * 
 * -231 <= nums[i] <= 231 - 1
 * 
 * 要求：时间复杂度为 O(n)，空间复杂度 O(1)。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let length = nums.length;
    // 未出现的最小正整数的范围一定在[1, length + 1], 
    // 当且仅当1~length都出现一次的时候，才会是length+1
    for(let i = 0; i < length; i ++) {
        // 将不care的数据标记到范围之外，且不影响我们后面的标记
        if(nums[i] <= 0 || nums[i] > length) {
            nums[i] = length + 1;
        }
    }
    for(let i = 0; i < length; i ++) {
        let index = Math.abs(nums[i]);
        if(index >= 1 && index <= length && nums[index - 1] > 0) {
            // 标记为负数 注意：位置1标记是从0的位置开始的
            nums[index - 1] = - nums[index - 1];
        }
    }
    for(let i = 0; i < length; i ++) {
        if(nums[i] > 0) {
            return i + 1;
        }
    }
    return length + 1;
};

console.log(firstMissingPositive([1, 2, -1, 0]))