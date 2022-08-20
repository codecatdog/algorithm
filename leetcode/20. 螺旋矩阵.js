/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */
/**
 * 初始化四个边界，按照 从左至右，从上到下，从右到左，从下到上的顺序遍历边界；
 * 每遍历完一条边界，修改边界值，使圈子越来越小；
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let res = []; //最终结果
    // 初始时边界：左-0，右-最大列，上-0，下-最大行；
    let [l, r, t, b] = [0, n - 1, 0, m - 1];
    // 记录未访问的数量
    let unVisitedNum = m * n; 
    while (unVisitedNum > 0) {
        for (let i = l; i <= r && unVisitedNum; i++) { // 从左至右遍历上边界
            res.push(matrix[t][i]);
            unVisitedNum--;
        }
        t++; // 上边界遍历完，上边界下移一行
        for (let i = t; i <= b && unVisitedNum; i++) { //从上到下
            res.push(matrix[i][r]); 
            unVisitedNum--;
        }
        r--; // 缩小右边界
        for (let i = r; i >= l && unVisitedNum; i--) { // 从右到左
            res.push(matrix[b][i]); 
            unVisitedNum--;
        }
        b--; // 缩小下边界
        for (let i = b; i >= t && unVisitedNum; i--) { // 从下到上
            res.push(matrix[i][l]); 
            unVisitedNum--;
        }
        l++; // 缩小左边界
    }
    return res;
};
console.log(spiralOrder(matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))