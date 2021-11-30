/* 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:
输入：s = "abaccdeff"
输出：'b'

示例 2:
输入：s = "" 
输出：''

算法过程：
1. 遍历字符串 s ，使用哈希表统计 “各字符数量是否 > 1 ”。
2. 再遍历哈希表 ，在哈希表中找到首个 “数量为 1 的字符”，并返回。
 */

/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    if(s.length == 0) return '';
    var map = new Map();
    for(var i = 0; i < s.length; i ++) {
       if(!map.get(s[i])) {
           map.set(s[i], 1);
       } else {
           map.set(s[i], map.get(s[i]) + 1);
       }
    }
    for(var prop of map) {
        if(prop[1] == 1) return prop[0];
    }
    return '';
};

firstUniqChar('leetcode');