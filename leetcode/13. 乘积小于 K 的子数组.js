/**
 * 乘积小于 K 的连续子数组
 * 
 * 给你一正个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 
 * 的 连续 子数组的数目。(注意是连续子数组)
 * 
 * 示例 1：
 * 输入：nums = [10,5,2,6], k = 100
 * 输出：8
 * 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]
 * (子数组的元素在原数组中是连续的)
 * 
 * 思路：滑动窗口
 * 1. 使用left，right标记 满足连续数组元素乘积小于k 的索引
 * 2. 使用right遍历数组，
 * 3. 若 从left到right 的元素乘积mul >= k, left向右移动，直到满足 mul < k
 * 4. 若从left到right的元素乘积mul < k, 则当right每增加1，新增的连续子数组个数为right-left+1 
 *      (新增nums[right], (nums[right], nums[right-1]), ... (nums[left], ..., nums[right])
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // 正整数nums中的值必然 >= 1
    if(k <= 1) return 0;

    let mul = 1; // 记录乘积
    let left = 0, right = 0; 
    let ans = 0; // 记录满足乘积小于k的连续子数组的个数

    while(right < nums.length) {
        mul *= nums[right];
        while(mul >= k) {
            // 当前序列乘积 >= k，从乘积中去掉左边的数，然后将left右移
            mul /= nums[left];  // 
            left ++;
        }
        ans += right - left + 1;
        right ++;
        
    }

    return ans;
};

console.log(numSubarrayProductLessThanK(nums = [10,5,2,6], k = 100))