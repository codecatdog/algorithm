/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4 
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 */

/** 思路：动态规划
 *  设dp[i] 为以nums[i]结尾的最长递增子序列
 *  则转移方程：dp[i] = max(dp[j]) + 1; // 0 <= j < i当nums[i] > nums[j]
 *  初始化：dp[0] = 1
 *  最后：max(dp)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = [];
    dp[0] = 1;
    let max = 1;
    for(let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for(let j = 0; j < i ; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1); 
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))