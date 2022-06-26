/**
 * 给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点
 * 返回离原点 (0,0) 最近的 k 个点 (可以按 任何顺序 返回答案)。
 * 平面上两点之间的距离是 欧几里德距离（ √(x1 - x2)2 + (y1 - y2)2 ）。
 * 
 * 输入：points = [[1,3],[-2,2]], k = 1
 * 输出：[[-2,2]]
 * 
 * 思路：题目等价于求前k个最小数, 利用快速排序找到第k个点，则前k个点(0~k-1)即为答案
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    let left = 0;
    let right = points.length - 1;
    let index = partion(points, left, right);
    while(index !== k - 1) {
        if(index < k - 1) {
            left = index + 1
        } else {
            right = index - 1
        }
        index = partion(points, left, right);
    }
    return points.slice(0, k);
};

function partion(points, left, right) {
    // 随机选一个pivot
    const index = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivot = points[index];
    const pivotDis = pivot[0] * pivot[0] + pivot[1] * pivot[1];
    // 将pivot置于开头
    swap(points, left, index);

    // mark记录pivot的最终位置
    let mark = left;
    for(let i = left + 1; i <= right; i++) {
        const x = points[i][0];
        const y = points[i][1];
        const dis = x * x + y * y
        if(dis < pivotDis) {
            mark++;
            swap(points, mark, i);
        }
    }
    swap(points, mark, left);
    return mark;
}

/**
 * 交换points的 第 i 位 和 第 j 位 的 值
 * @param {number[][]} points 
 * @param {number} i 
 * @param {number} j 
 */
function swap(points, i, j) {
    const temp = points[i];
    points[i] = points[j];
    points[j] = temp;
}

console.log(kClosest(points = [[0,1],[1,0]], k = 2))