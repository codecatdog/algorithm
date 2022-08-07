/**
 * 使用堆排序实现数组升序排序
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // 1. 构建大根堆
    buildMaxHeap(nums);
    // 2. 
    for(let i = nums.length - 1; i >= 0; i--) {
        // 交换堆顶和堆尾元素
        swap(nums, 0, i);
        // 剩余节点调整为大根堆
        adjustMaxHeap(nums, 0, i);
    }
    return nums;
};

/**
 * 构建大根堆
 * @param {number[]} nums 
 */
function buildMaxHeap(nums) {
    const len = nums.length;
    // 从倒数第一个非叶子节点开始(从下到上，从右到左)，构建大根堆
    // 倒数第一个非叶子节点索引值：i = Math.floor(len / 2) - 1
    for(let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        adjustMaxHeap(nums, i, len);
    }
}

/**
 * 将当前i~len调整为大根堆
 * @param {number[]} nums 
 * @param {number} i 
 * @param {number} len 
 */
function adjustMaxHeap(nums, i, len) {
    // 从i节点的左子节点开始
    for(let k = 2 * i + 1; k < len; k = k * 2 + 1) { //k=k*2+1，去到下一层的子节点。
        if(k + 1 < len && nums[k] < nums[k + 1]) { // 如果存在右子节点，且右子节点值更大
            k++; // 让k指向右子节点
        }
        if(nums[k] > nums[i]) { // 如果子节点值大于根节点
            swap(nums, i, k); // 交换节点值
            i = k; // i指向最新根节点位置
        } else {
            break;
        }
    }
}

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log(sortArray([1, 3, 2, 8, 3, 5, 0, 6]))