/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 思路：顺时针打印矩阵的顺序是 “从左向右、从上向下、从右向左、从下向上” 循环。
 * 算法流程：
 * 1. 空值处理：当 matrix 为空时，直接返回空列表 [] 即可。
 * 2. 初始化： 矩阵 左、右、上、下 四个边界 l , r , t , b ，用于打印的结果列表 res 。
 * 3. 循环打印: "从左向右、从上向下、从右向左、从下向上"四个方向，每个方向打印中做以下三事；
 *  1. 根据边界打印，即将元素按顺序添加至列表 res 尾部；
 *  2. 边界向内收缩 1 （代表已被打印）；
 *  3. 判断是否打印完毕（边界是否相遇），若打印完毕则跳出。
 * 4. 返回值： 返回 res 即可。

 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) return [];
    let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1;
    let res = [];

    while(true) {
        for(let i = left; i <= right; i ++) { // 从左至右
            res.push(matrix[top][i]);
        }
        top ++;
        if(top > bottom) break;
    
        for(let j = top; j <= bottom; j ++) { // 从上至下
            res.push(matrix[j][right]);
        }
        right --;
        if(right < left) break;
    
        for(let k = right; k >= left; k --) { // 从右至左
            res.push(matrix[bottom][k]);
        }
        bottom --;
        if(bottom < top) break;
    
        for(let p = bottom; p >= top; p --) { // 从下至上
            res.push(matrix[p][left]);
        }
        left ++;
        if(left > right) break;
    }

    return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))