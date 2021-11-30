/* 
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:
现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。

解析：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/solution/mian-shi-ti-04-er-wei-shu-zu-zhong-de-cha-zhao-zuo/

将矩阵左旋45度，类似一个二叉搜索树，以15为根节点，左边的都比它小，右边的比他大。
因此从右上角元素开始搜索，小于target，则行++，大于target，则列-- 。
时间复杂度： O(N + M)    N 和 M 分别为矩阵行数和列数(访问到的下标的行最多增加 N 次，列最多减少 M 次，因此循环体最多执行 N + M 次。)
空间复杂度： O(1)
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


 var findNumberIn2DArray = function(matrix, target) {
    if(matrix == null || matrix.length == 0) return false;
    var col = matrix[0].length - 1;
    var row = matrix.length - 1;

    var i = 0;
    while(i <= row && col >= 0) {
        if(matrix[i][col] < target) {
            i ++;
        } else if(matrix[i][col] > target) {
            col --;
        } else {
            return true;
        }
    }
    return false;
};