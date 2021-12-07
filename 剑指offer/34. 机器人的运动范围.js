/* 
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：
输入：m = 2, n = 3, k = 1
输出：3

示例 2：
输入：m = 3, n = 1, k = 0
输出：1

1 <= n,m <= 100
0 <= k <= 20

题解： 类似于33题
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    var arr = new Array(m); //用于标记访问过的元素
    for(var h = 0; h < m; h ++) {
        arr[h] = new Array(n);
        for(var r = 0; r < n ; r ++) {
            arr[h][r] = 1;
        }
    }
    const dfs = function(i, j, k) {
        if(i < 0 || i >= m || j < 0 || j >= n || !arr[i][j]) return 0;
        var sum = Math.floor(i / 100) + Math.floor(i / 10) + i % 10 + Math.floor(j / 100) + Math.floor(j / 10) + j % 10;
        if(sum > k) return 0;
        arr[i][j] = 0; // 标记访问元素
        return 1 + dfs(i - 1, j, k) + dfs(i + 1, j, k) + dfs(i, j - 1, k) + dfs(i, j + 1, k);
    }
    return dfs(0, 0, k);
};

console.log(movingCount(m = 3, n = 1, k = 0))