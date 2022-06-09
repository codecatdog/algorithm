/**
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 表示选修 numCourses 门课程，记为 0 到 numCourses - 1 
 * prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 
 * 判断是否可能完成所有课程的学习？
 */

/**
 * 思路：拓扑排序
 * 根据prerequisites，做出每个课程节点的入度记录；入度为0表示该课程不需要先决课程；
 * 从入度为0的课程节点开始，去掉该节点，记录相关节点的入度变化；
 * 再取下一个入度为0的节点，重复上述步骤；
 * 若节点数量与课程数量一致，则课程可以修完；
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0); // 记录每门课程的入度(即每门课程需要先修的课程数)
    let map = new Map(); // 用于记录课程关系(key -> val[]), key修完了，val数组的课程才有可能开始修
    // 初始化
    for(let i = 0; i < prerequisites.length; i ++) {
        let item = prerequisites[i]; // [0, 1]
        let key = map.get(item[1]); // 需要先修的课程
        inDegree[item[0]] ++; // 课程的入度+1
        if(key) {
            key.push(item[0]);
        } else {
            map.set(item[1], [item[0]]);
        }
    }
    let queue = [];
    // 入度为0的课程入队
    for(let i = 0; i < inDegree.length; i ++) {
        if(inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0; // 记录已经修过的课程数量
    while(queue.length) {
        const course = queue.shift(); // 出队
        count ++;
        const item = map.get(course); // course修完后，course后面对应的每个课程入度-1
        if(item) { // [..., ...]
            for(let j = 0; j < item.length; j ++) {
                inDegree[item[j]] --;
                if(inDegree[item[j]] === 0) { // 如果入度为0了，则表示该课程可以直接修了
                    queue.push(item[j]);
                }
            }
        }
    }
    return count === numCourses;
};

console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]))