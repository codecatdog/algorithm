/**
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 假设你总是可以到达数组的最后一个位置。
 * 
 * 贪心算法
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let end = 0; // 右边界
    let maxPos = 0; // 最大可达位置
    step = 0; // 步数
    for(let i = 0; i < nums.length - 1; i ++) {
        maxPos = Math.max(nums[i] + i, maxPos); // 计算新的最大可达位置
        if(i === end) { // 到达右边界
            end = maxPos;
            step ++;
        }
    }
    return step;

};

console.log(jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]))