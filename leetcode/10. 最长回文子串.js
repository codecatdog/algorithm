
/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 思路：中心扩散法
 * 从每一个位置出发，向两边扩散即可，遇到不是回文的时候结束。
 * 
 * 例如：abbba
 * 从index=1的b开始扩散， 先要左右将相同元素扩散掉
 *  1. 首先往左寻找与当前位置相同的字符b，直到遇到不相等为止。
 *  2. 然后往右寻找与当前位置相同的字符b，直到遇到不相等为止。
 * 然后左右双向扩散，直到左右不相等
 *  1. 比较左右元素是否相等，相等则left--，right++
 * 
 * @param {String} s 
 * @returns 
 */
var lonestPalindrome = function(s) {
    var len = s.length;
    if(len < 2) {
        return s;
    }
    var left = 0, right = 0;
    var maxLen = 1, start = 0;

    for(var i = 1; i < len; i ++) {
        left = i - 1;
        right = i + 1;
        // 找到左侧与当前元素不同的字符位置
        while(left >= 0 && s.charAt(i) === s.charAt(left)) {
            left --;
        }
        // 找到右侧与当前位置不同的字符位置
        while(right < len && s.charAt(i) === s.charAt(right)) {
            right ++;
        }
        // 左右比较元素是否相等
        while(left >= 0 && right < len && s.charAt(left) === s.charAt(right)) {
            left --;
            right ++;
        }
        if(right - left - 1 > maxLen) {
            maxLen = right - left - 1;
            start = left + 1;
        }
    }
    return s.substring(start, start + maxLen);
}
console.log(lonestPalindrome("acabbdd"))