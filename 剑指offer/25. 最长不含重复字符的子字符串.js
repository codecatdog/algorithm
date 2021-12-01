/* 
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例 1:
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

解析：
1. 确定状态
    dp[i] = 前i位中最长子字符串的长度
2. 转移方程
    固定右边界 i ，设字符 s[i] 左边距离最近的相同字符为 s[j]，即 s[i] = s[j]。
    dp[i] = i - j ,if (dp[i - 1] >= i - j)
    dp[i] = dp[i - 1] + 1, otherwise

3. 初始条件与边界
    dp[1] = 1

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    var dp = [];
    dp[1] = 1;
    var max = 1;
    for(var i = 2; i <= s.length; i ++) {
        var j = s.substring(0, i - 1).lastIndexOf(s[i - 1]) + 1;
        if(dp[i - 1] >= i - j ) {
            dp[i] = i - j;
        } else {
            dp[i] = dp[i - 1] + 1;
        }
        max = Math.max(dp[i], max)
    }
    return max;
};


var lengthOfLongestSubstring1 = function(s) {
    var tmp = 0;
    var max = 0;
    var map = new Map();

    for(var i = 0; i < s.length; i ++) {
        var j = map.get(s[i]) === undefined ? -1 : map.get(s[i]);
        map.set(s[i], i);
        tmp = tmp < i - j ? tmp + 1 : i - j;
        max = Math.max(tmp, max)
    }
    return max;
};

console.log(lengthOfLongestSubstring1(" "))