/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
 * 示例 1:
 *  输入: n = 1
 *  输出: [1,2,3,4,5,6,7,8,9]
 * 
 * Array.from可以通过以下方式来创建数组对象
	1. 伪数组(拥有一个length属性和若干索引属性的任意对象)
	2. 可迭代对象(可以获取对象中的元素，如Map和Set等)
Array.from()方法有一个可选参数mapFn,让你可以在最后生成的数组上，再执行一次map方法后再返回。
即Array.from(obj,mapFn,thisArg)相当于Array.from(obj).map(mapFn,thisArg);

 */

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    // 1. 求出数组长度 (10 ^ n) - 1
    let len = Math.pow(10, n) - 1;
    
    // 利用Array.form 创建数组
    return Array.from({length: len}, (_v, k) => k + 1);
};

console.log(printNumbers(3))