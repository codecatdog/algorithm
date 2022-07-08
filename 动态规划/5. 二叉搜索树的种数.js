/**
 * 根据节点个数，返回可能的二叉搜索树的种数
 */
/**
 * 思路：二叉搜索树满足左孩子小于根节点，右孩子大于根节点
 * 例：假设dp[i] 为 i个节点的二叉搜索树数量，对于i = 4 ，
 *  假如根节点为1，则剩下3个节点在根节点右边，此时 dp[i] = dp[3] 
 *  若根节点为2，则1 一定在左边， 剩下两个在右边，此时dp[i] += dp[2]
 *  若根节点为3， 则左侧两个，右侧一个，dp[i] += dp[2]
 *  若根节点为4，则左侧三个，dp[i] += dp[3]
 * 
 * 相当于每次确定一个根节点，然后就确定了左右节点个数，左右节点再进行排列组合， 左右种数再相乘
 * @param {number} n 节点个数
 */
const numTrees = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i <= n; i++) {
        for(j = 1; j <= i; j ++) {
            const rightNum = i - j;
            const leftNum = j - 1;
            dp[i] += dp[leftNum] * dp[rightNum];
        }
    }
    return dp[n]

    /** 数学公式法：上述这种左右排列组合相乘(左右节点数相加为n-1)，被称为卡塔兰数 Cn
     * C_n+1 = [2(2n+1)/n+2] * C_n
     * let C0 = 1;
     * for(let i = 0; i < n; i++) {
     *      C1 = 2 * (2* i + 1) * C0 / (i + 2);
     *      C0 = C1;
     * }
     * return C1;
     */
}

console.log(numTrees(4))