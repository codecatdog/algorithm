/**
 * 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 
 * 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。
 * 
 * 思路：若s中某个字符ch出现的次数 少于K，则含有ch的子串均不满足条件；
 * 则可将ch作为划分条件，在不含ch的子串中继续查找满足条件的最大子串。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    // 若s的长度 < k, 没有满足条件的子串
    if(s.length < k) return 0;
    // 对s中的字符数进行记录
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    // 遍历进行划分
    for(const [ch, count] of map.entries()) {
        // 字符 ch 出现的次数小于 k
        if(count < k) {
            const list = s.split(ch);
            let ans = 0;
            for(let str of list) {
                if(str) {
                    ans = Math.max(ans, longestSubstring(str, k));
                }
                
            }
            return ans;
        }
    }
    // 若s中字符出现次数都大于k
    return s.length;
    
};
console.log(longestSubstring(s = "aaabb", k = 3))