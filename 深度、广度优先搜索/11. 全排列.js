/**
 * 给一个不含重复数字的数组，返回所有的全排列情况
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let status = new Array(nums.length).fill(false);
    let res = [];
    dfs(nums, status, [], res);
    return res;
}
/**
 * 
 * @param {number[]} nums 给定的数组
 * @param {boolean[]} status 记录当次排列，数组元素是否已被选择
 * @param {number[]} ans 当次排列的结果
 * @param {number[][]} res 最终的所有排列结果
 * @returns 
 */
function dfs(nums, status, ans, res) {
    if(ans.length === nums.length) {
        res.push([...ans]); // 注意这里需要重新放置到一个数组中，因为ans后面的遍历中会修改；
        return;
    }
    for(let i = 0; i < nums.length; i++) {
        if(!status[i]) {
            ans.push(nums[i]);
            status[i] = true;
            dfs(nums, status, ans, res);
            ans.pop(); // 注意当次排列返回后要出队，且修改访问状态
            status[i] = false;
        }
    }

}

console.log(permute([1, 2, 3]))