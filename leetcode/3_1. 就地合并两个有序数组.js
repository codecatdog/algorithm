/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
 * 另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
 * 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，
 * 后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 定义两个指针分别指向nums1，nums2末尾
    let mPtr = m - 1; 
    let nPtr = n - 1;
    let p = m + n - 1;
    while(mPtr >= 0 && nPtr >= 0) {
        if(nums1[mPtr] > nums2[nPtr]) {
            nums1[p--] = nums1[mPtr--];
        } else {
            nums1[p--] = nums2[nPtr--];
        }
    }

    if(mPtr < 0 && nPtr >= 0) {
        nums1.splice(0, nPtr + 1, ...nums2.slice(0, nPtr + 1))
    }
};

