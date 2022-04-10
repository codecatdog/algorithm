
/** 从上至下、从左往右，Z字形变换字符串s
 * 找规律：
 * 
 * t = 2*row -2
 * 
 * 0             0+t                    0+2t                     0+3t...
 * 1      t-1    1+t            0+2t-1  1+2t            0+3t-1   1+3t
 * 2  t-2        2+t  0+2t-2            2+2t  0+3t-2             2+3t  
 * 3             3+t                    3+2t                     3+3t ...
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const len = s.length, row = numRows;
    if(row === 1 || row > len) return s;

    const t = row * 2 -  2;
    let ans = '';
    for(let i = 0; i < row; i ++) {// 枚举矩阵的行 
        for(let j = 0; j < len - i; j += t) { // 枚举每个周期的起始下标
            ans += s[j + i]; // 当前周期的第一个字符
            
            if(i > 0 && i < row - 1 && j + t - i < len) { // 中间的行每个周期有两个字符
                ans += s[j + t - i]; // 当前周期的第二个字符
            }
        }
    }
    return ans;
};

console.log(convert('AB', 1))