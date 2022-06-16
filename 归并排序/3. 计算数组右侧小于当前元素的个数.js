/**
 * 给你一个整数数组 nums ，按要求返回一个新数组 counts 。
 * 数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 * 
 * 输入：nums = [5,2,6,1]
 * 输出：[2,1,1,0] 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    var counts = new Array(nums.length).fill(0); // 记录结果
    // 记录改变后的数组索引，一开始是[0, 1, 2, ...nums.length - 1], 排序时跟着元素一起变
    var indexArr = new Array(nums.length).fill(1).map((it, index) => index); 
    
    sort(nums, 0, nums.length - 1);
    return counts;
    function sort(nums, left, right) {
        if (left >= right) return;
        var mid = Math.floor((left + right) / 2);
        sort(nums, left, mid);
        sort(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }
    // 合并两个降序的有序子序列，计算counts
    function merge(nums, left, mid, right) {
        var i = left, j = mid + 1, p = 0; // i, j 分别指向两个子序列的第一个元素
        var temp = []; var tempIndex = [];  // 存储排好序的临时数组，和存储对应的索引值数组 
        while (i <= mid && j <= right) {
            if (nums[i] > nums[j]) {  
                temp[p] = nums[i];
                tempIndex[p] = indexArr[i];
                // 两个序列都是降序的，如果nums[i] > nums[j], 则nums[i] 必然大于j及j后面的所有元素
                counts[indexArr[i]] += right - j + 1; 
                i++;
                p++;
            } else {
                temp[p] = nums[j];
                tempIndex[p] = indexArr[j];
                p++;
                j++;
            }
        }
        while (i <= mid) {
            temp[p] = nums[i];
            tempIndex[p] = indexArr[i];
            i++;
            p++;
        }
        while (j <= right) {
            temp[p] = nums[j];
            tempIndex[p] = indexArr[j];
            p++;
            j++;
        }
        // 将排好序的序列赋值个原数组对应部分, 将对应的索引值也进行修改
        for (var k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
            indexArr[left + k] = tempIndex[k];
        }
    }

};


console.log(countSmaller([0,2,1])) // [2, 0, 1]