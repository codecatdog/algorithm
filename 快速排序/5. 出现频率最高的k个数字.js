/**
 * 给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。
 * 可以按 任意顺序 返回答案。
 * 
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 思路：
 * 1. 遍历数组，利用Map将(数字,数字出现次数)进行保存
 * 2. 利用快速排序，对Map 的value按照 降序排序
 * 3. 那么如果pivot的index > k， 则出现频率前k高的数在index的左侧
 * 4. 若index < k, 则出现频率前k高的数除了index的左侧，还包括右侧k-index个数
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    // 1. 保存进Map
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1)
    }
    // 用一个数组将数据保存，便于排序[ {k: 元素值, v: 元素值出现的次数} ]
    const list = []
    for (let [k, v] of map.entries()) {
        list.push({k, v});
    }
    // 快速排序 找出前k大的数
    let left = 0;
    let right = list.length - 1;
    let index = partion(list, left, right);
    while(index !== k - 1) {
        if(index < k - 1) {
            left = index + 1;
        } else {
            right = index - 1;
        }
        index = partion(list, left, right);
    }
    // 选出前k个元素
    const res = [];
    for(let i = 0; i < k; i++) {
        res.push(list[i]['k']);
    }
    return res

};

function partion(arr, left, right) {
    const index = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivot = arr[index];
    // 将pivot移至开头
    swap(arr, left, index);

    let mark = left;
    for(let i = left + 1; i <= right; i++) {
        if(arr[i]['v'] > pivot['v']) {
            mark++;
            swap(arr, i, mark);
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

console.log(topKFrequent(nums = [1, 2, 3], k = 3))