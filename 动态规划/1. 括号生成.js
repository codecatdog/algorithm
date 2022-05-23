/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 动态规划：
 * 
 * dp[i]表示i组括号的所有有效组合
 *  则初始状态：dp[0] = [''], dp[1] = ['()']
 * 状态转移方程：
 *  dp[i] = "(dp[p]的所有有效组合)+【dp[q]的组合】"，
 * 其中 1 + p + q = i , p从0遍历到i-1, q则相应从i-1到0 (相当于前后进行排列组合)
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let dp = [];
    for(let t = 0; t <= n; t ++) {
        dp[t] = [];
    }
    // 初始化状态
    dp[0] = [""], dp[1] = ["()"]
    // p,q 遍历 
    for(let i = 2; i <= n; i ++) { // 求dp[i]
        for(let p = 0; p < i; p ++) { // p从0遍历到i-1
            l1 = dp[p];
            l2 = dp[i - p - 1];
            // 对前后的dp[p]、dp[q]进行排列组合
            for(let k1 = 0; k1 < l1.length; k1 ++) {
                for(let k2 = 0; k2 < l2.length; k2 ++) {
                    dp[i].push(`(${l1[k1]})${l2[k2]}`);
                }
            }
        }
    }
    return dp[n];

};

console.log(generateParenthesis(5))