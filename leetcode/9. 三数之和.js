/**
 * 给你一个包含n个整数的数组nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 示例 1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 对nums数组先进行升序排序
    nums.sort((a, b) => a - b);
    var ans = [];
    var len = nums.length;
    // 第一层循环 第一个数
    for(var first = 0; first < len; first ++) {
        if(nums[first] > 0) break; // 如果第一个数都大于0了，那后面的数更大，不可能相加等于0，直接退出
        if(first > 0 && nums[first] === nums[first - 1]) { 
            // 如果当前三元组第一个数 与 上次三元组第一个相同，直接进行下一次循环
            continue; 
        }
        var target = -nums[first]; // 三元组后两个数应等于target
        var third = len - 1;  // 三元组第三个数从右向左遍历
        // 第二层循环 第二个数
        for(var second = first + 1; second < len; second ++) {
            if(second > first + 1 && nums[second] === nums[second - 1]) {
                // 如果当前三元组第二个数之前已经遍历过，直接进行下一次循环
                continue;
            }
            while(second < third && nums[second] + nums[third] > target) {
                third --;
            }
            // 如果指针重合，下一次第二个数更大，第三个数更无法满足了，所以直接退出第二轮循环
            if(second === third) {
                break;
            }
            if(nums[second] + nums[third] === target) {
                var list = [];
                list.push(nums[first], nums[second], nums[third]);
                ans.push(list);
            }

        }
    }
    return ans;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))