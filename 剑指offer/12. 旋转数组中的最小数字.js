/* 
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：
输入：[3,4,5,1,2]
输出：1

示例 2：
输入：[2,2,2,0,1]
输出：0
*/

/**
 * @param {number[]} numbers
 * @return {number}
 */

/* 
算法流程：
1. 初始化： 声明 left, right 双指针分别指向 nums 数组左、右两端；
2. 循环二分： 设 mid = Math.floor((left + right) / 2); 为每次二分的中点，可分为以下三种情况：
    当 nums[mid] > nums[right]时： mid 一定在 左排序数组中，即旋转点 x一定在 [mid + 1, right]闭区间内，因此执行 left = mid + 1;

    当 nums[mid] < nums[right]时： mid 一定在 右排序数组 中，即旋转点 x 一定在[left, mid] 闭区间内，因此执行 right = mid + 1;

    当 nums[mid] = nums[right]时： 无法判断 mid 在哪个排序数组中，即无法判断旋转点 x 在 [left, mid] 还是 [mid + 1, right]区间中。解决方案： 执行 right = right - 1 缩小判断范围。

3. 返回值： 当 left = right 时跳出二分循环，并返回 旋转点的值 nums[left] 即可。

解析链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/mian-shi-ti-11-xuan-zhuan-shu-zu-de-zui-xiao-shu-3/
*/

var minArray = function(numbers) {
    if(numbers == null || numbers.length == 0) return;
    var left = 0;
    var right = numbers.length - 1;
    while(left < right) {
        var mid = Math.floor((left + right) / 2);
        if(numbers[mid] > numbers[right]) left = mid + 1;
        else if(numbers[mid] < numbers[right]) right = mid;
        else right --;
    }
    return numbers[left];
};