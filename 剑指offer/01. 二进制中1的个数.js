/**
 * 输入一个无符号整数，返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量)
 * 
 * 示例 1：
 * 输入：n = 11 (控制台输入 00000000000000000000000000001011)
 * 输出：3
 * 
 * 思路：
 * 1. n = 11 -> 1011; n - 1 = 10 -> 1010 
 * 2. n = (n & (n - 1)) [ n & (n - 1) => 将n最低位的1置0，并将计数+1 ]
 * 3. 循环2直到 n == 0
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;
    while(n) {
        n = (n & (n - 1));
        res += 1;
    }
    return res;
};

console.log(hammingWeight(4294967293))