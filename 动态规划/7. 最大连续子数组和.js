/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的 连续 子数组（子数组最少包含一个元素），
 * 返回其最大和。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 设dp[i] 为以nums[i]结尾的连续子串的最大和
    const dp = [];
    dp[0] = nums[0];
    let maxSum = dp[0];
    for(let i = 1; i< nums.length; i++) {
        dp[i] = dp[i - 1] > 0 ? (dp[i - 1] + nums[i]) : nums[i];
        maxSum = Math.max(maxSum, dp[i]);
    }
    return maxSum;
};