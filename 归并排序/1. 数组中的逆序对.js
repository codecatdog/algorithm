/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组，求出这个数组中的逆序对的总数。
 * 
 * 输入: [7,5,6,4]
 * 输出: 5
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {

    let temp = [];
    return mergeSort(0, nums.length - 1);
    // 归并排序
    function mergeSort(left, right) {
        // 终止条件
        if (left >= right) return 0;
        // 递归划分
        let mid = Math.floor((left + right) / 2);
        res = mergeSort(left, mid) + mergeSort(mid + 1, right);
        
         //将[l,r]用一个数组保存合并之前的模样
        for (let k = left; k <= right; k++) {
            temp[k] = nums[k];
        }

        // 合并阶段 对[l,r]中的[l,m]、[m+1,r]开始合并
        let i = left, j = mid + 1;
        for (let k = left; k <= right; k++) {
            if (i == mid + 1) {  //m及其左边元素合并完毕,把右边剩下的放入合并后的数组
                nums[k] = temp[j++];
            }  
            else if (j == right + 1 || temp[i] <= temp[j]) {  //m+1及其右边元素合并完毕,把左边剩下的放入合并后的数组 或者 左边数组的元素小于等于右边,将左边数组的元素放入结果数组中,并让索引i加1
                nums[k] = temp[i++];
            }
            else { 
                //右边数组的元素小于左边,将右边数组的元素其放入结果数组中,并让索引j加1
                nums[k] = temp[j++];
                //并且此时左边数组中的前i个的所有数都是大于tmp[j]的(因为数组都是已经排好序的)
                //即此时有m-i+1个逆序对，加到res上即可
                res += mid - i + 1; // 统计逆序对
            }
        }
        return res;

    }
};
console.log(reversePairs([7, 5, 6, 4]))