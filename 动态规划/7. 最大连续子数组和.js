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

/**
 * 扩展： 返回具有最大和的连续子数组
 * @param {number[]} nums 
 * @return {number[]}
 */
var maxSumArray = function(nums) {
    if(nums.length === 0) return nums;
    const dp = []; // dp[i] 表示以nums[i]结尾的 最大和连续子数组
    dp[0] = nums[0];
    let maxSum = dp[0]; // 记录 连续子数组的 最大和
    let right = 0; // 记录最大和的连续子数组的 结束坐标
    let dpLen = 1; // 记录以nums[i]结尾的 最大和 连续子数组的长度
    let len = 1; // 记录 具有最大和的连续子数组 的长度
    for(let i = 1; i < nums.length; i++) { // [-2,1,-3,4,-1,2,1,-5,4]
        if(dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i];
            dpLen ++;
        } else {
            dp[i] = nums[i];
            dpLen = 1;
        }
        if(dp[i] > maxSum) {
            right = i;
            len = dpLen;
            maxSum = dp[i];
        }
    }
    return nums.slice(right - len + 1, right + 1);
}

console.log(maxSumArray([5,4,-1,7,8]))
