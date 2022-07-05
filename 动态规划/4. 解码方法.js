/**
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 * 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）
 * 如，"11106" 可以映射为：
 *  "AAJF" ，将消息分组为 (1 1 10 6)
 *  "KJF" ，将消息分组为 (11 10 6)
 * 
 * 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。
 */

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
    // 思路：对于第i个数字，它可以被当成一个数字被解码，则前i位解码的总数为  s(i - 1)
    // 也可以 两个数字解码，则前i位解码总数位 s(i - 2)
    // 因此可以使用动态规划
    // 设 dp[i] 为前i位数字的 解码总数, s[i]为第i位数字
    // 初始状态： dp[0] = 1(空字符只有一种解码方法), dp[1] = 1
    // 状态转移：
    // 1. s[i] == '0' && '1' <= s[i - 1] <= '2', dp[i] = dp[i - 2]
    // 2. s[i - 1] == '1' || s[i - 1] == '2' && s[i] <= '6', dp[i] = dp[i - 1] + dp[i - 2]
    // 3. dp[i] = dp[i - 1]
    if (!s.length || s[0] === '0') return 0;
    let p = 1;
    let q = 1;
    let cur = 1;
    for(let i = 1; i < s.length; i ++) {
        if(s[i] === '0') {
            if(s[i - 1] === '1' || s[i - 1] === '2') {
                cur = p;
            } else {
                return 0;
            }
        } else if(s[i - 1] === '1' || s[i - 1] === '2' && s[i] <= '6') {
            cur = q + p;
        } else {
            cur = q
        }
        p = q;
        q = cur;
    }
    return cur;
};

console.log(numDecodings("11106"))