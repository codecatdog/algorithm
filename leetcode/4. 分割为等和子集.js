/**
 * 给一个只包含正整数的非空数组nums, 请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等
 * 
 * 示例1：
 *  输入：nums = [1,5,11,5]
 *  输出：true
 *  解释：数组可以分割成 [1, 5, 5] 和 [11] 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var len = nums.length;
    if(len < 2) return false;
    var sum = 0, maxNum = 0;
    for(var i = 0; i < len; i ++) {
        sum += nums[i];
        maxNum = Math.max(maxNum, nums[i]);
    }
    if(maxNum > sum / 2 || sum % 2) return false;

    var target = sum / 2;
    // 创建len行 target+1列 的dp数组
    var dp = new Array(len);
    for(var i = 0; i < len; i ++) {
        dp[i] = new Array(target + 1).fill(0).map(item => false);
    }

    for (var i = 0; i < len; i++) {
        dp[i][0] = true; // 一个都不取
    }
    dp[0][nums[i]] = true;

    for(var i = 1; i < len; i ++){
        var num = nums[i];
        for(var j = 1; j < target + 1; j ++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

        
    return dp[len - 1][target];

};



console.log(canPartition([1,3,4,4]))

/**
 * 解析
 * 
 * 「0 - 1」 背包问题的思路

作为「0-1 背包问题」，它的特点是：「每个数只能用一次」。解决的基本思路是：物品一个一个选，容量也一点一点增加去考虑，这一点是「动态规划」的思想，特别重要。
在实际生活中，我们也是这样做的，一个一个地尝试把候选物品放入「背包」，通过比较得出一个物品要不要拿走。

具体做法是：画一个 len 行，target + 1 列的表格。这里 len 是物品的个数，target 是背包的容量。len 行表示一个一个物品考虑，target + 1多出来的那 1 列，表示背包容量从 0 开始考虑。很多时候，我们需要考虑这个容量为 0 的数值。

状态与状态转移方程
状态定义：
    dp[i][j]表示从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和恰好等于 j。
状态转移方程：
    很多时候，状态转移方程思考的角度是「分类讨论」，对于「0-1 背包问题」而言就是「当前考虑到的数字选与不选」。
    不选择 nums[i]，如果在 [0, i - 1] 这个子区间内已经有一部分元素，使得它们的和为 j ，那么 dp[i][j] = true；
    选择 nums[i]，如果在 [0, i - 1] 这个子区间内就得找到一部分元素，使得它们的和为 j - nums[i]。
状态转移方程：dp[i][j] = dp[i - 1][j] or dp[i - 1][j - nums[i]]

一般写出状态转移方程以后，就需要考虑初始化条件。
    如果不选取任何正整数，则被选取的正整数等于 0。因此对于所有 0 <= i < len，都有 dp[i][0]=true

    当 i==0 时，只有一个正整数 nums[0] 可以被选取，因此dp[0][nums[0]]

    输出：
        dp[len - 1][target]，这里 len 表示数组的长度，target 是数组的元素之和（必须是偶数）的一半
 */