/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 滑动窗口每次只向右移动一位。
 * 返回 每一次 滑动窗口中的最大值 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const q = []; // 双向队列 保存当前窗口最大值的数组位置 保证队列中数组位置的数值按从大到小排序

    const ans = [];
    for (let i = 0; i < n; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) { // 保证从大到小 如果前面数小则需要依次弹出较小的数，直至满足要求
            q.pop();
        }
        q.push(i); // 添加当前值对应的数组下标
        if(q[0] <= i - k) { //随着窗口右滑，判断当前队列中队首的值是否有效
            q.shift();
        }
        if(i + 1 >= k) { // 当窗口长度为k时 保存当前窗口中最大值
            ans.push(nums[q[0]]);
        }
        
    }
    return ans;
};

console.log(maxSlidingWindow(nums = [1,3,-1,-3,5,3,6,7], k = 3))
