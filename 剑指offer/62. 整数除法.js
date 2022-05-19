/**
 * 模拟实现整数除法
 * 
 * 输入：a = 15, b = 2
 * 输出：7
 * 解释：15/2 = truncate(7.5) = 7
 * 
 * 输入：a = 7, b = -3
 * 输出：-2
 * 解释：7/-3 = truncate(-2.33333..) = -2
 * 
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31, 2^31−1]。本题中，
 * 如果除法结果溢出，则返回2^31−1
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var divide = function(a, b) {
    const INT_MIN = -Math.pow(2, 31)
    const INT_MAX = Math.pow(2, 31) - 1

    // 考虑一些特殊情况
    if(a === b) return 1
    if (a === INT_MIN && b === -1) return INT_MAX
    // 除数绝对值最大，结果必为 0 或 1
    if (b === INT_MIN) {
        return a === b? 1 : 0;
    }

    // 记录结果
    let res = 0

    // 如果被除数绝对值最大时，被除数要先减去一个除数, 防止下面取a的绝对值时发生溢出
    if (a === INT_MIN) {
        a += Math.abs(b);
        res += 1;
    }

    const sign = (a > 0) ^ (b > 0) ? -1 : 1 // 记录符号位
    a = Math.abs(a)
    b = Math.abs(b)

    // let shift = 31;
    // while(a >= b) {
    //     while((a >>> shift) - b < 0) {  // a >= (b << shift)
    //         shift --;
    //     }
    //     a -= (b << shift);
    //     // 代码优化：这里控制 res 大于等于 INT_MAX
    //     if (res > INT_MAX - (1 << shift)) {
    //         return INT_MIN;
    //     }
    //     res += (1 << shift);
    // }

    for (let x = 31; x >= 0; x--) {
        if ((a >>> x) - b >= 0) {  // a >= (b << x) 左移很可能会越界
            a = a - (b << x)
            // 代码优化：这里控制 res 大于等于 INT_MAX
            if (res > INT_MAX - (1 << x)) {
                return INT_MIN;
            }
            res = res + (1 << x)
        }
    }
    if (res == -2147483648) return -2147483648
    // bug 修复：因为不能使用乘号，所以将乘号换成三目运算符
    return sign == 1 ? res : -res
};


console.log(divide(5, 1))