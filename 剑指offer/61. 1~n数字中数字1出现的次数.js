/**
 * 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。
 * 例如，输入12，1～12这些整数中包含 1 的数字有1、10、11和12，其中'1'一共出现了5次。
 * 
 * 思路：
 * 将个、十、百、千、、、每位出现的1的次数加起来就是我们要的结果
 * 我们设10^i为数位digit
 * 
 * 以 求 n 十位（cur）出现1 的次数为例：
 * 我们可分为三种情况：若n的十位
 *  1. 十位 = 0 （假设 n = 2304）
 *      则十位出现1的次数：0010 ~ 2219 （23 * 10 = 230）十位前面取00~22，后面取0~9 high * digit
 *  2. 十位 = 1 （假设 n = 2314）
 *      0010 ~ 2219 + 2310 ~ 2314 （23 * 10 + 5 = 235） high * digit + low + 1
 *  3. 十位 > 1 （假设 n = 2324）
 *      0010 ~ 2319 （24 * 10 = 240）(high + 1) * digit
 *      
 */

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let digit = 1; // 数位，从个位开始
    let cur = n % 10; // 当前位从个位开始
    let high = Math.floor(n / 10); // cur左边的高位
    let low = 0; // cur右边的低位

    let ans = 0;
    while(low !== n) {
        if(cur === 0) {
            ans += high * digit;
        } else if(cur === 1) {
            ans += high * digit + low + 1;
        } else {
            ans += (high + 1) * digit;
        }

        // 更新下一数位
        low += cur * digit; 
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }

    return ans;
};

console.log(countDigitOne(4))