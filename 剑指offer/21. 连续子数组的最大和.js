/* 
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

示例1:
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums == null || nums.length == 0) return 0;

    // 前i项最大和： 当 dp[i - 1] > 0 时：执行 dp[i] = dp[i-1] + nums[i] ；
    // 当 dp[i - 1] ≤0 时：执行 dp[i] = nums[i] ；

    var former = 0; //dp[i - 1]
    var cur = nums[0]; //记录dp[i]的值 
    var max = nums[0];

    for(var i = 0; i < nums.length; i ++) {
        cur = nums[i];
        if(former > 0) cur += former;
        if(cur > max) max = cur;
        former = cur;
    }

    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))