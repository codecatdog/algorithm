/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    // 设dp[i][j] 表示从i到j是否是回文子串
    // 则 dp[i][j] = true, 当i == j时; dp[i][i + 1] = true, if s[i]==s[i+1]
    // i != j 时， dp[i][j] =  dp[i + 1][j - 1] && s[i] == s[j]
    // 当dp[i][j] = true时，此时的回文子串长度为 j - i + 1
    // 求出最大的dp[i][j], 子串则为s[i:j]
    var len = s.length;
    if(len < 2) {
        return s;
    }
    var left = 0, right = 0;
    var maxLen = 1, start = 0;

    // 两端扩散
    for(var i = 1; i < len; i ++) {
        left = i - 1;
        right = i + 1;
        // 以s[i]为中心，往左找第一个不同的字符
        while(left >= 0 && s.charAt(i) === s.charAt(left)) { 
            left --;
        }
        // 以s[i]为中心，往右找第一个不同的字符
        while(right < len && s.charAt(i) === s.charAt(right)) {
            right ++;
        }
        // 以s[i]为中心，左右值相等时，往两侧扩散
        while(left >= 0 && right < len && s.charAt(left) === s.charAt(right)) {
            left --;
            right ++;
        }
        // 记录最大回文子串的长度，以及开始位置
        if(right - left - 1 > maxLen) {
            maxLen = right - left - 1;
            start = left + 1;
        }
    }
    return s.substring(start, start + maxLen);
};
