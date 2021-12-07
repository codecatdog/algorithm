/* 
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    var left = 0, right = nums.length - 1;
    while(left < right) {
        while(nums[left] % 2 == 1) left ++;
        while(nums[right] % 2 == 0) right --;
        if(left < right && (nums[left] % 2 == 0 || nums[right] % 2 == 1)) {
            var tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
        }

    }
    return nums;
};

console.log(exchange([1,2,3,4]))