/**
 * 给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 * 假设所有输入数组都可以得到满足题目要求的结果。
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    // 利用快速排序找到中间位置那个数，该数左边的值都比它小，右边的大于等于它
    const k = Math.floor((nums.length - 1) / 2);
    let index = partion(nums, left, right);
    while(index !== k) {
        if(index > k) {
            right = index - 1;
        } else {
            left = index + 1;
        }
        index = partion(nums, left, right);
    }
    // 将右边等于中间值的数集中到中间来，大的数放到末尾
    let j = k + 1, m = nums.length - 1;
    while(j < m) {
        if(nums[m] === nums[k]) {
            swap(nums, j, m);
            j++;
        } else {
            m--;
        }
    }
    // 将整个数组分成两部分，左边都小于中间值，右边大于等于中间值，且中间值在右边数组的最左边
    left = k;
    right = nums.length - 1;
    let temp = Array.from(nums);
    for(let i = 0; i < nums.length; i ++) {
        if(i % 2 === 0) {
            nums[i] = temp[left--];
        } else {
            nums[i] = temp[right--];
        }
    }
    return nums;
};

function partion(arr, left, right) {
    const index = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivot = arr[index];
    swap(arr, index, left);
    let mark = left;
    for(let i = left + 1; i <= right; i++) {
        if(arr[i] < pivot) {
            mark++;
            swap(arr, mark, i);
        }
    }
    swap(arr, mark, left);
    return mark;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(wiggleSort(nums = [3,2,1,1,3,2]))