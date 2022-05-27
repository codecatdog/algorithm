/**
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // dp[i]表示以s[i]结尾的子串中含有的有效括号对数， left代表子串中左括号的个数
    let dp = [];
    dp[0] = 0;
    let left = s[0] === '(' ? 1 : 0;
    for(let i = 1; i < s.length; i ++) {
        if(s[i] === '(') {
            left ++;
            dp[i] = dp[i - 1];
        } else if(s[i] === ')') {
            dp[i] = dp[i - 1] + (left > dp[i - 1] ? 1 : 0);
        }
    }
    return dp[s.length - 1] * 2; 
};

var longestValidParentheses1= function(s) {
    //  dp[i]表示以s[i]结尾的字符串**有效括号字符数**
    let dp = new Array(s.length).fill(0); // 初始化为0，就不用判断以 '(' 结尾的情况了 
    let max = 0;
    for(let i = 1; i < s.length; i ++) {
        // if(s[i] === '(') { // 以 ）结尾的字符串 括号不可能有效
        //     dp[i] = 0;
        // } else 
        if(s[i] === ')') { 
            if(s[i - 1] === '(') { //'()()()' 这种情况直接在 dp[i - 2] + 2
                dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2;
            } else { // '()(())' 这种情况 注意要加上前面的小子串长度dp[i - dp[i - 1] - 2]
                if(i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
                    dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
                } 
                // else {
                //     dp[i] = 0;
                // }
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
};

console.log(longestValidParentheses1("(()())"))