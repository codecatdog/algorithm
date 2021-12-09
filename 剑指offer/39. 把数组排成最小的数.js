/* 
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

示例 1:
输入: [10,2]
输出: "102"

示例 2:
输入: [3,30,34,5,9]
输出: "3033459"

解题思路：
此题求拼接起来的最小数字，本质上是一个排序问题。设数组 nums 中任意两数字的字符串为 x 和 y ，则规定 排序判断规则 为：

若拼接字符串 x + y > y + x ，则 x “大于” y ；
反之，若 x + y < y + x ，则 x “小于” y ；


*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    const compare = function(a, b) {
        var s1 = a.toString();
        var s2 = b.toString();
        
        if(s1 + s2 < s2 + s1) {
            return -1;
        } else if(s1 + s2 > s2 + s1) {
            return 1;
        } else {
            return 0;
        }    
    };

    nums.sort(compare);
    // var i = 0;
    // while(nums[i] == 0) {
    //     i ++;
    // }
    // nums = nums.slice(i, i+1).concat(nums.slice(0, i), nums.slice(i + 1));
    return nums.join('');
};

console.log(minNumber([10,2]))