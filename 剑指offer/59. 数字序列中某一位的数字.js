/**
 * 数字序列中某一位的数字
 * 
 * 数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位
 * （从下标0开始计数）是5，第13位是1，第19位是4，等等。
 * 
 * 请写一个函数，求任意第n位对应的数字。
 * 
 * 示例 1：
 * 输入：n = 3
 * 输出：3
 * 
 * 0 <= n < 2^31
 * 
 * 思路：
 * 1. 将 101112⋯ 中的每一位称为 数位 ，记为 n ；
 * 2. 将 10, 11, 12, ⋯ 称为 数字 ，记为 num ；
 * 3. 数字 10 是一个两位数，称此数字的 位数 为 2 ，记为 digit ；
 * 4. 每 digit 位数的起始数字（即：1, 10, 100, ⋯），记为 start
 * 
 * 根据以上分析，可将求解分为三步：
 * 1. 确定 n 所在 数字 的 位数 ，记为 digit；
 * 2. 确定 n 所在的 数字 ，记为 num；
 * 3. 确定 n 是 num 中的哪一数位，并返回结果。
 * 
 * 1~9      digit=1  start=1    count=9
 * 10~99    digit=2  start=10   count=9*10*2 
 * 100~999  digit=3  start=100  count=9*100*2 
 * ...      ...         ...     count=9*start*digit
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digit = 1; //数位
    let start = 1; // 开始的数字
    let count = 9; // 该数位的数量

    while(n > count) {
        n -= count;
        digit ++;
        start *= 10;
        count = (digit * 9 * start);
    } // 确定第n位对应的数位和开始数字

    let num = start + Math.floor((n - 1) / digit); // 确定第n位对应的数字
    return num.toString()[(n - 1) % digit] // 通过转化位字符串再取模，确定第n位对应数字的第几位

};

console.log(findNthDigit(19))