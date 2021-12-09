/* 
从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

示例 1:
输入: [1,2,3,4,5]
输出: True
 
示例 2:
输入: [0,0,1,2,5]
输出: True

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    // sort方法会调用每个数组项的toString()方法，得到字符串，然后再对得到的字符串进行排序。
    nums.sort((a, b) =>  a-b );
    var count = 0;
    for(var i = 0; i < nums.length - 1; i ++) {
        if(nums[i] == 0) {
            count ++;
        } else {
            if(nums[i + 1] == nums[i]) return false;
            count -= (nums[i + 1] - nums[i] - 1);
        }
    }
    if(count >= 0) return true;
    return false;
};

console.log(isStraight([10,11,0,12,6]))