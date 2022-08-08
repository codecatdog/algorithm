/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转.
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（
 * 下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，
 * 则返回它的下标，否则返回 -1 。
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.length === 0) return -1;
    if(nums.length === 1) return nums[0] === target ? 0 : -1;
    let right = nums.length - 1;
    let left = 0;
    // 使用二分法
    while(left <= right) {
        let mid = Math.floor((left + right) / 2); 
        if(nums[mid] === target) {
            return mid;
        }
        // 左右两子序列必有一个有序
        if(nums[left] <= nums[mid]) { // 如果左边有序(如果只有两个元素时，left和mid指向同一个元素，一个元素应为有序，因此要考虑等号)
            if(nums[left] <= target && target <= nums[mid]) {// 如果target位于左子序列
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // 右边有序
            if(nums[mid] <= target && target <= nums[right]) { // target位于右子序列
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;

};

console.log(search(nums = [4,5,6,7,0,1,2], target = 0))