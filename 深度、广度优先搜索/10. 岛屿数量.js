/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
    输出：1
 */


/**
 * 总结就是 岛屿数量就是深度搜索的次数
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let nums = 0;
    for(let i = 0; i < m; i ++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                dfs(grid, i, j);
                nums++;
            }
        }
    }
    return nums;
};

function dfs(grid, i, j) {
    const m = grid.length;
    const n = grid[0].length;
    if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1') return;
    grid[i][j] = '0' // 标记为'0' 已访问过
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
}

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]))