/* 
有三种足够多的硬币，面值为2元，5元，7元
    买一本书需要x元
    如何用最少的硬币组合正好付清
分析： 类型为求最大最小值动态规划

1. 确定状态
    虽然我们不知道最优策略是什么，但是最优策略肯定是k枚硬币a1, a2, ...,ak面值加起来是27
    所以一定有一枚最后的硬币：ak
    除掉这枚硬币，前面硬币的面值加起来是27-ak

    设状态dp[X] = 最少用多少枚硬币拼出X
2. 转移方程
    对于任意X ，dp[X] = min{dp[X-2] + 1, dp[X-5] + 1 , dp[X-7] + 1} (ak = 2, 5, 或7)

3. 初始条件和边界情况
    f[0] = 0，拼不出的Y，f[Y] = 正无穷(用转移方程算不出来，需要手动定义的)

4. 计算顺序
    初始条件： f[0] = 0
    然后计算f[1], f[2],...,f[27]
    当我们计算到f[X]时，f[X-2] , f[X-5] , f[X-7] 都已经得到结果了

算法时间复杂度（即需要进行的步数）：X * 3 （O(N*M)）
*/

/**
 * @param {number} x
 * @return {number}
 */
var coinChange = function(x) {
    var dp = [];
    dp[0] = 0;
    for(var i = 1; i <= x; i ++) {
        var d1, d2, d3;
        var one = i -2, two = i -5, three = i - 7;
        if(one < 0) {
            d1 = Infinity;
        } else {
            d1 = dp[one];
        }
        if(two < 0) {
            d2 = Infinity;
        } else {
            d2 = dp[two];
        }
        if(three < 0) {
            d3 = Infinity;
        } else {
            d3 = dp[three];
        }
        dp[i] = Math.min(d1, d2, d3) + 1;
    }
    return dp[x] == Infinity ? 0 : dp[x];
};

console.log(coinChange(27));