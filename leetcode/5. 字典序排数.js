/**
 * 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。
 * 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
 * 
 * 示例 1：
 *  输入：n = 13
 *  输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var ans = [];
    var num = 1;
    while(ans.length < n) {
        while(num <= n) {
            ans.push(num);
            num *= 10; // 进入下一层
        }
        while(num % 10 === 9 || num > n) { // 如果这一层结束了
            num = Math.floor(num / 10);  // 返回上一层
        }
        num += 1;
        
    }
    return ans;
};


console.log(lexicalOrder(13))