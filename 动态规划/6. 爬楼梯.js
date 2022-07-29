/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp0 = 1;
    let dp1 = 1;
    let res;
    for(let i = 2; i <= n; i++) {
        res = dp0 + dp1;
        dp0 = dp1;
        dp1 = res
    }
    return res;
};