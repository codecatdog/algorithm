/* 
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0 || n == 1) return n;
    var n1 = 0;
    var n2 = 1;
    for(var i = 2; i <= n; i ++) {
        var tmp = n2;
        n2 = (n1 + n2) % 1000000007; //循环求余法: 大数越界: 随着n增大, f(n)会超过Int32甚至Int64的取值范围,导致最终的返回值错误。
        n1 = tmp;
    }
    return n2;
};

console.log(fib(81))