/**
 * 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
 * 
 * 1 <= nums.length <= 10000
 * 1 <= nums[i] < 2^31
 * 
 * 思路: 因为数组中除了一个数字外，其余数字出现的次数为3次，那么对于二进制位来说，这些数字每一位
 * 出现的次数一定也是3的倍数， 因此从二进制位出发，按位求出每一位出现的1的次数，再对3求余，那么
 * 结果一定是唯一那个数在该二进制位的值
 * 
 * 例如： [1, 1, 1, 3]
 *       001 001 001 011
 * 从右往左，所有数第一个二进制位相加，再对3求余，为1；第二个二进制位为1，第三个为0；正好
 * 对应3的二进制位：011
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let i = 1, m = 1;
    let ans = 0;
    let count = 0;
    while(i <= 32) {
        for(let j = 0; j < nums.length; j ++) {
            count += (nums[j] & m);
        }

        ans |= (count % 3 ? m : 0);
        m <<= 1;
        count = 0;
        i ++;
    }
    return ans;
    
};

/**
 * 思路2：有限自动状态机
 * 在此题中，对于二进制位某一位出现的次数来说，只有三种可能：0， 1， 2
 * 我们用两个二进制位来表示三种状态： 00 01 10
 * 
 * 则状态转换表：
 * 输入0 ，都不变
 * 输入1 ， 00 -> 01 -> 10 -> 00
 * 
 * 我们用two, one分别代表两位
 * 
 * 则one计算规则：
 * if(two == 0) {
 *      if(input == 1) one = ~ one
 *      if(input == 0) one = one
 * }
 * if(two == 1){
 *      one = 0
 * }
 * 
 * 使用位运算简化算法：two==0时，one = one ^ input
 * 再进一步简化 one = one ^ input & ~two
 * 
 * two根据更新后的one进行求解，最后得出 two = two ^ input & ~one
 * 
 * 通过遍历nums，这里的input就相当于是下一个元素对应的位;
 * 对于此题，遍历完所有数字后，各二进制位都处于状态 00 和状态 01,所以最后返回ones即可
 * 
 * @param {number[]} nums 
 */
var singleNumber1 = function(nums) {
    let ones = 0, twos = 0;
    for(let i = 0; i < nums.length; i ++) {
        ones = ones ^ nums[i] & ~twos;
        twos = twos ^ nums[i] & ~ones;

    }
    return ones;
}

console.log(singleNumber1(nums = [3,1,3,3]))