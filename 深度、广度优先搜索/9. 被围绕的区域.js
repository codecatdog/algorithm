

/**
 * 将矩阵中被'x'围绕的'o'改为'x'
 * @param {number[][]} board 
 */
const func = (board) => {
    // 从边界开始遍历，标记与边界上的'o'相连的'o' -> 'A'。
    // 标记结束后，重新遍历矩阵，将没被标记的'o'变为'x',被标记过的'o' 恢复原状。
    const m = board.length; // 行
    const n = board[0].length; // 列
    for(let i = 0; i < n; i ++) { // 遍历第一和倒数第一行
        dfs(board, 0, i)
        dfs(board, m - 1, i)
    }

    for(let j = 0; j < m; j ++) { // 遍历第1列和倒数第一列
        dfs(board, j, 0);
        dfs(board, j, n - 1);
    }

    for(let i = 0; i < m; i ++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 'O') {
                board[i][j] = 'X'
            } else if(board[i][j] === 'A') {
                board[i][j] = 'O'
            }
        }
    }

    function dfs(arr, i, j) {
        // 如果当前值不是'o'获取超出边界
        if(i < 0 || i >= m || j < 0 || j >= n || arr[i][j] !== 'O') return;
        arr[i][j] = 'A';
        // 四个方向搜索相邻的'o'
        dfs(arr, i - 1, j);
        dfs(arr, i + 1, j);
        dfs(arr, i, j - 1);
        dfs(arr, i, j + 1);
    }
}

