/**
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 
 * 数值（按顺序）可以分成以下几个部分：
 * 1. 若干空格
 * 2. 一个 小数 或者 整数
 * 3.（可选）一个 'e' 或 'E' ，后面跟着一个 整数
 * 4. 若干空格
 * 
 * 小数（按顺序）可以分成以下几个部分：
 * 1.（可选）一个符号字符（'+' 或 '-'）
 * 2. 下述格式之一：
 *      至少一位数字，后面跟着一个点 '.'
 *      至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
 *      一个点 '.' ，后面跟着至少一位数字
 * 
 * 整数（按顺序）可以分成以下几个部分：
 * 1.（可选）一个符号字符（'+' 或 '-'）
 * 2. 至少一位数字
 * 
 * 思路： 有限自动状态机
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const STATE = { // 所有的状态
        INITIAL_SPACE: 'INITIAL_SPACE', // 起始空格
        INITIAL_SIGN: 'INITIAL_SIGN', // 起始符号位
        INT: 'INT', // 整数部分
        POINT_WITHOUT_INT: 'POINT_WITHOUT_INT', // 小数点(左侧无整数部分)
        POINT: 'POINT',  // 小数点(左侧有整数部分)
        FRACTION: 'FRACTION', // 小数部分
        EXP: 'EXP', //E
        EXP_SIGN: 'EXP_SIGN', // 指数部分的符号位
        EXP_INT: 'EXP_INT', // 指数部分的整数部分
        END_SPACE: 'END_SPACE' // 末尾空格
    };
    const OPARATE = { // 所有输入操作
        CHAR_SPACE: 'CHAR_SPACE',  // 空格
        CHAR_NUMBER: 'CHAR_NUMBER', // 数值
        CHAR_POINT: 'CHAR_POINT', // 小数点
        CHAR_EXP: 'CHAR_EXP', // e
        CHAR_SIGN: 'CHAR_SIGN',  // 符号位 +/-
        CHAR_ILLEGAL: 'CHAR_ILLEGAL'  // 其他非法输入
    };

    const Transfer = { // 定义状态转换表
        [STATE.INITIAL_SPACE]: {
            [OPARATE.CHAR_SPACE]: STATE.INITIAL_SPACE,
            [OPARATE.CHAR_SIGN]: STATE.INITIAL_SIGN,
            [OPARATE.CHAR_NUMBER]: STATE.INT,
            [OPARATE.CHAR_POINT]: STATE.POINT_WITHOUT_INT 
        },
        [STATE.INITIAL_SIGN]: {
            [OPARATE.CHAR_NUMBER]: STATE.INT,
            [OPARATE.CHAR_POINT]: STATE.POINT_WITHOUT_INT
        },
        [STATE.INT]: {
            [OPARATE.CHAR_POINT]: STATE.POINT,
            [OPARATE.CHAR_EXP]: STATE.EXP,
            [OPARATE.CHAR_NUMBER]: STATE.INT,
            [OPARATE.CHAR_SPACE]: STATE.END_SPACE
        },
        [STATE.POINT]: {
            [OPARATE.CHAR_EXP]: STATE.EXP,
            [OPARATE.CHAR_NUMBER]: STATE.FRACTION,
            [OPARATE.CHAR_SPACE]: STATE.END_SPACE
        },
        [STATE.POINT_WITHOUT_INT]: {
            [OPARATE.CHAR_NUMBER]: STATE.FRACTION
        },
        [STATE.FRACTION]: {
            [OPARATE.CHAR_NUMBER]: STATE.FRACTION,
            [OPARATE.CHAR_EXP]: STATE.EXP,
            [OPARATE.CHAR_SPACE]: STATE.END_SPACE
        },
        [STATE.EXP]: {
            [OPARATE.CHAR_SIGN]: STATE.EXP_SIGN,
            [OPARATE.CHAR_NUMBER]: STATE.EXP_INT
        },
        [STATE.EXP_SIGN]: {
            [OPARATE.CHAR_NUMBER]: STATE.EXP_INT
        },
        [STATE.EXP_INT]: {
            [OPARATE.CHAR_NUMBER]: STATE.EXP_INT,
            [OPARATE.CHAR_SPACE]: STATE.END_SPACE
        },
        [STATE.END_SPACE]: {
            [OPARATE.CHAR_SPACE]: STATE.END_SPACE
        }
    }

    // 将字符转换为输入类型
    function charToType(char) {
        if(char === ' ') return OPARATE.CHAR_SPACE;
        else if(char >= '0' && char <= 9) return OPARATE.CHAR_NUMBER;
        else if(char === 'e' || char === 'E') return OPARATE.CHAR_EXP;
        else if(char === '+' || char === '-') return OPARATE.CHAR_SIGN;
        else if(char === '.') return OPARATE.CHAR_POINT;
        else return OPARATE.CHAR_ILLEGAL;
    }

    let state = STATE.INITIAL_SPACE;
    for(let i = 0; i < s.length; i ++) {
        let type = charToType(s[i]);
        if(!Transfer[state][type]) {
            return false;
        }
        state = Transfer[state][type];
    }
    return state === STATE.INT || state === STATE.FRACTION || state === STATE.POINT || state === STATE.EXP_INT || state === STATE.END_SPACE;
};

console.log(isNumber('1 ')) 

