/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * @level ⭐
 * @tags Array
 * @similars
 * @end
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 */

// @lc code=start
/**
 * 题解思路：
 * 不用变量存储进位，直接从后向前遍历，对每一位加 1 并模 10，如果结果为 0，
 * 则证明产生了进位，继续遍历；否则运算结束，返回结果。
 * 如果一直进位，即遍历结束也没有返回，最前面补 1。
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;

    if (digits[i] !== 0) {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};

/**
 * 正常思路：
 * 有一个变量（如：carry）存储进位，然后像正常的数学运算一样，一直向前加进位，
 * 直到没有进位，或者运算结束进到最高位，然后最前面补 1。
 */
var plusOne = function (digits) {
  let carry = 1; // 进位。初始为 1 表示加一操作
  let temp = -1;

  for (let i = digits.length - 1; i >= 0; i--) {
    temp = digits[i] + carry;
    digits[i] = temp % 10;
    carry = Math.floor(temp / 10);

    // 不进位
    if (carry === 0) {
      return digits;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
};
// @lc code=end
