/* 
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

示例 1:
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    var row = grid.length;
    var column = grid[0].length;
    var dp = new Array(row);
    // dp增加一行一列
    for(var k = 0; k <= row; k ++) {
        dp[k] = new Array(column);
        for(var h = 0; h <= column; h ++) {
            dp[k][h] = 0;
        }
    }
    for(var i = 1; i <= row; i ++) {
        for(var j = 1; j <= column; j ++) {
            
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[row][column];
};

console.log(maxValue([
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ]));