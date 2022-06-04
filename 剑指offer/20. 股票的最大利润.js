/* 
假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

示例 1:
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

示例 2:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices == null || prices.length <= 1) return 0;
    // 前i天最大利润： 第i天卖出的利润 与 前i-1天的利润 取较大值
    var minPrice = prices[0];
    var res = 0; // 前i天最大利润
    for(var i = 1; i < prices.length; i ++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            res = Math.max(prices[i] - minPrice, res);
        }
    }
    return res;
};


/**
 * 扩展1：给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。
 * 你也可以先购买，然后在 同一天 出售。
 * 返回 你能获得的 最大 利润 。
 * 
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：7
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 
 * 这笔交易所能获得利润 = 5 - 1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 
 * 这笔交易所能获得利润 = 6 - 3 = 3 。
 * 总利润为 4 + 3 = 7 。
 * 
 * 使用贪心算法 本题只要求最大利润，其实就是求出数组中含有的 子升序列 的和 (1, 5) (3, 6)
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit1 = function(prices) {
    let res = 0;
    let n = prices.length;
    for (let i = 1; i < n; i ++) {
        res += Math.max(0, prices[i] - prices[i - 1]);
    }
    return res;

};