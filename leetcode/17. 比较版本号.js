/**
 * 给你两个版本号 version1 和 version2 ，请你比较它们。
 * 
 * 如果 version1 > version2 返回 1，
 * 如果 version1 < version2 返回 -1，
 * 除此之外返回 0。
 * 
 * 输入：version1 = "1.01", version2 = "1.001"
 * 输出：0
 * 解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    let p1 = 0;
    let p2 = 0;

    while(p1 < v1.length || p2 < v2.length) {
        const n1 = p1 < v1.length ? parseInt(v1[p1]) : 0;
        const n2 = p2 < v2.length ? parseInt(v2[p2]) : 0;
        if(n1 > n2) return 1;
        else if(n1 < n2) return -1;
        p1++;
        p2++;
    }
    return 0;
};

console.log(compareVersion(version1 = "1.1", version2 = "1"))