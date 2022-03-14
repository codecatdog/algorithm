/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

滑动窗口，保证每个窗口里字母都是唯一的：
    没有重复字母时，调整右边界
    有重复字母时，调整左边界
 */

var lengthOfLongestSubstring = function (s) {
    if(s.length === 0) return 0;
    var map = new Map();
    var max = 0;
    var left = 0;
    for(var i = 0; i < s.length; i ++) {
        if(map.has(s[i])) {
            left = Math.max(left, map.get(s[i]) + 1); // 注意要取较大值
        }
        map.set(s[i], i);
        max = Math.max(max, i - left + 1);
    }
    return max;

}

console.log(lengthOfLongestSubstring('abba'))