/**
 * 实现一个函数用来匹配包含'. '和'*'的正则表达式。
 * '.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
 * 
 * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配
 * 
 * 思路：动态规划
 * 1. 设dp[i][j]表示 字符串s 的前i位 和 正则字符串p 的 前j位 是否匹配
 * 2. 状态转移方程：
 *      当p[j - 1] == '*'时， dp[i][j]在以下任一情况下为true时等于true：
 *      (1) dp[i][j - 2], 即若p[j - 2]出现0次时，能否匹配
 *      (2) s[i - 1] == p[j - 2] && dp[i - 1][j], 即若p[j-2]==s[i-1](必定为'a'-'z'),则继续向前看dp[i-1][j] 能否匹配
 *      (3) p[j - 2] == '.' && dp[i - 1][j], 即p[j - 2] == '.'匹配了s[i - 1], 所以向前看dp[i - 1][j]
 * 
 *      当p[j - 1] !== '*'时， dp[i][j]在以下任一情况下为true时等于true：
 *      (1) s[i - 1] == p[j - 1] && dp[i - 1][j - 1], 即若s[i - 1] == p[j - 1]时，继续向前看能否匹配
 *      (2) p[j - 1] == '.' && dp[i - 1][j - 1], 即若p[j - 1] == '.',表示匹配任一字符，所以向前看能否匹配
 * 3. dp[0][0] = true;
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n = s.length + 1, m = p.length  + 1, dp = [];
    for(let i = 0; i < n; i ++) {
        dp.push(Array(m).fill(0));
    }
    dp[0][0] = true;
    for(let j = 2; j < m; j += 2) {
        dp[0][j] = dp[0][j - 2] && p[j - 1] === '*';
    }
    for(let i = 1; i < n; i ++) {
        for(let j = 1; j < m; j ++) {
            if(p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || dp[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] === '.');
            } else {
                dp[i][j] = dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            }
        }
    }
    return dp[n - 1][m - 1];

};

console.log(isMatch("aaa", "a*"))