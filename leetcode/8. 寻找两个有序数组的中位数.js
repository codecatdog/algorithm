/**
 * 给定两个有序数组，要求找到两个有序数组的中位数
 * 
 * 示例 1：
 *  输入：nums1 = [1,3], nums2 = [2]
 *  输出：2.00000
 * 
 * 示例 2：
 *  输入：nums1 = [1,2], nums2 = [3,4]
 *  输出：2.50000
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var len1 = nums1.length, len2 = nums2.length;
    if (!len1 && !len2) return null;
    var index1 = 0, index2 = 0; // index1指向数组1， index2指向数组2
    var left = -1, right = -1; // left表示上一次循环的值，right表示当前循环的值
    // 若数组长度为奇数，直接返回right，否则，返回left 和 right 的平均值
    var targetIndex = Math.floor((len1 + len2) / 2); // 中位数目标index
    
    for(var i = 0; i <= targetIndex; i ++) {
        left = right;
        // 当index1未溢出时，如果index2未溢出且index1指向的值小于index2指向的值时，index1右移；如果index2已经溢出，index1也右移
        if(index1 < len1 && ((index2 < len2 && nums1[index1] < nums2[index2]) || index2 >= len2)) {
            right = nums1[index1 ++];
        } else {
            right = nums2[index2 ++];
        }
    }
    if(((len1 + len2) & 1) === 0) { // 如果数组长度和为偶数
        return (left + right) / 2;
    } else {
        return right;
    }
    
};

console.log(findMedianSortedArrays([0, 0], [0, 0]))