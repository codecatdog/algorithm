/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。
 * 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * 
 * 思路1：动态规划
 * 1. 设dp[i] 为长度i的绳子剪开后的最大乘积
 * 2. 假设长度为i的绳子剪的第一段绳长为j(1 <= j < i)，则第二段可以分为剪或不剪的情况
 *      若不剪，则dp[i] = j * (i - j);
 *      若继续剪，则dp[i] = j * dp[i - j];
 *    因此，状态转移方程为：dp[i] = max(j * (i - j), j * dp[i - j]);
 * 3. 初始状态：dp[0] = 0, dp[1] = 0; dp[2] = 1;
 * 
 */

/**
 * @param {number} n  2 <= n <= 58
 * @return {number}
 */
var cuttingRope = function(n) {
    let dp = [];
    dp[0] = 0, dp[1] = 0, dp[2] = 1;
    let ans;
    for(let i = 3; i <= n; i ++) {
        ans = 1;
        for(let j = 1; j <= i/2; j ++) {
            ans = Math.max(ans, j * (i - j), j * dp[i - j]);
        }
        dp[i] = ans;
    }
    return dp[n];

};

console.log(cuttingRope(5))