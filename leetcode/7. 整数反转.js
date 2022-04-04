/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0
 * 
 * 示例 1：
 *  输入：x = -123
 *  输出：-321
 * 
 * 示例 2：
 *  输入：x = 120
 *  输出：21
 * 
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 解析： https://leetcode-cn.com/problems/reverse-integer/solution/zheng-shu-fan-zhuan-by-leetcode-solution-bccn/
 * 
 *  -2^31/10 <= rev <= (2^31 -1) / 10  
 */

/**
 *  弹出 x 的末尾数字 digit
 *      digit = x % 10
 *      x /= 10
 * 将数字 digit 推入 rev 末尾
 *      rev = rev * 10 + digit
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = 0;
    while(x !== 0) {
        if(rev <= Math.pow(-2, 31) / 10 || rev >= Math.pow(2, 31) / 10) {
            return 0;
        }
        var digit = x % 10;
        x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
        rev = rev * 10 + digit;

    }
    return rev;
};

console.log(reverse(120))