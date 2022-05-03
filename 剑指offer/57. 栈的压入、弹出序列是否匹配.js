/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈
 * 的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列
 * 对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
 * 
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let len = pushed.length;
    let stack = [];  // 模拟入栈出栈操作
    let k = 0;
    for(let i = 0; i < len; i ++) {
        let num = pushed[i];
        stack.push(num); // 将pushed数组的元素依次入栈
        while(stack.length && stack[stack.length - 1] === popped[k]) {  
            // 判断当前栈顶元素和当前poped元素是否相等，相等则出栈
            stack.pop();
            k ++; // 指向下一个poped元素
        }
    }

    return stack.length === 0;
};

console.log(validateStackSequences(pushed = [1,2,3,4,5], popped = [4,3,5,1,2]))