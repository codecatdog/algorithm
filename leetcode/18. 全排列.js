/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 回溯思想
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    dfs(0, res, [], []);
    return res;
    /**
     *  
     * @param {number} index 递归到第几层 0：[], 1:[1]/[2]/[3]
     * @param {number} res 结果数组
     * @param {number} list 每一轮递归结果
     * @param {number} status 记录每一轮递归时访问过的节点
     * @returns 
     */
    function dfs(index, res, list, status) {
        if(index === nums.length) {
            res.push([...list]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            // 从nums中选出未被访问过的节点 进行访问 再递归
            if(!status[i]) {
                list.push(nums[i]);
                status[i] = true;
                dfs(index + 1, res, list, status);
                list.pop();
                status[i] = false;
            }

        }

    }
};

console.log(permute([1, 2, 3]))