/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if(num1 === '0' || num2 === '0') {
        return num1 === '0' ? num2 : num1;
    }
    let carry = 0; // 记录进位
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;

    let res = '';
    while(p1 >= 0 || p2 >= 0) {
        let n1 = p1 >= 0 ? num1.charAt(p1) - '0' : 0;
        let n2 = p2 >= 0 ? num2.charAt(p2) - '0' : 0;

        res = (n1 + n2 + carry) % 10 + res;
        carry = Math.floor((n1 + n2 + carry) / 10);

        p1--;
        p2--;
    }
    if(carry > 0) {
        res = '1' + res;
    }
    return res;
};

console.log(addStrings(num1 = "0", num2 = "9999"))