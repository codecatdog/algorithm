/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

示例 1:
输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

解析：
1. 确定状态
    dp[i] = 数字前i位的翻译种数
2。 转移方程
    最后一个翻译可以是1位或2位
    dp[i] = dp[i - 1] + dp[i - 2], if （i-1和i位）<=25 (dp[i - 1]代表最后一个是1位，后者为2位)
    dp[i] = dp[i - 1], otherwise
3. 初始条件和边界
    dp[0] = 1, dp[1] = 1
    
关键：从number中取出第i位和第i-1位进行判断
 */  

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    var str = num.toString();
    var dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(var i = 2; i <= str.length; i ++) {
        if(str[i - 2] != '0' && str.substring(i - 2, i) <= 25)  {
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[str.length];
};
console.log(translateNum(12258));