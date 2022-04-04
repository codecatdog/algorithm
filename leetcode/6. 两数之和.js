/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 
 * 示例 1：
 *  输入：nums = [2,7,11,15], target = 9
 *  输出：[0,1]
 */

/**
 * 创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    var ans = [];
    for(var i = 0; i < nums.length; i ++) {
        var val = target - nums[i];
        if(map.get(val) == undefined) { // 查询哈希表中是否存在 target - x
            map.set(nums[i], i);  // 将 x 插入到哈希表中
        }else {
            ans.push(map.get(val), i);
            break;
        }
    }
    return ans;
};