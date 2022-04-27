/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例 1:
 * 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
 * 输出: 2
 */

/**
 * 算法流程:
 * 1. 初始化： 票数统计 votes = 0 ， 众数 x；
 * 2. 循环： 遍历数组 nums 中的每个数字；
 *      1. 当 票数 votes 等于 0，则假设当前数字是众数；
 *      2. 当 num[i] == x 时，票数 votes 自增 1 ；当 num[i] != x 时，票数 votes 自减 1 ；
 * 3. 返回值： 返回 x 即可；

 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let votes = 0;
    let x = 0;
    for(let i = 0; i < nums.length; i ++) {
        if(votes === 0) {
            x = nums[i];
        }
        votes += nums[i] === x ? 1 : -1;
    }
    return x;
};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))