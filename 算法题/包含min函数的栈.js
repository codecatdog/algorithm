/*  定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2. */

/*  使用两个栈 stack, mStack
    stack用做数据栈
    mStack作为辅助栈，用于存数据中非严格降序的数据，则mStack中栈顶元素就是当前最小的元素
    入栈时： stack正常入栈， mStack比较元素与栈顶元素的大小，小于等于则入栈
    出栈时： stack正常出栈，mStack比较元素与栈顶元素是否相等，相等则同时出栈
*/

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = [];
    this.mStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.mStack.length) {
        this.mStack[this.mStack.length - 1] < x ? undefined : this.mStack.push(x);
    } else {
        this.mStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length == 0) return null;
    let val = this.stack.pop();
    if(val == this.mStack[this.mStack.length - 1]) this.mStack.pop();
    return val;

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.mStack[this.mStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */